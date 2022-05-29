import { FC } from "react";
import Head from "next/head";
import { NavProvider } from "./nav/Navbar";
import { AppLoadingProvider } from "./AppLoading";

export const metadata = {
  title: "Tim's Website",
  image:
    "https://og-image.xyz/og/Tim's%20Website/Hire%20me/timthedev07.github.io/https/menlo/unmatchedeclipse/%7B%7Bh%7D%7Dffffff/data.png",
  description:
    "Tim is a software engineer specializing in full stack web development.",
  domain: "timthedev07.github.io",
};

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>

      <div id="App" className={`bg-slate-900`}>
        <AppLoadingProvider>
          <NavProvider>
            <main className={`w-full text-white min-w-[250px]`}>
              {children}
            </main>
          </NavProvider>
        </AppLoadingProvider>
      </div>
    </>
  );
};
