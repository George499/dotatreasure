import Layout from "../Components/Layout";
import { ContextProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
