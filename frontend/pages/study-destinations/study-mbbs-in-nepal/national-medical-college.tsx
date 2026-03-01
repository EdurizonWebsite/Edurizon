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
        subTitle: "A glimpse of the important dates an aspirant must keep in mind to get admission in National Medical College in Nepal.",
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
            "Fees to be deposited directly in the account of National Medical College after getting admission letter.",
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
        label: "Birgunj, Nepal",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "Country Ranking",
        label: "8th",
    },
];

const NationalMedicalCollege = () => {
    const collegeDataOverview: {
        label: string;
        value: CollegeDataOverviewInterface[];
      } = {
        label: "National Medical College at a glance",
        value: [
          { label: "College name", value: "National Medical College" },
          { label: "University affiliation", value: "TU" },
          { label: "Year of Establishment", value: "2001" },
          { label: "Recognition", value: "WHO, NMC" },
          { label: "Medium of Instruction", value: "English" },
          { label: "Course Duration", value: "4.5 years" },
          { label: "Internship Duration", value: "1 year" },
          { label: "Hospital Bed Number", value: "1050" },
          { label: "NEET", value: "Mandatory" },
          { label: "Country Rank", value: "8th" },
          { label: "Intake", value: "September" },
          { label: "Location", value: "Janakpur, Nepal" },
          { 
            label: "Official Website", 
            value: "https://www.nmcbir.edu.np" 
          }
        ]
      };    
    return (
        <>
            <Head>
                <title>National Medical College Nepal – MBBS Program, Fees & Hostel</title>
                <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
                <meta name="description" content="National Medical College Nepal. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/national-medical-college." />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in Nepal" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="National Medical College Nepal – MBBS Program, Fees & Hostel" />
                <meta property="og:description" content="Apply to National Medical College Nepal. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/national-medical-college." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="National Medical College Nepal – MBBS Program, Fees & Hostel" />
                <meta name="twitter:description" content="Apply to National Medical College Nepal. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/national-medical-college." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Nepal" />
                <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/national-medical-college"/>
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/national-medical-college" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/national-medical-college.png"} alt='National Medical College' width={650} height={550} />
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>National Medical College</h2>
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
                <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text text-left mb-[4vw] md:mb-[1vw]">About National Medical College</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>National Medical College was established in the year 2001, promoted by the "National Medical College Company Pvt. Ltd." under the Chairmanship of Prof.Dr.Jainuddin Ansari, an outstanding surgeon who has earned national and international credentials for the promotion of Medico-Social services.</li>
                    <li>National Medical College is one of the best medical colleges in Nepal, in terms of infrastructure, academic facilities and modern sophisticated medical equipment.</li>
                    <li>NMCTH is committed to provide quality services and medical care to each and every citizen coming to NMCTH.</li>
                    <li>NMCTH strive hard to provide comprehensive, high quality tertiary care services.</li>
                    <li>NMCTH provides affordable medicine to patients in a friendly environment and with a spirit of compassion. That the changes are on par with the government hospitals bears testimony of our community to providing high quality medical care for all sections of the society.</li>
                    <li>NMCTH has modern sophisticated equipment like bronchoscopes, ECHO, ECG, endoscopes, colposcope and 64 Slice CT Scanner for use in the hospital.</li>
                    <li>NMCTH have fully equipped ICU, CCU, NICU and PICU. CAC and PAC services are also provided.</li>
                    <li>The daily outpatient attendance has exceeded eight hundred fifty during summer months and the patient admissions show a healthy increase every day.</li>
                </ul>
            </section>

            {/* Affiliation Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">National Medical College – Affiliation</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>National Medical College, affiliated with the world renowned Tribhuvan University, Kathmandu, Nepal and recognized by Nepal Medical Council, is an international institution for Medical Education</li>
                </ul>
            </section>

            {/* Mission & Goals Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">National Medical College - Mission & Goals</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>College aims to produce the most competent and knowledgeable medical doctors and Para-medical personnel for meeting the growing demands of technical manpower of the country and of the "Global Village" in general.</li>
                    <li>The College is committed to obtain the highest academic place among all the medical colleges in the country by enriching the inquisitive minds of its students with the latest research findings and most up-to-date and advanced scientific knowledge and information on the Medical & Nursing subjects.</li>
                    <li>The college has in its mind to leave no stone unturned in making itself one of the finest and the most advanced medical colleges of the world.</li>
                    <li>The College not only equips its students with adequate latest medical and scientific skills and know-how on the subject for performing successfully their duties but also has its mission to nourish and nurture its students in such a way that they always remain benevolent, compassionate, and sympathetic to their patients while performing their professional duties, "the Messiahas for the sick and the needy".</li>
                    <li>With these aims and objectives in mind, the college has been established in accordance with the international standard set for medical education by The WorId Federation of Medical Education and in accordance with the norms set by the Nepal Medical Council, the Medical Council of India and the Medical Council of other developed Countries.</li>
                    <li>The undergraduate & Postgraduate Medical/Nursing Degrees of Tribhuvan University have wide recognition and acceptance which the college believes will be highly valued by employers of medical institutions across the globe.</li>
                </ul>
            </section>

            {/* Location Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">National Medical College - Location</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>National Medical College is situated at the South-eastern Sub-metropolitan city of Birgunj.</li>
                    <li>It is the commercial Capital of Nepal, along the Indo-Nepal border.</li>
                    <li>The college campus is only 5 kms away from the Indian border town of Raxaul (in Bihar State) which is well connected with most major cities and towns of India by road and railway.</li>
                    <li>Birgunj has good road linkage with most cities and towns of Nepal. It is a matter of just 15 minutes flight to Kathmandu, the national capital.</li>
                </ul>
            </section>

            {/* Campus Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">National Medical College – Campus</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>The entire establishment of National Medical College, viz, pre-clinical and clinical departments, Teaching hospital, School of Nursing, Students hostels, Quarters for faculties and other staff, Library, etc., all are located within one single campus which is spread over a fairly large track of about 40 acres of land.</li>
                    <li>This is the unique advantage of this college as compared to many other Medical College in Nepal, which facilitates the teaching staff and students for better understanding with each other & work together for a better academic environment.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left mt-[4vw]">National Medical College – Campus Location</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>National Medical College Campus is located at the outskirt of Birgunj city in a peaceful and pollution free environment.</li>
                    <li>Round the o'clock local transport facilities available between the college campus and the markets and other utility places in the city.</li>
                </ul>
            </section>

            {/* Recognition Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">National Medical College – Recognition</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>National Medical College is recognized by international organizations such as WHO, NMC which attracts international students from all around the world to Study MBBS at National Medical College.</li>
                </ul>
            </section>

            {/* Why Choose Section */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] text-black gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
                    <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%]">Why Choose National Medical College?</h3>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                        <li>National Medical College, Tribhuvan University holds a premier position within the Nepal's Medical Environment.</li>
                        <li>Students become part of our extensive community of scholars, clinicians and stakeholders, who provide a world class medical education.</li>
                        <li>Expert faculty with years of experience in medical education.</li>
                        <li>Commitment to evidence-based teaching methodologies.</li>
                        <li>State-of-the-art resources and technology for medical training.</li>
                        <li>A focus on continuous professional development for educators and students alike.</li>
                        <li>National Medical College is one of the best colleges for students who wish to study MBBS Abroad.</li>
                        <li>Globally recognized medical college</li>
                        <li>No passport for indian students</li>
                        <li>No visa for Indian students.</li>
                        <li>Good patient flow and high in-patient bed occupancy</li>
                        <li>Teaching & learning is in English medium</li>
                        <li>Disease spectrum is similar to India</li>
                        <li>Huge clinical practice</li>
                        <li>Syllabus, books, teaching & learning methodology & medicine used are similar to India</li>
                        <li>After MBBs. Students are eligible to appear in US-MLE.</li>
                        <li>Environment, Culture, food habits and living expenses are similar to India</li>
                        <li>Separate hostel for boys and girls with appropriate CCTV monitoring</li>
                        <li>Best Medical College under TU</li>
                        <li>Best infrastructure among all private medical college</li>
                        <li>Very close to Raxaul, Bihar border</li>
                        <li>Best medical college in eastern Nepal nearest Indian border</li>
                        <li>5 Km distance from Raxaul, Bihar border (Birgunj border)</li>
                        <li>Direct bus service from Patna - Birgunj</li>
                    </ul>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="nepal2"/>
            </div>

            {/* At a glance Section */}
           <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value}/>
            {/* Eligibility Criteria */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />

            {/* Academic Calendar */}
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* Admission Process and Documents */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">National Medical College Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify'>
                    Students who meet the eligibility criteria can follow some easy steps to complete the admission process at National Medical College.
                </p>
                <ul className="text-smallTextPhone list-none ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>i. Submission of all relevant documents</li>
                    <li>ii. Fill out application form.</li>
                    <li>iii. Document verification.</li>
                    <li>iv. Get an Admission Letter from the University.</li>
                    <li>v. Pay admission fees</li>
                    <li>vi. Submission of passport and other documents required.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Required Documents for National Medical College</h3>
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
                </ul>
            </section>
            </div>
        </>
    )
}

export default NationalMedicalCollege 