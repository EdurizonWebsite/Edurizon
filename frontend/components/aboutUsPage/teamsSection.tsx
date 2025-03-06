import Image from "next/image";
import React from "react";
import kunalSir from '../../public/assets/Images/Team/kunalSir.png'
import sanjaySir from '../../public/assets/Images/Team/sanjaySir.png'
import karishmaMam from '../../public/assets/Images/Team/karishmaMam.png'
import yogeshSir from '../../public/assets/Images/Team/yogeshSir.png'
import pankajSir from '../../public/assets/Images/Team/pankajSir.png'
import dummyTeamImage from '../../public/assets/Images/aboutUs/teamDummy.png'

const TeamsSection=()=>{
    return (
        <div className="px-[8.3125vw] py-[7.5vw] flex flex-col gap-[5.3125vw] dark:text-white">
            <div className="flex flex-col gap-[1.5vw]">
                <h1 className="text-h1Text leading-[120%] font-helvetica text-center font-medium">Expert Counsellors guiding you through.</h1>
                <p className="text-mediumText leading-[150%] font-poppins font-medium text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                
            </div>
            <div className="flex flex-col gap-[2.5vw] items-center">
                <div className="flex flex-row gap-[3.5vw]">
                    
                    <div className="hidden shadow-[.875vw_0.625vw_2.25vw_-.25vw_rgba(0,_0,_0,_0.1)] w-[17.625vw]">
                        <Image alt="dummy image" src={dummyTeamImage} className=" w-full h-[19.5vw]"/>
                        <div className="w-full [backdrop-filter:blur(3vw)] flex flex-col gap-[.75vw] py-[.825vw] pl-[1.25vw]">
                            <h6 className="text-h6Text leading-[100%] font-poppins font-bold">Lalit Sir</h6>
                            <p className="text-smallText leading-[100%] font-poppins font-medium">Counsellor</p>
                        </div>
                    </div>
                    <div className="shadow-[.875vw_0.625vw_2.25vw_-.25vw_rgba(0,_0,_0,_0.1)] w-[17.625vw]">
                        <Image alt="dummy image" src={sanjaySir} className=" w-full h-[19.5vw]"/>
                        <div className="w-full [backdrop-filter:blur(3vw)] flex flex-col gap-[.75vw] py-[.825vw] pl-[1.25vw]">
                            <h6 className="text-h6Text leading-[100%] font-poppins font-bold">Sanjay Burari</h6>
                            <p className="text-smallText leading-[100%] font-poppins font-medium">Founder | Managing Director </p>
                        </div>
                    </div>
                    <div className="shadow-[.875vw_0.625vw_2.25vw_-.25vw_rgba(0,_0,_0,_0.1)] w-[17.625vw]">
                        <Image alt="dummy image" src={kunalSir} className=" w-full h-[19.5vw]"/>
                        <div className="w-full [backdrop-filter:blur(3vw)] flex flex-col gap-[.75vw] py-[.825vw] pl-[1.25vw]">
                            <h6 className="text-h6Text leading-[100%] font-poppins font-bold">Kunal Chauhan</h6>
                            <p className="text-smallText leading-[100%] font-poppins font-medium">Counsellor</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-[3.5vw]">
                    
                    <div className="shadow-[.875vw_0.625vw_2.25vw_-.25vw_rgba(0,_0,_0,_0.1)] w-[17.625vw]">
                        <Image alt="dummy image" src={yogeshSir} className=" w-full h-[19.5vw]"/>
                        <div className="w-full [backdrop-filter:blur(3vw)] flex flex-col gap-[.75vw] py-[.825vw] pl-[1.25vw]">
                            <h6 className="text-h6Text leading-[100%] font-poppins font-bold">Yogesh Thakur</h6>
                            <p className="text-smallText leading-[100%] font-poppins font-medium">Finance Manager</p>
                        </div>
                    </div>
                    <div className="shadow-[.875vw_0.625vw_2.25vw_-.25vw_rgba(0,_0,_0,_0.1)] w-[17.625vw]">
                        <Image alt="dummy image" src={karishmaMam} className=" w-full h-[19.5vw]"/>
                        <div className="w-full [backdrop-filter:blur(3vw)] flex flex-col gap-[.75vw] py-[.825vw] pl-[1.25vw]">
                            <h6 className="text-h6Text leading-[100%] font-poppins font-bold">Karishma Singh</h6>
                            <p className="text-smallText leading-[100%] font-poppins font-medium">Counsellor</p>
                        </div>
                    </div>
                    <div className="shadow-[.875vw_0.625vw_2.25vw_-.25vw_rgba(0,_0,_0,_0.1)] w-[17.625vw]">
                        <Image alt="dummy image" src={pankajSir} className=" w-full h-[19.5vw]"/>
                        <div className="w-full [backdrop-filter:blur(3vw)] flex flex-col gap-[.75vw] py-[.825vw] pl-[1.25vw]">
                            <h6 className="text-h6Text leading-[100%] font-poppins font-bold">Pankaj Kumar</h6>
                            <p className="text-smallText leading-[100%] font-poppins font-medium">IT Manager</p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default TeamsSection;