import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          id="ft-widget-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, s, id, h) { var ftjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; var js = d.createElement(s); js.id = id; js.src = "https://cdn.formitable.com/sdk/v1/ft.sdk.min.js"; h && (js.onload = h); ftjs.parentNode.insertBefore(js, ftjs); }(document, 'script', 'formitable-sdk', function () { FT.load('Analytics'); }));
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
