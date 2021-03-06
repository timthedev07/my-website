import { useRouter } from "next/router";
import { FC } from "react";
import { BLOG_CATEGORIES } from "../types/blogCategories";

interface BlogTabsProps {
  currTab: string;
}

export const BlogTabs: FC<BlogTabsProps> = ({ currTab }) => {
  const router = useRouter();

  return (
    <ul className="w-full flex h-11">
      {["recent", ...BLOG_CATEGORIES].map((each) => (
        <li
          onClick={() => {
            router.query.category = each;
            router.push(router);
          }}
          className={`flex-1 select-none flex-grow text-center uppercase flex justify-center items-center ${
            each === currTab
              ? "border-b-2 border-b-neutral-200 bg-slate-600/20 text-white"
              : "text-white/60"
          } transition duration-200 hover:text-white hover:bg-slate-400/20 cursor-pointer`}
          key={each}
        >
          {each}
        </li>
      ))}
    </ul>
  );
};
