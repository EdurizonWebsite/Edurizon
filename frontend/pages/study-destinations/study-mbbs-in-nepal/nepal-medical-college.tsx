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
      label: "Jorpati, Kathmandu",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Year of Establishment",
      label: "1997",
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
    label: "Nepal Medical College at a glance",
    value: [
      { label: "College name", value: "Nepal Medical College" },
      { label: "University affiliation", value: "KU" },
      { label: "Recognition", value: "WHO, NMC" },
      { label: "Year of Establishment", value: "1997" },
      { label: "Hospital Bed Number", value: "700" },
      { label: "Type of University", value: "Private" },
      { label: "Medium of Instruction", value: "English" },
      { label: "Course Duration", value: "4.5 years" },
      { label: "Internship Duration", value: "1 year" },
      { label: "NEET", value: "Mandatory" },
      { label: "Intake", value: "September" },
      { label: "Location", value: "Jorpati, Kathmandu, Nepal" },
      { label: "Patient Flow", value: "Huge patients flow in OPD & IPD" }
    ]
  };
  return (
    <>
      <Head>
        <title>Nepal MBBS Fees – Indian Students Guide for Admission - Nepal Medical College</title>
        <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
        <meta name="description" content="Get complete information on Nepal MBBS fees, eligibility, and admission process for 2025 at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepal-medical-college." />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS in Nepal" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nepal MBBS Fees – Indian Students Guide for Admission - Nepal Medical College" />
        <meta property="og:description" content="Explore MBBS in Nepal for Indian students, detailed fee structure, top colleges & scholarship info on https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepal-medical-college." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="Nepal MBBS Fees – Indian Students Guide for Admission - Nepal Medical College" />
        <meta name="twitter:description" content="Explore MBBS in Nepal for Indian students, detailed fee structure, top colleges & scholarship info on https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepal-medical-college" />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Nepal" />
        <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepal-medical-college"/>
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/nepal-medical-college" hrefLang="en-in"/>

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
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black' >
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/nepal-medical-college.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Nepal Medical College</h2>
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
              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text md:text-center text-left mb-[4vw] md:mb-[1vw]">Nepal Medical College</h3>
       
            
                <ul className=" list-disc ml-[3vw] md:ml-[1.5vw] text-smallTextPhone  text-left md:text-regularText md:text-justify">
                <li>Nepal Medical College (NMC) is situated at Attarkhel of Jorpati, Gokarneshwar Municipality, in Kathmandu, about 11 km northeast of Kathmandu city. It lies at the foothill of a mound. It has a quiet and tranquil environment, required of a medical college and a teaching hospital. The Gokarna hillock with pine trees, about half a kilometer away on the north, the Gokarna Safari Park across Bagmati river about one kilometer in the east, the terraces with trees encircling the NMC campus on the west, the NMC campus which comprises the college and Nepal Medical College Teaching Hospital (NMCTH), has access to the main road through its main entrance on the southwest.</li>
<li>Nepal Medical College is affiliated to Kathmandu University.</li>
<li>Nepal Medical College is running the Bachelor of Medicine and Bachelor of Surgery (MBBS) program of Kathmandu University since 1997. This is a five and a half year program with the core curriculum of four and a half academic years, conducted in nine semesters each of 6 months, and one year compulsory rotating internship.</li>
<li>This MBBS curriculum aims to produce a well-rounded graduate who will be able to carry out preventive, promotive and curative functions as a medical doctor. The educational approach focuses on community orientation, integrated teaching learning, and problem-based learning.</li>
<li>The NMC campus houses the academic buildings, library, female student and male student hostels and Nepal Medical College Teaching Hospital (NMCTH). The college has departments of Clinical Biochemistry, Clinical Pharmacology, Clinical Physiology, Community Medicine, Forensic Medicine, Human Anatomy, Medical Microbiology, and Pathology that are required for the first two academic years of the MBBS curriculum.</li>

                </ul>
            </section>

        

        {/* Mission, Excellence, Engagement and Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">Nepal Medical College - campus</h3>
                <ul className="text-smallTextPhone  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  The campus of National Medical College houses the academic buildings, library, separate female-male students hostels and Nepal Medical College Teaching Hospital (NMCTH). 
                
              </ul>     

               <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Nepal Medical College - departments</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The college has departments of:
                <ul className='text-smallTextPhone list-decimal ml-[3vw] md:ml-[1.5vw]  text-left md:text-smallText md:text-justify'>
                  <li>Clinical Biochemistry</li>
                  <li>Clinical Pharmacology</li>
                  <li>Clinical Physiology</li>
                  <li>Community Medicine</li>
                  <li>Forensic Medicine</li>
                  <li>Human Anatomy</li>
                  <li>Medical Microbiology and Pathology that are required for the first two academic years of the MBBS curriculum.</li>
                </ul>
              </li>
              <li>Faculty and staff: The University has highly qualified professors and faculty who guide students so that in the future students reach their career goals set in the doctorate field.</li>
              <li>Research and technology: Faculty provide research classes with advanced technological equipment in laboratories.</li>
              <li>The departments of Anesthesiology, Dental, Dermatology, Emergency, Medicine, Obstetrics & Gynecology, Ophthalmology, Orthopedics, Otorhinolaryngology, Pediatrics, Psychiatry, Radiology and Surgery undertake teaching of medical students in their respective wards and outpatients’ departments during the rest of the period of four and a half year MBBS program in addition to providing health care services to patients from their departments at NMCTH on all working days.</li>
              <li>A full-fledged clinical health laboratory, radiology, operation theaters and casualty services, ICU, CCU, NICU, Haemodialysis service, ambulance service provide round the clock health care service.</li>
              <li>Echocardiography, Holter, TMT, Gastroendoscopy, Colonoscopy, Bronchoscopy, Ultrasonography and Pulmonary Function Test facilities are available on a regular basis.</li>
              <li>Specific investigations related to Biochemistry, Hematology, Microbiology and Pathology are available at the respective departments that are well manned and equipped for carrying out academic, research and health services.</li>
              <li>Regular microbus services plying on different routes connect NMC with other parts of the city together with taxis which are available for the transport of patients to and from NMCTH from the early dawn to late at night.</li>
              </ul>
            </section>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Nepal Medical College - other services </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Preventive Health Checkup Package</li>
                <li>Chronic Pain Management</li>
                <li>Directly Observed Treatment Short Course (DOTS)</li>
                <li>Medical Social Services Including Psychosocial Counseling & Care</li>
                <li>Endoscopy-Diagnostic and Therapeutic</li>
                <li>Diet Counseling, Medication Counseling Services</li>
                <li>Family Planning Services</li>
                <li>Mortuary services</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Nepal Medical College - Mission</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The mission set by Nepal Medical College (NMC) is to educate human resources for health who are competent and have caring and compassionate behaviour for rendering preventive, promotive, curative, and rehabilitative health care services to the people and at the same time keep themselves updated with the latest trends in medical and health sciences education by self-enquiring minds of biomedical, sociocultural, and epidemiological scientific research.</li>
              </ul>

               <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Nepal Medical College - Vision </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>A self-reliant health institute which imparts medical education including other health sciences education of undergraduate, graduate and postgraduate levels.</li>
                <li>Provide health care services.</li>
                <li>College Teaching hospital as well as from community satellite health care centers.</li>
                <li>Perform biomedical, socio-cultural and epidemiological scientific research.</li>
                <li>Become an institute of Medical Education and Health Sciences Education, which should ultimately be upgraded into a deemed Technical University of Medical and Health Sciences of international repute.</li>
              </ul>  

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Nepal Medical College – General Medicine </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>General Medicine serves as the foundational pillar of healthcare systems, encompassing a broad spectrum of medical care for patients of all ages and backgrounds.</li>
                <li>Staffed by experienced internists, general practitioners, nurses and allied health professionals, the department focuses on the prevention, diagnosis, and management of a wide range of acute and chronic medical conditions.</li>
                <li>From routine health screenings and vaccinations to the management of complex illnesses such as diabetes, heart disease and respiratory disorders, General Medicine provides comprehensive primary and specialized care.</li>
                <li>Through thorough physical examinations, diagnostic tests and personalized treatment plans, the department aims to address the diverse healthcare needs of patients while promoting overall wellness and disease prevention.</li>
              </ul>             
            </section>

            {/* Why chose section */}
          <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] text-black gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                            <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                            <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose Nepal Medial College?</h3>
                            <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                               <li>Nepal Medical College (NMC), Kathmandu University holds a premier position within Nepal’s Medical Environment.</li>
<li>The most recent medical institution in Nepal is Nepal Medical College (NMC).</li>
<li>Students become part of our extensive community of scholars, clinicians and stakeholders, who provide a world class medical education.</li>
<li>Expert faculty with years of experience in medical education.</li>
<li>Commitment to evidence-based teaching methodologies.</li>
<li>State-of-the-art resources and technology for medical training.</li>
<li>A focus on continuous professional development for educators and students alike.</li>
<li>Nepal Medical College is one of the best colleges for students who wish to study MBBS Abroad. It is a newly established medical college famous for its world-class medical education for foreign country students.</li>
<li>Accommodation and food: On campus facility. Separate boys & girls’ hostel with appropriate security.</li>

                            </ul>
                           
                            </div>  
                            <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
                        </div>

            {/* At a galance  */}
           <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value}/>

          

           

        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />

                 {/* Mission and Faculty*/}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Students Life at Nepal Medical College </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>700 bedded hospital</li>
                <li>1500 daily OPD</li>
                <li>More than 200 doctors</li>
                <li>World class infrastructure</li>
                <li>Academic building, Hospital and hostels are located just within 5 minutes walking distance.</li>
                <li>Well-maintained classrooms, sanitization, sports grounds, hostels, etc. are available in the University for the students.</li>

              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left"> Nepal Medical College - hostel</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Hostel facilities are mandatory for students, especially those studying away from home.</li>
                <li><strong>Acco`mmodation:</strong> The hostel typically provides rooms for students to stay in. Depending on availability and preference, rooms may be:
                  <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  text-left md:text-regularText md:text-justify">
                    <li>Single occupancy,</li>
                    <li>Double occupancy, or</li>
                    <li>Dormitory-style with multiple beds in one room.</li>
                  </ul>
                </li>
                <li><strong>Security:</strong> Security is a paramount concern. Most hostels have security measures in place, such as security guards, CCTV cameras, and restricted access entry systems, to ensure the safety of students and their belongings.</li>
                <li><strong>Basic Amenities:</strong> Rooms are usually furnished with basic amenities such as beds, study tables, chairs, and storage space for personal belongings.</li>
                <li><strong>Bathroom Facilities:</strong> Hostels have shared bathroom facilities with toilets, showers, and sinks. Some hostels may offer attached bathrooms in certain rooms.</li>
                <li><strong>Dining Facilities:</strong> Hostels have dining facilities where students can have their meals.</li>
                <li><strong>Laundry Facilities:</strong> Hostels provide laundry facilities with external vendors for laundry services.</li>
                <li><strong>Inte`rnet and Wi-Fi:</strong> Access to the internet is crucial for students. Most hostels offer Wi-Fi connectivity for students to access educational resources and stay connected with friends and family.</li>

              </ul>

              <h3 className="text-h6TextPhone leading-[120%]   md:text-54Text  text-left">Nepal Medical College - Transportation</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Transportation facilities for colleges are essential for ensuring accessibility, convenience, and safety for students, faculty, and staff.</li>
                <li>It is an integral component of college campuses, supporting accessibility, convenience, safety, and sustainability for the college community. Nepal Medical College has a well-integrated transportation system.</li>

              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Nepal Medical College - Library</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The library at Nepal Medical College teaching hospital stands as a vital hub for medical professionals and students alike, offering a wealth of resources tailored to the specialized fields of MBBS, Nursing, MIT, and BDS.</li>
                <li>It is stocked with an extensive collection of textbooks, journals, and research papers, catering to the diverse needs of medical students pursuing their Bachelor of Medicine, Bachelor of Surgery (MBBS) degrees. From foundational anatomy and physiology texts to cutting-edge research in specialized medical fields, the shelves brim with resources to support every stage of their academic journey.</li>
                <li>NMC library is equipped with digital databases and online subscriptions, accessing the latest advancements in medical science, empowering students to stay abreast of emerging trends and breakthroughs. Beyond its role as a repository of knowledge, the library of NMC serves as a collaborative space for study groups, research endeavors, and academic discourse.</li>
                <li>The library at Nepal Medical College & teaching hospital embodies the spirit of academic excellence and lifelong learning, empowering future healthcare professionals to embrace the complexities of modern medicine with curiosity, compassion, and competence.</li>

              </ul> 
      
            </section>
                
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />





        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Nepal Medical College Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify '> Students who meet the eligibility criteria can follow some easy steps to complete the admission process at B & C Medical College. </p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>Submission of all relevant documents</li>
                    <li>Fill out application form.</li>
                    <li>Document verification.</li>
                    <li>Get an Admission Letter from the University.</li>
                    <li>Pay admission fees.</li>
                    <li>Submission of passport and other documents required.</li>

                </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Required Documents for Nepal Medical College</h3>
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
                    <li> <TransitionLink href='b&c-medical-college'>B&C Medical College</TransitionLink></li>
                                       <li><TransitionLink href='kathmandu-medical-college'>Kathmandu Medical College</TransitionLink></li>
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
