import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '@/context/themeContext';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Rendering MyApp component');
  return (
    <ThemeProvider >
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}

export default MyApp;