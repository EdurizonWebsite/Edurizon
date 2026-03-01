import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
import Head from 'next/head'
import { CollegeDataOverviewInterface } from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeDataOverviewInterface'
import CollegeOverviewTable from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeOverviewTable'
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
      label: "Bhaluhi, Rupendehi, Devdaha-8, Nepal",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "Country Ranking-150",
    },
  ];

import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink';
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const NewPage = () => {
  const collegeDataOverview: {
    label: string;
    value: CollegeDataOverviewInterface[];
  } = {
    label: "Devdaha Medical College at a glance",
    value: [
      { label: "College name", value: "Devdaha Medical College" },
      { label: "University affiliation", value: "KU" },
      { label: "Recognition", value: "WHO, NMC" },
      { label: "Year of Establishment", value: "2006" },
      { label: "Hospital bed Number", value: "500" },
      { label: "Medium of Instruction", value: "English" },
      { label: "Course Duration", value: "4.5 years" },
      { label: "Internship Duration", value: "1 year" },
      { label: "NEET", value: "Mandatory" },
      { label: "Country Ranking", value: "150" },
      { label: "World Ranking", value: "561" },
      { label: "Intake", value: "September" },
      { 
        label: "Location", 
        value: "Bhaluhi, Rupendehi, Devdaha-8, Nepal" 
      },
      { 
        label: "Nearest Indian Border (Sunauli - UP, Gorakhpur)", 
        value: "31 Km" 
      },
      { 
        label: "Nearest Indian Border (Bihar - Birgunj)", 
        value: "239 Km" 
      }
    ]
  };
  return (
    <>
      <Head>
        <title>Nepal Medical College Fees – Admission, Hostel, and Scholarship - Devdaha Medical College</title>
        <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
        <meta name="description" content="Find out Nepal Medical College MBBS fees, seat availability, scholarships and application guidance at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/devdaha-medical-college." />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS in Nepal" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nepal Medical College Fees – Admission, Hostel, and Scholarship - Devdaha Medical College" />
        <meta property="og:description" content="Find out Nepal Medical College MBBS fees, seat availability, scholarships and application guidance at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/devdaha-medical-college." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="Nepal Medical College Fees – Admission, Hostel, and Scholarship - Devdaha Medical College" />
        <meta name="twitter:description" content="Find out Nepal Medical College MBBS fees, seat availability, scholarships and application guidance at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/devdaha-medical-college." />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Nepal" />
        <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/devdaha-medical-college"/>
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/devdaha-medical-college" hrefLang="en-in"/>

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
        <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center  text-black pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/devdaha-medical-college.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Devdaha Medical College</h2>
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
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text md:text-center text-left mb-[2vw] md:mb-[.5vw]">Devdaha Medical College</h3>
               <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>Devdaha Medical College is a private research institute. Devdaha Medical College is located within the western part of Nepal at Butwal. It was established in the year 2006. It is affiliated with Kathmandu University and recognized by the Medical Council of Nepal as well as the Medical Council of India.</li>
                <li>It is the prime medical college in addition to the research center for developing new strategies and formulas.</li>
                <li>Devdaha Medical College provides innovative, high-quality education through a nationally recognized curriculum. The college emphasizes early clinical experiences as a guiding principle, integrating basic and clinical sciences. Innovative teaching and learning methods, such as small-group tutorials, problem-based learning (PBL), clinical training models, community visits, interactive lectures, and laboratory exercises, are integral to its approach. Devdaha Medical College is an academic medical institution dedicated to providing superior education and training to produce highly qualified, compassionate healthcare professionals who serve the people of Rupandehi District, its surroundings, and the whole of Nepal.</li>
                <li>It is an international institution recognized for its best results, excellence, and educational achievements on research works.</li>
                </ul>                        
            </section>

        {/* Mission and Vision*/}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Devdaha Medical College - Mission</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Health sciences by maintaining a well and supportive learning environment with ultramodern medical facilities approved by all necessary bodies of the national and international.</li>
                <li>To provide the most needed specialized courses with the ever-changing global standards and latest methodology so that responsible professionals with clinical excellence, compassion along with sensitivity can be produced in the medical field.</li>
                <li>To continue and manage the well-equipped hospital to provide the best services within a very affordable price-range to the patients of the nation and neighboring countries.</li>
                <li>To produce researchers by conducting various research programs that create, disseminate, and apply new knowledge to the field of medical and health sciences. Also, DMCRI has committed to bringing out the best of its medical professionals by collaborating with other agencies that are also committed to the highest standards of teaching and mentoring medical students, developing clinical skills, and doing research in the medical and health field through its hospital and college.</li>
              </ul>
              <h3 className="text-h6TextPhone leading-[120%]   md:text-54Text  text-left">Devdaha Medical College - Vision</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Produce competent, skillful, socially committed, knowledgeable caring medical manpower with a social commitment on the basis of healthcare needs of Nepal.</li>
                <li>Provide qualitative and economically standardized healthcare to the people at large.</li>
                <li>Conduct basic and advanced research in health science.</li>
                <li>Organize health services in rural communities to prevent and provide curative health programs through different effective modalities.</li>
                <li>Plan and initiate student exchange programs with medical institutions within the country and abroad.</li>
                <li>To establish specialized and super-specialized healthcare services with the latest and modern technology to minimize the outgoing foreign currency.</li>
              </ul>             
            </section>

        {/*  Hospital and Facilities */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
             <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left mb-[2vw] md:mb-[.5vw]">Devdaha Medical Hospital</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The hospital/college is spread over 33.47 Acres with a capacity of 400 beds in operation and expanding to 500 beds.</li>
                <li>The hospital has a dedicated team of full-time consultant doctors, resident doctors, paramedical, nursing, and other support staff working round the clock for delivering compassionate care.</li>
                <li>Devdaha Medical Hospital provides in-patient and outpatient departments in all clinical subjects with specialized services like ICU, CCU, NICU, Urology, Neurosurgery, Traumatology, Gastro surgery, and Plastic Surgery.</li>
                <li>The policy of the hospital is to provide high-quality healthcare to the people of all strata of society at an affordable cost.</li>
                <li>Devdaha Medical Hospital is committed to collaborating with all of our healthcare partners, most importantly families, to ensure we consistently deliver safe, high-quality patient and family–centered care.</li>
                <li><strong className='underline'>Existing Services: </strong>
                <ul className="text-smallTextPhone list-decimal ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>24 hours Emergency Services</li>
                    <li>Out Patient Services</li>
                    <li>In Patient Services</li>
                    <li>General Ward, Private cabin</li>
                    <li>ICU, NICU, PICU</li>
                    <li>Well equipped operation theatres</li>
                    <li>ECG, X-Ray, Endoscopy mammogram</li>
                    <li>ECHO, EEG, ECT, CT Scan, MRI 1.5 T Cardiovascular version</li>
                    <li>Physiotherapy Department</li>
                </ul>
                </li>
            </ul>     

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">FACILITIES</h3>
              <ul className="text-regularTextPhone list-decimal ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-h6Text font-semibold md:text-justify">
                <li>Lecture Theatre’s Facilities:
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify font-normal">
                    <li>There are five lecture theatres, gallery type, in the institution with seating capacity for approximately 75-120 students. Lecture theatres are provided with necessary independent audio visual aids including projector, slide projector, LCD projector, and microphone.</li>
                </ul>
                </li>
                <li>Central & Internet Library:
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify font-normal">
                    <li>Libraries have excellent resources for reference and study. Year after year, it has made steady progress and has grown into a collection of numerous medical books & volumes, journals with subscription to national & foreign periodicals yearly on various medical subjects. The library is open from 9:00 am to 9:00 pm on all days.</li>
                </ul>
                </li>
                <li>Cafeteria:
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify font-normal">
                    <li>Catering is done in hygienic conditions and food is cooked in steam facilities within the hospital premises. It caters to the administrative staff and students.</li>
                </ul>
                </li>
                <li>Banking Services:
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify font-normal">
                    <li>An extension counter of Himalayan Bank Ltd., located within the college area with 24 hours of ATM service.</li>
                </ul>
                </li>
                <li>Sports & Gymnasium:
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify font-normal">
                    <li>Students are encouraged maximum in the field of sports and are facilitated with all required equipment to play the indoor and outdoor games. Inter-batch competitions and friendly matches continue through the year. The “DMC sports week” is an important yearly sports and cultural event in the campus. There is also a “Fresher's Welcome Program” for the new comers organized by the immediate senior batch. These activities help to develop interpersonal and leadership skills in our students.</li>
                </ul>
                </li>
                <li>Research Ethics Committee:
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify font-normal">
                    <li>DMC has always been supportive of research activities amongst students and faculty members. The focus on research provides an environment in which clinicians can maintain their knowledge and expertise at the forefront of clinical practice.</li>
                </ul>
                </li>
                <li >Hostels:
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify font-normal">
                    <li>There are separate hostels for boys and girls. The rooms are twin sharing, provided with a bed, a study table, chair, and a cupboard for each student. The hostel mess provides Indo– Nepali vegetarian/ Non-vegetarian cuisines.</li>
                </ul>
                </li>


              </ul>

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Devdaha Medical College Faculties</h3>
              <p className="text-smallTextPhone  text-left md:text-regularText md:text-justify">Devdaha Medical College offers a wide array of faculties that make it a preferred choice for aspiring medical students. The faculties are:</p>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Faculty of Medicine</li>
                <li>Faculty of Dentistry</li>
                <li>Faculty of Nursing</li>
                <li>Faculty of Pharmacy</li>
                <li>Faculty of Allied Health Sciences</li>
                </ul>
            </section>

           
          {/* Why chose section */}
          <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row text-black  px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                            <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                                <div>
                            <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Devdaha Medical College – Safety & Security</h3>
                            <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                               <li>Safety and security are top priorities in DMC.</li>
                                <li>Well-managed hostels implement robust security measures such as secure entry systems, CCTV surveillance, and on-site staff available to assist residents. This creates a sense of safety and peace of mind for residents, allowing them to focus on their studies or activities without worry.</li>
                                <li>Community engagement is fostered through organized events and activities. From social gatherings to educational workshops, well-managed hostels create opportunities for residents to connect, build friendships, and support each other. This sense of community enhances the overall hostel experience, making it feel like a home away from home.</li>
                                <li>Well-managed hostels prioritize cleanliness, safety, and effective management with a comfortable and supportive living experience.</li>

                            </ul>
                            </div>
                           
                            </div>  
                            <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
                        </div>

          {/* At a galance  */}
            <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value} /> 
             


        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
                
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />


        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Devdaha Medical College Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify '> Students who meet the eligibility criteria can follow some easy steps to complete the admission process at B & C Medical College. </p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>Submission of all relevant documents</li>
                    <li>Fill out application form.</li>
                    <li>Document verification.</li>
                    <li>Get an Admission Letter from the University.</li>
                    <li>Pay admission fees.</li>
                    <li>Submission of passport and other documents required.</li>

                </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Required Documents for Devdaha Medical College</h3>
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
                                        <li><TransitionLink href='lumbini-medical-college'>Lumbini Medical College</TransitionLink></li>
                                        <li><TransitionLink href='b&c-medical-college'>B&C Medical College</TransitionLink></li>
                                        <li><TransitionLink href='chitwan-medical-college'>Chitwan Medical College</TransitionLink></li>
                </ul>  
            </section>

            

      </div>
    </>
  )
}

export default NewPage
