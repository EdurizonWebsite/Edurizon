import Image from 'next/image'

import aboutUsMain from '../../public/assets/Images/aboutUs/aboutUsMain.png'
import AboutUsDark from '../../public/assets/Images/aboutUs/AboutUsDark.png'

const heroSection = () => {
    return (
        <div className="relative mx-[7.5vw] flex flex-col bg-white dark:bg-transparent dark:text-white">
            <div className='flex flex-row gap-[7.5vw] my-[4.75vw] '>
                <div className="absolute top-[calc(50%)] left-[calc(50%)] [filter:blur(40.75vw)] rounded-[50%] block dark:hidden bg-paleOrangeChosen w-[39.125vw] h-[28.625vw]" />
                <div className='flex flex-col justify-center w-[38.5vw] gap-[1.5vw] font-helvetica '>
                    <h6 className='text-h6Text '>Home / <strong>About Us</strong></h6>
                    <h2 className='text-h2Text font-bold leading-[120%] '>Hey!!<br/>We are <span className='text-orangeChosen'>Edurizon</span></h2>
                    <p className='text-regularText font-poppins'>Edurizon is a study abroad consultant in Delhi who helps students to apply for colleges based on their interest. We provide a wide range of career opportunities to students both in India and Abroad. We are a devoted team who is focused on providing the right information to the students at the right time.</p>
                </div>
                <div>
                    <Image className='w-[37.0625vw] h-[39.6875vw] rounded-[3.5vw] block dark:hidden' src={aboutUsMain} alt="About Us Main" />
                    <Image className='w-[37.0625vw] h-[39.6875vw] rounded-[3.5vw] hidden dark:block' src={AboutUsDark} alt="About Us Main" />
                </div>

            </div>
          
        </div>
    )
}


export default heroSection;