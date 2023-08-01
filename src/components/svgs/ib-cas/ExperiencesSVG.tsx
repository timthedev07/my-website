import { forwardRef, SVGProps } from "react";

export const ExperiencesSVG = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>(({ ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Livello 1"
      ref={ref}
      viewBox="0 0 24 24"
      {...props}
    >
      <g data-name="pen">
        <path
          className="stroke-emerald-900 fill-emerald-900"
          d="M15.52 5 2.79 17.73l-.71 4.95 4.95-.71L19.76 9.24 15.52 5zM20.464 1.462l2.828 2.829a1 1 0 0 1 0 1.414l-2.121 2.121-4.243-4.242 2.122-2.122a1 1 0 0 1 1.414 0Z"
        />
      </g>
    </svg>
  );
});

ExperiencesSVG.displayName = "Experiences";
