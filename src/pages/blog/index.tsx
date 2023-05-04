import type { GetStaticProps, NextPage } from "next";
import { useNavContext } from "../../components/nav/Navbar";
import { ChangeEventHandler, useEffect, useState } from "react";
import {
  BlogCategoryTabType,
  BLOG_CATEGORIES,
} from "../../types/blogCategories";
import { BlogFileInfo, BlogGroups } from "../../utils/groupBlogs";
import { useRouter } from "next/router";
import { BlogTabs } from "../../components/BlogTabs";
import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "dragontail-experimental";
import Image from "next/image";
import headerImage from "../../../public/images/blog-heading.jpg";
import { MDXBlogMeta, getBlogsWithMetadata } from "../../lib/mdx";
import { SearchSVG } from "../../components/svgs/Search";
import { anyElementContains } from "../../utils/arrays";
import { NextSeo } from "next-seo";
import SEOConfig from "../../utils/seo-config";
import { getBlurDataURL } from "../../utils/blurDataUrl";
import { SmallBlogDisplay } from "../../components/BlogDisplay";

interface Props {
  groupedBlogs: BlogGroups;
  keywords: Array<string>;
}

const Blogs: NextPage<Props> = ({
  groupedBlogs: filenamesWithMetadata,
  keywords: tags,
}) => {
  const router = useRouter();
  const { query, isReady } = router;
  const { setNavTransparent, windowSize } = useNavContext();
  const [currTab, setCurrTab] = useState<BlogCategoryTabType>(() => "recent");
  const [currTag, setCurrTag] = useState<string | null>(null);
  const [filteredByTag, setFilteredByTag] = useState<BlogFileInfo[] | null>(
    () => null
  );

  const tabCandidates = filenamesWithMetadata[currTab].sort(
    (a, b) =>
      new Date(JSON.parse(b.metadata).date).valueOf() -
      new Date(JSON.parse(a.metadata).date).valueOf()
  );

  useEffect(() => {
    const initCategory = () => {
      if (!query.category) return;
      if (
        ["recent", ...BLOG_CATEGORIES].findIndex(
          (val) => val === query.category
        ) < 0
      )
        return;
      setCurrTab(query.category as any);
    };

    const initTag = () => {
      if (!query.tag || currTag) return;
      setCurrTag(query.tag as any);
      handleSearch(query.tag as any);
    };

    // populating the states according to query params(if any)
    initCategory();
    initTag();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady, query, tags]);

  useEffect(() => {
    setNavTransparent(true);
  }, [setNavTransparent]);

  const handleSearchUpdate: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrTag(e.target.value);
  };

  const handleSearch = (searchTag?: string) => {
    if (!currTag && !searchTag) return;

    const term = currTag || (searchTag as string);

    const newCandidateIds: BlogFileInfo[] = [];

    // searching strategy
    for (const candidate of tabCandidates) {
      const { keywords } = JSON.parse(candidate.metadata) as MDXBlogMeta;

      if (anyElementContains(keywords, term)) {
        newCandidateIds.push(candidate);
      }
    }

    setFilteredByTag(newCandidateIds);

    router.query.tag = term;
    router.push(router);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.category]);

  return (
    <>
      <NextSeo
        title="Blog"
        description="My Blog Collection"
        openGraph={{ url: `${SEOConfig.openGraph?.url}blog` }}
      />
      <header className="relative w-full h-72 flex justify-center items-center">
        <Image
          placeholder="blur"
          fill
          src={headerImage}
          blurDataURL={getBlurDataURL(1920, 635)}
          className="absolute w-full h-full object-cover brightness-[0.6] pointer-events-none"
          alt=""
        />
        <h2 className="text-center absolute font-medium uppercase select-none">
          My Blog
        </h2>
      </header>

      <div className="w-full flex justify-center items-center px-16 md:px-24 py-4">
        <Input
          placeholder="Type to search by tag"
          defaultValue={currTag || undefined}
          leftAddon={<SearchSVG className="w-6 h-6 text-gray-300" />}
          rightElement={
            <Button
              scale="sm"
              color="green"
              className="w-[90%]"
              onClick={() => {
                handleSearch();
              }}
            >
              Go
            </Button>
          }
          rightElementWidth="w-24"
          containerClassName="flex-1 flex-grow"
          onChange={handleSearchUpdate}
        />
      </div>

      {windowSize ? (
        windowSize > 800 ? (
          <BlogTabs currTab={currTab} />
        ) : (
          <Menu className="m-6">
            <MenuButton className="capitalize">{currTab || ""}</MenuButton>
            <MenuList>
              {["recent", ...BLOG_CATEGORIES]
                .filter((val) => val !== currTab)
                .map((each) => (
                  <MenuItem
                    onClick={() => {
                      router.query.category = each;
                      router.push(router);
                    }}
                    className="capitalize"
                    key={each}
                  >
                    {each}
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        )
      ) : (
        ""
      )}

      <ol className="w-full flex gap-24 p-8 flex-wrap justify-center">
        {(filteredByTag || tabCandidates).map(
          ({ metadata: metadataAsString, ...rest }) => {
            const metadata = JSON.parse(metadataAsString) as MDXBlogMeta;
            return (
              <SmallBlogDisplay
                {...rest}
                metadata={metadata}
                key={metadata.title}
              />
            );
          }
        )}
      </ol>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getBlogsWithMetadata();

  const allKeywords: string[] = [];

  for (const c of BLOG_CATEGORIES) {
    for (const d of data[c]) {
      const { keywords } = JSON.parse(d.metadata) as MDXBlogMeta;
      allKeywords.concat(keywords);
    }
  }

  return {
    props: {
      groupedBlogs: data,
      keywords: Array.from(new Set(allKeywords)),
    } as Props,
  };
};

export default Blogs;
