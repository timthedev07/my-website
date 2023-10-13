import { GetStaticProps, NextPage } from "next";
import { getAllEntriesW_Preview } from "../../../../lib/ib-cas/experiences-mdx";
import {
  TimelineItem,
  timelineHeadColors,
  timelineDotColors,
  timelineDateBgColors,
} from "../../../../components/ib-pages/experiences-timeline/TimelineItem";

export interface Props {
  rawData: string;
}

const BGSVG: React.FC<{ className: string }> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" {...props}>
      <path
        fill="#6198ff"
        d="m0 171 15.2-18.3c15.1-18.4 45.5-55 75.8-68.4 30.3-13.3 60.7-3.3 91-1.6 30.3 1.6 60.7-5 91 0 30.3 5 60.7 21.6 91 38.3 30.3 16.7 60.7 33.3 90.8 35 30.2 1.7 60.2-11.7 90.4-15 30.1-3.3 60.5 3.3 90.8-6.7 30.3-10 60.7-36.6 91-41.6 30.3-5 60.7 11.6 91 20 30.3 8.3 60.7 8.3 91 1.6 30.3-6.6 60.7-20 75.8-26.6L1000 81V0H0Z"
      />
      <path
        fill="#3c80ff"
        d="M0 481h15.2c15.1 0 45.5 0 75.8-35 30.3-35 60.7-105 91-125 30.3-20 60.7 10 91 36.7 30.3 26.6 60.7 50 91 50 30.3 0 60.7-23.4 90.8-30C485 371 515 381 545.2 406c30.1 25 60.5 65 90.8 78.3 30.3 13.4 60.7 0 91-21.6 30.3-21.7 60.7-51.7 91-58.4 30.3-6.6 60.7 10 91-15 30.3-25 60.7-91.6 75.8-125L1000 231V79l-15.2 6.7c-15.1 6.6-45.5 20-75.8 26.6-30.3 6.7-60.7 6.7-91-1.6-30.3-8.4-60.7-25-91-20-30.3 5-60.7 31.6-91 41.6-30.3 10-60.7 3.4-90.8 6.7-30.2 3.3-60.2 16.7-90.4 15-30.1-1.7-60.5-18.3-90.8-35-30.3-16.7-60.7-33.3-91-38.3-30.3-5-60.7 1.6-91 0-30.3-1.7-60.7-11.7-91 1.6-30.3 13.4-60.7 50-75.8 68.4L0 169Z"
      />
      <path
        fill="#06f"
        d="m0 651 15.2 15c15.1 15 45.5 45 75.8 63.3 30.3 18.4 60.7 25 91 21.7 30.3-3.3 60.7-16.7 91-21.7 30.3-5 60.7-1.6 91-6.6 30.3-5 60.7-18.4 90.8-33.4 30.2-15 60.2-31.6 90.4-30 30.1 1.7 60.5 21.7 90.8 35 30.3 13.4 60.7 20 91 11.7 30.3-8.3 60.7-31.7 91-31.7 30.3 0 60.7 23.4 91 25 30.3 1.7 60.7-18.3 75.8-28.3l15.2-10V229l-15.2 33.3c-15.1 33.4-45.5 100-75.8 125-30.3 25-60.7 8.4-91 15-30.3 6.7-60.7 36.7-91 58.4-30.3 21.6-60.7 35-91 21.6-30.3-13.3-60.7-53.3-90.8-78.3-30.2-25-60.2-35-90.4-28.3-30.1 6.6-60.5 30-90.8 30-30.3 0-60.7-23.4-91-50-30.3-26.7-60.7-56.7-91-36.7-30.3 20-60.7 90-91 125-30.3 35-60.7 35-75.8 35H0Z"
      />
      <path
        fill="#0059dd"
        d="m0 761 15.2 23.3c15.1 23.4 45.5 70 75.8 88.4 30.3 18.3 60.7 8.3 91 6.6 30.3-1.6 60.7 5 91 6.7 30.3 1.7 60.7-1.7 91-11.7 30.3-10 60.7-26.6 90.8-48.3 30.2-21.7 60.2-48.3 90.4-46.7 30.1 1.7 60.5 31.7 90.8 58.4 30.3 26.6 60.7 50 91 35 30.3-15 60.7-68.4 91-76.7 30.3-8.3 60.7 28.3 91 33.3 30.3 5 60.7-21.6 75.8-35L1000 781V659l-15.2 10c-15.1 10-45.5 30-75.8 28.3-30.3-1.6-60.7-25-91-25-30.3 0-60.7 23.4-91 31.7-30.3 8.3-60.7 1.7-91-11.7-30.3-13.3-60.7-33.3-90.8-35-30.2-1.6-60.2 15-90.4 30-30.1 15-60.5 28.4-90.8 33.4-30.3 5-60.7 1.6-91 6.6-30.3 5-60.7 18.4-91 21.7-30.3 3.3-60.7-3.3-91-21.7C60.7 709 30.3 679 15.2 664L0 649Z"
      />
      <path
        fill="#004cbb"
        d="M0 1001h1000V779l-15.2 13.3c-15.1 13.4-45.5 40-75.8 35-30.3-5-60.7-41.6-91-33.3-30.3 8.3-60.7 61.7-91 76.7-30.3 15-60.7-8.4-91-35-30.3-26.7-60.7-56.7-90.8-58.4-30.2-1.6-60.2 25-90.4 46.7-30.1 21.7-60.5 38.3-90.8 48.3-30.3 10-60.7 13.4-91 11.7-30.3-1.7-60.7-8.3-91-6.7-30.3 1.7-60.7 11.7-91-6.6-30.3-18.4-60.7-65-75.8-88.4L0 759Z"
      />
    </svg>
  );
};

// timeline style page; from newest to oldest
const ExperiencesIndex: NextPage<Props> = ({ rawData }) => {
  const data = JSON.parse(rawData) as ReturnType<typeof getAllEntriesW_Preview>;

  return (
    <div className="w-full min-w-[600px] min-h-screen relative flex flex-col items-center">
      <div className="fixed z-0 blur-md" id="experience-index">
        <BGSVG className="h-[150vh] landscape:w-screen landscape:h-auto object-cover brightness-[0.7] blur-sm" />
      </div>
      <header className="relative h-full mt-32 px-4 text-center">
        <h1 className="font-semibold">IB CAS Experiences Timeline</h1>
      </header>
      <div className="relative w-full z-10 pb-64 flex justify-center">
        <ol
          id="experiences-timeline"
          className="w-11/12 md:w-8/12 max-w-[1024px] grid gap-x-24 gap-y-20 pb-64"
        >
          <li className="now-card"></li>
          {data.map((item, ind) => {
            const i = ind % timelineHeadColors.length;
            return (
              <TimelineItem
                headColor={timelineHeadColors[i]}
                dotColor={timelineDotColors[i]}
                dateBgColor={timelineDateBgColors[i]}
                {...item}
                key={item.dateStr}
                direction={(ind + 1) % 2}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      rawData: JSON.stringify(getAllEntriesW_Preview()),
    },
  };
};

export default ExperiencesIndex;
