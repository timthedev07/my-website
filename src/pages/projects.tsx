import type { GetStaticProps, NextPage } from "next";
import { getRepoWithStars } from "../utils/GHRest";

export type Site = {
  name: string;
  githubRepo: string;
};

export type WithStarCount = Site & {
  url: string;
  stars: number;
};

export const SITES: Site[] = [
  {
    name: "Dream Of Berlin",
    githubRepo: "dashboard4dev",
  },
  {
    name: "Dashboard4Dev",
    githubRepo: "dashboard4dev",
  },
  {
    name: "Who's More Popular?",
    githubRepo: "whosmorepopular",
  },
  {
    name: "Creativity Matters",
    githubRepo: "Creativity-Matters",
  },
  {
    name: "React Snake Game",
    githubRepo: "snake",
  },
  {
    name: "Todo Master",
    githubRepo: "todo-master",
  },
];

interface Props {
  sites: WithStarCount[];
}

const Projects: NextPage<Props> = ({ sites }) => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      sites: await Promise.all(SITES.map(getRepoWithStars)),
    } as Props,
  };
};

export default Projects;
