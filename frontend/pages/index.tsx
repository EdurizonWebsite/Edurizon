import React from "react";
import dynamic from "next/dynamic";
import ThemeToggle from "../components/ThemeToggle";

// ✅ Critical Section (Load Hero Immediately with SSR)
const HeroSection = dynamic(() => import("../components/landingPage/HeroSection"), { ssr: true });

// ✅ Lazy Load Non-Critical Sections (Reduces Render Delay)
const WhyChoseUsSection = dynamic(() => import("../components/landingPage/WhyChoseUsSection"), { ssr: false });
const Universities = dynamic(() => import("../components/landingPage/Universities"), { ssr: false });
const JourneySection = dynamic(() => import("../components/landingPage/JourneySection"), { ssr: false });
const FAQSection = dynamic(() => import("../components/landingPage/FAQSection"), { ssr: false });
const AssociatedUniversitiesSection = dynamic(() => import("../components/landingPage/AssociatedUniversitiesSection"), { ssr: false });
const CTASection = dynamic(() => import("../components/landingPage/CTASection"), { ssr: false });

const Home = () => {
  return (
    <>
      {/* ✅ Load Hero Section Immediately (Critical for LCP) */}
      <HeroSection />

      {/* ✅ Lazy Loaded Sections (Prevents Render Blocking) */}
      <WhyChoseUsSection />
      <Universities />
      <JourneySection />
      <FAQSection />
      <AssociatedUniversitiesSection />
      <CTASection />

      {/* ✅ Theme Toggle Positioned to Avoid Blocking Render */}
      <div className="fixed z-[10] bottom-[5vh] left-[4vw]">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Home;
