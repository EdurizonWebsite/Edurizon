import React from 'react';
import HeroSection from '../components/landingPage/HeroSection.jsx'
import WhyChoseUsSection from '../components/landingPage/WhyChoseUsSection.jsx'
import Universities from '../components/landingPage/Universities'
import JourneySection from '../components/landingPage/JourneySection.jsx'
import CTASection from '../components/landingPage/CTASection.jsx'
import FAQSection from '../components/landingPage/FAQSection.jsx'
import AssociatedUniversitySection from '../components/landingPage/AssociatedUniversitiesSection.jsx'



const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhyChoseUsSection/>
      <Universities/>
      <JourneySection/>
      <FAQSection/>
      <AssociatedUniversitySection/>
      <CTASection/>
    </div>
  );
};

export default Home;