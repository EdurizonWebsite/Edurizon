import Image from 'next/image'

import aboutUsMain from '../../public/assets/Images/aboutUs/aboutUsMain.png'
import AboutUsDark from '../../public/assets/Images/aboutUs/AboutUsDark.png'
import Breadcrumbs from '../Breadcumbs'

const heroSection = () => {
    return (
        <div className="relative mx-[6vw] md:mx-[7.5vw] flex flex-col bg-white dark:bg-transparent dark:text-white">
            <div className='flex flex-col md:flex-row gap-[8vw] md:gap-[7.5vw] my-[8vw] md:my-[4.75vw] '>
                <div className="absolute top-[calc(50%)] left-[calc(50%)] [filter:blur(40.75vw)] rounded-[50%] block dark:hidden bg-paleOrangeChosen w-[39.125vw] h-[28.625vw]" />
                    <div className='flex flex-col justify-center w-full md:w-[38.5vw] md:gap-[1.5vw] '>
                    <div className='mx-auto mb-[4vw]'>
                    <Breadcrumbs/>
                    </div>
                    <h2 className='text-h4TextPhone md:text-h2Text font-bold leading-[120%] text-center md:text-left mb-[6vw] md:mb-0'>Hey!!<br/>We are <span className='text-orangeChosen'>Edurizon</span></h2>
                    <p className='text-smallTextPhone md:text-regularText '>Edurizon is a study abroad consultant in Delhi who helps students to apply for colleges based on their interest. We provide a wide range of career opportunities to students both in India and Abroad. We are a devoted team who is focused on providing the right information to the students at the right time.</p>
                    </div>
                <div>
                    <Image className='w-full h-auto md:w-[37.0625vw] md:h-[39.6875vw] rounded-[8.5vw] md:rounded-[3.5vw] block dark:hidden' src={aboutUsMain} alt="About Us Main" />
                    <Image className='w-full h-auto md:w-[37.0625vw] md:h-[39.6875vw] rounded-[8.5vw] md:rounded-[3.5vw] hidden dark:block' src={AboutUsDark} alt="About Us Main" />
                </div>

            </div>
          
        </div>
    )
}


export default heroSection;