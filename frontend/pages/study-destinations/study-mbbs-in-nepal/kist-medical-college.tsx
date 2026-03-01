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
      text: "Country Rank",
      label: "13",
    },
  ];

import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink';
import Head from 'next/head';
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'
import CollegeOverviewTable from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeOverviewTable';
import { CollegeDataOverviewInterface } from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeDataOverviewInterface';
const NewPage = () => {
  const collegeDataOverview: {
    label: string;
    value: CollegeDataOverviewInterface[];
  } = {
    label: "KIST Medical College at a glance",
    value: [
      { label: "College name", value: "KIST Medical College" },
      { label: "University affiliation", value: "TU" },
      { label: "Recognition", value: "WHO, NMC" },
      { label: "Year of Establishment", value: "2006" },
      { label: "Medium of Instruction", value: "English" },
      { label: "Course Duration", value: "4.5 years" },
      { label: "Internship Duration", value: "1 year" },
      { label: "Country Rank", value: "13th" },
      { label: "NEET", value: "Mandatory" },
      { label: "Intake", value: "September" },
      { label: "Location", value: "Kathmandu, Nepal" },
      { 
        label: "Official Website", 
        value: "https://kistmedicalcollege.edu.np" 
      }
    ]
  };

  return (
    <>
    <Head>
    <title>KIST Medical College Kathmandu – MBBS Program, Fees & Hostel </title>  
<meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
<meta name="description" content="Apply to KIST Medical College Kathmandu. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kist-medical-college." />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
<meta name="DC.title" content="MBBS in Nepal" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Dwarka" />
<meta name="geo.position" content="22.351115;78.667743" />
<meta name="ICBM" content="22.351115, 78.667743" />
<meta property="og:type" content="website"/>
  <meta property="og:title" content="KIST Medical College Kathmandu – MBBS Program, Fees & Hostel"/> 
<meta property="og:description" content="Apply to KIST Medical College Kathmandu. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kist-medical-college."/>
<meta property="og:url" content="https://www.edurizon.in/"/>
<meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:site" content="@edurizon"/>
<meta name="twitter:title" content="KIST Medical College Kathmandu – MBBS Program, Fees & HostelGuide"/>
<meta name="twitter:description" content="Apply to KIST Medical College Kathmandu. Get MBBS course details, fee breakdown and hostel info at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kist-medical-college."/>
<meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:image:alt" content="MBBS in Nepal"/>
<link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kist-medical-college"/>
<link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/kist-medical-college" hrefLang="en-in"/>


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
         <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw]  md:pt-[8vw] ">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/kist-medical-college.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>KIST Medical College</h2>
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
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College – Establishment </h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                KIST Medical College Pvt. Ltd was established in the year 2006. It is located in Mahalaxmi Municipality-1, Imadol, Lalitpur. The College is run by the Board of Directors and its Executive Committee. It has its own full-fledged teaching hospital and a separate dental hospital. 
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College – Affiliation  </h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                KIST Medical College has been affiliated with the Institute of Medicine, Tribhuvan University
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College – Vision  </h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                
                <li>A center of excellence in holistic healthcare medical education, and research; all sectors working together for affordable and quality health system which is accessible to all."</li>
                <li>To provide accessible, high-quality care for non-urgent to life-threatening illnesses and injuries.</li>
                <li>To provide prompt, holistic care appropriate to the age and acuity, regardless of the nature of their visit.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">KIST Medical College - mission</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>To promote specialized and affordable healthcare for the community.</li>
                <li>To develop as a favored learning site that trains skilled and competent healthcare professional</li>
                <li>Committed to delivering quality patient care</li>
                <li>To actively engage with advancement in health innovations, for fulfillment of community healthcare   needs and promoting public health awareness.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">KIST Medical College - values</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Improving patient safety & health care services.</li>
                <li>Providing quality and affordable healthcare for all</li>
                <li>Increasing patient satisfaction. Enhancing patient's experiences and overall satisfaction with health care services</li>
                <li>Retaining skilled and trained manpower</li>
                <li>Expanding hospital scope & services</li>
                <li>Fostering national & international collaboration and teamwork.</li>
              </ul> 
  
            </section>

        {/* Mission, Excellence, Engagement and Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">KIST Medical College – Teaching Hospital</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>KIST Medical College & Teaching Hospital is a premiere, well-equipped institution, and dedicated to the education and health care of its patients as well as those in the surrounding areas. </li>
                    <li>A state-of-the-art equipment and facilities allow for the best possible treatment in KIST Medical College.</li>
                    <li>It is proud to serve as a beacon of hope to those who seek KIST Medical College & Teaching Hospital. </li>
                    <li>The campus is carefully designed, which adorns stunning views of the beautiful campus greenery, is close to some of the most prestigious medical facilities in the area. KIST Medical College & Teaching Hospital actively promotes and preserves the highest values and ethics in educating medical professionals of global standards.</li>
              </ul>     
            </section>
              {/* Why chose section */}
              <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row text-black  px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                  <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                  <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose KIST Medial College?</h3>
                  <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                    <li>KIST Medical College & Teaching Hospital is in Imadol, Lalitpur, Kathmandu, 300 Mtr from the Ring Road.</li>
                      <li>It is the first private medical college under Government University in Kathmandu Valley.</li>
                      <li>550 bedded multi-Specialty hospital equipped with State-of-the-Art infrastructure and every modern facility.</li>
                      <li>Focuses on modern teaching pedagogy and facilitates its students with routine and updated guest visits, practical and project works, field visits and research-based studies.</li>
                      <li>The college has a team of dedicated and qualified teaching and non-teaching staff with years of experience and practice in their relevant field of study and is among the best in the industry.</li>
                      <li>Well-equipped lecture halls, seminar rooms and basic medical science practical laboratories as per the norms of Nepal Medical Council (NMC).</li>
                      <li>Excellent infrastructure which provides facilities like air-conditioned library, clean hostels, hygienic canteen etc.</li>
                      <li>Separate hostel for boys and girls. Well-furnished spacious rooms.</li>
                  </ul>
                
                  </div>  
                  <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
              </div>

            {/* At a galance  */}
            <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value}/> 


         <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College - Library </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Library plays a crucial role in academic institutions.</li>
                <li>Library is located centrally at the basic science (IBMS) block of the college with seating capacity up to 100 students.</li>
                <li>There is a wide collection of latest edition medical textbooks, reference books, and journals, adequate for the students and faculties of the college.</li>
              </ul>

            
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College - Canteen</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>As part of the continuous endeavor to meet the educational and social needs of all students, KIST Medical College has hygienic canteens.</li>
                  <li>Canteens provide hygienic food with variety at very affordable rates.</li>
                  <li>Students get a variety of fast foods, vegetarian, and non-vegetarian food items within their budget.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College - Hostels</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>KIST Medical College has provided hostel accommodation with well-furnished spacious rooms to its students.</li>
                <li>Separate hostels for boys and girls are available.</li>
                <li>All facilities have been provided to the students for social integration, extra-curricular activities and a peaceful study atmosphere.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College - Internet & E-Library</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]   mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Wi-Fi is available at the library to help students in research and project works.</li>
                <li>Students and faculties have access to internet and e-library.</li>
                <li>There is an adequate collection of e-books available and access to several online journals.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College - Auditorium </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>A huge and beautiful auditorium with the capacity to accommodate about 200 persons.</li>
                <li>The auditorium is used for cultural as well as scientific programs like seminars, conferences, workshops, etc.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">24-Hours Emergency </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]   mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>KIST Teaching Hospital has been providing 24-hour emergency services since the year of its establishment.</li>
                <li>The hospital takes care of any emergency conditions irrespective of age and acuity of illnesses.</li>
                <li>The hospital understands that being inside an emergency department is stressful for patients and strives to provide the best possible care for all patients with a holistic approach.</li>
              </ul> 
                
              <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">Clinical Laboratory Services</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  Histopathology Services, Thyroid Function Tests, Para-thyroid hormone test, Liver functions test, Iron profile, Coagulation assay, Cardiac biomarkers (Fully Automated Biochemistry Analyzer is in use).
              </ul> 

            <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Radiology services </h3>
            <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]   mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
              CT-Scan, radiology including Digital X-Ray Services, Ultrasound and Color Doppler, Special Tests
            </ul> 

            <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Other Services</h3>
            <ul className="text-smallTextPhone list-disc  ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
              <li>Preventive Health Checkup Package</li>
              <li>Chronic Pain Management</li>
              <li>Directly Observed Treatment Short Course (DOTS)</li>
              <li>Medical Social Services Including Psychosocial Counseling & Care</li>
              <li>Endoscopy - Diagnostic and Therapeutic</li>
              <li>Diet Counseling, Medication Counseling Services</li>
              <li>Family Planning Services</li>
              <li>Mortuary Services</li>
            </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">KIST Medical College – services available </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] grid grid-cols-2 mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Emergency</li>
                    <li>OPD Services</li>
                    <li>Clinical Laboratory Services</li>
                    <li>Dialysis Services</li>
                    <li>DOTS Clinic</li>
                    <li>Preventive Health Packages</li>
                    <li>Organ Transplant</li>
                    <li>Burn/Plastic Surgery</li>
                    <li>Cardiac Services</li>
                    <li>Dental OPD Services</li>
                    <li>Cabin/Deluxe/Suite</li>
                    <li>Hospital Pharmacy</li>
                    <li>Ambulance</li>
                    <li>Head & Spine Surgery</li>
                    <li>Oncology Services</li>
                </ul>  
           
                <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">KIST Medical College – Recognition</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>It is recognized by international organizations such as WHO and NMC, which attracts international students from all around the world to study MBBS at KIST Medical College.</li>
                  <li>Recognized by Nepal Medical Council (NMC) and affiliated to Tribhuvan University (IOM).</li>
                </ul>
                 <h3 className="text-h6TextPhone leading-[120%]   md:text-h5Text  text-left">KIST Medical College Location</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  KIST Medical College & Teaching Hospital is in Imadol, Lalitpur, Kathmandu, 300 Mtr away from Ring Road.
                </ul> 

            </section>

        

              {/* <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">Nobel Medical College - Physical infrastructure & facilities</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Well-equipped lecture theaters/halls, adequate number of modern teaching learning equipment, tutorial halls, demo rooms, laboratories, seminar halls, etc.</li>
<li>Modern library with adequate number of books, internet facility.</li>
<li>Fully functional modern skill lab.</li>
<li>Functional Medical Education Department, Institutional Review Committee.</li>
<li>Hostel facilities for students, mess/canteen facilities.</li>

              </ul>

              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">Benefits of studying MBBS in Nepal</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Well-equipped lecture theaters/halls, adequate number of modern teaching learning equipment, tutorial halls, demo rooms, laboratories, seminar halls, etc.</li>
<li>Modern library with adequate number of books, internet facility.</li>
<li>Fully functional modern skill lab.</li>
<li>Functional Medical Education Department, Institutional Review Committee.</li>
<li>Hostel facilities for students, mess/canteen facilities.</li>


              </ul>

              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">MBBS in Nepal at Nobel Medical College</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Nobel Medical College is recognized by the NMC and World Health Organization.</li>
                    <li>The MBBS course at Nobel Medical College is of 5.5 years.</li>
                    <li>1 year internship is compulsory.</li>
                    <li>The medium of instruction for all foreign students at Nobel Medical College is English.</li>
                    <li>The duration of an internship at Nobel Medical College is one year.</li>
                    <li>Nobel Medical College is located in Biratnagar city.</li>
              </ul>         

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left"> Nobel Medical College – Recognition </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
               <li>Nobel Medical College is listed in the International Medical Education Directory (IMED) and World Directory of Medical Schools (WDOMS).</li>
                <li>Nobel Medical College is recognized by international organizations such as WHO and NMC, which attracts international students from all around the world to study MBBS in Nepal at Nobel Medical College.</li>
              </ul>

              <h3 className="text-h5TextPhone leading-[120%]  md:text-h3Text text-left">Nobel Medical College location </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Biratnagar has been established into a Metropolitan City and developed as a regional hub for medical tourism, with a focus on providing world-class facilities and highly trained healthcare workers.</li>
                    <li>Strong links with industry and excellent research capacity have also helped turn Biratnagar into a leading Centre for referrals from different sections of Nepal.</li>
                    <li>Nobel Medical College serves a diverse local community where students will develop clinical skills and knowledge.</li>
                    <li>Many curricular and extra-curricular developments are underway to support learning in this area.</li>
                    <li>Nobel Medical College is located just 5 to 10 minutes away from the Biratnagar Airport.</li>
                    <li>Indian students can also go by their own vehicle via Jogbani border. This border is just 7-8 km away from Nobel Medical College. There are multiple other options for Indian students to reach Biratnagar.</li>
              </ul>



            </section> */}

        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
                
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />





        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">KIST Medical College - Admission Process</h3>
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
                                        <li><TransitionLink href='birat-medical-college'>Birat Medical College</TransitionLink></li>
                                        <li><TransitionLink href='college-of-medical-science'>College of Medical Science</TransitionLink></li>
                                        <li><TransitionLink href='lumbini-medical-college'>Lumbini Medical College</TransitionLink></li>
                                        <li><TransitionLink href='devdaha-medical-college'>Devdaha Medical College</TransitionLink></li>
                                        <li><TransitionLink href='chitwan-medical-college'>Chitwan Medical College</TransitionLink></li>
                </ul>  
            </section>

            

    </div></>
  )
}

export default NewPage
