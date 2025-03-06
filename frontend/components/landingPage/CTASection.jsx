
import Image from 'next/image';
import { IconButton} from '@/components/Buttons';
//Images Imports
import DummyStudent1 from '../../public/assets/Images/landingPage/DummyStudent1.png';
import DummyStudent2 from '../../public/assets/Images/landingPage/DummyStudent2.png';
import DummyStudent3 from '../../public/assets/Images/landingPage/DummyStudent3.png';
import DummyStudent4 from '../../public/assets/Images/landingPage/DummyStudent4.png';

const CTASection = () => {
    return (
        <div className="mx-[7.5vw] mb-[9vw] px-[6vw] rounded-[2.5vw] w-auto h-[28.5625vw] font-poppins text-white flex flex-row gap-[8.625vw] bg-orangeChosen" >
            <div className="w-[43.1875vw] my-auto">
                <h2 className="font-helvetica text-h2Text font-bold leading-[120%] mb-[1vw]">Sign Up for free consultation and latest updates</h2>
                <p className="text-regularText leading-[150%]">Get a Free Study Abroad Consultation Today!" Subtext: "Our expert advisors will guide you through university selection, applications, visas, and scholarships – all for FREE!</p>
            </div>
            <div className='w-[19vw] my-auto flex flex-col items-center gap-[1vw]'>
                <div className=' flex flex-row gap-[1.125vw] '>
                    <div className='pr-[0.4375vw] border-r-[.25vw] border-white'>
                        <span className='font-helvetica text-h3Text w-[9.75vw] text-center'><p className='leading-[120%] m-0 font-bold'>2.5k+</p> <p className='text-h6Text leading-[140%]'>Success Stories</p></span>
                    </div>
                    <div className="relative flex flex-row items-center justify-start ">
                        <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover" alt="" src={DummyStudent1} />
                        <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent2} />
                        <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent3} />
                        <Image className="w-[2.594vw] relative rounded-[50%] h-[2.594vw] object-cover ml-[-0.813vw]" alt="" src={DummyStudent4} />
                    </div>
                </div>
                <IconButton btnTitle={"Book Free Consultation"} className='text-regularText leading-[120%] bg-white' btnHeight={3.875} btnWidth={15.375} btnRadius={7.1875} padding={0.375} iconWidth={2.0625} image={"assets/Images/Icons/ApplyNowIcon.svg"}/>
            </div>
        </div>

    )
}

export default CTASection;