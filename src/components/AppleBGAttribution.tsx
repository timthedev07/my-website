import { FC } from "react";

interface AppleBGAttributionProps {}

export const AppleBGAttribution: FC<AppleBGAttributionProps> = ({}) => {
  return (
    <div className="absolute bottom-24 sm:bottom-16 right-12 text-sm text-slate-200/40">
      Attribution to Apple® for background
    </div>
  );
};
