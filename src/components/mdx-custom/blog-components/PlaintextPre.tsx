import { FC, ReactNode } from "react";

interface PlaintextPreProps {
  children: ReactNode;
  center?: boolean;
}

export const PlaintextPre: FC<PlaintextPreProps> = ({
  children,
  center = true,
}) => {
  return (
    <pre className={`p-4 rounded-none ${center ? "mx-auto" : ""}`}>
      {children}
    </pre>
  );
};
