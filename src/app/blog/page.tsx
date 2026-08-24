import Blogs from "../../legacy/blog";
import { Suspense } from "react";
import { getBlogsWithMetadata, type MDXBlogMeta } from "../../lib/mdx";
import { BLOG_CATEGORIES } from "../../types/blogCategories";

export default async function BlogPage() {
  const groupedBlogs = await getBlogsWithMetadata();
  const keywords = Array.from(
    new Set(
      BLOG_CATEGORIES.flatMap((category) =>
        groupedBlogs[category].flatMap(
          ({ metadata }) => (JSON.parse(metadata) as MDXBlogMeta).keywords
        )
      )
    )
  );

  return (
    <Suspense>
      <Blogs groupedBlogs={groupedBlogs} keywords={keywords} />
    </Suspense>
  );
}
