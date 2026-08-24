import { notFound } from "next/navigation";
import BlogPost from "../../../../legacy/blog/[category]/[slug]";
import { readMDX } from "../../../../lib/mdx";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  try {
    const mdxData = await readMDX(slug, category);
    return <BlogPost slug={slug} mdxDataRaw={JSON.stringify(mdxData)} />;
  } catch {
    notFound();
  }
}
