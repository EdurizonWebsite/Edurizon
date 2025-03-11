import Image from "next/image";
import maidulSir from '../../public/assets/Images/Team/maidulSir.png'

const MessageFromMDSection = () => {
    return (
        <div className="md:my-[8vw] md:w-[85vw]  md:mx-auto [background:linear-gradient(180deg,_#fff,_#ffd7c3)] dark:[background:linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(64,54,49,1)_100%)]  flex flex-col md:flex-row justify-between py-[10vw] md:py-[4.75vw] px-[6vw] md:px-[7.5vw] box-border gap-[6vw] md:gap-[1.062vw]"> 
                <div className="flex flex-col gap-[4vw] md:gap-[1vw] md:w-[35vw] ">
                        <div className="flex flex-col gap-[4vw] md:gap-[2.125vw] ">
                                <div className='flex flex-col justify-center bg-linenChosen text-black mx-auto md:mx-0 text-smallText md:text-tinyText h-[8vw] md:h-[1.75vw] w-[19vw] md:w-[4.675vw] rounded-[11vw] md:rounded-[2.75vw]'>
                                        <p className=' text-center'>MD</p>
                                </div>
                                <h4 className="text-h4TextPhone md:text-h4Text font-bold " >Message from the M.D. </h4>
                        </div>
                        <p className="text-smallTextPhone md:text-regularText leading-[150%]">
                        At Edurizon Pvt Ltd, we take immense pride in guiding students toward their dreams with transparency in education consultancy and a commitment to quality. Our 17+ years of experience have taught us that success comes from a blend of personalized guidance and unwavering support.<br/>
                        <br/>
                        Whether you aim to pursue MBBS in Russia, engineering, or other study-abroad programs, we ensure every step of your journey is seamless. From pre-admission counseling to post-MBBS career guidance, we are here to help you thrive. Thank you for trusting Edurizon as your trusted partner in higher education."<br/>
                        <br/>
                        Warm regards,<br/>
                        </p>
                        <h6 className="text-h6TextPhone md:text-h6Text font-bold ">Maidul Seikh</h6>
                        <p className="text-smallTextPhone md:text-smallText">Founder | Managing Director</p>
                </div>
                <div className="flex justify-around">
                        <Image className="w-full h-auto rounded-[3vw] md:w-auto md:h-[29.75vw] md:rounded-[1vw]" alt="MD Image" src={maidulSir}/>
                        
                </div>
        </div>
    )
}

export default MessageFromMDSection;