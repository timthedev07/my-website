import { BlogCategoryType } from "./blogCategories";

export interface MarkdownMetadata {
  title: string;
  description: string;
  date: string;
  category: BlogCategoryType;
  keywords: string[];
}
