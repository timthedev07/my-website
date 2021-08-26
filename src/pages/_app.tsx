import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;
