import { BlogCategoryTabType, BLOG_CATEGORIES } from "../types/blogCategories";
import { MarkdownMetadata } from "../types/posts";

export type BlogFileInfo = {
  metadata: string;
  filename: string;
};

export type BlogGroups = Record<BlogCategoryTabType, BlogFileInfo[]>;

export const groupBlogs = (blogs: BlogFileInfo[]): BlogGroups => {
  /* Sorting by date */
  const sortedBlogs = blogs.sort((a, b) => {
    return (
      new Date(JSON.parse(b.metadata).date).valueOf() -
      new Date(JSON.parse(a.metadata).date).valueOf()
    );
  });

  /* Grouping */
  const grouped: BlogGroups = {} as any;

  for (const category of BLOG_CATEGORIES) {
    grouped[category] = [];
  }

  grouped.recent = [...sortedBlogs];

  for (const blog of sortedBlogs) {
    const blogMetadata = JSON.parse(blog.metadata) as MarkdownMetadata;
    grouped[blogMetadata.category].push(blog);
  }

  return grouped;
};
