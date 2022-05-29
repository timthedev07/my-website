import type { GetServerSideProps, NextPage } from "next";
import matter, { stringify } from "gray-matter";
import { MarkdownMetadata } from "../../../../types/posts";
import { getHeadForPage } from "../../../../utils/getHead";
import { readRemoteBlog, updateBlog } from "../../../../utils/GHRest";
import RichMarkdownEditor from "@davidilie/markdown-editor";
import { useNavContext } from "../../../../components/nav/Navbar";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "dragontail-experimental";
import { Drawer } from "dragontail-experimental";
import { useAppLoading } from "../../../../components/AppLoading";

interface Props {
  metadataAsString: string;
  slug: string;
  originalMarkdown: string;
}

const Slug: NextPage<Props> = ({
  metadataAsString,
  slug,
  originalMarkdown,
}) => {
  const metadata: MarkdownMetadata = JSON.parse(metadataAsString);
  const { setNavTransparent } = useNavContext();
  const editorRef = useRef<RichMarkdownEditor | null>(null);
  const [newMetadata, setNewMetadata] = useState<MarkdownMetadata>(metadata);
  const { setAppLoading } = useAppLoading();

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
        className={`sticky rounded-md ${hackyHeight} py-4 w-96 border-l border-slate-700/60 bg-slate-800 flex flex-col items-center`}
      >
        <h3 className="w-full text-left p-3 border-b-2 border-slate-500/50">
          Edit
        </h3>

        <Drawer
          className="w-full"
          content={
            <>
              <FormControl label="keywords" isRequired>
                <FormLabel>Comma separated</FormLabel>
                <Input
                  defaultValue={metadata.keywords.join(", ")}
                  onChange={(e) => {
                    const val = e.target.value;
                    setNewMetadata((prev) => {
                      return {
                        ...prev,
                        keywords: val.split(",").map((each) => each.trim()),
                      };
                    });
                  }}
                  value={newMetadata.keywords.join(", ")}
                />
              </FormControl>
            </>
          }
          drawerLabel="Keywords"
        />
        <Drawer
          className="w-full"
          content={
            <>
              <FormControl label="description" isRequired>
                <FormLabel>Blog summary</FormLabel>
                <Textarea
                  className="min-h-[130px]"
                  defaultValue={metadata.description}
                  value={newMetadata.description}
                  onChange={(e) => {
                    setNewMetadata((prev) => {
                      return { ...prev, description: e.target.value };
                    });
                  }}
                />
              </FormControl>
            </>
          }
          drawerLabel="Description"
        />

        <Button
          color="green"
          className="w-[90%] mt-auto"
          onClick={async () => {
            const curr = editorRef.current;
            if (!curr) return;
            setAppLoading(true);

            const newVal = curr.value();

            const encodedMeta = stringify("", newMetadata);

            const final = encodedMeta + "\n" + newVal;

            try {
              await updateBlog(`${metadata.category}/${slug}`, final);
              setAppLoading(false);
            } catch (err) {
              setAppLoading(false);
            }
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
      metadataAsString: JSON.stringify(withMetadata.data),
      originalMarkdown: withMetadata.content,
    } as Props,
  };
};

export default Slug;
