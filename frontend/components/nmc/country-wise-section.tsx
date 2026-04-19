import { nmcCards } from "@/lib/nmc-country-data"
import card from "./card"
import { useRef, useState } from "react"
import ContactUnlockModal from "@/components/pdf/ContactUnlockModal"

export default function CountryWiseSection(){
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState<string>("")
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)
    const hideSuccessPopupTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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
                        <div
                            key={index}
                            className="flex shrink-0 snap-start"
                            role="button"
                            tabIndex={0}
                            onClick={() => {
                                setSelectedCountry(cardDetail.countryName)
                                setIsFormOpen(true)
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
                                    setSelectedCountry(cardDetail.countryName)
                                    setIsFormOpen(true)
                                }
                            }}
                        >
                            {card(cardDetail)}
                        </div>
                    ))}
            </div>

            {isFormOpen && (
                <ContactUnlockModal
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    title="Contact us"
                    subtitle="Submit your details and our team will reach out."
                    submitLabel="Submit"
                    interestedCountry={selectedCountry}
                    remark="Lead from NMC Page"
                    extraFields={[
                        {
                            name: "interestedCountry",
                            label: "Interested country",
                            required: true,
                            readOnly: true,
                            value: selectedCountry,
                        },
                    ]}
                    onSuccess={() => {
                        setShowSuccessPopup(true)
                        if (hideSuccessPopupTimeoutRef.current) {
                            clearTimeout(hideSuccessPopupTimeoutRef.current)
                        }
                        hideSuccessPopupTimeoutRef.current = setTimeout(() => setShowSuccessPopup(false), 2600)
                    }}
                />
            )}

            {showSuccessPopup && (
                <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4 transition-opacity duration-200">
                    <div className="relative w-full max-w-md rounded-2xl bg-white/95 backdrop-blur border border-primary-fixed shadow-2xl p-6 text-center animate-[popupIn_180ms_ease-out]">
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={() => {
                                if (hideSuccessPopupTimeoutRef.current) {
                                    clearTimeout(hideSuccessPopupTimeoutRef.current)
                                }
                                setShowSuccessPopup(false)
                            }}
                            className="absolute right-3 top-3 px-3 py-2 rounded-lg hover:bg-black/5 text-on-surface"
                        >
                            ✕
                        </button>
                        <div className="font-bold text-regularTextPhone md:text-regularText text-on-surface">
                            Our team will contact you soon
                        </div>
                        <div className="mt-2 text-tinyTextPhone md:text-tinyText text-on-surface-variant">
                            Thanks for submitting your details.
                        </div>
                    </div>
                    <style jsx global>{`
                      @keyframes popupIn {
                        from {
                          opacity: 0;
                          transform: translateY(8px) scale(0.98);
                        }
                        to {
                          opacity: 1;
                          transform: translateY(0) scale(1);
                        }
                      }
                    `}</style>
                </div>
            )}
        </section>
    )
}