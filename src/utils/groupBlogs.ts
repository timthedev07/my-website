import { BlogCategoryTabType, BLOG_CATEGORIES } from "../types/blogCategories";
import { MarkdownMetadata } from "../types/posts";

export type BlogFileInfo = {
  metadata: string;
  filename: string;
};

export type BlogGroups = Record<BlogCategoryTabType, BlogFileInfo[]>;

export const groupBlogs = (blogs: BlogFileInfo[]): BlogGroups => {
  const grouped: BlogGroups = {} as any;

  for (const category of BLOG_CATEGORIES) {
    grouped[category] = [];
  }

  grouped.recent = [...blogs];

  for (const blog of blogs) {
    const blogMetadata = JSON.parse(blog.metadata) as MarkdownMetadata;
    grouped[blogMetadata.category].push(blog);
  }

  return grouped;
};
