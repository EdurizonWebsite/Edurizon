"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image  from 'next/image';
import {motion} from 'framer-motion';

//importing images
import { IconButton, TitleButton } from './Buttons';
import { TransitionLink } from '@/utils/TransitionLink';


const Navbar = () => {
  console.log('Rendering Navbar component');
  const [hovered, setHovered] = useState(-1);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Study Destinations", href: "#", dropdown: true },
    { name: "College Predictor", href: "https://college-predictor-nine.vercel.app/", external: true },
    { name: "Budget Calculator", href: "#" },
    { name: "Services", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

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

  return (
    <nav
    className={`${
      router.asPath === "/" ? "absolute" : "relative"
    } px-[2vw] md:px-[4.125vw] top-0 left-0 mt-[3vw] md:mt-[2vw] md:pb-[1.5vw] bg-transparent dark:bg-transparent w-full z-50`}
  >
    <div className="flex items-center font-poppins text-regularText text-black dark:text-white w-full">
      <div className="flex items-center justify-between w-full relative">
        <div className="relative md:w-[15.125vw]">
          <TransitionLink href="/">
        
          <Image 
          height={40} width={40}
            src="assets/Images/Icons/EdurizonFinalLogo.svg"
            alt="Edurizon Logo"
            className="w-[17.75vw] md:w-[5vw] h-[14vw] md:h-[3.875vw]"
          />
          </TransitionLink>
          <div className="absolute top-[2vw] hidden dark:block left-0 [filter:blur(1.7vw)] rounded-[50%] bg-paleOrangeChosen w-[5.375vw] h-[1vw]" />
        </div>

       {/* Main Navigation */}
       <div id="navbaritems" className="hidden md:flex gap-[1.5vw]">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    setHovered(index);
                    setDropdownVisible(true);
                  }}
                  onMouseLeave={() => {
                    setHovered(-1);
                    setDropdownVisible(false);
                  }}
                >
                  <button>
                    <motion.div>
                      {item.name}
                      <div
                        className={`border-t-[4px] border-orangeChosen transition-all duration-500 ease-in-out rounded-xl ${
                          hovered === index ? "w-full" : "w-0"
                        }`}
                      />
                    </motion.div>
                  </button>
                  {dropdownVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-48 dark:bg-black bg-white shadow-lg rounded-md border border-gray-300 z-50"
                    >
                      <ul className="py-2">
                        {studyDestinations.map((destination, i) => (
                          <TransitionLink key={i} href={destination.toLowerCase()}>
                            <li
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
              ) : (
                <button key={index} onClick={() => item.external && router.push(item.href)}>
                  <TransitionLink href={item.external ? "#" : item.href}>
                    <motion.div
                      onHoverStart={() => setHovered(index)}
                      onHoverEnd={() => setHovered(-1)}
                    >
                      {item.name}
                      <div
                        className={`border-t-[4px] border-orangeChosen transition-all duration-500 ease-in-out rounded-xl ${
                          hovered === index ? "w-full" : "w-0"
                        }`}
                      />
                    </motion.div>
                  </TransitionLink>
                </button>
              )
            )}
          </div>

        {/* Action Buttons */}
        <div className="flex gap-[1vw] md:gap-[.5vw] items-center">
          <TransitionLink href="/login">
            <TitleButton className="md:block hidden" btnHeightPhone={0} btnRadiusPhone={0} btnWidthPhone={0} btnHeight={2.75} btnWidth={6.0625} btnRadius={6.25} btnTitle="Sign Up" />
          </TransitionLink>
          <IconButton
            onClick={() => {}}
            className="text-regularText md:text-smallText"
            btnHeight={2.75}
            btnWidth={9.0625}
            btnRadius={6.25}
            padding={0.375}
            iconWidth={1.9125}
            paddingPhone={3}
            iconWidthPhone={8}
            btnHeightPhone={11}
            btnRadiusPhone={15}
            btnWidthPhone={33.5}
            image="/assets/Images/Icons/ApplyNowIcon.svg"
            btnTitle="Apply Now"
          />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src="assets/Images/Icons/menuIcon.svg" width="40" height="40" alt="menuIcon" className="md:hidden w-[8vw] h-[8vw]" />
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 transition-transform transform translate-x-0">
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
          ✖
        </button>
        <ul className="mt-10">
          {menuItems.map((item, index) => (
            <li key={index} className="p-2 border-b">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>
  );
};

export default Navbar;



  // const isMainPage = router.pathname === '/';
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [universities, setUniversities] = useState<University[]>([]);


  // interface University {
  //   _id: string;
  //   name: string;
  //   country: string;
  //   type: string;
  // }
  

// useEffect(() => {
  //   const fetchUniversities = async () => {
  //     const response = await axios.get('http://localhost:5000/api/universities/mbbs');
  //     setUniversities(response.data);
  //   };

  //   fetchUniversities();
  // }, []);

  // const handleUniversityClick = (id: string) => {
  //   setDropdownOpen(false); // Close the dropdown
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     router.push(`/login?redirect=/university/${id}`);
  //   } else {
  //     router.push(`/university/${id}`);
  //   }
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   router.push('/login');
  // };



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
        
  
    {/* <button
          onClick={handleLogout}
          className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-500"
        >
          Logout
        </button> */}