import React,{useEffect,useState,useRef} from "react";
import dynamic from "next/dynamic";
import ThemeToggle from "../components/ThemeToggle";
import Head from "next/head";
import { IconButton } from "@/components/Buttons";

// ✅ Critical Section (Load Hero Immediately with SSR)
const HeroSection = dynamic(() => import("../components/landingPage/HeroSection"), { ssr: true });

// ✅ Lazy Load Non-Critical Sections (Reduces Render Delay)
const WhyChoseUsSection = dynamic(() => import("../components/landingPage/WhyChoseUsSection"), { ssr: false });
const Universities = dynamic(() => import("../components/landingPage/Universities"), { ssr: false });
const JourneySection = dynamic(() => import("../components/landingPage/JourneySection"), { ssr: false });
const FAQSection = dynamic(() => import("../components/landingPage/FAQSection"), { ssr: false });
const AssociatedUniversitiesSection = dynamic(() => import("../components/landingPage/AssociatedUniversitiesSection"), { ssr: false });
const CTASection = dynamic(() => import("../components/landingPage/CTASection"), { ssr: false });

const Home = () => {
  const [isHidden, setIsHidden] = useState(false);
  const freeConsultationRef = useRef(null);
  const ctaSectionRef = useRef(null);

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(entry.isIntersecting); // Hide when intersecting, show when not
      },
      {
        root: null, // Observe relative to the viewport
        threshold: 0.1, // Trigger when at least 10% of ctaSection is visible
      }
    );

    if (ctaSectionRef.current) {
      observer.observe(ctaSectionRef.current);
    }

    return () => {
      if (ctaSectionRef.current) {
        observer.unobserve(ctaSectionRef.current);
      }
    };
  }, []);
  return (
    <>
    
      {/* ✅ Load Hero Section Immediately (Critical for LCP) */}
      <HeroSection />

      {/* ✅ Lazy Loaded Sections (Prevents Render Blocking) */}
      <WhyChoseUsSection />
      <Universities />
      <JourneySection />
      <FAQSection />
      <AssociatedUniversitiesSection />
      <div id="ctaSection" ref={ctaSectionRef} >
      <CTASection />
      </div>
      {/* ✅ Theme Toggle Positioned to Avoid Blocking Render */}
      <div className="fixed z-[10] bottom-[5vh] w-full px-[4vw] ">
        <div className="flex   items-center justify-between space-x-2">
        <ThemeToggle />
        <div  id="freeConsultation" className={isHidden ? "flex transition-all duration-100 opacity-0" : "flex transition-all duration-300 opacity-100"} ref={freeConsultationRef}>
          
          <div id='youtube' className=" bg-[#ff3d00] flex items-center justify-center rounded-full w-[2.5vw] h-[2.5vw] p-[.25vw]">
          <a href="https://www.youtube.com/channel/UCgz4BJlEJtPVHMSLBJXbBfg">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-[1.5vw] h-[1.5vw]" viewBox="0,0,256,256">
          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M43.2,33.9c-0.4,2.1 -2.1,3.7 -4.2,4c-3.3,0.5 -8.8,1.1 -15,1.1c-6.1,0 -11.6,-0.6 -15,-1.1c-2.1,-0.3 -3.8,-1.9 -4.2,-4c-0.4,-2.3 -0.8,-5.7 -0.8,-9.9c0,-4.2 0.4,-7.6 0.8,-9.9c0.4,-2.1 2.1,-3.7 4.2,-4c3.3,-0.5 8.8,-1.1 15,-1.1c6.2,0 11.6,0.6 15,1.1c2.1,0.3 3.8,1.9 4.2,4c0.4,2.3 0.9,5.7 0.9,9.9c-0.1,4.2 -0.5,7.6 -0.9,9.9z" fill="#ffffff"></path><path d="M20,31v-14l12,7z" fill="#ff3d00"></path></g></g>
          </svg>
          </a>
          </div>
        <div className="bg-[#29A71A] rounded-full w-[2.5vw] h-[2.5vw] p-[0.25vw] ml-[-.5vw] flex items-center justify-center"> 
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.75vw] h-[1.75vw]" viewBox="0 0 48 48">
            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
            <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
            <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
            <path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
          </svg>
        </div>

        <div >
        <IconButton btnWidth={12.25}  className="ml-[-0.5vw] bg-orangeChosen text-white" btnTitle="Free Consultation" btnHeight={2.75} btnHeightPhone={0} btnRadius={6.25} btnRadiusPhone={0} btnWidthPhone={0} iconWidth={1.875} padding={.625} paddingPhone={0} image="assets/Images/Icons/NorthEastIconOrange.svg" iconWidthPhone={0} />
        </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;  
