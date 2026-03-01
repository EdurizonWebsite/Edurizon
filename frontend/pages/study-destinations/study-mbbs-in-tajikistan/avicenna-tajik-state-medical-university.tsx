import React from 'react'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const academicCalenderData = {
    id: "tajikistan",
    section2: "",
    content: {
        title: "Academic Calendar",
        subTitle: "Important dates for MBBS admission at ATSMU, Tajikistan",
        data: [["Events", "Dates"],
        ["Intake", "September 2025"],
        ["Deadline", "31st August 2025"]],
    }
}

const eligibilityData = {
    id: "tajikistan",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in ATSMU, Tajikistan for Indian students",
        data: [["Criteria", "Details"],
        ["Age", "Minimum 17 years as of 31st December 2025"],
        ["Academic Qualification", ["Class 12 with PCB", "Minimum 50% in PCB (40% for SC/ST/OBC)"]],
        ["NEET Qualification", ["Qualified NEET UG (valid for 3 years)"]],
        ["Language", "No specific language requirements as medium of instruction is English"]],
    }
}

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tuition Fees",
        label: "$4800/year",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "NMC, WHO, FAIMER, WFME, ECFMG",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "City & Country",
        label: "Dushanbe, Tajikistan",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "Course Duration",
        label: "5+1 Years",
    },
];

const AvicennaTajikStateMedicalUniversity = () => {
    
    return (
        <>
            <Head>
                <title>Avicenna Tajik State Medical University in Tajikistan | Edurizon
</title>
                <meta name="keyword" content="mbbs in tajikistan, mbbs in tajikistan for indian students, best medical colleges in tajikistan, mbbs in tajikistan fee structure, mbbs cost in tajikistan, op medical colleges in tajikistan, Tajik National University, Avicenna Tajik State Medical University, Mbbs in tajikistan best medical college, Avicenna Tajik State Medical University fees." />
                <meta name="description" content="Edurizon offers full admission guidance for Avicenna Tajik State Medical University in Tajikistan with low and transparent MBBS fees.
" />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in Tajikistan" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Avicenna Tajik State Medical University | MBBS Fees & Admission" />
                <meta property="og:description" content="Study MBBS at Avicenna Tajik State Medical University, one of the best medical colleges in Tajikistan. Affordable fee structure for Indian students." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="Avicenna Tajik State Medical University | MBBS Fees & Admission" />
                <meta name="twitter:description" content="Study MBBS at Avicenna Tajik State Medical University, one of the best medical colleges in Tajikistan. Affordable fee structure for Indian students." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Tajikistan" />
                <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-tajikistan/avicenna-tajik-state-medical-university"/>
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-tajikistan/avicenna-tajik-state-medical-university" hrefLang="en-in"/>

                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9JDZZKPGL8"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-9JDZZKPGL8');
                        `,
                    }}
                />
            </Head>
            <div>
            <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-tajikistan/ATSMU.png"} alt='ATSMU Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Avicenna Tajik State Medical University</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw] md:gap-[.75vw] items-center justify-center">
                            {services.map((item, index) => (
                                <div key={index} className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
                                    rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] 
                                    md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black">
                                    <Image src={item.icon}
                                        alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative overflow-hidden shrink-0" />
                                    <p className="text-tinyTextPhone md:text-tinyText text-center leading-[150%]"> {item.text} <br /><span className="font-semibold"> {item.label}</span></p>
                                </div>
                            ))}
                        </div>
                        <CallingBox/>
                    </div>
                </div>
            </div>

            {/* About Tajikistan */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Avicenna Tajik State Medical University (ATSMU)</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Established in the year 1939, Avicenna Tajik State Medical University (ATSMU) is one of Central Asia's most respected and oldest medical institutions.</li>
                    <li>ATSMU is located in Dushanbe city, which is the capital city of Tajikistan.</li>
                    <li>ATSMU is globally recognized for its commitment to quality medical education, hands-on clinical training, and a strong community of international students — especially from India, Nepal, Bangladesh, and African nations.</li>
                    <li>Named after the world-famous physician and philosopher Avicenna (Ibn Sina), ATSMU is a center of excellence for aspiring doctors looking to pursue MBBS abroad at an affordable cost with global recognition.</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Tajikistan – A Rising Hub for Medical Education</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tajikistan is a beautiful, landlocked country in Central Asia, bordered by China, Afghanistan, Uzbekistan, and Kyrgyzstan. It is known for its natural landscapes, friendly people, and safe environment — making it an emerging destination for international education.</li>
                    <li>Capital: Dushanbe</li>
                    <li>Official Language: Tajik (MBBS taught in English for foreign students)</li>
                    <li>Currency: Tajikistani Somoni (TJS)</li>
                    <li>Climate: Moderate — warm summers, cold winters</li>
                    <li>With strong diplomatic relations with India, Tajikistan offers a welcoming atmosphere for Indian students. The country's low cost of living, cultural familiarity, and stable government make it a safe and affordable place to pursue a medical degree.</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Dushanbe – The Heart of Tajikistan</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Dushanbe, the capital and largest city of Tajikistan, is a modern and student-friendly city.</li>
                    <li>Dushanbe is a clean, green, and well-planned urban center with excellent infrastructure and international connectivity.</li>
                    <li>Safe, walkable, and peaceful for international students</li>
                    <li>Indian restaurants, grocery stores, and hostels available</li>
                    <li>Multicultural and vibrant city life with libraries, parks, malls, and sports facilities</li>
                    <li>Affordable lifestyle — ideal for Indian students and families</li>
                    <li>ATSMU is centrally located in Dushanbe, offering easy access to hospitals, markets, embassies, and transportation hubs.</li>
                </ul>
            </section>

            {/* Why Choose Section */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] text-black mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Study MBBS at ATSMU?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
                            <li><strong>Globally Recognized University:</strong> Approved by the National Medical Commission (NMC), India. Listed in WHO, FAIMER, ECFMG, WFME, and the World Directory of Medical Schools. Degree is valid in India, USA, UK, Canada & Europe.</li>
                            <li><strong>Affordable Medical Education:</strong> No donation or capitation fees. Annual tuition fees from ₹2.5 Lakhs. Budget-friendly accommodation and living expenses.</li>
                            <li><strong>English-Medium MBBS:</strong> 100% English-taught program for all 6 years. No IELTS/TOEFL required. International-standard curriculum with NMC/FMGE/NExT alignment.</li>
                            <li><strong>Top-Quality Clinical Training:</strong> Practical hospital exposure from early years. Modern labs, simulation centers, and university hospitals. Internship options in Tajikistan or home country.</li>
                            <li><strong>Supportive Indian Student Community:</strong> 1,500+ Indian students already enrolled. Indian mess (veg/non-veg), cultural events, and festivals. Separate hostels for boys and girls with CCTV & wardens.</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="tajikistan"/>
            </div>

            {/* At a glance Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">ATSMU at a glance</h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2">
                    <li className='font-bold'>o College name</li>
                    <li>Avicenna Tajik State Medical University (ATSMU)</li>
                    <li className='font-bold'>o Recognition</li>
                    <li>NMC, WHO, FAIMER, WFME, ECFMG</li>
                    <li className='font-bold'>o Medium of instruction</li>
                    <li>English</li>
                    <li className='font-bold'>o Course duration</li>
                    <li>5 years + 1 year internship</li>
                    <li className='font-bold'>o Tuition Fees</li>
                    <li>$4800/year</li>
                    <li className='font-bold'>o NEET</li>
                    <li>Mandatory</li>
                    <li className='font-bold'>o Intake</li>
                    <li>September 2025</li>
                    <li className='font-bold'>o Location</li>
                    <li>Dushanbe, Tajikistan</li>
                    <li className='font-bold'>o Website</li>
                    <li><a href="https://tajmedun.tj" target="_blank" rel="noopener noreferrer">https://tajmedun.tj</a></li>
                </ul>
            </section>

            {/* MBBS Program Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">ATSMU is highly popular among Indian students due to following main reasons:</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Limited seats thereby offered quality education</li>
                    <li>Affordable & reasonable fees & other expenses</li>
                    <li>Best practical exposure</li>
                    <li>Provide real cadaver from the very first year</li>
                    <li>Indian Food</li>
                    <li>Indian author books</li>
                    <li>Strict vigilance and 24x7 monitoring</li>
                    <li>Safe & secure place to study</li>
                    <li>English is the medium of instruction which breaks the barriers of communication for international students including Indian students.</li>
                    <li>No Licencing exam</li>
                    <li>Direct admission</li>
                    <li>NEET/FMGE coaching from 1st year</li>
                    <li>Travel time from India - 03 hours.</li>
                    <li>Direct Flight from Delhi to Dushanbe.</li>
                    <li>Indian teacher and Indian syllabus</li>
                    <li>Weather - Same like India.</li>
                    <li>Currency - Somoni</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS Curriculum Highlights</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Structured for Indian NMC & NEXT standards</li>
                    <li>Core subjects include: Anatomy, Physiology, Pathology, Surgery, Medicine, Pediatrics, OBGYN, Microbiology, etc.</li>
                    <li>Regular assessments, skill labs, and hospital-based learning</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Documents Required</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Valid Passport</li>
                    <li>10th & 12th Mark Sheets</li>
                    <li>NEET Scorecard</li>
                    <li>Passport-size Photos</li>
                </ul>
            </section>

            {/* Tables outside sections */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* Contact Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Plan Your Future with Edurizon – India's Trusted Abroad MBBS Consultant</h3>
                <p className="text-smallTextPhone text-left md:text-regularText font-semibold mt-[1vw]">Edurizon Pvt. Ltd.<br/>
                111,113,115, 1st Floor, Best Arcade, Beside Canara Bank, Near K.M. Chowk, Sector 7 Extension, Pocket 6, Sector 12 Dwarka, New Delhi – 110075<br/>
                +91-9540994829<br/>
                www.edurizon.com<br/>
                info@edurizon.com</p>
                <p className="text-smallTextPhone text-left md:text-regularText mt-[2vw]"><strong>Take the Leap – Become a Global Doctor with ATSMU</strong><br/>Choosing Avicenna Tajik State Medical University is more than a smart academic decision — it's an investment in a globally respected career. Get the right education, practical training, and international exposure without the burden of huge fees.<br/><br/><strong>Seats are filling fast for September 2025! Contact us today for spot admission.</strong></p>
            </section>
            </div>
        </>
    )
}

export default AvicennaTajikStateMedicalUniversity 