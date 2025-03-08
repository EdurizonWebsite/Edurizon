import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

import HeroSection from '../components/landingPage/HeroSection.jsx'
import WhyChoseUsSection from '../components/landingPage/WhyChoseUsSection.jsx'
import Universities from '../components/landingPage/Universities'
import JourneySection from '../components/landingPage/JourneySection.jsx'
import CTASection from '../components/landingPage/CTASection.jsx'
import FAQSection from '../components/landingPage/FAQSection.jsx'
import AssociatedUniversitySection from '../components/landingPage/AssociatedUniversitiesSection.jsx'



const Home = () => {
  return (
    <div className='relative'>
      
      <HeroSection/>
      <WhyChoseUsSection/>
      <Universities/>
      <JourneySection/>
      <FAQSection/>
      <AssociatedUniversitySection/>
      <CTASection/>
      <div className='fixed z-[10] top-[85vh] md:top-[90vh] left-[4vw]'>
        <ThemeToggle/>
      </div>
        
    </div>
  );
};

export default Home;