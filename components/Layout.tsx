
import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/MabryProBold.woff2" />
      </Head>

      <>
        {children}
      </>
    </>
  )
}

export default Layout