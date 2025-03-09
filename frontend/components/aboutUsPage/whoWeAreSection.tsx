const WhoWeAreSection = () => {
    return(
        <div className="font-helvetica text-black dark:text-white md:max-w-[1200px] md:w-[75vw] mx-[6vw] md:mx-auto my-[10vw] md:my-0 md:mt-[8vw]">
            <h3 className="text-h3TextPhone md:text-h3Text font-bold leading-[120%] mb-[6.75vw] md:mb-[1.75vw] text-center md:text-left">Who We Are</h3>
            <p className="text-smallTextPhone md:text-regularText leading-[150%] font-poppins text-justify ">Edurizon is a pioneer in overseas education consultancy, specializing in a wide range of programs, including MBBS in Russia, Georgia, Kazakhstan, Uzbekistan, and other top destinations. Whether you aspire to study MBBS, Engineering, MBA, or postgraduate courses, we provide personalized guidance to help you achieve your goals.
            </p>
            <br/>
            <div className="hidden md:block">
            <h6 className="text-h5Text font-bold">Our Expertise Extends To</h6>
            <ul className="font-poppins text-regularText leading-[150%] list-inside pl-[.5vw]">
                <li className="list-disc text-justify ">NEET counseling for maximizing government seats in NEET and optimizing total seats in NEET allocations.</li>
                <li className="list-disc text-justify ">Facilitating admissions to MCI-approved colleges such as Tbilisi State Medical University, Kazan Federal University, and Smolensk State Medical University.</li>
                <li className="list-disc text-justify ">Ensuring compliance with NMC guidelines and preparation for critical exams like the FMGE exam and MCI screening test.</li>
                <li className="list-disc text-justify ">With transparency at our core, we simplify the admission process for top universities while providing end-to-end support.</li>

                
            </ul>
            </div>
        </div>
    )
}

export default WhoWeAreSection;