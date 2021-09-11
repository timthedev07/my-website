import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { isDarkBG } from "../utils/bg";
import { useRouter } from "next/router";
import { Navbar } from "./nav/Navbar";
import { BottomNav } from "./nav/BottomNav";

const BREAK_POINT = 600;

export const Layout: FC = ({ children }) => {
  const { pathname } = useRouter();
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>

      <div
        id="App"
        className={`bg-gray-100 ${
          isDarkBG(pathname) ? "dark:bg-primary-bg" : "dark:bg-dark-bg"
        } min-w-350`}
      >
        {windowSize > BREAK_POINT ? <Navbar /> : null}
        <main className="w-full py-16 min-h-screen text-gray-900 dark:text-white">
          {children}
        </main>
        {windowSize <= BREAK_POINT ? <BottomNav /> : null}
      </div>
    </>
  );
};
