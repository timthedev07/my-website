import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { MarkdownMetadata } from "../../types/posts";
import { marked } from "marked";
import { CommentForm } from "../../components/CommentForm";
import { useRef, useState } from "react";
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

  return (
    <>
      <Head>
        <title>{metadata.title} - Tim&apois;s Blog</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <section
          className={`flex flex-col gap-4 pb-36 w-[95%] md:w-[90%] md:max-w-[50rem] md:border-2 md:border-slate-400/50 md:bg-slate-900 rounded-xl px-6 md:px-24 m-6 pt-20 md:pt-8`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <section className="w-full mb-12 flex flex-col justify-start items-center">
          <hr
            className={`border-t border-t-slate-200/60 h-[1px] w-full md:w-[90%] m-auto my-8`}
          />
          <div className="w-[85%] md:w-[70%] lg:w-[55%]" ref={ref}>
            {loadComments && (
              <>
                {/* list of comments */}
                <BlogComments blogId={slug} />

                <CommentForm blogId={slug} className={"w-full m-auto"} />
              </>
            )}
          </div>
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
