import { FC } from "react";

interface StartDateTagProps {
  dateStr: string;
  cl?: string;
}

export const StartDateTag: FC<StartDateTagProps> = ({ dateStr, cl }) => {
  return (
    <span
      className={`text-base rounded-full px-5 py-2 bg-sky-800/50 font-semibold ${
        cl || ""
      }`}
    >
      Start Date: {new Date(dateStr).toDateString()}
    </span>
  );
};
