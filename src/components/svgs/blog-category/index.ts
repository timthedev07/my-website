import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { BlogCategoryType } from "../../../types/blogCategories";
import { MathScienceSVG } from "./icons/MathScience";

export const BlogCategoryIcons: Record<
  BlogCategoryType,
  ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >
> = {
  "math-and-science": MathScienceSVG,
  others: MathScienceSVG,
  programming: MathScienceSVG,
  learning: MathScienceSVG,
  travel: MathScienceSVG,
};
