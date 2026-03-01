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
            "Fees to be deposited directly in the University account after getting admission letter." ,
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
      text: "",
      label: "Recognition by WHO, NMC",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Pokhra, Nepal",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Country Rank",
      label: "9",
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
    label: "Manipal College of Medical Science at a glance",
    value: [
      { label: "College name", value: "Manipal College of Medical Science" },
      { label: "University affiliation", value: "KU" },
      { label: "Recognition", value: "WHO, NMC" },
      { label: "Year of Establishment", value: "1994" },
      { label: "Medium of Instruction", value: "English" },
      { label: "Course Duration", value: "4.5 years" },
      { label: "Internship Duration", value: "1 year" },
      { label: "NEET", value: "Mandatory" },
      { label: "Intake", value: "September" },
      { label: "Location", value: "Pokhara, Nepal" },
      { label: "Hospital Bed Number", value: "750" },
      { label: "Country Rank", value: "9" },
      { label: "World Rank", value: "1407" },
      { 
        label: "Official Website", 
        value: "https://www.manipalpokhara.edu.np" 
      },
      { label: "Students", value: "45,000+" },
      { label: "Countries Represented", value: "67+" },
      { label: "International Collaborations", value: "250+" },
      { label: "Courses Offered", value: "350+ across 31 disciplines" },
      { label: "Years of Education Excellence", value: "25+" },
      { label: "Alumni", value: "3500+" },
      { label: "Indian Style Mess", value: "Available" }
    ]
  };
  return (
    <>
      <Head>
        <title>Manipal College of Medical Sciences – MBBS Admission & Fee Guide</title>
        <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
        <meta name="description" content="Know all about Manipal College of Medical Sciences MBBS program, fee details, and scholarship info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/manipal-college-of-medical-science." />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS in Nepal" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Manipal College of Medical Sciences – MBBS Admission & Fee Guide" />
        <meta property="og:description" content="Know all about Manipal College of Medical Sciences MBBS program, fee details, and scholarship info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/manipal-college-of-medical-science." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="Manipal College of Medical Sciences – MBBS Admission & Fee Guide" />
        <meta name="twitter:description" content="Know all about Manipal College of Medical Sciences MBBS program, fee details, and scholarship info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/manipal-college-of-medical-science." />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Nepal" />
        <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/manipal-college-of-medical-science"/>
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/manipal-college-of-medical-science" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/manipal-college-of-medical-science.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Manipal College of Medical Science</h2>
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
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text  mb-[4vw] md:mb-[1vw]">FOUNDER OF MANIPAL COLLEGE OF MEDICAL SCIENCE</h3>
       
            
                <ul className=" list-disc ml-[3vw] md:ml-[1.5vw] text-smallTextPhone  text-left md:text-regularText md:text-justify">
                <li>Dr. Tonse Madhav Ananth Pai was an Indian doctor, educationist, banker, and philanthropist who established the university town of Manipal, India. Throughout his life, Dr. TMA Pai established institutions with the goal of empowering the community with education, healthcare, and finances.</li>
                <li>In the year 1953, he founded India’s first private medical school, Kasturba Medical College, and five years later, Manipal Institute of Technology was formed. Over the next few years, he created 32 institutions till 1978. Ripley’s Believe It or Not recognized him as the person who has established the greatest number of educational institutions in his lifetime.</li>
                <li>In addition to establishing various colleges, Dr. TMA Pai built local high schools, dye factories, saw mills, rural banks, and an orphanage. Amongst his numerous accolades, Dr. Pai was awarded the Padma Shri in 1972. Today, Dr. TMA Pai’s legacy educates over 45,000 students from 67 different nations.</li>

                </ul>
            </section>

         <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">POKHARA CITY</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Pokhara is a city situated on the bank of Phewa Lake, in central Nepal.</li>
                <li>It’s known as a gateway to the Annapurna Circuit, a popular trail in the Himalayas.</li>
                <li>Tal Barahi Temple, a 2-story pagoda, sits on an island in the lake. On the eastern shore, the Lakeside district has yoga centers and restaurants. In the city’s south, the International Mountain Museum has exhibits on the history of mountaineering and the people of the Himalayas.</li>

              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">MANIPAL COLLEGE OF MEDICAL SCIENCE – EXPERIENCE EDUCATION THE MANIPAL WAY</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Manipal Group of Institutions have long been distinguished for excellence in higher education. The group owns and operates some of the top-ranking institutions across diverse disciplines.</li>
                <li>With a legacy of over 65 years, the group has built a significant footprint and is currently a premier education service provider in India, running 6 major campuses in 5 countries.</li>
                <li>Having pioneered the ‘Inspired Learning’ approach to higher education, its academic delivery model extends way beyond the classroom to offer a holistic learning opportunity that is truly to be experienced.</li>
                <ul className='ml-[3vw] md:ml-[1.5vw]'><li>o 45,000+ Students</li>
                <li>o 67+ Countries</li>
                <li>o 250+ International Collaborations</li>
                <li>o 350+ Courses Across 31 Disciplines</li></ul>

              </ul>

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Manipal College of Medical Sciences, Nepal, has an edge over other medical colleges because of its following features:</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>MCOMS focuses on the gateway to holistic education.</li>
<li>Drawing inspiration from the lofty Himalayas, Manipal Medical College has a most modern and multi-ethnic campus with all conveniences.</li>
<li>With state-of-the-art teaching aids and well-equipped labs, students get exposed to innovative and all-rounded learning.</li>
<li>135+ experienced faculty make the learning environment of MCOMS more exciting and meaningful.</li>
<li>Serves a curriculum that is programmed for holistic development with an emphasis on positive attitudes.</li>
<li>Fortnightly, mid-, and end-semester assessments with MCQs, SAQs, PBQs, and PBLs.</li>
<li>To generate the best results, Manipal Nepal facilitates cross-cultural exposure through students from different countries.</li>

              </ul>             
            </section>

        {/* Mission, Excellence, Engagement and Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] ">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">Why MCOMS?</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Manipal College of Medical Sciences (MCOMS), Pokhara, Nepal is an institution under the Manipal Education and Medical Group (MEMG).</li>
                    <li>Affiliated to Kathmandu University, Dhulikhel, Nepal.</li>
                    <li>Recognised by the Nepal Medical Council.</li>
                    <li>Listed in the 7th Edition of the WHO Directory of Medical Schools.</li>
                    <li>MCOMS is one of Nepal’s premier institutions and the best medical college.</li>
                    <li>Manipal Group’s first international foray in 1994 and Nepal’s first private medical college.</li>
                    <li>Manipal Nepal is the primary choice to pursue MBBS in Nepal for Indian students and holds a high reputation for excellent medical studies.</li>

              </ul>
               <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">MCOMS - International Collaborations</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                 <li>To underscore global credentials, Manipal Institutions have collaborated with foreign universities in engineering, medicine, communication, and management.</li>
<li>These collaborations are effective in deepening the knowledge and skills of students and faculties.</li>


              </ul>

              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">MBBS at MCOMS</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>The annual enrolment for the MBBS degree is 100 students.</li>
                    <li>The majority of the students are of Nepalese and Indian origin.</li>
                    <li>Students from other nations such as Sri Lanka, Maldives, United States of America (NRN), Canada (NRN), etc. are also enrolled.</li>
                    <li>Many students visit from American and European universities and have the opportunity for hands-on training.</li>

                    <strong>Subjects covered:</strong>
                    <ul className='ml-[3vw] md:ml-[1.5vw] list-decimal'><li>Anatomy</li>
                    <li>Biochemistry</li>
                    <li>Community Medicine - Part I</li>
                    <li>Microbiology</li>
                    <li>Pathology</li>
                    <li>Pharmacology</li>
                    <li>Physiology</li></ul>

                    <li>The basic science training takes place at Deep Campus.</li>
                    <li>After passing all the subjects of basic sciences, students are promoted to the clinical aspects.</li>
                    <li>The next five semesters are devoted to the study of clinical sciences, and are held at Manipal Teaching Hospital, Pokhara.</li>
                    <li>Students are intensively trained and evaluated.</li>

                    <strong>Third-year university examinations are held at the end of the 7th semester and include the following subjects:</strong>
                    <ul className='ml-[3vw] md:ml-[1.5vw] list-decimal'><li>Community Medicine - Part II</li>
                    <li>Forensic Medicine</li>
                    <li>Ophthalmology</li>
                    <li>Otorhinolaryngology</li></ul>

                    <strong>After successful completion of all 4 subjects of the third year, students are allowed to take the final year examinations, which consist of:</strong>
                    <ul className='ml-[3vw] md:ml-[1.5vw] list-decimal'><li>Medicine and allied subjects (Part I & II)</li>
                    <li>Surgery and allied subjects (Part I & II)</li>
                    <li>Obstetrics and Gynecology</li>
                    <li>Pediatrics</li></ul>



              </ul>         
            </section>

            


         <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">With over 800 students and 3500+ alumni, Manipal Medical College, Nepal, is an extraordinary institution serving students worldwide.  </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>800+ students and 3500+ alumni</li>
<li>750-bedded tertiary care multispecialty hospital with super specialty services</li>
<li>MD/MS in all specialty disciplines and allied health programs</li>
<li>MCOMS is the first choice of students because of its varied disciplines offered.</li>
<li>Specializes in MD/MS in all disciplines and allied health programs.</li>
<li>Manipal Medical College, Nepal has 22 programs ongoing with 100 MBBS admissions per annum, including 22% scholarship seats.</li>
<ul className='ml-[3vw] md:ml-[1.5vw]'>
<li>o	25+ Years of World Class Education</li>
<li>o	800+ Students</li>
<li>o	3500+ Alumni</li>
</ul>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Manipal College of Medical Science - recognition </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] grid grid-cols-2 mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>MCOMS is recognized by the Medical Council of Nepal, Sri Lanka, and other countries. It is also recognized by WHO and under FAIMER. </li>

                </ul>  
           
                <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Manipal College of Medical Science - hospital</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Manipal Teaching Hospital (MTH) is a 700-bedded hospital, located at Phulbari, Pokhara.</li>
<li>The 5-storey hospital building houses an extensive medical library, students’ classrooms, a canteen, main atrium, an auditorium, along with outpatient departments and inpatient wards.</li>
<li>All the medical students and faculty reside close by in other buildings.</li>

                </ul> 

                <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Manipal College of Medical Science - treatment cost</h3>
                <ul className="text-smallTextPhone list-decimal ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Treatment cost in MCOMS is reasonably affordable.</li>
<li>Most tests and interventions are cheaper than those of government hospitals.</li>
<li>There is also a Poor Patients' Fund (PPF) which provides free treatment to poor patients.</li>


                </ul> 

            
            </section>

          {/* Why chose section */}
          <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] gap-[5vw] text-black md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                            <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                            <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Manipal College of Medical Science - Hostels, Mess and Other Physical Facilities</h3>
                            <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                               <li>Nestled amidst great scenic beauty at the foot of the Himalayan Range, away from the tenacious onslaughts of pollution-prone modern urban life, the institution offers young men and women an excellent climate necessary for full and proper growth—physical, intellectual, and spiritual health.</li>
                                <li>Manipal College of Medical Sciences, a rapidly developing institution, is located in the holy city of Pokhara.</li>
                                <li>There are separate enclaves for male and female students.</li>
                                <li>The Boy’s and Girl’s hostel wardens are housed within these blocks.</li>
                                <li>The campus hospital, attended to by qualified doctors, provides emergency medical services to the students and staff whenever required.</li>
                                <li>One vehicle is always placed in the campus to meet emergency needs and to take students and staff to the hospital in case hospitalization is required.</li>
                                <li>All hostels provide good mess/canteen facilities to both students and staff with various types of food preparations such as Nepali, South Indian, North Indian, Chinese, Continental, and others.</li>
                                <li>Food is delicious and prepared under stringent hygienic supervision.</li>

                            </ul>
                           
                            </div>  
                            <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
                        </div>

                    <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                    <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text">Manipal College of Medical Science - poor patients' fund (PPF)</h3>
                        <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                        <li>Also known as Asha, the PPF is an NGO managed by the students (mainly the 5th semester students). Funds are raised by the students by various means such as organizing movie shows, dances, college fetes, sales of T-shirts and sweat shirts, donations from the students and faculty, etc. The fund supports the cost of treatment of those patients who are unable to afford it themselves.</li>

                    </ul>

                    <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text">Manipal College of Medical Science - Infrastructure & Environment</h3>
                        <p className='text-smallTextPhone  text-left md:text-regularText md:text-justify'>   Present physical facilities at the Manipal College of Medical Sciences created to provide its students the best educational environment in Nepal</p>  
                        <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                        <li>Multi-storied, spacious, technologically advanced, well-ventilated lecture halls</li>
<li>Library</li>
<li>Laboratories</li>
<li>Seminar and tutorial rooms</li>
<li>Media lab with computer-aided learning centre featuring modern audio-visual equipment</li>
<li>CCTVs</li>
<li>OPDs, basic, clinical, and post-doctoral departments are air-conditioned</li>



                    </ul>

                    <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text">Manipal College of Medical Science - Teaching Hospital</h3>
                        <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                            <li>This has revolutionized the healthcare scenario in this region with a combination of clinical expertise and advanced diagnostic facilities.</li>
                            <li>Manipal College of Medical Sciences - Teaching Hospital is the focus of the clinical teaching activity of the College.</li>
                            <li>A 750-bedded facility with the largest ICU & OT complex in the region, equipped with state-of-the-art equipment.</li>
                            <li>MCOMS teaching hospital is a tertiary care facility that provides the trainee with the opportunity to acquire knowledge and skills from the finest doctors in the country.</li>
                        </ul>         

                    <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text"> Manipal College of Medical Science - Students Amenities Center </h3>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>To facilitate students, buy their requirements, stationary, photocopy, internet, and snacks etc., a student's amenities center is functioning within the College Complex.</li>
                    </ul>

                    <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text">Manipal College of Medical Science - Recreation Facilities </h3>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                        <li>Apart from modern indoor and outdoor play grounds in the college campus for all round development of the students, the college is also providing special facilities for Yoga and Gymnasiums.</li>
                    </ul>



                    </section>

                    {/* At a galance  */}
            <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value}/>

        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />1

                <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Manipal College of Medical Science Fee Structure</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>75,000 USD</li>
                    <li>Accommodation & Food - extra</li>
                </ul> 

                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Manipal college of medical sciences Nepal ranking</h3>
                    <ul className="text-smallTextPhone mb-[4vw]  ml-[3vw] md:ml-[1.5vw] md:mb-[1vw] text-left list-disc md:text-regularText md:text-justify">
                        <li>Country rank 9</li>
                        <li>World rank 1407</li>
                    </ul> 

                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Location</h3>
                    <ul className="text-smallTextPhone mb-[4vw]  ml-[3vw] md:ml-[1.5vw] md:mb-[1vw] text-left list-disc md:text-regularText md:text-justify">
                        MCOMS has two locations in Pokhara.
                        <li>The basic sciences campus is located at Deep Heights, where 1st and 2nd year courses are taught.</li>
                        <li>The administrative block is also located at Deep Heights.</li>
                        <li>The clinical campus with the teaching hospital is located at Phulbari, Pokhara, overlooking the Annapurna mountain range.</li>
                    </ul> 
            
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Nearest Indian Border </h3>
                    <ul className="text-smallTextPhone mb-[4vw]  ml-[3vw] md:ml-[1.5vw] list-disc md:mb-[1vw] text-left md:text-regularText md:text-justify">
                        <li>300 Km from Raxaul, Bihar (Birgunj border)</li>
                        <li>200 Km from Sonauli, UP (Gorakhpur border)</li>
                    </ul> 
            </section>
                
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />





        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Manipal College of Medical Science - Admission Process</h3>
              <ul className='text-smallTextPhone  ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]'>
                <li className='mb-[4vw] md:mb-[1vw]'><strong> Step-1</strong>
                <p>Submit the Application Form along with the required documents</p>
                  <ul className="text-smallTextPhone list-decimal ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify ">
                    <li>10th & 12th mark sheet</li>
                    <li>Aadhaar card/Voter ID/ Passport</li>
                    <li>NEET-UG 2025 Score Card</li>
                    <li>Passport-sized photographs</li>
                    <li>Application Fees INR 5000/-</li>
                </ul>
                </li>
                <li className='mb-[4vw] md:mb-[1vw]'><strong> Step-2</strong>
                <p>Upon varying the eligibility, KIST Medical College & Teaching Hospital will issue a provisional Offer Letter.</p>
                </li>
                <li className='mb-[4vw] md:mb-[1vw]'><strong> Step-3</strong>
                <p>Student need to pay a Booking Amount of INR 5,00,000/-  in College Account as Acceptance of Offer of admission KIST Medical College & Teaching Hospital and commit to fulfill the eligibility requirement set by MEC & TU.</p>
                </li>
                <li className='mb-[4vw] md:mb-[1vw]'><strong> Step-2</strong>
                <p>Follow the admission process through MEC, we will help you in completing the admission process and formalities set by MEC.</p>
                </li>
              </ul>
                
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Other popular Colleges for MBBS in Nepal</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify underline">
                    <li> <TransitionLink href='nepal-medical-college'>Nepal Medical College</TransitionLink></li>
                                       <li><TransitionLink href='kathmandu-medical-college'>Kathmandu Medical College</TransitionLink></li>
                                        <li><TransitionLink href='b&c-medical-college'>B&C Medical College</TransitionLink></li>
                                        <li><TransitionLink href='kist-medical-college'>KIST Medical College</TransitionLink></li>
                                        <li><TransitionLink href='birat-medical-college'>Birat Medical College</TransitionLink></li>
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
