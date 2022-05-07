import type { GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import Link from "next/link";
import { getPostMetadata } from "../../utils/post";
import { MarkdownMetadata } from "../../types/posts";
import { useNavContext } from "../../components/nav/Navbar";
import { useEffect, useState } from "react";
import {
  BlogCategoryTabType,
  BLOG_CATEGORIES,
} from "../../types/blogCategories";
import { BlogGroups, groupBlogs } from "../../utils/groupBlogs";
import { useRouter } from "next/router";

interface Props {
  groupedBlogs: BlogGroups;
}

const Blogs: NextPage<Props> = ({ groupedBlogs: filenamesWithMetadata }) => {
  const router = useRouter();
  const { query, isReady, push } = router;
  const { setNavTransparent } = useNavContext();
  const [currTab, setCurrTab] = useState<BlogCategoryTabType>(() => "recent");

  useEffect(() => {
    if (!query.category) return;
    if (
      ["recent", ...BLOG_CATEGORIES].findIndex(
        (val) => val === query.category
      ) < 0
    )
      return;
    setCurrTab(query.category as any);
  }, [isReady, query]);

  useEffect(() => {
    setNavTransparent(true);
  }, [setNavTransparent]);

  return (
    <>
      <header className="relative w-full h-72 flex justify-center items-center">
        <img
          src="/images/blog-heading.jpg"
          className="absolute w-full h-full object-cover brightness-[0.6] pointer-events-none"
          alt=""
        />
        <h2 className="text-center absolute font-medium uppercase select-none">
          My Blog
        </h2>
      </header>
      <ul className="w-full flex h-11">
        {["recent", ...BLOG_CATEGORIES].map((each) => (
          <li
            onClick={() => {
              router.query.category = each;
              push(router);
            }}
            className={`flex-1 select-none flex-grow text-center uppercase flex justify-center items-center ${
              each === currTab
                ? "border-b-2 border-b-neutral-200 bg-slate-600/20"
                : ""
            } transition duration-200 hover:bg-slate-400/20 cursor-pointer`}
            key={each}
          >
            {each}
          </li>
        ))}
      </ul>
      <ol className="w-full flex gap-5 p-8 flex-wrap">
        {filenamesWithMetadata[currTab]
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

  const fileNamesWithMetadata = groupBlogs(
    fileNames.map((fileName) => ({
      filename: fileName.replace(".md", ""),
      metadata: JSON.stringify(getPostMetadata(fileName)),
    }))
  );

  return {
    props: {
      groupedBlogs: fileNamesWithMetadata,
    } as Props,
  };
};

export default Blogs;
