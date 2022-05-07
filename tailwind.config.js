const colors = require(`tailwindcss/colors`);
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
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    },
    extend: {
      screens: {
        md2: "868px",
        xs: "428px",
      },
      minWidth: {
        350: "350px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
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
    function ({ addVariant }) {
      addVariant("child-images", "& img");
      addVariant("child-code", "& pre");
    },
  ],
};
