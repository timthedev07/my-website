import { MDXBlogMeta } from "../lib/mdx";
import {
  BlogCategoryTabType,
  BlogCategoryType,
  BLOG_CATEGORIES,
} from "../types/blogCategories";

export type BlogFileInfo = {
  metadata: string;
  filename: string;
  category: BlogCategoryType;
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
    const blogMetadata = JSON.parse(blog.metadata) as MDXBlogMeta;
    blogMetadata.category = blog.category;
    grouped[blog.category as BlogCategoryTabType].push({
      ...blog,
      metadata: JSON.stringify(blogMetadata),
    });
  }

  return grouped;
};
