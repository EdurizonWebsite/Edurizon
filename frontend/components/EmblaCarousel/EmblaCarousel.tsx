import React from 'react'
import Image, { StaticImageData } from 'next/image'

type SlideType = {
  img: StaticImageData; // If using Next.js Image, ensure it's StaticImageData
  title: string;
};


type PropType = {
  slides: SlideType[];
  emblaRef: (node: HTMLDivElement | null) => void;
};

const EmblaCarousel: React.FC<PropType> = ({ slides,emblaRef }) => {
 
  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide,index) => (
            <div className="embla__slide"  key={slide.title}>
              <div  className={`${index==5?"mr-[1.25vw]":""}`}>
               <Image style={{ height: "25vw",width:"20.25vw" }} src={slide.img} alt={slide.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default EmblaCarousel
