import { DragontailProvider } from "dragontail-experimental";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Session } from "next-auth";
import SEOConfig from "../utils/seo-config";
import { DefaultSeo } from "next-seo";
import "dragontail-experimental/dist/base.css";

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) => {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...SEOConfig} />
      <DragontailProvider theme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DragontailProvider>
    </SessionProvider>
  );
};
export default App;
