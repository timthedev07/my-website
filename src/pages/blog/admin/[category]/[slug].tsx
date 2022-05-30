import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import matter, { stringify } from "gray-matter";
import { MarkdownMetadata } from "../../../../types/posts";
import { getHeadForPage } from "../../../../utils/getHead";
import { readRemoteBlog } from "../../../../utils/GHRest";
const RichMarkdownEditor = dynamic(() => import("@davidilie/markdown-editor"), {
  ssr: false,
});
import { useNavContext } from "../../../../components/nav/Navbar";
import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "dragontail-experimental";
import { Drawer } from "dragontail-experimental";
import { useAppLoading } from "../../../../components/AppLoading";
import { BlogUpdate } from "../../../../types/blogUpdate";
import { useRouter } from "next/router";

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
  const [newMetadata, setNewMetadata] = useState<MarkdownMetadata>(metadata);
  const [newContent, setNewContent] = useState<string>(originalMarkdown);
  const { setAppLoading } = useAppLoading();
  const { reload } = useRouter();

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
          placeholder="Write your blog..."
          defaultValue={newContent}
          onChange={(a) => {
            setNewContent(a());
          }}
          dark={true}
          /* @ts-ignore */
          // theme={{}}
          className="w-[80%] child-paragraphs:leading-7 font-light child-list:text-white/70 child-images:rounded-xl child-images:shadow-xl child-code:rounded-lg child-list:list-disc child-list:list-inside"
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
            setAppLoading(true);

            const newVal = newContent;

            const encodedMeta = stringify("", newMetadata);

            const final = encodedMeta + "\n" + newVal;

            const response = await fetch("/api/update-blog", {
              body: JSON.stringify({
                categoryAndSlug: `${metadata.category}/${slug}`,
                newContent: final,
              } as BlogUpdate),
            });

            setAppLoading(false);

            if (!response.ok) alert("Update failed.");
            else {
              reload();
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
