import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
