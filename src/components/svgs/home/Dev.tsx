import { forwardRef, SVGProps } from "react";

export const DevSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        height="32px"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={ref}
        {...props}
      >
        <svg>
          <style type="text/css">
            {`.st0{fill:none;stroke:#bfbfbf;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .st1{fill:#bfbfbf;}`}
          </style>
          <g id="Layer_2" />
          <g id="Layer_1">
            <g>
              <g>
                <rect className="st0" height="18" width="30" x="1" y="10" />
                <rect className="st0" height="6" width="30" x="1" y="4" />
                <circle className="st1" cx="5" cy="7" r="1" />
                <circle className="st1" cx="9" cy="7" r="1" />
                <circle className="st1" cx="13" cy="7" r="1" />
              </g>
              <g>
                <polyline className="st0" points="11.5,14 6.5,19 11.5,24    " />
                <polyline
                  className="st0"
                  points="20.5,14 25.5,19 20.5,24    "
                />
                <line className="st0" x1="14.5" x2="17.5" y1="25" y2="13" />
              </g>
            </g>
          </g>
        </svg>
      </svg>
    );
  }
);

DevSVG.displayName = "Dev";
