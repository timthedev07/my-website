import { Octokit } from "octokit";
import { Site, WithStarCount } from "../pages/projects";

export const octokit = new Octokit({
  auth: process.env.GITHUB_REST_TOKEN,
});

export const getRepoWithStars = async (site: Site) => {
  const repoInfo = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "timthedev07",
    repo: site.githubRepo,
  });

  return {
    ...site,
    url: repoInfo.data.homepage,
    description: repoInfo.data.description,
    stars: repoInfo.data.stargazers_count,
    topics: repoInfo.data.topics || [],
  } as WithStarCount;
};
