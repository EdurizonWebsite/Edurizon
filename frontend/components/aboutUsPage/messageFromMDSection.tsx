import Image from "next/image";
import dummyTeamImage from '../../public/assets/Images/aboutUs/teamDummy.png'
const MessageFromMDSection = () => {
    return (
        <div className="my-[8vw] w-[85vw] mx-auto [background:linear-gradient(180deg,_#fff,_#ffd7c3)] dark:[background:linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(64,54,49,1)_100%)]  flex flex-row justify-between py-[4.75vw] px-[7.5vw] box-border gap-[1.062vw]"> 
                <div className="flex flex-col  gap-[1vw] w-[35vw] ">
                        <div className="flex flex-col gap-[2.125vw] ">
                                <div className='flex flex-col justify-center bg-linenChosen      text-black  text-tinyText h-[1.75vw] w-[4.675vw] rounded-[2.75vw]'>
                                        <p className=' text-center'>MD</p>
                                </div>
                                <h4 className="text-h4Text font-bold font-helvetica " >Message from the M.D. </h4>
                        </div>
                        <p className="text-regularText font-poppins leading-[150%]">
                        At Edurizon Pvt Ltd, we take immense pride in guiding students toward their dreams with transparency in education consultancy and a commitment to quality. Our 17+ years of experience have taught us that success comes from a blend of personalized guidance and unwavering support.<br/>
                        <br/>
                        Whether you aim to pursue MBBS in Russia, engineering, or other study-abroad programs, we ensure every step of your journey is seamless. From pre-admission counseling to post-MBBS career guidance, we are here to help you thrive. Thank you for trusting Edurizon as your trusted partner in higher education."<br/>
                        <br/>
                        Warm regards,<br/>
                        </p>
                        <h6 className="text-h6Text font-bold font-poppins">Maidul Seikh</h6>
                        <p className="text-smallText font-poppins">Founder | Managing Director</p>
                </div>
                <div className="flex justify-around">
                        <Image className="w-auto h-[29.75vw] rounded-[1vw]" alt="Our Story Img 1" src={dummyTeamImage}/>
                        
                </div>
        </div>
    )
}

export default MessageFromMDSection;