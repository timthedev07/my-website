import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { MarkdownMetadata } from "../../types/posts";
import marked from "marked";

interface Props {
  content: string;
  metadataAsString: string;
}

const Slug: NextPage<Props> = ({ content, metadataAsString }) => {
  const metadata: MarkdownMetadata = JSON.parse(metadataAsString);
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <div className="flex justify-center items-center">
        <div
          className="prose dark:prose-light lg:prose-base"
          dangerouslySetInnerHTML={{ __html: content }}
        />
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
  const fileContent = readFileSync(
    join("posts", params!.slug + ".md")
  ).toString();

  const withMetadata = matter(fileContent);

  return {
    props: {
      content: marked(withMetadata.content),
      metadataAsString: JSON.stringify(withMetadata.data),
    } as Props,
  };
};

export default Slug;
