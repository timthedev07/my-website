import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { readdirSync } from "fs";
import { join, sep } from "path";
import { useEffect, useMemo, useRef, useState } from "react";
import { useOnScreen } from "../../../utils/hooks";
import { BlogComments } from "../../../components/BlogComments";
import { useAppLoading } from "../../../components/AppLoading";
import { useNavContext } from "../../../components/nav/Navbar";
import { TagList } from "../../../components/TagList";
import { Button } from "dragontail-experimental";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import SEOConfig from "../../../utils/seo-config";
import { MDXData, readMDX } from "../../../lib/blog";
import { components } from "../../../components/mdx-custom";

interface Props {
  mdxDataRaw: string;
  slug: string;
}

const Slug: NextPage<Props> = ({ mdxDataRaw, slug }) => {
  const mdxData = useMemo(
    () => JSON.parse(mdxDataRaw) as MDXData,
    [mdxDataRaw]
  );
  const metadata = useMemo(() => mdxData.frontmatter, [mdxData]);

  const ref = useRef<HTMLDivElement | null>(null);
  const loadComments = useOnScreen(ref);
  const [viewCount, setViewCount] = useState<number | null>(null);
  const { setAppLoading } = useAppLoading();
  const { setNavTransparent } = useNavContext();
  const [loadingDots, setLoadingDots] = useState<number>(1);

  useEffect(() => {
    if (viewCount) return;

    setInterval(() => {
      setLoadingDots((prev) => {
        return (prev + 1) % 4;
      });
    }, 300);
  }, [viewCount]);

  useEffect(() => {
    setNavTransparent(false);
    const storageKey = `seen:${metadata.category}/${slug}`;

    const f = async () => {
      setAppLoading(true);

      const prevResponse = await fetch(`/api/viewcount/${slug}`);
      const prevText = await prevResponse.text();

      setViewCount(parseInt(prevText));

      if (localStorage.getItem(storageKey)) {
        setAppLoading(false);
        return;
      }

      const incrementResponse = await fetch(`/api/viewcount/increment/${slug}`);
      const incrementText = await incrementResponse.text();

      if (incrementResponse.ok) {
        setViewCount(parseInt(incrementText));
      }

      localStorage.setItem(storageKey, "1f23hr923hfh29ih2f");

      setAppLoading(false);
    };

    f();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const xPaddings = "md:px-24 px-6";

  return (
    <>
      <NextSeo
        title={metadata.title}
        description={metadata.description}
        openGraph={{
          url: `${SEOConfig.openGraph?.url}blog/${metadata.category}/${slug}`,
          images: [
            {
              url: `${SEOConfig.openGraph?.url}thumbnails/${
                metadata.thumbnail || slug
              }.png`,
              height: 550,
              width: 550,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: metadata.keywords.join(", "),
          },
        ]}
      />

      <div className="flex flex-col justify-center items-center">
        <section
          className={`w-[95%] md:w-[90%] md:max-w-4xl lg:max-w-5xl rounded-lg m-6`}
        >
          <article
            className={`${xPaddings} flex flex-col gap-6 border-2 py-12 bg-slate-700/10 border-slate-700/60 rounded-xl`}
          >
            <h1 className="font-bold">{metadata.title}</h1>
            <TagList tagContents={metadata.keywords} className="flex-wrap" />
            <div className="text-white/70 flex w-full justify-between">
              <span>Published on {new Date(metadata.date).toDateString()}</span>
              <span>
                {viewCount ? viewCount : ".".repeat(loadingDots)} View
                {!viewCount || viewCount > 1 ? "s" : ""}
              </span>
            </div>
            <span className="text-base font-semibold italic text-white/80 whitespace-pre-line">
              {metadata.description}
            </span>
            <div>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                variant="ghost"
                color="orange"
              >
                Copy Link
              </Button>
            </div>
          </article>

          <article
            className={`
            leading-loose pt-20 md:pt-12 pb-10 ${xPaddings} flex flex-col gap-4
            child-headings:font-semibold child-headings:text-white
            child-math:text-white/90 child-code:leading-normal child-code:rounded-lg child-code:overflow-hidden`}
          >
            <MDXRemote components={components} {...mdxData} />
          </article>

          <hr className="w-full h-[1px] border-t border-t-slate-400/30" />

          <div ref={ref} className={xPaddings + " py-10"}>
            {loadComments && <BlogComments blogId={slug} />}
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = readdirSync(join("src", "blog-mdx"));

  // const fileNames
  let fileNames: string[] = [];
  for (const category of categories) {
    fileNames = fileNames.concat(
      readdirSync(join("src", "blog-mdx", category)).map(
        (each) => `${category}/${each}`
      )
    );
  }

  const paths = fileNames.map((fileName) => {
    const pieces = fileName.split(sep);

    return {
      params: {
        slug: pieces[pieces.length - 1].replace(".mdx", ""),
        category: pieces[0],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const category = params!.category as string;

  const data = await readMDX(slug, category);

  return {
    props: {
      slug,
      mdxDataRaw: JSON.stringify(data),
    } as Props,
  };
};

export default Slug;
