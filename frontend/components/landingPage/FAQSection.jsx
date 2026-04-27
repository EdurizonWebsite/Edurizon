import React,{useState, useContext} from "react"
import Image from "next/image"
import ThemeContext from "@/context/themeContext"


export function FAQSection({data}){
    const [selected,setSelected]=useState(null)
    const { theme } = useContext(ThemeContext);
    
    const toggle=(i)=>{
        if (selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return (<div className="my-[10vw] md:my-[2vw] mx-[6vw] md:mx-[21.875vw] flex flex-col gap-[4vw] md:gap-[2vw] justify-center items-center w-auto dark:text-white ">
                <h3 className="text-h5TextPhone md:text-h3Text font-bold ">Frequently Asked Questions</h3>
                <div>
                    <div className="w-full md:w-[56.25vw]">
                    {data.map((item,i)=>(
                        <div key={i} className='item shadow-[0px_.25vw_2vw_rgba(0,_0,_0,_0.1)] md:shadow-[0px_.125vw_.5vw_rgba(0,_0,_0,_0.1)] dark:shadow-[0px_.25vw_2vw_rgba(255,_255,_255,_0.1)] md:dark:shadow-[0px_.125vw_.5vw_rgba(255,_255,_255,_0.1)] rounded-[5vw] md:rounded-[1.25vw] mb-[4vw] md:mb-[1vw] px-[5vw] md:px-[1.25vw] py-[4vw] md:py-[1vw] w-full'>
                                <div className='title' onClick={()=>toggle(i)} >
                                    <h2 className="font-semibold text-smallTextPhone md:text-regularText ">{item.question}</h2>
                                    <Image width={40} height={40}  className={`transition-all duration-300 w-[4.75vw] md:w-[2.375vw] h-auto ${selected==i ?"rotate-0":"rotate-180"}`}  alt="arrow"
                                       src={theme=='dark'?selected==i?"/assets/Images/Icons/darkMinusIcon.svg":"/assets/Images/Icons/darkPlusIcon.svg":selected==i?"/assets/Images/Icons/minusIcon.svg":"/assets/Images/Icons/plusIcon.svg"}/>
                                </div> 
                                <div className={selected==i ?"content show ":" content "}>
                                <div className='flex flex-row'>
                                <pre className='flex flex-row w-full md:w-[40.625vw] font-extralight  text-smallTextPhone md:text-smallText font-poppins '>{item.answer}</pre>
                                </div>
                            </div>

                        </div>
                        ))}
                    </div>
                </div>
            </div>
            )}

export default FAQSection;