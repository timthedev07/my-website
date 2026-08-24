import { notFound } from "next/navigation";
import Experience from "./Client";
import { getAdjacentEntries, getAllAvailablePaths, getEntryRawContent, EXPERIENCES_DATA_DIR } from "../../../../../lib/ib-cas/experiences-mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeUnwrapImages from "rehype-unwrap-images";

export function generateStaticParams() {
  return getAllAvailablePaths(EXPERIENCES_DATA_DIR).map((date) => ({ date }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const raw = getEntryRawContent(date);
  if (!raw) notFound();
  const mdxData = await serialize(raw.content, { mdxOptions: { rehypePlugins: [rehypeAutolinkHeadings, rehypeUnwrapImages] } });
  return <Experience dateStr={date} mdxData={JSON.stringify({ ...mdxData, frontmatter: raw.data })} neighbors={JSON.stringify(getAdjacentEntries(date))} />;
}
