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
      label: "Bharatpur, Chitwan, Nepal",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "1st Private Medical College of Nepal",
    },
  ];

import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink';
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'
import { CollegeDataOverviewInterface } from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeDataOverviewInterface'
import CollegeOverviewTable from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeOverviewTable'

const NewPage = () => { 
  const collegeDataOverview: {
    label: string;
    value: CollegeDataOverviewInterface[];
  } = {
    label: "College of Medical Science at a glance",
    value: [
      { label: "College name", value: "College of Medical Science" },
      { label: "University affiliation", value: "KU" },
      { label: "Recognition", value: "WHO, NMC" },
      { label: "Medium of Instruction", value: "English" },
      { label: "Course Duration", value: "4.5 years" },
      { label: "Internship Duration", value: "1 year" },
      { label: "NEET", value: "Mandatory" },
      { label: "Country Ranking", value: "22" },
      { label: "World Ranking", value: "5960" },
      { label: "Intake", value: "September" },
      { label: "Location", value: "Chitwan, Nepal" },
      { 
        label: "Official Website", 
        value: "https://chitwanmedicalcollege.edu.np/" 
      }
    ]
  };
  return (
    <>
      <Head>
        <title>College of Medical Sciences – MBBS Admission & Fee Guide</title>
        <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
        <meta name="description" content="Know all about College of Medical Sciences MBBS program, fee details, and scholarship info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/college-of-medical-science." />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS in Nepal" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="College of Medical Sciences – MBBS Admission & Fee Guide" />
        <meta property="og:description" content="Know all about College of Medical Sciences MBBS program, fee details, and scholarship info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/college-of-medical-science." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="College of Medical Sciences – MBBS Admission & Fee Guide" />
        <meta name="twitter:description" content="Know all about College of Medical Sciences MBBS program, fee details, and scholarship info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/college-of-medical-science." />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Nepal" />
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/college-of-medical-science" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/college-of-medical-science.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h1 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>College of Medical Science</h1>
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
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text md:text-center text-left mb-[4vw] md:mb-[1vw]">College of Medical Science</h3>
               <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>The International Society for Medical Education Private Limited (ISME) and the Ministry of Education (MoE), Government of Nepal signed an agreement on the 8th day of August 1993 giving birth to the College of Medical Sciences, at Bharatpur, Chitwan (Dist.), Nepal. Thereafter, this college has undergone a lot of modifications by providing affordable advanced quality health care services and medical education.</li>
                <li>College of Medical Science is the first pioneering medical college in Nepal to get letter of Intent. It has enrolled 1st batch of MBBS students in the year 1996. College of Medical Science is the Centre of excellence for providing advanced yet affordable and quality medical education.</li>
                <li>College of Medical Science is affiliated to the Kathmandu University, Nepal.</li>
                <li>CMS is recognized by the Nepal Medical Council, NMC, India, Sri Lanka Medical Council, and the General Medical Council of Great Britain (UK).</li>
                <li>It is also enlisted in the WHO’s World Directory of Medical Schools and FAIMER, USA.</li>
                <li>CMS is being run by the Indian Management established by Shri Nagender K. Pampati and Dr. V. Natraj Prasad.</li>
                <li>CMS is committed to producing exceptional doctors or medical scientists through enlivening teaching and training. Alongside, fostering individual’s learning with the plethora of opportunities to acquire clinical and communication skills from some of the exemplary leaders in the sector.</li>
                <li>CMS mission is to instill a lifelong passion in our graduates for the compassion, care, and professional approach to health care services thereby to assist the government fulfilling its obligation to the community.</li>
                <li>College of Medical Science envisions to advance and standardize medical education and health care services in Nepal through research, innovation and by building optimum health care delivery systems in Nepal.</li>
                <li>CMS is one of the top private medical colleges in Nepal offering various medical courses.</li>
                <li>College of Medical Science has produced exceptional medical doctors both undergraduates and postgraduates as well as Super specialists. So far it has produced the total number of graduates in respective specialties.</li>

                </ul>                        
            </section>

        {/* Mission, Excellence, Engagement and Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
             <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left mb-[2vw] md:mb-[.5vw]">College of Medical Science - Infrastructure & Environment</h3>
               <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">Present physical facilities at the College of Medical Sciences created to provide its students the best educational environment in Nepal</p>

              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
               <li>Multi-storied spacious technologically advanced well-ventilated Lecture Halls.</li>
                <li>Library.</li>
                <li>Laboratories.</li>
                <li>Seminar and Tutorial Rooms.</li>
                <li>Media Lab with Computer aided Learning Centre which relates to modern audio-visual equipment.</li>
                <li>CCTVs.</li>
                <li>OPDs, basic, clinical, and post-doctoral departments are air-conditioned.</li>
            </ul>     

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left mb-[2vw] md:mb-[.5vw]">College of Medical Science - Teaching Hospital</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
               <li>This has revolutionized the healthcare scenario in this region with a combination of clinical expertise and advanced diagnostic facilities.</li>
                <li>College of Medical Sciences-Teaching Hospital is the focus of the clinical teaching activity of the College.</li>
                <li>A 1200 bedded facility with the largest ICU & OT Complex in the region with the state-of-the-art equipment.</li>
                <li>CMS teaching hospital is a tertiary care facility that provides the trainee with the opportunity to acquire knowledge and skills from the finest doctors in the country.</li>
              </ul>

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left mb-[2vw] md:mb-[.5vw]">College of Medical Science - National & International Collaboration</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>CMS has been coordinating and collaborating with various national teaching institutions like the B.P. Koirala Institute of Health Sciences, Dharan, B.P. Koirala Memorial Cancer Hospital, Bharatpur, and the Govt. hospital of Bharatpur.</li>
                <li>CMS has also liaised with the Royal College of Physicians of Edinburgh and the Armed Forces Research Institute of Medical Sciences (AFRIMS), Bangkok, Thailand.</li>
                </ul>
            </section>


        {/* Mission and Faculty*/}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">College of Medical Science - Library, Communication and Information</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Central Library has a serene and tranquil atmosphere with air-conditioned facilities fully equipped with more than 20 thousand reference books apart from the National and International Journals.</li>
<li>Apart from this, the library and all the departments are connected to the Internet and have access to Journals published in the HINARI website, which gives access to more than 17,000 full-text medical journals.</li>
<li>CMS library also extends services to the local talents of medicine working in other institutions in the town to meet their requirements.</li>
<li>The library remains open from 7:00 AM to 11:00 PM on all working days except on Saturday up to 5:00 PM.</li>
<li>Besides the Central library, each department maintains departmental libraries for the use of faculty members and students. A personalized information service with 10 Tablet Computers and photocopying facilities are also available.</li>

              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">College of Medical Science - Lecture Halls</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The college has already seven lecture halls. Each of the lecture halls can accommodate over 150 students at a time and are provided furniture and latest audio-visual equipment. The lecture halls are well ventilated and have enough of natural light.
                </li>
              </ul>
              <h3 className="text-h6TextPhone leading-[120%]   md:text-54Text  text-left">College of Medical Science - Students Amenities Center</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>To facilitate students, buy their requirements, stationary, photocopy, internet, and snacks etc., a small student's amenities center is functioning within the Hostel Complex.
                </li>
              </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">College of Medical Science - Recreation Facilities</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Apart from modern indoor and outdoor play grounds in the college campus for all round development of the students, the college is also providing special facilities for Yoga and Gymnasiums.</li>
                </ul> 
                          
            </section>

        

            {/* At a galance  */}
            <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value} /> 

          {/* Why chose section */}
          <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row text-black px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                    <div>
                <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%] mb-[4vw] md:mb-[1vw]">College of Medical Science - Medical Education Department</h3>
                <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                    <li>Head of Medical Education Department and senior experienced Professors make policy decisions in Teaching and Training of undergraduate students.</li>
                    <li>The college has a Postgraduate academic committee which advises various departments for conducting postgraduate training.</li>
                    <li>They also organize periodic training programs for teaching to initiate and maintain the continuing Education for Health Professionals. There are regular orientation programs on vaccine-preventable diseases organized by WHO.</li>
                    <li>Medical Education Department conducts Teachers Training workshops to update the faculty members in the advancing Teaching Technologies.</li>
                </ul>
                </div>
                </div>  
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
            </div>

             {/* Medical College */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text  text-left mb-[4vw] md:mb-[1vw]">College of Medical Science - Hostels, Mess and Other Physical Facilities</h3>
               <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>Nestled amidst great scenic beauty at the foot of the Himalayan Range away from the tenacious onslaughts of pollution-free modern urban life, the institution offers to young men and women an excellent climate necessary for full and proper growth; physical, intellectual, and spiritual health.</li>
                <li>College of Medical Sciences, a rapidly developing institution, is in the holy city of Bharatpur which is situated on the banks of River Narayani and cordoned by Himalayan Ranges.</li>
                <li>Separate boys & girls’ hostels.</li>
                <li>Total 03 campuses are available in the college for Boys and Girls:
                <ul className='list-decimal ml-[3vw] md:ml-[1.5vw]'>
                    <li>Bageshwori (Juniors)</li>
                    <li>Chitwan Keyman (Juniors)</li>
                    <li>Kshetrapur (Senior Girls + Interns)</li>
                </ul>
                </li>
                <li>There are separate enclaves for male and female students.</li>
                <li>The Boy’s and Girl’s hostel wardens are housed within these blocks.</li>
                <li>Some senior professors are also accommodated in the Campus to guide the new students.</li>
                <li>A guest room for parents and a waiting room is also available.</li>
                <li>The campus hospital, which is attended to by qualified doctors, provides emergency medical services to the students and staff whenever required.</li>
                <li>One vehicle is always placed in the campus to meet emergency needs and to take students and staff to the hospital in case hospitalization is required.</li>
                <li>All Hostels provide good mess/canteen facilities to both students and staff with various types of food preparations such as Nepali, South Indian, North Indian, Chinese, Continental, and others.</li>
                <li>Food delicious and prepared under stringent hygienic supervision.</li>
                </ul>                        
            </section>


            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">College of Medical College - at a glance </h3>
             
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2 ">
                <li className='font-bold'>o	College name	</li>
                <li>College of Medical College</li>
                <li className='font-bold'>o	University affiliation	</li>
                <li>KU</li>
                <li className='font-bold'>o	Recognition</li>
                <li>WHO, NMC</li>
                <li className='font-bold'>o	Year of Establishment</li>
                <li>1996</li>
                 <li className='font-bold'>o	Hospital bed Number</li>
                <li>1200</li>
                <li className='font-bold'>o	Medium of Instruction</li>
                <li>English</li>
                <li className='font-bold'>o	Course Duration</li>
                <li>4.5 years</li>
                <li className='font-bold'>o	Internship Duration</li>
                <li>1 year</li>
                <li className='font-bold'>o	NEET</li>
                <li>Mandatory</li>                
                <li className='font-bold'>o	Intake</li>
                <li>September</li>
                <li className='font-bold'>o	Location</li>
                <li>Bharatpur, Chitwan, Nepal</li>
                <li className='font-bold'>o	1st Private Medical College of Nepal</li>
                <li></li>
                  <li className='font-bold'>o	Indian Management</li>
                <li></li>
                <li className='font-bold'>o	Large No of patients in OPD & IPD</li>
                <li></li>
                <li className='font-bold'>o	Largest ICU/NICU/CCU of Nepal</li>
                <li></li>
                <li className='font-bold'>o	Indian style mess</li>
                <li></li>
                <li className='font-bold'>o	Uses modern technology</li>
                <li></li>
                
                </ul>  
            </section>

            {/* Infrastructure, Benefits and Recognition */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Miscellaneous:</h3>
                <ul className="list-disc text-regularTextPhone md:text-regularText list-outside pl-[2vw] md:pl-[1.5vw]">
                    <li><strong>General Administration:</strong>
                        <ul  className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                            <li>CMS has a well-qualified and experienced administrative staff.</li>
                            <li>The principal’s administrative Office is in the CMS Teaching for the convenience of staff, students and public.</li>
                            <li>Different sections of the College including the Personal, Establishment and General Administration, Fiscal and Planning, Medical Education Wing, Academic and Examination Cell, Public Relation Office, Central Stores and Purchase Section and Estate Office are also located in the same premises.</li>
                        </ul>
                        </li>
                        <li><strong>Amenities:</strong>
                        <ul  className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                            <li>CMS has several other departments like Maintenance Engineering, Maintenance of civil construction, Computer Maintenance etc., assisted by well-trained technical staff.</li>
                            <li>These departments maintain continuous supply of safe drinking water.</li>
                            <li>The generators are also available for emergency power supply both in the Bageshwori and Hospital complexes as well as in the Hostels.</li>
                        </ul>
                        </li>
                        <li><strong>Transport:</strong>
                        <ul  className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                            <li>There is a fleet of buses and other vehicles for the College and Hospital for transporting students, faculty, and staff.</li>
                        </ul>
                        </li>
                        <li><strong>Security:</strong>
                        <ul  className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                            <li>Security department is headed by a retired Army Officer. He is assisted by a group of dedicated security guards, who are working round the clock to maintain the safety of life and property of the institution.</li>
                        </ul>
                        </li>
                        <li><strong>Social Welfare Department:</strong>
                        <ul  className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                            <li>Medicine in capitalistic society used to be linked mostly with curative aspects of disease. But, with advancements in our knowledge of the exact etiologies of the disease process, and the fact is that the health of an individual and the community is also dependent on his physical, social and cultural environmental factors.</li>
                            <li>The Social Welfare Department was established to create an awareness of health among the public as well as to motivate them to accept health services provided by different agencies in the country so that early diagnosis and treatment cure disease and prevent disabilities.</li>
                            <li>The Social Welfare Department has done a tremendous amount of work by which many more patients are attending CMS Hospital for their early diagnosis of disease and proper treatment.</li>
                        </ul>
                        </li>

                </ul>
            </section>


        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
                
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />


        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">College of Medical Science Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify '> Students who meet the eligibility criteria can follow some easy steps to complete the admission process at B & C Medical College. </p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>Submission of all relevant documents</li>
                    <li>Fill out application form.</li>
                    <li>Document verification.</li>
                    <li>Get an Admission Letter from the University.</li>
                    <li>Pay admission fees.</li>
                    <li>Submission of passport and other documents required.</li>

                </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Required Documents for College of Medical Science</h3>
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
                                        <li><TransitionLink href='b&c-medical-college'>B&C Medical College</TransitionLink></li>
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
