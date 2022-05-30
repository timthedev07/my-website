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
  const trimmed = path.startsWith("recent")
    ? path.replace("recent/", "")
    : path;
  const response = await fetch(
    `https://raw.githubusercontent.com/timthedev07/my-website/dev/posts/${trimmed}`
  );

  if (response.status === 404) throw 404;

  return await response.text();
};

export const getLastSha = async () => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/branches/dev", {
    owner: "timthedev07",
    repo: "my-website",
  });
  return {
    commitSha: res.data.commit.sha as string,
    treeSha: res.data.commit.commit.tree.sha as string,
  };
};

export const getExistingTree = async (treeSha: string) => {
  return await octokit.request(
    "GET /repos/{owner}/{repo}/git/trees/{tree_sha}",
    {
      owner: "timthedev07",
      repo: "my-website",
      tree_sha: treeSha,
    }
  );
};

export const createBlob = async (utf8Content: string) => {
  const res = await octokit.request("POST /repos/{owner}/{repo}/git/blobs", {
    owner: "timthedev07",
    repo: "my-website",
    content: utf8Content,
    encoding: "utf-8",
  });

  const blobSha = res.data.sha as string;
  return blobSha;
};

/**
 *
 * @param blobSha
 * @param fileToUpdate  the relative path from the root of the repo: e.g. posts/math/sth.md
 * @returns
 */
export const getNewTreeSha = async (
  blobSha: string,
  fileToUpdate: string,
  treeSha: string
) => {
  const existingTree = await getExistingTree(treeSha);
  const res = await octokit.request("POST /repos/{owner}/{repo}/git/trees", {
    owner: "timthedev07",
    repo: "my-website",
    tree: [
      ...(existingTree.data.tree as any),
      {
        path: fileToUpdate,
        mode: "100644",
        type: "blob",
        sha: blobSha,
      },
    ],
  });

  return res.data.sha as string;
};

/**
 *
 * @param blobSha
 * @param fileToUpdate  the relative path from the root of the repo: e.g. posts/math/sth.md
 * @returns
 */
export const commit = async (blobSha: string, fileToUpdate: string) => {
  const shas = await getLastSha();
  const res = await octokit.request("POST /repos/{owner}/{repo}/git/commits", {
    owner: "timthedev07",
    repo: "my-website",
    message: "update blog",
    parents: [shas.commitSha],
    tree: await getNewTreeSha(blobSha, fileToUpdate, shas.treeSha),
  });
  return res.data.sha as string;
};

export const updateHead = async (newCommitSha: string) => {
  await octokit.request("POST /repos/{owner}/{repo}/git/refs/heads/dev", {
    owner: "timthedev07",
    repo: "my-website",
    sha: newCommitSha,
  });
};

export const updateBlog = async (
  categoryAndSlug: string,
  newContent: string
) => {
  const bs = await createBlob(newContent);
  const ns = await commit(bs, `posts/${categoryAndSlug}.md`);
  await updateHead(ns);
};
