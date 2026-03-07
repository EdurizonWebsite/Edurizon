import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
import Head from 'next/head'

const academicCalenderData={
    id:"nepal",
    section2:"",
    content:{
        title:"Academic Calendar",
        subTitle:"A glimpse of the important dates an aspirant must keep in mind to get on board DTMU. The information below is not absolute and may vary university-wise.",
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
        subTitle:"Eligibility Criteria for MBBS in DTMU for Indian students",
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
      label: "8000 USD/Year",
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
      label: "22",
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
            <title>David Tvildiani Medical University Georgia | MBBS in English</title>
            <meta name="keyword" content="tbilisi state medical university, tbilisi state medical university georgia, tbilisi medical university, tbilisi state medical university mbbs fees, georgian national university seu, georgian national university, georgian national university seu fee structure, east european university georgia, european university georgia, east european university tbilisi georgia, new vision university georgia, new vision university tbilisi, georgia new vision university, bau international university, bau international university batumi, bau international university batumi fees, Batumi Shota Rustaveli State University, Batumi Shota Rustaveli State Georgia, georgian american university, university of georgia, georgia institute of technology, mbb in georgia, mbbs in georgia for indian students, mbb in georgia fees, top medical universities in georgia." />
            <meta name="description" content="Get MBBS admission at David Tvildiani Medical University. English-medium courses, modern facilities, and recognized for Indian medical aspirants." />
            <meta name="author" content="edurizon" />
            <meta name="robots" content="index, follow"/>
            <meta name="DC.title" content="MBBS in Georgia" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Dwarka" />
            <meta name="geo.position" content="22.351115;78.667743" />
            <meta name="ICBM" content="22.351115, 78.667743" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="David Tvildiani Medical University Georgia | MBBS in English" />
            <meta property="og:description" content="Get MBBS admission at David Tvildiani Medical University. English-medium courses, modern facilities, and recognized for Indian medical aspirants." />
            <meta property="og:url" content="https://www.edurizon.in/" />
            <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@edurizon" />
            <meta name="twitter:title" content="David Tvildiani Medical University Georgia | MBBS in English" />
            <meta name="twitter:description" content="Get MBBS admission at David Tvildiani Medical University. English-medium courses, modern facilities, and recognized for Indian medical aspirants." />
            <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:image:alt" content="MBBS in Georgia" />
            <link  href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/david-tvildiani-medical-university"/>
            <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/david-tvildiani-medical-university" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-georgia/DTMU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h1 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>David Tvildiani Medical University</h1>
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
        <section className='mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]'>
        <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">About Georgia</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Georgia is a country in the Caucasus region of Eurasia, located at the crossroads of Eastern Europe and Western Asia.</li>
                <li>Tbilisi which is the largest city, is the capital of Georgia.</li>
                <li>Georgia is a part of the Caucasus region, bounded to the west by the Black Sea, to the north and east by Russia, to the south by Turkey and Armenia, and to the southeast by Azerbaijan.</li>
                <li>Georgia covers a territory of 69,700 square kilometers.</li>
                <li>Georgia is a country with a rich culture, history and tourist attractions, including UNESCO Heritage Sites. There are numerous magnificent places to visit: mountains, seaside, caves and big cities.</li>
                <li>Tbilisi has a population of approximately 1.5 million people.</li>
                <li>Population in Georgia is almost 5 million.</li>
                <li>The official language of Georgia is Georgian and the is "Sakartvelo".</li>
                <li>Georgia is a country with a rich culture, history and tourist attractions, including UNESCO Heritage Sites. The first human civilization outside of Africa has been discovered in Georgia. The country is famous with delicious cuisine and Georgian hospitality. All this makes Georgia an extremely interesting destination for foreign students.</li>
                <li>Country is unitary semi-presidential republic.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">About Tbilisi City</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Tbilisi City is the Mega City which is Georgia's most pleasant city.</li>
                <li>Tbilisi is the capital and the largest city of Georgia.</li>
                <li>A well-known urbanized mega city.</li>
                <li>Tbilisi is the first destination of tourists & students to visit.</li>
                <li>Tbilisi city with a panoramic view that melt hearts with its urbanized streets, modern Infrastructure, leafy squares, clean lakes, and green valleys.</li>
                <li>According to Ministry of Education & Science, almost all of foreign students' study in Georgia, 95% in Tbilisi, 2.2% in Kutaisi and 1.8% in Batumi respectively.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">DTMU - Mission</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Quality Education:</strong> DTMU focuses on offering a scientifically oriented higher medical education based on the best international practices.</li>
                <li><strong>Skill Development:</strong> They aim of DTMU is to equip students with the necessary skills and knowledge to become competent medical professionals.</li>
                <li><strong>Global Impact:</strong> DTMU believes that educated individuals can raise awareness, challenge stereotypes, and promote healthcare accessibility and effectiveness worldwide.</li>
                <li><strong>Social Responsibility:</strong> They aim of DTMU is to contribute to the overall welfare of society by producing doctors who can improve healthcare and reduce poverty.</li>
                <li><strong>Innovation and Research:</strong> DTMU aspires to become a leading institution for medical education and research in the region, fostering innovation in teaching and learning.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">DTMU - Vision</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Globally Recognized Education:</strong> DTMU emphasizes international medical curriculum standards and aims to prepare students for careers in a global context.</li>
                <li><strong>Quality and Affordability:</strong> The university strives to provide affordable, quality education to a wide range of students, including those from diverse backgrounds.</li>
                <li><strong>Practical Training and Research:</strong> DTMU emphasizes practical training, research, and clinical exposure, crucial for developing well-rounded medical professionals.</li>
                <li><strong>Continuous Improvement:</strong> DTMU is committed to continuous improvement in teaching, learning, research, and management quality.</li>
                <li><strong>Internationalization:</strong> DTMU attracts students from diverse backgrounds, creating a multicultural learning environment.</li>
                <li><strong>Community Engagement:</strong> DTMU aims to create awareness within society and increase healthcare accessibility, particularly for those in need.</li>
                <li><strong>Global Contribution:</strong> DTMU aims to produce graduates who can contribute to the improvement of global healthcare.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">DTMU - Values</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>High-Quality Medical Education:</strong> The university strives to provide medical education based on scientific principles and international best practices, equipping students with the skills and knowledge needed for successful medical careers.</li>
                <li><strong>International Collaboration:</strong> DTMU emphasizes international cooperation in education, fostering a diverse student body and offering opportunities for exchange programs and global conferences.</li>
                <li><strong>Supportive Learning Environment:</strong> The university provides a vibrant and supportive environment, including modern facilities, a multicultural student community, and various extracurricular activities, ensuring a balanced academic and social life.</li>
                <li><strong>Continuous Improvement:</strong> DTMU focuses on continuous improvement in teaching, learning, research, and management quality, ensuring its programs meet international standards and allow graduates to pursue careers globally.</li>
                <li><strong>Lifelong Learning:</strong> DTMU emphasizes continuous learning and professional development, ensuring graduates remain up-to-date with the latest medical advancements and best practices.</li>
                <li><strong>Ethics and Integrity:</strong> DTMU promotes a culture of ethical conduct and integrity, expecting its students and faculty to uphold the highest standards of professional behavior.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">About David Tvildiani Medical University</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Accreditation and Recognition:</strong> DTMU is recognized by the Medical Council of India (MCI) and is listed in the World Directory of Medical Schools (WDOMS).</li>
                <li><strong>International Programs:</strong> The university offers MBBS programs in English, making it attractive to international students.</li>
                <li><strong>Global Standards:</strong> DTMU's curriculum is designed to meet global standards for medical education and prepares students for international licensing exams like USMLE.</li>
                <li><strong>Member of International Organizations:</strong> DTMU is a member of several prestigious organizations related to medical education, including AMSE and AMEE.</li>
                <li><strong>Focus on Practical Training:</strong> DTMU emphasizes hands-on training and clinical experience for its students.</li>
                <li><strong>Affordable Education:</strong> DTMU is known for offering affordable medical education compared to other international universities.</li>
                <li><strong>Additional Information:</strong> DTMU was initially established as a medical school named "AIETI".</li>
                <li>DTMU has a branch in Rustavi, Georgia, in addition to its main campus in Tbilisi.</li>
              </ul>
        </section>

        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] text-black md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                  <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                  <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose DTMU for MBBS?</h3>
                  <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                  <li><strong>USMLE-Based Curriculum:</strong> The university's curriculum is aligned with the US Medical Licensing Examination (USMLE), which can be beneficial for students aiming to practice in the United States or other countries that recognize the USMLE.</li>
                <li><strong>High-Quality Education:</strong> DTMU provides a well-structured MBBS program with a blend of theoretical and practical learning, taught by experienced faculty. The university also emphasizes clinical exposure, allowing students to gain valuable experience in hospitals and clinics.</li>
                <li><strong>Global Recognition:</strong> DTMU is recognized by international organizations and the National Medical Commission (NMC), ensuring that its graduates are eligible for further studies and practice in various countries.</li>
                <li><strong>Safe and Supportive Environment:</strong> DTMU offers a secure campus with 24/7 security and CCTV surveillance.</li>
                <li><strong>Modern Infrastructure:</strong> The university has well-equipped laboratories, a large library, and comfortable hostel facilities.</li>
                <li><strong>Strong Cosmopolitan Identity:</strong> Located in Tbilisi, Georgia, DTMU provides students with exposure to a diverse and vibrant cultural environment.</li>
                  </ul>
                  </div>  
                  <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690} alt="georgia3"/>
              </div>

              <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">DTMU at a glance </h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2 ">
                <li className='font-bold'>o College name</li>
                <li>David Tvildiani Medical University</li>
                <li className='font-bold'>o Recognition</li>
                <li>MCI, NMC, FAIMER, WFME</li>
                <li className='font-bold'>o Year of Establishment</li>
                <li>2006</li>
                <li className='font-bold'>o Medium of Instruction</li>
                <li>English</li>
                <li className='font-bold'>o Course Duration</li>
                <li>5 years</li>
                <li className='font-bold'>o Internship Duration</li>
                <li>1 year</li>
                <li className='font-bold'>o Country Rank</li>
                <li>22nd</li>
                <li className='font-bold'>o NEET</li>
                <li>Mandatory</li>                
                <li className='font-bold'>o Location</li>
                <li>Tbilisi, Georgia</li>
                <li className='font-bold'>o Website</li>
                <li><a href="https://dtmu.ge/" target="_blank" rel="noopener noreferrer">https://dtmu.ge/</a></li>
                </ul>  
            </section>


       {/* About Georgia */}
         <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Career Prospects in DTMU</h3>
              <p className="text-smallTextPhone text-left md:text-regularText">Graduates of DTMU are eligible to appear for global licensing exams like :-</p>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>USMLE (USA)</li>
                <li>PLAB (UK)</li>
                <li>Next (India)</li>
                <li>AMC (Australia)</li>
              </ul>


              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">DTMU Fees for Indian students</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                Affordable Tuition Fees: Cost of medical education in DTMU is comparatively lower without compromising on quality.
                <li>Tuition fee: 8000 USD (YEARLY)</li>
                <li>Hostel & Mess: 3000 USD (YEARLY)</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Ultra-modern hostel & Indian food</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Fully equipped and well-furnished ultra-modern air-conditioned hostels.</li>
                <li>Indian Cooks are in the Hostels to prepare delicious Indian food.</li>
                <li>Edurizon try to serve the best food for our students.</li>
                <li>We make sure students are always satisfied with food.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Safety & security</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>24/7 basis security cover.</li>
                <li>Proper CCTV have been placed at all appropriate locations.</li>
                <li>Separate hostels for Boys and Girls.</li>
                <li>Relaxing and peaceful stay that is conducive to learning is assured.</li>
                <li>Numerous Indian restaurants are there in the market where students can enjoy Indian food.</li>
                <li>Students are very well taken-care of during their entire stay in DTMU.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">DTMU - Library</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Daphne Hare Medical Library:</strong> The library is named after Daphne Hare and serves as a central resource for DTMU.</li>
                <li><strong>Comprehensive Collection:</strong> The library houses a wide array of resources, including textbooks, journals, online databases, and e-resources.</li>
                <li><strong>E-Resources and Online Access:</strong> Students and faculty have access to online databases, depositories, and platforms.</li>
                <li><strong>Support for Research:</strong> The library supports research efforts within the university community, providing access to necessary resources and assistance.</li>
                <li><strong>Open Access:</strong> The library is open to students, faculty, affiliated physicians, and the public.</li>
                <li><strong>Rules for Library Users:</strong> DTMU has established rules for library users, ensuring the responsible use of resources.</li>
                <li><strong>"Library Friends' Club":</strong> DTMU has a library club to engage with students and promote library usage.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Climate of Georgia/Tbilisi</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The climate of Georgia is extremely diverse, considering the nation's small size.</li>
                <li>An average temperature</li>
                <li>Summer - from 32 °C to 35 °C</li>
                <li>Winter – from 1.5 °C to 3 °C.</li>
              </ul>
            </section>
            
            <ListedTable {...eligibilityData}/>
            <ListedTable {...academicCalenderData}/>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                                    
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">DTMU initial admission Process</h3>
              <p className="text-smallTextPhone mb-[1vw] text-left md:text-regularText">Documents required:</p>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Copy of 10/12 Marksheet</li>
                <li>Adhaar card copy</li>
                <li>Passport</li>
                <li>Neet score card</li>
                <li>Passport-sized photos</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">DTMU complete admission Process</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Step 1:</strong> Application form to be filled meticulously.</li>
                <li><strong>Step 2:</strong> Students must submit their educational certificates and other supporting documents</li>
                <li><strong>Step 3:</strong> Students will be judged on the basis of merit and performance in interview</li>
                <li><strong>Step 4:</strong> Students will get an admission letter from the University</li>
                <li><strong>Step 5:</strong> Students need to pay tuition fee for one sem.</li>
                <li><strong>Step 6:</strong> Invitation to be applied</li>
                <li><strong>Step 7:</strong> On receipt of invitation, an appointment for visa in VFS shall be taken</li>
                <li><strong>Step 8:</strong> On receipt of date of appointment, students need to appear in person in VFS for visa purpose.</li>
                <li><strong>Step 9:</strong> On receipt of visa, students who have gone through above admission process should then get their passport and schedule their fly to Georgia accordingly.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">How to reach DTMU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Direct flight from New Delhi to Tbilisi, Georgia</li>
                <li>Maximum 5 hours air journey</li>
                <li>Low and affordable air fare</li>
                <li>Maximum 30 Minutes journey to DTMU after reaching Tbilisi airport.</li>
              </ul>
            </section>

        </div>
    </>
  )
}

export default NewPage 