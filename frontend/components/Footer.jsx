import Image from 'next/image';

import EdurizonLogo from '../public/assets/Images/EdurizonLogo.svg'
import LocationIcon from '../public/assets/Images/Icons/locationIcon.svg'
import XLogo from '../public/assets/Images/Icons/XLogo.svg'
import InstagramLogo from '../public/assets/Images/Icons/InstagramLogo.svg'
import YouTubeLogo from '../public/assets/Images/Icons/YouTubeLogo.svg'
const Footer = () => {
    return (
        <footer className="w-full">
            <div className="flex flex-col mx-[7.5vw] my-[2vw] font-poppins text-regularText">
                <div className="flex flex-row justify-between   pb-[5vw]">
                    <div className="flex flex-col w-[20.1875vw] gap-[4vw] font-medium">
                        <Image className='h-[2.8125vw] w-[12.25vw]' src={EdurizonLogo} alt="Edurizon Logo" />
                        <div className='flex flex-col gap-[.5vw] text-smallText leading-[150%]'>
                            <div className='flex flex-row gap-[.5vw]'>
                                <Image className='h-[1.25vw] w-[.875vw]' src={LocationIcon} alt="Location Icon" />
                                <p className=''>Pocket 111, 113, 115 1st Floor, Best Arcade Market, Canara Bank, Near K.M. Chowk, Sector-12 Dwarka, New Delhi - 110075</p>

                            </div>
                            <div>
                            <p className="m-0 ">Have any query? Let us answer it!</p>
                                <ul className="m-0  pl-[1.357rem]">
                                    <li className="list-disc ">+91-987 3381 377</li>
                                    <li className='list-disc'>info@edurizon.in</li>
                                </ul>
                            
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1vw] text-center font-normal '>
                            <p className=''>Connect With Us</p>
                            <div className='flex flex-row justify-center gap-[1vw]'>
                                <Image className='w-[1.5vw] h-[1.5vw]' alt='X logo' src={XLogo}/>
                                <Image className='w-[1.5vw] h-[1.5vw]' alt='Instagram logo' src={InstagramLogo}/>
                                <Image className='w-[1.5vw] h-[1.5vw]' alt='Youtube logo' src={YouTubeLogo}/>
                            </div>

                        </div>
                    </div>
                    
                    <div className="flex flex-col w-[16.375vw] gap-[.75vw]  font-medium">
                        <p className="font-bold mb-[1vw]">Quick Links</p>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Study Destinations</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="flex flex-col w-[16.375vw] gap-[.75vw] font-normal">
                    <p className="font-bold mb-[1vw]">Countries Abroad</p>
                        <p>Russia</p>
                        <p>China</p>
                        <p>Georgia</p>
                        <p>Kazakhastan</p>
                        <p>Bangladesh</p>
                        <p>Nepal</p>
                    </div>

                    <div className="flex flex-col w-[16.375vw] gap-[.75vw] font-normal">
                    <p className="font-bold mb-[1vw]">Services</p>
                        <p>Counselling Abroad</p>
                        <p>Visa Support</p>
                        <p>Support</p>
                        <p>College Predictor</p>
                        <p>Budget Planner</p>
                    </div>

                </div>
                <div>

                </div>
                <div className="border-t-[2px] border-solid border-black pt-[2vw]">
                    <p className="text-center text-regularText">© Copyright 2024. Edurizon Pvt. Ltd. All rights reserved.</p>

            </div>

            </div>
            
        </footer>
    );
}


export default Footer;