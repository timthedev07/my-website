import type { GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import Link from "next/link";
import { getPostMetadata } from "../../utils/post";
import { MarkdownMetadata } from "../../types/posts";
import { useNavContext } from "../../components/nav/Navbar";
import { useEffect } from "react";

interface Props {
  filenamesWithMetadata: { filename: string; metadata: string }[];
}

const Blogs: NextPage<Props> = ({ filenamesWithMetadata }) => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(true);
  }, [setNavTransparent]);

  return (
    <>
      <header className="relative w-full h-72 flex justify-center items-center">
        <img
          src="/images/blog-heading.jpg"
          className="absolute w-full h-full object-cover brightness-[0.6]"
          alt=""
        />
        <h2 className="text-center absolute font-medium uppercase">My Blog</h2>
      </header>
      <ol className="w-full flex gap-5 p-8 flex-wrap">
        {filenamesWithMetadata
          .sort(
            (a, b) =>
              new Date(JSON.parse(b.metadata).date).valueOf() -
              new Date(JSON.parse(a.metadata).date).valueOf()
          )
          .map(({ filename, metadata: metadataAsString }) => {
            const metadata = JSON.parse(metadataAsString) as MarkdownMetadata;
            const datePieces = metadata.date.split("-");
            return (
              <Link passHref key={filename} href={`/blog/${filename}`}>
                <li className="max-w-xs w-[90%] md:w-auto h-auto cursor-pointer bg-slate-300/20 shadow-xl rounded-md my-6 transition ease-out duration-200 transform hover:-translate-y-1 hover:shadow-xl-theme-color ">
                  <img
                    src={`/thumbnails/${datePieces[0]}-${
                      datePieces[1]
                    }-${datePieces[2].slice(0, 2)}.png`}
                    alt=""
                    className="w-full h-auto rounded-t-md"
                  />
                  <div className="p-6 flex flex-col gap-2">
                    <div className="text-xl">
                      {filename
                        .split("-")
                        .map(
                          (each) => each.charAt(0).toUpperCase() + each.slice(1)
                        )
                        .join(" ")}
                    </div>
                    <div className="text-white/60">
                      {new Date(metadata.date).toDateString()}
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
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
