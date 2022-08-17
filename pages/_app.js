import '../styles/globals.css'

import Main from '../components/Main'

export default function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps}/>
    </Main>
  )
}