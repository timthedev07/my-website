import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { useNavContext } from "../components/nav/Navbar";
import { Site } from "../components/projects/Site";
import { getRepoWithStars } from "../utils/GHRest";
import cw from "capture-website";

export type Site = {
  name: string;
  githubRepo: string;
};

export type WithStarCount = Site & {
  url: string;
  stars: number;
  topics: string[];
  description: string;
};

export const SITES: Site[] = [
  {
    name: "Dream Of Berlin",
    githubRepo: "Dream-Of-Berlin",
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
    name: "Digit Recognition",
    githubRepo: "digit-recognition",
  },
  {
    name: "Creativity Matters",
    githubRepo: "Creativity-Matters",
  },
  {
    name: "React Snake Game",
    githubRepo: "snake",
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
      <h2>Other Sites</h2>
      {sites.map((each) => (
        <Site {...each} key={each.name} />
      ))}
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const sites = await Promise.all(
    SITES.map(async (e) => {
      const t = await getRepoWithStars(e);

      const ss = await cw.base64(t.url as string, {
        isJavaScriptEnabled: true,
        delay: 4,
        type: "jpeg",
        quality: 0.5,
        launchOptions: {
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      });

      return { ...t, ss };
    })
  );

  return {
    props: {
      sites,
    } as Props,
  };
};

export default Projects;
