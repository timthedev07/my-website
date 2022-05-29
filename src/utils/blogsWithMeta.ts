import { readdirSync } from "fs";
import path from "path";
import { getCategories, getCategoryPostNames } from "./GHRest";
import { groupBlogs } from "./groupBlogs";
import { getPostMetadata, getRemotePostMetadata } from "./post";

const withGitHubRest = async () => {
  const categories = await getCategories();
  let fileNames: string[] = [];

  for (const category of categories) {
    fileNames = fileNames.concat(
      (await getCategoryPostNames(category)).map(
        (each) => `${category}/${each}`
      )
    );
  }

  const blogInfo = await Promise.all(
    fileNames.map(async (fileName) => {
      const mdFileNameArr = fileName.replace(".md", "").split("/");

      return {
        filename: mdFileNameArr[mdFileNameArr.length - 1],
        metadata: JSON.stringify(await getRemotePostMetadata(fileName)),
        category: mdFileNameArr[0] as any,
      };
    })
  );

  return groupBlogs(blogInfo);
};

const withSSG = () => {
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

export const getBlogsWithMetadata = async (mode: "ssg" | "github-rest") => {
  switch (mode) {
    case "github-rest": {
      return await withGitHubRest();
    }
    case "ssg": {
      return withSSG();
    }
  }
};
