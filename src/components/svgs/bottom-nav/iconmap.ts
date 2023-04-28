import { AboutIcon } from "./about";
import { BlogIcon } from "./blog";
import { ContactIcon } from "./contact";
import { HomeIcon } from "./home";
import { CASSVG } from "./ib-cas";
import { ProjectsIcon } from "./projects";

export const BOTTOM_NAV_ICON_MAP: Record<string, any> = {
  home: HomeIcon,
  contact: ContactIcon,
  about: AboutIcon,
  blog: BlogIcon,
  projects: ProjectsIcon,
  "ib-cas": CASSVG,
};
