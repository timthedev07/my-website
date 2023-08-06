import Link from "next/link";
import { FC } from "react";
import { IndexIconSVG } from "../svgs/IndexIcon";
import { LeftArrowSVG } from "../svgs/LeftArrowSVG";
import { RightArrowSVG } from "../svgs/RightArrowSVG";

interface PageSwitcherProps {
  nextDisplay?: string;
  prevDisplay?: string;
  nextURL?: string;
  prevURL?: string;
  indexPageURL: string;
}

const pageSwitcherBase =
  "cursor-pointer transition duration-800 h-min py-2 px-4 rounded-md bg-transparent hover:bg-slate-300/20 bg-opacity-30 text-slate-50/80 hover:text-slate-50/100 text-sm sm:text-base";

export const PageSwitcher: FC<PageSwitcherProps> = ({
  prevDisplay,
  prevURL,
  nextDisplay,
  nextURL,
  indexPageURL,
}) => {
  return (
    <ul
      className="z-10 flex justify-evenly items-center absolute bottom-12 bg-slate-800 bg-opacity-40 backdrop-blur-2xl w-11/12 md:w-full max-w-[756px] min-w-[286px] rounded-2xl px-8 py-4 border-slate-300/30 border"
      style={{
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      {!!prevDisplay && !!prevURL ? (
        <li
          className={`flex justify-evenly items-center stext-center flex-1 px-4 sm:px-8 border-l border-l-slate-400/30 `}
        >
          <LeftArrowSVG className="w-6 h-6" />
          <Link href={prevURL}>
            <span className={pageSwitcherBase}>{prevDisplay}</span>
          </Link>
          <div className="w-6" />
        </li>
      ) : (
        <li className="flex-1" />
      )}
      <li
        className={`md:flex-1 text-center px-4 sm:px-6 md:px-8 border-x border-x-slate-400/30 `}
      >
        <div className={`flex justify-center`}>
          <Link href={indexPageURL}>
            <div className="group w-min cursor-pointer transition duration-800 h-min p-2 rounded-md bg-transparent hover:bg-slate-300/20 bg-opacity-30 text-slate-50/80 hover:text-slate-50/100">
              <IndexIconSVG
                className={`transition duration-800 h-6 w-6 text-slate-300/80 group-hover:text-slate-300`}
              />
            </div>
          </Link>
        </div>
      </li>
      {!!nextDisplay && !!nextURL ? (
        <li
          className={`flex justify-evenly items-center stext-center flex-1 px-4 sm:px-8 border-r border-r-slate-400/30 `}
        >
          <div className="w-6" />
          <Link href={nextURL}>
            <span className={pageSwitcherBase}>{nextDisplay}</span>
          </Link>
          <RightArrowSVG className="w-6 h-6" />
        </li>
      ) : (
        <li className="flex-1" />
      )}
    </ul>
  );
};
