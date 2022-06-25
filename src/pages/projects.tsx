import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { useNavContext } from "../components/nav/Navbar";
import { Site } from "../components/projects/Site";
import { getRepoWithStars } from "../utils/GHRest";

export type Site = {
  name: string;
  githubRepo: string;
};

export type WithStarCount = Site & {
  url: string;
  stars: number;
  topics: string[];
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
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  return (
    <section className="justify-center items-start flex p-4 flex-wrap gap-5">
      {sites.map(Site)}
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      sites: await Promise.all(SITES.map(getRepoWithStars)),
    } as Props,
  };
};

export default Projects;
