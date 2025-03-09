import Image from "next/image";
import React from "react";

const teamMembers = [
    [
      {
        name: "Lalit Sir",
        position: "Counsellor",
        image: "/assets/Images/aboutUs/teamDummy.png",
        hidden: true, // Controls visibility
      },
      {
        name: "Sanjay Burari",
        position: "CEO",
        image: "/assets/Images/Team/sanjaySir.png",
      },
      {
        name: "Kunal Chauhan",
        position: "Academic Director",
        image: "/assets/Images/Team/kunalSir.png",
      },
    ],
    [
      {
        name: "Yogesh Thakur",
        position: "Finance Manager",
        image: "/assets/Images/Team/yogeshSir.png",
      },
      {
        name: "Karishma Singh",
        position: "Overseas Head",
        image: "/assets/Images/Team/karishmaMam.png",
      },
      {
        name: "Pankaj Kumar",
        position: "IT Manager",
        image: "/assets/Images/Team/pankajSir.png",
      },
    ],
  ];

const TeamsSection=()=>{
    return (
        <div className="md:mx-[8.3125vw] mx-[6vw]  py-[10vw] md:py-[7.5vw] flex flex-col gap-[6vw] md:gap-[5.3125vw] dark:text-white">
            <div className="flex flex-col gap-[6vw] md:gap-[1.5vw]">
                <h1 className="text-h4TextPhone md:text-h1Text leading-[120%] font-helvetica text-center font-medium">Expert Counsellors guiding you through.</h1>
                <p className="text-mediumTextPhone md:text-mediumText leading-[150%] font-poppins font-medium text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                
            </div>
            <div className="mx-[-6vw] md:px-0 flex md:flex-col gap-[10vw] h-[120vw] md:h-auto md:gap-[2.5vw] items-center overflow-y-visible overflow-x-auto  no-scrollbar">
      {teamMembers.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-[10vw] md:gap-[3.5vw] ">
          {row.map((member, index) => (
            <div
              key={index}
              className={`shadow-[3.5vw_2.5vw_9vw_-1vw_rgba(0,_0,_0,_0.1)] overflow-y-visible md:shadow-[.875vw_0.625vw_2.25vw_-.25vw_rgba(0,_0,_0,_0.1)] w-[70.5vw] md:w-[17.625vw] flex-shrink-0 ${rowIndex==1 && index==2 ?"mr-[6vw]":""} ${rowIndex==0 && index==1 ?"ml-[6vw]":""}  ${member.hidden ? "hidden" : ""}`}
            >
              <Image
                alt={member.name}
                src={member.image}
                width={300}
                height={300}
                className="w-full h-[78.5vw] md:h-[19.5vw]"
              />
              <div className="w-full [backdrop-filter:blur(3vw)] flex flex-col gap-[3vw] md:gap-[.75vw] py-[4vw] pl-[5vw] md:py-[.825vw] md:pl-[1.25vw]">
                <h6 className="text-h6TextPhone md:text-h6Text leading-[100%] font-poppins font-bold">{member.name}</h6>
                <p className="text-smallTextPhone md:text-smallText leading-[100%] font-poppins font-medium">{member.position}</p>
                
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
            

        </div>
    )
}

export default TeamsSection;