export const BLOG_CATEGORIES = [
  "programming",
  "math-and-science",
  "school",
  "travel",
  "others",
] as const;

export type BlogCategoryType = typeof BLOG_CATEGORIES[number];

export type BlogCategoryTabType = BlogCategoryType | "recent";
