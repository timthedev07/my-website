import { FC } from "react";

interface AppleBGAttributionProps {}

export const AppleBGAttribution: FC<AppleBGAttributionProps> = ({}) => {
  return (
    <div className="absolute top-16 right-12 text-sm text-slate-200/40">
      Attribution to Apple® for background
    </div>
  );
};
