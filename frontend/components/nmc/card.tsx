import Image from "next/image"
import { nmcCard } from "@/lib/nmc-country-data"

export default function card(cardDetail:nmcCard){
    
    return (
        <article className="flex flex-col items-center gap-[1vw] w-[clamp(280px,21.875vvw,300px)] bg-white  rounded-[12px] md:rounded-[1.5vw] overflow-hidden shadow-none hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
            <div className="relative">
                <Image height={300} width={300} alt="card" className="w-[clamp(280px,21.875vvw,300px)] md:w-full h-auto object-cover" src={cardDetail.src} />
                <div className="absolute top-[1vw] left-[1vw] rounded-[30px] bg-linenChosen px-[0.5vw] py-[6px] flex items-center gap-[0.5vw] ">
                    <Image height={30} width={30} alt="flag" className="size-4 object-cover border border-black rounded-full" src={cardDetail.flgSrc} />
                    <p className="text-tinyTextPhone md:text-tinyText font-semibold font-poppins leading-[100%] text-[#1F1B18]">
                        {cardDetail.countryName}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-[0.5vw] px-[3vw] h-full md:px-[1.5vw] pb-[1.5vw] rounded-b-[1.5vw] w-full">
                <p className="font-semibold font-poppins text-h6TextPhone md:text-h6Text">{cardDetail.countryName}</p>
                <ul className="flex flex-col gap-[0.5vw]">
                    {cardDetail.description.map((point, index) => (
                        <li key={index} className="text-regularTextPhone  md:text-regularText  font-poppins leading-[150%] text-[#1F1B18]">
                           <span className="text-[#A14000] font-semibold">0{index + 1}.</span> {point}
                        </li>
                    ))}
                </ul>

                <button className="flex gap-[8px] mt-auto hover:bg-[#ffe2cd] transition-all duration-300 ease-in-out rounded-[8px] w-full justify-center items-center py-[12px] bg-linenChosen font-bold text-regularTextPhone md:text-regularText">
                    <p>View Gazette PDF</p>
                    <svg className=" size-[12px] md:size-[1vw]" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16667 10.5C0.845833 10.5 0.571181 10.3858 0.342708 10.1573C0.114236 9.92882 0 9.65417 0 9.33333V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H5.25V1.16667H1.16667V1.16667V1.16667V9.33333V9.33333V9.33333H9.33333V9.33333V9.33333V5.25H10.5V9.33333C10.5 9.65417 10.3858 9.92882 10.1573 10.1573C9.92882 10.3858 9.65417 10.5 9.33333 10.5H1.16667V10.5M3.90833 7.40833L3.09167 6.59167L8.51667 1.16667H6.41667V0H10.5V4.08333H9.33333V1.98333L3.90833 7.40833V7.40833" fill="#1F1B18"/>
                    </svg>

                </button>
            </div>
        </article>
    )
}