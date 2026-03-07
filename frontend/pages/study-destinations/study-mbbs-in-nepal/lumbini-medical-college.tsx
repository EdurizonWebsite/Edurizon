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
        ["Age Limit & Other information",["Minimum 17 years as of December 31, 2024.","Only current academic year NEET is accepted.","General category NEET score is considered for Indian student.",
            "Fees to be deposited directly in the account of Medical College after getting admission letter, as mentioned in the admission letter." ,
            "Students will also have to undergo a counselling/interview held by the MEC. "
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
      text: "",
      label: "Recognition by WHO, NMC",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Palpa, Tansen",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "Country Rank - 07th",
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
    label: "Lumbini Medical College at a glance",
    value: [
      { label: "College name", value: "Lumbini Medical College" },
      { label: "University affiliation", value: "KU" },
      { label: "Recognition", value: "WHO, NMC" },
      { label: "Year of Establishment", value: "2007" },
      { label: "Hospital Bed Number", value: "600" },
      { label: "Medium of Instruction", value: "English" },
      { label: "Course Duration", value: "4.5 years" },
      { label: "Internship Duration", value: "1 year" },
      { label: "Country Ranking", value: "07" },
      { label: "World Ranking", value: "12173" },
      { label: "NEET", value: "Mandatory" },
      { label: "Intake", value: "September" },
      { label: "Location", value: "Tansen, Palpa, Nepal" },
      { 
        label: "Nearest Border (Sunauli – UP, Gorakhpur)", 
        value: "60 Km" 
      },
      { 
        label: "Nearest Border (Bihar – Birgunj)", 
        value: "282 Km" 
      }
    ]
  };
  return (
    <>
      <Head>
        <title>MBBS in Nepal Without NEET – Colleges, Eligibility & Lumbini Medical College</title>
        <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
        <meta name="description" content="Learn how to study MBBS in Nepal without NEET. Explore colleges, alternative exams & admission support at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/lumbini-medical-college." />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS in Nepal" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MBBS in Nepal Without NEET – Colleges, Eligibility & Lumbini Medical College" />
        <meta property="og:description" content="Learn how to study MBBS in Nepal without NEET. Explore colleges, alternative exams & admission support at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/lumbini-medical-college." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="MBBS in Nepal Without NEET – Colleges, Eligibility & Lumbini Medical College" />
        <meta name="twitter:description" content="Learn how to study MBBS in Nepal without NEET. Explore colleges, alternative exams & admission support at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/lumbini-medical-college." />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Nepal" />
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/lumbini-medical-college" hrefLang="en-in"/>

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
         <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center  pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/lumbini-medical-college.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h1 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Lumbini Medical College</h1>
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
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text md:text-center text-left mb-[4vw] md:mb-[1vw]">Lumbini Medical College</h3>
       
              <div className='text-smallTextPhone  text-left md:text-regularText md:text-justify'>
               

                <ul className=" list-disc ml-[3vw] md:ml-[1.5vw]">
                    <li>Lumbini Medical College (LMC) is located in the district of Palpa, a hilly district about 3OO kms west of Kathmandu, the capital city of Nepal. Lumbini Medical College has been established in the year 2008.</li>
                    <li>Palpa is situated at an altitude of 1350 meters, which offers beautiful panoramic scenic view of the Himalayas and offers wide range of recreational activities like hiking and paragliding etc.</li>
                    <li>Lumbini Medical College has been consistently ranked among the top medical colleges in Nepal.</li>
                    <li>The college has been highly praised for its excellent academic standards, state-of-the-art infrastructure, and highly qualified faculty.</li>
                    <li>LMC offers a comprehensive curriculum that covers the full range of medical sciences. It offers courses in anatomy, physiology, biochemistry, pathology, pharmacology, microbiology, community medicine, and other core medical subjects. The college also offers courses in clinical specialties such as general medicine, paediatrics, obstetrics and gynecology, surgery, orthopaedics, ophthalmology, ENT and radiology.</li>
                    <li>Lumbini Medical College Nepal has a strong commitment to research and has set up several research centres to promote evidence-based medical practice.</li>
                    <li>It also has a well-equipped library and digital learning resources that provide students with access to the latest medical information and resources.</li>
                    <li>600 bedded hospital.</li>
                    <li>1500 to 2000 daily OPD.</li>
                    <li>More than 200 doctors.</li>
                    <li>World class infrastructure.</li>
                    <li>Academic building, Hospital and hostels are located just within 5 minutes walking distance.</li>
                    <li>Well-maintained classrooms, sanitization, sports grounds, hostels, etc. are available in the University for the students.</li>

                </ul>

                </div>                        
            </section>

        
        <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Lumbini Medical College - objective </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Producing competent and socially responsible graduates of international standards, LMC offers undergraduate, postgraduate and super-specialization programs.</li>
                <li>To collaborate with both national and international institutions to further research, medical education and capacity development through faculty-student exchange programs.</li>

              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Lumbini Medical College - vision</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>To develop healthcare leaders and establish a knowledge center that is renowned for its academic pursuit not just in Nepal but also on a global scale.</li>
              </ul>  

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Lumbini Medical College - mission</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Produce responsible professionals who are committed to their profession and practice with clinical excellence, compassion and utmost sincerity.</li>
                <li>Excel in academic and clinical medicine; research and training; nurturing passion and enthusiasm into achievement and theoretical knowledge into evidence-based practice and research.</li>

              </ul>  

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Lumbini Medical College - MBBS Program</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Lumbini Medical College takes great pride in providing the Bachelor of Medicine and Bachelor of Surgery (MBBS) program of Kathmandu University.</li>
                <li>This program is spread over 4.5 academic years, allowing students to gain a comprehensive understanding of the field.</li>
                <li>After passing the MBBS examination, students are required to complete a one-year rotating internship at Lumbini Medical College Teaching Hospital. This internship is a prerequisite to the licensing examination of the Nepal Medical Council, which must be cleared for eligibility to practice as a full-fledged medical doctor.</li>

              </ul>            
            </section>

        {/* Mission, Excellence, Engagement and Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">Lumbini Medical College - Faculty & Staff</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Lumbini Medical College offers a wide array of facilities to cater to the diverse needs of its students. These encompass a dedicated medical center to address health concerns.</li>
                    <li>A comprehensive library to support academic research.</li>
                    <li>A spacious auditorium for various events and gatherings.</li>
                    <li>Comfortable hostel options for accommodation.</li>
                    <li>Advanced computer labs for technology-driven learning.</li>
                    <li>Sports facilities to promote physical well-being.</li>
                    <li>A convenient cafeteria for dining.</li>
                    <li>Well-equipped laboratories for practical experiments and research.</li>
                    <li>These facilities collectively contribute to creating a conducive and enriching environment for both academic and personal growth.</li>

              </ul>     

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Lumbini Medical College - Student Support</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Anti-ragging measures to ensure a safe environment.</li>
                <li>Counseling services for guidance and support.</li>
                <li>Access to healthcare facilities.</li>
                <li>Assistance with hostel accommodations.</li>
                <li>Platform for reporting issues and asking questions.</li>
                <li>Local language learning classes. Whether you need help with personal or academic matters, LMC is always available to provide support.</li>

              </ul>

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Lumbini Medical College - Canteen</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>As part of our continuing endeavor to meet the educational and social needs of our students, Lumbini Medical College has hygienic canteens.</li>
                <li>These canteens provide hygienic food with variety to all students at very affordable rates.</li>
                <li>Students can get a variety of fast foods, vegetarian, non-vegetarian items within budget.</li>


              </ul>

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Lumbini Medical College - Library</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
               <li>The library in LMC is established in a separate, double-storied structure air conditioned at the center of the campus, connected through a wide corridor to the main academic block.</li>
                <li>This library has a seating capacity of 80-100 students and an extensive collection of medical text books and journals, available only to the students of the college.</li>



              </ul>

             
            </section>

            

          {/* Why chose section */}
          <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row text-black  px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                            <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                            <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose Lumbini Medical College?</h3>
                            <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                               <li>Lumbini Medical College (LMC), Kathmandu University holds a premier position within Nepal’s Medical Environment.</li>
                                <li>The most recent medical institution in Nepal is Lumbini Medical College (LMC).</li>
                                <li>Students become part of our extensive community of scholars, clinicians and stakeholders, who provide a world class medical education.</li>
                                <li>Expert faculty with years of experience in medical education.</li>
                                <li>Commitment to evidence-based teaching methodologies.</li>
                                <li>State-of-the-art resources and technology for medical training.</li>
                                <li>A focus on continuous professional development for educators and students alike.</li>
                                <li>Lumbini Medical College is one of the best colleges for students who wish to study MBBS Abroad. It is a newly established medical college famous for its world-class medical education for foreign country students.</li>
                                <li>Faculty and staff: The University has highly qualified professors and faculty who guide students so that in the future students reach their career goals set in the doctorate field.</li>
                                <li>Research and technology: Faculty provide research classes with advanced technological equipment in laboratories.</li>

                            </ul>
                           
                            </div>  
                            <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
                        </div>


            {/* Mission and Faculty*/}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Lumbini Medical College – Recognition</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Lumbini Medical College is recognized by international organizations such as WHO, NMC which attracts international students from all around the world to Study MBBS at Birat Medical College.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Lumbini Medical College - Learn from the best</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Lumbini Medical College has a commitment to the excellence that underpins all the campus’s activities, particularly teaching and research.</li>
<li>Lumbini Medical College attracts faculty of international standing, many of whom with doctoral qualifications, pass on their expert knowledge to students, who then gain respected qualifications and skills required in today’s challenging medical environment.</li>

              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Lumbini Medical College - Commitment to Teaching</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The medium of teaching in KMC is English.</li>
                <li>English is a central language that is universally accepted.</li>
                <li>Hindi is also spoken in Nepal.</li>
              </ul> 

                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Lumbini Medical College - outstanding rural program </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
               <li>With a mind-set to address health workforce shortages, and underserved poor communities, primarily in rural and regional Nepal, LMC has continually grown to partner up and run community-based outreach programs, which aim to lead and direct the rural agendas through the highest quality education, training, research and community services.</li>
<li>Through such outreach satellite centres, LMC offers a unique opportunity for all undergrad students to familiarize themselves with hands-on experience that would enhance their ability to acquire skills in dealing with current health issues through direct exposure to the mass and users.</li>

              </ul>                 
            </section>

              <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">Lumbini Medical College - well managed Hostels</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                 <li>Well-managed hostels offer more than just accommodation, they provide a comfortable and supportive environment for residents to thrive.</li>
<li>From meticulously clean facilities to attentive staff, these hostels prioritize the well-being and satisfaction of their residents.</li>
<li>Cleanliness is paramount in well-managed hostels.</li>
<li>Regular cleaning schedules ensure that communal areas, bathrooms and bedrooms are kept spotless, contributing to a hygienic and pleasant living environment. Additionally, maintenance teams promptly address any issues, ensuring that facilities remain in excellent condition.</li>


              </ul>     

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Lumbini Medical College – Safety & Security </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
               <li>Safety and security are top priorities in LMC.</li>
<li>Well-managed hostels implement robust security measures such as secure entry systems, CCTV surveillance, and on-site staff available to assist residents. This creates a sense of safety and peace of mind for residents, allowing them to focus on their studies or activities without worry.</li>
<li>Community engagement is fostered through organized events and activities. From social gatherings to educational workshops, well-managed hostels create opportunities for residents to connect, build friendships, and support each other. This sense of community enhances the overall hostel experience, making it feel like a home away from home.</li>
<li>Well-managed hostels prioritize cleanliness, safety and effective management with a comfortable and supportive living experience.</li>


              </ul>
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Lumbini Medical College - Programs & Initiatives </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>F<strong>aculty Development Workshops -</strong> Training sessions to improve teaching skills and instructional methods.</li>
<li><strong>Curriculum Development & Review -</strong>  Designing and updating medical education programs in line with global standards.</li>
<li><strong>Student-Centered Learning Approaches -</strong>  Implementing problem-based learning (PBL), case-based learning (CBL), and simulation-based training.</li>
<li><strong>Medical Education Research -</strong> Conducting studies to enhance teaching techniques and student learning outcomes.</li>
<li><strong>Assessment & Evaluation -</strong> Developing effective student assessment tools and feedback mechanisms.</li>

              </ul>


            </section>

            {/* At a galance  */}
            <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value}/>

        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
                
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />





        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Lumbini Medical College Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify '> Students who meet the eligibility criteria can follow some easy steps to complete the admission process at B & C Medical College. </p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>Submission of all relevant documents</li>
                    <li>Fill out application form.</li>
                    <li>Document verification.</li>
                    <li>Get an Admission Letter from the University.</li>
                    <li>Pay admission fees.</li>
                    <li>Submission of passport and other documents required.</li>

                </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Required Documents for Lumbini Medical College</h3>
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
                                        <li><TransitionLink href='birat-medical-college'>Birat Medical College</TransitionLink></li>
                                        <li><TransitionLink href='college-of-medical-science'>College of Medical Science</TransitionLink></li>
                                        <li><TransitionLink href='b&c-medical-college'>B&C Medical College</TransitionLink></li>
                                        <li><TransitionLink href='devdaha-medical-college'>Devdaha Medical College</TransitionLink></li>
                                        <li><TransitionLink href='chitwan-medical-college'>Chitwan Medical College</TransitionLink></li>
                </ul>  
            </section>

            

      </div>
    </>
  )
}

export default NewPage
