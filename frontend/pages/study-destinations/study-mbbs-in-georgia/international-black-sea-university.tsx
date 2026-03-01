import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
import Head from 'next/head'

const academicCalenderData={
    id:"nepal",
    section2:"",
    content:{
        title:"Academic Calendar",
        subTitle:"A glimpse of the important dates an aspirant must keep in mind to get on board IBSU. The information below is not absolute and may vary university-wise.",
        data:[["Events","Dates"],
        ["Admission process","September/October"],
        ["Last date of application","August"],
        ["Commencement of MBBS course","October"]],
    }
}

const eligibilityData={
    id:"nepal",
    section2:"",
    content:{
        title:"Eligibility Criteria",
        subTitle:"Eligibility Criteria for MBBS in IBSU for Indian students",
        data:[["Criteria","Details"],
        ["Academic Qualification",["Class 12 (equivalent) with PCB","Must have passed class 12 with a minimum of 50% with PCB"]],
        ["NEET Qualification",["NEET qualification is mandatory"]],
        ["Age Limit & Other information",["Must be 17 years of age as on December 31st of the admission year"]]],
    }
}

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tuition Fees",
      label: "4800 USD/Year",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "",
      label: "Recognition by WHO, NMC",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Tbilisi, Georgia",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Country Rank",
      label: "5",
    },
  ];

import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import { TransitionLink } from '@/utils/TransitionLink';
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const NewPage = () => {
  return (
    <>
        <Head>
            <title>International Black Sea University Georgia | MBBS & Higher Studies</title>
            <meta name="keyword" content="tbilisi state medical university, tbilisi state medical university georgia, tbilisi medical university, tbilisi state medical university mbbs fees, georgian national university seu, georgian national university, georgian national university seu fee structure, east european university georgia, european university georgia, east european university tbilisi georgia, new vision university georgia, new vision university tbilisi, georgia new vision university, bau international university, bau international university batumi, bau international university batumi fees, Batumi Shota Rustaveli State University, Batumi Shota Rustaveli State Georgia, georgian american university, university of georgia, georgia institute of technology, mbb in georgia, mbbs in georgia for indian students, mbb in georgia fees, top medical universities in georgia." />
            <meta name="description" content="Study MBBS and higher education at International Black Sea University. Affordable education in Georgia with global recognition." />
            <meta name="author" content="edurizon" />
            <meta name="robots" content="index, follow"/>
            <meta name="DC.title" content="MBBS in Georgia" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Dwarka" />
            <meta name="geo.position" content="22.351115;78.667743" />
            <meta name="ICBM" content="22.351115, 78.667743" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Black Sea University Georgia | MBBS & Higher Studies" />
            <meta property="og:description" content="Study MBBS and higher education at International Black Sea University. Affordable education in Georgia with global recognition." />
            <meta property="og:url" content="https://www.edurizon.in/" />
            <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@edurizon" />
            <meta name="twitter:title" content="International Black Sea University Georgia | MBBS & Higher Studies" />
            <meta name="twitter:description" content="Study MBBS and higher education at International Black Sea University. Affordable education in Georgia with global recognition." />
            <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:image:alt" content="MBBS in Georgia" />
            <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/international-black-sea-university"/>
            <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/international-black-sea-university" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-georgia/IBSU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>International Black Sea University</h2>
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
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Establishment of IBSU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The International Black Sea University (IBSU), Georgia was established in the year 1995 in Tbilisi, Georgia and was inaugurated by the second president of Georgia Eduard Shevardndze and the former Prime Minister of Turkey Tansu Ciller in accordance with the degree of the Council of Ministers and the License of opening given by the Ministry of Education, Georgia.</li>
                
                <li>The objective of International Black Sea University to impart training to Georgian and foreign students in scientific, technical and professional fields of study, and of using these studies in the fields of pure and applied research for contributing to the economic and social necessities of Georgia and other countries.</li>
                
                <li>International Black Sea University (IBSU), Georgia is located in the heart of Tbilisi, Georgia.</li>
              </ul> 

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">About International Black Sea University</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>International Black Sea University has been engaged in educational and scientific activities since 1995.</li>
                <li>IBSU is a private university that has earned a strong reputation for its high academic standards & international outlook.</li>
                <li>IBSU offers pathways to medical education through collaborative programs & partnerships with accredited medical institutions in Georgia.</li>
                <li>IBSU is the first university in Georgia which has started imparting in English-language since its inception.</li>
                <li>Currently, IBSU operates 50 bachelor's, master's, and doctoral accredited educational programs.</li>
                <li>06 refereed scientific journals are also published.</li>
                <li>IBSU offers a multicultural, and student-oriented learning environment.</li>
                <li>IBSU has ensured high level of teaching by local and visiting professors from different countries.</li>
                <li>Educational process in IBSU is conducted using modern teaching methods and is based on the latest technologies.</li>
                <li>In terms of student exchange, IBSU cooperates with leading educational institutions of Europe, Asia and America.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU Mission</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                Mission of the International Black Sea University is to offer higher education that is based on the best practices of teaching, learning, and research and to prepare a highly-qualified, competitive generation with democratic values to meet the requirements of the national and international labor market.
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU Vision</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                Vision of the International Black Sea University is to form a high-quality, innovative, international, and contemporary academic and scientific environment where diversity and equity are fundamental, in order to bring local and international recognition to the university.
              </ul>
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU Recognition</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
              International Black Sea University is recognized by the World Health Organization, National Medical Commission, India, FAIMER, WFME etc. 
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU Values</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Academic Freedom –</strong> creates a free academic environment, promotes research, shares academic experience, and implements it in teaching.</li>
                <li><strong>Equity and Diversity –</strong> respects human rights and values, while admiring the diversity of ethnic, cultural, religious, and international consciousness, creates an equitable environment; offers various educational programs in English and Georgian languages as well as the possibility of learning foreign languages.</li>
                <li><strong>Inclusion –</strong> respects each person as an individual with unique abilities and values, creates an inclusive study environment for diverse learner needs, where the education is equally available to everyone without any discrimination.</li>
                <li><strong>Innovation –</strong> considering local and international standards, is focused on introducing educational and scientific innovations, modern methods, new approaches and internationalization.</li>
                <li><strong>Transparency –</strong> effectively manages by creating a just and transparent environment for both students and staff, focuses on team-building, promotes stakeholder engagement, awareness, and mutual respect, preserves the norms of ethics and integrity.</li>
                <li><strong>Social Responsibility –</strong> respects democratic and ethical principles, contributes to the development of civil society and the country, while considering social responsibility, lifelong learning and civic needs.</li>
                <li><strong>Sustainability –</strong> ensures the sustainable, stable, and efficient function of the institution, considers sustainable development goals.</li>
              </ul>
            </section>

            {/* About Tbilisi City */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%]   md:text-h3Text text-left">About Tbilisi City</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                  <li>Tbilisi City is the Mega City which is Georgia's most pleasant city.</li>
                  <li>Tbilisi is the capital and the largest city of Georgia.</li>
                  <li>A well-known urbanized mega city.</li>
                  <li>Tbilisi is the first destination of tourists & students to visit.</li>
                  <li>Tbilisi city with a panoramic view that melt hearts with its urbanized streets, modern Infrastructure, leafy squares, clean lakes, and green valleys.</li>
                  <li>According to Ministry of Education & Science, almost all of foreign students' study in Georgia, 95% in Tbilisi, 2.2% in Kutaisi and 1.8% in Batumi respectively.</li>
              </ul>     
            </section>
        

              {/* Why choose section */}
              <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                  <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                  <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose IBSU for MBBS?</h3>
                  <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                    <li>A leading and most demanded Medical University</li>
                    <li>Best Medical University</li>
                    <li>Public Intensive Research Based Organization</li>
                    <li>Robust, research-based course and curriculum is followed to inculcate the Leaders for tomorrow</li>
                    <li>IBSU - Students are highly recommended by the top most Hospitals in Europe</li>
                    <li>Focuses on holistic development of the student by providing Learning Opportunities, Community Support, Safety, Social Life and Connection to Nature</li>
                    <li>IBSU is one of the research-intensive universities in Tbilisi, Georgia</li>
                    <li>Worldwide recognition</li>
                    <li>European Faculty</li>
                    <li>Affordable tuition Fees</li>
                    <li>European and American Standard Study Programs</li>
                  </ul>
                  </div>  
                  <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690} alt="georgia3"/>
              </div>
              <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[.5vw]   md:text-h3Text text-center">Image Gallery</h3>
              <p className='mx-auto text-smallTextPhone md:text-regularText font--medium pb-[2vw] md:pb-[1vw] text-center'>Our Director With Nino ma’am head of International Department IBSU</p>

              <div className='relative md:flex gap-[4vw] md:gap-[1vw] justify-center'>
                <Image src={"/assets/Images/mbbs-in-georgia/isbu1.jpg"} className='w-full md:w-[30vw] h-auto' width={1080} height={1080} alt='isbu1'/>
                <Image src={"/assets/Images/mbbs-in-georgia/isbu2.jpg"} className='w-full md:w-[30vw] h-auto' width={1080} height={1080} alt='isbu1'/>
              </div>
            </section>

            {/* At a glance  */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">IBSU at a glance </h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2 ">
                <li className='font-bold'>o College name</li>
                <li>International Black Sea University</li>
                <li className='font-bold'>o Recognition</li>
                <li>WHO, NMC, FAIMER, WFME</li>
                <li className='font-bold'>o Year of Establishment</li>
                <li>1995</li>
                <li className='font-bold'>o Medium of Instruction</li>
                <li>English</li>
                <li className='font-bold'>o Course Duration</li>
                <li>5 years</li>
                <li className='font-bold'>o Internship Duration</li>
                <li>1 year</li>
                <li className='font-bold'>o Country Rank</li>
                <li>5th</li>
                <li className='font-bold'>o NEET</li>
                <li>Mandatory</li>                
                <li className='font-bold'>o Intake</li>
                <li>September/October</li>
                <li className='font-bold'>o Location</li>
                <li>Tbilisi, Georgia</li>
                </ul>  
            </section>

         <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">

                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU Fees for Indian students </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
              Affordable Tuition Fees: Cost of medical education in IBSU is comparatively lower without compromising on quality.
              <li>Tuition Fees: 4800 USD/Year</li>
              <li>Hostel Fees: 3000 USD/Year</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU - Library</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                IBSU has a well-equipped library with a wide range of books, journals, and other resources. The library is open 24/7 and provides students with a conducive environment to study.
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Library Features</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>High-Tech laboratories</li>
                <li>Student reading rooms and lounge</li>
                <li>Modern Library</li>
                <li>Wide holdings of library books</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Ultra-modern hostel & Indian food</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Fully equipped and well-furnished ultra-modern air-conditioned hostels</li>
                <li>Indian Cooks are in the Hostels to prepare delicious Indian food</li>
                <li>Edurizon try to serve the best food for our students</li>
                <li>We make sure students are always satisfied with food</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Safety & Security</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>24/7 basis security cover</li>
                <li>Proper CCTV have been placed at all appropriate locations</li>
                <li>Separate hostels for Boys and Girls</li>
                <li>Relaxing and peaceful stay that is conducive to learning is assured</li>
                <li>Numerous Indian restaurants are there in the market where students can enjoy Indian food</li>
                <li>Students are very well taken-care of during their entire stay in IBSU</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">MBBS Program in IBSU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The duration of MBBS programme in IBSU is for 6 years including 1 year internship</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Career Prospects</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                Graduates of IBSU are eligible to appear for global licensing exams like:
              </ul>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>USMLE (USA)</li>
                <li>PLAB (UK)</li>
                <li>Next (India)</li>
                <li>AMC (Australia)</li>
              </ul>

              
            </section>

            <ListedTable {...academicCalenderData}/>
            <ListedTable {...eligibilityData}/>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU - Eligibility Criteria</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Must be 17 years of age as on December 31st of the admission year</li>
                <li>Must have passed class 12 with a minimum of 50% with PCB</li>
                <li>Must have qualified NEET</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU - Initial Admission Process</h3>
              <ul className="text-smallTextPhone text-left md:text-regularText md:text-justify">
                Documents required:
              </ul>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Copy of 10/12 Marksheet</li>
                <li>Adhaar card copy</li>
                <li>Passport</li>
                <li>Neet score card</li>
                <li>Passport-sized photos</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">IBSU - Complete Admission Process</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Step 1:</strong> Application form to be filled meticulously</li>
                <li><strong>Step 2:</strong> Students must submit their educational certificates and other supporting documents</li>
                <li><strong>Step 3:</strong> Students will be judged on the basis of merit and performance in interview</li>
                <li><strong>Step 4:</strong> Students will get an admission letter from the University</li>
                <li><strong>Step 5:</strong> Students need to pay tuition fee for one sem</li>
                <li><strong>Step 6:</strong> Invitation to be applied</li>
                <li><strong>Step 7:</strong> On receipt of invitation, an appointment for visa in VFS shall be taken</li>
                <li><strong>Step 8:</strong> On receipt of date of appointment, students need to appear in person in VFS for visa purpose</li>
                <li><strong>Step 9:</strong> On receipt of visa, students who have gone through above admission process should then get their passport and schedule their fly to Georgia accordingly</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">How to reach IBSU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Direct flight from New Delhi to Tbilisi, Georgia</li>
                <li>Maximum 5 hours air journey</li>
                <li>Low and affordable air fare</li>
                <li>Maximum 30 Minutes journey to IBSU after reaching Tbilisi airport</li>
              </ul>
            </section>
        </div>
    </>
  )
}

export default NewPage 