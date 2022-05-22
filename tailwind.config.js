const plugin = require(`tailwindcss/plugin`);

const openSans = '"Open Sans", sans-serif';

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    "./src/pages/**/*.{tsx,ts}",
    "./src/components/**/*.{ts,tsx}",
    "node_modules/dragontail-experimental/dist/cjs/index.js",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: openSans,
      serif: openSans,
      mono: ["ui-monospace", "Azeret\\ Mono"],
    },
    extend: {
      keyframes: (theme) => ({
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100vw)",
          },
          "70%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(100vw)",
          },
          "70%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      }),
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in-left": "fadeInLeft 1000ms ease-in-out",
        "fade-in-left-slow": "fadeInLeft 1300ms ease-in-out",
        "fade-in-right": "fadeInRight 1000ms ease-in-out",
        "fade-in-right-slow": "fadeInRight 1300ms ease-in-out",
        wiggle: "wiggle 1.4s ease-in-out infinite",
      },
      screens: {
        md2: "868px",
        xs: "428px",
      },
      minWidth: {
        350: "350px",
      },
      scale: {
        102: "1.02",
        103: "1.03",
      },
      boxShadow: {
        "xl-theme-color":
          "0 10px 15px -3px rgba(53, 0, 211, 0.4), 0 4px 6px -2px rgba(53, 0, 211, 0.05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("child-images", "& img");
      addVariant(
        "child-headings",
        [1, 2, 3, 4, 5, 6].map((each) => `& h${each}`)
      );
      addVariant("child-paragraphs", "& p");
      addVariant("child-list", ["& ol", "& ul"]);
      addVariant("child-code", "& pre");
    }),
  ],
};
