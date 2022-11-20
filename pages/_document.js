import * as document from "next/document";

export default function Document() {
  return (
    <document.Html lang="ru">
      <document.Head />
      <body>
        <document.Main />
        <document.NextScript />
      </body>
    </document.Html>
  );
}
