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
  const names = fnames.map((fname) => {
    const p = path.join(PROJECTS_DATA_DIR, fname);
    const meta = matter({ content: readFileSync(p) }).data;
    const name = meta.name as string;
    return { fname, name, meta };
  });

  switch (withExtension) {
    case true: {
      return names;
    }
    case false: {
      return names.map(({ fname, name, meta }) => {
        return {
          name,
          fname: fname.replace(".mdx", ""),
          meta,
        };
      });
    }
  }
};

export const getProjectMDX = (slug: string) => {
  const f = readFileSync(path.join(PROJECTS_DATA_DIR, slug + ".mdx")).toString(
    "utf-8"
  );
  return matter(f);
};
