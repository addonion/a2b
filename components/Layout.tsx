import React, { ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/MabryProBold.woff2" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="yandex-verification" content="d0559dbd0d368d3d" />
        {/* Google Tag Manager */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K7H5S7N');`}
        </Script>
        {/* End Google Tag Manager */}
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7H5S7N" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      {children}
    </>
  );
};

export default Layout;
