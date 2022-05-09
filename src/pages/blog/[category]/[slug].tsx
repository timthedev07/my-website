import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { readdirSync, readFileSync } from "fs";
import path, { join } from "path";
import matter from "gray-matter";
import { MarkdownMetadata } from "../../../types/posts";
import { useRef } from "react";
import { useOnScreen } from "../../../utils/hooks";
import { BlogComments } from "../../../components/BlogComments";
import markdownToHtml from "../../../utils/markdown";

interface Props {
  content: string;
  metadataAsString: string;
  slug: string;
}

const Slug: NextPage<Props> = ({ content, metadataAsString, slug }) => {
  const metadata: MarkdownMetadata = JSON.parse(metadataAsString);
  const ref = useRef<HTMLDivElement | null>(null);
  const loadComments = useOnScreen(ref);

  const xPaddings = "md:px-24 px-6";

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
          className={`w-[95%] md:w-[90%] md:max-w-4xl lg:max-w-5xl md:bg-slate-900 rounded-lg m-6`}
        >
          <article
            className={`flex child-headings:font-semibold child-list:list-disc child-list:list-inside child-list:text-white/70 child-paragraphs:text-white/70 flex-col gap-4 pt-20 md:pt-8 pb-10 ${xPaddings} child-images:rounded-xl child-images:shadow-xl child-code:rounded-lg`}
            dangerouslySetInnerHTML={{ __html: content }}
          ></article>

          <hr className="w-full h-[1px] border-t border-t-slate-400/30" />

          <div ref={ref} className={xPaddings + " py-10"}>
            {loadComments && <BlogComments blogId={slug} />}
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = readdirSync("posts");

  // const fileNames
  let fileNames: string[] = [];
  for (const category of categories) {
    fileNames = fileNames.concat(
      readdirSync(`posts/${category}`).map((each) => `${category}/${each}`)
    );
  }

  const paths = fileNames.map((fileName) => {
    const pieces = fileName.split(path.sep);

    return {
      params: {
        slug: pieces[pieces.length - 1].replace(".md", ""),
        category: pieces[0],
      },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug;
  const category = params!.category;

  const fileContent = readFileSync(
    join("posts", category as string, slug + ".md")
  ).toString();

  const withMetadata = matter(fileContent);

  return {
    props: {
      slug,
      content: await markdownToHtml(withMetadata.content),
      metadataAsString: JSON.stringify(withMetadata.data),
    } as Props,
  };
};

export default Slug;