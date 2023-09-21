// server side code for experiences pages
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { CAS_ROOT } from "./reflections-mdx";

export const EXPERIENCES_DATA_DIR = join(CAS_ROOT, "experiences");

export const getMetadataFromMDX = (rawFile: string) => {
  return matter(rawFile).data;
};

export interface ExperiencePreviewData {
  dateStr: string; // yyyy-mm-dd
  // for the following two fields, reference the corresponding section of metadata in the template file
  activity: string;
  description: string;
}

export const getAllEntriesW_Preview = () => {
  const allFileNames = readdirSync(EXPERIENCES_DATA_DIR).sort().reverse();
  const entries: Array<ExperiencePreviewData> = [];

  for (const filename of allFileNames) {
    const rawFile = readFileSync(
      join(EXPERIENCES_DATA_DIR, filename)
    ).toString();
    const meta = getMetadataFromMDX(rawFile);
    entries.push({
      ...(meta as any),
      dateStr: filename.replace(".mdx", ""),
    });
  }

  return entries;
};

export const getEntryRawContent = (dateStr: string) => {
  const available = readdirSync(EXPERIENCES_DATA_DIR);
  const fname = dateStr + ".mdx";

  if (available.indexOf(fname) < 0) return null;

  return matter(readFileSync(join(EXPERIENCES_DATA_DIR, fname)).toString());
};

export const getAllAvailablePaths = (dataDir: string) => {
  return readdirSync(dataDir)
    .map((each) => each.replace(".mdx", ""))
    .sort()
    .reverse();
};

export const getAdjacentEntries = (currDateStr: string) => {
  const defaultVal = {
    display: undefined,
    url: undefined,
  };
  let next, prev;
  const all = getAllAvailablePaths(EXPERIENCES_DATA_DIR);
  const i = all.indexOf(currDateStr);

  next =
    i === 0
      ? defaultVal
      : {
          display: all[i - 1],
          url: `/ib/cas/experiences/${all[i - 1]}`,
        };

  prev =
    i === all.length - 1
      ? defaultVal
      : {
          display: all[i + 1],
          url: `/ib/cas/experiences/${all[i + 1]}`,
        };

  return { next, prev };
};
