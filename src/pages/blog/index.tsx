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
import { BlogTabs } from "../../components/BlogTabs";
import { Menu, MenuButton, MenuItem, MenuList } from "dragontail-experimental";

interface Props {
  groupedBlogs: BlogGroups;
}

const Blogs: NextPage<Props> = ({ groupedBlogs: filenamesWithMetadata }) => {
  const router = useRouter();
  const { query, isReady } = router;
  const { setNavTransparent, windowSize } = useNavContext();
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

      {windowSize ? (
        windowSize > 800 ? (
          <BlogTabs currTab={currTab} />
        ) : (
          <Menu className="m-6">
            <MenuButton className="capitalize">{currTab || ""}</MenuButton>
            <MenuList>
              {["recent", ...BLOG_CATEGORIES]
                .filter((val) => val !== currTab)
                .map((each) => (
                  <MenuItem
                    onClick={() => {
                      router.query.category = each;
                      router.push(router);
                    }}
                    className="capitalize"
                    key={each}
                  >
                    {each}
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        )
      ) : (
        ""
      )}

      <ol className="w-full flex gap-5 p-8 flex-wrap justify-center md:justify-start">
        {filenamesWithMetadata[currTab]
          .sort(
            (a, b) =>
              new Date(JSON.parse(b.metadata).date).valueOf() -
              new Date(JSON.parse(a.metadata).date).valueOf()
          )
          .map(({ filename, metadata: metadataAsString }) => {
            const metadata = JSON.parse(metadataAsString) as MarkdownMetadata;
            return (
              <Link passHref key={filename} href={`/blog/${filename}`}>
                <li className="max-w-xs w-[90%] md:w-auto h-auto cursor-pointer bg-slate-300/20 shadow-xl rounded-md my-6 transition ease-out duration-200 transform hover:-translate-y-1 hover:shadow-xl-theme-color ">
                  <img
                    src={`/thumbnails/${filename}.png`}
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
  const categories = readdirSync("posts");
  let fileNames: string[] = [];

  for (const category of categories) {
    fileNames = fileNames.concat(
      readdirSync(`posts/${category}`).map((each) => `${category}/${each}`)
    );
  }

  const fileNamesWithMetadata = groupBlogs(
    fileNames.map((fileName) => {
      const mdFileNameArr = fileName.replace(".md", "").split("/");

      return {
        filename: mdFileNameArr[mdFileNameArr.length - 1],
        metadata: JSON.stringify(getPostMetadata(fileName)),
      };
    })
  );

  return {
    props: {
      groupedBlogs: fileNamesWithMetadata,
    } as Props,
  };
};

export default Blogs;
