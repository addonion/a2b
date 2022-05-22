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
      </Head>

      {/* Yandex.Metrika counter */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(88858866, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
        });
        `}
      </Script>
      {/* /Yandex.Metrika counter */}

      {children}
    </>
  );
};

export default Layout;
