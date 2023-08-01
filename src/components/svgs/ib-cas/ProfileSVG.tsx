import { forwardRef, SVGProps } from "react";

export const ProfileSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          className="stroke-cyan-800"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.143 21a8.242 8.242 0 0 1-3.89-7.003 2.749 2.749 0 1 1 5.496 0 2.749 2.749 0 1 0 5.497 0 8.246 8.246 0 0 0-8.244-8.248 8.246 8.246 0 0 0-8.244 8.248c0 1.015.113 2.004.322 2.957m4.41 3.345a10.943 10.943 0 0 1-1.986-6.302 5.497 5.497 0 1 1 10.99 0m.299 5.484c-.1.005-.196.014-.296.014A5.497 5.497 0 0 1 12 13.997m7.672-7.52A10.195 10.195 0 0 0 12 3a10.195 10.195 0 0 0-7.673 3.477"
        />
      </svg>
    );
  }
);

ProfileSVG.displayName = "ProfileSVG";
