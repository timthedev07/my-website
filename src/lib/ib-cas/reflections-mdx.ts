import { readFileSync, readdirSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkUnwrapImages from "remark-unwrap-images";

const CAS_ROOT = "ib-cas-mdx";

const DATA_DIR = join(CAS_ROOT, "reflections");

export const getAllMonths = () => {
  return [
    ...new Set(
      readdirSync(join("src", DATA_DIR)).map((each) => each.slice(0, 7))
    ),
  ]
    .sort()
    .reverse(); // sort descending, latest first
};

export const getMonthEntries = async (month: string) => {
  const filenames = readdirSync(join("src", DATA_DIR))
    .filter((each) => each.startsWith(month))
    .sort()
    .reverse();
  // compiled mdx source and unix timestamp for date display
  const entries: [string, number][] = [];

  for (const filename of filenames) {
    const { compiledSource } = await serialize(
      readFileSync(join("src", DATA_DIR, filename)),
      {
        mdxOptions: {
          remarkPlugins: [remarkUnwrapImages],
          rehypePlugins: [rehypeAutolinkHeadings],
        },
      }
    );
    entries.push([
      compiledSource,
      new Date(filename.replace(".mdx", "")).valueOf(),
    ]);
  }

  return entries;
};
