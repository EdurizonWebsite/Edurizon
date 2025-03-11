import "../styles/globals.css";
import "../components/landingPage/faq.css";
import "../components/OtpLogin.css";
import "../components/EmblaCarousel/embla.css";
import "../components/landingPage/slider.css";
import "react-phone-input-2/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { helvetica,poppins } from "../styles/fonts";
import { useEffect, useState, useMemo } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/context/themeContext";
import Head from "next/head";

// ✅ Load Navbar and Footer Only When Needed
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkViewportWidth = () => setIsMobileView(window.innerWidth < 768);
    checkViewportWidth();
    window.addEventListener("resize", checkViewportWidth);
    return () => window.removeEventListener("resize", checkViewportWidth);
  }, []);

  const shouldExcludeLayout = useMemo(() => {
    const excludedPaths = ["/login", "/admin", "/signup"];
    return excludedPaths.some((path) => router.pathname.includes(path));
  }, [router.pathname]);

  const isAdminRoute = useMemo(() => router.pathname.includes("/admin"), [router.pathname]);

  return (
    <>
      <Head>
        {/* ✅ Preload Fonts & Critical Images */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Your Website Description Here" />
        <title>Edurizon Private Limited</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <style>{`
        
        body {
          font-family: ${poppins.style.fontFamily}, sans-serif;
        }


         h1, h2, h3, h4, h5, h6 {
          font-family: ${helvetica.style.fontFamily}, sans-serif;
        }
        `}</style>
        
      </Head>

      <ThemeProvider>
        {isAdminRoute && isMobileView ? (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
              <h1 className="text-2xl font-bold text-blue-500 mb-4">Coming Soon</h1>
              <p className="text-gray-700">
                This page can only be accessed from a desktop device. Please switch to a device with a larger screen (≥768px).
              </p>
            </div>
          </div>
        ) : (
          <>
            {!shouldExcludeLayout && <Navbar />}
            <Component {...pageProps} />
            <div id='footer'>
            {!shouldExcludeLayout && <Footer />}</div>
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
