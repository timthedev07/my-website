import { Button } from "dragontail-experimental";
import { FC, useEffect, useState } from "react";

export enum TimelineItemDirection {
  Left,
  Right,
}

export const timelineHeadColors = [
  "from-timeline-terracotta/80 via-timeline-terracotta/80",
  "from-timeline-darkblue/80 via-timeline-darkblue/80",
  "from-timeline-tangerine/80 via-timeline-tangerine/80",
  "from-timeline-bronze/80 via-timeline-bronze/80",
  "from-timeline-blue/80 via-timeline-blue/80",
  "from-timeline-brown/80 via-timeline-brown/80",
  "from-timeline-forest/80 via-timeline-forest/80",
  "from-timeline-green/80 via-timeline-green/80",
];

export const timelineDotColors = [
  "after:border-timeline-terracotta/90",
  "after:border-timeline-darkblue/90",
  "after:border-timeline-tangerine/90",
  "after:border-timeline-bronze/90",
  "after:border-timeline-blue/90",
  "after:border-timeline-brown/90",
  "after:border-timeline-forest/90",
  "after:border-timeline-green/90",
];

export const timelineDateBgColors = [
  "bg-timeline-terracotta/70",
  "bg-timeline-darkblue/70",
  "bg-timeline-tangerine/70",
  "bg-timeline-bronze/70",
  "bg-timeline-blue/70",
  "bg-timeline-brown/70",
  "bg-timeline-forest/70",
  "bg-timeline-green/70",
];

interface TimelineItemProps {
  dateStr: string; // yyyy-mm-dd
  description: string;
  direction: TimelineItemDirection;
  headColor: string;
  activity: string;
  dotColor: string;
  dateBgColor: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({
  dateStr,
  direction,
  headColor,
  activity,
  description,
  dotColor,
  dateBgColor,
}) => {
  const isLeft = direction === TimelineItemDirection.Left;

  const [screenSize, setScreenSize] = useState<number>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setScreenSize(window.innerHeight);
    }
  }, [setScreenSize]);

  return (
    <li
      className={`timeline-card relative bg-slate-400/10 backdrop-blur hover:backdrop-blur-lg row-span-2 z-10 ${
        isLeft ? "col-start-1 col-end-3" : "col-start-3 col-end-5"
      }`}
    >
      <div
        className={`timeline-event-header ${dotColor} z-20 timeline-event-header_${
          isLeft ? "left" : "right"
        } absolute w-[100%] h-16 backdrop-blur ${
          isLeft
            ? "rounded-r-full bg-gradient-to-l justify-end"
            : "rounded-l-full bg-gradient-to-r justify-start"
        } left-0 -top-24  ${headColor} flex items-center px-8 shadow-xl shadow-black/20`}
      >
        <h4 className="font-semibold max-w-[80%] cut-off-extra-text">
          {activity}
        </h4>
      </div>
      <div className="grid gap-y-4 grid-cols-[1fr_1fr] p-4 grid-rows-[30px_1fr_30px] h-full">
        <span
          className={`col-start-1 col-end-2 row-span-1 bg-cyan-300 ${dateBgColor} rounded-full flex justify-center items-center text-neutral-200/90 font-semibold`}
        >
          {new Date(dateStr).toDateString()}
        </span>
        <div className="col-start-1 col-end-3 h-full row-start-2">
          {description}
        </div>
        <Button
          className="font-semibold col-start-2 col-end-3 row-start-3 row-start-4 max-w-[100px] ml-auto"
          theme="light"
          scale={(screenSize || 1000) < 468 ? "sm" : "md"}
          color="neutral"
        >
          Read More
        </Button>
      </div>
    </li>
  );
};
