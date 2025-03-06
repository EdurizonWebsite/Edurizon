
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

type SlideType = {
  img: StaticImageData; // If using Next.js Image, ensure it's StaticImageData
  title: string;
};



type PropType = {
  autoScroll?: boolean; // New prop to control auto-scroll
};

const Universities: React.FC<PropType> = ({autoScroll=true}) => {
    const OPTIONS: EmblaOptionsType = { dragFree: true,align:"start",containScroll: "trimSnaps",loop:true}
    const slides = [{img:Russia,title:"Russia"},{img:UK,title:"UK"},{img:Georgia,title:"Georgia"},{img:Germany,title:"Germany"},{img:Georgia,title:"Georgia"},{img:Germany,title:"Germany"}];

    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
      const [scrollProgress, setScrollProgress] = useState(0);
    
      const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);
    
      const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
        if (!emblaApi) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress((progress) * 100);
      }, []);
    
      useEffect(() => {
        if (!emblaApi) return;
    
        emblaApi.on("reInit", onScroll).on("scroll", onScroll);
        onScroll(emblaApi);
    
        return () => {
          emblaApi.off("reInit", onScroll).off("scroll", onScroll);
        };
      }, [emblaApi, onScroll]);
    
      // Auto-scroll effect for infinite loop (optional)
      useEffect(() => {
        if (!emblaApi || !autoScroll) return;
    
        const interval = setInterval(() => {
          if (emblaApi) emblaApi.scrollNext();
        }, 3000); // Scroll every 3 seconds
    
        return () => clearInterval(interval);
      }, [emblaApi, autoScroll]);
    return (
        <div className="w-full  relative [background:linear-gradient(180deg,_#fef0e6,_#fff)] dark:[background:linear-gradient(180deg,_#000000,_#000)] h-[56.25vw] flex flex-col justify-between overflow-hidden font-poppins  py-[4.75vw] px-[7.5vw] box-border text-centertext-black">
            <div className="flex flex-row gap-[23.3125vw] items-center">
                <div className="w-[37.1875vw]">
                <div className='flex flex-col justify-center bg-paleOrangeChosen  mb-[1.5vw] text-black  text-tinyText h-[1.75vw] w-[9vw] rounded-[2.75vw]'>
                <p className=' text-center'>Destinations</p></div>
                <div className='w-full mb-[.5vw]'>
                    <h2 className='text-h2Text font-helvetica leading-[120%] dark:text-white '><strong>Tied Up with <span className='text-orangeChosen'>Universities</span></strong><br/> across the globe.</h2>
                </div>
                </div>
                <div>

                    <div className="embla__controls relative">
                            <div className="w-[14.125vw] embla__buttons flex flex-row justify-between items-center gap">
                              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                              {/* <div className="embla__progress">
                              <div
                                className="embla__progress__bar"
                                style={{ transform: `scaleX(${scrollProgress / 100})` }}
                              />
                            </div> */}
                              <div className="embla__scrollbar">
                                  <div
                                    className="embla__scrollbar__thumb"
                                    style={{ left: `${scrollProgress}%`,width:`${slides.length/6.75}vw` }} // Dynamic width based on scroll
                                  />
                                </div>
                              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                            </div>
                          </div>
                    
                </div>
            </div>

            <div>
                <EmblaCarousel slides={slides}  emblaRef={emblaRef} />
            </div>
            <div className="mx-auto">
            <IconButton btnTitle={"Explore All Destinations"} className="font-medium text-regularText   " btnHeight={3.3} btnWidth={16} btnRadius={7.5} padding={0.5} iconWidth={2.1875} image={"/assets/Images/Icons/NorthEastIcon.svg"}/>
            </div>
        </div>
    );
}

export default Universities;