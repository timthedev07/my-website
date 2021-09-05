import type { GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import Link from "next/link";
import { getPostMetadata } from "../../utils/post";
import { MarkdownMetadata } from "../../types/posts";

interface Props {
  filenamesWithMetadata: { filename: string; metadata: string }[];
}

const Blogs: NextPage<Props> = ({ filenamesWithMetadata }) => {
  return (
    <>
      <h3 className="text-4xl mx-8">Posts:</h3>
      <ol className="w-full p-8">
        {filenamesWithMetadata.map(
          ({ filename, metadata: metadataAsString }) => {
            const metadata = JSON.parse(metadataAsString) as MarkdownMetadata;
            return (
              <Link key={filename} href={`blog/${filename}`}>
                <li className="w-full h-28 p-3  bg-component-primary-bg shadow-lg rounded-xl my-6">
                  <div className="text-xl">
                    {filename
                      .split("-")
                      .map(
                        (each) => each.charAt(0).toUpperCase() + each.slice(1)
                      )
                      .join(" ")}
                  </div>
                  <div>{new Date(metadata.date).toDateString()}</div>
                </li>
              </Link>
            );
          }
        )}
      </ol>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = readdirSync("posts");

  const fileNamesWithMetadata = fileNames.map((fileName) => ({
    filename: fileName.replace(".md", ""),
    metadata: JSON.stringify(getPostMetadata(fileName)),
  }));

  return {
    props: {
      filenamesWithMetadata: fileNamesWithMetadata,
    } as Props,
  };
};
export default Blogs;
