import Breadcrumbs from "@/components/Breadcumbs";
import EdurizonProcess from "@/components/studyDestinationComponents/EdurizonProcess";
import DescriptionComponent from "@/components/studyDestinationComponents/descriptionCompnent";
import ReasonsToStudy from "@/components/studyDestinationComponents/reasonsToStudy";
import VideoCarousel from "@/components/videoCarousel";
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import Head from "next/head";
const descriptionData={
  id:"tajikistan",
  title1normal:"About Tajikistan",   
  content:["Tajikistan is a country located in Central Asia, bordered by Afghanistan, China, Kyrgyzstan, and Uzbekistan.","Tajikistan is known for rugged mountains due to which popular for hiking and climbing", "The Fann Mountains, near the national capital Dushanbe, have snow-capped peaks that rise over 5,000 meters.", "The range encompasses the Iskanderkulsky Nature Refuge, a notable bird habitat named for Iskanderkul, a turquoise lake formed by glaciers", "The Tajik people came under Russian rule in the 1860s.", "In 1924, Tajikistan became an Autonomous Soviet Socialist Republic of the Soviet Union, the Tajik ASSR, within Uzbekistan.", "In 1929, Tajikistan was made one of the component republics of the Soviet Union – Tajik Soviet Socialist Republic (Tajik SSR) – and it kept that status until gaining independence in 1991 after the dissolution of the Soviet Union."],
  content2:"",
  imageAlt:"Tajikistan",
  imageURL:"/assets/Images/mbbs-in-tajikistan/Tajikistan1.png"
}

const videoData = [
  {
    id: 1,
    title: 'Best Medical College for MBBS Abroad | Tajik National University',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/_dyVVwRvQSM/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=_dyVVwRvQSM',
  },
  {
    id: 2,
    title: "Student review of Tajik National University || MBBS in Tajikistan",
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/a46VW9YUTSY/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=a46VW9YUTSY',
  },
  {
    id: 3,
    title: 'Student review of Tajik National University || MBBS in Tajikistan',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/Zn9TNF7SKt8/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=Zn9TNF7SKt8',
  },
  {
    id: 4,
    title: "Tajik National University | MBBS in Tajikistan",
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/jwPKSMGwGLY/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=jwPKSMGwGLY',
  },
];

const reasonToStudyData={
  id:"tajikistan",
  title:"Why Study MBBS in Tajikistan? (Key Benefits) ",
  content:[
    {
      title: "No Capitation Fees",
      description: "Tajikistan's medical universities do not charge any donation or capitation fees, making it a transparent and affordable option for aspiring doctors."
    },
    {
      title: "Affordable Tuition Fees",
      description: "Total tuition fees for MBBS in Tajikistan range between ₹21 to ₹27 lakh, making it one of the most cost-effective destinations to study medicine abroad."
    },
    {
      title: "Low Cost of Living",
      description: "Along with affordable tuition, the overall cost of living in Tajikistan is low, significantly reducing the financial burden on international students."
    },
    {
      title: "Indian Mess Available",
      description: "Indian mess facilities are available in most universities, ensuring students have access to familiar and hygienic meals."
    },
    {
      title: "Recognized by WHO & NMC",
      description: "All medical universities in Tajikistan are recognized by global bodies like WHO and NMC, making graduates eligible to practice in India and other countries."
    },
    {
      title: "Modern Infrastructure & Clinical Exposure",
      description: "Universities in Tajikistan offer state-of-the-art infrastructure and excellent clinical exposure, preparing students for real-world medical practice."
    },
    {
      title: "Comprehensive Curriculum",
      description: "The MBBS curriculum in Tajikistan focuses on both theoretical and clinical education, providing a strong foundation for medical careers."
    },
    {
      title: "5+1 Year Program",
      description: "The MBBS program in Tajikistan typically lasts five years, followed by a one-year mandatory internship for hands-on experience."
    },
    {
      title: "Research Opportunities",
      description: "Students are encouraged to engage in research and have access to modern labs and clinical facilities to help them excel in their field."
    }
  ]
  ,
  darkImg:["1Dark","2Dark","3Dark","4Dark","5Dark","6Dark","2Dark","4Dark","3Dark"],
  lightImg:["1","2","3","4","5","6","2","4","3"],
}

const eligibilityData = {
  id: "tajikistan",
  section2: "",
  content: {
      title: "Eligibility Criteria",
      subTitle: "Eligibility Criteria for MBBS in Khatlon State Medical University for Indian students",
      data: [["Criteria", "Details"],
      ["Age Requirement", "17 years of age as on 31st December in the admission year"],
      ["Academic Requirements", "Passed 12th standard with at least 50% in Physics, Chemistry and Biology"],
      ["NEET Requirements", "Must qualify NEET exam"]]
  }
}



const universitiesData = [
  {
    id: 1,
    name: "Tajik National University",
    location: "Dushanbe",
    year: 1948,
    fee: "$4500 | $500",
    duration: "5+1 years",
    recognition: "WHO, NMC",
    href: "/study-destinations/study-mbbs-in-tajikistan/tajik-national-university"
  },
  {
    id: 2,
    name: "Khatlon State Medical University",
    location: "Danghara",
    year: 2009,
    fee: "$4000 | $500",
    duration: "5+1 years",
    recognition: "WHO, NMC",
    href: "/study-destinations/study-mbbs-in-tajikistan/khatlon-state-medical-university"
  },
  {
    id: 3,
    name: "Medical Social Institute of Tajikistan",
    location: "Dushanbe",
    year: 2009,
    fee: "$4000 | $500",
    duration: "5+1 years",
    recognition: "WHO, NMC",
    href: "/study-destinations/study-mbbs-in-tajikistan/medical-social-institute-of-tajikistan"
  },
  {
    id: 4,
    name: "Avicenna Tajik State Medical University",
    location: "Dushanbe",
    year: 2009,
    fee: "$4000 | $500",
    duration: "5+1 years",
    recognition: "WHO, NMC",
    href: "/study-destinations/study-mbbs-in-tajikistan/avicenna-tajik-state-medical-university"
  }
];

const NewPage=()=>{
    return(
      <>
      <Head>
  <title>MBBS in Tajikistan, Best Medical Colleges in Tajikistan | Edurizon</title>

  <meta
    name="keyword"
    content="mbbs in tajikistan, study mbbs in tajikistan, mbbs in tajikistan for indian students, best medical colleges in tajikistan, mbbs abroad tajikistan, tajikistan medical universities, low cost mbbs in tajikistan, english medium mbbs in tajikistan"
  />

  <meta
    name="description"
    content="Study MBBS in Tajikistan for Indian students at best medical colleges in Tajikistan which offer quality education and transparent MBBS fees."
  />

  <meta name="author" content="edurizon" />
  <meta name="robots" content="index, follow" />
  <meta name="DC.title" content="MBBS In Tajikistan" />

  <meta name="geo.region" content="IN-DL" />
  <meta name="geo.placename" content="Dwarka" />
  <meta name="geo.position" content="22.351115;78.667743" />
  <meta name="ICBM" content="22.351115, 78.667743" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Study MBBS in Tajikistan | Best Medical Colleges & Fees"
  />
  <meta
    property="og:description"
    content="Study MBBS in Tajikistan for Indian students at top medical colleges offering quality education with transparent and affordable MBBS fees."
  />
  <meta
    property="og:url"
    content="https://www.edurizon.in/study-destinations/study-mbbs-in-tajikistan"
  />
  <meta
    property="og:image"
    content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@edurizon" />
  <meta
    name="twitter:title"
    content="Study MBBS in Tajikistan | Best Medical Colleges"
  />
  <meta
    name="twitter:description"
    content="Study MBBS in Tajikistan for Indian students at best medical colleges offering quality education and transparent MBBS fees."
  />
  <meta
    name="twitter:image"
    content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
  />
  <meta name="twitter:image:alt" content="MBBS In Tajikistan" />

  
  <link
    rel="alternate"
    href="https://www.edurizon.in/study-destinations/study-mbbs-in-tajikistan"
    hrefLang="en-in"
  />

  {/* Google Analytics */}
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
 <div className="text-smallTextPhone md:text-smallText pt-[15vw] md:pt-[4vw]">
            <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[5vw] mb-[1vw] py-[4vw] items-center md:mx-auto">
                <div className="flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                <div className="flex flex-col items-center gap-[4vw] md:gap-[1vw]">
                    <Breadcrumbs/>
                    <h1 className="text-h4TextPhone text-center   font-bold leading-[120%] md:text-h1Text">MBBS in Tajikistan</h1>
                </div>
                <p className="text-smallTextPhone text-left md:text-regularText md:text-center">
                MBBS in Tajikistan is an affordable and globally recognized option for medical education, especially for international students. With English-taught programs, modern infrastructure, and WHO and NMC-recognized universities, Tajikistan offers quality medical training. Its simple admission process and low tuition fees make it an attractive destination for aspiring doctors. Tajikistan is gaining popularity for affordable medical education and student-friendly universities with modern facilities. MBBS in Tajikistan for Indian Students offers English-medium programs, simple admission processes, and quality clinical training, making it a suitable option for aspiring doctors from India.
                </p>
                </div>
                
            </div>
            <DescriptionComponent id={descriptionData.id} title1normal={descriptionData.title1normal}  
            content1={descriptionData.content} imageAlt={descriptionData.imageAlt} imageSrc={descriptionData.imageURL} />

           
           {/* Dubane */}
           <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] pt-[5vw] md:pt-[2vw] flex md:flex-row flex-col-reverse items-center gap-[6vw] md:gap-[5vw] "> 
                  <div className="flex flex-col gap-[3vw] md:gap-[1.5vw] flex-shrink-0 ">
                    <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text">DUSHANBE CITY</h3>
                    <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">Dushanbe is the capital of Tajikistan which is situated on the Varzob River. Rudaki Park which is named after a classical poet is situated on the east bank of the river.  </p>
                  </div>
           </section>
         
           
            {/* Reasons to Study */}
            {<ReasonsToStudy id={reasonToStudyData.id} title1={reasonToStudyData.title}  content={reasonToStudyData.content} darkImg={reasonToStudyData.darkImg} lightImg={reasonToStudyData.lightImg} />}

            {/* Cultural Insights and Geographical Overview */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[4vw] md:mb-[2vw]">Cultural Insights and Geographical Overview</h3>
                <div className="text-smallTextPhone md:text-regularText text-justify space-y-[2vw] md:space-y-[1vw]">
                    <p>Tajikistan, located in Central Asia, offers a unique cultural blend with influences from Persian, Russian, and Central Asian traditions. Its capital, Dushanbe, is home to many educational institutions, including medical universities.</p>
                    <p>Known for its scenic landscapes and hospitable environment, Tajikistan attracts international students, including a large number from India. The republic of Tajikistan provides students with a safe environment, making it a preferred choice for Indian students moving to Tajikistan to study MBBS.</p>
                    <p>With English as one of the mediums of instruction, Tajikistan fosters multicultural interactions. Students also benefit from exploring the rich history and traditions while undergoing MBBS course. Comfortable lifestyle, affordable living costs, and easy access to local amenities add to the appeal for students choosing to study MBBS in Tajikistan.</p>
                </div>
            </section>

            {/* License to Practice */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[4vw] md:mb-[2vw]">License to Practice</h3>
                <ul className="text-smallTextPhone md:text-regularText list-disc ml-[3vw] md:ml-[1.5vw] space-y-[1vw] md:space-y-[0.5vw]">
                    <li>As per NMC Gazette 2021, students need to take licence from that particular country from which she/he has done his/her MBBS.</li>
                    <li>Tajikistan is following all the guidelines as laid down in the Gazette.</li>
                    <li>Tajikistan is also giving licence to practice to Indian students</li>
                    <li>No licencing exam in Tajikistan for MBBS</li>
                    <li>In order to practice in India, post MBBS, students shall also have to undergo through a MCI exam called FMGE.</li>
                    <li>FMGE is held twice a year.</li>
                    <li>FMGE exam is of 300 marks with objective type which is to be conducted online and students need to get only 150 to qualify.</li>
                </ul>
            </section>

            {/* Living and Accommodation */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[4vw] md:mb-[2vw]">Living and Accommodation in Tajikistan</h3>
                
                <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Cost of Living</h4>
                <ul className="text-smallTextPhone md:text-regularText list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[2vw]">
                    <li>Cost of living in Tajikistan is like India.</li>
                    <li>Students can manage their living cost easily like India.</li>
                    <li>Food is available at 100-120 USD per month.</li>
                </ul>

                <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Hostel Facilities</h4>
                <ul className="text-smallTextPhone md:text-regularText list-disc ml-[3vw] md:ml-[1.5vw]">
                    <li>All universities in Tajikistan are providing proper accommodation with all basic necessary facilities.</li>
                    <li>Separate arrangements for boys and girls.</li>
                    <li>Proper security arrangements, reception, laundry, cleaning and washing personnel & reading rooms.</li>
                    <li>Unauthorized persons are not allowed inside the hostels.</li>
                    <li>All hostels are well furnished.</li>
                </ul>
            </section>

            {/* Academic Environment */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[4vw] md:mb-[2vw]">Academic Environment</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] md:gap-[2vw]">
                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Class Strength</h4>
                        <ul className="text-smallTextPhone md:text-regularText list-disc ml-[3vw] md:ml-[1.5vw]">
                            <li>The strength of the batch is between 12-15 students.</li>
                            <li>Every student gets the individual attention of the teachers.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Infrastructure</h4>
                        <p className="text-smallTextPhone md:text-regularText">All the Universities in Tajikistan have a world-class structure with ultra-modern gadgets in all hospitals.</p>
                    </div>

                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">International Exposure</h4>
                        <p className="text-smallTextPhone md:text-regularText">Students get international exposure which help them greatly. Tajikistan provides opportunities for medical students to get exposed to large patient inflow.</p>
                    </div>

                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Safety and Security</h4>
                        <ul className="text-smallTextPhone md:text-regularText list-disc ml-[3vw] md:ml-[1.5vw]">
                            <li>Safety and security are top priority for both students and parents.</li>
                            <li>Universities of Tajikistan offer safe and comfortable boarding options under CCTV surveillance.</li>
                            <li>Availability of hostel wardens in the premises.</li>
                            <li>Students also get a chance to enjoy Indian food at the self-cooking facility available on the university premises.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[4vw] md:mb-[2vw]">Top Medical Universities in Tajikistan</h3>
            <p className="text-regularTexts text-center">Tajikistan offers quality medical education through government-recognized universities with affordable tuition fees. Best Medical Colleges/Universities in Tajikistan provide English-medium MBBS programs, modern infrastructure, and good clinical exposure, making them an attractive choice for international students. Medical education in Tajikistan is known for its affordability and globally accepted curriculum. Tajikistan MBBS Fees are comparatively low, making it easier for Indian students to pursue quality medical education with modern facilities and clinical exposure.
</p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border  mb-[4vw] md:mb-[2vw] border-black dark:border-borderGreyChosen ">
                        <thead className="text-smallTextPhone md:text-regularText text-center font-bold align-top bg-linenChosen">
                            <tr>
                                <th className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">University Name</th>
                                <th className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Location</th>
                                <th className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Established</th>
                                <th className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Total Fee | Hostel Fees</th>
                                <th className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Duration</th>
                                <th className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Recognition</th>
                                <th className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Know More</th>
                            </tr>
                        </thead>
                        <tbody className="text-smallTextPhone md:text-regularText align-top">
                            {universitiesData.map((university) => (
                                <tr key={university.id}>
                                    <td className="border    border-black dark:border-white px-[.75vw] py-[.625vw]">
                                        <a className="dark:text-white dark:hover:text-orange-400 duration-300 transition-colors ease-in" href={university.href}>
                                            {university.name}
                                        </a>
                                    </td>
                                    <td className="border dark:text-white   border-black dark:border-white px-[.75vw] py-[.625vw]">{university.location}</td>
                                    <td className="border dark:text-white   border-black dark:border-white px-[.75vw] py-[.625vw]">{university.year}</td>
                                    <td className="border dark:text-white   border-black dark:border-white px-[.75vw] py-[.625vw]">{university.fee}</td>
                                    <td className="border dark:text-white   border-black dark:border-white px-[.75vw] py-[.625vw]">{university.duration}</td>
                                    <td className="border dark:text-white   border-black dark:border-white px-[.75vw] py-[.625vw]">{university.recognition}</td>
                                    <td className="border dark:text-white   border-black dark:border-white px-[.75vw] py-[.625vw]">
                                        <a href={university.href} className="dark:text-white dark:hover:text-orange-300 duration-300 transition-colors ease-in-out">
                                            Know More
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] md:gap-[2vw] mt-[4vw]">
                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Program Cost</h4>
                        <p className="text-smallTextPhone md:text-regularText">Minimum Fees/hostel – 26 lakh onwards</p>
                    </div>

                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Medium of Instruction</h4>
                        <p className="text-smallTextPhone md:text-regularText">English is the medium of instruction for MBBS course for international students in Tajikistan.</p>
                    </div>

                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Program Duration</h4>
                        <ul className="text-smallTextPhone md:text-regularText list-disc ml-[3vw] md:ml-[1.5vw]">
                            <li>Tajikistan has 5 years MBBS programme and one-year separate internship.</li>
                            <li>The programme of MBBS designed as 5 + 1 basis.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Admission Process</h4>
                        <ul className="text-smallTextPhone md:text-regularText list-disc ml-[3vw] md:ml-[1.5vw]">
                            <li>No entrance test for MBBS admission in Tajikistan</li>
                            <li>Admissions are taken on first-cum-first-serve basis.</li>
                            <li>Tajikistan universities have the best & easy selection process.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Travel Information</h4>
                        <p className="text-smallTextPhone md:text-regularText">3 hour air journey from India to Dushanbe, capital of Tajikistan</p>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />

           {/* Admission Process */}
           <section className="flex flex-col md:flex-row mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] gap-[8vw] md:gap-0 justify-between ">
              <div className="md:w-[36vw] flex-shrink-0">
                    <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Step by Step Complete Admission Process</h3>
                    <p className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%]">Following Documents are required for admission in Tajik National University.</p>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                    <li>Submission of documents:
                        <ul className="list-disc ml-[3vw]">
                            <li>10/12 marksheet</li>
                            <li>Valid passport/adhaar card</li>
                            <li>NEET score card</li>
                            <li>1 passport size photograph</li>
                        </ul>
                    </li>
                    <li>Within one week, University issues admission letter</li>
                    <li>Upon receipt of admission letter, student need to deposit $1000 (part of fees) to confirm their seat</li>
                    <li>Once $1000 is received, university issues invitation/telex in the name of students</li>
                    <li>E-visa to be applied</li>
                    <li>Remaining fees of 1st part to be paid</li>
                    <li>Air ticket to be booked</li>
                    <li>Departure to be planned</li>
                </ul>
              </div>
              
              <div className="md:w-[36vw] flex-shrink-0">
                  <h3 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Documents Required for Tajik Natinonal University</h3>
                  <p className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%]">Following Documents are required for admission in Tajik National University.</p>
                  <ul className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%] list-disc pl-[4vw] md:pl-[1.5vw] list-outside">
                    <li>10th & 12th Mark Sheets.</li>
                    <li>Valid Indian Passport.</li>
                    <li>Passport Size Photos.</li>
                    <li>NEET Score Card (Must Qualify NEET).</li>
                    <li>Transfer and migration certificate.</li>
                  </ul>
              </div>
           </section>


            <div className="pb-[10vw] md:pb-[6vw]">
            <EdurizonProcess country="Tajikistan"/>
            </div>
            <VideoCarousel videoData={videoData}/>
            
        </div>
      </>
       

    )
}

export default NewPage;
