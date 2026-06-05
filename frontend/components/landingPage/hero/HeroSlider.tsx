'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, AUTOPLAY_MS } from './heroSlides';

/** Matches absolute navbar (pt + logo + pb) — keep in sync with Navbar.tsx */
const BANNER_FRAME_CLASS = 'relative w-full max-w-full overflow-hidden';

/** Top padding clears the absolute navbar */
const NAVBAR_OFFSET_CLASS = 'pt-[18vw] md:pt-[7vw]';

const HeroSlider: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const shouldAnimate = mounted && !prefersReducedMotion;

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  }, []);

  useEffect(() => {
    if (!mounted || isPaused) return;
    const timer = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [mounted, isPaused, goNext, activeIndex]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mounted, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const slide = heroSlides[activeIndex];

  const bannerImage = (
    <Image
      src={slide.image}
      alt={slide.title}
      width={1920}
      height={1080}
      priority={activeIndex === 0}
      sizes="100vw"
      className="block h-auto w-full"
    />
  );

  return (
    <section
      className={`relative w-full max-w-full overflow-x-hidden ${NAVBAR_OFFSET_CLASS}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero banner slider"
      aria-roledescription="carousel"
    >
      <div className={BANNER_FRAME_CLASS}>
        {shouldAnimate ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.85, ease: 'easeInOut' }}
              className="w-full"
            >
              {bannerImage}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="w-full">{bannerImage}</div>
        )}

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/25 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-black/40 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/25 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-black/40 transition-colors"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div
          className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-10"
          role="tablist"
          aria-label="Slide navigation"
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0a1628]/75 backdrop-blur-md border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.45)] ring-1 ring-black/20">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === activeIndex}
                className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628] ${
                  i === activeIndex
                    ? 'w-9 h-2.5 bg-white shadow-sm'
                    : 'w-2.5 h-2.5 bg-white/35 border border-white/70 hover:bg-white/90 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {shouldAnimate && !isPaused && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/15 z-10">
            <motion.div
              key={`progress-${activeIndex}`}
              className="h-full bg-orangeChosen origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSlider;
