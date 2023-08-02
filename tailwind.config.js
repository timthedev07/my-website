const plugin = require(`tailwindcss/plugin`);

const openSans = '"Open Sans", sans-serif';
const serif = '"Merriweather", serif';

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
      serif: serif,
      mono: ["ui-monospace", "Monaco"],
    },
    extend: {
      fontSize: {
        paragraph: "1.1rem",
      },
      keyframes: (theme) => ({
        enlarge: {
          from: {
            "transform-origin": "center",
            transform: "scale(0.3)",
            opacity: 0.3,
          },
          to: {
            "transform-origin": "center",
            transform: "scale(1)",
            opacity: 1,
          },
        },
        loadingGrow: {
          from: {
            left: 0,
            width: 0,
          },
          to: {
            left: 0,
            width: "100%",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)", opacity: 0.9 },
          "50%": { transform: "rotate(3deg)", opacity: 1 },
        },
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100vw)",
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
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(300px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }),
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in-left": "fadeInLeft 1000ms ease-in-out forwards",
        "fade-in-left-slow": "fadeInLeft 1300ms ease-in-out forwards",
        "fade-in-right": "fadeInRight 1000ms ease-in-out forwards",
        "fade-in-right-slow": "fadeInRight 1300ms ease-in-out forwards",
        "fade-in-up": "fadeInUp 1000ms ease-in-out forwards",
        "fade-in-up-slow": "fadeInUp 1300ms ease-in-out forwards",
        wiggle: "wiggle 1.4s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-in-slow": "fadeIn 1.3s ease-in-out forwards",
        enlarge: "enlarge 0.7s ease-out forwards",
        "enlarge-slow": "enlarge 1s ease-out forwards",
        "loading-grow": "loadingGrow 2s cubic-bezier(1,.11,0,.89) forwards",
        appear: "appear 200ms ease-out forwards",
      },
      screens: {
        md2: "868px",
        xs: "428px",
        xxs: "368px",
      },
      minWidth: {
        350: "350px",
      },
      scale: {
        102: "1.02",
        103: "1.03",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("child-images", "& img");
      addVariant(
        "child-headings",
        [1, 2, 3, 4, 5, 6].map((each) => `& h${each}`)
      );
      addVariant("child-paragraphs", "& p");
      addVariant("child-table-cells", ["& table td", "& table th"]);
      addVariant("child-table", "& table");
      addVariant("child-list", ["& ol", "& ul"]);
      addVariant("child-ol", "& ol");
      addVariant("child-ul", "& ul");
      addVariant("child-links", "& a");
      addVariant("child-math", "& .math");
      addVariant("child-links-hover", "& a:hover");
      addVariant("child-code", "& pre");
      addVariant("child-block-quote", "& blockquote");
      addVariant("child-iframes", "& iframe");
    }),
  ],
};
