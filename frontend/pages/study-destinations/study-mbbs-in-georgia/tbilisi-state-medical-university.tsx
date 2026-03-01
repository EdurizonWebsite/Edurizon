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
        subTitle: "Important dates for MBBS admission at Tbilisi State Medical University",
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
        subTitle: "Eligibility Criteria for MBBS in TSMU for Indian students",
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
        label: "8000 USD/Year",
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
        text: "Country Rank",
        label: "8th",
    },
];

const TbilisiStateMedicalUniversity = () => {
    return (
        <>
            <Head>
                <title>Tbilisi State Medical University in Georgia, MBBS Fees | Edurizon
</title>
                <meta name="keyword" content="tbilisi state medical university, tbilisi state medical university georgia, tbilisi medical university, tbilisi state medical university mbbs fees, georgian national university seu, georgian national university, georgian national university seu fee structure, east european university georgia, european university georgia, east european university tbilisi georgia, new vision university georgia, new vision university tbilisi, georgia new vision university, bau international university, bau international university batumi, bau international university batumi fees, Batumi Shota Rustaveli State University, Batumi Shota Rustaveli State Georgia, georgian american university, university of georgia, georgia institute of technology, mbb in georgia, mbbs in georgia for indian students, mbb in georgia fees, top medical universities in georgia." />
                <meta name="description" content="Study MBBS at Tbilisi State Medical University in Georgia with globally recognized education and affordable MBBS fees.
" />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in Georgia" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tbilisi State Medical University Georgia | MBBS Fees & Ranking" />
                <meta property="og:description" content="Enroll in MBBS at Tbilisi State Medical University, Georgia's oldest medical university. Affordable fees and top-ranked for Indian students." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="Tbilisi State Medical University Georgia | MBBS Fees & Ranking" />
                <meta name="twitter:description" content="Enroll in MBBS at Tbilisi State Medical University, Georgia's oldest medical university. Affordable fees and top-ranked for Indian students." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Georgia" />
                <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/tbilisi-state-medical-university"/>
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/tbilisi-state-medical-university" hrefLang="en-in"/>

                {/* Google tag (gtag.js) */}
                
            </Head>
            <div>
            <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-georgia/TSMU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Tbilisi State Medical University</h2>
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

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Tbilisi State Medical University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>History:</strong> Established in 1918 as Tbilisi State University (TSU), it was later renamed to Tbilisi State Medical University after 85 years.</li>
                    <li><strong>Size and Scope:</strong> The largest medical university in Georgia and Eastern Europe, with over 40,000 graduates.</li>
                    <li><strong>Global Recognition:</strong> Approved by the World Health Organization, Medical Council of India, and other international organizations.</li>
                    <li><strong>Comprehensive Programs:</strong> Offers MBBS, postgraduate, and doctoral studies in various medical specializations.</li>
                    <li><strong>International Student Population:</strong> A significant portion of its student body is composed of international students, with nearly 2,500 students from 72 countries.</li>
                    <li><strong>Curriculum:</strong> Combines theoretical knowledge with practical training in modern lecture halls, research labs, and hospitals.</li>
                    <li><strong>Faculty:</strong> Composed of highly qualified medical professionals and researchers, many with international recognition.</li>
                    <li><strong>Facilities:</strong> Includes well-equipped libraries, scientific nursing labs, and a hospital with clinics and research facilities.</li>
                    <li><strong>Cost of Living:</strong> The cost of living in Tbilisi can range from $350 to $700 per month, including accommodation, food, transport, and utilities.</li>
                </ul>
            </section>

            {/* Why Choose Section */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose TSMU for MBBS?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
                            <li>Global Recognition: The MBBS degree from TSMU is recognized by the National Medical Commission (NMC), the World Health Organization (WHO), and other international organizations.</li>
                            <li>English Medium Instruction: The curriculum is taught entirely in English, which eliminates any language barriers for international students.</li>
                            <li>Strong Academic Reputation: TSMU is one of the oldest and most prestigious medical universities in Georgia, with a long history of producing qualified doctors.</li>
                            <li>Supportive Environment: The university provides a supportive environment with a low student-to-faculty ratio, ensuring individual attention and guidance.</li>
                            <li>Modern Infrastructure: TSMU boasts state-of-the-art facilities, including modern lecture halls, research labs, and hospitals.</li>
                            <li>Career Opportunities: TSMU graduates are well-equipped to enter the global healthcare system, with opportunities for internships and scholarships.</li>
                            <li>International Exposure: The university welcomes students from around the world, providing a diverse and multicultural environment.</li>
                            <li>Safety and Security: Tbilisi is a safe and secure city, providing a conducive environment for students to focus on their studies.</li>
                            <li>Well-structured Curriculum: TSMU offers a comprehensive and well-structured curriculum that prepares students for a wide range of medical specialties.</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="nepal2"/>
            </div>

            {/* At a glance Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Tbilisi State Medical University at a glance</h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2">
                    <li className='font-bold'>o College name</li>
                    <li>Tbilisi State Medical University</li>
                    <li className='font-bold'>o Year of establishment</li>
                    <li>1918</li>
                    <li className='font-bold'>o Recognition</li>
                    <li>WHO, ECFMG, WFME, NMC</li>
                    <li className='font-bold'>o Medium of instruction</li>
                    <li>English</li>
                    <li className='font-bold'>o Course duration</li>
                    <li>5 years</li>
                    <li className='font-bold'>o Internship duration</li>
                    <li>1 year</li>
                    <li className='font-bold'>o Country Rank</li>
                    <li>8th</li>
                    <li className='font-bold'>o NEET</li>
                    <li>Mandatory</li>
                    <li className='font-bold'>o Intake</li>
                    <li>September/October</li>
                    <li className='font-bold'>o Location</li>
                    <li>Tbilisi, Georgia</li>
                    <li className='font-bold'>o Official Website</li>
                    <li><a href="https://tsmu.edu.ge" target='_blank' rel='noreferrer'>https://tsmu.edu.ge</a></li>
                </ul>
            </section>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">TSMU - Mission</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Creation/development & dissemination of new knowledge based on high quality teaching, research & professional training at undergraduate & postgraduate levels of medical education.</li>
                    <li>Participation in the enhancement of population quality of life, improvement of Health Care System & its effectiveness.</li>
                    <li>Providing the graduates with knowledge & skills necessary for their harmonious integration in national & international professional communities.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">TSMU - Vision</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Teaching, research, medical & pharmaceutical activity are inseparable at Tbilisi State Medical University. This principle of continuum in medical education at TSMU is ensured with broad scale activity of undergraduate, postgraduate – residency & continuous professional development programs, also the programs of qualification improvement for medical & academic staff. The university provides the student oriented & lifelong learning opportunities.</li>
                    <li>Teaching of fundamental & clinical sciences as well as research at TSMU in Georgian, English, Russian medium academic undergraduate, Master degree, PhD & Postgraduate development, as well as with vocational educational programmes are conducted to the citizens of Georgia & for Citizens from up to 83 countries.</li>
                    <li>Tbilisi State Medical University is the leader in Georgia & will further continue to strengthen its leading position as an internationally recognized medical education & research hub in the country & the Caucasus region.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">TSMU - Values</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Academic freedom of teaching and research</li>
                    <li>Academic quality of learning, teaching and research</li>
                    <li>Professional development of academic staff and students</li>
                    <li>Autonomy</li>
                    <li>Democracy</li>
                    <li>Electiveness and transparency of governing bodies</li>
                    <li>Internationalization of academic, professional and research cooperation</li>
                    <li>Development of traditions of educational, research and professional performance</li>
                    <li>Protection of principles of professional ethics and responsibilities</li>
                    <li>Respect for human rights and freedoms</li>
                    <li>Protection of social responsibility principles</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Career Prospects in TSMU</h3>
                <p className="text-smallTextPhone text-left md:text-regularText">Graduates of TSMU are eligible to appear for global licensing exams like :-</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>USMLE (USA)</li>
                    <li>PLAB (UK)</li>
                    <li>Next (India)</li>
                    <li>AMC (Australia)</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">TSMU Fees for Indian students</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tuition fee: 8000 USD (YEARLY)</li>
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
                    <li>Students are very well taken-care of during their entire stay in TSMU.</li>
                    <li>24/7 basis security cover.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">TSMU - Library</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tbilisi State Medical University has a very huge library.</li>
                    <li>There are different departments at the library such as Bibliography department in the field of foreign literature, Processing-staffing department with bookcase, Service department, Department of Postgraduate Studies, and Electronic Resources Department.</li>
                    <li>At the library, there is free access to the reading rooms of the foreign literature sector, which makes it easier for the user to find the book he needs.</li>
                    <li>Students need to take a student ticket to access the Reading rooms. Students cannot issue books from reading halls to home.</li>
                    <li>The library has scientific journals, textbooks, magazines, etc.</li>
                    <li>There is a system of electronic registration at the library.</li>
                    <li>There is a main hall at the second floor of the library.</li>
                    <li>The main hall is designed for 180 jobs, where scientific periodicals, textbooks are located.</li>
                    <li>There is a separate computer room at the library.</li>
                    <li>There is 24×7 internet support at the library for personal laptops, various tablets and mobile phones.</li>
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
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                
            <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">TSMU initial admission Process</h3>
                <p className="text-smallTextPhone text-left md:text-regularText">Documents required:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Copy of 10/12 Marksheet</li>
                    <li>Adhaar card copy</li>
                    <li>Passport</li>
                    <li>Neet score card</li>
                    <li>Passport-sized photos</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">TSMU complete admission Process</h3>
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

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How to reach TSMU</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Direct flight from New Delhi to Tbilisi, Georgia</li>
                    <li>Maximum 5 hours air journey</li>
                    <li>Low and affordable air fare</li>
                    <li>Maximum 35 Minutes journey to TSMU after reaching Tbilisi airport.</li>
                </ul>
            </section>
            </div>
        </>
    )
}

export default TbilisiStateMedicalUniversity 