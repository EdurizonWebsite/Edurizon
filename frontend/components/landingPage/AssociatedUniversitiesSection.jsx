import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Image from "next/image";

import placeholder from '../../public/assets/Images/landingPage/associatedUniversity.png'
const logosData = [
    {  alt: "SF",height:5.5 },
    {  alt: "Jimmy Choo",height:2.75 },
    {  alt: "Burberry",height:4.875 },
    {  alt: "Bvlgari",height:1.625 },
    {  alt: "Prada",height:8.125 },
    {  alt: "Emporio Armani",height:2 },
    {  alt: "Ray-Ban",height:5.4375 },
    {  alt: "ESS",height:6.25 },
    {  alt: "Miu Miu",height:2.625 },
    {  alt: "Swarovski",height:2.125 },
    {  alt: "Dolce & Gabbana",height:1.625 },
    {  alt: "Giorgio Armani",height:2.375 },
    {  alt: "Michael Kors",height:4.5 },
    {  alt: "Ralph Lauren",height: 2.25 },
    {  alt: "Prada 2",height:2.5 },
    {  alt: "Dakley",height: 5.125},
    {  alt: "Tiffany" ,height:2.5},
    {  alt: "Tory Burch",height:3.0625 },
    {  alt: "Versace",height:5.75 },
    {  alt: "Vogue", height:5.625},
  ];

const AssociatedUniversitiesSection = () => {
    const slider = React.useRef(null);
          
    const settings = {
      className: "slider variable-width",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      variableWidth: true,
      pauseOnHover: false,   
      pauseOnFocus: false, 
    };
    return (
        <div className="h-[15vw]  flex flex-col my-[2vw] gap-[2vw] justify-center items-center overflow-hidden">
            <h3 className="text-h3Text font-helvetica text-center font-bold">Associated University</h3>
            <div className="flex justify-center items-center overflow-hidden">
                <Slider className="w-full"  ref={slider} {...settings}>   
                        {logosData.map((logo, index) => (
                        <div key={index} className="flex relative justify-center items-center">
                        <Image src={placeholder} alt={logo.alt} className="max-h-full object-contain" style={{height:`${6}vw`}} />
                        </div>
                    ))}
                </Slider>
            </div>
            
      </div>
    )
}

export default AssociatedUniversitiesSection;