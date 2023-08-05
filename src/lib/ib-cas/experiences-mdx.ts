// server side code for experiences pages
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { CAS_ROOT } from "./reflections-mdx";

const DATA_DIR = join(CAS_ROOT, "experiences");

export const getMetadataFromExperienceMDX = (rawFile: string) => {
  return matter(rawFile).data;
};

export interface ExperiencePreviewData {
  dateStr: string; // yyyy-mm-dd
  // for the following two fields, reference the corresponding section of metadata in the template file
  activity: string;
  description: string;
}

export const getAllEntriesW_Preview = () => {
  const allFileNames = readdirSync(DATA_DIR).sort().reverse();
  const entries: Array<ExperiencePreviewData> = [];

  for (const filename of allFileNames) {
    const rawFile = readFileSync(join(DATA_DIR, filename)).toString();
    const meta = getMetadataFromExperienceMDX(rawFile);
    entries.push({
      ...(meta as any),
      dateStr: filename.replace(".mdx", ""),
    });
  }

  return entries;
};