import { FC, ReactNode } from "react";

interface StackProps {
  layout: "H" | "V";
  className?: string;
  children: ReactNode;
  reversed?: boolean;
}

export const Stack: FC<StackProps> = ({
  layout,
  children,
  className,
  reversed = false,
}) => {
  const flexLayout =
    (layout === "H" ? "flex-row" : "flex-col") + (reversed ? "-reverse" : "");

  return (
    <div className={`flex flex-1 ${flexLayout} gap-6 ${className || ""}`}>
      {children}
    </div>
  );
};
