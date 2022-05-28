import { forwardRef, SVGProps } from "react";

export const EditSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <style>{".cls-1{fill:#101820}"}</style>
        </defs>
        <title />
        <g data-name="Layer 18" id="Layer_18">
          <path
            className="cls-1"
            d="M2 31a1 1 0 0 1-1-1.11l.9-8.17a1 1 0 0 1 .29-.6L21.27 2.05a3.56 3.56 0 0 1 5.05 0L30 5.68a3.56 3.56 0 0 1 0 5.05L10.88 29.8a1 1 0 0 1-.6.29L2.11 31Zm8.17-1.91Zm-6.31-6.81-.73 6.59 6.59-.73L28.54 9.31a1.58 1.58 0 0 0 0-2.22l-3.63-3.63a1.58 1.58 0 0 0-2.22 0Z"
          />
          <path
            className="cls-1"
            d="M26.52 13.74a1 1 0 0 1-.7-.29l-7.27-7.27A1 1 0 0 1 20 4.77L27.23 12a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.33Z"
          />
          <path
            className="cls-1"
            transform="rotate(-45 14.719 17.283)"
            d="M8.29 16.28h12.84v2H8.29z"
          />
        </g>
      </svg>
    );
  }
);

EditSVG.displayName = "Edit";
