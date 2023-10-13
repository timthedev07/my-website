import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import {
  ProjectMeta,
  getAllProjectEntries,
  getProjectMDX,
} from "../../../../lib/ib-cas/projects-mdx";
import { serialize } from "next-mdx-remote/serialize";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../../../components/mdx-custom";
import { ProjectsBGSVGSVG } from "../../../../components/svgs/ib-cas/ProjectsBGSVG";
import { NextSeo } from "next-seo";
import defaultSEOConfig from "../../../../utils/seo-config";

interface Props {
  mdxData: string;
  slug: string;
}

const Project: NextPage<Props> = ({ mdxData, slug }) => {
  const data = JSON.parse(mdxData) as Awaited<ReturnType<typeof serialize>>;
  const meta = data.frontmatter as ProjectMeta;
  return (
    <>
      <NextSeo
        title={meta.name + " - timthedev07"}
        description={meta.description}
        openGraph={{
          url: `${defaultSEOConfig.openGraph?.url}ib/cas/projects/${slug}`,
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: ["ib"].join(", "),
          },
        ]}
      />

      <div className="w-full min-h-screen relative flex flex-col items-center">
        <div className="fixed z-0 blur-md">
          <ProjectsBGSVGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover brightness-[0.4] blur-md" />
        </div>
        <div className="mt-32 relative z-10 md:w-7/12 w-10/12 rounded-xl border flex flex-col gap-8 p-12 py-16 items-start border-slate-400/20 bg-neutral-950/30 backdrop-blur-lg">
          <h1 className="m-0 font-semibold">{meta.name}</h1>
          <span className="rounded-full px-5 py-2 bg-sky-800/50 font-semibold">
            Start Date: {new Date(meta.startDate).toDateString()}
          </span>
          <span className="text-lg text-white/80">{meta.description}</span>
        </div>

        <div className="relative z-10 pb-64 md:w-7/12 gap-4 w-10/12 flex flex-col child-headings:mt-20 leading-loose">
          <MDXRemote components={components} {...data} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;

  const { content, data } = getProjectMDX(slug);

  const mdxData = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
      rehypePlugins: [rehypeAutolinkHeadings],
    },
  });

  return {
    props: {
      mdxData: JSON.stringify({
        ...mdxData,
        frontmatter: data,
      }),
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllProjectEntries(false).map((each) => {
    return {
      params: {
        slug: each,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export default Project;
