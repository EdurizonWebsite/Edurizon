
import React,{useState,useCallback,useEffect} from "react";
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'

import { IconButton } from "../Buttons";
import NorthEastIcon from '../../public/assets/Images/Icons/NorthEastIcon.svg';
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import useEmblaCarousel from 'embla-carousel-react'



// Country Images
import Russia from '../../public/assets/Images/CountryImages/Russia.png';
import UK from '../../public/assets/Images/CountryImages/UK.png';
import Georgia from '../../public/assets/Images/CountryImages/Georgia.png';
import Germany from '../../public/assets/Images/CountryImages/Germany.png';
import { NextButton, PrevButton,usePrevNextButtons } from "../EmblaCarousel/EmblaCarouselArrowButtons";
import { StaticImageData } from "next/image";


const OPTIONS: EmblaOptionsType = { dragFree: true, align: "start", containScroll: "trimSnaps", loop: true };
const SLIDES = [
  { img: Russia, title: "Russia" },
  { img: UK, title: "UK" },
  { img: Georgia, title: "Georgia" },
  { img: Germany, title: "Germany" },
  { img: Georgia, title: "Georgia2" },
  { img: Germany, title: "Germany2" },
];

interface PropType {
  autoScroll?: boolean;
}

const Universities: React.FC<PropType> = ({ autoScroll = true }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const updateScrollProgress = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("reInit", updateScrollProgress).on("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => {
      emblaApi.off("reInit", updateScrollProgress).off("scroll", updateScrollProgress);
    };
  }, [emblaApi, updateScrollProgress]);

  useEffect(() => {
    if (!emblaApi || !autoScroll) return;

    const interval = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [emblaApi, autoScroll]);

  return (
    <div className="w-full relative gradient-bg md:h-[56.25vw] flex flex-col justify-between overflow-hidden  py-[10vw] md:py-[4.75vw] px-[6.25vw] md:px-[7.5vw] box-border">
      <div className="flex flex-row md:gap-[23.3125vw] items-center">
        {/* Header Section */}
        <div className="w-full md:w-[37.1875vw]">
          <div className="flex flex-col justify-center bg-paleOrangeChosen mb-[6vw] md:mb-[1.5vw] text-black text-tinyTextPhone md:text-tinyText h-[7vw] md:h-[1.75vw] w-[32.5vw] md:w-[9vw] rounded-[11vw] md:rounded-[2.75vw]">
            <p className="text-center">Destinations</p>
          </div>
          <h2 className="text-h5TextPhone md:text-h2Text   leading-[120%] dark:text-white">
            <strong>
              Tied Up with <span className="text-orangeChosen">Universities</span>
            </strong>{" "}
            across the globe.
          </h2>
        </div>

        {/* Carousel Controls (Desktop) */}
        <div className="hidden md:block">
          <div className="embla__controls relative">
            <div className="w-[14.125vw] embla__buttons flex flex-row justify-between items-center">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <div className="embla__scrollbar">
                <div
                  className="embla__scrollbar__thumb"
                  style={{ left: `${scrollProgress}%`, width: `${SLIDES.length / 6.75}vw` }}
                />
              </div>
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="my-[6vw] md:my-[0vw]">
        <EmblaCarousel slides={SLIDES} emblaRef={emblaRef} />
      </div>

      {/* Carousel Controls (Mobile) */}
      <div className="block md:hidden">
        <div className="w-[26vw] embla__buttons mx-auto flex flex-row justify-between items-center">
          <div className="embla__scrollbarPhone">
            <div
              className="embla__scrollbar__thumbPhone"
              style={{ left: `${scrollProgress}%`, width: `${SLIDES.length}vw`, height: "20vw" }}
            />
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="mx-auto mt-[14vw] md:mt-[0vw]">
        <IconButton
          btnTitle="Explore All Destinations"
          className="font-medium text-smallTextPhone md:text-regularText"
          btnHeightPhone={11}
          btnRadiusPhone={15.5}
          btnWidthPhone={55.5}
          iconWidthPhone={7.75}
          paddingPhone={1.75}
          btnHeight={3.3}
          btnWidth={16}
          btnRadius={7.5}
          padding={0.5}
          iconWidth={2.1875}
          image="/assets/Images/Icons/NorthEastIcon.svg"
        />
      </div>
    </div>
  );
};


export default Universities;