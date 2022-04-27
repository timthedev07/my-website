import { DragontailProvider } from "dragontail-experimental";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DragontailProvider theme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DragontailProvider>
  );
};
export default App;
