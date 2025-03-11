import Image from "next/image"
import onBoardedIcon from '../../public/assets/Images/Icons/onboardedIcon.svg'
import tieUpsIcon from '../../public/assets/Images/Icons/TieUpsIcon.svg'
import experienceIcon from '../../public/assets/Images/Icons/ExperienceIcon.svg'
import academicCoursesIcon from '../../public/assets/Images/Icons/AcademinCoursesIcon.svg'
import ourStoryImg1 from '../../public/assets/Images/aboutUs/ourStoryImg1.png'
import ourStoryImg2 from '../../public/assets/Images/aboutUs/ourStoryImg2.png'
import ourStoryImg3 from '../../public/assets/Images/aboutUs/ourStoryImg3.png'
import DummyStudent1 from '../../public/assets/Images/landingPage/DummyStudent1.png';
import DummyStudent2 from '../../public/assets/Images/landingPage/DummyStudent2.png';
import DummyStudent3 from '../../public/assets/Images/landingPage/DummyStudent3.png';
import DummyStudent4 from '../../public/assets/Images/landingPage/DummyStudent4.png';

const services = [
        {
          icon: "/assets/Images/Icons/onboardedIcon.svg",
          text: "5000+",
          label: "Students onboarded",
        },
        {
          icon: "/assets/Images/Icons/TieUpsIcon.svg",
          text: "150+",
          label: "University Tie Ups",
        },
        {
          icon: "/assets/Images/Icons/ExperienceIcon.svg",
          text: "15+",
          label: "Years of Experience",
        },
        {
          icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
          text: "150+",
          label: "Academic Courses",
        },
      ];

const SecondSection = () => {
    return (
        <div className="flex flex-col  items-center bg-white dark:bg-transparent dark:text-white" >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.25vw]  md:gap-[1.125vw] items-center px-[5vw] md:p-[.5vw] my-[10vw] md:my-[4.75vw] justify-center">
      {services.map((item, index) => (
        <div
          key={index}
          className="w-[37.5vw] md:w-[16.5vw] h-[29.25vw] md:h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
                    rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start py-[3vw] 
                    md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black">
          <Image
            src={item.icon}
            alt={item.label}
            width={64}
            height={64}
            className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative  overflow-hidden shrink-0"
          />
          <p className="text-center">
            {item.text}
            <br />
            {item.label}
          </p>
        </div>
      ))}
                </div>
                
                <div className="w-full md:w-[85vw] [background:linear-gradient(180deg,_#fff,_#ffd7c3)] dark:[background:linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(64,54,49,1)_100%)]  flex flex-col  justify-center py-[10vw] md:py-[4.75vw] px-[6vw] md:px-[7.5vw] box-border gap-[6vw] md:gap-[1.062vw]"> 
                <div className="flex flex-col md:flex-row justify-between ">
                        <div className="flex flex-col gap-[4vw] md:gap-[2.125vw]  w-full md:w-[30.625vw]">
                                <div className='flex flex-col justify-center bg-linenChosen mx-auto md:mx-0  md:mb-[1.5vw] text-black text-smallTextPhone md:text-tinyText h-[8vw] md:h-[1.75vw] w-[30vw] md:w-[7.675vw] rounded-[11vw] md:rounded-[2.75vw]'>
                                        <p className=' text-center'>Our Story</p>
                                </div>
                                <h4 className="text-h4TextPhone md:text-h4Text font-bold leading-[120%] md:text-left text-center" >Your Dreams And Our Expertise Leads To Your Success </h4>
                        </div>
                        <div className="md:flex gap-[1vw] hidden">
                        <Image src={ourStoryImg2} alt="Our Story Image 2" className="w-[15.75vw] h-[11.1875vw] " />
                        <Image src={ourStoryImg3} alt="Our Story Image 3" className="w-[15.75vw] h-[11.1875vw] " />
                        </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-[10vw] md:gap-0">
                        <Image className="w-full h-auto md:w-[30.75vw] md:h-[20.75vw]" alt="Our Story Img 1" src={ourStoryImg1}/>
                        <div className="flex flex-col gap-[6vw] md:gap-[1.5vw] justify-center md:w-[32.125vw]" >
                                <p className="py-[.875vw] font-medium text-smallTextPhone md:text-smallText leading-[150%]">
                                Edurizon is a pioneer in overseas education consultancy, specializing in a wide range of programs, including MBBS in Russia, Georgia, Kazakhstan, Uzbekistan, and other top destinations. Whether you aspire to study MBBS, Engineering, MBA, or postgraduate courses, we provide personalized guidance to help you achieve your goals.
                                </p>
                                <div className=' flex gap-[4vw] md:gap-[1vw] items-center '>
                                        <div className="relative w-auto flex flex-row items-center justify-start ">
                                        <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover" alt="" src={DummyStudent1} />
                                        <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent2} />
                                        <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent3} />
                                        <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent4} />
                                        </div>
                                        <span className='text-black dark:text-white text-smallTextPhone md:text-smallText whitespace-nowrap font-semibold'>Trusted by 5k+ Students</span>
                                </div>
                        </div>
                </div>
        </div>
        </div>

    )
}

export default SecondSection;