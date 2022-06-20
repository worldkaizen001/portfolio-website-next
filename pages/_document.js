import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A portolio website of an outgoing developer who goes under the alias @alsoknownaszac"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://alsoknownaszac.me/alsoknownaszac.avif"
          as="image"
        ></link>
        <link
          rel="preload"
          href="https://alsoknownaszac.me/blackbg1.avif"
          as="image"
        ></link>
        <link
          rel="preload"
          href="https://alsoknownaszac.me/blackbg2.avif"
          as="image"
        ></link>
        <link
          rel="preload"
          href="https://alsoknownaszac.me/officestup.avif"
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
          title="Amayo Collins Portfolio"
          href="http://alsoknownaszac.me/mysitetitle.xml"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
