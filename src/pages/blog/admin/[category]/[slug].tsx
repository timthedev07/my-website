import type { GetServerSideProps, NextPage } from "next";
import matter from "gray-matter";
import { MarkdownMetadata } from "../../../../types/posts";
import { getHeadForPage } from "../../../../utils/getHead";
import { readRemoteBlog } from "../../../../utils/GHRest";
import markdownToHtml from "../../../../utils/markdown";
import RichMarkdownEditor from "@davidilie/markdown-editor";
import { useNavContext } from "../../../../components/nav/Navbar";
import { useEffect, useRef, useState } from "react";
import { Button } from "dragontail-experimental";

interface Props {
  content: string;
  metadataAsString: string;
  slug: string;
  originalMarkdown: string;
}

const Slug: NextPage<Props> = ({
  content,
  metadataAsString,
  slug,
  originalMarkdown,
}) => {
  const metadata: MarkdownMetadata = JSON.parse(metadataAsString);
  const { setNavTransparent } = useNavContext();
  const [updatedFileContent, setUpdatedFileContent] = useState<string | null>(
    null
  );
  const editorRef = useRef<RichMarkdownEditor | null>(null);

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  const hackyHeight = "h-[calc(100vh-56px)]";

  return (
    <div className="flex items-start overflow-hidden">
      {getHeadForPage({
        title: metadata.title,
        description: metadata.description,
        path: `/blog/${metadata.category}/${slug}`,
      })}
      <div
        className={`${hackyHeight} w-full justify-center items-start flex overflow-y-scroll transparent-scrollbar py-9`}
      >
        <RichMarkdownEditor
          ref={editorRef}
          defaultValue={originalMarkdown}
          /* @ts-ignore */
          theme={{}}
          className="w-[80%] child-paragraphs:text-white/70 child-list:text-white/70 child-images:rounded-xl child-images:shadow-xl child-code:rounded-lg child-list:list-disc child-list:list-inside"
        />
      </div>
      <aside
        className={`sticky rounded-md ${hackyHeight} w-72 border-l border-slate-700/60 bg-slate-800 flex flex-col items-center`}
      >
        <Button
          color="green"
          className="w-[90%]"
          onClick={() => {
            const curr = editorRef.current;
            if (!curr) return;

            const newVal = curr.value();
            console.log(newVal);
            setUpdatedFileContent(newVal);
          }}
        >
          Save
        </Button>
      </aside>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params!.slug;
  const category = params!.category;

  let fileContent: string;

  try {
    fileContent = await readRemoteBlog(`${category}/${slug}.md`);
  } catch (err) {
    return {
      notFound: true,
    };
  }

  const withMetadata = matter(fileContent);

  return {
    props: {
      slug,
      content: await markdownToHtml(withMetadata.content),
      metadataAsString: JSON.stringify(withMetadata.data),
      originalMarkdown: withMetadata.content,
    } as Props,
  };
};

export default Slug;
