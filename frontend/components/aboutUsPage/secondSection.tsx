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


const SecondSection = () => {
    return (
        <div className="flex flex-col  items-center bg-white dark:bg-transparent dark:text-white" >
            <div className='flex gap-[1.125vw] items-center p-[.5vw] my-[4.75vw] justify-center'>
            <div className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[1.875vw] bg-white 
            overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center 
            text-regularText text-black">
                    <img className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0" alt="Students onboarded Icon" src="/assets/Images/Icons/onboardedIcon.svg" />
                    <p className='text-center'>5000+<br/>Students onboarded</p>
            </div>
            <div className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[1.875vw] bg-white 
            overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center 
            text-regularText text-black">
                    <img className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0" alt="Students onboarded Icon" src="/assets/Images/Icons/TieUpsIcon.svg" />
                    <p className='text-center'>150+<br/>University Tie Ups</p>
            </div>
            <div className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[1.875vw] bg-white 
            overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center 
            text-regularText text-black">
                    <img className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0" alt="Students onboarded Icon" src="/assets/Images/Icons/ExperienceIcon.svg" />
                    <p className='text-center'>15+<br/>Years of Experience</p>
            </div>
            <div className="w-[16.5vw] h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[1.875vw] bg-white 
            overflow-hidden shrink-0 flex flex-col items-center justify-start py-[1.5vw] px-[1.937vw] box-border gap-[1vw] text-center 
            text-regularText text-black">
                    <img className="w-[4.25vw] relative h-[4.25vw] overflow-hidden shrink-0" alt="Students onboarded Icon" src="/assets/Images/Icons/AcademinCoursesIcon.svg" />
                    <p className='text-center'>150+<br/>Academic Courses</p>
            </div>
        </div>
        <div className="w-[85vw] [background:linear-gradient(180deg,_#fff,_#ffd7c3)] dark:[background:linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(64,54,49,1)_100%)]  flex flex-col  justify-center py-[4.75vw] px-[7.5vw] box-border gap-[1.062vw]"> 
                <div className="flex justify-between">
                        <div className="flex flex-col gap-[2.125vw] w-[30.625vw]">
                                <div className='flex flex-col justify-center bg-linenChosen  mb-[1.5vw] text-black  text-tinyText h-[1.75vw] w-[7.675vw] rounded-[2.75vw]'>
                                        <p className=' text-center'>Our Story</p>
                                </div>
                                <h4 className="text-h4Text font-bold font-helvetica " >Your Dreams And Our Expertise Leads To Your Success </h4>
                        </div>
                        <div className="flex gap-[1vw]">
                        <Image src={ourStoryImg2} alt="Our Story Image 2" className="w-[15.75vw] h-[11.1875vw] " />
                        <Image src={ourStoryImg3} alt="Our Story Image 3" className="w-[15.75vw] h-[11.1875vw] " />
                        </div>
                </div>
                <div className="flex justify-around">
                        <Image className="w-[30.75vw] h-[20.75vw]" alt="Our Story Img 1" src={ourStoryImg1}/>
                        <div className="flex flex-col gap-[1.5vw] justify-center w-[32.125vw]" >
                                <p className="py-[.875vw] font-medium text-smallText font-poppins leading-[150%]">
                                Our mission is to empower students with expert guidance, ensuring their seamless admission to top universities worldwide. We aim to simplify the complex study abroad process by offering end-to-end assistance—from university selection and application guidance to visa support and post-arrival services. By prioritizing transparency, efficiency, and personalized counseling, we help students achieve their academic and career aspirations with confidence.
                                </p>
                                <div className=' flex gap-[1vw] items-center '>
                                        <div className="relative w-auto flex flex-row items-center justify-start ">
                                        <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover" alt="" src={DummyStudent1} />
                                        <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent2} />
                                        <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent3} />
                                        <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent4} />
                                        </div>
                                        <span className='text-black dark:text-white text-smallText whitespace-nowrap font-semibold'>Trusted by 5k+ Students</span>
                                </div>
                        </div>
                </div>
        </div>
        </div>

    )
}

export default SecondSection;