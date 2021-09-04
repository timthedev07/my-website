import type { GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";

interface Props {
  posts: string[];
}

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      Posts:
      <ol>
        {posts.map((each) => (
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
  const posts = readdirSync("posts");

  const paths = posts.map((each) => each.replace(".md", ""));

  return {
    props: {
      posts: paths,
    } as Props,
  };
};
export default Blogs;
