import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getAllMonths,
  getMonthEntries,
} from "../../../../lib/ib-cas/reflections-mdx";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../../../components/mdx-custom";
import Image from "next/image";
import BG from "../../../../../public/images/monterey.jpg";

export interface ReflectionsMonthProps {
  month: string;
  monthEntries: string;
}

const monthNames = [
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
}) => {
  const data = JSON.parse(monthEntries) as Awaited<
    ReturnType<typeof getMonthEntries>
  >;
  const [year, month] = yearMonth.split("-");

  return (
    <>
      <div className="flex justify-center relative h-screen">
        <Image src={BG} alt="" fill className="z-0 object-cover blur" />
        <header className="w-full flex justify-center items-center">
          <h1 className="w-full text-center">
            Reflections in {monthNames[parseInt(month) - 1]}, {year}
          </h1>
        </header>
        <ol>
          {data.map((each) => (
            <li key={each[1]}>
              <MDXRemote components={components} {...each[0]} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<ReflectionsMonthProps> = async (
  context
) => {
  let month = context.params?.month;
  const curr = getAllMonths()[0];
  if (!month || typeof month === "object") month = curr;
  const monthEntries = await getMonthEntries(month);

  return {
    props: {
      month,
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
