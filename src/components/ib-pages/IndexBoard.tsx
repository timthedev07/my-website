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
}

export const IndexBoard: FC<IndexBoardProps> = ({
  title,
  description,
  icon,
  buttonColor,
  linkURL,
}) => {
  return (
    <article
      className={`flex flex-col gap-3 items-center p-4 bg-slate-900 rounded-md border border-slate-100/40 w-96 h-72 z-10 hover:z-20`}
    >
      {icon}
      <h1 className="text-center w-full font-semibold text-lg">{title}</h1>
      <p className="text-base text-left text-white/[.75] w-full">
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
