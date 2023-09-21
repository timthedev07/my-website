import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  EXPERIENCES_DATA_DIR,
  getAdjacentEntries,
  getAllAvailablePaths,
  getEntryRawContent,
} from "../../../../lib/ib-cas/experiences-mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkUnwrapImages from "remark-unwrap-images";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../../../components/mdx-custom";
import { ExperiencesBGSVG } from "../../../../components/svgs/ib-cas/ExperiencesBG";
import { PageSwitcher } from "../../../../components/ib-pages/PageSwitcher";
import { NextSeo } from "next-seo";
import defaultSEOConfig from "../../../../utils/seo-config";

interface Props {
  mdxData: string;
  dateStr: string;
  neighbors: string;
}

const ExperienceEntryPage: NextPage<Props> = ({
  mdxData,
  dateStr,
  neighbors,
}) => {
  const data = JSON.parse(mdxData) as Awaited<ReturnType<typeof serialize>>;
  const meta = data.frontmatter as any;

  const { next, prev } = JSON.parse(neighbors) as ReturnType<
    typeof getAdjacentEntries
  >;

  return (
    <>
      <NextSeo
        title={meta.activity + " - timthedev07"}
        description={meta.description}
        openGraph={{
          url: `${defaultSEOConfig.openGraph?.url}ib/cas/experiences/${dateStr}`,
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: ["ib"].join(", "),
          },
        ]}
      />

      <div className="w-full min-h-screen relative flex flex-col items-center">
        <div className="fixed z-0">
          <ExperiencesBGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover brightness-[0.4] blur-md" />
        </div>
        <div className="mt-32 relative z-10 md:w-7/12 w-10/12 rounded-xl border flex flex-col gap-8 p-12 py-16 items-start border-slate-400/20 bg-neutral-950/30 backdrop-blur-lg">
          <h1 className="m-0 font-semibold">{meta.activity}</h1>
          <span className="rounded-full px-5 py-2 bg-sky-800/50 font-semibold">
            {new Date(dateStr).toDateString()}
          </span>
          <span className="text-lg text-white/80">{meta.description}</span>
        </div>

        <div className="relative z-10 pb-64 md:w-7/12 gap-4 w-10/12 flex flex-col child-headings:mt-20 leading-loose">
          <MDXRemote components={components} {...data} />
        </div>
        <PageSwitcher
          indexPageURL="/ib/cas/experiences"
          prevDisplay={prev.display}
          prevURL={prev.url}
          nextDisplay={next.display}
          nextURL={next.url}
        />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const a = params?.date as string;

  const { content, data } = getEntryRawContent(a)!;

  const mdxData = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
      rehypePlugins: [rehypeAutolinkHeadings],
    },
  });

  const neighbors = getAdjacentEntries(a);

  return {
    props: {
      mdxData: JSON.stringify({
        ...mdxData,
        frontmatter: data,
      }),
      dateStr: a,
      neighbors: JSON.stringify(neighbors),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getAllAvailablePaths(EXPERIENCES_DATA_DIR).map((each) => {
      return {
        params: {
          date: each,
        },
      };
    }),
    fallback: "blocking",
  };
};

export default ExperienceEntryPage;
