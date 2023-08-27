import Script from "next/script";
import "./globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>

      {/* Google Analitics 4 */}
      <Script src="https://tag.art2business.ru/gtag/js?id=G-P1V8VWHRHN" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P1V8VWHRHN');
        `}
      </Script>
    </html>
  );
}
