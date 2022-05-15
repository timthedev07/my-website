import { forwardRef, SVGProps } from "react";

export const AboutIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      width={48}
      height={1}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <title>{"Rectangle 5"}</title>
      <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </svg>
  )
);

AboutIcon.displayName = "About";
