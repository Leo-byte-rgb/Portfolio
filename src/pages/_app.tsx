// import App from "next/app";
import { Header } from '../components/Header';
import '../styles/globals.scss';
import type { AppProps /*, AppContext */ } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <Component {...pageProps}/>
    </main>
  )
}


export default MyApp;