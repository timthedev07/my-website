import { forwardRef, SVGProps } from "react";

export const MongoDBSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        ref={ref}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 361.677 499.336"
        {...props}
      >
        <path
          d="M203.777 148.858c-10.814-12.762-20.132-25.814-22.024-28.493a.426.426 0 0 0-.7 0c-1.893 2.679-11.208 15.73-22.023 28.493-92.691 118.085 14.63 197.755 14.63 197.755l.87.604c.814 12.326 2.835 30.041 2.835 30.041h8.077s2.013-17.638 2.83-29.96l.875-.685s107.32-79.67 14.63-197.755ZM181.404 344.88h-.001s-4.811-4.104-6.11-6.16l-.011-.221 5.82-128.56a.303.303 0 0 1 .604 0l5.82 128.56-.012.22c-1.297 2.056-6.11 6.161-6.11 6.161Z"
          fill="#00ed64"
        />
      </svg>
    );
  }
);

MongoDBSVG.displayName = "MongoDB";
