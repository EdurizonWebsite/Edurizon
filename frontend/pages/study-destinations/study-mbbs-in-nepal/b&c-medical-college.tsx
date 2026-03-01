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
        ["Last date of application","In the month of October"],
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
            "Fees to be deposited directly in the account of Medical College after getting admission letter, as mentioned in the admission letter.","Students must go through an entrance test conducted by MEC.",
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
      label: "Jhapa, Nepal",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "EUROPE & CENTRAL ASIAN RANK - 36",
    },  
  ];

  const collegeDataOverview: {
    label: string;
    value: CollegeDataOverviewInterface[];
  }= 
    {
      label: "B & C Medical College at a glance",
      value: [
        { label: "College name", value: "B & C Medical College" },
        { label: "Year of establishment", value: "2011" },
        { label: "University affiliation", value: "KU" },
        { label: "Recognition", value: "WHO, NMC" },
        { label: "Medium of Instruction", value: "English" },
        { label: "Course Duration", value: "4.5 years" },
        { label: "Internship Duration", value: "1 year" },
        { label: "NEET", value: "Mandatory" },
        { label: "Intake", value: "September" },
        { label: "Location", value: "Jhapa, Nepal" },
        { label: "Bedded Hospital", value: "750" },
        { label: "Daily OPD", value: "1500" }
      ]
    }
  


import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink';
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'
import { CollegeDataOverviewInterface } from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeDataOverviewInterface'
import CollegeOverviewTable from '@/components/studyDestinationComponents/mbbs-in-nepal/collegeOverviewTable'

const NewPage = () => {
  return (
    <>
      <Head>
        <title>B&C Medical College Nepal – MBBS Fees, Admission & Ranking</title>
        <meta name="keyword" content="mbbs in nepal, nepal mbbs fees, mbbs in nepal without neet, mbbs in nepal for indian students, Nepal Medical College, Nepal Medical College fees, MBBS in Nepal for Indian students fees, B&C Medical college, Kist medical College Kathmandu, Devdah medical College, Lumbini medical College, nobel medical college nepal, Kathmandu Medical College, Birat Medical College, Devdaha Medical College, Manipal college of medical science, college of medical science." />
        <meta name="description" content="Discover B&C Medical College MBBS fee structure, admission details, and rankings for Indian students at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/b&c-medical-college." />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS in Nepal" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="B&C Medical College Nepal – MBBS Fees, Admission & Ranking" />
        <meta property="og:description" content="Discover B&C Medical College MBBS fee structure, admission details, and rankings for Indian students at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/b&c-medical-college." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="B&C Medical College Nepal – MBBS Fees, Admission & Ranking" />
        <meta name="twitter:description" content="Discover B&C Medical College MBBS fee structure, admission details, and rankings for Indian students at https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/b&c-medical-college." />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Nepal" />
        <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/b&c-medical-college"/>
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-nepal/b&c-medical-college" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-nepal/bc-medical-college.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>B&C Medical College</h2>
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
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] md:text-h3Text md:text-center text-left">Mbbs From B & C Medical College</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>B & C Medical College Teaching Hospital and Research Center Pvt.Ltd. is a premier medical institution with a multispecialty hospital set-up.</li>
                <li>B & C Medical College has been affiliated to Kathmandu University.</li>
                <li>It was established by a social worker and activist Hon’ble Shri Durga Prasai, with Dr. Ram Babu Giri and Ms. Indira Giri, who envisage excellence in international standard medical education, research, and patient care, striving to create a learning environment that inspires future healthcare leaders and contributes to the advancement of medical knowledge and community health in Nepal.</li>
                <li>We are dedicated in shaping the future of healthcare by catering and nurturing to the next generation of medical professionals from Nepal and abroad.</li>
                <li>B & C Medical College is situated in the serene and dynamic environment of eastern Nepal, near Indian border at Siliguri (WB) focusing on a holistic education that combines rigorous academics, practical training, and a commitment to community service. B&C Medical College is the first choice for the students who want to Study MBBS Abroad.</li>
                <li>B & C Medical College is recognized by the Nepal Medical Council (NMC), Ministry of Education, Science & Technology, and Ministry of Health & Population, B & C Medical College Teaching Hospital and Research Center Pvt.Ltd. has constantly maintained its academic standards as per the requirements of other Medical Councils and Universities across the globe. B & C Medical college is a preferred choice for aspiring students who want to study MBBS in Nepal.</li>
                <li>B & C Medical College Nepal operates under the core values encapsulated in its acronym, "CARE" - Compassionate Care, Academic Excellence, Research and Innovation, Engagement and Empowerment.</li>
                <li>B&C was the first Acute Tertiary care hospital in Eastern Nepal which has started its functioning in the year 2012. The major focus is to establish and promote collaborative partnerships between individuals served, staff, and families to maintain an environment where services and treatment are provided with dignity and respect to all. Services include consultation, surgery, angiography, and angioplasty.</li>
                <li>With a mission to be recognized as the leading healthcare provider not only in the region but also to provide quality health service to the sub-continent, B & C fosters, promotes, and practices high-quality, ethical, evidence-based medicine. It offers multidisciplinary Healthcare Services under one roof, initiated by private investment, adhering to the regulations of the Health Ministry of the Nepal Government.</li>
              </ul>              
            </section>

        {/* Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw]  md:text-h3Text md:text-center text-left">B & C Medical College Teaching Hospital</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>B & C Medical College Teaching Hospital (P) Ltd., MBBS in Nepal, an affiliated to Kathmandu University.</li>
                <li>B & C Medical College is situated in Jhapa, Nepal which is one of the major academic hubs in the eastern part of Nepal.</li>
                <li>The key objective of B & C Medical College, is to impart international standard medical education to the meritorious students, both Nepal as well as abroad.</li>
                <li>B & C Medical College has been recognized by the Nepal Medical Council (NMC), Ministry of Education, Nepal and Ministry of Health, Nepal.</li>
                <li>Medical Education Commission, Nepal has constantly maintained its academic standards as per the requirements of other medical councils and Universities across the globe.</li>
                <li>B & C Medical College is equipped with internationally renowned faculties who are professionally committed in the medical field. The selfless devotion and genuine contribution of B & C Medical College have always been supportive towards getting recognition of Medical Councils in the world.</li>
                <li>B & C Medical College is dedicated to enhancing the quality of medical education through innovative teaching methodologies, faculty development, and research in medical education. The goal of B & C Medical College is to equip healthcare professionals with the knowledge, skills and ethical values necessary for excellence in patient care and medical research.</li>
                </ul>              
            </section>

        {/* Vision */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw]  md:text-h3Text md:text-center text-left">B & C Medical College - Vision</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>To set healthcare and health education standards to international standards that are cost-effective for national and international citizens and evolve as an institute that serves excellence in clinical care, quality, and commitment through compassionate, skilled, and innovative healthcare professionals who can meet global health challenges.</li>
                </ul>              
            </section>
        
        {/* Mission */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw]  md:text-h3Text md:text-center text-left">B & C Medical College - Mission</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>To enhance teaching and learning methodologies in medical education.</li>
                <li>To develop and implement evidence-based educational strategies.</li>
                <li>To support faculty members in curriculum design and professional development.</li>
                <li>To foster research in health professions education for continuous improvement.</li>
                </ul>              
            </section>

        {/* Mission, Excellence, Engagement and Teaching Hospital */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Compassionate Care, Our Hospital's Mission is to CARE!</h3>
              <p className="text-smallTextPhone text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw] ">B & C is committed to providing patient-centered, compassionate care. Our goal is to treat every patient with dignity, respect, and empathy, ensuring that their physical, emotional, and psychological needs are met.</p>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Academic Excellence</h3>
              <p className="text-smallTextPhone text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw] ">B & C strive for academic excellence by offering a rigorous and comprehensive medical education. Our curriculum is designed to foster critical thinking, innovation, and lifelong learning among our students, preparing them to be leaders in healthcare.</p>                   

                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Research and Innovation </h3>
            <p className="text-smallTextPhone text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw] ">B & C is dedicated to advancing medical knowledge through cutting-edge research and innovation. By supporting pioneering research projects and encouraging a spirit of inquiry, B & C aims to contribute to the global body of medical science and improve patient outcomes.</p>

               <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Engagement and Empowerment</h3>
              <p className="text-smallTextPhone text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw] ">B & C believe in empowering our students, faculty, and the community through engagement and collaboration. B & C actively participate in community outreach programs, health education initiatives, and partnerships that enhance public health and promote wellness.</p>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">B & C Medical College – Teaching Hospital</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify ">
                <li>The hospital currently has 750 beds of its own at full function.</li>
                <li>It serves the patients from various communities of Nepal and adjoining West Bengal & Bihar state of India. It has several super Specialty Services with eminent Super Specialized Doctors.</li>
                <li>The hospital of B & C Medical College is a tertiary medical service Centre. It offers specialty and super specialty services, including state-of-the art diagnostic facilities to ensure the delivery of holistic patient care.</li>
                <li>The hospital is staffed with dedicated and highly competent members of the medical fraternity along with trained personnel who work with sophisticated equipment.</li>
                <li>B & C Medical College offers graduate and diploma courses recognized by the Kathmandu University.</li>
                <li>Faculties of the institution hold eminent positions in various fields associated with medicine and health care, nationally and internationally.</li>
                </ul>  
            </section>

           {/* Notable Medical  */}
           <CollegeOverviewTable title={collegeDataOverview.label} data={collegeDataOverview.value} />

            

            {/* Infrastructure, Benefits and Recognition */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">B & C Medical College - Physical infrastructure & facilities</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                <li>Well-equipped lecture theaters/halls, adequate number of modern teaching learning equipment, tutorial halls, demo rooms, laboratories, seminar halls, etc.</li>
                <li>Modern library with adequate number of books, internet facility.</li>
                <li>Fully functional modern skill lab.</li>
                <li>Functional Medical Education Department, Institutional Review Committee.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Benefits of Studying MBBS in Nepal</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>The culture of Nepal is majorly Hindu and Buddhist.</li>
                    <li>This fact, coupled with Nepal’s proximity to India makes it a desirable destination for MBBS in Nepal.</li>
                    <li>Food habits of Nepalese and Indians are very similar, making it much more comfortable for Indian students to study MBBS in Nepal.</li>
                    <li>The language of instruction in Nepal is not a barrier as the teaching is in either English or Hindi.</li>
                    <li>No need of visa. One of the most noticeable features of studying in Nepal is that students need not apply for a visa. Indian nationals can travel to Nepal without any Visa.</li>
                </ul>
               
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">B & C Medical College – Recognition</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>B & C Medical College is listed in the International Medical Education Directory (IMED) and World Directory of Medical Schools (WDOMS).</li>
                <li>B & C Medical College is recognized by the international organizations such as WHO, NMC which attracts international students from all around the world to Study MBBS in Nepal at Nobel Medical College.</li>
                </ul>  
            </section>

            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] gap-[5vw] mb-[10vw] md:mb-[4vw] items-center text-black bg-linenChosen">
                            <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                            <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose B & C Medial College?</h3>
                            <div>
                            <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                                <li>B & C Medical College (NMC), Kathmandu University holds a premier position within the Nepal’s Medical Environment.</li>
                                <li>Students become part of extensive community of scholars, clinicians and stakeholders, who provide a world class medical education.</li>
                                <li>Commitment to evidence-based teaching methodologies.</li>
                                <li>State-of-the-art resources and technology for medical training.</li>
                                <li>A focus on continuous professional development for educators and students alike.</li>
                                <li>B & C Medical College is one of the best colleges for students who wish to study MBBS Abroad.</li>
                                <li>Faculty and staff: The University has highly qualified professors and faculty who guide students so that in the future students reach their career goals set in the doctorate field.</li>
                                <li>Research and technology: Faculty provide research classes with advanced technological equipment in laboratories.</li>
                            </ul>
                            </div>
                           
                            </div>  
                            <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
                        </div>
            
            
            {/* Location */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw]  md:text-h3Text md:text-center text-left">B & C Medical College - Location</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>B & C Medical Collete is located just 30-40 minutes way from the Bagdogra Airport (Siliguri, India). </li>
                <li>Indian students can also go by their own vehicle via Siliguri. This border is just 30-40 mins away from B & C Medical College. There are other multiple options for Indian students to reach Biratnagar</li>
                </ul>              
            </section>
        

        {/* Eligibility Criteria */}
                <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            {/* Academic Calander */}
                <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />


        {/* Document and Popular Colleges */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">B & C Medical College Admission Process</h3>
                <p className='text-smallTextPhone text-left md:text-regularText md:text-justify '> Students who meet the eligibility criteria can follow some easy steps to complete the admission process at B & C Medical College. </p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>Submission of all relevant documents</li>
                    <li>Fill out application form.</li>
                    <li>Document verification.</li>
                    <li>Get an Admission Letter from the University.</li>
                    <li>Pay admission fees.</li>
                    <li>Submission of passport and other documents required.</li>

                </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Required Documents for B & C Medical College</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify mb-[4vw] md:mb-[1vw]">
                    <li>10th & 12th mark sheet</li>
                    <li>Aadhaar card/voter ID</li>
                    <li>Passport (if ready)</li>
                    <li>Birth certificate</li>
                    <li>Passport-sized photographs</li>
                    <li>Documents should be apostilled by the ministry of external affairs</li>
                    <li>All documents need to be legalized by the Nepali embassy</li>
                </ul>
               
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">Other popular Nepal Medical Colleges for MBBS in Nepal</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify underline">
                   
                    <li> <TransitionLink href='nepal-medical-college'>Nepal Medical College</TransitionLink></li>
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
