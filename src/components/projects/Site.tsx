import Link from "next/link";
import { FC } from "react";
import { WithStarCount } from "../../pages/projects";
import { GHSVG } from "../svgs/GH";
import { StarSVG } from "../svgs/Star";
import { TagList } from "../TagList";

export const Site: FC<WithStarCount & { ss?: string }> = ({
  githubRepo,
  name,
  stars,
  url,
  topics,
  description,
}) => {
  return (
    <div className="flex flex-col p-4 rounded-md border border-slate-400/40 w-80 md:w-[516px] h-80 bg-slate-400/20 transform transition duration-200 hover:-translate-y-1">
      <Link href={url} passHref>
        <div className="w-full h-[60%] relative rounded-md overflow-hidden cursor-pointer"></div>
      </Link>
      <div className="flex flex-1 flex-col h-auto justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">{name}</h3>
          <TagList tagContents={topics} className="overflow-x-auto" />
          <p className="flex-[2_1_0] flex-grow text-white/75 text-[14px]">
            {description}
          </p>
        </div>
        <Link href={`https://github.com/timthedev07/${githubRepo}/`} passHref>
          <div className="cursor-pointer bg-slate-300/30 w-min flex items-center rounded-md border-2 border-slate-400/40 transition duration-200 hover:bg-slate-500/40">
            <div className="border-r-2 border-slate-400/20 py-2 px-2">
              <GHSVG />
            </div>
            <span className="px-2 flex items-center gap-1 w-16 justify-center">
              {stars}
              <StarSVG className="fill-amber-400 w-4 h-4" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
