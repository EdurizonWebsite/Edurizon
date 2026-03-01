import React from 'react'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const academicCalenderData = {
    id: "nepal",
    section2: "",
    content: {
        title: "Academic Calendar",
        subTitle: "Important dates for MBBS admission at New Vision University",
        data: [["Events", "Dates"],
        ["Admission process", "Starts in May"],
        ["Last date of application", "July/August"],
        ["Commencement of MBBS course", "September/October"]],
    }
}

const eligibilityData = {
    id: "nepal",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in NVU for Indian students",
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
        label: "7000 USD/Year",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "WHO, NMC, WFME",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "City & Country",
        label: "Tbilisi, Georgia",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "Hospital Beds",
        label: "425",
    },
];

const NewVisionUniversity = () => {
    return (
        <>
            <Head>
                <title>New Vision University Georgia, MBBS Fees | Edurizon
</title>
                <meta name="keyword" content="tbilisi state medical university, tbilisi state medical university georgia, tbilisi medical university, tbilisi state medical university mbbs fees, georgian national university seu, georgian national university, georgian national university seu fee structure, east european university georgia, european university georgia, east european university tbilisi georgia, new vision university georgia, new vision university tbilisi, georgia new vision university, bau international university, bau international university batumi, bau international university batumi fees, Batumi Shota Rustaveli State University, Batumi Shota Rustaveli State Georgia, georgian american university, university of georgia, georgia institute of technology, mbb in georgia, mbbs in georgia for indian students, mbb in georgia fees, top medical universities in georgia." />
                <meta name="description" content="Study MBBS at New Vision University, Georgia with globally recognized education, English-medium courses & affordable MBBS fees.
" />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in Georgia" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="New Vision University Georgia | MBBS in Tbilisi with Affordable Fees" />
                <meta property="og:description" content="Study MBBS at New Vision University, Tbilisi. Affordable fee structure, English-medium programs, and global recognition for medical graduates." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="New Vision University Georgia | MBBS in Tbilisi with Affordable Fees" />
                <meta name="twitter:description" content="Study MBBS at New Vision University, Tbilisi. Affordable fee structure, English-medium programs, and global recognition for medical graduates." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Georgia" />
                <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/new-vision-university"/>
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/new-vision-university" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-georgia/NVU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>New Vision University</h2>
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

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Tbilisi City</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tbilisi City is the Mega City which is Georgia's most pleasant city.</li>
                    <li>Tbilisi is the capital and the largest city of Georgia.</li>
                    <li>A well-known urbanized mega city.</li>
                    <li>Tbilisi is the first destination of tourists & students to visit.</li>
                    <li>Tbilisi city with a panoramic view that melt hearts with its urbanized streets, modern Infrastructure, leafy squares, clean lakes, and green valleys.</li>
                    <li>According to Ministry of Education & Science, almost all of foreign students' study in Georgia, 95% in Tbilisi, 2.2% in Kutaisi and 1.8% in Batumi respectively.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About New Vision University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>New Vision University Georgia was founded in 2013, and situated in Tbilisi, Georgia.</li>
                    <li>New Vision University is a non-profitable educational institution for MBBS in Georgia.</li>
                    <li>Professors of this university know about the innovation of international medicine.</li>
                    <li>Georgia is an emerging educational destination for students across the world.</li>
                    <li>The universities in Georgia offer quality education with practical training at an affordable fee structure.</li>
                </ul>
            </section>

            {/* Why Choose Section */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose New Vision University?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
                            <li>Internationally ranked university with modern infrastructure and facilities</li>
                            <li>Own campus hospital in Georgia and UK with 350 multispeciality beds and 75 ICU beds</li>
                            <li>Advanced cancer centre with 4-5 orthopedic surgeries performed daily</li>
                            <li>Part-time work opportunities for students in campus hospital (250-300 USD monthly)</li>
                            <li>25% scholarship for students scoring 80% in two consecutive semesters</li>
                            <li>WHO, ECFMG, WFME, and NMC recognized degree</li>
                            <li>Global job opportunities and career prospects</li>
                            <li>Modern facilities including smart classrooms and advanced labs</li>
                            <li>24-hour library access</li>
                            <li>Experienced faculty and supportive staff</li>
                            <li>Ragging-free campus environment</li>
                            <li>Focus on both practical and theoretical knowledge</li>
                            <li>Indian food available on campus</li>
                            <li>UK hospital internship opportunity with PLAB1 & PLAB2</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="nepal2"/>
            </div>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[1vw]   md:text-h3Text text-center">Image Gallery</h3>

              <div className='relative md:flex gap-[4vw] md:gap-[1vw] justify-center'>
                <Image src={"/assets/Images/mbbs-in-georgia/nvu1.jpg"} className='w-full md:w-[30vw] h-auto' width={1080} height={1080} alt='isbu1'/>
                <Image src={"/assets/Images/mbbs-in-georgia/nvu2.jpg"} className='w-full md:w-[30vw] h-auto' width={1080} height={1080} alt='isbu1'/>
              </div>
            </section>

            {/* At a glance Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">New Vision University at a glance</h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2">
                    <li className='font-bold'>o College name</li>
                    <li>New Vision University</li>
                    <li className='font-bold'>o Year of establishment</li>
                    <li>2013</li>
                    <li className='font-bold'>o Recognition</li>
                    <li>WHO, ECFMG, WFME, NMC</li>
                    <li className='font-bold'>o Medium of instruction</li>
                    <li>English</li>
                    <li className='font-bold'>o Course duration</li>
                    <li>5 years</li>
                    <li className='font-bold'>o Internship duration</li>
                    <li>1 year</li>
                    <li className='font-bold'>o Hospital beds</li>
                    <li>425</li>
                    <li className='font-bold'>o NEET</li>
                    <li>Mandatory</li>
                    <li className='font-bold'>o Intake</li>
                    <li>September/October</li>
                    <li className='font-bold'>o Location</li>
                    <li>Tbilisi, Georgia</li>
                    <li className='font-bold'>o Official Website</li>
                    <li><a href="https://nvu.edu.ge" target='_blank' rel='noreferrer'>https://nvu.edu.ge</a></li>
                </ul>
            </section>

          

            {/* Safety & security */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
            <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Career Prospects in NVU</h3>
                <p className="text-smallTextPhone  text-left md:text-regularText">Graduates of NVU are eligible to appear for global licensing exams like :-</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>USMLE (USA)</li>
                    <li>PLAB (UK)</li>
                    <li>Next (India)</li>
                    <li>AMC (Australia)</li>
                </ul>
            <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">NVU Fees for Indian students</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tuition fee: 7000 USD (YEARLY)</li>
                    
                    <li>Hostel & Mess charges: 3000 USD (YEARLY)</li>
                </ul>


            <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Ultra-modern hostel & Indian food</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Fully equipped and well-furnished ultra-modern air-conditioned hostels.</li>
                    <li>Indian Cooks are in the Hostels to prepare delicious Indian food.</li>
                    <li>Edurizon try to serve the best food for our students.</li>
                    <li>We make sure students are always satisfied with food.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Safety & security</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Proper CCTV have been placed at all appropriate locations.</li>
                    <li>Separate hostels for Boys and Girls.</li>
                    <li>Relaxing and peaceful stay that is conducive to learning is assured.</li>
                    <li>Numerous Indian restaurants are there in the market where students can enjoy Indian food.</li>
                    <li>Students are very well taken-care of during their entire stay in NVU.</li>
                    <li>24/7 basis security cover.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Climate of Georgia/Tbilisi</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The climate of Georgia is extremely diverse, considering the nation's small size.</li>
                    <li>An average temperature</li>
                    <li>Summer - from 32 °C to 35 °C</li>
                    <li>Winter – from 1.5 °C to 3 °C.</li>
                </ul>
            </section>

         

            {/* Tables outside sections */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* NVU complete admission Process */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
            <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">NVU initial admission Process</h3>
                <p className="text-smallTextPhone mb-[1vw] text-left md:text-regularText">Documents required:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Copy of 10/12 Marksheet</li>
                    <li>Adhaar card copy</li>
                    <li>Passport</li>
                    <li>Neet score card</li>
                    <li>Passport-sized photos</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">NVU complete admission Process</h3>
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
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How to reach NVU</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Direct flight from New Delhi to Tbilisi, Georgia</li>
                    <li>Maximum 5 hours air journey</li>
                    <li>Low and affordable air fare</li>
                    <li>Maximum 30 Minutes journey to NVU after reaching Tbilisi airport.</li>
                </ul>
            </section>

            </div>
        </>
    )
}

export default NewVisionUniversity 