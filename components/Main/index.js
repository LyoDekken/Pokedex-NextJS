import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import Icon from '../../public/images/favicon.ico'
import Head from 'next/head'

export default function Main({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={Icon} />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}