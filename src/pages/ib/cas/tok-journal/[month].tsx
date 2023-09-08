import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getAllMonths,
  getMonthEntries,
} from "../../../../lib/ib-cas/reflections-mdx";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../../../components/mdx-custom";
import Image from "next/image";
import BG from "../../../../../public/images/monterey.jpg";
import { AppleBGAttribution } from "../../../../components/AppleBGAttribution";
import { PageSwitcher } from "../../../../components/ib-pages/PageSwitcher";

export interface ReflectionsMonthProps {
  month: string;
  allMonths: string;
  monthEntries: string;
}

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

export const pageMinHeight = "min-h-[612px]";

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
  const hasPrev = months.indexOf(yearMonth) < months.length - 1;
  const hasNext = months.indexOf(yearMonth) > 0;

  return (
    <>
      <div className={`flex justify-center relative ${pageMinHeight}`}>
        <div className="fixed h-screen w-screen">
          <Image
            src={BG}
            alt=""
            fill
            className={`z-0 object-cover blur brightness-[0.8]`}
          />
        </div>
        <AppleBGAttribution />
        <div className="relative pt-52 pb-96 w-9/12 md:w-full max-w-[756px] min-w-[286px]">
          <header className="w-full flex justify-center items-center mb-20">
            <h1 className="w-full text-center font-bold">
              TOK Journal in {monthNames[parseInt(month) - 1]}, {year}
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
        <PageSwitcher
          indexPageURL="/ib/cas/tok-journal/"
          prevDisplay={
            hasPrev ? months[months.indexOf(yearMonth) + 1] : undefined
          }
          prevURL={
            hasPrev
              ? `/ib/cas/tok-journal/${months[months.indexOf(yearMonth) + 1]}`
              : undefined
          }
          nextDisplay={
            hasNext ? months[months.indexOf(yearMonth) - 1] : undefined
          }
          nextURL={
            hasNext
              ? `/ib/cas/tok-journal/${months[months.indexOf(yearMonth) - 1]}`
              : undefined
          }
        />
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
