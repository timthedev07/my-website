import { forwardRef, SVGProps } from "react";

export const RightArrowSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        ref={ref}
        {...props}
      >
        <path
          className="fill-slate-300/80"
          d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z"
        />
      </svg>
    );
  }
);

RightArrowSVG.displayName = "RightArrowSVG";
