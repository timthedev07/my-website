const colors = require(`tailwindcss/colors`);
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./src/pages/**/*.{tsx,ts}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "media",
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

      typography: (theme) => ({
        light: {
          css: [
            {
              backgroundColor: "inherit",
              color: theme("colors.gray.200"),
              '[class~="lead"]': {
                color: theme("colors.gray.200"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
