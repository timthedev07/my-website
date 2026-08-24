"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { BLOG_CATEGORIES } from "../types/blogCategories";

interface BlogTabsProps {
  currTab: string;
  onTabChange?: Function;
}

export const beautifyCategoryName = (category: string, capitalize = false) => {
  const k = category.toLowerCase().replace(/-/g, " ").replace(/ and /g, " & ");
  if (capitalize) return k[0].toUpperCase() + k.slice(1);
  return k;
};

export const BlogTabs: FC<BlogTabsProps> = ({
  currTab,
  onTabChange = () => {},
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <ul className="w-full flex h-11">
      {["recent", ...BLOG_CATEGORIES].map((each) => (
        <li
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("category", each);
            router.push(`${pathname}?${params.toString()}`);
            onTabChange();
          }}
          className={`flex-1 select-none flex-grow text-center uppercase flex justify-center items-center ${
            each === currTab
              ? "border-b-2 border-b-neutral-200 bg-slate-600/20 text-white"
              : "text-white/60"
          } transition duration-200 hover:text-white hover:bg-slate-400/20 cursor-pointer`}
          key={each}
        >
          {beautifyCategoryName(each)}
        </li>
      ))}
    </ul>
  );
};
