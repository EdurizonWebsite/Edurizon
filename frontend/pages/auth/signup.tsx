import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LoginImg from '../../public/assets/Images/loginImg.png';
import LoginImgDark from '../../public/assets/Images/landingPage/whyChoseUsDark.png';
import OtpLogin from '../../components/OtpLogin'
import { TransitionLink } from '../../utils/TransitionLink';

const SignUp = () => {
  const router = useRouter();
  const [height, setHeight] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Redirect after a short delay to show the welcome message
      setTimeout(() => {
        if (parsedUser.role === 'counselor') {
          router.push('/counselor/dashboard');
        } else if (parsedUser.role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/studentDashboard');
        }
      }, 2000);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div className="h-screen w-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orangeChosen"></div>
    </div>;
  }

  if (user) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Welcome, <span className="text-orangeChosen">{user.name}</span>!
        </h1>
        <p className="text-dimgrayChosen dark:text-gray-300 text-lg">
          Redirecting you to your dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className='relative'>
      <div className='h-screen w-full flex flex-row gap-[3.25vw] justify-between '>
        <div className='w-[33.125vw] flex flex-col gap-[4vw] ml-[8.5vw] my-auto py-[3.375vw]'>
          <div className='flex flex-col gap-[1vw]'>
            <h3 className='font-helvetica leading-[120%] text-h3Text font-bold text-black dark:text-white'>
              Unlock Your Study Abroad Dream Get Expert <span className='text-orangeChosen'>Guidance Today!</span>
            </h3>
            <p className='font- text-mediumText font-poppins text-dimgrayChosen dark:text-gray-300 font-medium'>
              Want to start your abroad journey <span className='font-bold'>Lets Connect.</span>
            </p>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              className='w-[30vw] h-[3vw] font-poppins text-regularText text-black dark:text-white rounded-[6.25vw] border border-dimgrayChosen dark:border-white focus:outline-none px-[1.5vw] bg-transparent placeholder:text-dimgrayChosen dark:placeholder:text-gray-400'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              className='w-[30vw] h-[3vw] font-poppins text-regularText text-black dark:text-white rounded-[6.25vw] border border-dimgrayChosen dark:border-white focus:outline-none px-[1.5vw] bg-transparent placeholder:text-dimgrayChosen dark:placeholder:text-gray-400'
              onChange={(e) => setEmail(e.target.value)}
            />
            <OtpLogin isRegistration={true} name={name} email={email} />
            <span className='text-smallText font-poppins text-dimgrayChosen dark:text-gray-300 font-light'>
              By signing up, you agree to the <TransitionLink href='/terms'><span className='underline font-normal text-black dark:text-white'>Terms of use</span></TransitionLink> and <TransitionLink href='/terms'><span className='underline font-normal text-black dark:text-white'>Privacy Policy.</span></TransitionLink>
            </span>
            <div className='flex w-[30vw] items-center'>
              <div className='w-full h-min border-dimgrayLightChosen border-[1px] border-solid' />
              <span className='mx-[1vw] text-dimgrayChosen dark:text-gray-300 font-medium text-regularText font-poppins'>OR</span>
              <div className='w-full h-min border-dimgrayLightChosen border-[1px] border-solid' />
            </div>
            <div className='w-[30vw]'>
              <p className='text-regularText font-poppins text-dimgrayChosen dark:text-gray-300 text-center'>
                Already have an account? <TransitionLink href='/login'><span className='text-orangeChosen'>Login</span></TransitionLink> | <TransitionLink href='/'><span className='text-orangeChosen'>Home</span></TransitionLink>
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-screen w-auto overflow-hidden'>
          <Image className='w-[53.5vw] h-[56.25vw] object-contain block dark:hidden' src={LoginImg} alt='whyChoseUs' />
          <Image className='w-[53.5vw] h-screen hidden dark:block' src={LoginImgDark} alt='whyChoseUs' />
        </div>
      </div>
    </div>
  );
};

export default SignUp;


