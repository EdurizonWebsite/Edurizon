import "../styles/globals.css";
import "../components/landingPage/faq.css";
import "../components/OtpLogin.css";
import "../components/EmblaCarousel/embla.css";
import "../components/landingPage/slider.css";
import "react-phone-input-2/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/old.css";
import "@/styles/owl.carousel.min.css";
import { helvetica,poppins } from "../styles/fonts";
import { useEffect, useState, useMemo, useRef } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/context/themeContext";
import Head from "next/head";
import {GoogleAnalytics} from '@next/third-parties/google'
import axios from "axios";
import { baseUrl } from "@/lib/baseUrl";
import Script from "next/script";
import { IconButton } from "@/components/Buttons";
import ThemeToggle from "@/components/ThemeToggle";
import CTASection from "@/components/landingPage/CTASection";
import ConsultationForm from "@/components/ConsultationForm";
import { usePathname } from "next/navigation";
// import HeroSection from "@/components/landingPage/HeroSection";
import CTASectionComponent from "@/components/CTASectionComponent";
import Home from '../pages/index'
import NavHeader from "@/components/NavHeader";
import { setupAdminAxiosInterceptor } from "@/lib/setupAdminAxiosInterceptor";

if (typeof window !== "undefined") {
  setupAdminAxiosInterceptor();
}

const GA_TRACKING_ID = "G-Z25NZ103DJ";

// ✅ Load Navbar and Footer Only When Needed
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const freeConsultationRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = localStorage.getItem('user');
        const counselorToken = localStorage.getItem('counselorToken');
        const currentPath = router.pathname;

        if (currentPath.includes('/counselor/dashboard')) {
          if (!counselorToken) {
            router.push('/counselor/login');
          }
        } else if (currentPath.includes('/dashboard') || currentPath.includes('/student-dashboard')) {
          if (!userData) {
            router.push('/login');
          } else {
            const user = JSON.parse(userData);
            // Check if it's a registered student
            if (user.role === 'registered-student') {
              try {
                const response = await axios.get(`${baseUrl}/api/registered-students/profile`, {
                  headers: {
                    Authorization: `Bearer ${user.token}`
                  }
                });
                if (!response.data.success) {
                  localStorage.removeItem('user');
                  router.push('/login');
                }
              } catch (error) {
                console.error('Token verification failed for registered student:', error);
                localStorage.removeItem('user');
                router.push('/login');
              }
            } else {
              // For regular users, use the existing verification
              try {
                const response = await axios.get(`${baseUrl}/api/auth/verify`, {
                  headers: {
                    Authorization: `Bearer ${user.token}`
                  }
                });
                if (!response.data.valid) {
                  localStorage.removeItem('user');
                  router.push('/login');
                }
              } catch (error) {
                console.error('Token verification failed:', error);
                localStorage.removeItem('user');
                router.push('/login');
              }
            }
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    const checkViewportWidth = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkViewportWidth();
    window.addEventListener('resize', checkViewportWidth);
    return () => window.removeEventListener('resize', checkViewportWidth);
  }, []);

  const excludedPaths = [
    '/login',
    '/admin',
    '/signup',
    '/counselor/dashboard',
    '/counselor/secret-register',
    '/counselor/secret-login',
    '/registered-student-login'
  ];
  const shouldExcludeLayout = excludedPaths.some(path => router.pathname.includes(path));
  const isAdminRoute = useMemo(() => router.pathname.includes('/admin'), [router.pathname]);

  // Form 
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formFilled, setFormFilled] = useState(false)
  

  useEffect(() => {
        if (showConsultationForm) {
          document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
          document.body.style.overflow = "auto"; // Enable scrolling
        }
        return () => {
          document.body.style.overflow = "auto"; // Cleanup on unmount
        };
      }, [showConsultationForm]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
  
    const showFormAtIntervals = () => {
      timeouts.push(
        setTimeout(() => {
          setShowConsultationForm(true);
        }, 5 * 1000) // After 30 seconds
      );
  
      timeouts.push(
        setTimeout(() => {
          setShowConsultationForm(true);
        }, 20 * 1000) // After 5 minutes
      );
  
      timeouts.push(
        setTimeout(() => {
          setShowConsultationForm(true);
        },  40* 1000) // After 20 minutes
      );
    };
  
    showFormAtIntervals();
  
    // Clean up on unmount
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Global Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        

        
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.edurizon.in" />
      </Head>

      {/* Google Analytics */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <ThemeProvider>
        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-xl font-semibold">
            Loading...
          </div>
        )}

        <div className="relative">
          {/* Admin routes are now fully accessible on all screen sizes */}
          {/* {!shouldExcludeLayout && <NavHeader/>} */}

          {!shouldExcludeLayout && <Navbar />}
          {pathname === '/' ? <Home /> : <Component {...pageProps} />}
          <GoogleAnalytics gaId="G-Z25NZ103DJ" />
          <div id="footer">
            {!shouldExcludeLayout && <CTASectionComponent />}
          </div>
          {/* 💬 Show Consultation Form when triggered */}
          <div className={`fixed top-0  left-0 w-full h-screen bg-black bg-opacity-50  ${showConsultationForm?"opacity-100 scale-100 z-50 ":"opacity-0 -z-50 scale-95"}   flex items-center justify-center transition-opacity duration-300 ease-in-out`}>
            <ConsultationForm onClose={() => setShowConsultationForm(false)} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
