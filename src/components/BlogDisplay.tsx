import { FC } from "react";
import { MDXBlogMeta } from "../lib/blog";
import Link from "next/link";
import Image from "next/image";
import { blurDataUrl } from "../utils/blurDataUrl";
import { Button } from "dragontail-experimental";
import { beautifyCategoryName } from "./BlogTabs";
import { BlogCategoryIcons } from "./svgs/blog-category";
import { BlogCategoryType } from "../types/blogCategories";

interface BlogDisplayProps {
  filename: string;
  metadata: MDXBlogMeta;
  category: string;
}

export const SmallBlogDisplay: FC<BlogDisplayProps> = ({
  filename,
  metadata,
  category,
}) => {
  const Icon = BlogCategoryIcons[category as BlogCategoryType];

  return (
    <li className="flex flex-col gap-4 w-min">
      <div className="relative w-80 h-80 rounded-t-md">
        <Image
          placeholder="blur"
          blurDataURL={blurDataUrl}
          src={`/thumbnails/${metadata.thumbnail || filename}.png`}
          alt={filename}
          fill
          className="rounded-xl"
        />
      </div>
      <span className="text-base text-blue-400 flex gap-2 items-center font-bold">
        {<Icon className="w-4 h-4" />} {beautifyCategoryName(category)}
      </span>
      <div className="w-80">
        <div className="text-xl font-semibold">
          {metadata.title
            .split(" ")
            .map((each) => each[0].toUpperCase() + each.slice(1))
            .join(" ")}
        </div>
        <Link passHref key={filename} href={`/blog/${category}/${filename}`}>
          <Button variant="outline" color="teal">
            Read More
          </Button>
        </Link>
      </div>
    </li>
  );
};

/**
<li className="w-80 md:w-96 h-auto cursor-pointer bg-slate-500/30 rounded-md my-6 transition ease-out duration-200 transform hover:-translate-y-1 hover:shadow-xl-theme-color">
        <div className="relative w-80 md:w-96 h-80 md:h-96 rounded-t-md">
          <Image
            placeholder="blur"
            blurDataURL={blurDataUrl}
            src={`/thumbnails/${metadata.thumbnail || filename}.png`}
            alt={filename}
            fill
            className="rounded-t-md"
          />
        </div>
        <div className="p-6 flex flex-col justify-between h-48">

        </div>
      </li>
 */
