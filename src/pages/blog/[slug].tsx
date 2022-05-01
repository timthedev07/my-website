import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { MarkdownMetadata } from "../../types/posts";
import { marked } from "marked";
import { CommentForm } from "../../components/CommentForm";
import { useRef } from "react";
import { useOnScreen } from "../../utils/hooks";
import { BlogComments } from "../../components/BlogComments";

interface Props {
  content: string;
  metadataAsString: string;
  slug: string;
}

const Slug: NextPage<Props> = ({ content, metadataAsString, slug }) => {
  const metadata: MarkdownMetadata = JSON.parse(metadataAsString);
  const ref = useRef<HTMLDivElement | null>(null);
  const loadComments = useOnScreen(ref);

  const widths = "w-[90%] md:max-w-2xl";

  return (
    <>
      <Head>
        <title>{metadata.title} - Tim&apois;s Blog</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
      </Head>
      <div className="flex flex-col justify-center items-center pt-24 sm:pt-0">
        <section
          className={`flex flex-col gap-4 pb-36 ${widths}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <section className="w-full mb-12 flex flex-col justify-start items-center">
          <hr
            className={`border-t border-t-slate-200/60 h-[1px] w-full md:w-[90%] m-auto my-8`}
          />
          {/* list of comments */}
          <div className="w-[90%]" ref={ref}>
            <BlogComments blogId={slug} />
          </div>

          {/* write comment form */}
          {/* <CommentForm blogId={slug} className={widths + " m-auto"} /> */}
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = readdirSync("posts");

  const paths = fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug;
  const fileContent = readFileSync(join("posts", slug + ".md")).toString();

  const withMetadata = matter(fileContent);

  return {
    props: {
      slug,
      content: marked(withMetadata.content),
      metadataAsString: JSON.stringify(withMetadata.data),
    } as Props,
  };
};

export default Slug;
