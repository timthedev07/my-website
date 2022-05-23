import { forwardRef, SVGProps } from "react";

export const GitHubSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className = "", ...props }, ref) => {
    const transition = "transition duration-300";
    const hover = "fill-neutral-200 group-hover:fill-cyan-500/70 " + transition;

    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        className={
          (className || "") + ` group hover:-translate-y-1 ${transition}`
        }
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12 0C5.383 0 0 5.383 0 12c0 5.738 3.95 10.78 9.392 11.988A.502.502 0 0 0 10 23.5v-3a.5.5 0 0 0-.5-.5h-1c-1.185 0-2.243-1.462-3.094-2.636a59.37 59.37 0 0 0-.249-.343c.35.164.69.335.973.477.82.411 1.596.8 2.23.981.027.01.061.026.1.043.244.11.697.314 1.104.05C10 18.29 10 17.695 10 17.5v-.349a.5.5 0 0 0-.364-.48C6.863 15.884 5 13.806 5 11.5c0-1.2.493-2.345 1.425-3.312a.5.5 0 0 0 .094-.558c-.372-.802-.293-1.893.148-2.548.584.227 1.34.704 1.833 1.288a.5.5 0 0 0 .554.148 8.675 8.675 0 0 1 5.892 0c.199.073.42.013.554-.148.492-.584 1.249-1.06 1.833-1.288.441.655.52 1.746.148 2.548a.5.5 0 0 0 .094.558C18.507 9.155 19 10.3 19 11.5c0 2.422-2.07 4.59-5.033 5.274a.5.5 0 0 0-.33.72c.248.47.363 1.107.363 2.006v4a.5.5 0 0 0 .608.488C20.05 22.78 24 17.738 24 12c0-6.617-5.383-12-12-12z"
          fill="#FFF"
          className={hover}
        />
        <path
          d="M9.636 16.92a.5.5 0 0 1 .364.481v-.25a.5.5 0 0 0-.364-.48c-2.721-.772-4.556-2.789-4.623-5.044-.001.041-.013.081-.013.123 0 2.307 1.863 4.385 4.636 5.17zM13.967 17.024C16.93 16.34 19 14.172 19 11.75c0-.043-.012-.084-.013-.127-.07 2.371-2.108 4.48-5.02 5.15a.5.5 0 0 0-.342.28.49.49 0 0 0-.017.331c.007-.027.005-.055.017-.08a.5.5 0 0 1 .342-.28z"
          className={hover}
          opacity={0.2}
        />
        <path
          d="M12 0C5.383 0 0 5.383 0 12c0 .045.005.09.006.135C.068 5.572 5.422.25 12 .25s11.932 5.322 11.994 11.885c0-.045.006-.09.006-.135 0-6.617-5.383-12-12-12z"
          className={hover}
          opacity={0.2}
        />
        <path
          d="M9.392 23.988A.502.502 0 0 0 10 23.5v-.25a.5.5 0 0 1-.608.488C3.992 22.54.068 17.567.006 11.885c0 .039-.006.076-.006.115 0 5.738 3.95 10.78 9.392 11.988zM14.608 23.738A.501.501 0 0 1 14 23.25v.25a.5.5 0 0 0 .608.488C20.05 22.78 24 17.738 24 12c0-.039-.005-.076-.006-.115-.062 5.682-3.987 10.655-9.386 11.853zM17.333 4.834c-.584.228-1.34.705-1.833 1.289a.497.497 0 0 1-.554.147 8.675 8.675 0 0 0-5.892 0 .5.5 0 0 1-.554-.147c-.492-.584-1.249-1.061-1.833-1.289-.252.375-.37.89-.369 1.414.035-.434.158-.85.37-1.164.583.228 1.34.705 1.832 1.289a.5.5 0 0 0 .554.147 8.675 8.675 0 0 1 5.892 0c.199.074.42.014.554-.147.492-.584 1.249-1.061 1.833-1.289.211.314.334.73.369 1.164 0-.523-.117-1.04-.37-1.414z"
          fill="#010101"
          opacity={0.1}
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="a"
          x1={1.074}
          x2={22.865}
          y1={7.037}
          y2={17.198}
        >
          <stop
            offset={0}
            style={{
              stopColor: "#fff",
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#fff",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <path
          d="M12 0C5.383 0 0 5.383 0 12c0 5.738 3.95 10.78 9.392 11.988A.502.502 0 0 0 10 23.5v-3a.5.5 0 0 0-.5-.5h-1c-1.185 0-2.243-1.462-3.094-2.636a59.37 59.37 0 0 0-.249-.343c.35.164.69.335.973.477.82.411 1.596.8 2.23.981.027.01.061.026.1.043.244.11.697.314 1.104.05C10 18.29 10 17.695 10 17.5v-.349a.5.5 0 0 0-.364-.48C6.863 15.884 5 13.806 5 11.5c0-1.2.493-2.345 1.425-3.312a.5.5 0 0 0 .094-.558c-.372-.802-.293-1.893.148-2.548.584.227 1.34.704 1.833 1.288a.5.5 0 0 0 .554.148 8.675 8.675 0 0 1 5.892 0c.199.073.42.013.554-.148.492-.584 1.249-1.06 1.833-1.288.441.655.52 1.746.148 2.548a.5.5 0 0 0 .094.558C18.507 9.155 19 10.3 19 11.5c0 2.422-2.07 4.59-5.033 5.274a.5.5 0 0 0-.33.72c.248.47.363 1.107.363 2.006v4a.5.5 0 0 0 .608.488C20.05 22.78 24 17.738 24 12c0-6.617-5.383-12-12-12z"
          fill="url(#a)"
        />
      </svg>
    );
  }
);

GitHubSVG.displayName = "GitHub";
