import { Octokit } from "octokit";
import { b64EncodeUnicode } from "./strings";

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
  const trimmed = path.startsWith("recent")
    ? path.replace("recent/", "")
    : path;
  const response = await fetch(
    `https://raw.githubusercontent.com/timthedev07/my-website/dev/posts/${trimmed}`
  );

  if (response.status === 404) throw 404;

  return await response.text();
};

export const getFileSha = async (categoryAndSlug: string) => {
  try {
    const res = await octokit.request(
      `GET /repos/{owner}/{repo}/contents/{path}`,
      {
        owner: "timthedev07",
        repo: "my-website",
        path: `posts/${categoryAndSlug}.md`,
      }
    );
    return (res.data as any).sha as string;
  } catch (err) {
    console.log(err);
    return "";
  }
};

export const updateBlog = async (
  categoryAndSlug: string,
  newContent: string
) => {
  const fileSha = await getFileSha(categoryAndSlug);
  try {
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
      owner: "timthedev07",
      repo: "my-website",
      path: `posts/${categoryAndSlug}.md`,
      message: "Update blog",
      content: b64EncodeUnicode(newContent),
      sha: fileSha,
    });
  } catch (err) {
    console.log(err);
  }
};
