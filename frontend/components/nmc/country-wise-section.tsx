import { nmcCards } from "@/lib/nmc-country-data"
import card from "./card"
import { useRef } from "react"

export default function CountryWiseSection(){
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300
            const newScrollLeft = direction === 'left' 
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount
            
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            })
        }
    }
    
    return (
        <section className="flex flex-col gap-[20px] py-[7vw] px-[5vw] md:px-[7.5vw] bg-linenChosen w-full">
            <div className="flex justify-between">
                <div className="flex flex-col gap-[16px] ">
                    <div className="flex gap-2 items-center">
                        <div className="rounded-full size-[6px] bg-orangeChosen"></div>
                        <p className="text-tinyTextPhone font-medium leading-[100%] font-helvetica md:text-tinyText text-[#A14000]">
                            GEOGRAPHIC GUIDES
                        </p>
                    </div> 
                    <h2 className="text-h4TextPhone md:text-h4Text font-bold leading-[100%] font-helvetica text-[#1F1B18]">
                        Country Wise Eligibility
                    </h2>   
                    <p className="text-mediumTextPhone md:text-mediumText leading-[150%] font-helvetica text-[#584238]">
                        Specific gazette highlights for popular destinations.
                    </p>
                </div>
                <div className="flex mt-auto gap-[12px]">
                    <button onClick={() => scroll('left')} className="rounded-full p-[.75vw] border-2 hover:bg-paleOrangeChosen transition-all duration-300 ease-in-out border-paleOrangeChosen">
                       <svg className="size-3" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12V12" fill="#1F1B18"/>
                        </svg>

                    </button>
                    <button onClick={() => scroll('right')} className="rounded-full p-[.75vw] border-2 hover:bg-paleOrangeChosen transition-all duration-300 ease-in-out border-paleOrangeChosen">
                        <svg className="size-3" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6V6" fill="#1F1B18"/>
                        </svg>

                    </button>
                </div>
            </div>

            <div ref={scrollContainerRef} className="flex gap-[1.5vw] overflow-auto no-scrollbar py-[3vw] px-[2vw] snap-x snap-mandatory">
                {nmcCards.map((cardDetail,index)=>(
                        <div key={index} className="flex shrink-0 snap-start">
                            {card(cardDetail)}
                        </div>
                    ))}
            </div>

        </section>
    )
}