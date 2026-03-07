import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
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
      label: "Kathmandu, Nepal",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "Country Rank - 6th",
    },
  ];

import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink';
import Head from 'next/head';
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'
import CollegeOverviewTable from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeOverviewTable'
import { CollegeDataOverviewInterface } from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeDataOverviewInterface'

const NewPage = () => {
  const collegeDataOverview: {
    label: string;
    value: CollegeDataOverviewInterface[];
  } = {
    label: "Kathmandu Medical College at a glance",
    value: [
      { label: "College name", value: "Kathmandu Medical College" },
      { label: "University affiliation", value: "KU" },
      { label: "Recognition", value: "WHO, NMC" },
      { label: "Year of Establishment", value: "1997" },
      { label: "Hospital Bed Number", value: "900" },
      { label: "Type of College", value: "Private" },
      { label: "Medium of Instruction", value: "English" },
      { label: "Course Duration", value: "4.5 years" },
      { label: "Internship Duration", value: "1 year" },
      { label: "Country Rank", value: "6th" },
      { label: "NEET", value: "Mandatory" },
      { label: "Intake", value: "September" },
      { label: "Location", value: "Kathmandu, Nepal" }
    ]
  };
  return (
    <>
    <Head>
    <title>MBBS in Nepal for Indian Students – Admission & Fee Structure Kathmandu Medical College</title> 
      <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
      <meta name="description" content="Explore MBBS in Nepal for Indian students, detailed fee structure, top colleges & scholarship info on https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kathmandu-medical-college." />
      <meta name="author" content="edurizon" />
      <meta name="robots" content="index, follow"/>
      <meta name="DC.title" content="MBBS in Nepal" />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Dwarka" />
      <meta name="geo.position" content="22.351115;78.667743" />
      <meta name="ICBM" content="22.351115, 78.667743" />
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="MBBS in Nepal for Indian Students – Admission & Fee Structure Kathmandu Medical College"/>
      <meta property="og:description" content="Explore MBBS in Nepal for Indian students, detailed fee structure, top colleges & scholarship info on https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kathmandu-medical-college."/>
      <meta property="og:url" content="https://www.edurizon.in/"/>
      <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@edurizon"/>
      <meta name="twitter:title" content="MBBS in Nepal for Indian Students – Admission & Fee Structure Kathmandu Medical College"/>
      <meta name="twitter:description" content="Explore MBBS in Nepal for Indian students, detailed fee structure, top colleges & scholarship info on https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kathmandu-medical-college."/>
      <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
      <meta name="twitter:image:alt" content="MBBS in Nepal"/>
      <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kathmandu-medical-college" hrefLang="en-in"/>


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
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/kathmandu-medical-college.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h1 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Kathmandu Medical College</h1>
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
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text md:text-center text-left mb-[4vw] md:mb-[1vw]">Kathmandu Medical College</h3>
       
              <p className='text-smallTextPhone  text-left md:text-regularText md:text-justify'>
                Kathmandu Medical College has been established in the year 1997, is a private institute which is situated in heart of Kathmandu. Kathmandu Medical College is affiliated with Kathmandu University.
                <br/><br/>
                Kathmandu Medical College functions from two complexes

                <ul className=" list-disc ml-[3vw] md:ml-[1.5vw]">
                <li>Duwakot  - Basic Science</li>
                <li>Sinamangal - Clinical Science.</li>
                </ul>
                The main hospital of Kathmandu medical college is located in Sinamangal near Tribhuvan International Airport. <br/>
                The strength of any institution lies in the quality and skills of its faculty. Kathmandu Medical College faculty consists of a team of eminent and experienced professionals from Nepal as well as India. Kathmandu medical college faculty is Highly qualified and experienced teaching staff which ensures a high quality of instruction in addition to maintaining a professional academic environment. <br/><br/>

The Kathmandu medical college has ample facilities for tutorials.  All lecture halls are equipped with audio-visual facilities at Kathmandu medical college. Each department has its tutorial rooms for the problem and need-based learning at Kathmandu medical college. <br/><br/>

Each room is appropriately equipped to facilitate small group discussions. Also, there are seminar rooms which hold the practice of the clinical skill, clinical courses on a variety of topics clinical meetings, and journal club meeting intended to benefit both students and staff. These activities are strongly supported by the faculty of Medical Education at Kathmandu medical college.<br/><br/>

                </p>                        
            </section>

        

        {/* Mission, Excellence, Engagement and Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">Kathmandu medical college faculty</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Pharmacology</li>
                  <li>Biochemistry</li>
                  <li>Physiology</li>
                  <li>Pathology</li>
                  <li>Department of Community Medicine</li>
                  <li>Microbiology</li>
                  <li>Anatomy</li>
              </ul>     

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Indian Students in the Kathmandu Medical College</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The Kathmandu Medical College (KMC) provides an MBBS program which generally costs less than any private medical college in India.</li>
                <li>No visa requirements for Indian Students.</li>
                <li>Indian food, both vegetarian & non-vegetarian, are available.</li>
                <li>All festivals are like what are celebrated in India.</li>
                <li>No language barrier. Hindi is spoken in Nepal.</li>
              </ul>

             
            </section>

            {/* At a galance  */}
            <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value} />

          {/* Why chose section */}
          <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  text-black px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                            <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                            <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Reasons to Choose Kathmandu Medical College for MBBS</h3>
                            <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                               <li>KMC has good infra with all basic amenities.</li>
                                <li>KMC is safe for girl students.</li>
                                <li>KMC is clean, green, and has good studying environment.</li>
                                <li>KMC has a healthy competition among students to excel in life.</li>
                                <li>KMC strictly follows no capitation fee policy.</li>
                                <li>KMC has excellent opportunities of growth for medical graduates.</li>
                                <li>KMC has 900 bedded hospital.</li>
                                <li>KMC has 1500 to 2000 daily OPD.</li>
                                <li>KMC has more than 200 doctors.</li>
                                <li>KMC has world class infrastructure.</li>
                                <li>KMC has academic building, Hospital and hostels which are located just within 5 minutes walking distance.</li>
                                <li>KMC has well-maintained classrooms for the students.</li>
                                <li>KMC has a huge library, where students read and study in a very good atmosphere.</li>
                            </ul>
                           
                            </div>  
                            <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
                        </div>

            {/* Mission and Faculty*/}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Duration of MBBS in Kathmandu Medical College</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>MBBS program in KMC is a 4.5 years integrated programme.</li>
                <li>1 year internship programme.</li>
                <li>First two academic years focus on basic medical science with interdepartmental integration and community correlation.</li>
                <li>This ensures that students learn practical knowledge as well as theoretical knowledge.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Ranking of Kathmandu Medical College</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Kathmandu Medical College ranks No. 6 in Nepal.</li>
                <li>Studying MBBS at this college is a good option.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]   md:text-54Text  text-left">Recognition/Accreditation of Kathmandu Medical College</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The KMC is affiliated with Kathmandu University.</li>
                <li>The KMC is recognized by the NMC & WHO.</li>
                <li>KMC is listed in the International Medical Education Directory (IMED).</li>
                <li>Globally recognised College.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">The Medium of Teaching in Kathmandu Medical College</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The medium of teaching in KMC is English.</li>
                <li>English is a central language that is universally accepted.</li>
                <li>Hindi is also spoken in Nepal.</li>
              </ul> 

                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Students Life at Kathmandu Medical College </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>Kathmandu Medical College provides all required facilities to the students.</li>
                <li>Every year many students apply for admission to KMC for MBBS.</li>
                <li>KMC campus offers canteen and mess facilities.</li>
                <li>KMC offers all its students hostel facilities that have all the modern facilities.</li>
              </ul>                 
            </section>

              <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">Kathmandu Medical College Hostel & Accommodation</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>KMC has separate hostels for males and females.</li>
                  <li>The rooms in the KMC hostel are fully furnished.</li>
                  <li>There are options for air-conditioned rooms for which students shall have to pay extra.</li>
                  <li>Kathmandu Medical College has mess facilities for its students.</li>
                  <li>The hostels are fully guarded and have a foolproof security system.</li>
                  <li>The hostels are provided with proper water and electricity.</li>

              </ul>     

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Kathmandu Medical College Living Cost </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>While studying at Kathmandu Medical College (KMC) in Nepal, it involves various living expenses beyond the tuition fees.</li>
                  <li>The cost of living for international medical students varies based on their lifestyle choices and accommodation preferences.</li>
                  <li>Most students find Kathmandu relatively affordable in terms of living cost expenses.</li>

              </ul>
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Kathmandu medical college fees for Indian students </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Although the actual Kathmandu Medical College fee is $75,000, fixed by the Government of Nepal, KMC is offering a huge discount for Indian students which depends on a first-come, first-served basis.</li>
                  <li>In order to avail this discount, we suggest students who are willing to take admission in any Nepal Medical college and have a good budget, to register themselves as early as possible.</li>
              </ul>


            </section>

        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
                
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />





        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Kathmandu Medical College Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify '> Students who meet the eligibility criteria can follow some easy steps to complete the admission process at B & C Medical College. </p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>Submission of all relevant documents</li>
                    <li>Fill out application form.</li>
                    <li>Document verification.</li>
                    <li>Get an Admission Letter from the University.</li>
                    <li>Pay admission fees.</li>
                    <li>Submission of passport and other documents required.</li>

                </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Required Documents for Kathmandu Medical College</h3>
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
                                       <li><TransitionLink href='b&c-medical-college'>B&C Medical College</TransitionLink></li>
                                        <li><TransitionLink href='nobel-medical-college'>Nobel Medical College</TransitionLink></li>
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
