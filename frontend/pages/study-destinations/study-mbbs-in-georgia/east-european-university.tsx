import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import React from 'react'
import Head from 'next/head'

const academicCalenderData={
    id:"nepal",
    section2:"",
    content:{
        title:"Academic Calendar",
        subTitle:"A glimpse of the important dates an aspirant must keep in mind to get on board EEU. The information below is not absolute and may vary university-wise.",
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
        subTitle:"Eligibility Criteria for MBBS in EEU for Indian students",
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
      label: "5500 USD/Year",
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
      label: "24",
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
            <title>East European University in Georgia, MBBS Fees | Edurizon
</title>
            <meta name="keyword" content="tbilisi state medical university, tbilisi state medical university georgia, tbilisi medical university, tbilisi state medical university mbbs fees, georgian national university seu, georgian national university, georgian national university seu fee structure, east european university georgia, european university georgia, east european university tbilisi georgia, new vision university georgia, new vision university tbilisi, georgia new vision university, bau international university, bau international university batumi, bau international university batumi fees, Batumi Shota Rustaveli State University, Batumi Shota Rustaveli State Georgia, georgian american university, university of georgia, georgia institute of technology, mbb in georgia, mbbs in georgia for indian students, mbb in georgia fees, top medical universities in georgia." />
            <meta name="description" content="Study MBBS at East European University in Georgia with quality medical education, English medium courses & affordable MBBS fees.
" />
            <meta name="author" content="edurizon" />
            <meta name="robots" content="index, follow"/>
            <meta name="DC.title" content="MBBS in Georgia" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Dwarka" />
            <meta name="geo.position" content="22.351115;78.667743" />
            <meta name="ICBM" content="22.351115, 78.667743" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="East European University Tbilisi Georgia | MBBS Programs & Fees" />
            <meta property="og:description" content="Pursue MBBS at East European University, Georgia. Low tuition, modern campus, and globally recognized medical programs for Indian students." />
            <meta property="og:url" content="https://www.edurizon.in/" />
            <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@edurizon" />
            <meta name="twitter:title" content="East European University Tbilisi Georgia | MBBS Programs & Fees" />
            <meta name="twitter:description" content="Pursue MBBS at East European University, Georgia. Low tuition, modern campus, and globally recognized medical programs for Indian students." />
            <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:image:alt" content="MBBS in Georgia" />
            <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/east-european-university"/>
            <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia/east-european-university" hrefLang="en-in"/>

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
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-georgia/EEU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                      <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>East European University</h2>
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

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
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

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">EEU - Mission</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The introduction of international standards following Georgian, and world cultural values, create an educational environment based on the integrity for all teaching and research activities.</li>
                <li>Help students and staff flourish academically, morally, and civically, by providing high quality teaching, scientific research, and fellowship.</li>
                <li>Contribute to Georgian and wider society through wisdom and dignity.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">EEU - Vision</h3>
              <ul className="text-smallTextPhone mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                To make EEU an internationally recognized institution integrated into the European educational space and a leading institution within the field of higher education in Georgia. To ensure the expansion of research potential and the qualification of competitive specialists. To follow democratic principles and develop civic responsibility amongst the students and staff.
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">EEU - Values</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li><strong>Unity, respect, Empathy, support, conscientiousness, freedom of thinking and expression, cooperation and benevolence</strong></li>
                <li>EEU aspiration is to create a professional environment, where academics, administrative staff, and students share common efforts and set strategies to implement the goals demonstrated within the university vision and mission.</li>
                <li><strong>Respect –</strong> EEU attitude within the university and to the wider society is to follow the principles of Equality, Accountability, Justice, and Ethics. In addition, there is appreciation and recognition of the effort of every member of the university community, their personal and academic freedom.</li>
                <li><strong>Empathy –</strong> EEU approach is focused/directed towards the elimination of social injustice, indifference and establish a fair society.</li>
                <li><strong>Support –</strong> EEU promotes the development of personal and professional growth of our academic and non-academic personal as well as students, the process of socio-cultural expansion of society, and establish humanistic values. We consider the special needs and interests of individuals.</li>
                <li><strong>Conscientiousness –</strong> significant principle of our academic and scientific work, thus, we will maintain a sense of responsibility, trust, fairness, and dignity within the university community.</li>
                <li><strong>Freedom of thinking and expression –</strong> EEU committed to the fundamental principles of academic and personal freedom and our efforts are directed to creating an environment and conditions conducive to the implementation of these principles.</li>
                <li><strong>Collaboration and benevolence –</strong> Through benevolence-based collaboration, we strive to achieve effective and mutually beneficial results in the university community as well as in relationships with partners.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">About East European University</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>East European University (EEU) is one of the most rapidly growing medical universities in Georgia, offering internationally recognized programs in medicine and healthcare.</li>
                <li>In 2012 EEU obtained authorization and programs' accreditation from the Ministry of education and Science of Georgia.</li>
                <li>In very short period of time, EEU made an impressive progress in building credible educational center which was trusted by more than 20000 students from 2013-2016 Unified Entry Examinations.</li>
                <li>EEU's MBBS program is a popular choice for international students, especially from India.</li>
                <li>Studying MBBS at East European University is an excellent choice for aspiring doctors looking for affordable, high – quality education abroad.</li>
                <li>With global recognition, modern facilities and strong clinical focus, EEU prepares you for a successful medical career anywhere in the world.</li>
                <li>EEU is a private university accredited in Georgia that strives to ensure implementation international educational standards in teaching and research and to build notable educational center oriented on the ideals of democracy and humanism.</li>
                <li>EEU offers English medium BBA and MBA programs and Digital Management Program in collaboration with Fresenius University and gives students unique opportunity to obtain German degree in Digital Management.</li>
                <li>The programs are based on the analyses and experience of the Western Universities and requirements of up-to-date labor market are taken into consideration. During the study process all the methods and technologies of the contemporary education are used.</li>
                <li>Professional networking, possibility to be employed and additional facilities for development gives EEU programs much more significance.</li>
                <li>Students can take internships in more than 150 partner companies. EEU partners are state agencies, public and private organizations, biggest hospitals in Georgia, pharmaceutical companies and etc.</li>
                <li>EEU is prominent with highly qualified academic staff, world-wide famous Georgian and Overseas professors, motivated practitioners and young qualified specialists, intensive partnership with many European Universities, which allows many American, Austrian, British and French professors to be involved in the implementation all educational programs.</li>
                <li>Currently EEU runs 19 Bachelor, Master's and Doctoral degree programs in faculties of law and Social Sciences, Education Sciences, business and Engineering, Healthcare Sciences.</li>
                <li>EEU offers excellent educational and research environment guaranteed by modern academic programs, high-qualified professors and best infrastructure. All the facilities important for studying and scientific activities are concentrated in the university.</li>
                <li>Modern practical knowledge and Successful career – This is the result of studying in the EEU</li>
              </ul>
            </section>

            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                  <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                  <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Why Choose EEU for MBBS?</h3>
                  <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                  <li>Your future success will be guaranteed by EEU:</li>
                    <li>A leading and most demanded Medical University</li>
                    <li>High quality programs regulated and accredited by the Ministry of Education of Georgia.</li>
                    <li>Modern Academic programs</li>
                    <li>Best Medical University</li>
                    <li>Best infrastructure</li>
                    <li>Experienced and highly qualified Academic staff</li>
                    <li>International Exchange programs and Double degree opportunities with British and other European Universities</li>
                    <li>Possibility of internship in more than 150 partner companies</li>
                    <li>Student – oriented environment</li>
                    <li>Low fee structure and low cost of living.</li>
                    <li>Double degree opportunities with Fresenius University (German)</li>
                    <li>Strong management having rich experience in the education industry.</li>
                    <li>Robust, research-based course and curriculum is followed to inculcate the Leaders for tomorrow</li>
                    <li>EEU - Students are highly recommended by the top most Hospitals in Europe</li>
                    <li>Focuses on holistic development of the student by providing Learning Opportunities, Community Support, Safety, Social Life and Connection to Nature</li>
                    <li>EEU is one of the research-intensive universities in Tbilisi, Georgia</li>
                    <li>Worldwide recognition</li>
                    <li>European Faculty</li>
                    <li>European and American Standard Study Programs</li>
                  </ul>
                  </div>  
                  <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full   md:w-[32.5vw] h-auto" width={690} height={690} alt="georgia3"/>
              </div>

              <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[.5vw]   md:text-h3Text text-center">Image Gallery</h3>
              <p className='mx-auto text-smallTextPhone md:text-regularText font--medium pb-[2vw] md:pb-[1vw] text-center'>Our Director With Dean of East European University</p>

              <div className='relative md:flex gap-[4vw] md:gap-[1vw] justify-center'>
                <Image src={"/assets/Images/mbbs-in-georgia/eeu1.jpg"} className='w-full md:w-[30vw] h-auto' width={1080} height={1080} alt='isbu1'/>
              </div>
            </section>

              <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text text-left">EEU at a glance </h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2 ">
                <li className='font-bold'>o College name</li>
                <li>East European University</li>
                <li className='font-bold'>o Recognition</li>
                <li>WHO, NMC, FAIMER, WFME</li>
                <li className='font-bold'>o Year of Establishment</li>
                <li>2012</li>
                <li className='font-bold'>o Medium of Instruction</li>
                <li>English</li>
                <li className='font-bold'>o Course Duration</li>
                <li>5 years</li>
                <li className='font-bold'>o Internship Duration</li>
                <li>1 year</li>
                <li className='font-bold'>o Country Rank</li>
                <li>24th</li>
                <li className='font-bold'>o NEET</li>
                <li>Mandatory</li>                
                <li className='font-bold'>o Location</li>
                <li>Tbilisi, Georgia</li>
                <li className='font-bold'>o Website</li>
                <li><a href="https://eeu.edu.ge" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">https://eeu.edu.ge</a></li>
                </ul>  
            </section>


       {/* About Georgia */}
         <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">MBBS Program in EEU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The duration of MBBS programme in EEU is for 6 years including 1 year internship.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">MBBS intake in EEU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Intake: September/ October</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Career Prospects in EEU</h3>
              <p className="text-smallTextPhone text-left md:text-regularText">Graduates of EEU are eligible to appear for global licensing exams like :-</p>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>USMLE (USA)</li>
                <li>PLAB (UK)</li>
                <li>Next (India)</li>
                <li>AMC (Australia)</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">EEU - Recognition</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>International Black Sea University is recognized by the World Health Organization, National Medical Commission, India, FAIMER, WFME etc.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Medium of instruction in EEU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>East European University offers 05 years English taught programs in medicine.</li>
                <li>EEU Programs are designed to give students modern, practical knowledge and critical thinking skills, to train competitive specialists with student-oriented teaching methods, that are prerequisites for a successful professional career.</li>
                <li>EEU programs are developed in line with western standards, taking into consideration the experience of leading Georgian and Western universities as well as up-to-date market requirements.</li>
                <li>All medical courses in EEU are taught in English.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">EEU Fees for Indian students</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Affordable Tuition Fees: Cost of medical education in EEU is comparatively lower without compromising on quality.</li>
                <li>Tuition fee: 5500 USD (YEARLY)</li>
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
                <li>Students are very well taken-care of during their entire stay in IBSU.</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">EEU - Library</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>High-Tech laboratories</li>
                <li>Diverse literature is available in EEU library, which provides students with modern book fund, electronic resources and on digital carriers.</li>
                <li>Electronic Scientific databases take an important part of the library resources, and this includes the literature determined under academic programs in all directions of the university programs.</li>
                <li>Library is a structural unit of the University, which provides all kinds of personnel and students with modern books, as a kind of electronic and digital media resources.</li>
                <li>An important part of the library resources is electronic library, which includes the literature provided by training program.</li>
                <li>There are more than 9500 books and digital entries in the library.</li>
                <li>Student reading rooms and lounge.</li>
                <li>Wide holdings of library books</li>
                <li>EEU library is open every day except Sunday</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">Climate of Georgia/Tbilisi</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>The climate of Georgia is extremely diverse, considering the nation's small size.</li>
                <li>An average temperature</li>
                <li>Summer - from 32 °C to 35 °C</li>
                <li>winter – from 1.5 °C to 3 °C.</li>
              </ul>
            </section>
            <ListedTable {...eligibilityData}/>

            <ListedTable {...academicCalenderData}/>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
            <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">EEU initial admission Process</h3>
              <p className="text-smallTextPhone text-left md:text-regularText">Documents required:</p>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Copy of 10/12 Marksheet</li>
                <li>Adhaar card copy</li>
                <li>Passport</li>
                <li>Neet score card</li>
                <li>Passport-sized photos</li>
              </ul>

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">EEU complete admission Process</h3>
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

              <h3 className="text-h6TextPhone leading-[120%]  md:text-h5Text  text-left">How to reach EEU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Direct flight from New Delhi to Tbilisi, Georgia</li>
                <li>Maximum 5 hours air journey</li>
                <li>Low and affordable air fare</li>
                <li>Maximum 30 Minutes journey to EEU after reaching Tbilisi airport.</li>
              </ul>
            </section>

        </div>
    </>
  )
}

export default NewPage 