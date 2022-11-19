export const BLOG_CATEGORIES = [
  "programming",
  "math & science",
  "school",
  "travel",
  "others",
] as const;

export type BlogCategoryType = typeof BLOG_CATEGORIES[number];

export type BlogCategoryTabType = BlogCategoryType | "recent";
