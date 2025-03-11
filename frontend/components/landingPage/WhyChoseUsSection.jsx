//

import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";


const WhyChoseUsSection = () => {
    // Original ordr of the divs
  const initialDivs = [
    { id: 1, image: "/assets/Images/Icons/onboardedIcon.svg", number: "5000+", label: "Students onboarded" },
    { id: 2, image: "/assets/Images/Icons/TieUpsIcon.svg", number: "450+", label: "University Tie Ups" },
    { id: 3, image: "/assets/Images/Icons/ExperienceIcon.svg", number: "19+", label: "Years of Experience" },
    { id: 4, image: "/assets/Images/Icons/AcademinCoursesIcon.svg", number: "150+", label: "Academic Courses" },
  ];

  const [isCross, setIsCross] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCross((prev) => !prev);
    }, 500000000);
    return () => clearInterval(interval);
  }, []);

  const displayDivs = isCross 
    ? [initialDivs[3], initialDivs[2], initialDivs[1], initialDivs[0]]
    : initialDivs;


  return (
    <div className='flex flex-col md:flex-row z-[10] items-center gap-[8vw] md:gap-[3.75vw] '>
        <div className=' w-[87.5vw] md:w-[46.5vw] z-[2] md:pl-[7.5vw]  mt-[10vw] md:mt-[4.75vw]'>
            <div className='  z-[3] text-tinyTextPhone md:text-tinyText w-full md:w-[35.25vw]'>
                <div className='flex flex-col justify-center bg-paleOrangeChosen mb-[6vw] md:mb-[1.5vw] text-black text-tinyTextPhone md:text-tinyText h-[7vw] md:h-[1.75vw] w-[39vw] md:w-[9.675vw] rounded-[11vw] md:rounded-[2.75vw]'>
                <p className=' text-center'>Why Chose Us?</p></div>
                <div className='w-full mb-[2vw] md:mb-[.5vw]'>
                <h1 className='text-h4TextPhone md:text-h1Text   leading-[120%] font-bold dark:text-white  '>Hey!!<br/>We are <span className='text-orangeChosen'>Edurizon</span></h1>
                </div>
                <p className='text-smallTextPhone md:text-smallText leading-[150%] mb-[6vw] md:mb-[3.5vw] dark:text-white '>
                    Edurizon Pvt. Ltd. is one of the best abroad education consultants Company, in Delhi. We have 7 branch offices all over India. We have been 
                    experts in the field of counseling for the last 10 years.
                </p>
                <motion.div layout
                  className="grid grid-cols-2 gap-[2.25vw]  md:gap-[1.125vw] items-center px-[5vw] md:p-[.5vw] md:mb-[9.375vw]">
                {displayDivs.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    transition={{ duration: 0.5 }}
                    className="w-[37.5vw] md:w-[16.5vw] h-[29.25vw] md:h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
                    rounded-[3.75vw] md:rounded-[1.875vw]
                     bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start py-[3vw] md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black"
                  >
                    <Image
                      width={64}
                      height={64}
                      className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative  overflow-hidden shrink-0"
                      alt={item.label}
                      src={item.image}
                    />
                    <p className="text-center">
                      <strong>{item.number}</strong>
                      <br />
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>


            </div>
        

        </div>
        <div className=' w-auto h-[116vw] md:h-[51.75vw] mt-[2.5vw] items z-[2]'>
            <Image width={40} height={40} className='w-full h-full ' src="/assets/Images/landingPage/WhyChoseUs2.svg" alt='whyChoseUs' />
            
        </div>
    </div>
  );
};

export default WhyChoseUsSection;