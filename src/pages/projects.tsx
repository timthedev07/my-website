import type { GetStaticProps, NextPage } from "next";

type OtherSite = {
  url: string;
  githubRepo: string;
};

export const OTHER_SITES: OtherSite[] = [
  {
    githubRepo: "dashboard4dev",
    url: "https://dashboard4dev.netlify.app",
  },
  {
    githubRepo: "whosmorepopular",
    url: "http://whosmorepopular.netlify.app",
  },
  {
    githubRepo: "Creativity-Matters",
    url: "https://creativity-matters.netlify.app/",
  },
  {
    githubRepo: "snake",
    url: "https://gnarly-snake.netlify.app",
  },
  {
    githubRepo: "todo-master",
    url: "https://todo-master-www.netlify.app/",
  },
];

interface Props {}

const Projects: NextPage<Props> = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {} as Props,
  };
};

export default Projects;
