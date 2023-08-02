import { readFileSync, readdirSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkUnwrapImages from "remark-unwrap-images";
import { MDXDataBase } from "../mdx";

const CAS_ROOT = "ib-cas-mdx";

const DATA_DIR = join(CAS_ROOT, "reflections");

export const getYearAndMonth = (yearMonth: string) => {
  return yearMonth.split("-");
};

export const getAllMonths = () => {
  return [
    ...new Set(
      readdirSync(join("src", DATA_DIR)).map((each) => each.slice(0, 7))
    ),
  ]
    .sort()
    .reverse(); // sort descending, latest first
};

export const groupByYear = (yearMonths: string[]) => {
  // this maps yyyy to yyyy-mm
  const groups: Record<string, string[]> = {};
  for (const yearMonth of yearMonths) {
    const [year] = getYearAndMonth(yearMonth);
    groups[year].push(yearMonth);
  }

  return groups;
};

export const getMonthEntries = async (month: string) => {
  const filenames = readdirSync(join("src", DATA_DIR))
    .filter((each) => each.startsWith(month))
    .sort()
    .reverse();
  // compiled mdx source and unix timestamp for date display
  const entries: [MDXDataBase, number][] = [];

  for (const filename of filenames) {
    const data = await serialize(
      readFileSync(join("src", DATA_DIR, filename)),
      {
        mdxOptions: {
          remarkPlugins: [remarkUnwrapImages],
          rehypePlugins: [rehypeAutolinkHeadings],
        },
      }
    );
    entries.push([data, new Date(filename.replace(".mdx", "")).valueOf()]);
  }

  return entries;
};
