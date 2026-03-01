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
        subTitle: "Important dates for MBBS admission at Osh State University",
        data: [
            ["Events", "Dates"],
            ["Admission process", "Starts in May"],
            ["Last date of application", "July/August"],
            ["Commencement of MBBS course", "September/October"]
        ],
    }
}

const eligibilityData = {
    id: "kyrgyzstan",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in Osh State University for Indian students",
        data: [
            ["Criteria", "Details"],
            ["Age", "Must be 17 years of age as on December 31st of the admission year"],
            ["Academic Qualification", ["Class 12 with PCB", "Minimum 50% in PCB"]],
            ["NEET Qualification", ["NEET qualification is mandatory"]],
        ],
    }
}

const universityAtGlance = [
    { label: 'University Name', value: 'Osh State University (OSHSU)' },
    { label: 'Established', value: '1939' },
    { label: 'Location', value: 'Osh City, Kyrgyzstan' },
    { label: 'Recognition', value: 'WHO, NMC (India), FAIMER, ECFMG' },
    { label: 'Language of Instruction', value: 'English' },
    { label: 'MBBS Duration', value: '6 Years (including internship)' },
    { label: 'Hostel & Food', value: 'Indian mess & separate hostel for boys and girls' },
    { label: 'Annual Tuition Fee', value: '$4,000 yearly' },
    { label: 'Student Population', value: 'Thousands of students from India and Asia' },
];

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tuition Fees",
        label: "$4,000/Year",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "WHO, NMC, FAIMER, ECFMG",
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

const OshStateUniversity = () => {
    return (
        <>
        <Head>
        <title>MBBS at Osh State University Kyrgyzstan | Fees & Admission</title>
<meta name="keyword" content="mbbs in kyrgyzstan, central asian international medical university, central asian international medical university mbbs fees, caimu kyrgyzstan, jasu kyrgyzstan, Jalal-Abad State University, Kyrgyzstan, Jalal-Abad State University fees, mbbs in kyrgyzstan, best medical colleges in kyrgyzstan, kyrgyzstan mbbs fees, mbbs in kyrgyzstan fees, Mbbs in kyrgyzstan for indian students, Jalal -Abad international University, Jalal -Abad international University fees." />
<meta name="description" content="Enroll in MBBS at Osh State University, one of the best medical colleges in Kyrgyzstan. Low tuition, globally recognized, and ideal for Indian students." />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
<meta name="DC.title" content="MBBS in Kyrgyzstan" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Dwarka" />
<meta name="geo.position" content="22.351115;78.667743" />
<meta name="ICBM" content="22.351115, 78.667743" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="Jalal-Abad International University Kyrgyzstan | MBBS Fees 2025"/>
<meta property="og:description" content="Enroll in MBBS at Osh State University, one of the best medical colleges in Kyrgyzstan. Low tuition, globally recognized, and ideal for Indian students."/>
<meta property="og:url" content="https://www.edurizon.in/"/>
<meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:card" content="summary"/>    
<meta name="twitter:site" content="@edurizon"/>
<meta name="twitter:title" content="Jalal-Abad International University Kyrgyzstan | MBBS Fees 2025"/>
<meta name="twitter:description" content="Enroll in MBBS at Osh State University, one of the best medical colleges in Kyrgyzstan. Low tuition, globally recognized, and ideal for Indian students."/>
<meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:image:alt" content="MBBS in Kyrgyzstan"/>
<link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-kyrgyzstan/osh-state-university"/>
<link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-kyrgyzstan/osh-state-university" hrefLang="en-in"/>


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
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-kyrgyzstan/Osh-state-university.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw] text-black'>Osh State University</h2>
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
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left mb-2">Osh State University at a Glance</h3>
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
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Osh State University (OSHSU)</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Founded in 1939 and recognized by major global bodies like WHO, NMC (India), FAIMER, and ECFMG, Osh State University is one of Kyrgyzstan's premier government universities.</li>
                    <li>Known for its English-medium MBBS program, modern facilities, and highly qualified faculty, OSHSU attracts thousands of students from across Asia, especially from India, every year.</li>
                    <li>The university offers globally accepted degrees, modern clinical training, and affordable tuition—all while fostering a multicultural environment that supports international students.</li>
                </ul>
            </section>

            {/* Why Osh City is Ideal for Indian Students */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Why Osh City is Ideal for Indian Students</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Historic & Student-Friendly:</strong> Osh is over 3,000 years old and offers a rich blend of tradition, culture, and modern student life.</li>
                    <li><strong>Multi-Religious, Welcoming Community:</strong> A safe, open-minded city with deep respect for international cultures.</li>
                    <li><strong>Indian Food Easily Available:</strong> Indian mess facilities, restaurants, and grocery stores make students feel at home.</li>
                    <li><strong>Affordable Public Transport:</strong> Well-connected by buses, taxis, and easy access to international airports.</li>
                    <li><strong>Clinical Exposure:</strong> City hospitals and clinical departments are equipped for hands-on medical training.</li>
                </ul>
            </section>

            {/* Why Choose Kyrgyzstan for Higher Education? */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Why Choose Kyrgyzstan for Higher Education?</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Affordable Tuition & Living Costs:</strong> One of the most budget-friendly countries for quality medical education.</li>
                    <li><strong>NMC-Approved Medical Universities:</strong> Degrees from Kyrgyzstan are valid in India and globally.</li>
                    <li><strong>English-Medium Instruction:</strong> Entire MBBS course taught in English, specially designed for international students.</li>
                    <li><strong>Peaceful & Safe Environment:</strong> Low crime rate, friendly locals, and political stability.</li>
                    <li><strong>No Entrance Test Required:</strong> No IELTS/TOEFL or donation fees. NEET qualification is sufficient.</li>
                    <li><strong>International Exposure:</strong> Students from over 20+ countries study in Kyrgyzstan, enriching global understanding and collaboration.</li>
                </ul>
            </section>

            {/* Mission, Vision, Initiatives */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Osh State University - Mission & Vision</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Mission:</strong> Train specialists using modern educational methods and research to tackle global sustainable development challenges and succeed in the labor market</li>
                    <li><strong>Vision:</strong> Become a leading international university recognized across Asia, attracting students from India, Bangladesh, Uzbekistan, Nepal, Sri Lanka, and beyond</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Osh State University - Initiatives</h3>
                    <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">Various programmes are launched which aimed at supporting those in need and making a positive impact in healthcare.</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Health Camps:</strong> We organize health camps in underserved communities, providing medical check-ups and treatment services to those who need it most.</li>
                    <li><strong>Community Training:</strong> We conduct training workshops for local healthcare providers, improving medical knowledge and skills in the community.</li>
                    <li><strong>Clinical Training:</strong> Gain invaluable hands-on experience in our private hospital, ensuring practical learning complements your theoretical studies effectively.</li>
                    <li><strong>Cultural Activities:</strong> Participate in diverse cultural events and activities that foster community engagement and enrich your educational experience.</li>
                    <li><strong>Hostel Facilities:</strong> Enjoy comfortable and secure accommodation with access to essential amenities, creating a conducive environment for your studies.</li>
                </ul>
            </section>

            {/* MBBS Program in Osh State University */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS Program in Osh State University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Total 6 years duration of MBBS in Osh State University</li>
                    <li>5 years of academics</li>
                    <li>1-year internship</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Tuition fees in Osh State University:</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tuition fees: $4,000 yearly</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Ultra-modern hostel & Indian food</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Fully equipped and well-furnished ultra-modern hostels.</li>
                    <li>Indian Cooks are in the Hostels to prepare delicious Indian food.</li>
                    <li>Edurizon try to serve the best food for our students.</li>
                    <li>We make sure students are always satisfied with food.</li>
                    <li>Hostels provided with separate accommodations for boys and girls.</li>
                    <li>Costs of indian food is $1200 yearly</li>
                </ul>
            </section>

            {/* Facilities & Support */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Facilities & Support</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Clinical exposure through university-affiliated teaching hospitals</li>
                    <li>Modern infrastructure</li>
                    <li>digital classrooms, well equipped labs, simulation centers, library, and on campus hostel</li>
                    <li>Promotion of research and community outreach, exemplified by medical camps in local communities.</li>
                </ul>
            </section>

            {/* Student Life & Community */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Life & Community</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Diverse multinational student body, including a significant number of Indian students.</li>
                    <li>Campus life includes Indian food in mess, secure hostels, and a multicultural environment</li>
                </ul>
            </section>

            {/* Why Choose Osh State University for MBBS? */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[6vw] md:mb-[3vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose Osh State University for MBBS?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
                            <li>A leading and most demanded Medical University among indian students</li>
                            <li>High quality programs regulated and accredited by the Ministry of Education of Kyrgyzstan.</li>
                            <li>Modern Academic programs</li>
                            <li>Best Medical University</li>
                            <li>Experienced and highly qualified Academic staff</li>
                            <li>Student – oriented environment</li>
                            <li>Low fee structure and low cost of living.</li>
                            <li>Strong management having rich experience in the education industry.</li>
                            <li>Robust, research-based course and curriculum is followed to inculcate the Leaders for tomorrow</li>
                            <li>Focuses on holistic development of the student by providing Learning opportunities, Community Support, Safety, Social Life and Connection to Nature</li>
                            <li>Worldwide recognition</li>
                            <li><strong>    </strong>High-Quality Medical Education: WHO and NMC-recognized MBBS program in full English.</li>
                            <li>Global Career Opportunities: Graduates eligible for FMGE (India), USMLE (USA), PLAB (UK), etc.</li>
                            <li>Indian Faculty & Mentors: Dedicated academic and support staff from India for guidance.</li>
                            <li>Indian Food & Hostel Facilities: Separate hostels for boys/girls with Indian food options.</li>
                            <li>Strong Indian Alumni Network: Hundreds of successful Indian graduates working in India and abroad.</li>
                            <li>High FMGE Passing Rate: Practical training and structured curriculum help boost exam results in India.</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="osh-state-university"/>
            </div>

            {/* Eligibility Table */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* Osh State University initial admission Process */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Osh State University initial admission Process</h3>
                <p className="text-smallTextPhone mb-[1vw] text-left md:text-regularText">Documents required:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Copy of 10/12 Marksheet</li>
                    <li>Adhaar card copy</li>
                    <li>Passport</li>
                    <li>Neet score card</li>
                    <li>Passport-sized photos</li>
                </ul>
            </section>

            {/* Osh State University complete admission Process */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Osh State University complete admission Process</h3>
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
                    <li>Major international airport: Osh International Airport.</li>
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
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Begin Your Medical Journey with Osh State University – Trusted by Thousands of Indian Students Every Year!</h3>
            </section>
        </div></>
    )
}

export default OshStateUniversity
