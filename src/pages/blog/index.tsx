import type { GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";

interface Props {
  slugs: string[];
}

const Blogs: NextPage<Props> = ({ slugs }) => {
  return (
    <div>
      Posts:
      <ol>
        {slugs.map((each) => (
          <li key={each}>
            {each
              .split("-")
              .map((each) => each.charAt(0).toUpperCase() + each.slice(1))
              .join(" ")}
          </li>
        ))}
      </ol>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = readdirSync("posts");

  const slugs = fileNames.map((each) => each.replace(".md", ""));

  return {
    props: {
      slugs,
    } as Props,
  };
};
export default Blogs;
