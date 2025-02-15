import Image from 'next/image'

import aboutUsMain from '../../public/assets/Images/aboutUs/aboutUsMain.png'

const heroSection = () => {
    return (
        <div className="relative mx-[7.5vw] flex flex-col ">
            <div className='flex flex-row gap-[7.5vw] my-[4.75vw] '>
                <div className="absolute top-[calc(50%)] left-[calc(50%)] [filter:blur(40.75vw)] rounded-[50%] bg-paleOrangeChosen w-[39.125vw] h-[28.625vw]" />
                <div className='flex flex-col justify-center w-[38.5vw] gap-[1.5vw] font-helvetica'>
                    <h6 className='text-h6Text '>Home / <strong>About Us</strong></h6>
                    <h2 className='text-h2Text font-bold leading-[120%]'>Hey!!<br/>We are <span className='text-orangeChosen'>Edurizon</span></h2>
                    <p className='text-regularText font-poppins'>Edurizon is a study abroad consultant in Delhi who helps students to apply for colleges based on their interest. We provide a wide range of career opportunities to students both in India and Abroad. We are a devoted team who is focused on providing the right information to the students at the right time.</p>
                </div>
                <div>
                    <Image className='w-[37.0625vw] h-[39.6875vw] rounded-[3.5vw]' src={aboutUsMain} alt="About Us Main" />
                </div>

            </div>
            <h4 className='text-h4Text text-center font-poppins w-[56.875vw] mx-auto leading-[130%]'>
            We help you to Empowering students with expert guidance, ensuring their admission to top universities globally with minimal hassle. 
            </h4>
        </div>
    )
}


export default heroSection;