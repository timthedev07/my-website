import { readFileSync, readdirSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkUnwrapImages from "remark-unwrap-images";
import { MDXDataBase } from "../mdx";
import matter from "gray-matter";

export const CAS_ROOT = "src/ib-cas-mdx";

const DATA_DIR = join(CAS_ROOT, "reflections");

export const getAllMonths = () => {
  return [...new Set(readdirSync(DATA_DIR).map((each) => each.slice(0, 7)))]
    .sort()
    .reverse(); // sort descending, latest first
};

export const getMonthEntries = async (month: string) => {
  const filenames = readdirSync(DATA_DIR)
    .filter((each) => each.startsWith(month))
    .sort()
    .reverse();
  // compiled mdx source and unix timestamp for date display
  const entries: [MDXDataBase, number][] = [];

  for (const filename of filenames) {
    const { content /*data: metadata*/ } = matter(join(DATA_DIR, filename));
    const data = await serialize(readFileSync(content), {
      mdxOptions: {
        remarkPlugins: [remarkUnwrapImages],
        rehypePlugins: [rehypeAutolinkHeadings],
      },
    });
    entries.push([data, new Date(filename.replace(".mdx", "")).valueOf()]);
  }

  return entries;
};
