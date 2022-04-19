import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { Navbar } from "./nav/Navbar";
import { BottomNav } from "./nav/BottomNav";

const BREAK_POINT = 600;

const metadata = {
  title: "Tim's Website",
  image:
    "https://og-image.xyz/og/Tim's%20Website/Hire%20me/timthedev07.github.io/https/menlo/unmatchedeclipse/%7B%7Bh%7D%7Dffffff/data.png",
  description:
    "Tim is a software engineer specializing in full stack web development.",
};

export const Layout: FC = ({ children }) => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const resizeHandler = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Tim&apos;s Website</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.title} />
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
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:url" content="https://timthedev07.github.io/" />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@timthedev07" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>

      <div id="App" className={`bg-slate-900 min-w-350`}>
        {windowSize > BREAK_POINT ? <Navbar /> : null}
        <main className={`w-full min-h-screen text-gray-900 dark:text-white`}>
          {children}
          <div
            className={`${
              windowSize <= BREAK_POINT ? "block" : "hidden"
            } bg-transparent h-5`}
          ></div>
        </main>
        {windowSize <= BREAK_POINT ? <BottomNav /> : null}
      </div>
    </>
  );
};
