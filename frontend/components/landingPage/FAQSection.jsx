import React,{useState} from "react"
import Image from "next/image"
import plusIcon from '../../public/assets/Images/Icons/plusIcon.svg'
import minusIcon from '../../public/assets/Images/Icons/minusIcon.svg'



const FAQSection = () => {
    const [selected,setSelected]=useState(null)
    const toggle=(i)=>{
        if (selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return (<div className="my-[8vw] mx-[21.875vw] flex flex-col gap-[5.25vw] justify-center items-center w-auto dark:text-white ">
                <h3 className="text-h3Text font-bold ">Frequently Asked Questions</h3>
                <div>
                    <div className="w-[56.25vw]">
                    {data.map((item,i)=>(
                        <div key={i} className='item shadow-[0px_.125vw_.5vw_rgba(0,_0,_0,_0.1)] dark:shadow-[0px_.125vw_.5vw_rgba(255,_255,_255,_0.1)] rounded-[1.25vw] mb-[1vw] px-[1.25vw] py-[1vw] w-full'>
                                <div className='title' onClick={()=>toggle(i)} >
                                    <h2 className="font-semibold text-regularText font-poppins">{item.question}</h2>
                                    <img className={`transition-all duration-300 ${selected==i ?"rotate-0":"rotate-180"}`}  alt="arrow" style={{ width:"2.375vw", height:"2.375vw" }}  src={selected==i?"/assets/Images/Icons/minusIcon.svg":"/assets/Images/Icons/plusIcon.svg"}/>
                                </div> 
                                <div className={selected==i ?"content show ":" content "}>
                                <div className='flex flex-row'>
                                <div className='flex flex-row w-[40.625vw]  font-light text-regularText font-poppins'>{item.answer}</div>
                                </div>
                            </div>

                        </div>
                        ))}
                    </div>
                </div>
            </div>
            )}

export default FAQSection;


const data=[{question:'How do I start the admission process?',
    answer:'Book a free consultation, and our experts will guide you step by step.'},
    {question:'Do you offer visa assistance?',
    answer:'Yes! We help with visa documentation, mock interviews, and submission.'},
    {question:'Which countries do you assist students in applying to?',
    answer:'We help students apply to top universities in the USA, UK, Canada, Australia, Europe, and other leading study destinations.'},
    {question:'Can I apply if I have a low GPA?',
    answer:'Yes! Our experts can help you find universities that accept students with lower GPAs and guide you on how to strengthen your application.'},
    {question:'What are the requirements for studying abroad?',
    answer:'Requirements vary by country and university, but generally include academic transcripts, language proficiency scores (IELTS, TOEFL, etc.), SOPs, LORs, and financial proof.'},
    {question:'Do you provide assistance for education loans and financial aid?',
        answer:'Absolutely! We help students explore scholarships, grants, and loan options to finance their education.'}
    ]