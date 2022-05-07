export const BLOG_CATEGORIES = [
  "programming",
  "math",
  "school",
  "travel",
  "books",
] as const;

export type BlogCategoryType = typeof BLOG_CATEGORIES[number];
