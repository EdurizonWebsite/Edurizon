import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const eligibilityData = {
    id: "tajikistan",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in Khatlon State Medical University for Indian students",
        data: [["Criteria", "Details"],
        ["Age Requirement", "17 years of age as on 31st December in the admission year"],
        ["Academic Requirements", "Passed 12th standard with at least 50% in Physics, Chemistry and Biology"],
        ["NEET Requirements", "Must qualify NEET exam"]]
    }
}

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Total Fee | Hostel Fees",
        label: "$4000 | $500",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "WHO, NMC",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "Location",
        label: "Danghara, Tajikistan",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "Country Ranking",
        label: "8th",
    },
];

const KhatlonStateMedicalUniversity = () => {
    return (
        <>
            <Head>
                <title>Khatlon State Medical University in Tajikistan | Edurizon
</title>
                <meta name="keyword" content="mbbs in tajikistan, mbbs in tajikistan for indian students, best medical colleges in tajikistan, mbbs in tajikistan fee structure, mbbs cost in tajikistan, op medical colleges in tajikistan, Tajik National University, Avicenna Tajik State Medical University, Mbbs in tajikistan best medical college, Avicenna Tajik State Medical University fees." />
                <meta name="description" content="Edurizon offers admission support for Khatlon State Medical University in Tajikistan with quality MBBS education and affordable fees.
" />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in Tajikistan" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="MBBS in Tajikistan at Khatlon State Medical University | Fees & Admission" />
                <meta property="og:description" content="Study MBBS in Tajikistan at Khatlon State Medical University. Affordable fee structure, MCI-approved medical college for Indian students" />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="MBBS in Tajikistan at Khatlon State Medical University | Fees & Admission" />
                <meta name="twitter:description" content="Study MBBS in Tajikistan at Khatlon State Medical University. Affordable fee structure, MCI-approved medical college for Indian students" />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Tajikistan" />
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-tajikistan/khatlon-state-medical-university" hrefLang="en-in"/>

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
            <div className=''>
            <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs />
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-tajikistan/khatlon-state-medical-university.png"} alt='Khatlon State Medical University' width={650} height={550} />
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h1 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Khatlon State Medical University</h1>
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

            {/* About Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] ">
                <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text text-left mb-[4vw] md:mb-[1vw]">About Khatlon State Medical University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Tajikistan is a landlocked country in Central Asia. Landlocked nations are surrounded by land and do not have access to the open sea.</li>
                    <li>Established in the year 1967 at the Kulyab State Medical College with a class of just 30 students, the journey of KSMU started.</li>
                    <li>Later, in 1990 it was renamed into Khatlon state medical institute and granted the status of university.</li>
                    <li>KSMU has been accredited by association of medical schools in Europe since 2005.</li>
                    <li>It was later recognized by the medical council of India in 2018.</li>
                    <li>KSMU is one of the leading medical universities in Central Asia, renowned for its modern curriculum, experienced faculty, and state of the art facilities.</li>
                    <li>KSMU also has an 8th rank among universities in Tajikistan.</li>
                    <li>KSMU offers various popular courses in undergraduate, post graduate and doctorate programs.</li>
                    <li>Medical education at Khatlon state medical university in Tajikistan is becoming increasingly recognized for its comprehensive curriculum and innovative teaching approaches.</li>
                    <li>Aspiring medical students from India and other countries are now considering Khatlon state medical university as an excellent option, thanks to its affordable tuition fees and commitment to maintaining high educational standards.</li>
                </ul>
            </section>

            {/* Location Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
            <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Dushanbe City</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] mb-[4vw] md:mb-[1vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Dushanbe is the capital of Tajikistan which is situated on the Varzob River. Rudaki Park which is named after a classical poet is situated on the east bank of the river.</li>
                   
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Danghara City</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Danghara is a town in the Khatlon Region of Tajikistan.</li>
                    <li>It is the capital of Danghara District.</li>
                    <li>It is the hometown of Tajikistan's president, Emomali Rahmon as well as the country's first deputy prime minister, Asadullo Ghulomov, and several other senior government officials and members of parliament.</li>
                </ul>
            </section>

            {/* Faculty Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Khatlon State Medical University Faculty and Facilities</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>The faculty at Khatlon State Medical University consists of highly qualified professors & researchers, many of whom have earned their degrees from prestigious universities around the world.</li>
                    <li>The Khatlon State Medical University boasts state-of-the-art facilities, including modern laboratories, libraries, and computer centers.</li>
                    <li>KSMU also provides access to various online databases, ensuring that students have the resources they need for their studies and research.</li>
                    <li>Among the teaching staff there are some academicians, many professors, associate professors, senior lecturers.</li>
                    <li>During the period of studies, students study theoretical and special subjects. At the end of each year, students have practice in different laboratories, enterprises, companies, firms & Ministries.</li>
                    <li>Many students are members of scientific societies. Students carry out researches and make reports. The results of the work done by the students often find practical application.</li>
                    <li>Students take an active part in social life. There is a wide choice of amateur circles.</li>
                    <li>Students participate in festive concerts, singing, dancing and recite poems.</li>
                    <li>There are many sport clubs where students go for sports activities.</li>
                    <li>Indian professor is also available in KSMU to teach Indian students.</li>
                </ul>
            </section>

            {/* Why Choose Section */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] text-black items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
                    <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%]">Why Choose KSMU for Indian Students?</h3>
                    <div>
                    <p>The cost of studying MBBS in Khatlon State Medical University is affordable just like India.</p>
                    
                    <p>KSMU is highly popular among Indian students due to following main reasons: -</p>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                        <li>Affordable fees & other expenses</li>
                        <li>Quality education</li>
                        <li>Diverse Clinical exposure</li>
                        <li>Advanced medical facilities</li>
                        <li>Experienced faculty</li>
                        <li>Best practical exposure</li>
                        <li>Provided real cadaver from the very first year</li>
                        <li>Indian Food</li>
                        <li>Indian professor</li>
                        <li>Indian author books</li>
                        <li>Strict vigilance and 24x7 monitoring</li>
                        <li>Drinking & smoking is completely prohibited in the city</li>
                        <li>NExT coaching facility</li>
                        <li>Safe & secure place to study</li>
                        <li>Located nearby India</li>
                        <li>Similar weather like India</li>
                        <li>English is the medium of instruction which breaks the barriers of communication for international students including Indian students.</li>
                    </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="tajikistan"/>
            </div>

            {/* Recognition Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Khatlon State Medical University - Recognition</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Khatlon State Medical University is recognized by NMC, WHO etc.</li>
                    <li>This recognition is very crucial for Indian students who wish to pursue their medical education from KSMU and thereafter wish to practice medicine in India upon their return.</li>
                    <li>KSMU is recognized by several international educational bodies and organizations, ensuring that its degrees are acknowledged globally.</li>
                    <li>KSMU has established partnerships with numerous institutions worldwide, promoting academic exchange and research collaboration.</li>
                    <li>The medical faculty of KSMU is listed in the World Health Organization's (WHO) World Directory of Medical Schools.</li>
                    <li>Being in the WHO directory also signifies adherence to global standards in medical education.</li>
                </ul>
            </section>

            {/* Facilities Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Khatlon State Medial University - Library and Simulation Center</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>An electronic library with 150 sitting capacities</li>
                    <li>Collection of 33,269 books and 75,474 electronic educational materials</li>
                    <li>6 science laboratories with the latest testing equipment</li>
                    <li>Subjects include normal anatomy, normal and pathological physiology, pathological anatomy, histology and forensic medicine</li>
                    <li>Anatomical museum and laboratory for preparing</li>
                    <li>Wet anatomical preparations</li>
                </ul>
            </section>

            {/* Hostel Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Khatlon State Medical University – Hostel & Canteen</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Residence halls of Khatlon State Medical University are a set of modern campuses for students.</li>
                    <li>Each campus has comfortable rooms and necessary living facilities such as dining rooms, housekeeping complexes, recreation areas & sports grounds.</li>
                    <li>Separate girls' and boys' hostel</li>
                    <li>3 & 4 sharing hostels are available for all students with all basic amenities</li>
                    <li>Round the clock Indian wardens to take care of Indian students</li>
                    <li>Indian foods both veg & non-veg are also available for Indian students</li>
                    <li>CC TV cameras are available all around inside the hostels</li>
                    <li>Drinking and smoking is completely prohibited – smoke detectors are installed at all vital points</li>
                </ul>
            </section>

            {/* Curriculum Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Curriculum & Teaching Methods</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li> KSMU teaches its curriculum in English, making it an attractive option for international students. If students are looking for an Indian university situated abroad where you can grow academically and explore a diverse culture then KSMU should be an ideal choice for you.</li>
                    <li>Khatlon state medical university is dedicated to producing well-rounded healthcare professionals through a blend of traditional and innovative teaching methods. With a comprehensive curriculum and hands-on training, the university equips students to meet the evolving demands of the global medical field.</li>
                </ul>
                <h4 className="text-h6TextPhone leading-[120%] md:text-h6Text text-left mt-[1vw]">Pre-clinical phase</h4>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Basic sciences</li>
                    <li>Introduction of clinical skills</li>
                </ul>
                <h4 className="text-h6TextPhone leading-[120%] md:text-h6Text text-left mt-[1vw]">Clinical phase</h4>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Clinical rotations</li>
                    <li>Practical training</li>
                    <li>Research and electives</li>
                </ul>
                <h4 className="text-h6TextPhone leading-[120%] md:text-h6Text text-left mt-[1vw]">Innovative teaching methods</h4>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Problem based learning</li>
                    <li>Simulation based training</li>
                    <li>Interactive lectures and seminars</li>
                    <li>Clinical skills workshops</li>
                </ul>
                <h4 className="text-h6TextPhone leading-[120%] md:text-h6Text text-left mt-[1vw]">Integrating technology and E-learning</h4>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>E-learning platforms</li>
                    <li>Virtual Reality and Augmented realty</li>
                </ul>
            </section>

            {/* Research Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">KSMU – Research Opportunities</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>KSMU invariably emphasizes on research & innovation thereby encouraging students to engage in scientific research projects.</li>
                    <li>KSMU has numerous research centers and laboratories which are equipped with ultra-modern facilities.</li>
                    <li>Indian students could collaborate with faculty members on research projects, contributing to their academic & professional growth.</li>
                </ul>
            </section>

            {/* At a glance Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Khatlon State Medical University at a glance</h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2">
                    <li className='font-bold'>o College name</li>
                    <li>Khatlon State Medical University</li>
                    <li className='font-bold'>o Year of establishment</li>
                    <li>1967</li>
                    <li className='font-bold'>o Recognition</li>
                    <li>WHO, NMC</li>
                    <li className='font-bold'>o Medium of instruction</li>
                    <li>English</li>
                    <li className='font-bold'>o Country Ranking</li>
                    <li>8th in Tajikistan</li>
                    <li className='font-bold'>o Location</li>
                    <li>Danghara, Tajikistan</li>
                </ul>
            </section>

            {/* Eligibility Criteria */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />

            {/* Documents Required */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Documents Required for KSMU</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>10th & 12th Marksheets</li>
                    <li>Valid Indian passport</li>
                    <li>Passport size photos</li>
                    <li>NEET scorecard</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Admission Process</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Submission of documents:
                        <ul className="list-disc ml-[3vw]">
                            <li>10/12 marksheet</li>
                            <li>Valid passport/adhaar card</li>
                            <li>NEET score card</li>
                            <li>1 passport size photograph</li>
                        </ul>
                    </li>
                    <li>Within one week, University issues admission letter</li>
                    <li>Upon receipt of admission letter, student need to deposit $1000 (part of fees) to confirm their seat</li>
                    <li>Once $1000 is received, university issues invitation/telex in the name of students</li>
                    <li>E-visa to be applied</li>
                    <li>Remaining fees of 1st part to be paid</li>
                    <li>Air ticket to be booked</li>
                    <li>Departure to be planned</li>
                </ul>
            </section>
            </div>
        </>
    )
}

export default KhatlonStateMedicalUniversity 