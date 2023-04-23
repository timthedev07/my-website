import { MergeComponents } from "@mdx-js/react/lib";
import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { LinkSVG } from "../svgs/Link";
import { ReactNode } from "react";
import { PlaintextPre } from "./blog-components/PlaintextPre";
import { SizedImage } from "./blog-components/SizedImage";

const PLAIN_TEXT_COLOR = "text-white/[0.825]";

const headingId = (
  children: ReactNode,
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
) => {
  return (
    "~".repeat(parseInt(type[1] as string)) +
    encodeURIComponent(children?.valueOf().toString() || "")
  );
};

export const components: MDXComponents | MergeComponents = {
  h1: ({ children, ...props }) => {
    const finalId = headingId(children, "h1");
    return (
      <>
        <h1
          {...props}
          id={finalId}
          className="flex items-center gap-4 text-[2.6rem] overflow py-0 leading-none"
        >
          {children}
          <LinkSVG
            onClick={() => {
              navigator.clipboard.writeText(
                window.location.href + "#" + finalId
              );
            }}
            className="mt-2 cursor-pointer fill-slate-400/40 hover:fill-cyan-400/80 w-12 transition duration-200"
          />
          <a aria-hidden="true" tabIndex={-1} href={"#" + finalId}></a>
        </h1>
        <hr className="h-0 border-slate-200/20 border" />
      </>
    );
  },
  h2: ({ children, ...props }) => {
    const finalId = headingId(children, "h2");
    return (
      <h2 {...props} id={finalId} className="flex items-center gap-4">
        {children}
        <LinkSVG
          onClick={() => {
            navigator.clipboard.writeText(window.location.href + "#" + finalId);
          }}
          className="mt-2 cursor-pointer fill-slate-400/40 hover:fill-cyan-400/[.75] w-10 transition duration-200"
        />
        <a aria-hidden="true" tabIndex={-1} href={"#" + finalId}></a>
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const finalId = headingId(children, "h3");
    return (
      <h3 {...props} id={finalId} className="flex items-center gap-4">
        {children}
        <LinkSVG
          onClick={() => {
            navigator.clipboard.writeText(window.location.href + "#" + finalId);
          }}
          className="mt-2 cursor-pointer fill-slate-400/40 hover:fill-cyan-400/70 w-8 transition duration-200"
        />
        <a aria-hidden="true" tabIndex={-1} href={"#" + finalId}></a>
      </h3>
    );
  },
  p: ({ className: _, ...props }) => {
    return <p {...props} className={`${PLAIN_TEXT_COLOR} text-paragraph`}></p>;
  },
  ul: ({ className: _, ...props }) => {
    return (
      <ul
        {...props}
        className={`list-disc list-inside text-[1.1rem] ${PLAIN_TEXT_COLOR}`}
      ></ul>
    );
  },
  ol: ({ className: _, ...props }) => {
    return (
      <ol
        {...props}
        className={`list-decimal list-inside text-[1.1rem] ${PLAIN_TEXT_COLOR}`}
      ></ol>
    );
  },
  a: ({ href, ref: _, ...props }) => {
    return (
      <Link
        {...props}
        href={href || ""}
        className="hover:underline text-cyan-400"
      ></Link>
    );
  },
  img: ({}) => {
    return (
      <div className="mx-auto bg-red-500/60 border-2 border-red-900/90 rounded-xl px-8 py-4">
        FORBIDDEN USE OF UNSIZED IMAGES
      </div>
    );
  },
  code: ({ className, ...props }) => {
    return (
      <code
        className={`${
          !className || className === ""
            ? "font-normal leading-tight border-[1px] border-slate-300/60 bg-slate-950 rounded-md px-2 py-[1px]"
            : ""
        } ${className}`}
        {...props}
      ></code>
    );
  },
  blockquote: ({ className, ...props }) => {
    return (
      <blockquote
        className={`border-l-[7px] border-gray-600/60 pl-6 text-gray-400/80 bg-slate-950/30 py-3 ${
          className || ""
        }`}
        {...props}
      ></blockquote>
    );
  },
  PlaintextPre: PlaintextPre,
  SizedImage: SizedImage,
};
