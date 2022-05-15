import { forwardRef, SVGProps } from "react";

export const ProjectsIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      height={48}
      viewBox="0 0 24 24"
      width={48}
      fill="#FFF"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z" />
    </svg>
  )
);

ProjectsIcon.displayName = "About";
