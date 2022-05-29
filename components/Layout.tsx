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

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff90e8" />
        <meta name="apple-mobile-web-app-title" content="Art2Business" />
        <meta name="application-name" content="Art2Business" />
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta name="theme-color" content="#ffffff" />
        {/*  /Favicon */}
      </Head>

      {children}

      {/* Yandex.Metrika counter */}
      <Script id="yandexMetrika" strategy="afterInteractive">
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
    </>
  );
};

export default Layout;
