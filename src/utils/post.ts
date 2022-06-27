import matter from "gray-matter";
import { MarkdownMetadata } from "../types/posts";
import { readFileSync } from "fs";
import { join } from "path";

export const getPostMetadata = (filename: string): MarkdownMetadata => {
  const fileContent = readFileSync(join("posts", filename)).toString();
  const { data } = matter(fileContent);

  return data as MarkdownMetadata;
};
