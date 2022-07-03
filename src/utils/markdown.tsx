import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrism from "rehype-prism";

export default async function markdownToHtml(markdown: string) {
  const resultHTML = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(markdown);

  return String(resultHTML);
}
