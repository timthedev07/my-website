import matter from "gray-matter";
import { MarkdownMetadata } from "../types/posts";
import { readFileSync } from "fs";
import { join } from "path";
import { readRemoteBlog } from "./GHRest";

export const getPostMetadata = (filename: string): MarkdownMetadata => {
  const fileContent = readFileSync(join("posts", filename)).toString();
  const { data } = matter(fileContent);

  return data as MarkdownMetadata;
};

export const getRemotePostMetadata = async (
  filename: string
): Promise<MarkdownMetadata> => {
  const fileContent = await readRemoteBlog(filename);
  const { data } = matter(fileContent);

  return data as MarkdownMetadata;
};
