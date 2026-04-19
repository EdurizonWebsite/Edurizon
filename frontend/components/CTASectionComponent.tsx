import React from 'react'
import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import CTASection from './landingPage/CTASection';
import ThemeToggle from './ThemeToggle';
import { IconButton } from './Buttons';
import ConsultationForm from './ConsultationForm';
import Footer from './Footer';
import { baseUrl } from '@/lib/baseUrl';
import axios from 'axios';
const CTASectionComponent = () => {
    const ctaSectionRef = useRef(null);
    const freeConsultationRef = useRef(null);
    const [isHidden, setIsHidden] = useState(false);
    
    const [showChatBot, setShowChatBot] = useState(false);
      const [showConsultationForm, setShowConsultationForm] = useState(false);
      const [chatBotReply, setChatBotReply] = useState<string[]>([]);
      const [userInput, setUserInput] = useState("");
      const questions = useMemo(
        () => [
          "Which university or country you are looking for?",
          "What is your budget? 20L-25L, 25L-30L, 30L-35L & Above.",
          "Tell us your name?",
          "Which city you are from?",
          "Share Your Contact details ( Mob No) so our counselor can reach out to you.",
          "Thank you for your interest. We will get back to you shortly.",
        ],
        []
      );
      const [disableChatBot, setDisableChatBot] = useState(false);
    
      const chatBotScrollRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        if (chatBotScrollRef.current) {
          chatBotScrollRef.current.scrollTop = chatBotScrollRef.current.scrollHeight;
        }
      }, [chatBotReply]); // Trigger scroll when chat updates
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
  


      const submitBotMsg = useCallback(async () => {
        try {
          const response = await axios.post(
            `${baseUrl}/api/chatbot/send`,
            chatBotReply
          );
          if (response.data.success) {
            console.log("Data send");
          }
        } catch (e) {
          console.log(e);
        }
      }, [chatBotReply]);

      useEffect(() => {
        if (chatBotReply.length === 5) {
          setDisableChatBot(true);
          submitBotMsg();
        }
      }, [chatBotReply, submitBotMsg]);

      useEffect(() => {
        if (!ctaSectionRef.current) return; // Don't run if no ref yet

        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsHidden(entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0,
          }
        );

        const currentElement = ctaSectionRef.current;
        observer.observe(currentElement);

        return () => {
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        };
      }, []);
  return (
    <>
              <div id="ctaSection" ref={ctaSectionRef} >
              <CTASection />
              </div>
              {/* ✅ Theme Toggle Positioned to Avoid Blocking Render */}
              <div id="freeConsultation" className={`${isHidden ?  "opacity-0 z-[-10]" : "opacity-100 z-[10]"} text-black  fixed   bottom-[5vh] w-full px-[4vw]  transition-all duration-100  pointer-events-none`} ref={freeConsultationRef}>
                
                {/* Chat bot */}
                <div className={` relative ml-auto md:ml-auto flex  w-min ${showChatBot ?"mx-[0]  md:mx-[-2.5vw] ":"mx-0 md:mx-0"}  transition-all duration-300 ease-in-out mb-[2vw] md:mb-[.5vw]`}>
                <div className={`w-[80vw] h-[50vh] md:w-[14.375vw]  md:h-[17.375vw] flex flex-col justify-center rounded-[2vw] md:rounded-[.625vw] border-[2px] md:border-[.125vw]
                   border-orangeChosen  bg-linenChosen overflow-hidden transition-all duration-300
                    ease-in-out ${showChatBot ?"opacity-100 pointer-events-auto":"pointer-events-none opacity-0"}` }>
                <div className="h-[5vh] md:h-[1.875vw] bg-orangeChosen  flex items-center justify-center">
                  <p className="text-white font-bold text-smallTextPhone md:text-smallText">Ask Us Anything</p>
                </div>
                <div className="flex flex-col mt-auto">
                  
                  <div ref={chatBotScrollRef} className="mx-h-[42vh] md:max-h-[12vw] py-[2vw] md:py-[.5vw] overflow-y-auto flex flex-col px-[2vw] md:px-[.5vw] ">
                  <div className="flex items-center bg-white justify-center mx-[1.5vw] md:mx-[.75vw] text-tinyTextPhone md:text-tinyText rounded-[2vw] md:rounded-[.625vw]  md:max-w-[10vw] px-[2vw] py-[2vw] md:px-[.5vw] md:py-[.5vw] mb-[2vw] md:mb-[.5vw]">
                      <p className="leading-[120%] ">{questions[0]}</p>
                  </div>
                  {chatBotReply.map((reply, index) => (
                    <>
                    <div className="flex items-center ml-auto bg-orangeChosen text-white justify-center mx-[1.5vw] md:mx-[.75vw] text-tinyTextPhone md:text-tinyText rounded-[2vw] md:rounded-[.625vw]  md:max-w-[10vw] px-[2vw] py-[2vw] md:px-[.5vw] md:py-[.5vw] mb-[2vw] md:mb-[.5vw]">
                      <p className="leading-[120%] ">{chatBotReply[index]}</p>
                  </div>
                  <div className="flex items-center bg-white justify-center mx-[1.5vw] md:mx-[.75vw] text-tinyTextPhone md:text-tinyText rounded-[2vw] md:rounded-[.625vw]  md:max-w-[10vw] px-[2vw] py-[2vw] md:px-[.5vw] md:py-[.5vw] mb-[2vw] md:mb-[.5vw]">
                      <p className="leading-[120%] ">{questions[index+1]}</p>
                  </div>
                    </>  ))
                  }
                  
                  </div>

                  <div className="flex bg-white shadow-[3.078px_2.462px_12.312px_0px_rgba(0,0,0,0.13)] mx-[1.5vw] md:mx-[.75vw] rounded-[2.5vw] md:rounded-[1.125vw] mb-[1.5vw] md:mb-[1vw] pl-[1.5vw] md:pl-[.875vw] py-[2vw] md:py-[.2vw] ">
                    <input name="answer" disabled={disableChatBot} onKeyDown={(e) => { if (e.key === "Enter") {e.preventDefault(); if (userInput.trim() !== "") 
                    { setChatBotReply([...chatBotReply, userInput]); setUserInput("");}}}} value={userInput} onChange={(e)=>setUserInput(e.target.value) } type="text"
                     placeholder="Write your message" className="w-full h-full outline-none text-smallTextPhone md:text-tinyText bg-transparent" />
                    <button disabled={disableChatBot} onClick={(e) => {e.preventDefault(); 
                      if(userInput.length==0) return ; setChatBotReply([...chatBotReply, userInput]); setUserInput("");}}>
                    <svg className="w-[10vw] md:w-[2vw] h-[10vw] md:h-[2vw] ml-auto" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.6994 11.1976L11.946 5.82085C4.72259 2.20288 1.75786 5.1676 5.37583 12.391L6.46876 14.5768C6.78282 15.2175 6.78282 15.9587 6.46876 16.5994L5.37583 18.7727C1.75786 25.9961 4.71002 28.9608 11.946 25.3428L22.6994 19.9661C27.5234 17.5541 27.5234 13.6095 22.6994 11.1976ZM18.6417 16.524H11.858C11.343 16.524 10.9159 16.0969 10.9159 15.5818C10.9159 15.0668 11.343 14.6397 11.858 14.6397H18.6417C19.1568 14.6397 19.5839 15.0668 19.5839 15.5818C19.5839 16.0969 19.1568 16.524 18.6417 16.524Z" fill="#FF7500"/>
                    </svg>
                    </button>
                  </div>
                  </div>
                </div>
                <svg onClick={()=>setShowChatBot(!showChatBot)} className="bg-white dark:bg-black overflow-visible rounded-full w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw]  pointer-events-auto cursor-pointer mt-auto " viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0004 2.4375C11.1768 2.4371 9.38414 2.90884 7.79695 3.8068C6.20977 4.70475 4.8821 5.99833 3.94318 7.56163C3.00426 9.12493 2.48608 10.9047 2.43906 12.7277C2.39204 14.5507 2.8178 16.3548 3.67488 17.9644L2.52215 21.4226C2.42666 21.7089 2.41281 22.0162 2.48213 22.3099C2.55145 22.6037 2.70122 22.8723 2.91464 23.0857C3.12806 23.2991 3.3967 23.4489 3.69045 23.5182C3.9842 23.5875 4.29146 23.5737 4.57777 23.4782L8.03598 22.3255C9.45254 23.0789 11.0221 23.4997 12.6256 23.556C14.2291 23.6123 15.8243 23.3025 17.2902 22.6502C18.7561 21.9979 20.0541 21.0202 21.0858 19.7914C22.1174 18.5625 22.8555 17.1148 23.2441 15.5581C23.6327 14.0014 23.6615 12.3766 23.3284 10.8071C22.9953 9.23759 22.309 7.76459 21.3216 6.49991C20.3342 5.23524 19.0717 4.21212 17.6299 3.50823C16.1881 2.80433 14.6048 2.43816 13.0004 2.4375ZM8.5316 14.2188C8.29056 14.2188 8.05492 14.1473 7.8545 14.0134C7.65408 13.8794 7.49787 13.6891 7.40562 13.4664C7.31338 13.2437 7.28924 12.9986 7.33627 12.7622C7.3833 12.5258 7.49937 12.3087 7.66982 12.1382C7.84026 11.9678 8.05742 11.8517 8.29384 11.8047C8.53025 11.7576 8.7753 11.7818 8.998 11.874C9.2207 11.9663 9.41104 12.1225 9.54496 12.3229C9.67887 12.5233 9.75035 12.759 9.75035 13C9.75035 13.3232 9.62195 13.6332 9.39339 13.8618C9.16483 14.0903 8.85484 14.2188 8.5316 14.2188ZM13.0004 14.2188C12.7593 14.2188 12.5237 14.1473 12.3233 14.0134C12.1228 13.8794 11.9666 13.6891 11.8744 13.4664C11.7821 13.2437 11.758 12.9986 11.805 12.7622C11.852 12.5258 11.9681 12.3087 12.1386 12.1382C12.309 11.9678 12.5262 11.8517 12.7626 11.8047C12.999 11.7576 13.244 11.7818 13.4667 11.874C13.6894 11.9663 13.8798 12.1225 14.0137 12.3229C14.1476 12.5233 14.2191 12.759 14.2191 13C14.2191 13.3232 14.0907 13.6332 13.8621 13.8618C13.6336 14.0903 13.3236 14.2188 13.0004 14.2188ZM17.4691 14.2188C17.2281 14.2188 16.9924 14.1473 16.792 14.0134C16.5916 13.8794 16.4354 13.6891 16.3431 13.4664C16.2509 13.2437 16.2267 12.9986 16.2738 12.7622C16.3208 12.5258 16.4369 12.3087 16.6073 12.1382C16.7778 11.9678 16.9949 11.8517 17.2313 11.8047C17.4678 11.7576 17.7128 11.7818 17.9355 11.874C18.1582 11.9663 18.3485 12.1225 18.4825 12.3229C18.6164 12.5233 18.6879 12.759 18.6879 13C18.6879 13.3232 18.5594 13.6332 18.3309 13.8618C18.1023 14.0903 17.7923 14.2188 17.4691 14.2188Z"  fill="#FF7500"/>
                </svg>

                </div>


                <div className="flex  items-center justify-between space-x-2">
                 <ThemeToggle />
                  <div className="flex" >
                  
                  <div id='youtube' className="border border-solid border-black  bg-[#ff3d00] flex pointer-events-auto items-center justify-center rounded-full w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] p-[.25vw]">
                    <a href="https://www.youtube.com/channel/UCgz4BJlEJtPVHMSLBJXbBfg">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-[6vw]  md:w-[1.5vw] h-auto" viewBox="0,0,256,256">
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"><g transform="scale(5.33333,5.33333)"><path d="M43.2,33.9c-0.4,2.1 -2.1,3.7 -4.2,4c-3.3,0.5 -8.8,1.1 -15,1.1c-6.1,0 -11.6,-0.6 -15,-1.1c-2.1,-0.3 -3.8,-1.9 -4.2,-4c-0.4,-2.3 -0.8,-5.7 -0.8,-9.9c0,-4.2 0.4,-7.6 0.8,-9.9c0.4,-2.1 2.1,-3.7 4.2,-4c3.3,-0.5 8.8,-1.1 15,-1.1c6.2,0 11.6,0.6 15,1.1c2.1,0.3 3.8,1.9 4.2,4c0.4,2.3 0.9,5.7 0.9,9.9c-0.1,4.2 -0.5,7.6 -0.9,9.9z" fill="#ffffff"></path><path d="M20,31v-14l12,7z" fill="#ff3d00"></path></g></g>
                    </svg>
                    </a>
                  </div>
                  
                  <a href="https://wa.me/919873381377?" target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#29A71A] border border-solid border-black rounded-full pointer-events-auto w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] p-[0.25vw] ml-[-1.75vw] md:ml-[-.5vw] flex items-center justify-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[7.5vw]  md:w-[1.75vw] h-auto" viewBox="0 0 48 48">
                      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
                      <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
                      <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
                      <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  </a>

                  <IconButton btnWidth={13} onClick={handleConsultationClick}  className="border border-solid border-black pointer-events-auto ml-[-0.5vw] hidden md:flex leading-[110%] text-regularText bg-orangeChosen text-white" btnTitle="Free Consultation" btnHeight={2.75} btnHeightPhone={0} btnRadius={6.25} btnRadiusPhone={0} btnWidthPhone={0} iconWidth={1.875} padding={.625} paddingPhone={0} image="/assets/Images/Icons/NorthEastIconOrange.svg" iconWidthPhone={0} />
                  </div>
                </div>
            </div>
            {showConsultationForm && (
                    <ConsultationForm onClose={() => setShowConsultationForm(false)} />
                  )}
             <Footer />
            </>
  )
}

export default CTASectionComponent
