import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'
import CollegeOverviewTable from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeOverviewTable'
import { CollegeDataOverviewInterface } from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeDataOverviewInterface'

const academicCalenderData = {
    id: "nepal",
    section2: "",
    content: {
        title: "Academic Calendar",
        subTitle: "A glimpse of the important dates an aspirant must keep in mind to get admission in Nepalgunj Medical College in Nepal.",
        data: [["Events", "Dates"],
        ["Admission process", "Starts in the month of May"],
        ["Date of Registration", "July/August"],
        ["Commencement of MBBS course", "From December"]],
    }
}

const eligibilityData = {
    id: "nepal",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in Nepal for Indian students",
        data: [["Criteria", "Details"],
        ["Academic Qualification", ["Class 12 (equivalent) with Phy, Chem, Bio (PCB).", "General Category: Min 50% aggregate in PCB.", "SC/ST/OBC: Min 40% aggregate in PCB."]],
        ["NEET Qualification", ["NEET qualification is mandatory."]],
        ["Age Limit & Other information", ["Minimum 17 years as on the date of admission", "Only current academic year NEET is accepted.", "General category NEET score is considered for Indian student.",
            "Fees to be deposited directly in the account of Nepalgunj Medical College after getting admission letter.",
            "Students will also have to undergo a counselling/interview held by the MEC."
        ]]],
    }
}

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tuition Fees",
        label: "75,000 USD",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "WHO, NMC",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "Location",
        label: "Kohalpur, Nepal",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "Year of Establishment",
        label: "1997",
    },
];

const NepalgunjMedicalCollege = () => {
    const collegeDataOverview: {
        label: string;
        value: CollegeDataOverviewInterface[];
      } = {
        label: "Nepalgunj Medical College at a glance",
        value: [
          { label: "College name", value: "Nepalgunj Medical College" },
          { label: "University affiliation", value: "KU" },
          { label: "Year of Establishment", value: "1997" },
          { label: "Recognition", value: "WHO, NMC" },
          { label: "Medium of Instruction", value: "English" },
          { label: "Course Duration", value: "4.5 years" },
          { label: "Internship Duration", value: "1 year" },
          { label: "Hospital Bed Number", value: "1050" },
          { label: "NEET", value: "Mandatory" },
          { label: "Country Rank", value: "22" },
          { label: "Intake", value: "September" },
          { 
            label: "Bed Distribution", 
            value: "750 at Kohalpur, 250 at Nepalgunj" 
          },
          { 
            label: "Official Website", 
            value: "https://www.ngmc.edu.np" 
          }
        ]
      };    
    return (
        <>
            <Head>
                <title>Nepalgunj Medical College Nepal – MBBS Program, Fees & Hostel</title>
                <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
                <meta name="description" content="Nepalgunj Medical College Nepal. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepalgunj-medical-college." />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in Nepal" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Nepalgunj Medical College Nepal – MBBS Program, Fees & Hostel" />
                <meta property="og:description" content="Apply to Nepalgunj Medical College Nepal. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepalgunj-medical-college." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="Nepalgunj Medical College Nepal – MBBS Program, Fees & Hostel" />
                <meta name="twitter:description" content="Apply to Nepalgunj Medical College Nepal. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepalgunj-medical-college." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Nepal" />
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepalgunj-medical-college" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/nepalgunj-medical-college.png"} alt='Nepalgunj Medical College' width={650} height={550} />
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h1 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Nepalgunj Medical College</h1>
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
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text text-left mb-[4vw] md:mb-[1vw]">About Nepalgunj Medical College</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>In the year 1993, Government of Nepal decided to ensure that medical education and healthcare become accessible and affordable in rural and underdeveloped regions of the nation.</li>
                    <li>With this objective in mind, Nepalgunj Medical College (NGMC) was founded to help the government achieve its goal by providing quality health services and medical education in the western region, which have historically been lagging in terms of health services and education.</li>
                    <li>Lord Buddha Educational Academy Ltd (LBEA), Nepalgunj was permitted to start a Medical College in a rural set up near Nepalgunj, the biggest industrial city in the mid-western region of Nepal, only 6 kilometers north of the Indo-Nepal Border town Rupaidiha (Bahraich, U.P.)</li>
                    <li>Eventually, NGMC welcomed the first batch of students in December 1997.</li>
                    <li>Ever since then, the college has produced thousands of graduates who have made a great contribution to improving the health sector of Nepal, and abroad.</li>
                </ul>
            </section>

            {/* Vision and Mission Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College - Vision</h3>
                <p className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    To significantly contribute to the growth and progress of human resources and ultimately, national development by providing exceptional technical education that meets international standards, with a focus on medical and other fields, and striving towards becoming a renowned deemed university.
                </p>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College - Mission</h3>
                <p className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    To establish and develop premier medical, dental, nursing, and healthcare-related educational institutions in underdeveloped regions, improve access to quality healthcare and enhance the overall wellbeing of communities through state-of-the-art facilities, research, innovation and community outreach.
                </p>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College - Community Health Program</h3>
              
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>NGMC is committed to improving health and wellbeing of communities it serves.</li>
                    <li>To achieve this, it has implemented several community health programs, including community outreach programs, health camps.</li>
                    <li>These programs are designed to provide accessible and affordable healthcare services to marginalized communities, promote health awareness and education, and reduce health disparities.</li>
                    <li>NGMC's community health programs have produced a profound positive impact on countless lives.</li>
                    <li>By introducing hands-on training for our students as early as their first and second years, NGMC empower students to actively engage with communities.</li>
                    <li>NGMC health camps, comprehensive screening efforts, and specialized surgical health camps have provided free health assessments, consultations, and treatment to hundreds.</li>
                </ul>
            </section>
            {/* Location Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College Location</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Kohalpur, Nepal (near Bahraich, UP)</li>
                    <li>Only 6 kilometers north of the Indo-Nepal Border town Rupaidiha (Bahraich, U.P.)</li>
                    <li>Nepalgunj Medical College is located in the thriving city of Nepalgunj, in the Western region of Nepal.</li>
                    <li>Nepalgunj Medical College (NGMC) serves as the ideal gateway and crucial links to major Indian cities, including Lucknow-with a short 180-kilometer highway providing direct access.</li>
                    <li>Nepalgunj proximity to Lucknow, the capital city of the largest Indian state, Uttar Pradesh, further elevates the strategic significance of NGMC.</li>
                    <li>NGMC benefit from seamless transportation links to numerous major Indian cities through well-established train, bus, and airplane routes, solidifying our role as a pivotal hub for pan-India accessibility.</li>
                    <li>This strategic positioning ensures that students, patients, and visitors can seamlessly access our world-class healthcare and educational facilities while enjoying the vast cultural and scenic offerings of Nepal and India.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College – Campus</h3>
                <p className="text-smallTextPhone text-left md:text-regularText">
                    Nepalgunj medical college has two campuses:
                </p>
                <ul className="text-smallTextPhone list-none ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>i. Chisapani</li>
                    <li>ii. Kohalpur</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Chisapani Campus (Basic Science)</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Chisapani Campus, situated in the serene East-Chisapani, Banke.</li>
                    <li>Campus is spanning approximately 70 hectares.</li>
                    <li>Surrounded by the renowned Bardia Wildlife Sanctuary, famous for its diverse wildlife, including wild elephants and Royal Bengal Tigers, the campus is a haven of peace and natural beauty.</li>
                    <li>The lush greenery throughout the year creates a unique and pollution-free atmosphere, providing an ideal backdrop for focused learning and teaching.</li>
                    <li>A multimedia lab with internet access supports contemporary learning.</li>
                    <li>Equipped with advanced audio-visual aids like projectors, slide projectors, overhead projectors, computers, and television monitors, our lecture, seminar rooms, and laboratories facilitate effective learning and understanding.</li>
                    <li>Robust 4G internet services ensure seamless connectivity, enabling students to stay connected with peers, instructors, and family members worldwide.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Kohalpur Teaching Hospital (Clinical Science)</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Clinical Science Campus of Nepalgunj Medical College (NGMC) is in the city of Kohalpur, Banke.</li>
                    <li>Campus boasts a cutting-edge 550-bedded multi-specialty hospital, replete with state-of-the-art equipment and technology, offering extensive hands-on training opportunities and exposure to clinical services.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Teaching Hospital</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Nepalgunj Teaching Hospital, a cornerstone of Nepalgunj Medical College's commitment to providing top-quality healthcare services to our community and beyond.</li>
                    <li>Nepalgunj Teaching Hospital is a leading medical facility in Western Nepal, with a rich history of catering the community for over 27 years in providing high-quality medical care, education and research.</li>
                    <li>With a capacity of 250 beds, the hospital offers a range of super-specialty services, including Neurosurgery, Urology, Plastic Surgery, Joint Replacement Surgeries, Laparoscopic Surgeries, Cardiology, Hepatology and more.</li>
                </ul>
            </section>

            {/* Student Facilities Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Welfare Committee</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The Student Welfare Committees (SWC) at NGMC play a pivotal role in fostering student well-being and managing various facets of student life.</li>
                    <li>These encompass offering academic assistance, promoting mental health and overall wellness, organizing social activities, overseeing the annual publication of the magazine "Spandan," and providing guidance in collaboration with the college's management.</li>
                    <li>This committee serves as a platform for students to express their ideas and recommendations, collaborating closely with faculty and administration to implement initiatives that enrich the student experience.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Libraries</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Nepalgunj Medical College (NGMC), recognize the importance of a comprehensive library in supporting the academic pursuits of students.</li>
                    <li>A modern library that provides access to a broad array of resources, including books, journals, and multimedia materials.</li>
                    <li>This collection is carefully curated to cover various fields of medicine, nursing, and public health, ensuring that our students have access to the most up-to-date and relevant information. Our library is an integral part of our institution's commitment to excellence in medical education.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Sports</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>We have made sure that sports and physical activity are given due importance along with academics.</li>
                    <li>To ensure this, football, cricket, basketball and volleyball grounds have been constructed near the education blocks at both Chisapani and Kohalpur campuses.</li>
                    <li>Indoor recreational facilities have been established to cater to the needs of students.</li>
                    <li>In collaboration with SWC, the college hosts an array of annual sports competitions.</li>
                    <li>These events not only provide students with opportunities to unwind but also foster teamwork and a sense of camaraderie among them.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Extra-Curricular Activities</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Extracurricular activities play a vital role in shaping the overall personality of students and breaking the monotony of classroom learning.</li>
                    <li>NGMC, understand the significance of extracurricular activities and encourage our students to participate in various programs beyond the curriculum.</li>
                    <li>NGMC associates with government agencies and non-governmental organizations to organize health camps, which provide valuable exposure to our students.</li>
                    <li>NGMC also hosts cultural programs and other events that help students rejuvenate and stay motivated.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Vacations/holidays</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>On-campus stay is mandatory for all students at NGMC.</li>
                    <li>However, in exceptional cases where a student needs to return home, they must obtain prior approval from the principal by submitting a letter from their parents.</li>
                    <li>The student must also inform the hostel warden before leaving the campus.</li>
                    <li>This rule is in place to ensure the safety and well-being of students, while also maintaining a conducive learning environment.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College - Hostel</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Separate hostels for boys and girls with a combined accommodation capacity of 300 & 650 students at Chisapani and Kohalpur campuses respectively are available.</li>
                    <li>Hostels offer furnished double-bedded rooms, with each room equipped with a study table, chair, book rack, and cupboard for every student.</li>
                    <li>Common recreational facilities include a gym, and infrastructure for indoor and outdoor sports.</li>
                    <li>A strict policy regarding discipline in the hostels, and the use of alcoholic beverages is strictly prohibited within the hostel premises and the campus.</li>
                    <li>Students are expected to maintain good behavior and adhere to the rules and regulations of the hostel.</li>
                    <li>NGMC provides comfortable and secure hostel accommodations for its students, with modern amenities and facilities to ensure a pleasant stay and foster a conducive learning environment.</li>
                </ul>
            </section>

            {/* MBBS Programme Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College MBBS Programme</h3>
                <p className="text-smallTextPhone text-left md:text-regularText">
                    Program Duration: Five and half years
                </p>
                <ul className="text-smallTextPhone list-none ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>i. Pre-clinical: Two years</li>
                    <li>ii. Clinical: Two and half years</li>
                    <li>iii. Internship: One year of compulsory rotating residential</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College – Affiliation</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Nepalgunj Medical College, affiliated with the world-renowned Kathmandu University, Kathmandu, Nepal and recognized by Nepal Medical Council, is an international institution for Medical Education</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College – Recognition</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>NGMC is approved and recognized by the Government of Nepal (Ministry of Health and Population, and Ministry of Education, Science and Technology), Medical Education Commission and is affiliated with Nepal Medical Council and Kathmandu University.</li>
                    <li>The first batch completed its course in July 2002.</li>
                    <li>Boasting an illustrious history spanning 27 years, NGMC has established itself as a bastion of academic excellence, earning acclaim as the "Best Medical College" along with "Health Award" (for the spectacular services provided in Tuberculosis Control) and one of the most preferred medical colleges for foreign students.</li>
                </ul>

                
            </section>

            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] text-black gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                            <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                            <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose Nepalgunj Medical College?</h3>
                            <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                                <li>Nepalgunj Medical College, Kathmandu University holds a premier position within the Nepal's Medical Environment.</li>
                                <li>Students become part of our extensive community of scholars, clinicians and stakeholders, who provide a world class medical education.</li>
                                <li>Expert faculty with years of experience in medical education.</li>
                                <li>Commitment to evidence-based teaching methodologies.</li>
                                <li>State-of-the-art resources and technology for medical training.</li>
                                <li>A focus on continuous professional development for educators and students alike.</li>
                                <li>Globally recognized medical college</li>
                                <li>No passport for indian students</li>
                                <li>No visa for Indian students.</li>
                                <li>Good patient flow and high in-patient bed occupancy</li>
                                <li>Teaching & learning is in English medium</li>
                                <li>Disease spectrum is similar to India</li>
                                <li>Huge clinical practice</li>
                                <li>Syllabus, books, teaching & learning methodology & medicine used are like India</li>
                                <li>After MBBs. Students are eligible to appear in US-MLE.</li>
                                <li>Environment, Culture, food habits and living expenses are like India</li>
                                <li>Separate hostel for boys and girls with appropriate CCTV monitoring</li>
                                <li>Best infrastructure among all private medical college</li>
                                <li>Nepalgunj is a leading healthcare and medical educational hub in the region.</li>
                                <li>Only 6 kilometers north of the Indo-Nepal Border town Rupaidiha (Bahraich, U.P.)</li>
                            </ul>
                           
                            </div>  
                            <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
                        </div>

            {/* At a glance Section */}
            <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value}/>
            {/* Eligibility Criteria */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />

            {/* Academic Calendar */}
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Nepalgunj Medical College Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify'>
                    Students who meet the eligibility criteria can follow some easy steps to complete the admission process at Nepalgunj Medical College.
                </p>
                <ul className="text-smallTextPhone list-none ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>i. Submission of all relevant documents</li>
                    <li>ii. Fill out application form.</li>
                    <li>iii. Document verification.</li>
                    <li>iv. Get an Admission Letter from the University.</li>
                    <li>v. Pay admission fees</li>
                    <li>vi. Submission of passport and other documents required.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Required Documents for Nepalgunj Medical College</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>10th & 12th mark sheet</li>
                    <li>Aadhaar card/voter ID</li>
                    <li>Passport (if ready)</li>
                    <li>Birth certificate</li>
                    <li>Passport-sized photographs</li>
                    <li>Documents should be apostilled by the ministry of external affairs</li>
                    <li>All documents need to be legalized by the Nepali embassy</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Other Popular Nepal Medical Colleges for MBBS in Nepal</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify underline">
                    <li><TransitionLink href='nepal-medical-college'>Nepal Medical College</TransitionLink></li>
                    <li><TransitionLink href='kathmandu-medical-college'>Kathmandu Medical College</TransitionLink></li>
                    <li><TransitionLink href='b&c-medical-college'>B & C Medical College</TransitionLink></li>
                    <li><TransitionLink href='kist-medical-college'>KIST Medical College</TransitionLink></li>
                    <li><TransitionLink href='nobel-medical-college'>Nobel Medical College</TransitionLink></li>
                    <li><TransitionLink href='college-of-medical-science'>College of Medical Science</TransitionLink></li>
                    <li><TransitionLink href='chitwan-medical-college'>Chitwan Medical College</TransitionLink></li>
                    <li><TransitionLink href='birat-medical-college'>Birat Medical College</TransitionLink></li>
                    <li><TransitionLink href='lumbini-medical-college'>Lumbini Medical College</TransitionLink></li>
                    <li><TransitionLink href='devdaha-medical-college'>Devdaha Medical College</TransitionLink></li>
                    <li><TransitionLink href='national-medical-college'>National Medical College</TransitionLink></li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left mt-[4vw]">Access</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>31 km from Repaidiha, UP Border (Lucknow)</li>
                    <li>Direct bus service from Lucknow – Nepalgunj</li>
                </ul>
            </section>
            </div>
        </>
    )
}

export default NepalgunjMedicalCollege 