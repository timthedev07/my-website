import { notFound } from "next/navigation";
import Project from "./Client";
import { getAllProjectEntries, getProjectMDX } from "../../../../../lib/ib-cas/projects-mdx";
import { serialize } from "next-mdx-remote/serialize";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function generateStaticParams() {
  return getAllProjectEntries(false).map(({ fname }) => ({ slug: fname }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { content, data } = getProjectMDX(slug);
    const mdxData = await serialize(content, {
      mdxOptions: { remarkPlugins: [remarkUnwrapImages], rehypePlugins: [rehypeAutolinkHeadings] },
    });
    return <Project slug={slug} mdxData={JSON.stringify({ ...mdxData, frontmatter: data })} />;
  } catch {
    notFound();
  }
}
