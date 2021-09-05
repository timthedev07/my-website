import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

(() => {
  octokit.rest.git.createCommit({
    owner: "timthedev07",
    message: "New Release",
    repo: "timthedev07.github.io",
    tree: "",
  });
})();
