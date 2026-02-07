import React,{useEffect,useState,useRef} from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import ConsultationForm from '@/components/ConsultationForm';

// ✅ Critical Section (Load Hero Immediately with SSR)
const HeroSection = dynamic(() => import("../components/landingPage/HeroSection"), { ssr: true });

// ✅ Lazy Load Non-Critical Sections (Reduces Render Delay)
const WhyChoseUsSection = dynamic(() => import("../components/landingPage/WhyChoseUsSection"), { ssr: false });
const Universities = dynamic(() => import("../components/landingPage/Universities"), { ssr: false });
const JourneySection = dynamic(() => import("../components/landingPage/JourneySection"), { ssr: false });
const FAQSection = dynamic(() => import("../components/landingPage/FAQSection"), { ssr: false });
const AssociatedUniversitiesSection = dynamic(() => import("../components/landingPage/AssociatedUniversitiesSection"), { ssr: false });

const Home = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  

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
        <title>Study MBBS Abroad, MBBS Abroad for Indian Students | Edurizon</title>
        <meta name="description" content="Edurizon offers affordable education, global exposure & easy admission to Study MBBS Abroad for Indian Students." />
        <meta name="keywords" content="Study MBBS Abroad, MBBS Abroad for Indian Students" />
        <meta name="author" content="Edurizon" />
        <link rel="canonical" href="https://www.edurizon.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Edurizon",
              "url": "https://www.edurizon.in",
              "logo": "https://www.edurizon.in/favicon.ico",
              "description": "Edurizon offers affordable education, global exposure & easy admission to Study MBBS Abroad for Indian Students.",
            }),
          }}
        />
      </Head>

    
      {/* ✅ Load Hero Section Immediately (Critical for LCP) */}
      <HeroSection />

      {/* ✅ Lazy Loaded Sections (Prevents Render Blocking) */}
      <WhyChoseUsSection />
      <Universities />
      <JourneySection />
      <FAQSection />
      <AssociatedUniversitiesSection />
      {/* 💬 Show Consultation Form when triggered */}
        <div className={`fixed top-0  left-0 w-full h-screen bg-black bg-opacity-50  ${showConsultationForm?"opacity-100 scale-100 z-50 ":"opacity-0 -z-50 scale-95"}   flex items-center justify-center transition-opacity duration-300 ease-in-out`}>
        <ConsultationForm onClose={() => setShowConsultationForm(false)} />
      </div>
    </>
  );
};

export default Home;
