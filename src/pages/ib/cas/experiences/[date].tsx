import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getAllAvailablePaths,
  getEntryRawContent,
} from "../../../../lib/ib-cas/experiences-mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkUnwrapImages from "remark-unwrap-images";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../../../components/mdx-custom";
import { ExperiencesBGSVG } from "../../../../components/svgs/ib-cas/ExperiencesBG";

interface Props {
  mdxData: string;
  dateStr: string;
}

const ExperienceEntryPage: NextPage<Props> = ({ mdxData, dateStr }) => {
  const data = JSON.parse(mdxData) as Awaited<ReturnType<typeof serialize>>;
  const meta = data.frontmatter as any;

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center">
      <div className="fixed z-0" id="experience-index">
        <ExperiencesBGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover brightness-[0.7] blur" />
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
    </div>
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
  return {
    props: {
      mdxData: JSON.stringify({
        ...mdxData,
        frontmatter: data,
      }),
      dateStr: a,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getAllAvailablePaths().map((each) => {
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
