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
  return (
    <div>
      <ul className="grid grid-cols-1 items-center sm:grid-cols-3">
        {repos.map((each) => (
          <Link key={each.name} href={each.html_url} passHref>
            <a className="m-5 h-64 sm:self-center">
              <li>
                <h3 className="text-4xl">{each.name}</h3>
                <p>{each.description}</p>
              </li>
            </a>
          </Link>
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
