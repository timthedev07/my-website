import { GetStaticProps, NextPage } from "next";
import { getAllProjectEntries } from "../../../../lib/ib-cas/projects-mdx";
import { ProjectsBGSVGSVG } from "../../../../components/svgs/ib-cas/ProjectsBGSVG";
import Link from "next/link";
import { StartDateTag } from "../../../../components/ib-pages/StartDateTag";
import { Button } from "dragontail-experimental";

interface Props {
  all: string;
}

const Projects: NextPage<Props> = ({ all }) => {
  const projectSlugs = JSON.parse(all) as {
    name: string;
    fname: string;
    meta: {
      [key: string]: any;
    };
  }[];

  return (
    <>
      <div className="w-full min-w-[600px] min-h-screen relative flex flex-col items-center">
        <div
          className="fixed z-0 blur-sm brightness-[0.6]"
          id="experience-index"
        >
          <ProjectsBGSVGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover blur-sm" />
        </div>
        <header className="relative h-full mt-32 px-4 text-center">
          <h1 className="font-semibold">IB CAS Projects</h1>
        </header>
        <div className="relative w-full z-10 pb-64 flex justify-center">
          <ol className="flex flex-col w-[50%] min-w-[200px] gap-12 py-12">
            {projectSlugs.map((each) => (
              <li
                key={each.fname}
                className="flex flex-col gap-7 px-12 py-12 w-full bg-slate-800/90 border border-slate-500/50 rounded-md cursor-pointer"
              >
                <h3 className="font-semibold">{each.name}</h3>
                <StartDateTag
                  cl="w-max"
                  dateStr={each.meta.startDate as string}
                />
                <p className="text-slate-50/70">{each.meta.description}</p>
                <Link
                  key={each.fname}
                  href={"/ib/cas/projects/" + each.fname}
                  className="ml-auto"
                >
                  <Button color="cyan">Read More</Button>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const data = getAllProjectEntries(false);
  return {
    props: {
      all: JSON.stringify(data),
    },
  };
};

export default Projects;
