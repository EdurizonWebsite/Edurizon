//

import React from 'react';
import Image from 'next/image';
import whyChoseUsImg from '../../public/assets/Images/landingPage/whyChoseUs.png';
import onBoardedIcon from '../../public/assets/Images/Icons/onboardedIcon.svg';
import academicCoursesIcon from '../../public/assets/Images/Icons/AcademinCoursesIcon.svg';
import tieUpsIcon from '../../public/assets/Images/Icons/TieUpsIcon.svg';
import experienceIcon from '../../public/assets/Images/Icons/ExperienceIcon.svg';

const WhyChoseUsSection = () => {
  return (
    <div className='flex z-[10] bg-white'>
        <div className=' w-[46.5vw] z-[2] pl-[7.5vw]  mt-[4.75vw]'>
            <div className='mr-[2vw] font-poppins text-tinyText w-[35.25vw]'>
                <div className='flex flex-col justify-center bg-paleOrangeChosen  mb-[1.5vw] text-black  text-tinyText h-[1.75vw] w-[9.675vw] rounded-[2.75vw]'>
                <p className=' text-center'>Why Chose Us?</p></div>
                <div className='w-full mb-[.5vw]'>
                <h1 className='text-h1Text font-helvetica leading-[120%] font-bold '>Hey!!<br/>We are <span className='text-orangeChosen'>Edurizon</span></h1>
                </div>
                <p className='text-smallText leading-[150%] mb-[3.5vw]'>
                    Edurizon Pvt. Ltd. is one of the best abroad education consultants Company, in Delhi. We have 7 branch offices all over India. We have been 
                    experts in the field of counseling for the last 10 years.
                </p>
                <div className='grid grid-cols-2 gap-[1.125vw] items-center p-[.5vw] mb-[9.375vw]'>
                    <div className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[1.875vw] bg-white 
                    overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center 
                    text-regularText text-black">
                            <Image className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0" alt="Students onboarded Icon" src={onBoardedIcon} />
                            <p className='text-center'>5000+<br/>Students onboarded</p>
                    </div>
                    <div className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[1.875vw] bg-white 
                    overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center 
                    text-regularText text-black">
                            <Image className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0" alt="Students onboarded Icon" src={tieUpsIcon} />
                            <p className='text-center'>150+<br/>University Tie Ups</p>
                    </div>
                    <div className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[1.875vw] bg-white 
                    overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center 
                    text-regularText text-black">
                            <Image className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0" alt="Students onboarded Icon" src={experienceIcon} />
                            <p className='text-center'>15+<br/>Years of Experience</p>
                    </div>
                    <div className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[1.875vw] bg-white 
                    overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center 
                    text-regularText text-black">
                            <Image className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0" alt="Students onboarded Icon" src={academicCoursesIcon} />
                            <p className='text-center'>150+<br/>Academic Courses</p>
                    </div>
                </div>


            </div>
        

        </div>
        <div className=' w-[53.5vw] h-[61vw] z-[2]'>
            <Image className='w-full h-full' src={whyChoseUsImg} alt='whyChoseUs' />
            
        </div>
    </div>
  );
};

export default WhyChoseUsSection;