import { GetStaticProps, NextPage } from "next";
import { getAllMonths } from "../../../../lib/ib-cas/reflections-mdx";
import { monthNames } from "./[month]";
import Image from "next/image";
import BG from "../../../../../public/images/macosHelloGreen.jpg";
import {
  groupByYear,
  getUniqueYears,
} from "../../../../lib/ib-cas/reflections-helper";
import Link from "next/link";
import { AppleBGAttribution } from "../../../../components/AppleBGAttribution";

export interface Props {
  monthsRaw: string;
}

const ReflectionsIndex: NextPage<Props> = ({ monthsRaw }) => {
  const yearMonths = JSON.parse(monthsRaw) as string[];
  const groupedMonths = groupByYear(yearMonths);

  return (
    <div className="flex flex-col justify-center relative h-screen">
      <div className="fixed h-screen w-screen">
        <Image
          src={BG}
          alt=""
          fill
          className="z-0 object-cover blur brightness-[0.85]"
        />
      </div>
      <AppleBGAttribution />
      <section className="relative flex flex-col items-center lg:justify-start gap-12 px-8 lg:px-48 pt-48 w-full h-full">
        <header className="relative">
          <h1 className="font-semibold">IB CAS Reflections</h1>
        </header>
        <div className="flex flex-wrap justify-evenly flex-1 w-full gap-10 md:gap-0 pb-72">
          {getUniqueYears(yearMonths).map((year) => (
            <div key={year} className="w-80 sm:w-68 md:w-80 h-[412px]">
              <ul className="h-full border-b-4 border-b-slate-500/10 rounded-3xl hide-scrollbar overflow-y-scroll px-8 py-16 gap-12 flex flex-col items-center w-full">
                <h3 className="text-slate-50/90 text-center border-b border-b-slate-200/30 w-7/12">
                  {year}
                </h3>
                {groupedMonths[year].map((each, ind) => {
                  const [year, month] = each.split("-");
                  return (
                    <li
                      key={each}
                      className="w-full flex flex-col items-center"
                    >
                      <Link
                        className="w-full text-slate-50/70"
                        href={`/ib/cas/reflections/${each}`}
                      >
                        <div className="rounded-xl bg-slate-800 bg-opacity-40 backdrop-blur-xl text-center py-7 border border-slate-300/10">
                          {monthNames[parseInt(month) - 1]}, {year}
                        </div>
                      </Link>
                      {ind < groupedMonths[year].length - 1 ? (
                        <hr className="rotate-90 w-12 border-slate-300/30 mt-12" />
                      ) : (
                        <></>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const months = getAllMonths();
  return {
    props: {
      monthsRaw: JSON.stringify(months),
    },
  };
};

export default ReflectionsIndex;
