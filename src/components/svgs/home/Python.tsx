import { forwardRef, SVGProps } from "react";

export const PythonSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={110.421}
        height={109.846}
        {...props}
      >
        <defs>
          <linearGradient id="a">
            <stop
              offset={0}
              style={{
                stopColor: "#ffe052",
                stopOpacity: 1,
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#ffc331",
                stopOpacity: 1,
              }}
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2={168.101}
            x2={147.777}
            y1={111.921}
            x1={89.137}
            id="d"
            xlinkHref="#a"
          />
          <linearGradient id="b">
            <stop
              offset={0}
              style={{
                stopColor: "#387eb8",
                stopOpacity: 1,
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#366994",
                stopOpacity: 1,
              }}
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2={131.853}
            x2={110.149}
            y1={77.07}
            x1={55.549}
            id="c"
            xlinkHref="#b"
          />
        </defs>
        <path
          style={{
            opacity: 1,
            color: "#000",
            fill: "url(#c)",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            marker: "none",
            markerStart: "none",
            markerMid: "none",
            markerEnd: "none",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            visibility: "visible",
            display: "inline",
            overflow: "visible",
          }}
          d="M99.75 67.469c-28.032 0-26.281 12.156-26.281 12.156l.031 12.594h26.75V96H62.875s-17.938-2.034-17.938 26.25 15.657 27.281 15.657 27.281h9.343v-13.125s-.503-15.656 15.407-15.656h26.531s14.906.241 14.906-14.406V82.125s2.263-14.656-27.031-14.656zM85 75.938a4.808 4.808 0 0 1 4.813 4.812A4.808 4.808 0 0 1 85 85.563a4.808 4.808 0 0 1-4.813-4.813A4.808 4.808 0 0 1 85 75.937z"
          transform="translate(-44.938 -67.469)"
        />
        <path
          d="M100.546 177.315c28.032 0 26.281-12.156 26.281-12.156l-.03-12.594h-26.75v-3.781h37.374s17.938 2.034 17.938-26.25c0-28.285-15.657-27.282-15.657-27.282h-9.343v13.125s.503 15.657-15.407 15.657h-26.53s-14.907-.241-14.907 14.406v24.219s-2.263 14.656 27.031 14.656zm14.75-8.469a4.808 4.808 0 0 1-4.812-4.812 4.808 4.808 0 0 1 4.812-4.813 4.808 4.808 0 0 1 4.813 4.813 4.808 4.808 0 0 1-4.813 4.812z"
          style={{
            opacity: 1,
            color: "#000",
            fill: "url(#d)",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            marker: "none",
            markerStart: "none",
            markerMid: "none",
            markerEnd: "none",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            visibility: "visible",
            display: "inline",
            overflow: "visible",
          }}
          transform="translate(-44.938 -67.469)"
        />
      </svg>
    );
  }
);

PythonSVG.displayName = "Python";
