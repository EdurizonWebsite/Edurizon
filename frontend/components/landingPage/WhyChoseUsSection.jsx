//

import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import whyChoseUsImg from '../../public/assets/Images/landingPage/WhyChoseUs2.svg';
import whyChoseUsDark from '../../public/assets/Images/landingPage/whyChoseUsDark.png';
import onBoardedIcon from '../../public/assets/Images/Icons/onboardedIcon.svg';
import academicCoursesIcon from '../../public/assets/Images/Icons/AcademinCoursesIcon.svg';
import tieUpsIcon from '../../public/assets/Images/Icons/TieUpsIcon.svg';
import experienceIcon from '../../public/assets/Images/Icons/ExperienceIcon.svg';

const WhyChoseUsSection = () => {

    // Original order of the divs
  const initialDivs = [
    { id: 1, image: onBoardedIcon, number: "5000+", label: "Students onboarded" },
    { id: 2, image: tieUpsIcon, number: "450+", label: "University Tie Ups" },
    { id: 3, image: experienceIcon, number: "19+", label: "Years of Experience" },
    { id: 4, image: academicCoursesIcon, number: "150+", label: "Academic Courses" },
  ];

      // Toggle between original and cross order
  const [isCross, setIsCross] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCross((prev) => !prev);
    }, 500000000);
    return () => clearInterval(interval);
  }, []);

  // When isCross is true, we swap the positions across the diagonal.
  // For a 2x2 grid (rendered row-wise), reversing the array produces:
  // Original: [1, 2, 3, 4] → Row1: 1,2; Row2: 3,4
  // Cross:      [4, 3, 2, 1] → Row1: 4,3; Row2: 2,1
  // This swaps top-left with bottom-right and top-right with bottom-left.
  const displayDivs = isCross 
    ? [initialDivs[3], initialDivs[2], initialDivs[1], initialDivs[0]]
    : initialDivs;


  return (
    <div className='flex z-[10] items-center gap-[3.75vw] '>
        <div className=' w-[46.5vw] z-[2] pl-[7.5vw]  mt-[4.75vw]'>
            <div className=' font-poppins z-[3] text-tinyText w-[35.25vw]'>
                <div className='flex flex-col justify-center bg-paleOrangeChosen  mb-[1.5vw] text-black text-tinyText h-[1.75vw] w-[9.675vw] rounded-[2.75vw]'>
                <p className=' text-center'>Why Chose Us?</p></div>
                <div className='w-full mb-[.5vw]'>
                <h1 className='text-h1Text font-helvetica leading-[120%] font-bold dark:text-white  '>Hey!!<br/>We are <span className='text-orangeChosen'>Edurizon</span></h1>
                </div>
                <p className='text-smallText leading-[150%] mb-[3.5vw] dark:text-white '>
                    Edurizon Pvt. Ltd. is one of the best abroad education consultants Company, in Delhi. We have 7 branch offices all over India. We have been 
                    experts in the field of counseling for the last 10 years.
                </p>
                <motion.div layout
                  className="grid grid-cols-2 gap-[1.125vw] items-center p-[.5vw] mb-[9.375vw]">
                {displayDivs.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    transition={{ duration: 0.5 }}
                    className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black"
                  >
                    <Image
                      className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0"
                      alt={item.label}
                      src={item.image}
                    />
                    <p className="text-center">
                      {item.number}
                      <br />
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>


            </div>
        

        </div>
        <div className=' w-auto h-[51.75vw] mt-[2.5vw] items z-[2]'>
            <Image className='w-full h-full ' src={whyChoseUsImg} alt='whyChoseUs' />
            {/* <Image className='w-full h-full hidden dark:block' src={whyChoseUsDark} alt='whyChoseUs' /> */}
            
        </div>
    </div>
  );
};

export default WhyChoseUsSection;