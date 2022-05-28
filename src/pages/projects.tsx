import type { GetStaticProps, NextPage } from "next";
import { TrimmedRepo } from "../utils/repo";
import Link from "next/link";

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
  return 1 > 1 ? (
    <div>
      <header className="relative">
        <img src="/images/tech0.jpg" alt="" />
        <div className="w-full h-72 absolute bottom-0 bg-gradient-to-b from-transparent via-primary-bg to-primary-bg"></div>
      </header>
      <div className="grid grid-cols-1 items-center md2:grid-cols-3">
        {repos.map((each) => (
          <Link key={each.name} href={each.html_url} passHref>
            <a>
              <fieldset className="m-5 h-64 sm:self-center border-white border-opacity-30 border-2 p-4 rounded-sm relative transition duration-200 ease-out transform hover:-translate-y-1 hover:scale-103 hover:border-opacity-60">
                <legend className="text-4xl">{each.name}</legend>
                <p className="text-lg">{each.description}</p>
              </fieldset>
            </a>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <h1 className="flex justify-center items-center h-[80vh]">COMING SOON</h1>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const repos: TrimmedRepo[] = [];

  for (const repo of REPO_NAMES) {
    const response = await fetch(
      `https://api.github.com/repos/timthedev07/${repo}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_REST_TOKEN}`,
        },
      }
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
