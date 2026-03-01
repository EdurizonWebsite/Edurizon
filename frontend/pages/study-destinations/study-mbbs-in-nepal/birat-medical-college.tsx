import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
import Head from 'next/head'
const academicCalenderData={
    id:"nepal",
    section2:"",
    content:{
        title:"Academic Calender",
        subTitle:"A glimpse of the important dates an aspirant must keep in mind to get on board the best medical colleges in Nepal. The information below is not absolute and may vary university-wise.",
        data:[["Events","Dates"],
        ["Admission process","Starts in the month of May"],
        ["Last date of application","July/August"],
        ["Commencement of MBBS course","From December"]],
    }
}

const eligibilityData={
    id:"nepal",
    section2:"",
    content:{
        title:"Eligibility Criteria",
        subTitle:"Eligibility Criteria for MBBS in Nepal for Indian students",
        data:[["Criteria","Details"],
        ["Academic Qualification",["Class 12 (equivalent) with Phy, Chem, Bio (PCB).","General Category: Min 50% aggregate in PCB.","SC/ST/OBC: Min 40% aggregate in PCB."]],
        ["NEET Qualification",["NEET qualification is mandatory."]],
        ["Age Limit",["Minimum 17 years as of December 31, 2024.","Only current academic year NEET is accepted.","General category NEET score is considered for Indian student.",
            "Fees to be deposited directly in the account of Medical College after getting admission letter, as mentioned in the admission letter." ,
        ]]],
    }
}

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tuition Fees | Hostel Fees",
      label: "75,000 USD",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "",
      label: "Recognition by WHO, NMC",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Biratnagar, Nepal",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "Country Ranking-15",
    },
  ];

import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink';
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'
import CollegeOverviewTable from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeOverviewTable'
import { CollegeDataOverviewInterface } from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeDataOverviewInterface'

const NewPage = () => {
  const collegeDataOverview: {
    label: string;
    value: CollegeDataOverviewInterface[];
  } = {
    label: "Birat Medical College at a glance",
    value: [
      { label: "College name", value: "Birat Medical College" },
      { label: "University affiliation", value: "KU" },
      { label: "Recognition", value: "WHO, NMC" },
      { label: "Medium of Instruction", value: "English" },
      { label: "Course Duration", value: "4.5 years" },
      { label: "Internship Duration", value: "1 year" },
      { label: "NEET", value: "Mandatory" },
      { label: "Country Ranking", value: "15" },
      { label: "World Ranking", value: "5960" },
      { label: "Intake", value: "September" },
      { label: "Location", value: "Biratnagar, Nepal" },
      { 
        label: "Official Website", 
        value: "https://biratmedicalcollege.edu.np/" 
      }
    ]
  };
  return (
    <>
      <Head>
        <title>Birat Medical College – MBBS Admission, Fee & Facilities 2025</title>
        <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
        <meta name="description" content="Apply to Birat Medical College for MBBS. Learn about fee structure, hostel facilities, and admission dates on https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/birat-medical-college." />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS in Nepal" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Birat Medical College – MBBS Admission, Fee & Facilities 2025" />
        <meta property="og:description" content="Apply to Birat Medical College for MBBS. Learn about fee structure, hostel facilities, and admission dates on https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/birat-medical-college." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="Birat Medical College – MBBS Admission, Fee & Facilities 2025" />
        <meta name="twitter:description" content="Apply to Birat Medical College for MBBS. Learn about fee structure, hostel facilities, and admission dates on https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/birat-medical-college." />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Nepal" />
        <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/birat-medical-college"/>
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/birat-medical-college" hrefLang="en-in"/>

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
         {/* Breadcumb section and about nepal */}
            <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center  pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/birat-medical-college.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Birat Medical College</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw]  md:gap-[.75vw] items-center  justify-center">
                                    {services.map((item, index) => (
                                      <div key={index} className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
                                                  rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] 
                                                  md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black">
                                        <Image src={item.icon}
                                          alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative  overflow-hidden shrink-0" />
                                        <p className="text-tinyTextPhone md:text-tinyText text-center leading-[150%]"> {item.text} <br /><span className="font-semibold"> {item.label}</span></p>
                                      </div>
                                    ))}
                                  </div>
                      <CallingBox/>
                    </div>
                </div>                                 
            </div>

       {/* Medical College */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text md:text-center text-left">Birat Medical College - Health Professions Education Department</h3>
              <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">
                The Health Professions Education (HPE) Department at Birat Medical College is dedicated to enhancing the quality of medical education through innovative teaching methodologies, faculty development, and research in medical education. The goal of BMC is to equip healthcare professionals with the knowledge, skills and ethical values necessary for excellence in patient care and medical research.
              </p>              
            </section>

        {/* Mission and Faculty*/}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text md:text-center text-left">Mission of Birat Medical College</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>To enhance teaching and learning methodologies in medical education.</li>
                <li>To develop and implement evidence-based educational strategies.</li>
                <li>To support faculty members in curriculum design and professional development.</li>
                <li>To foster research in health professions education for continuous improvement.</li>
              </ul> 

              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text md:text-center text-left">Birat Medical College - Faculty</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li> <strong>Leadership Team</strong>
                  <ul className='text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify'>
                    <li>Prof. Dr. Hem Sagar Rimal – Head</li>
                    <li>Prof. Dr. Badri Prasad Badhu – Advisor</li>
                    <li>Prof. Dr. Santosh U. Kafle – Principal & Member</li>
                  </ul>
                </li>
                <li ><strong>Faculty & Members</strong>
                  <ul className='text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify'>
                    <li>Dr. Kopila Agrawal – Coordinator</li>
                    <li>Dr. Kishor Gurung – Member</li>
                    <li>Dr. Sanzida Khatun – Member</li>
                    <li>Dr. Parth Guragain – Member</li>
                    <li>Dr. Ram Bhakta Subedi – Member</li>
                    <li>Ms. Anjali Mishra – Member</li>
                  </ul>
                </li>
              </ul>
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw]  md:text-h3Text md:text-center text-left">Birat Medical College Academic Department </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>Faculty of General Medicine</li>
                <li>Faculty of Clinical Psychology</li>
                <li>Faculty of Pediatrics</li>
                <li>Faculty of Pharmacy</li>
                <li>Faculty of Preventive Medicine</li>
                <li>Faculty of Dentistry</li>
                </ul>                 
            </section>

        {/* Mission, Excellence, Engagement and Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
              <li>Birat Medical College (BMC) is the youngest & newest Medical College for MBBS in Nepal. It was established in the year 2014.</li>
              <li>Birat Medical College is an affiliated institute of Kathmandu University.</li>
              <li>BMC is a place for learning, discovery, innovation & expression.</li>
              <li>Biratnagar Medical College maintains its excellent quality of education that is provided by experienced and highly qualified teachers.</li>
              <li>Over the last two decades, Birat medical college has upheld its culture of providing the finest health care along with the pursuit of excellence, all this combined has led to the national recognition of this university and has made a benchmark in certain fields.</li>
              <li>Every year around 100 National and International students take admissions in BMC to pursue their life-long passion and dream career of MBBS. Even though BMC is relatively new, but its history in the context of Nepal has been one of significance.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College - Programs & Initiatives</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Faculty Development Workshops</strong> – Training sessions to improve teaching skills and instructional methods.</li>
                <li><strong>Curriculum Development & Review</strong> – Designing and updating medical education programs in line with global standards.</li>
                <li><strong>Student-Centered Learning Approaches</strong> – Implementing problem-based learning (PBL), case-based learning (CBL), and simulation-based training.</li>
                <li><strong>Medical Education Research</strong> – Conducting studies to enhance teaching techniques and student learning outcomes.</li>
                <li><strong>Assessment & Evaluation</strong> – Developing effective student assessment tools and feedback mechanisms.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College – Recognition</h3>
              <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">•	Biratnagar Medical College is recognized by international organizations such as WHO, NMC which attracts international students from all around the world to Study MBBS at Birat Medical College.</p>
            </section>

          {/* Why chose section */}
          <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] gap-[5vw] mb-[10vw] md:mb-[4vw] text-black items-center bg-linenChosen">
                            <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                            <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose Birat Medial College?</h3>
                            <div>
                            <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                                <li>Birat Medical College (BMC), Kathmandu University holds a premier position within Nepal’s Medical Environment.</li>
                                <li>The most recent medical institution in Nepal is Birat Medical College (BMC).</li>
                                <li>Students become part of our extensive community of scholars, clinicians and stakeholders, who provide a world-class medical education.</li>
                                <li>Expert faculty with years of experience in medical education.</li>
                                <li>Commitment to evidence-based teaching methodologies.</li>
                                <li>State-of-the-art resources and technology for medical training.</li>
                                <li>A focus on continuous professional development for educators and students alike.</li>
                                <li>Birat Medical College is one of the best colleges for students who wish to study MBBS Abroad. It is a newly established medical college famous for its world-class medical education for foreign country students.</li>
                                <li><strong>Faculty and staff:</strong> The University has highly qualified professors and faculty who guide students so that in the future students reach their career goals set in the doctorate field.</li>
                                <li><strong>Research and technology:</strong> Faculty provide research classes with advanced technological equipment in laboratories.</li>
                                <li><strong>Accommodation and food:</strong> On-campus facility. Separate boys & girls’ hostel with appropriate security.</li>

                            </ul>
                            </div>
                           
                            </div>  
                            <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:min-w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
                        </div>

            {/* Infrastructure, Benefits and Recognition */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College - Learn from the best</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                <li>Birat Medical College has a commitment to the excellence that underpins all the campus’s activities, particularly teaching and research.</li>
<li>Birat Medical College attracts faculty of international standing, many of whom with doctoral qualifications, pass on their expert knowledge to students, who then gain a respected qualification and skills required in today’s challenging medical environment.</li>

              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College - Commitment to Teaching</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>Birat Medical College delivers high quality teaching to a diverse body of students across all units.</li>
<li>Birat Medical College teaching staff are not only experts in their field but the majority of them also practice in their area of expertise, providing a strong link between theory and practice.</li>
<li>Birat Medical College is responsive to the need of both local and international students, building on the experiences students bring to their learning.</li>
<li>Promotes high level of interaction and collaboration through innovative delivery methods, including online learning resources.</li>
<li>Birat Medical College undergoes continual improvement, through the evaluative processes at university, faculty, and college levels.</li>
<li>Birat Medical College is relevant to the workplace, with many opportunities to apply theoretical knowledge to practice, well before the internship practices kick in.</li>

                </ul>

                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College - A highly supportive educational environment</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>The comparatively small size of the school allows staff to know students individually and this encourages a friendly atmosphere.</li>
<li>Students will be allocated a mentor who will be concerned with your personal welfare and academic development as BMC aims to provide a supportive environment in which students can thrive.</li>
<li>The advising system of BMC is highly regarded within the University.</li>


                </ul>
               
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College - outstanding rural program</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                <li>With a mind-set to address health workforce shortages, and underserved poor communities, primarily in rural and regional Nepal, BMC has continually grown to partner up and run community-based outreach programs, which aims to lead and direct the rural agendas through the highest quality education, training, research, and community services.</li>
<li>Through such outreach satellite centres, BMC offers a unique opportunity for all undergrad students to familiarize themselves with hands-on experience that would enhance their ability to acquire skills in dealing with current health issues through direct exposure to the mass and users.</li>

                </ul>  
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College - School of Medicine & Allied Sciences </h3>
                <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">
            To meaningfully contribute to the nation’s effort to produce the best physicians, nurses, and support staff, Birat Medical College offers top-notch health professional education.
                </p>  
            </section>

            
            
            {/* Location */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw]  md:text-h3Text md:text-center text-left">Birat Medical College location</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>A strong public-private healthcare system, a large pool of skilled labour and favourable business environment means that Biratnagar has become one of the most popular destinations for medical services in Nepal.</li>
                <li>Biratnagar has been established into a Metropolitan City and developed it as a regional hub for medical tourism, with a focus on providing world-class facilities and highly trained healthcare workers.</li>
                <li>Strong links with industry and excellent research capacity have also helped turn Biratnagar into a leading centre for referrals from different sections of Nepal, as well as some parts of India.</li>
                <li>Birat Medical College serves a diverse local community where students will develop clinical skills and knowledge.</li>
                <li>Many curricular and extra-curricular developments are underway to support learning in this area.</li>
                <li>Birat Medical College is located just 5 to 10 minutes away from the Biratnagar Airport.</li>
                <li>Indian students can also go by their own vehicle via Jogbani border. This border is just 7-8 km away from Birat Medical College. There are other multiple options for Indian students to reach Biratnagar.</li>
                </ul>              
            </section>
        
         {/* At a galance  */}
           <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value} />

        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
                <section className='mx-[6vw] md:mx-[12.5vw]'>
                  <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Students Life at Birat Medical College </h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify '> Students who meet the eligibility criteria can follow some easy steps to complete the admission process at B & C Medical College. </p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>1200 bedded hospital</li>
                    <li>1500 to 2000 daily OPD</li>
                    <li>More than 200 doctors</li>
                    <li>World class infrastructure</li>
                    <li>Academic building, Hospital and hostels are located just within 5 minutes walking distance.</li>
                    <li>Well-maintained classrooms, sanitization, sports grounds, hostels, etc. are available in the University for the students.</li>
                    <li>Huge library, where students read and study in a very good atmosphere.</li>
                  </ul>
                </section>
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />


        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Birat Medical College Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify '> Students who meet the eligibility criteria can follow some easy steps to complete the admission process at B & C Medical College. </p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>Submission of all relevant documents</li>
                    <li>Fill out application form.</li>
                    <li>Document verification.</li>
                    <li>Get an Admission Letter from the University.</li>
                    <li>Pay admission fees.</li>
                    <li>Submission of passport and other documents required.</li>

                </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Required Documents for Birat Medical College</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>10th & 12th mark sheet</li>
                    <li>Aadhaar card/voter ID</li>
                    <li>Passport (if ready)</li>
                    <li>Birth certificate</li>
                    <li>Passport-sized photographs</li>
                    <li>Documents should be apostilled by the ministry of external affairs</li>
                    <li>All documents need to be legalized by the Nepali embassy</li>
                </ul>
               
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Other popular Colleges for MBBS in Nepal</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify underline">
                    <li> <TransitionLink href='nepal-medical-college'>Nepal Medical College</TransitionLink></li>
                    <li><TransitionLink href='kathmandu-medical-college'>Kathmandu Medical College</TransitionLink></li>
                    <li><TransitionLink href='nobel-medical-college'>Nobel Medical College</TransitionLink></li>
                    <li><TransitionLink href='kist-medical-college'>KIST Medical College</TransitionLink></li>
                    <li><TransitionLink href='b&c-college'>B&C Medical College</TransitionLink></li>
                    <li><TransitionLink href='college-of-medical-science'>College of Medical Science</TransitionLink></li>
                    <li><TransitionLink href='lumbini-medical-college'>Lumbini Medical College</TransitionLink></li>
                    <li><TransitionLink href='devdaha-medical-college'>Devdaha Medical College</TransitionLink></li>
                    <li><TransitionLink href='chitwan-medical-college'>Chitwan Medical College</TransitionLink></li>
                </ul>  
            </section>

            

      </div>
    </>
  )
}

export default NewPage
