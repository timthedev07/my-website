import type { GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import Link from "next/link";

interface Props {
  fileNames: string[];
}

const Blogs: NextPage<Props> = ({ fileNames }) => {
  return (
    <div>
      <h3 className=" text-3xl ">Posts:</h3>
      <ol>
        {fileNames.map((each) => (
          <Link href={`blog/${each}`}>
            <li key={each} className="m-6">
              {each
                .split("-")
                .map((each) => each.charAt(0).toUpperCase() + each.slice(1))
                .join(" ")}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = readdirSync("posts").map((each) => each.replace(".md", ""));

  return {
    props: {
      fileNames,
    } as Props,
  };
};
export default Blogs;
