import React from 'react'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const eligibilityData = {
    id: "kyrgyzstan",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in Royal Metropolitan University for Indian students",
        data: [
            ["Criteria", "Details"],
            ["Age", "Must be 17 years old by 31st December of the admission year"],
            ["Academic Qualification", ["Minimum 50% marks in Physics, Chemistry, Biology in 12th standard (40% for SC/ST/OBC)"]],
            ["NEET Qualification", ["Qualified NEET exam (as per latest NMC guidelines)"]],
            ["Documents", ["Valid passport and academic certificates"]],
        ],
    }
}

const universityAtGlance = [
    { label: 'University Name', value: 'Royal Metropolitan University (RMU)' },
    { label: 'Established', value: '2022 (approx.)' },
    { label: 'Location', value: 'Kyrgyzstan' },
    { label: 'Recognition', value: 'NMC (India), WHO, ECFMG, FAIMER' },
    { label: 'Language of Instruction', value: 'English' },
    { label: 'MBBS Duration', value: '6 Years (including internship)' },
    { label: 'Hostel & Food', value: 'Indian mess & separate hostel for boys and girls' },
    { label: 'Annual Tuition Fee', value: 'Affordable, no donation/capitation' },
    { label: 'Student Population', value: 'International students from India, Bangladesh, Nepal, Africa, etc.' },
];

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tuition Fees",
        label: "Affordable, no donation/capitation",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "NMC, WHO, ECFMG, FAIMER",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "Country",
        label: "Kyrgyzstan",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "Course Duration",
        label: "6 years (5+1)"
    },
];

const RoyalMetropolitanUniversity = () => {
    return (
        <>
        <Head>
        <title>Royal Metropolitan University Kyrgyzstan | MBBS for Indian Students</title>
<meta name="keyword" content="mbbs in kyrgyzstan, central asian international medical university, central asian international medical university mbbs fees, caimu kyrgyzstan, jasu kyrgyzstan, Jalal-Abad State University, Kyrgyzstan, Jalal-Abad State University fees, mbbs in kyrgyzstan, best medical colleges in kyrgyzstan, kyrgyzstan mbbs fees, mbbs in kyrgyzstan fees, Mbbs in kyrgyzstan for indian students, Jalal -Abad international University, Jalal -Abad international University fees." />
<meta name="description" content="Study MBBS at Royal Metropolitan University Kyrgyzstan. Affordable fee structure, globally recognized degree, and English-medium programs." />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
<meta name="DC.title" content="MBBS in Kyrgyzstan" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Dwarka" />
<meta name="geo.position" content="22.351115;78.667743" />
<meta name="ICBM" content="22.351115, 78.667743" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="Royal Metropolitan University Kyrgyzstan | MBBS for Indian Students"/>
<meta property="og:description" content="Study MBBS at Royal Metropolitan University Kyrgyzstan. Affordable fee structure, globally recognized degree, and English-medium programs."/>
<meta property="og:url" content="https://www.edurizon.in/"/>
<meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:site" content="@edurizon"/>
<meta name="twitter:title" content="Royal Metropolitan University Kyrgyzstan | MBBS for Indian Students"/>
<meta name="twitter:description" content="Study MBBS at Royal Metropolitan University Kyrgyzstan. Affordable fee structure, globally recognized degree, and English-medium programs."/>
<meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:image:alt" content="MBBS in Kyrgyzstan"/>
<link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-kyrgyzstan/royal-metropolitan-university" hrefLang="en-in"/>


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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-kyrgyzstan/RMU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h1 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw] text-black'>Royal Metropolitan University, Kyrgyzstan</h1>
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
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left mb-2">Royal Metropolitan University at a Glance</h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2">
                    {universityAtGlance.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <li className='font-bold'>o {item.label}</li>
                            <li>{item.value}</li>
                        </React.Fragment>
                    ))}
                </ul>
            </section>

            {/* Overview */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Overview</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Royal Metropolitan University (RMU), Kyrgyzstan is a relatively new and emerging medical university, established around 2022. While the exact founding year may vary depending on official announcements and recognitions, RMU was launched to cater specifically to international students, especially from India, Bangladesh, Nepal and African nations.</li>
                    <li>Royal Metropolitan University (RMU), situated in the vibrant and welcoming country of Kyrgyzstan, is an emerging name in international medical education.</li>
                    <li>With a firm commitment to academic excellence, practical medical training, and global standards of education, RMU has quickly established itself as a preferred destination for MBBS aspirants from India and other parts of Asia, Africa, and the Middle East.</li>
                    <li>Recognized by international medical councils and backed by a modern curriculum, RMU offers students not just a degree, but a solid foundation for a successful global medical career. The university stands out with its English-medium MBBS program, affordable fee structure, multicultural environment, and modern teaching methodologies.</li>
                    <li>Royal Metropolitan University, Kyrgyzstan, offers everything an aspiring medical student could wish for — world-class education, low fees, practical training, English-medium classes, and a safe, welcoming environment.</li>
                    <li>With an ever-growing reputation and student-friendly policies, RMU is truly an excellent launchpad for your dream medical career. Whether you aim to return to India, settle abroad, or pursue further studies, RMU gives you the skills, knowledge, and confidence to achieve your goals.</li>
                </ul>
            </section>

            {/* Why Choose Royal Metropolitan University? */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[6vw] md:mb-[3vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose Royal Metropolitan University?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
                            <li><strong>Globally Recognized Degree:</strong> The MBBS degree from RMU is recognized by major international bodies such as NMC (India), WHO, ECFMG (USA), and FAIMER.</li>
                            <li><strong>NMC-Approved Syllabus:</strong> RMU follows the syllabus guidelines prescribed by NMC, which ensures that Indian students are well-prepared for the FMGE/NExT examinations and other global licensing exams like USMLE, PLAB, and AMC.</li>
                            <li><strong>English-Medium Instruction:</strong> The MBBS course is conducted entirely in English, eliminating the language barrier for international students.</li>
                            <li><strong>Experienced Faculty:</strong> RMU has a team of highly qualified and internationally experienced professors, doctors, and researchers. Their focus on both theoretical and practical training helps students gain real-time clinical knowledge.</li>
                            <li><strong>Modern Infrastructure:</strong> Smart classrooms, simulation labs, a fully equipped library, anatomy museums, advanced laboratories, and digital learning platforms make RMU a modern-day center of excellence.</li>
                            <li><strong>Affordable Tuition Fees:</strong> The overall cost of studying MBBS at RMU is significantly lower than private medical colleges in India. Plus, the low cost of living in Kyrgyzstan makes it highly economical for Indian students.</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="royal-metropolitan-university"/>
            </div>

            {/* Life at RMU: Facilities & Student Life */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Life at RMU: Facilities & Student Life</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Hostel Facilities:</strong> RMU offers separate hostel facilities for boys and girls with 24x7 security, furnished rooms, heating systems, Wi-Fi, and Indian food availability.</li>
                    <li><strong>Canteen & Mess:</strong> Indian mess facilities serve both vegetarian and non-vegetarian meals. Hygiene and nutrition are given top priority.</li>
                    <li><strong>Cultural Diversity:</strong> RMU has a diverse student base from India, Nepal, Bangladesh, Egypt, Nigeria, and other countries, fostering a multicultural environment where students learn beyond the classroom.</li>
                    <li><strong>Sports & Recreation:</strong> The campus has sports facilities for football, basketball, cricket, gymnasiums, and other indoor games to keep students physically and mentally active.</li>
                </ul>
            </section>

            {/* Why Kyrgyzstan is Ideal for MBBS Abroad */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Why Kyrgyzstan is Ideal for MBBS Abroad</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Globally Recognized Medical Universities:</strong> Most medical universities are recognized by WHO, NMC, and other global agencies.</li>
                    <li><strong>Affordable Living:</strong> The cost of living is low, and students can live comfortably with a monthly budget of $100–$150.</li>
                    <li><strong>Safe & Student-Friendly:</strong> Kyrgyzstan is one of the safest countries in the region with a peaceful environment for students.</li>
                    <li><strong>Climatic Similarities:</strong> The climate is comparable to parts of North India, making it comfortable for Indian students to adjust.</li>
                    <li><strong>Proximity to India:</strong> Kyrgyzstan is just 3.5–4.5 hours away by direct flight from major Indian cities like Delhi and Mumbai.</li>
                </ul>
            </section>

            {/* Why Indian Students Prefer RMU, Kyrgyzstan */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Why Indian Students Prefer RMU, Kyrgyzstan</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>No Donation / Capitation Fee:</strong> Admissions are merit-based, and students do not have to pay any hidden or donation charges.</li>
                    <li><strong>NEET-Based Admission:</strong> Indian students are eligible for direct admission with a valid NEET score, as per NMC norms.</li>
                    <li><strong>Indian Student Community:</strong> A strong Indian student presence ensures familiarity, peer support, and local communities for cultural comfort.</li>
                    <li><strong>MCI/NMC Coaching:</strong> RMU offers additional coaching and support for the FMGE/NExT exams during the course.</li>
                    <li><strong>Indian Food & Festivals:</strong> Indian mess and celebration of festivals like Diwali, Holi, and Independence Day make students feel at home.</li>
                </ul>
            </section>

            {/* Eligibility Table */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />

            {/* Documents Required for Admission */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Documents Required for Admission</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>10th and 12th mark sheets (original + copy)</li>
                    <li>NEET scorecard</li>
                    <li>Passport</li>
                    <li>Passport-sized photographs</li>
                    <li>Invitation letter from RMU (provided after application approval)</li>
                </ul>
            </section>

            {/* Career Opportunities After MBBS from RMU */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Career Opportunities After MBBS from RMU</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Appear for FMGE/NExT (India) and practice as a doctor after registration</li>
                    <li>Apply for USMLE (USA), PLAB (UK), AMC (Australia) for international practice</li>
                    <li>Pursue post-graduation (MD/MS) in countries like Germany, USA, UK, etc.</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Support Services</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Airport pickup and drop</li>
                    <li>On-ground Indian coordinators</li>
                    <li>Visa and documentation support</li>
                    <li>Local city tours and festival celebrations</li>
                </ul>
            </section>

            {/* Contact Us for Admission Guidance */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[3vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">For Admission Guidance, contact:</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Edurizon Pvt. Ltd.</li>
                    <li>111,113,115, 1st Floor, Best Arcade, Market, Sector 12,</li>
                    <li>Dwarka, New Delhi – 110075</li>
                    <li>+91 95409 94829</li>
                    <li>Your Trusted MBBS Abroad Consultant</li>
                </ul>
            </section>
        </div></>
    )
}

export default RoyalMetropolitanUniversity 