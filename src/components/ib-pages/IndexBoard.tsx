import { Button } from "dragontail-experimental";
import Link from "next/link";
import { FC } from "react";

declare const CSTypeValues: readonly [
  "sky",
  "teal",
  "red",
  "orange",
  "dark",
  "light",
  "cyan",
  "emerald",
  "green",
  "neutral"
];
export type CSType = (typeof CSTypeValues)[number];

interface IndexBoardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  linkURL: string;
  buttonColor: CSType;
  defaultZIndexClass: string;
}

export const IndexBoard: FC<IndexBoardProps> = ({
  title,
  description,
  icon,
  buttonColor,
  linkURL,
  defaultZIndexClass,
}) => {
  return (
    <article
      className={`flex flex-col gap-3 items-center p-4 bg-slate-900 rounded-md border-2 border-slate-400/20 w-72 h-96 ${defaultZIndexClass} hover:z-20 ring-4 ring-slate-950 shadow-cyan-300 transition duration-400 hover:shadow-2xl`}
    >
      {icon}
      <h1 className="text-center w-full font-semibold text-2xl">{title}</h1>
      <p className="text-base text-left text-slate-200/80 w-full">
        {description}
      </p>
      <Link href={linkURL}>
        <Button color={buttonColor} variant="outline" className="mr-auto">
          See Page
        </Button>
      </Link>
    </article>
  );
};
