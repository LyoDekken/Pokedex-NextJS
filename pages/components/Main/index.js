import Navbar from '../Navbar/index'
import Footer from '../Footer/index'

import Head from 'next/head'

export default function Main({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}