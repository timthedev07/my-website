import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getAllMonths,
  getMonthEntries,
} from "../../../../lib/ib-cas/reflections-mdx";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../../../components/mdx-custom";
import Image from "next/image";
import BG from "../../../../../public/images/monterey.jpg";
import { LeftArrowSVG } from "../../../../components/svgs/LeftArrowSVG";
import { RightArrowSVG } from "../../../../components/svgs/RightArrowSVG";
import { IndexIconSVG } from "../../../../components/svgs/IndexIcon";
import Link from "next/link";

export interface ReflectionsMonthProps {
  month: string;
  allMonths: string;
  monthEntries: string;
}

const pageSwitcherBase =
  "cursor-pointer transition duration-800 h-min px-4 rounded-md bg-transparent hover:bg-slate-300/20 bg-opacity-30 text-slate-50/80 hover:text-slate-50/100 text-sm sm:text-base";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const IBReflections: NextPage<ReflectionsMonthProps> = ({
  month: yearMonth,
  monthEntries,
  allMonths,
}) => {
  const months = JSON.parse(allMonths) as string[];
  const data = JSON.parse(monthEntries) as Awaited<
    ReturnType<typeof getMonthEntries>
  >;
  const [year, month] = yearMonth.split("-");

  return (
    <>
      <div className="flex justify-center relative">
        <div className="fixed h-screen w-screen">
          <Image
            src={BG}
            alt=""
            fill
            className="z-0 object-cover blur brightness-[0.8]"
          />
        </div>
        <div className="relative pt-52 pb-96 w-9/12 md:w-full max-w-[756px] min-w-[286px]">
          <header className="w-full flex justify-center items-center mb-20">
            <h1 className="w-full text-center font-bold">
              Reflections in {monthNames[parseInt(month) - 1]}, {year}
            </h1>
          </header>
          <ol className="bg-slate-900 bg-opacity-50 backdrop-blur-2xl rounded-2xl w-full px-24 py-16 border-slate-300/30 border flex gap-20 flex-col">
            {data.map((each, ind) => (
              <li key={each[1]} className="flex flex-col items-center gap-8">
                <h2 className="text-center font-bold text-2xl text-slate-50/90">
                  {new Date(each[1]).toDateString()}
                </h2>
                <div className="w-full">
                  <MDXRemote components={components} {...each[0]} />
                </div>
                {ind !== data.length - 1 ? (
                  <hr className="h-0 border-[0.01rem] border-slate-300/30 w-9/12" />
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ol>
        </div>
        <ul
          className="flex justify-evenly items-center absolute bottom-12 bg-slate-800 bg-opacity-40 backdrop-blur-2xl w-11/12 md:w-full max-w-[756px] min-w-[286px] rounded-2xl px-8 py-4 border-slate-300/30 border"
          style={{
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          {months.indexOf(yearMonth) < months.length - 1 ? (
            <li
              className={`flex justify-evenly items-center stext-center flex-1 px-4 sm:px-8 border-l border-l-slate-400/30 `}
            >
              <LeftArrowSVG className="w-6 h-6" />
              <Link
                href={`/ib/cas/reflections/${
                  months[months.indexOf(yearMonth) + 1]
                }`}
              >
                <span className={pageSwitcherBase}>
                  {months[months.indexOf(yearMonth) + 1]}
                </span>
              </Link>

              <div className="w-6"></div>
            </li>
          ) : (
            <li className={`flex-1`}></li>
          )}
          <li
            className={`md:flex-1 text-center sm:px-6 md:px-8 border-x border-x-slate-400/30 `}
          >
            <div className={`flex justify-center`}>
              <Link href={"/ib/cas/reflections/"}>
                <div className="group w-min cursor-pointer transition duration-800 h-min p-2 rounded-md bg-transparent hover:bg-slate-300/20 bg-opacity-30 text-slate-50/80 hover:text-slate-50/100">
                  <IndexIconSVG
                    className={`transition duration-800 h-6 w-6 text-slate-300/80 group-hover:text-slate-300`}
                  />
                </div>
              </Link>
            </div>
          </li>
          {months.indexOf(yearMonth) > 0 ? (
            <li
              className={`flex justify-evenly items-center stext-center flex-1 px-4 sm:px-8 border-r border-r-slate-400/30 `}
            >
              <div className="w-6"></div>
              <Link
                href={`/ib/cas/reflections/${
                  months[months.indexOf(yearMonth) - 1]
                }`}
              >
                <span className={pageSwitcherBase}>
                  {months[months.indexOf(yearMonth) - 1]}
                </span>
              </Link>
              <RightArrowSVG className="w-6 h-6" />
            </li>
          ) : (
            <li className={`flex-1`}></li>
          )}
        </ul>
        <div className="absolute top-20 right-12 text-sm text-slate-200/70">
          Attribution to Apple® for background
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<ReflectionsMonthProps> = async (
  context
) => {
  let month = context.params?.month;
  const allMonths = getAllMonths();
  const curr = allMonths[0];
  if (!month || typeof month === "object") month = curr;
  const monthEntries = await getMonthEntries(month);

  return {
    props: {
      month,
      allMonths: JSON.stringify(allMonths),
      monthEntries: JSON.stringify(monthEntries),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllMonths().map((each) => ({
      params: { month: each },
    })),
    fallback: "blocking",
  };
};

export default IBReflections;
