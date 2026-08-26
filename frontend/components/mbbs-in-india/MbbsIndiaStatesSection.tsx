import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";import { EmblaOptionsType } from "embla-carousel";
import { IconButton } from "../Buttons";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../EmblaCarousel/EmblaCarouselArrowButtons";
import { MBBS_INDIA_STATE_SLIDES } from "@/lib/mbbsIndiaStates";

const VISIBLE_DESKTOP_SLIDES = 4;

const OPTIONS: EmblaOptionsType = {
  dragFree: false,
  align: "start",
  containScroll: "trimSnaps",
  loop: true,
  slidesToScroll: 1,
};

const MbbsIndiaStatesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const updateScrollProgress = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("reInit", updateScrollProgress).on("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => {
      emblaApi.off("reInit", updateScrollProgress);
      emblaApi.off("scroll", updateScrollProgress);
    };
  }, [emblaApi, updateScrollProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const isDesktop = screenWidth !== null && screenWidth > 768;
  const slideCount = MBBS_INDIA_STATE_SLIDES.length;
  const scrollbarThumbWidth = isDesktop
    ? (VISIBLE_DESKTOP_SLIDES / slideCount) * 6.75
    : (1 / slideCount) * 26;

  return (
    <section className="w-full gradient-bg relative md:min-h-[50.25vw] flex flex-col  justify-between overflow-hidden py-[10vw] md:py-[3vw] px-[6.25vw] md:px-[7.5vw] box-border">
      <div className="flex flex-row md:gap-[23.3125vw] items-center mx-[6.25vw] md:mx-[7.5vw]">
        <div className="w-full md:w-[37.1875vw]">
          <h2 className="text-h5TextPhone md:text-h3Text leading-[120%] text-black">
            <strong>
              Explore <span className="text-orangeChosen">Medical Colleges</span>
            </strong>{" "}
            across Indian states.
          </h2>
        </div>

        <div className="hidden md:block">
          <div className="embla__controls relative">
            <div className="w-[14.125vw] embla__buttons flex flex-row justify-between items-center">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <div className="embla__scrollbar">
                <div
                  className="embla__scrollbar__thumb"
                  style={{
                    left: `${scrollProgress}%`,
                    width: `${scrollbarThumbWidth}vw`,
                  }}
                />
              </div>
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
          </div>
        </div>
      </div>

      <div className="mbbs-states-carousel mx-[6.25vw] md:mx-[7.5vw]">
        <div className="embla">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="embla__container">
              {MBBS_INDIA_STATE_SLIDES.map((slide) => (
                <div
                  className={isDesktop ? "embla__slide" : "embla__slidePhone"}
                  key={slide.title}
                >
                  <Link
                    href={slide.href}
                    className="mbbs-states-card block relative overflow-hidden rounded-[4vw] md:rounded-[1.5vw] border border-[#ffd7c3] bg-linenChosen"
                  >
                    <div className="relative flex-1 w-full overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={`MBBS in ${slide.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 72vw, 20vw"
                      />
                    </div>
                    <div className="relative shrink-0 bg-white/90 border-t border-[#ffd7c3] px-[4vw] md:px-[1.25vw] py-[4vw] md:py-[1.25vw]">
                      <p className="text-black font-semibold " style={{fontSize:"16px"}}>
                        MBBS in {slide.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="w-[26vw] embla__buttons mx-auto flex flex-row justify-between items-center">
          <div className="embla__scrollbarPhone">
            <div
              className="embla__scrollbar__thumbPhone"
              style={{
                left: `${scrollProgress}%`,
                width: `${scrollbarThumbWidth}vw`,
                height: "20vw",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[14vw] md:mt-[2vw]">
        <Link href="/mbbs-in-india/state-wise-institutes">
          <IconButton
            btnTitle="Explore All States"
            className="font-medium text-center text-smallTextPhone md:text-regularText"
            btnHeightPhone={11}
            btnRadiusPhone={15.5}
            btnWidthPhone={55.5}
            iconWidthPhone={7.75}
            paddingPhone={1.75}
            btnHeight={3.3}
            btnWidth={11}
            btnRadius={7.5}
            padding={0.5}
            iconWidth={2.1875}
            image="/assets/Images/Icons/NorthEastIcon.svg"
          />
        </Link>
      </div>
    </section>
  );
};

export default MbbsIndiaStatesSection;
