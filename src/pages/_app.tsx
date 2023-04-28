import { DragontailProvider, ToastProvider } from "dragontail-experimental";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Session } from "next-auth";
import SEOConfig from "../utils/seo-config";
import { DefaultSeo } from "next-seo";

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
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </Layout>
      </DragontailProvider>
    </SessionProvider>
  );
};
export default App;
