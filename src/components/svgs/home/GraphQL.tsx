import { forwardRef, SVGProps } from "react";

export const GraphQLSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="#e10098"
        style={{
          fill: "color(display-p3 .8824 0 .5961)",
        }}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m50 6.903 37.323 21.549v43.096L50 93.097 12.677 71.548V28.451L50 6.903ZM16.865 30.87v31.656L44.28 15.041 16.864 30.87ZM50 13.51 18.398 68.246h63.205L50 13.509Zm27.415 58.924h-54.83L50 88.261l27.415-15.828Zm5.72-9.908L55.72 15.041 83.136 30.87v31.656Z"
        />
        <circle cx={50} cy={9.321} r={8.82} />
        <circle cx={85.229} cy={29.66} r={8.82} />
        <circle cx={85.229} cy={70.34} r={8.82} />
        <circle cx={50} cy={90.679} r={8.82} />
        <circle cx={14.766} cy={70.34} r={8.82} />
        <circle cx={14.766} cy={29.66} r={8.82} />
      </svg>
    );
  }
);

GraphQLSVG.displayName = "GraphQL";