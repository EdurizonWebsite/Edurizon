import React, {useState,useEffect}  from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IconButton} from '@/components/Buttons';
import ConsultationForm from '@/components/ConsultationForm';
//Images Imports
import DummyStudent1 from '../../public/assets/Images/landingPage/DummyStudent1.png';
import DummyStudent2 from '../../public/assets/Images/landingPage/DummyStudent2.png';
import DummyStudent3 from '../../public/assets/Images/landingPage/DummyStudent3.png';
import DummyStudent4 from '../../public/assets/Images/landingPage/DummyStudent4.png';

const CTASection = () => {
    const router = useRouter();
    const route = (router?.pathname || '').replace(/^\//, '');
    const isNmcGuidelines = route === 'nmc-guidelines';

    const [heading, setHeading]=useState('Sign Up for free consultation and latest updates')
    const [description, setDescription] = useState('Get a Free Study Abroad Consultation Today! Our expert advisors will guide you through university selection, applications, visas, and scholarships – all for FREE!')
    const [showConsultationForm, setShowConsultationForm] = useState(false);
    
    useEffect(() => {
      if (isNmcGuidelines) {
        setHeading('Confused about NMC guidelines?\nGet expert counselling.');
        setDescription(
          'Our advisors stay updated with every regulatory shift to ensure your\ncareer remains protected and compliant with Indian laws.'
        );
      }
    }, [isNmcGuidelines]);
    
      const handleConsultationClick = () => {
        setShowConsultationForm(true);
      };
      useEffect(() => {
            if (showConsultationForm) {
              document.body.style.overflow = "hidden"; // Disable scrolling
            } else {
              document.body.style.overflow = "auto"; // Enable scrolling
            }
            return () => {
              document.body.style.overflow = "auto"; // Cleanup on unmount
            };
          }, [showConsultationForm]);
    return (
        <>
         
        <div className="mx-[7.5vw] mb-[14.5vw] md:mb-[9vw] py-[10vw] md:py-0 px-[6vw] rounded-[10vw] md:rounded-[2.5vw] w-auto h-[52vw] md:h-[28.5625vw] text-white flex md:flex-row gap-[8.625vw] bg-orangeChosen" >
            <div className="hidden md:block w-[43.1875vw] my-auto">
                <h2 className="text-h2Text md:text-h3Text font-bold leading-[120%] mb-[1vw]">{heading}</h2>
                    <p className="text-regularText leading-[150%]">{description}</p>
                </div>
            <div className='w-full md:w-[19vw] my-auto flex flex-col items-center gap-[4.5vw] md:gap-[1vw]'>
                <div className=' flex flex-row gap-[2vw] md:gap-[1.125vw] '>
                    <div className='pr-[2vw] md:pr-[0.4375vw] border-r-[.5vw] md:border-r-[.25vw] border-white'>
                        <h3 className=' text-h5TextPhone md:text-h3Text md:w-[9.75vw] text-center'><p className='leading-[120%] m-0 font-bold'>25k+</p> <p className='text-mediumTextPhone md:text-h6Text leading-[140%]'>Success Stories</p></h3>
                        </div>
                        <div className="relative flex flex-row items-center justify-start ">
                        <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover" alt="" src={DummyStudent1} />
                        <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent2} />
                        <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent3} />
                        <Image className="w-[8.5vw] h-[8.5vw] md:w-[2.594vw] md:h-[2.594vw] relative rounded-[50%]  object-cover ml-[-2.75vw] md:ml-[-0.813vw]" alt="" src={DummyStudent4} />
                    </div>
                </div>
                <IconButton onClick={handleConsultationClick} btnTitle={"Book Free Consultation"} className='text-regularText leading-[120%] bg-white' btnHeightPhone={11} btnRadiusPhone={15} btnWidthPhone={55} iconWidthPhone={7.75} paddingPhone={1.75} btnHeight={3.875} btnWidth={15.375} btnRadius={7.1875} padding={0.375} iconWidth={2.0625} image={"/assets/Images/Icons/ApplyNowIcon.svg"}/>
            </div>
        </div>
        {showConsultationForm && (
        <ConsultationForm onClose={() => setShowConsultationForm(false)} />
      )}</>

    )
}

export default CTASection;