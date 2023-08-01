import { GetStaticProps, NextPage } from "next";
import { getAllMonths } from "../../../../lib/ib-cas/reflections-mdx";
import { monthNames } from "./[month]";

export interface Props {
  monthsRaw: string;
}

const ReflectionsIndex: NextPage<Props> = ({ monthsRaw }) => {
  const months = JSON.parse(monthsRaw) as string[];

  return (
    <ul>
      {months.map((each) => {
        const [year, month] = each.split("-");
        return (
          <li key={each}>
            {monthNames[parseInt(month)]}, {year}
          </li>
        );
      })}
    </ul>
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
