import { readdirSync } from "fs";
import path from "path";
import { groupBlogs } from "./groupBlogs";
import { getPostMetadata } from "./post";

export const getBlogsWithMetadata = () => {
  const categories = readdirSync("posts");
  let fileNames: string[] = [];

  for (const category of categories) {
    fileNames = fileNames.concat(
      readdirSync(`posts/${category}`).map((each) => `${category}/${each}`)
    );
  }

  return groupBlogs(
    fileNames.map((fileName) => {
      const mdFileNameArr = fileName.replace(".md", "").split(path.sep);

      return {
        filename: mdFileNameArr[mdFileNameArr.length - 1],
        metadata: JSON.stringify(getPostMetadata(fileName)),
        category: mdFileNameArr[0] as any,
      };
    })
  );
};
