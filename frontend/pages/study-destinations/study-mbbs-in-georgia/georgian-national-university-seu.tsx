import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
import Head from 'next/head'

const academicCalenderData={
    id:"nepal",
    section2:"",
    content:{
        title:"Academic Calendar",
        subTitle:"A glimpse of the important dates an aspirant must keep in mind to get on board SEU. The information below is not absolute and may vary university-wise.",
        data:[["Events","Dates"],
        ["Admission process","Starts in the month of May"],
        ["Last date of application","July/August"],
        ["Commencement of MBBS course","From September"]],
    }
}

const eligibilityData={
    id:"nepal",
    section2:"",
    content:{
        title:"Eligibility Criteria",
        subTitle:"Eligibility Criteria for MBBS in SEU for Indian students",
        data:[["Criteria","Details"],
        ["Academic Qualification",["Must have passed class 12 with a minimum of 50% with PCB"]],
        ["NEET Qualification",["NEET qualification is mandatory"]],
        ["Age Limit & Other information",["Must be 17 years of age as on December 31st of the admission year"]]],
    }
}

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tuition Fees",
      label: "5900 USD/Year",
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
      label: "15",
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
            <title>Georgian National University Seu in Georgia, MBBS Fees | Edurizon
</title>
            <meta name="keyword" content="tbilisi state medical university, tbilisi state medical university georgia, tbilisi medical university, tbilisi state medical university mbbs fees, georgian national university seu, georgian national university, georgian national university seu fee structure, east european university georgia, european university georgia, east european university tbilisi georgia, new vision university georgia, new vision university tbilisi, georgia new vision university, bau international university, bau international university batumi, bau international university batumi fees, Batumi Shota Rustaveli State University, Batumi Shota Rustaveli State Georgia, georgian american university, university of georgia, georgia institute of technology, mbb in georgia, mbbs in georgia for indian students, mbb in georgia fees, top medical universities in georgia." />
            <meta name="description" content="Study MBBS at Georgian National University SEU in Georgia with quality education, modern facilities & affordable MBBS fees.
" />
            <meta name="author" content="edurizon" />
            <meta name="robots" content="index, follow"/>
            <meta name="DC.title" content="MBBS in Georgia" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Dwarka" />
            <meta name="geo.position" content="22.351115;78.667743" />
            <meta name="ICBM" content="22.351115, 78.667743" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Georgian National University SEU | MBBS in Georgia Fee Structure" />
            <meta property="og:description" content="Pursue MBBS at Georgian National University SEU. Low fee structure, globally recognized, and ideal for Indian students seeking affordable MBBS in Georgia." />
            <meta property="og:url" content="https://www.edurizon.in/" />
            <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@edurizon" />
            <meta name="twitter:title" content="Georgian National University SEU | MBBS in Georgia Fee Structure" />
            <meta name="twitter:description" content="Pursue MBBS at Georgian National University SEU. Low fee structure, globally recognized, and ideal for Indian students seeking affordable MBBS in Georgia." />
            <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:image:alt" content="MBBS in Georgia" />
            <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/georgian-national-university-seu"/>
            <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/georgian-national-university-seu" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-georgia/SEU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>SEU, Georgian National University</h2>
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

       {/* About SEU */}
         <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">About SEU Georgia</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Georgian National University SEU is a private university which is located in Tbilisi, Georgia. Georgian National University - SEU was founded on behalf of Ilia Chavchavadze in 2001.</li>
                <li>SEU is spread across 85000 square meters (21 Acres).</li>
                <li>SEU was established in the year 2001.</li>
                <li>Georgian National University SEU is the largest private higher medical education institution in Georgia which offers a wide range of programs, including MBBS and other degree programs in various fields like Business, Law, and Technology.</li>
                <li>This is one of the biggest and most prestigious Medical College in Tbilisi - The Mega and Georgia's Most Pleasant Capital City.</li>
                <li>SEU is an elite category University.</li>
                <li>SEU is Georgia's biggest medical university in Europe (Euro-Asia), offering internationally accredited degrees that are recognized all over the world with more than 10,000 students in campus and thousands of international students from India and other parts of the world.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">SEU - Mission</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                Create an internationally recognized academic environment that is centred on students and their success in a high-quality modern setting that stimulates learning, teaching and research and thereby provides the opportunity for everyone to achieve their full potential and prepares competitive and highly qualified specialists for the labour market.
                
                Providing education based on the principles and values of the European Higher Education Area and using innovative and flexible approaches to respond to the different needs and demands of all students and society, anticipating trends and focusing on quality improvement is the constant goal of SEU.
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">SEU - Vision</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                Be a prestigious and value-based university serving society through high-quality education and research, putting personal development at the core. Core values of SEU are:
              </ul>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Academic freedom</strong></li>
                <li><strong>Excellence</strong></li>
                <li><strong>Integrity</strong></li>
                <li><strong>Social responsibility</strong></li>
                <li><strong>Fairness</strong></li>
                <li><strong>Respect</strong></li>
                <li><strong>Dedication</strong></li>
                <li><strong>Patriotism</strong></li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">SEU Recognition</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                Georgian National University, SEU is recognized by the World Health Organization, National Medical Commission, India, FAIMER, WFME.
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

            {/* Infrastructure */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Georgian National University – SEU - Infrastructure</h3>
              <ul className="text-smallTextPhone  text-left md:text-regularText md:text-justify">
                Most advanced and ultra-modern infrastructure in Georgian National University – SEU. Following key points:
              </ul>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Robotic-Surgical training medical Equipment</li>
                <li>Advanced Interactive and Digital Classrooms</li>
                <li>3D Anatomage and Cadavers</li>
                <li>Simulated Mannequin Station</li>
                <li>Team Learning Center (TLC)</li>
                <li>Simulation Center</li>
                <li>Most Advanced Research Center</li>
                <li>High-Tech Laboratories</li>
                <li>Highly Advanced Student Reading Room</li>
              </ul>
            </section>

              {/* Why choose section */}
              <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                  <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                  <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why MBBS in Georgian National University - SEU?</h3>
                  <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                    <li>Leading Biggest and most demanded Medical University with Highest Government Honour in Georgia</li>
                    <li>Best Medical University</li>
                    <li>Under 5 top Medical Universities in Europe</li>
                    <li>Public Intensive Research Based Organization</li>
                    <li>Robust, research-based course and curriculum is followed to inculcate the Leaders for tomorrow</li>
                    <li>SEU's - Students are highly recommended by the top most Hospitals in Europe</li>
                    <li>Focuses on holistic development of the student by providing Learning Opportunities, Community Support, Safety, Social Life and Connection to Nature</li>
                    <li>SEU is one of the research-intensive universities in Tbilisi, Georgia</li>
                    <li>Worldwide recognition</li>
                    <li>European Faculty</li>
                    <li>Affordable tuition Fees</li>
                    <li>Double Degree and Exchange Programme Opportunities</li>
                    <li>Erasmus + (Mobility to the best European Universities)</li>
                    <li>European and American Standard Study Programs</li>
                    <li>Do clinical rotations in 70+ affiliated hospitals in US & UK</li>
                  </ul>
                  </div>  
                  <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690} alt="georgia3"/>
              </div>
              <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[.5vw]   md:text-h3Text text-center">Image Gallery</h3>
              <p className='mx-auto text-smallTextPhone md:text-regularText font--medium pb-[2vw] md:pb-[1vw] text-center'>Our Director With Vice Dean of SEU</p>

              <div className='relative flex gap-[4vw] md:gap-[1vw] justify-center'>
                <Image src={"/assets/Images/mbbs-in-georgia/seu1.jpg"} className='w-full md:w-[30vw] h-auto' width={1080} height={1080} alt='isbu1'/>
              </div>
            </section>

            {/* At a glance  */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">SEU at a glance </h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2 ">
                <li className='font-bold'>o College name</li>
                <li>Georgian National University SEU</li>
                <li className='font-bold'>o Recognition</li>
                <li>WHO, NMC, FAIMER, WFME</li>
                <li className='font-bold'>o Year of Establishment</li>
                <li>2001</li>
                <li className='font-bold'>o Medium of Instruction</li>
                <li>English</li>
                <li className='font-bold'>o Course Duration</li>
                <li>5 years</li>
                <li className='font-bold'>o Internship Duration</li>
                <li>1 year</li>
                <li className='font-bold'>o Country Rank</li>
                <li>15th</li>
                <li className='font-bold'>o NEET</li>
                <li>Mandatory</li>                
                <li className='font-bold'>o Location</li>
                <li>Tbilisi, Georgia</li>
                </ul>  
            </section>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">European Erasmus+ Student Exchange Programme</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Mobility to the best European Universities</li>
                <li>Erasmus+ covers all the travel and living expenses</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">SEU Georgia - Library</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                Diverse literature is available at SEU Library, which provides students with modern book fund, electronic resources, as well as, resources on digital carriers. Electronic Scientific databases take an important part of the library resources, and this includes the literature determined under academic programs in all directions of the university programs.
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Library Features</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>High-Tech laboratories</li>
                <li>Student reading rooms and lounge</li>
                <li>Modern Library</li>
                <li>Wide holdings of library books</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">SEU University Georgia Fees for Indian students</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Tuition: $5,500 yearly</li>
                <li>Hostel & Food: $3,000 yearly</li>
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
                <li>Students are very well taken-care-of during their entire stay in SEU</li>
              </ul>
            </section>

            <ListedTable {...academicCalenderData}/>
            <ListedTable {...eligibilityData}/>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">SEU Georgia initial admission Process</h3>
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

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Georgian National University complete admission Process</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Step 1:</strong> Application form to be filled meticulously</li>
                <li><strong>Step 2:</strong> Students must submit their educational certificates and other supporting documents</li>
                <li><strong>Step 3:</strong> Students will be judged on the basis of merit and performance in interview</li>
                <li><strong>Step 4:</strong> Students will get an admission letter from the University</li>
                <li><strong>Step 5:</strong> Students need to pay tuition fee for one sem</li>
                <li><strong>Step 6:</strong> Invitation to be applied</li>
                <li><strong>Step 7:</strong> On receipt of invitation, an appointment for visa in VFS shall be taken</li>
                <li><strong>Step 8:</strong> On receipt of date of appointment, students need to appear in person for visa purpose</li>
                <li><strong>Step 9:</strong> On receipt of visa, students who have gone through Georgian National University admission process should then get their passport and schedule fly to Georgia</li>
              </ul>
            </section>
        </div>
    </>
  )
}

export default NewPage 