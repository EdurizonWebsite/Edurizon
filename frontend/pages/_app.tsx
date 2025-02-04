import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Rendering MyApp component');
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;