import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { BlogCategoryType } from "../../../types/blogCategories";
import { MathScienceSVG } from "./icons/MathScience";
import { LearningSVG } from "./icons/Learning";
import { OthersSVG } from "./icons/Others";
import { ProgrammingSVG } from "./icons/Programming";
import { TravelSVG } from "./icons/Travel";

export const BlogCategoryIcons: Record<
  BlogCategoryType,
  ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >
> = {
  "math-and-science": MathScienceSVG,
  others: OthersSVG,
  programming: ProgrammingSVG,
  learning: LearningSVG,
  travel: TravelSVG,
};
