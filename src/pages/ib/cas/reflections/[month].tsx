import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getAllMonths,
  getMonthEntries,
} from "../../../../lib/ib-cas/reflections-mdx";

export interface ExperiencesMonthProps {
  month: string;
}

const IBExperiences: NextPage<ExperiencesMonthProps> = ({ month }) => {
  return <>{month}</>;
};

export const getStaticProps: GetStaticProps<ExperiencesMonthProps> = async (
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

export default IBExperiences;
