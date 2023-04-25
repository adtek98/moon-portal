import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import Loading from "../components/Loading";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  if (loading) {
    return (
      <SessionProvider session={session}>
        <Layout>
          <Loading />
        </Layout>
      </SessionProvider>
    );
  }
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
