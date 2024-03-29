import { forwardRef, SVGProps } from "react";

export const LearningSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg {...props} ref={ref} viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2a1 1 0 0 1 1 1v2h2V3a1 1 0 1 1 2 0v2h1.6A2.4 2.4 0 0 1 19 7.4V9h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v1.6a2.4 2.4 0 0 1-2.4 2.4H15v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7.4A2.4 2.4 0 0 1 5 16.6V15H3a1 1 0 1 1 0-2h2v-2H3a1 1 0 1 1 0-2h2V7.4A2.4 2.4 0 0 1 7.4 5H9V3a1 1 0 0 1 1-1Zm3.4 7h-2.8A1.6 1.6 0 0 0 9 10.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 13.4 9Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

LearningSVG.displayName = "Learning";
