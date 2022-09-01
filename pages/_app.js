import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>FT Widget Demo</title>
        <meta
          name="description"
          content="Demo using the FT Widget in a Next.JS app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Link href="/">Main page (no widget)</Link>
        <Link href="/secondary">Secondary page (has widget)</Link>
      </nav>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
