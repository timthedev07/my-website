import path from "path";
import { CAS_ROOT } from "./reflections-mdx";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export interface ProjectMeta {
  name: string;
  description: string;
  members: string[];
  startDate: string;
}

export const PROJECTS_DATA_DIR = path.join(CAS_ROOT, "projects");

export const getAllProjectEntries = (withExtension: boolean = false) => {
  const fnames = readdirSync(PROJECTS_DATA_DIR);

  switch (withExtension) {
    case true: {
      return fnames;
    }
    case false: {
      return fnames.map((each) => each.replace(".mdx", ""));
    }
  }
};

export const getProjectMDX = (slug: string) => {
  const f = readFileSync(path.join(PROJECTS_DATA_DIR, slug + ".mdx")).toString(
    "utf-8"
  );
  return matter(f);
};
