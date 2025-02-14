import React,{useState} from "react"
import Image from "next/image"
import plusIcon from '../../public/assets/Images/Icons/plusIcon.svg'
import minusIcon from '../../public/assets/Images/Icons/minusIcon.svg'
import './faq.css'


const FAQSection = () => {
    const [selected,setSelected]=useState(null)
    const toggle=(i)=>{
        if (selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return (<div className="my-[8vw] mx-[21.875vw] flex flex-col gap-[5.25vw] justify-center items-center w-auto ">
                <h3 className="text-h3Text font-bold">Frequently Asked Questions</h3>
                <div>
                    <div className="w-[56.25vw]">
                    {data.map((item,i)=>(
                        <div key={i} className='item shadow-[0px_.125vw_.5vw_rgba(0,_0,_0,_0.1)] rounded-[1.25vw] mb-[1vw] px-[1.25vw] py-[1vw] w-full'>
                                <div className='title' onClick={()=>toggle(i)} >
                                    <h2 className="font-semibold text-regularText font-poppins">{item.question}</h2>
                                    <Image className={`transition-all duration-300 ${selected==i ?"rotate-0":"rotate-180"}`}  alt="arrow" style={{ width:"2.375vw", height:"2.375vw" }}  src={selected==i?minusIcon:plusIcon}/>
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


const data=[{question:'What is Infocube ?',
    answer:'Infocube is a platform designed to provide students a one stop solution to all their serach of information it is desgined to provide students a community of the similar minds that students need to grow in there careers'},
    {question:'How do I download and install Infocube ?',
    answer:'You can download and install Infocube from the website. Soon we will be available on google play store and app store.'},
    {question:'Will Infocube be available for both iOS and Android devies?',
    answer:'Yes, Infocube will be available for both iOS and Android Devies. You can download it from the web for iOS and Android.'},
    {question:'Do I need to create an account to use Infocube?',
    answer:'Yes, In order to access certain features and personalized content, you will need to create an account. It\'s quick and easy process, and your information will be kept secure.'},
    {question:'How do I reset my password if I forget it?',
    answer:'To reset your password, go to the login page and click on the "Forgot Password" or "Reset Password" link. Follow the instruction sent to your registered email to create a new passowrd.'},
    {question:'How can I contact customer support for assistance?',
    answer:'We are here to help with any questions or issues you may have.'}]