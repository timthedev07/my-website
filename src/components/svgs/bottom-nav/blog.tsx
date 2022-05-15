import { forwardRef, SVGProps } from "react";

export const BlogIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={48}
      ref={ref}
      viewBox="0 0 24 24"
      width={48}
      fill="#FFF"
      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zM7 7h5v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2zm-2-4V5l4 4h-4z" />
    </svg>
  )
);

BlogIcon.displayName = "About";
