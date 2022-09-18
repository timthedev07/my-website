import { DragontailProvider } from "dragontail-experimental";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Session } from "next-auth";

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) => {
  return (
    <SessionProvider session={session}>
      <DragontailProvider theme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DragontailProvider>
    </SessionProvider>
  );
};
export default App;
