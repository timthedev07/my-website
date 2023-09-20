import { DefaultSeoProps } from "next-seo";

const defaultSEOConfig: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://timthedev07.vercel.app/",
    siteName: "timthedev07",
  },
  twitter: {
    site: "@timthedev07",
    cardType: "summary",
  },
  defaultTitle: "timthedev07",
  titleTemplate: "%s | timthedev07",
  description: "Read more about me, a web developer fascinated by AI.",
  additionalMetaTags: [
    {
      httpEquiv: "content-type",
      content: "text/html; charset=utf-8",
    },
    {
      name: "revisit-after",
      content: "0 days",
    },
    {
      name: "author",
      content: "Tim <timpersonal07@gmail.com>",
    },
    {
      name: "google-site-verification",
      content: "ou31BwzL6hYs78yHQZrfEFRvZIBWxVoPkErFfm0f2z4",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "keywords",
      content: "portfolio, website, programming, math, student, tech",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/logo192.png",
    },
  ],
};

export default defaultSEOConfig;
