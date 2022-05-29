import type { NextPage } from "next";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import { MarkdownMetadata } from "../../../../types/posts";
import { getHeadForPage } from "../../../../utils/getHead";
import { readRemoteBlog } from "../../../../utils/GHRest";
import markdownToHtml from "../../../../utils/markdown";
import RichMarkdownEditor from "@davidilie/markdown-editor";

interface Props {
  content: string;
  metadataAsString: string;
  slug: string;
}

const Slug: NextPage<Props> = ({ content, metadataAsString, slug }) => {
  const metadata: MarkdownMetadata = JSON.parse(metadataAsString);
  content;

  return (
    <>
      {getHeadForPage({
        title: metadata.title,
        description: metadata.description,
        path: `/blog/${metadata.category}/${slug}`,
      })}
      <div className="w-full justify-center items-start">
        <RichMarkdownEditor className="w-[80%]" />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug;
  const category = params!.category;

  let fileContent: string;

  try {
    fileContent = await readRemoteBlog(`${category}/slug`);
  } catch (err) {
    return {
      notFound: true,
    };
  }

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
