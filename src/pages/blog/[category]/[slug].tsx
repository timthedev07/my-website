import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { readdirSync, readFileSync } from "fs";
import path, { join } from "path";
import matter from "gray-matter";
import { MarkdownMetadata } from "../../../types/posts";
import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../../../utils/hooks";
import { BlogComments } from "../../../components/BlogComments";
import markdownToHtml from "../../../utils/markdown";
import { getHeadForPage } from "../../../utils/getHead";
import { useAppLoading } from "../../../components/AppLoading";
import { useNavContext } from "../../../components/nav/Navbar";
import { TagList } from "../../../components/TagList";
import { Button } from "dragontail-experimental";

interface Props {
  content: string;
  metadataAsString: string;
  slug: string;
}

const Slug: NextPage<Props> = ({ content, metadataAsString, slug }) => {
  const metadata: MarkdownMetadata = JSON.parse(metadataAsString);
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
      {getHeadForPage({
        title: metadata.title,
        description: metadata.description,
        path: `/blog/${metadata.category}/${slug}`,
        keywords: metadata.keywords,
        image: `/thumbnails/${slug}.png`,
      })}
      <div className="flex flex-col justify-center items-center">
        <section
          className={`w-[95%] md:w-[90%] md:max-w-4xl lg:max-w-5xl md:bg-slate-900 rounded-lg m-6`}
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
            <span className="text-base font-semibold italic text-white/80">
              {metadata.description}
            </span>
            <div>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://${window.location.hostname}/blog/${metadata.category}/${slug}`
                  );
                }}
                variant="ghost"
                color="orange"
              >
                Copy Link
              </Button>
            </div>
          </article>
          <article
            className={`flex child-headings:font-semibold leading-loose child-code:leading-normal flex-col gap-4 pt-20 md:pt-8 pb-10 ${xPaddings} child-paragraphs:text-white/70 child-list:text-white/70 child-list:text-[1.1rem] child-images:rounded-xl child-images:shadow-xl child-code:rounded-lg child-list:list-disc child-list:list-inside child-links-hover:underline child-links:text-cyan-400 child-links-hover:text-cyan-500 child-images:m-auto`}
            dangerouslySetInnerHTML={{ __html: content }}
          ></article>

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
  const categories = readdirSync("posts");

  // const fileNames
  let fileNames: string[] = [];
  for (const category of categories) {
    fileNames = fileNames.concat(
      readdirSync(`posts/${category}`).map((each) => `${category}/${each}`)
    );
  }

  const paths = fileNames.map((fileName) => {
    const pieces = fileName.split(path.sep);

    return {
      params: {
        slug: pieces[pieces.length - 1].replace(".md", ""),
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
  const slug = params!.slug;
  const category = params!.category;

  const fileContent = readFileSync(
    join("posts", category as string, slug + ".md")
  ).toString();

  const withMetadata = matter(fileContent);

  withMetadata.data.category = category;

  return {
    props: {
      slug,
      content: await markdownToHtml(withMetadata.content),
      metadataAsString: JSON.stringify(withMetadata.data),
    } as Props,
  };
};

export default Slug;
