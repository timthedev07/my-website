import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.GITHUB_REST_TOKEN,
});

export const getCategories = async (): Promise<string[]> => {
  const a = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: "timthedev07",
    repo: "my-website",
    path: "posts",
  });
  return (a.data as any[]).map((each) => each.name);
};

export const getCategoryPostNames = async (category: string) => {
  const a = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: "timthedev07",
    repo: "my-website",
    path: `posts/${category}`,
  });
  return (a.data as any[]).map((each) => each.name);
};

/**
 *
 * @param path  e.g. math/some-blog.md, school/sth.md
 */
export const readRemoteBlog = async (path: string) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/timthedev07/my-website/dev/posts/${path}`
  );

  if (response.status === 404) throw 404;

  return await response.text();
};
