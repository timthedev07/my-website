import { forwardRef, SVGProps } from "react";

export const LinkSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h48v48h-48z" fill="none" />
        <path d="M7.8 24c0-3.42 2.78-6.2 6.2-6.2h8v-3.8h-8c-5.52 0-10 4.48-10 10s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4h-16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8v3.8h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
      </svg>
    );
  }
);

LinkSVG.displayName = "Link";