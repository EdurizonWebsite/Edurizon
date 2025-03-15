import Image from 'next/image';

import EdurizonLogo from '../public/assets/Images/EdurizonLogo.svg'
import LocationIcon from '../public/assets/Images/Icons/locationIcon.svg'
import XLogo from '../public/assets/Images/Icons/XLogo.svg'
import InstagramLogo from '../public/assets/Images/Icons/InstagramLogo.svg'
import YouTubeLogo from '../public/assets/Images/Icons/YouTubeLogo.svg'
import { TransitionLink } from '@/utils/TransitionLink';
const Footer = () => {
    return (
        <footer className="w-full">
            <div className="flex flex-col mx-[7.5vw] my-[2vw] font-poppins text-regularText dark:text-white">
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
                                <svg style={{width:"1.5vw", height:"1.5vw"}} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7835 10.9799L23.712 0.816406H21.597L13.8411 9.63945L7.65101 0.816406H0.509766L9.87236 14.1597L0.509766 24.8164H2.6248L10.81 15.497L17.3485 24.8164H24.4898M3.38817 2.3783H6.63746L21.5954 23.3312H18.3453" className='fill-black dark:fill-white'/>
                                </svg>

                                <svg style={{width:"1.5vw", height:"1.5vw"}} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_188_18986)">
                                    <path d="M12.4902 2.97941C15.6942 2.97941 16.0742 2.99141 17.3402 3.04941C20.5922 3.19741 22.1112 4.74041 22.2592 7.96841C22.3172 9.23341 22.3282 9.61341 22.3282 12.8174C22.3282 16.0224 22.3162 16.4014 22.2592 17.6664C22.1102 20.8914 20.5952 22.4374 17.3402 22.5854C16.0742 22.6434 15.6962 22.6554 12.4902 22.6554C9.28623 22.6554 8.90623 22.6434 7.64123 22.5854C4.38123 22.4364 2.87023 20.8864 2.72223 17.6654C2.66423 16.4004 2.65223 16.0214 2.65223 12.8164C2.65223 9.61241 2.66523 9.23341 2.72223 7.96741C2.87123 4.74041 4.38623 3.19641 7.64123 3.04841C8.90723 2.99141 9.28623 2.97941 12.4902 2.97941ZM12.4902 0.816406C9.23123 0.816406 8.82323 0.830406 7.54323 0.888406C3.18523 1.08841 0.763234 3.50641 0.563234 7.86841C0.504234 9.14941 0.490234 9.55741 0.490234 12.8164C0.490234 16.0754 0.504234 16.4844 0.562234 17.7644C0.762234 22.1224 3.18023 24.5444 7.54223 24.7444C8.82323 24.8024 9.23123 24.8164 12.4902 24.8164C15.7492 24.8164 16.1582 24.8024 17.4382 24.7444C21.7922 24.5444 24.2202 22.1264 24.4172 17.7644C24.4762 16.4844 24.4902 16.0754 24.4902 12.8164C24.4902 9.55741 24.4762 9.14941 24.4182 7.86941C24.2222 3.51541 21.8012 1.08941 17.4392 0.889406C16.1582 0.830406 15.7492 0.816406 12.4902 0.816406ZM12.4902 6.65441C9.08723 6.65441 6.32823 9.41341 6.32823 12.8164C6.32823 16.2194 9.08723 18.9794 12.4902 18.9794C15.8932 18.9794 18.6522 16.2204 18.6522 12.8164C18.6522 9.41341 15.8932 6.65441 12.4902 6.65441ZM12.4902 16.8164C10.2812 16.8164 8.49023 15.0264 8.49023 12.8164C8.49023 10.6074 10.2812 8.81641 12.4902 8.81641C14.6992 8.81641 16.4902 10.6074 16.4902 12.8164C16.4902 15.0264 14.6992 16.8164 12.4902 16.8164ZM18.8962 4.97141C18.1002 4.97141 17.4552 5.61641 17.4552 6.41141C17.4552 7.20641 18.1002 7.85141 18.8962 7.85141C19.6912 7.85141 20.3352 7.20641 20.3352 6.41141C20.3352 5.61641 19.6912 4.97141 18.8962 4.97141Z" 
                                    className='fill-black dark:fill-white' />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_188_18986">
                                    <rect style={{width:"1.5vw", height:"1.5vw"}} className='text-white dark:text-black' transform="translate(0.490234 0.816406)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                
                                    <svg style={{width:"1.5vw", height:"1.5vw"}} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_188_18988)">
                                        <path d="M20.1052 4.00053C16.5012 3.75453 8.47423 3.75553 4.87523 4.00053C0.978235 4.26653 0.519234 6.62053 0.490234 12.8165C0.519234 19.0015 0.974235 21.3655 4.87523 21.6325C8.47523 21.8775 16.5012 21.8785 20.1052 21.6325C24.0022 21.3665 24.4612 19.0125 24.4902 12.8165C24.4612 6.63153 24.0062 4.26753 20.1052 4.00053ZM9.49023 16.8165V8.81653L17.4902 12.8095L9.49023 16.8165Z" 
                                         className='fill-black dark:fill-white'/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_188_18988">
                                        <rect style={{width:"1.5vw", height:"1.5vw"}} className='text-white dark:text-black' transform="translate(0.490234 0.816406)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>


                            </div>

                        </div>
                    </div>
                    
                    <div className="flex flex-col w-[16.375vw] gap-[.75vw]  font-medium">
                        <p className="font-bold mb-[1vw]">Quick Links</p>
                        <TransitionLink href="/">
                        <p>Home</p>
                        </TransitionLink>
                        <TransitionLink href="/aboutUs">
                        <p>About Us</p>
                        </TransitionLink>
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
                <div className="border-t-[2px] border-solid border-black dark:border-white pt-[2vw]">
                    <p className="text-center text-regularText">© Copyright 2024. Edurizon Pvt. Ltd. All rights reserved.</p>

            </div>

            </div>
            
        </footer>
    );
}


export default Footer;