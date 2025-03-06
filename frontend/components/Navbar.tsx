"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image  from 'next/image';
import {motion} from 'framer-motion';

//importing images
import EdurizonLogo from '../public/assets/Images/EdurizonLogo.svg'
import ApplyNowIcon from '../public/assets/Images/Icons/ApplyNowIcon.svg'
import { IconButton, TitleButton } from './Buttons';
import Link from 'next/link';
import { TransitionLink } from '@/utils/TransitionLink';
import ThemeToggle from './ThemeToggle';
import EdurizonFinalLogo from '../public/assets/Images/Icons/EdurizonFinalLogo.svg';
import MenuIcon from '../public/assets/Images/Icons/menuIcon.svg';
interface University {
  _id: string;
  name: string;
  country: string;
  type: string;
}

const Navbar = () => {
  console.log('Rendering Navbar component');
  const [universities, setUniversities] = useState<University[]>([]);
  const [hovered, setHovered] = useState(-1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const studyDestinations = [
    "Russia",
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "New Zealand",
    "Singapore",
  ];

  useEffect(() => {
    const fetchUniversities = async () => {
      const response = await axios.get('http://localhost:5000/api/universities/mbbs');
      setUniversities(response.data);
    };

    fetchUniversities();
  }, []);

  const handleUniversityClick = (id: string) => {
    setDropdownOpen(false); // Close the dropdown
    const token = localStorage.getItem('token');
    if (!token) {
      router.push(`/login?redirect=/university/${id}`);
    } else {
      router.push(`/university/${id}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <nav className={`${router.asPath=='/'?"absolute":'relative'} px-[2vw] md:px-[4.125vw] top-0 left-0 mt-[3vw] md:mt-[2vw] md:pb-[1.5vw] bg-transparent dark:bg-transparent w-full z-50`}>
      <div className='flex items-center font-poppins text-regularText text-black dark:text-white w-full  '>
      <div className="relative flex items-center text-smallText md:text-regularText justify-between w-full">
        <div className='md:w-[15.125vw] relative'>
          <Image src={EdurizonFinalLogo} alt="Edurizon Logo" layout="intrinsic" className='w-[17.75vw] md:w-[5vw] h-[14vw] md:h-[3.875vw] '/>
          <div className="absolute top-[2vw] hidden dark:block  left-0 [filter:blur(1.7vw)] rounded-[50%] bg-paleOrangeChosen w-[5.375vw] h-[1vw]" />         
        </div>
        {/* <div className="relative">
          
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
          >
            MBBS
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded shadow-lg">
              {universities.length > 0 ? (
                universities.map((university) => (
                  <div
                    key={university._id}
                    className="px-4 py-2 text-gray-300 cursor-pointer hover:bg-gray-700"
                    onClick={() => handleUniversityClick(university._id)}
                  >
                    {university.name} ({university.country})
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-300">No universities available</div>
              )}
            </div>
          )}
        </div> */}
        
        <div id='navbaritems' className="hidden md:flex gap-[1.5vw] ">
          <button className='' >
          <TransitionLink href='/'>
            <motion.div  onHoverStart={()=>{setHovered(1)}} onHoverEnd={()=>setHovered(-1)} >Home  
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==1?"w-full":"w-0"} `}/>
            </motion.div>
            </TransitionLink>
          </button>

          <button>
          <TransitionLink key={"home"} href='aboutUs'>
          <motion.div  onHoverStart={()=>{setHovered(2)}} onHoverEnd={()=>setHovered(-1)} >
            About Us
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==2?"w-full":"w-0"} `}/>
            </motion.div>
            </TransitionLink>
          </button>


          {/* Study Destinations with Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => {
          setHovered(3);
          setDropdownVisible(true);
        }}
        onMouseLeave={() => {
          setHovered(-1);
          setDropdownVisible(false);
        }}
      >
        <button>
          <motion.div>
            Study Destinations
            <div
              className={`border-t-[4px] border-orangeChosen transition-all duration-500 ease-in-out rounded-xl ${
                hovered == 3 ? "w-full" : "w-0"
              }`}
            />
          </motion.div>
        </button>

        {/* Dropdown Menu */}
        {dropdownVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-48 dark:bg-black bg-white shadow-lg rounded-md border border-gray-300 z-50"
          >
            <ul className="py-2">
              {studyDestinations.map((destination, index) => (
                <TransitionLink key={index} href={destination.toLowerCase()} >
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-all duration-300"
                >
                  {destination}
                </li>
                </TransitionLink>
              ))}
            </ul>
          </motion.div>
        )}
      </div>



          <button onClick={()=>{router.push("https://college-predictor-nine.vercel.app/")}}>
          <motion.div  onHoverStart={()=>{setHovered(4)}} onHoverEnd={()=>setHovered(-1)} >
          College Predictor
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==4?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
          <button>
          <motion.div  onHoverStart={()=>{setHovered(5)}} onHoverEnd={()=>setHovered(-1)} >
            Budget Calculator
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==5?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
          <button>
          <motion.div  onHoverStart={()=>{setHovered(6)}} onHoverEnd={()=>setHovered(-1)} >
            Services
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==6?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
          <button>
          <motion.div  onHoverStart={()=>{setHovered(7)}} onHoverEnd={()=>setHovered(-1)} >
            Testimonials
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==7?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
        </div>


        <div className='flex gap-[1vw] md:gap-[.5vw] items-center'>
          <TransitionLink href='/login'>
            <TitleButton className='md:block hidden'  onClick={()=>{}} btnHeight={2.75} btnWidth={6.0625} btnRadius={6.25} btnTitle={"Sign Up"}/>

          </TransitionLink>
          <IconButton onClick={()=>{}} className='text-regularText md:text-smallText' btnHeight={2.75} btnWidth={9.0625} btnRadius={6.25} padding={0.375} iconWidth={1.9125} image={ApplyNowIcon} btnTitle={"Apply Now"}
          btnHeightPhone={11} btnWidthPhone={33.5} btnRadiusPhone={15} iconWidthPhone={8} paddingPhone={3} />
          <Image src={MenuIcon} alt='menuIcon' className='md:hidden w-[8vw] h-[8vw]'/>
        </  div>

        {/* <button
          onClick={handleLogout}
          className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-500"
        >
          Logout
        </button> */}
        {/* <ThemeToggle/> */}
      </div>
      </div>
      
      
    </nav>
  );
};

export default Navbar;