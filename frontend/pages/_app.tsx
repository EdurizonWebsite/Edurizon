import '../styles/globals.css';
import '../components/landingPage/faq.css'
import "../components/OtpLogin.css";
import '../components/EmblaCarousel/embla.css';
import '../components/landingPage/slider.css';
import "react-phone-input-2/lib/style.css"; //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '@/context/themeContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkViewportWidth = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkViewportWidth(); // Check on mount
    window.addEventListener('resize', checkViewportWidth); // Check on resize

    return () => window.removeEventListener('resize', checkViewportWidth); // Cleanup
  }, []);

  const excludedPaths = ['/login', '/admin','/signup']; // Paths to exclude Navbar & Footer
  const shouldExcludeLayout = excludedPaths.some((path) => router.pathname.includes(path));
  const isAdminRoute = router.pathname.includes('/admin');

  return (
    <ThemeProvider>
      {/* Show the warning message on admin routes for mobile viewports */}
      {isAdminRoute && isMobileView ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Desktop Access Required</h1>
            <p className="text-gray-700">
              This page can only be accessed from a desktop device. Please switch to a device with a larger screen (≥768px).
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Render Navbar & Footer unless excluded */}
          {!shouldExcludeLayout && <Navbar />}
          <Component {...pageProps} />
          {!shouldExcludeLayout && <Footer />}
        </>
      )}
    </ThemeProvider>
  );
}

export default MyApp;