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
    <nav className={`absolute px-[4.125vw] top-0 left-0 mt-[2rem] pb-[1.5vw] bg-transparent dark:bg-transparent w-full z-50`}>
      <div className='flex items-center font-poppins text-regularText text-black dark:text-white w-full  '>
      <div className=" flex items-baseline text-[1vw] justify-between w-full">
        <div className='w-[15.125vw]'>
          <Image src={EdurizonLogo} alt="Edurizon Logo" layout="intrinsic" className='w-[8vw] h-[3.75vw] mt-[1vw]'/>
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
        
        <div id='navbaritems' className="flex gap-[2.375vw]">
          <button >
            <motion.div className='px-2' onHoverStart={()=>{setHovered(1)}} onHoverEnd={()=>setHovered(-1)} >
            Home
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==1?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
          <button>
          <motion.div className='px-2' onHoverStart={()=>{setHovered(2)}} onHoverEnd={()=>setHovered(-1)} >
            About Us
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==2?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
          <button>
          <motion.div className='px-2' onHoverStart={()=>{setHovered(3)}} onHoverEnd={()=>setHovered(-1)} >
            Study Destinations
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==3?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
          <button>
          <motion.div className='px-2' onHoverStart={()=>{setHovered(4)}} onHoverEnd={()=>setHovered(-1)} >
          Success Stories
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==4?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
          <button>
          <motion.div className='px-2' onHoverStart={()=>{setHovered(5)}} onHoverEnd={()=>setHovered(-1)} >
            Blog
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==5?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
          <button>
          <motion.div className='px-2' onHoverStart={()=>{setHovered(6)}} onHoverEnd={()=>setHovered(-1)} >
            Contact Us
            <div className={`border-t-[4px] border-orangeChosen    transition-all duration-500 ease-in-out rounded-xl ${hovered==6?"w-full":"w-0"} `}/>
            </motion.div>
          </button>
        </div>
        <div className='flex gap-[.5vw]'>
          <TitleButton onClick={()=>{}} btnHeight={2.75} btnWidth={6.0625} btnRadius={6.25} btnTitle={"Sign Up"}/>
          <IconButton onClick={()=>{}} btnHeight={2.75} btnWidth={9.0625} btnRadius={6.25} padding={0.375} iconWidth={1.9125} image={ApplyNowIcon} btnTitle={"Apply Now"} />
        </div>

        {/* <button
          onClick={handleLogout}
          className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-500"
        >
          Logout
        </button>
        <ThemeToggle/> */}
      </div>
      </div>
      
      
    </nav>
  );
};

export default Navbar;