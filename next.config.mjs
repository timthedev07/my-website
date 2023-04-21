import MDX from "@next/mdx";

const withMDX = MDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */

export default withMDX({
  reactStrictMode: false,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
