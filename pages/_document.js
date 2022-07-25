import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A portolio website of an outgoing developer called Kaizen"
        />
        <link rel="icon" href="/favicon.ico"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          href="https://www.aigbekelvin.tech/blackbg1.avif"
          as="image"
        ></link>
        <link
          rel="preload"
          href="https://www.aigbekelvin.tech/blackbg2.avif"
          as="image"
        ></link>
        <link
          rel="preload"
          href="https://www.aigbekelvin.tech/officestup.avif"
          as="image"
        ></link>

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com/"
          crossOrigin="true"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=panchang@200,500,700,300,400,600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Offside&display=swap"
          rel="stylesheet"
        />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Aigbe Kelvin Portfolio"
          href="https://www.aigbekelvin.teche/mysitetitle.xml"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
