import matter from "gray-matter";
import { readFileSync, readdirSync } from "node:fs";
import { join, sep } from "node:path";
import { serialize } from "next-mdx-remote/serialize";
import { groupBlogs } from "../utils/groupBlogs";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkUnwrapImages from "remark-unwrap-images";

export type DirType = "blog-mdx" | "experiences-mdx"

export interface MDXBlogMeta {
  title: string;
  description: string;
  date: string;
  keywords: string[];
  category: string;
  thumbnail?: string;
}

export interface MDXData {
  compiledSource: string;
  frontmatter: MDXBlogMeta;
  scope: Record<string, unknown>;
}

export const getMetadataFromMDXFile = (slug: string, category: string, dataDir: DirType = "blog-mdx") => {
  const fileContent = readFileSync(
    join("src", dataDir, category as string, slug + ".mdx")
  ).toString();
  return getMetadataFromMDXStr(fileContent, category);
};

export const getMetadataFromMDXStr = (
  content: string,
  category: string
): MDXBlogMeta => {
  return {
    ...(matter(content).data as any),
    category,
  };
};

export const readMDX = async (
  slug: string,
  category: string,
  dataDir: DirType = "blog-mdx"
): Promise<MDXData> => {
  const fileContent = readFileSync(
    join("src", dataDir, category as string, slug + ".mdx")
  ).toString();

  const { content, data } = matter(fileContent);

  const { compiledSource, scope } = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath, remarkUnwrapImages],
      rehypePlugins: [
        rehypeHighlight,
        [rehypeKatex, { strict: true }],
        rehypeAutolinkHeadings,
      ],
    },
  });

  return {
    compiledSource,
    scope,
    frontmatter: {
      category,
      ...data,
    } as MDXBlogMeta,
  };
};

export const getBlogsWithMetadata = async (dataDir: DirType = "blog-mdx") => {
  const categories = readdirSync(join("src", dataDir));
  let fileNames: string[] = [];

  for (const category of categories) {
    fileNames = fileNames.concat(
      readdirSync(join("src", dataDir, category)).map(
        (each) => `${category}/${each}`
      )
    );
  }

  return groupBlogs(
    fileNames.map((fileName) => {
      const mdFileNameArr = fileName.replace(".mdx", "").split(sep);

      const slug = mdFileNameArr[mdFileNameArr.length - 1];
      const category = mdFileNameArr[0];

      return {
        filename: slug,
        metadata: JSON.stringify(getMetadataFromMDXFile(slug, category)),
        category: category as any,
      };
    })
  );
};
