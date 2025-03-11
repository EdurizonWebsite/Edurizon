import React,{useEffect,useState} from 'react';
import Image from 'next/image';
import LoginImg from '../../public/assets/Images/loginImg.png';
import LoginImgDark from '../../public/assets/Images/landingPage/whyChoseUsDark.png';
import OtpLogin from '../../components/OtpLogin'
import {TransitionLink} from '../../utils/TransitionLink';



const SignUp = () => {
  const [height, setHeight] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className='relative'>
      <div className='h-screen w-full flex flex-row gap-[3.25vw] justify-between '>
        <div className='w-[33.125vw] flex flex-col gap-[4vw] ml-[8.5vw] my-auto py-[3.375vw]'>
          <div className='flex flex-col gap-[1vw]'>
          <h3 className=' leading-[120%] text-h3Text font-bold'>Unlock Your Study  Abroad Dream Get Expert <span className='text-orangeChosen'>Guidance Today!</span></h3>
          <p className='font- text-mediumText  text-dimgrayChosen font-medium'>Want to start your abroad journey <span className='font-bold'>Lets Connect.</span></p>
          <input
                        type="text"
                        placeholder="Full Name"
                        value={name} 
                        className='w-[30vw] h-[3vw]  text-regularText rounded-[6.25vw] border border-dimgrayChosen dark:border-white focus:outline-none px-[1.5vw]'
                        onChange={(e) => setName(e.target.value)}
                    />
           <input
                        type="email"
                        placeholder="Enter Email"
                        value={email} 
                        className='w-[30vw] h-[3vw]  text-regularText rounded-[6.25vw] border border-dimgrayChosen dark:border-white focus:outline-none px-[1.5vw]'
                        onChange={(e) => setEmail(e.target.value)}
                    />
          <OtpLogin/>
          <span className='text-smallText  text-dimgrayChosen font-light'>By signing up, you agree to the <TransitionLink href='/terms'> <span className='underline font-normal text-black'>Terms of use</span></TransitionLink> and <TransitionLink href='/terms'><span className='underline font-normal text-black'>Privacy Policy.</span></TransitionLink></span>
            <div className='flex w-[30vw] items-center'>
                <div className='w-full h-min border-dimgrayLightChosen border-[1px] border-solid'/>
                <span className='mx-[1vw] text-dimgrayChosen font-medium text-regularText '>OR</span>
                <div className='w-full h-min border-dimgrayLightChosen border-[1px] border-solid'/>
            </div>
            <div className='w-[30vw]'>
                <p className='text-regularText  text-dimgrayChosen  text-center'>Already have an account? <TransitionLink href='/login'> <span className='text-orangeChosen'>Login</span></TransitionLink> | <TransitionLink href='/'> <span className='text-orangeChosen'>Home</span></TransitionLink></p>

            </div>
          </div>
        </div>
        <div className='relative h-screen w-auto overflow-hidden'>
        <Image className='w-[53.5vw]  h-[56.25vw] object-contain block dark:hidden' src={LoginImg} alt='whyChoseUs' />
        <Image className='w-[53.5vw] h-screen hidden dark:block' src={LoginImgDark} alt='whyChoseUs' />
        </div>
      </div>
    </div>
  );
};

export default SignUp;


