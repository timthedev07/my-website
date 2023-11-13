import { FC, ReactNode } from "react";

type BoxColorScheme = "blue" | "orange" | "green" | "dark" | "red";

interface BoxProps {
  children: ReactNode;
  color: BoxColorScheme;
}

const colors: Record<BoxColorScheme, [string, string]> = {
  blue: ["bg-cyan-500/80", "border-cyan-400/50"],
  dark: ["bg-slate-500/80", "border-slate-400/50"],
  green: ["bg-emerald-500/80", "border-emerald-400/50"],
  orange: ["bg-orange-500/80", "border-orange-400/50"],
  red: ["bg-red-500/80", "border-red-400/50"],
};

export const Box: FC<BoxProps> = ({ color, children }) => {
  return (
    <div
      className={`rounded-md my-6 border-2 ${colors[color].join(
        " "
      )} flex flex-col px-8 py-5`}
    >
      {children}
    </div>
  );
};
