import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default async function markdownToHtml(markdown: string) {
  const resultHTML = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeKatex, { strict: true })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return String(resultHTML);
}
