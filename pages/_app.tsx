import Head from "next/head";
import "@/styles/index.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, shrink-to-fit=no"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;