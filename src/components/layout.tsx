import { FC } from "react";
import Head from "next/head";

export const Layout: FC = ({ children }) => {
  return (
    <div className="App">
      <Head>
        <title>Tim&apos;s Website</title>
        <meta name="title" content="Tim's Website" />
        <meta name="description" content="Tim's personal website." />
        <meta
          name="keywords"
          content="portfolio, website, coding, programming, faang"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="0 days" />
        <meta name="author" content="Tim <timpersonal07@gmail.com>" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tim's Website" />
        <meta property="og:url" content="https://timthedev07.github.io/" />
        <meta
          property="og:image"
          content="https://og-image.xyz/og/Tim's%20Website/Hire%20me/timthedev07.github.io/https/menlo/unmatchedeclipse/%7B%7Bh%7D%7Dffffff/data.png"
        />
        <meta
          property="og:description"
          content="Tim's personal website. About me, FAQ, projects, and ... everything!"
        />
      </Head>
      <main>{children}</main>
    </div>
  );
};
