import { GetStaticProps, NextPage } from "next";
import { getAllProjectEntries } from "../../../../lib/ib-cas/projects-mdx";
import { ProjectsBGSVGSVG } from "../../../../components/svgs/ib-cas/ProjectsBGSVG";
import Link from "next/link";

interface Props {
  all: string;
}

const Projects: NextPage<Props> = ({ all }) => {
  const projectSlugs = JSON.parse(all) as string[];

  return (
    <>
      <div className="w-full min-w-[600px] min-h-screen relative flex flex-col items-center">
        <div className="fixed z-0" id="experience-index">
          <ProjectsBGSVGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover brightness-[0.7] blur-sm" />
        </div>
        <header className="relative h-full mt-32 px-4 text-center">
          <h1 className="font-semibold">IB CAS Projects</h1>
        </header>
        <div className="relative w-full z-10 pb-64 flex justify-center">
          <ol>
            {projectSlugs.map((each) => (
              <li key={each}>
                <Link href={"/ib/cas/projects/" + each}>{each}</Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const all = getAllProjectEntries(false);
  return {
    props: {
      all: JSON.stringify(all),
    },
  };
};

export default Projects;
