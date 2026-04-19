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

const data=[
    {question:'How do I start the admission process?',
    answer:'Book a free consultation, and our experts will guide you step by step.'},
    {question:'Do you offer visa assistance?',
    answer:'Yes! We help with visa documentation, mock interviews, and submission.'},
    {question:'Which countries do you assist students in applying to?',
    answer:'We help students apply to top universities in the USA, UK, Canada, Australia, Europe, and other leading study destinations.'},
    {question:'Can I apply if I have a low GPA?',
    answer:'Yes! Our experts can help you find universities that accept students with lower GPAs and guide you on how to strengthen your application.'},
    {question:'What are the requirements for studying abroad?',
    answer:'Requirements vary by country and university, but generally include academic transcripts, language proficiency scores (IELTS, TOEFL, etc.), SOPs, LORs, and financial proof.'},
]

const Home = () => {

  
  return (
    <> 
    <Head>
        <title>Study MBBS Abroad, MBBS Abroad for Indian Students | Edurizon</title>
        <meta name="description" content="Edurizon offers affordable MBBS abroad options with global exposure, trusted universities, and complete admission support for Indian students." />
        <meta name="keywords" content="Study MBBS Abroad, MBBS Abroad for Indian Students" />
        <meta name="author" content="Edurizon" />
      </Head>

    
      {/* ✅ Load Hero Section Immediately (Critical for LCP) */}
      <HeroSection />

      {/* ✅ Lazy Loaded Sections (Prevents Render Blocking) */}
      <WhyChoseUsSection />
      <Universities />
      <JourneySection />
      <FAQSection data={data} />
      <AssociatedUniversitiesSection />
      {/* 💬 Show Consultation Form when triggered */}
        {/* <div className={`fixed top-0  left-0 w-full h-screen bg-black bg-opacity-50  ${showConsultationForm?"opacity-100 scale-100 z-50 ":"opacity-0 -z-50 scale-95"}   flex items-center justify-center transition-opacity duration-300 ease-in-out`}>
        <ConsultationForm onClose={() => setShowConsultationForm(false)} />
      </div> */}
    </>
  );
};

export default Home;
