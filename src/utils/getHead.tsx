import Head from "next/head";
import { metadata } from "../components/layout";

interface Args {
  title: string;
  description: string;
  /** relative path; e.g. /login, /me, /users/him */
  path: string;
  keywords?: string[];
  image?: string;
}

export const getHeadForPage = (pageData: Args) => {
  const title = `${pageData.title} | timthedev07`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={pageData.description} />
      <meta name="robots" content="index, follow" />
      {pageData.keywords ? (
        <meta name="keywords" content={pageData.keywords.join(", ")} />
      ) : null}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="0 days" />
      <meta name="author" content="Tim <timpersonal07@gmail.com>" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={`${metadata.domain}${pageData.path}`} />
      <meta property="og:description" content={pageData.description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={pageData.description} />
      {metadata.image ? (
        <>
          <meta property="og:image" content={metadata.image} />
          <meta name="twitter:image" content={metadata.image} />
        </>
      ) : (
        <></>
      )}
    </Head>
  );
};
