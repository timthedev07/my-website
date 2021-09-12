import type { GetStaticProps, NextPage } from "next";
import { TrimmedRepo } from "../utils/repo";

interface Props {
  repos: TrimmedRepo[];
}

const REPO_NAMES = [
  "my-website",
  "Your-Doge",
  "distinct.css",
  "snake",
  "svelte-calculator",
  "Dream-of-Berlin",
];

const Projects: NextPage<Props> = ({ repos }) => {
  return (
    <div>
      <ul>
        {repos.map((each) => (
          <li className="m-5">{each.name}</li>
        ))}
      </ul>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const repos: TrimmedRepo[] = [];
  for (const repo of REPO_NAMES) {
    const response = await fetch(
      `https://api.github.com/repos/timthedev07/${repo}`
    );
    const data = await response.json();
    repos.push(data);
  }

  return {
    props: {
      repos,
    } as Props,
  };
};

export default Projects;
