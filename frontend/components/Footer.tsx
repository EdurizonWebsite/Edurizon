import React, { useEffect, useState } from "react";
import { TransitionLink } from "@/utils/TransitionLink";
import Image from "next/image";
const socialLinks = [
  { href: "#", icon: "M14.7835 10.9799L23.712 0.816406H21.597L13.8411 9.63945L7.65101 0.816406H0.509766L9.87236 14.1597L0.509766 24.8164H2.6248L10.81 15.497L17.3485 24.8164H24.4898M3.38817 2.3783H6.63746L21.5954 23.3312H18.3453", name: "X" },
  { href: "https://www.instagram.com/edurizon_pvt.ltd/", icon: "M12.4902 2.97941C15.6942 2.97941 16.0742 2.99141 17.3402 3.04941C20.5922 3.19741 22.1112 4.74041 22.2592 7.96841C22.3172 9.23341 22.3282 9.61341 22.3282 12.8174C22.3282 16.0224 22.3162 16.4014 22.2592 17.6664C22.1102 20.8914 20.5952 22.4374 17.3402 22.5854C16.0742 22.6434 15.6962 22.6554 12.4902 22.6554C9.28623 22.6554 8.90623 22.6434 7.64123 22.5854C4.38123 22.4364 2.87023 20.8864 2.72223 17.6654C2.66423 16.4004 2.65223 16.0214 2.65223 12.8164C2.65223 9.61241 2.66523 9.23341 2.72223 7.96741C2.87123 4.74041 4.38623 3.19641 7.64123 3.04841C8.90723 2.99141 9.28623 2.97941 12.4902 2.97941Z", name: "Instagram" },
  { href: "https://www.youtube.com/@EdurizonPvtLtd", icon: "M20.1052 4.00053C16.5012 3.75453 8.47423 3.75553 4.87523 4.00053C0.978235 4.26653 0.519234 6.62053 0.490234 12.8165C0.519234 19.0015 0.974235 21.3655 4.87523 21.6325C8.47523 21.8775 16.5012 21.8785 20.1052 21.6325C24.0022 21.3665 24.4612 19.0125 24.4902 12.8165C24.4612 6.63153 24.0062 4.26753 20.1052 4.00053ZM9.49023 16.8165V8.81653L17.4902 12.8095L9.49023 16.8165Z", name: "YouTube" }
];

const quickLinks = [{ name: "Home", href: "/" },
  { name: "About Us", href: "/aboutUs" },{ name: "Study Destination", href: "#" },
  { name: "Blog", href: "#" },{ name: "Blog", href: "#" },
  { name: "Contact Us", href: "#" },];
const countries = ["Russia", "China", "Georgia", "Kazakhstan", "Bangladesh", "Nepal"];
const services = ["Language Prep", "Shortlist Colleges", "Financial Planning", "SOP Review", "Start Now", "Visa Help", "Get a Counsellor"];

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="w-full">
      <div className="flex flex-col mx-[6vw] md:mx-[7.5vw] my-[8vw] md:my-[2vw]  text-smallTextPhone md:text-regularText dark:text-white">
        {/* Footer Sections */}
        <div className="flex flex-col md:flex-row justify-between gap-[8vw] md:gap-[0vw] pb-[5vw]">
          {/* Logo and Contact Info */}
          <div className="flex flex-col w-full md:w-[20.1875vw] gap-[4vw] font-medium">
            <Image width={40} height={40} className="h-auto w-[20vw] md:w-[5.25vw]" src="assets/Images/Icons/EdurizonFinalLogo.svg" alt="Edurizon Logo" />
            <div>
            <div className="flex flex-row gap-[2vw] md:gap-[1vw]">
                <Image width={40} height={40} className='h-[5vw] md:h-[1.25vw] w-[3.5vw] md:w-[.875vw]' src="/assets/Images/Icons/locationIcon.svg" alt="Location Icon" />
                <div className="text-smallTextPhone md:text-smallText leading-[150%]">
              <p className="mb-2">Pocket 111, 113, 115 1st Floor, Best Arcade Market, Canara Bank, Near K.M. Chowk, Sector-12 Dwarka, New Delhi - 110075</p>
              
            </div>
            </div>
            <p className="m-0">Have any queries? Let us answer them!</p>
              <ul className="m-0 pl-[1.357rem]">
                <li className="list-disc">+91-987 3381 377</li>
                <li className="list-disc">info@edurizon.in</li>
              </ul>
              </div>
            
            {/* Social Media Icons */}
            <div className="flex flex-col gap-[1vw] text-center font-normal">
              <p className="text-regularTextPhone">Connect With Us</p>
              <div className="flex justify-center gap-[4vw] md:gap-[1vw]">
                {socialLinks.map((link, i) => (
                    link.name!="Instagram"?(
                  <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                    <svg style={{ width: screenWidth! > 768 ? "2vw" : "6vw", height: screenWidth! > 768 ? "2vw" : "6vw" }} viewBox="0 0 25 25" fill="none">
                      <path d={link.icon} className="fill-black dark:fill-white" />
                    </svg>
                  </a>
                    ):(
                  <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                    <svg width={screenWidth! > 768 ? "2vw" : "7vw"} height={screenWidth! > 768 ? "2vw" : "7vw"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.013 4.849.07 3.252.148 4.771 1.691 4.919 4.919.057 1.265.069 1.645.069 4.849s-.013 3.584-.07 4.849c-.148 3.225-1.664 4.771-4.919 4.919-1.265.057-1.645.07-4.849.07s-3.584-.013-4.849-.07c-3.225-.148-4.771-1.664-4.919-4.919-.057-1.265-.07-1.645-.07-4.849s.013-3.584.07-4.849C2.412 3.924 3.929 2.378 7.154 2.23 8.419 2.173 8.799 2.163 12 2.163m0-2.163C8.741 0 8.332.014 7.052.073 2.694.273.273 2.694.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.073 4.948.2 4.358 2.621 6.779 6.979 6.979 1.28.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.073 4.358-.2 6.779-2.621 6.979-6.979.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.073-4.948-.2-4.358-2.621-6.779-6.979-6.979C15.668.014 15.259 0 12 0z" className="fill-black dark:fill-white"/>
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324m0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" className="fill-black dark:fill-white" />
                    <circle cx="18.406" cy="5.594" r="1.439" className="fill-black dark:fill-white" />
                    </svg>
                  </a>
                    )
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col w-full md:w-[16.375vw] gap-[2vw] md:gap-[.75vw] font-medium">
            <p className="font-bold">Quick Links</p>
            {quickLinks.map((link, i) => (
              <TransitionLink key={i} href={link.href}>
                <p>{link.name}</p>
              </TransitionLink>
            ))}
          </div>

          {/* Countries Abroad */}
          <div className="flex flex-col w-full md:w-[16.375vw] gap-[2vw] md:gap-[.75vw] font-normal">
            <p className="font-bold">Countries Abroad</p>
            {countries.map((country, i) => <p key={i}>{country}</p>)}
          </div>

          {/* Services */}
          <div className="flex flex-col w-full md:w-[16.375vw] gap-[2vw] md:gap-[.75vw] font-normal">
            <p className="font-bold">Services</p>
            {services.map((service, i) => <p key={i}>{service}</p>)}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-[2px] border-black dark:border-white pt-[8vw] md:pt-[2vw]">
          <p className="text-center text-regularTextPhone md:text-regularText">© 2024 Edurizon Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
