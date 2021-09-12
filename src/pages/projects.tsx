import type { GetStaticProps, NextPage } from "next";
import { TrimmedRepo } from "../utils/repo";

interface Props {
  repos: TrimmedRepo[];
}

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
  const response = await fetch(
    "https://api.github.com/search/repositories?q=user:timthedev07+sort:updated-desc"
  );

  const { items } = await response.json();

  const latest = items.splice(0, 6);

  return {
    props: {
      repos: latest,
    } as Props,
  };
};

export default Projects;
