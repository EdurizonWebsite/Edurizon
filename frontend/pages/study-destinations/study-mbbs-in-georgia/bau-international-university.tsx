import React from 'react'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import UnlistedTableEqualWidth from '@/components/studyDestinationComponents/unListedTableEqualWidth'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const academicCalenderData = {
    id: "georgia",
    section2: "",
    content: {
        title: "Academic Calendar",
        subTitle: "Important dates for MBBS admission at BAU International University",
        data: [["Events", "Dates"],
        ["Admission process", "Starts in May"],
        ["Last date of application", "July/August"],
        ["Commencement of MBBS course", "September/October"]],
    }
}

const eligibilityData = {
    id: "georgia",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in BAU International University for Indian students",
        data: [["Criteria", "Details"],
        ["Age", "Must be 17 years of age as on December 31st of the admission year"],
        ["Academic Qualification", ["Class 12 with PCB", "Minimum 50% in PCB"]],
        ["NEET Qualification", ["NEET qualification is mandatory"]],
        ["Language", "No specific language requirements as medium of instruction is English"]],
    }
}

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tuition Fees",
        label: "6500 USD/Year",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "WHO, NMC, WFME",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "City & Country",
        label: "Batumi, Georgia",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "University Ranking",
        label: "33rd",
    },
];

const BauInternationalUniversity = () => {
    
    return (
        <>
            <Head>
                <title>Bau International University Batumi in Georgia, MBBS Fees | Edurizon
</title>
                <meta name="keyword" content="tbilisi state medical university, tbilisi state medical university georgia, tbilisi medical university, tbilisi state medical university mbbs fees, georgian national university seu, georgian national university, georgian national university seu fee structure, east european university georgia, european university georgia, east european university tbilisi georgia, new vision university georgia, new vision university tbilisi, georgia new vision university, bau international university, bau international university batumi, bau international university batumi fees, Batumi Shota Rustaveli State University, Batumi Shota Rustaveli State Georgia, georgian american university, university of georgia, georgia institute of technology, mbb in georgia, mbbs in georgia for indian students, mbb in georgia fees, top medical universities in georgia." />
                <meta name="description" content="Study MBBS at BAU International University Batumi, Georgia with globally recognized education and affordable MBBS fees.
" />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in Georgia" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="BAU International University Batumi Georgia | MBBS Fees & Admission" />
                <meta property="og:description" content="Explore MBBS at BAU International University Batumi, Georgia. NMC-approved, international exposure, and affordable fee structure for Indian students." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="BAU International University Batumi Georgia | MBBS Fees & Admission" />
                <meta name="twitter:description" content="Explore MBBS at BAU International University Batumi, Georgia. NMC-approved, international exposure, and affordable fee structure for Indian students." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Georgia" />
                <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/bau-international-university"/>
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/bau-international-university" hrefLang="en-in"/>

                {/* Google tag (gtag.js) */}
                
            </Head>
            <div>
            <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-georgia/bau-international-university.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>BAU International University</h2>
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

            {/* About Georgia */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Georgia</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Georgia is a country in the Caucasus region of Eurasia, located at the crossroads of Eastern Europe and Western Asia.</li>
                    <li>Tbilisi which is the largest city, is the capital of Georgia.</li>
                    <li>Georgia is a part of the Caucasus region, bounded to the west by the Black Sea, to the north and east by Russia, to the south by Turkey and Armenia, and to the southeast by Azerbaijan.</li>
                    <li>Georgia covers a territory of 69,700 square kilometers.</li>
                    <li>Georgia is a country with a rich culture, history and tourist attractions, including UNESCO Heritage Sites. There are numerous magnificent places to visit: mountains, seaside, caves and big cities.</li>
                    <li>Tbilisi has a population of approximately 1.5 million people.</li>
                    <li>Population in Georgia is almost 5 million.</li>
                    <li>The official language of Georgia is Georgian and the is "Sakartvelo".</li>
                    <li>Georgia is a country with a rich culture, history and tourist attractions, including UNESCO Heritage Sites. The first human civilization outside of Africa has been discovered in Georgia. The country is famous with delicious cuisine and Georgian hospitality. All this makes Georgia an extremely interesting destination for foreign students.</li>
                    <li>Country is unitary semi-presidential republic.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Batumi City</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Batumi is a coastal city on the Black Sea and Georgia's major port and tourist destination.</li>
                    <li>Batumi is known for its seaside promenades, modern architecture and vibrant cultural life.</li>
                    <li>Batumi is an attractive destination for students seeking a multicultural, seaside study environment.</li>
                    <li>According to Ministry of Education & Science, almost all foreign students study in Georgia, with a portion choosing Batumi for its coastal lifestyle and universities.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University - Mission</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The mission of BAU International University, Batumi, is to support and implement the values of the healthcare and medical education by promoting the highest scientific and ethical standards, initiate new learning methods, new instructional tools, and innovative management to continuously develop modern educational approaches in academia, in a strive improve the health of many peoples by training medical professionals.</li>
                    <li>BAU International University, Batumi, promotes a global vision by establishing multicultural teaching and research environment, based on the principles of excellence and continuous enhancement of the quality of teaching, research and clinical practice.</li>
                    <li>BAU International University acts as the active member of the global network, participating in global transfer of knowledge supporting implementation of joint educational programs and scientific, research projects, integration of faculty and students into the global educational and scientific arena and providing global career opportunities for graduates.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University - Vision</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>To become a leading university with strong international recognition, committed to excellence in education, research, and contributions to society.</li>
                    <li>To be an internationally recognized leading university focused on excellence in education, research, and contribution to society.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University - Values</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Embraces the innovative nature of science and invariably follows in its enlightened path moving forward</li>
                    <li>Advocates academic freedom as the universal and indispensable component of scientific endeavors</li>
                    <li>Upholds that the most important role of universities is to cultivate individuals who contribute to society and all of humanity</li>
                    <li>Supports gender equality in all aspects of life</li>
                    <li>Shows zero tolerance for religious, racial or ethnic discrimination and stands against marginalization of any kind.</li>
                    <li>Maintains that all young people from all over the world have the fundamental right to academic education of the highest standards</li>
                    <li>Adheres to an international outlook and as such does what is necessary to maintain close relationships with academic institutions in other countries</li>
                    <li>Acknowledges that education is not merely classroom teachings but also real-life experiences</li>
                    <li>Encourages innovation, new ideas and discoveries through the application of science; opposes dogmatic approaches and is open to change.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About BAU International University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>6-Year MBBS Program: BAU International University offers a comprehensive MBBS program divided into 12 semesters.</li>
                    <li>Internationally Recognized: The university is accredited by various global medical organizations, ensuring the quality of its programs.</li>
                    <li>Practical and Innovative Learning: The university emphasizes hands-on learning and clinical experience, integrating modern technology and innovative methodologies.</li>
                    <li>Global Perspective: BAU International University promotes a global perspective through international collaborations and partnerships.</li>
                    <li>Multicultural Environment: Batumi, the university's location, is a vibrant and diverse city that provides a multicultural learning environment for students.</li>
                    <li>Affordable Education: BAU International University Batumi is known for offering quality education at an affordable price.</li>
                </ul>
            </section>

            {/* Why Choose Section */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose BAU International University for MBBS?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText text-justify">
                            <li>Globally Recognized Degree and Curriculum: The university's MBBS program is designed to meet international standards, ensuring a degree that is recognized worldwide.</li>
                            <li>The curriculum is modern and focuses on practical skills, preparing students for the demands of the medical profession.</li>
                            <li>English-Medium Instruction and Affordable Fees: The entire MBBS program is taught in English, making it easier for international students to understand and learn.</li>
                            <li>The university offers competitive tuition fees with no hidden costs, making it a budget-friendly option compared to other medical schools in Western countries.</li>
                            <li>Modern Campus and Facilities: BAU Batumi has a modern campus equipped with advanced laboratories, simulation centers, and a library.</li>
                            <li>The university also has strong affiliations with various hospitals for clinical practice, providing students with valuable hands-on experience.</li>
                            <li>Student-Friendly Environment and Community: Batumi is a safe and student-friendly city with a vibrant and active student community.</li>
                            <li>The multicultural environment of the university allows students to interact with peers from various countries, enriching their learning experience.</li>
                            <li>Focus on Practical Skills and Research: The university emphasizes practical training and clinical experience, providing students with opportunities to develop their skills.</li>
                            <li>Research and innovation are also encouraged, fostering a learning environment that prepares students for future medical careers.</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="georgia2"/>
            </div>

            {/* At a glance Section */}
            <section className="">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left mx-[6vw] md:mx-[12.5vw] font-bold">BAU International University at a glance</h3>
                <UnlistedTableEqualWidth
                  id="bau-international-glance"
                  section2=""
                  content={{
                    title: "",
                    subTitle: "",
                    data: [
                      ["Details", "Information"],
                      ["College name", "BAU International University"],
                      ["Recognition", "WHO, NMC, WFME, FAIMER"],
                      ["Medium of instruction", "English"],
                      ["Course duration", "6 years"],
                      ["Internship duration", "1 year"],
                      ["University Ranking", "33rd"],
                      ["NEET", "Mandatory"],
                      ["Intake", "September/October"],
                      ["Location", "Batumi, Georgia"],
                    ]
                  }}
                />
            </section>

            {/* MBBS Program Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS Program in BAU International University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The duration of MBBS programme in BAU International University is for 6 years including 1 year internship.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS intake in BAU International University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Intake: September/October</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Career Prospects in BAU International University</h3>
                <p className="text-smallTextPhone text-left md:text-regularText">Graduates of BAU International University are eligible to appear for global licensing exams like :-</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>USMLE (USA)</li>
                    <li>PLAB (UK)</li>
                    <li>Next (India)</li>
                    <li>AMC (Australia)</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University – Recognition</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>BAU International University is recognized by the World Health Organization, National Medical Commission, India, FAIMER, WFME etc.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Medium of instruction in BAU International University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>BAU International University offers fully English taught programs in medicine.</li>
                    <li>BAU International University Programs are designed to give students modern, practical knowledge and critical thinking skills, to train competitive specialists with student-oriented teaching methods, that are prerequisites for a successful professional career.</li>
                    <li>BAU International University programs are developed in line with western standards, taking into consideration the experience of leading Georgian and Western universities as well as up-to-date market requirements.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University ranking</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>BAU International University ranking: 33rd</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University Fees for Indian students</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tuition fee: 6500 USD (YEARLY)</li>
                    <li>Hostel & Mess: 3000 USD (YEARLY)</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Ultra-modern hostel & Indian food</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Fully equipped and well-furnished ultra-modern air-conditioned hostels.</li>
                    <li>Indian Cooks are in the Hostels to prepare delicious Indian food.</li>
                    <li>Edurizon try to serve the best food for our students.</li>
                    <li>Edurizon ensures that students are always satisfied with food.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Safety & security</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>24/7 basis security cover.</li>
                    <li>Proper CCTV have been placed at all appropriate locations.</li>
                    <li>Separate hostels for Boys and Girls.</li>
                    <li>Relaxing and peaceful stay that is conducive to learning is assured.</li>
                    <li>Numerous Indian restaurants are there in the market where students can enjoy Indian food.</li>
                    <li>Students are very well taken-care of during their entire stay in BIU.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University – Library</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Physical Library: A physical library on campus with current publications and English-language textbooks.</li>
                    <li>Bahcesehir University's Barbaros Library: Access to a vast electronic library with medical textbooks, publications, and other resources from Bahcesehir University in Istanbul.</li>
                    <li>Remote Access: Students can access the electronic resources of Barbaros Library from home.</li>
                    <li>Variety of Resources: The electronic library includes access to numerous databases, journals, and e-books.</li>
                    <li>Support for Research: The library system supports students with research, providing access to relevant resources and workshops.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Climate of Georgia/Batumi</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The climate of Georgia is extremely diverse, considering the nation's small size.</li>
                    <li>An average temperature</li>
                    <li>Summer - from 32 °C to 35 °C</li>
                    <li>Winter – from 1.5 °C to 3 °C.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Georgia Currency</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Georgian currency is Georgian Lari (GEL)</li>
                </ul>
            </section>

            {/* Tables outside sections */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* BAU complete admission Process */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University initial admission Process</h3>
                <p className="text-smallTextPhone mb-[1vw] text-left md:text-regularText">Documents required:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Copy of 10/12 Marksheet</li>
                    <li>Adhaar card copy</li>
                    <li>Passport</li>
                    <li>Neet score card</li>
                    <li>Passport-sized photos</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">BAU International University complete admission Process</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Step 1:</strong> Application form to be filled meticulously.</li>
                    <li><strong>Step 2:</strong> Students must submit their educational certificates and other supporting documents</li>
                    <li><strong>Step 3:</strong> Students will be judged on the basis of merit and performance in interview</li>
                    <li><strong>Step 4:</strong> Students will get an admission letter from the University</li>
                    <li><strong>Step 5:</strong> Students need to pay tuition fee for one sem.</li>
                    <li><strong>Step 6:</strong> Invitation to be applied</li>
                    <li><strong>Step 7:</strong> On receipt of invitation, an appointment for visa in VFS shall be taken</li>
                    <li><strong>Step 8:</strong> On receipt of date of appointment, students need to appear in person in VFS for visa purpose.</li>
                    <li><strong>Step 9:</strong> On receipt of visa, students who have gone through above admission process should then get their passport and schedule their fly to Georgia accordingly.</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How to reach BAU International University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Direct flight from New Delhi to Batumi, Georgia</li>
                    <li>Maximum 5 hours air journey</li>
                    <li>Low and affordable air fare</li>
                    <li>Maximum 30 Minutes journey to BAU International University after reaching Batumi airport.</li>
                </ul>
            </section>

            </div>
        </>
    )
}

export default BauInternationalUniversity 