import React from 'react';
import Image from 'next/image';
import { IconButton, TitleButton } from '@/components/Buttons';

//Images Imports
import DummyStudent1 from '../../public/assets/Images/landingPage/DummyStudent1.png';
import DummyStudent2 from '../../public/assets/Images/landingPage/DummyStudent2.png';
import DummyStudent3 from '../../public/assets/Images/landingPage/DummyStudent3.png';
import DummyStudent4 from '../../public/assets/Images/landingPage/DummyStudent4.png';

const HeroSection = () => {
  
    return (
      
      <div>
        <div className="min-h-screen [background:linear-gradient(180deg,_#fef0e6,_#fff)] flex flex-col items-center  md:justify-center font-poppins text-center  text-black">
          <div className="absolute top-0 left-0 w-full h-[120vh]">
            {/* Background Image */}
            <div className="relative w-full h-[100vh] top-0 left-0">
              {/* Light Mode Background */}
              <Image src="/assets/Images/landingPage/homeBackground.png"
  alt="Beautiful Study Abroad Background"
  layout="fill" // Uses full container width and height
  objectFit="cover" // Ensures proper scaling without stretching
  priority={true} // Ensures this image loads early (no lazy load for LCP)
  quality={75} // Optimizes image size without quality loss
  className="absolute object-cover w-full h-full dark:opacity-0 opacity-100"
/>

              {/* Dark Mode Background */}
              <Image src="/assets/Images/landingPage/darkBg.png" alt="Beautiful Study Abroad Background"
  layout="fill" // Uses full container width and height
  objectFit="cover" // Ensures proper scaling without stretching
  priority={true} // Ensures this image loads early (no lazy load for LCP)
  quality={75} // Optimizes image size without quality loss
   className="absolute object-cover transition-opacity duration-200 ease-in-out  opacity-0 dark:opacity-100" />
            </div>

            
            
            {/* Blurred Centered Div */}
            <div className="absolute z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[54.625vw] h-[39.9375vw] [filter:blur(44.3125vw)] rounded-full bg-paleOrangeChosen dark:hidden"></div>
  
            {/* Gradient Overlay */}
            <div className="z-[0] absolute bottom-0 left-0 w-full h-[80vh] bg-[linear-gradient(180deg,rgba(255,255,255,0),#fff_83.31%)] dark:[background:linear-gradient(0deg,_#000,_rgba(43,_43,_43,_0))] transition-all duration-200 ease-in-out "></div>
          </div>
          
          <div className='z-[2] flex flex-col items-center justify-center mt-[41vw] md:mt-[0vw]'>
            <div className='flex flex-col justify-center bg-paleOrangeChosen mx-auto mb-[8vw] md:mb-[1.75vw] text-black font-light text-tinyTextPhone md:text-tinyText h-[6vw] md:h-[1.75vw] w-[60vw] md:w-[20vw] rounded-[2.75vw]'><p className=' px-[3vw] md:px-[1.5vw]'>Explore best study abroad facilities</p></div>
            <div className='w-[88vw] md:w-[58vw] mb-[4vw] md:mb-[1.5vw]'>
              <h1 className="text-h4TextPhone md:text-h1Text font-['Helvetica',sans-serif] leading-[120%] dark:text-white font-bold ">Unlock Your<br className='md:hidden'/> Study Abroad Dream Get Expert <span className='text-orangeChosen'>Guidance Today!</span></h1>
            </div>
            <p className='w-[88vw] md:w-[46.5625vw] text-black dark:text-white text-smallTextPhone md:text-regularText mb-[8vw] md:mb-[1.5vw]'>
              Confused about university selection, visa, or applications? We simplify your journey and ensure you get admitted to top universities hassle-free.
            </p>
            <div className='mb-[8vw] md:mb-[2vw] flex gap-[2vw] md:gap-[1vw] items-center'>
            <div className="relative w-full flex flex-row items-center justify-start ">
              <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover" alt="" src={DummyStudent1} />
              <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent2} />
              <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent3} />
              <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent4} />
            </div>
            <span className='text-brownChosen dark:text-white text-smallTextPhone md:text-smallText whitespace-nowrap font-medium'>Trusted by 5k+ Students</span>
            </div>
  
  
            <div className='flex flex-col md:flex-row w-[54vw] md:w-[27.4375vw] gap-[4vw] md:gap-[1vw]'>
              <IconButton btnTitle={"Explore Opportunities"} className='text-smallTextPhone md:text-smallText dark:text-white' btnHeightPhone={11} btnWidthPhone={52.5} btnRadiusPhone={17.5} paddingPhone={1.5} iconWidthPhone={8} btnHeight={3} btnWidth={13.1875} btnRadius={6.25} padding={0.375} iconWidth={1.9125} image={"/assets/Images/Icons/NorthEastIcon.svg"}/>
              <TitleButton btnTitle={"Book Free Consultation"} btnHeight={3} btnHeightPhone={11} btnWidth={13.1875} btnWidthPhone={52.5} btnRadius={6.25} btnRadiusPhone={17.5} />
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default HeroSection;