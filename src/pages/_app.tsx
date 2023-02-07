import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Layout } from "../components/Layout";
import "../../styles/globals.css";
import { Router } from "next/router";
import { useState } from "react";
import Loading from "../components/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  if (loading) {
    return (
      <>
        <Layout>
          <Loading />
        </Layout>
      </>
    );
  }
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
