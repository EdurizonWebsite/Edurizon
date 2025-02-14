import React from 'react';
import bgImage from '../../public/assets/Images/landingPage/homeBackground.png';
import Image from 'next/image';
import { IconButton, TitleButton } from '@/components/Buttons';

//Images Imports
import NorthEastIcon from '../../public/assets/Images/Icons/NorthEastIcon.svg';
import DummyStudent1 from '../../public/assets/Images/landingPage/DummyStudent1.png';
import DummyStudent2 from '../../public/assets/Images/landingPage/DummyStudent2.png';
import DummyStudent3 from '../../public/assets/Images/landingPage/DummyStudent3.png';
import DummyStudent4 from '../../public/assets/Images/landingPage/DummyStudent4.png';

const HeroSection = () => {
    return (
      <div>
        <div className="min-h-screen [background:linear-gradient(180deg,_#fef0e6,_#fff)] flex flex-col items-center justify-center font-poppins text-center  text-black">
          <div className="absolute top-0 left-0 w-full h-[120vh]">
            {/* Background Image */}
            <Image 
              src={bgImage} 
              alt="Background" 
              className="relative w-full h-[100vh] top-0 left-0 object-cover mix-blend-darken" 
            />
            
            {/* Blurred Centered Div */}
            <div className="absolute z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[54.625vw] h-[39.9375vw] [filter:blur(44.3125vw)] rounded-full bg-paleOrangeChosen"></div>
  
            {/* Gradient Overlay */}
            <div className="z-[0] absolute bottom-0 left-0 w-full h-[80vh] bg-[linear-gradient(180deg,rgba(255,255,255,0),#fff_83.31%)]"></div>
          </div>
  
          <div className='z-[2] flex flex-col items-center justify-center '>
            <div className='flex flex-col justify-center bg-paleOrangeChosen mx-auto mb-[1.75vw] text-black font-light text-tinyText h-[1.75vw] w-[20vw] rounded-[2.75vw]'><p className=' px-[1.5vw]'>Explore best study abroad facilities</p></div>
            <div className='w-[58vw] mb-[1.5vw]'>
              <h1 className='text-h1Text font-helvetica leading-[120%] font-bold '>Unlock Your Study Abroad Dream Get Expert <span className='text-orangeChosen'>Guidance Today!</span></h1>
            </div>
            <p className='w-[46.5625vw] text-regularText mb-[1.5vw]'>
              Confused about university selection, visa, or applications? We simplify your journey and ensure you get admitted to top universities hassle-free.
            </p>
            <div className='mb-[2vw] flex gap-[1vw] items-center'>
            <div className="relative w-full flex flex-row items-center justify-start ">
              <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover" alt="" src={DummyStudent1} />
              <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent2} />
              <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent3} />
              <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent4} />
            </div>
            <span className='text-brownChosen text-smallText whitespace-nowrap font-semibold'>Trusted by 5k+ Students</span>
            </div>
  
  
            <div className='flex w-[27.4375vw] gap-[.0.4375vw]'>
              <IconButton btnTitle={"Explore Opportunities"} className='text-smallText' btnHeight={2.75} btnWidth={13.1875} btnRadius={6.25} padding={0.375} iconWidth={1.9125} image={NorthEastIcon}/>
              <TitleButton btnTitle={"Book Free Consultation"} btnHeight={2.75} btnWidth={13.1875} btnRadius={6.25} />
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default HeroSection;