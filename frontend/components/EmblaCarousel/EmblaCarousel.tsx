import React,{useState,useEffect} from 'react'
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
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  
      useEffect(() => {
        // Set initial width
        setScreenWidth(window.innerWidth);
    
        // Handle window resize
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        // Add event listener
        window.addEventListener("resize", handleResize);
    
        // Cleanup event listener on unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide,index) => (
            screenWidth && screenWidth > 768 ?
            <div className="embla__slide"  key={slide.title}>
              <div className="mr-[1.25vw]">
               <Image loading='lazy' style={{ height: "25vw",width:"20.25vw" }} src={slide.img} alt={slide.title} />
              </div>
            </div>
            :
            <div className="embla__slidePhone"  key={slide.title}>
              <div  className={`${index==5?"mr-[1.25vw]":""}`}>
               <Image loading='lazy' style={{ height: "62vw",width:"50vw" }} src={slide.img} alt={slide.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default EmblaCarousel
