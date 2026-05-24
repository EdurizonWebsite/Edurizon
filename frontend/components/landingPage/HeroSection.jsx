import React from 'react';
import dynamic from 'next/dynamic';

const HeroSlider = dynamic(() => import('./hero/HeroSlider'), {
  ssr: false,
  loading: () => (
    <section
      className="relative w-full max-w-full pt-[18vw] md:pt-[7vw] overflow-x-hidden"
      aria-hidden
    >
      <div className="relative w-full h-[clamp(160px,26vw,400px)] animate-pulse bg-[#0a1628]" />
    </section>
  ),
});

const HeroSection = () => {
  return <HeroSlider />;
};

export default HeroSection;
