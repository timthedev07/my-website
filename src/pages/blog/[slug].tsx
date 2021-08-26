import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

interface Props {
  slug: string;
  content: string;
}

const Slug: NextPage<Props> = ({ slug, content }) => {
  return (
    <>
      <div>Slug {slug}:</div>
      <pre>{content}</pre>
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
  const { slug } = params as any as Props;
  const content = readFileSync(join("posts", slug + ".md")).toString();

  return {
    props: {
      slug,
      content,
    },
  };
};

export default Slug;
