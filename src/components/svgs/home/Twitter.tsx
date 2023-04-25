import { forwardRef, SVGProps } from "react";

export const TwitterSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg ref={ref} {...props} viewBox="0 0 128 128">
        <circle
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeMiterlimit: 10,
            strokeWidth: "8px",
          }}
          cx="64"
          cy="64"
          r="60"
        />
        <path
          stroke="#ffffff"
          fill="#ffffff"
          d="M99,44.29a28.71,28.71,0,0,1-8.25,2.26,14.4,14.4,0,0,0,6.31-7.95,28.75,28.75,0,0,1-9.12,3.48,14.37,14.37,0,0,0-24.47,13.1,40.77,40.77,0,0,1-29.6-15,14.38,14.38,0,0,0,4.44,19.17,14.3,14.3,0,0,1-6.5-1.8c0,.06,0,.12,0,.18A14.37,14.37,0,0,0,43.33,71.82a14.39,14.39,0,0,1-6.49.25A14.38,14.38,0,0,0,50.26,82a28.81,28.81,0,0,1-17.84,6.15A29.14,29.14,0,0,1,29,88a40.65,40.65,0,0,0,22,6.45c26.42,0,40.86-21.88,40.86-40.86q0-.93,0-1.86A29.18,29.18,0,0,0,99,44.29Z"
        />
      </svg>
    );
  }
);

TwitterSVG.displayName = "Twitter";
