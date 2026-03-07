import React from 'react'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const academicCalenderData = {
    id: "kyrgyzstan",
    section2: "",
    content: {
        title: "Academic Calendar",
        subTitle: "Important dates for MBBS admission at Osh International State Medical University",
        data: [
            ["Events", "Dates"],
            ["Admission process", "Starts in May"],
            ["Last date of application", "July/August"],
            ["Commencement of MBBS course", "September/October"]
        ],
    }
}

const courseStructureData = {
    id: "kyrgyzstan",
    section2: "",
    content: {
        title: "MBBS in OISMU – Course Structure",
        subTitle: "Students also undergo clinical rotations at well-equipped hospitals in Osh and neighboring cities.",
        data: [
            ["Year", "Subjects Covered"], 
            ["1st Year", "Anatomy, Physiology, Biochemistry"],
            ["2nd Year", "Histology, Pathology, Microbiology, Pharmacology"],
            ["3rd Year", "General Medicine, Pathophysiology, Hygiene"],
            ["4th–6th Year", "Internal Medicine, Surgery, Pediatrics, Gynecology, Emergency Medicine, Clinical Training"]
        ],
    }
}

const eligibilityData = {
    id: "kyrgyzstan",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in Osh International State Medical University for Indian students",
        data: [
            ["Criteria", "Details"],
            ["Academic Qualification", ["Minimum 50% marks in PCB (Physics, Chemistry, Biology) in Class 12 (for General category)", "40% marks for SC/ST/OBC students"]],
            ["NEET Qualification", ["Qualified in NEET-UG exam"]],
            ["Age", "Must be at least 17 years old by 31st December of the admission year"],
        ],
    }
}

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tuition Fees",
        label: "$3,500/Year",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "NMC, WHO, FAIMER, ECFMG",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "City & Country",
        label: "Osh, Kyrgyzstan",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "Course Duration",
        label: "6 years (5+1)"
    },
];

const universityAtGlance = [
    { label: 'University Name', value: 'Osh International Medical University (OIMU)' },
    { label: 'Established', value: '2019' },
    { label: 'Location', value: 'Osh City, Kyrgyzstan' },
    { label: 'Recognition', value: 'NMC, WHO, FAIMER, ECFMG' },
    { label: 'Language of Instruction', value: 'English' },
    { label: 'MBBS Duration', value: '6 Years (including internship)' },
    { label: 'Hostel & Food', value: 'Indian mess & separate hostel for boys and girls' },
    { label: 'Annual Tuition Fee', value: 'Budget-friendly and transparent' },
    { label: 'Student Population', value: 'Over 3,000+ students including 1,000+ Indians' },
];

const OshInternationalStateMedicalUniversity = () => {
    return (
        <>
        <Head>
        <title>Osh International State Medical University Kyrgyzstan | MBBS</title>
<meta name="keyword" content="mbbs in kyrgyzstan, central asian international medical university, central asian international medical university mbbs fees, caimu kyrgyzstan, jasu kyrgyzstan, Jalal-Abad State University, Kyrgyzstan, Jalal-Abad State University fees, mbbs in kyrgyzstan, best medical colleges in kyrgyzstan, kyrgyzstan mbbs fees, mbbs in kyrgyzstan fees, Mbbs in kyrgyzstan for indian students, Jalal -Abad international University, Jalal -Abad international University fees." />
<meta name="description" content="Study MBBS at Osh International State Medical University. Affordable fee structure, English-medium programs, and global recognition for Indian students." />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
<meta name="DC.title" content="MBBS in Kyrgyzstan" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Dwarka" />
<meta name="geo.position" content="22.351115;78.667743" />
<meta name="ICBM" content="22.351115, 78.667743" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="Osh International State Medical University Kyrgyzstan | MBBS"/>
<meta property="og:description" content="Study MBBS at Osh International State Medical University   . Affordable fee structure, English-medium programs, and global recognition for Indian students."/>
<meta property="og:url" content="https://www.edurizon.in/"/>
<meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:card" content="summary"/>   
<meta name="twitter:site" content="@edurizon"/>
<meta name="twitter:title" content="Osh International State Medical University Kyrgyzstan | MBBS"/>
<meta name="twitter:description" content="Study MBBS at Osh International State Medical University. Affordable fee structure, English-medium programs, and global recognition for Indian students."/>
<meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:image:alt" content="MBBS in Kyrgyzstan"/>
<link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-kyrgyzstan/osh-international-state-medical-university" hrefLang="en-in"/>



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
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full '>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-kyrgyzstan/Osh-intenational-state-medical-university.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h1 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw] dark:text-black'>Osh International State Medical University</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw] md:gap-[.75vw] items-center justify-center">
                            {services.map((item, index) => (
                                <div key={index} className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black">
                                    <Image src={item.icon} alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative overflow-hidden shrink-0" />
                                    <p className="text-tinyTextPhone md:text-tinyText text-center leading-[150%]"> {item.text} <br /><span className="font-semibold"> {item.label}</span></p>
                                </div>
                            ))}
                        </div>
                        <CallingBox/>
                    </div>
                </div>
            </div>

            {/* University at a Glance */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left mb-2">Osh International State Medical University at a Glance</h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2">
                    {universityAtGlance.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <li className='font-bold'>o {item.label}</li>
                            <li>{item.value}</li>
                        </React.Fragment>
                    ))}
                </ul>
            </section>

            {/* About the University */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About the University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Osh International State Medical University (OISMU), located in the vibrant city of Osh, Kyrgyzstan, is a renowned institution offering high-quality medical education.</li>
                    <li>Founded with the mission to promote global standards in healthcare education, OISMU has become a preferred destination for MBBS aspirants, especially from India and other South Asian countries</li>
                    <li>The university is recognized by international bodies such as WHO (World Health Organization) and NMC (National Medical Commission – India), enabling graduates to practice medicine globally after passing the relevant licensing exams.</li>
                    <li>Osh International Medical University (OIMU) is a premier medical institution located in Osh, the educational and cultural hub of Kyrgyzstan. Established to provide modern, affordable, and globally recognized medical education, OIMU has rapidly emerged as a preferred choice for Indian students aspiring to study MBBS abroad.</li>
                </ul>
            </section>

            {/* About Osh – The Student City */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Osh – The Student City</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Osh is the second-largest city of Kyrgyzstan, also known as the "southern capital" of the country. It is a multicultural, peaceful, and student-friendly city. With a blend of history, culture, and modernity, Osh offers a safe and welcoming environment for international students.</li>
                    <li>Affordable cost of living</li>
                    <li>Indian grocery shops and restaurants</li>
                    <li>Direct flights from India via Bishkek</li>
                    <li>Peaceful and secure surroundings</li>
                </ul>
            </section>

            {/* Why Kyrgyzstan for MBBS? */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Why Kyrgyzstan for MBBS?</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>English-taught curriculum recognized globally</li>
                    <li>Affordable living and education</li>
                    <li>No language barrier or entrance test</li>
                    <li>Direct admission without donation</li>
                    <li>Indian Embassy support and large Indian student community</li>
                </ul>
            </section>

            {/* Why Choose OISMU */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw]  md:gap-[2vw] mb-[6vw] md:mb-[3vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] dark:text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose Osh International State Medical University?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
                            <li><strong>Globally Recognized Degree:-</strong> OISMU's MBBS degree is recognized worldwide. Indian students can appear for NEXT/NEET PG, USMLE, PLAB, and other licensing exams.</li>
                            <li><strong>English-Medium MBBS Program:-</strong> All medical programs are taught entirely in English, ensuring ease of understanding for Indian and international students.</li>
                            <li><strong>Experienced Faculty:-</strong> The university has highly qualified professors, many of whom hold Ph.D. degrees and are trained in international medical institutions.</li>
                            <li><strong>Affordable Fee Structure:-</strong> OISMU offers one of the most economical MBBS programs in the world. No donation or capitation fees are charged.</li>
                            <li><strong>Modern Infrastructure:-</strong> Equipped with smart classrooms, digital libraries, high-tech laboratories, and advanced medical simulation centers.</li>
                            <li><strong>Indian Food & Culture Support :-</strong> Indian mess facilities are available along with cultural festivals and events that make Indian students feel at home.</li>
                            <li><strong>Indian-Friendly Environment:-</strong> From Indian faculty to Indian food in the hostel mess, OIMU is highly supportive of Indian students and their needs.</li>
                            <li><strong>Safe and Peaceful Campus:-</strong> Osh is a safe city with a student-friendly environment, making it ideal for international education.</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="osh-international"/>
            </div>

            {/* MBBS in OISMU – Course Structure */}
            <ListedTable id={ courseStructureData.id} section2={courseStructureData.section2} content={courseStructureData.content} />

            {/* MBBS Program in OISMU */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS Program in Osh International State Medical University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Total 6 years duration of MBBS in OISMU</li>
                    <li>5 years of academics</li>
                    <li>1-year internship</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Tuition fees in OISMU:</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tuition fees: $3,500 yearly</li>
                    <li>Hostel: $600 yearly</li>
                    <li>Mess: $1,200 yearly</li>
                </ul>
            </section>

            {/* Eligibility Table */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* OISMU initial admission Process */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">OISMU initial admission Process</h3>
                <p className="text-smallTextPhone mb-[1vw] text-left md:text-regularText">Documents required:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>10/12 Marksheet</li>
                    <li>Adhaar card copy</li>
                    <li>Passport</li>
                    <li>Neet score card</li>
                    <li>Passport-sized photos</li>
                </ul>
            </section>

            {/* Student Support Services */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Support Services</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Pre-departure guidance</li>
                    <li>Visa and documentation assistance</li>
                    <li>Travel arrangements</li>
                    <li>On-arrival reception in Kyrgyzstan</li>
                    <li>Hostel accommodation</li>
                    <li>Academic support and regular parent updates</li>
                </ul>
            </section>

            {/* OISMU complete admission Process */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">OISMU complete admission Process</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Step 1:</strong> Application form to be filled meticulously.</li>
                    <li><strong>Step 2:</strong> Students must submit their educational certificates and other supporting documents</li>
                    <li><strong>Step 3:</strong> On apply to the University, student will get an admission letter from the University</li>
                    <li><strong>Step 4:</strong> Invitation to be applied</li>
                    <li><strong>Step 5:</strong> On receipt of invitation, visa shall be applied</li>
                    <li><strong>Step 6 :</strong> On receipt of visa, departure schedule of all students shall be prepared and  flight tickets shall be booked</li>
                </ul>
            </section>

            {/* How to reach Osh, Kyrgyzstan */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How to reach Osh, Kyrgyzstan</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Well-connected by road and public transport.</li>
                    <li>Direct flight from India to Osh</li>
                    <li>Major international airport: Osh International Airport.</li>
                    <li>Students often fly directly to Bishkek or Osh.</li>
                </ul>
            </section>

            {/* Contact Us for Free Counseling */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Contact Us for Free Counseling</h3>
                <p className="text-smallTextPhone mb-[1vw] text-left md:text-regularText">Want to know more or start your admission process?</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Edurizon Pvt. Ltd.</li>
                    <li>111,113,115, 1st Floor, Best Arcade, Market,</li>
                    <li>Near Canara Bank, Sector 12 Dwarka, New Delhi – 110075</li>
                    <li>+91 9540994829</li>
                    <li>info@edurizon.com</li>
                </ul>
            </section>

            {/* Final Call to Action */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Begin Your Medical Journey with Osh International State Medical University – Trusted by Thousands of Indian Students Every Year!</h3>
            </section>
        </div>
        </>
    )
}

export default OshInternationalStateMedicalUniversity
