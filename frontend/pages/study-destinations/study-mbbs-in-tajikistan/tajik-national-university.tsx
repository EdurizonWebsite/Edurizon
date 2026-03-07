import Breadcrumbs from "@/components/Breadcumbs";
import EdurizonProcess from "@/components/studyDestinationComponents/EdurizonProcess";
import RelatedCountries from "@/components/studyDestinationComponents/relatedCountries";
import VideoCarousel from "@/components/videoCarousel";
import Image from "next/image";
import Head from "next/head";
const services = [
  {
    icon: "/assets/Images/Icons/feesIcon.svg",
    text: "Tution Fees | Hostel Fees",
    label: "$4500 | $500",
  },
  {
    icon: "/assets/Images/Icons/TieUpsIcon.svg",
    text: "City & Province",
    label: "Dushanbe, Tajikistan",
  },
  {
    icon: "/assets/Images/Icons/ExperienceIcon.svg",
    text: "QS World Rank - 561",
    label: "Country Rank - 1 ",
  },
  {
    icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
    text: "Amazing Fact",
    label: "Eurpoean & Central Asian Rank - 36",
  },
];


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

const NewPage=()=>{
    return(
        <>
            <Head>
                <title>Tajik National University in Tajikistan, MBBS Fees | Edurizon
</title>
                <meta name="keyword" content="mbbs in tajikistan, mbbs in tajikistan for indian students, best medical colleges in tajikistan, mbbs in tajikistan fee structure, mbbs cost in tajikistan, op medical colleges in tajikistan, Tajik National University, Avicenna Tajik State Medical University, Mbbs in tajikistan best medical college, Avicenna Tajik State Medical University fees." />
                <meta name="description" content="Edurizon offers full admission support for Tajik National University in Tajikistan with modern facilities and low cost MBBS Fees.
" />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in Tajikistan" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tajik National University MBBS | Best Medical College in Tajikistan" />
                <meta property="og:description" content="Pursue MBBS at Tajik National University. Top medical college in Tajikistan with low tuition fees, scholarships & global recognition." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="Tajik National University MBBS | Best Medical College in Tajikistan" />
                <meta name="twitter:description" content="Pursue MBBS at Tajik National University. Top medical college in Tajikistan with low tuition fees, scholarships & global recognition." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Tajikistan" />
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-tajikistan/tajik-national-university" hrefLang="en-in"/>

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
            <div className="text-smallTextPhone md:text-smallText pt-[15vw]  md:pt-[4vw]">
            <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[5vw] mb-[1vw] py-[4vw] items-center md:mx-auto">
                <div className="flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                <div className="flex flex-col items-center gap-[4vw] md:gap-[1vw]">
                    <Breadcrumbs/>
                    <h1 className="text-h4TextPhone text-center   font-bold leading-[120%] md:text-h1Text">Tajik National University, Tajikistan</h1>
                </div>
                <p className="text-smallTextPhone text-left md:text-regularText md:text-center">
                Tajik National University, TNU was established by the Resolution of Soviet of Ministries of the USSR on 21st March 1947. Tajik National University started its functioning from 1st September 1848 in Dushanbe.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.25vw]  md:gap-[1.125vw] items-center px-[5vw] md:p-[.5vw] justify-center">
                  {services.map((item, index) => (
                    <div key={index} className="w-[37.5vw] md:w-[16.5vw] h-[29.25vw] md:h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
                                rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start py-[3vw] 
                                md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black">
                      <Image src={item.icon}
                        alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative  overflow-hidden shrink-0" />
                      <p className="text-tinyTextPhone md:text-regularText text-center leading-[150%]"> {item.text} <br /><span className="font-semibold"> {item.label}</span></p>
                    </div>
                  ))}
                </div>
            </div>
            <Image src="/assets/Images/mbbs-in-tajikistan/tajik-national-university/tnu.jpg" alt="Tajikistan" width={1920} height={1080} className="w-full h-[35.8125vw]"/>

            {/* Mbbs from Tajik national University */}
            <section className="mx-[6vw] md:mx-[12.5vw] py-[10vw] md:py-[4vw]">
              <h2 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-center md:text-h3Text">MBBS From Tajik National University</h2>
              <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">
              Tajik National University, TNU was established by the Resolution of Soviet of Ministries of the USSR on 21st March 1947. Tajik National University started its functioning from 1st September 1848 in Dushanbe. Tajik National University is one of a leading centre in training qualified specialists for the different spheres of the national economy of the country.
The State University of Tajikistan named after V.I. Lenin from 1957 was renamed into State University of Tajikistan in 1992 and subsequently Tajik State National University in the year 1997.
Tajik National University is the first and largest university in Tajikistan. It enrolls 23,000 students per year in 18 different academic disciplines.
              </p>
            </section>

           {/* Dubane */}
           <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] pt-[5vw] md:pt-[2vw] flex md:flex-row flex-col-reverse items-center gap-[6vw] md:gap-[5vw] "> 
                  <div className="flex flex-col gap-[3vw] md:gap-[1.5vw] w-full md:w-[37.5vw] flex-shrink-0 ">
                    <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text">DUSHANBE CITY</h2>
                    <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">Dushanbe is the capital of Tajikistan which is situated on the Varzob River. Rudaki Park which is named after a classical poet is situated on the east bank of the river.</p>
                    <h3 className="text-h6TextPhone leading-[120%] md:text-h4Text">Tajik National University main campus</h3>
                    <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">The head office of Tajik National university, TNU is located in Dushanbe city which is also capital of Tajikistan. The campus of TNU is spread over in 500 acres.</p>
                    <h3 className="text-h6TextPhone leading-[120%] md:text-h4Text">Tajik National University - History</h3>
                    <p className="text-smallTextPhone text-left md:text-regularText md:text-justify">TNU was formed on 21 March 1947. In the year 2009, a high school and Mathematics discipline were established at the university.</p>
                  </div>
                  <Image src="/assets/Images/mbbs-in-tajikistan/tajik-national-university/Tajikistan2.png" alt="Tajikistan" width={1920} height={1080} className="w-full  h-auto rounded-[4vw] md:rounded-[1vw]"/>
           </section>
           {/* Tajik National University Facilities */}

           <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] ">
                  <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Tajik National University - Facilities</h2>
                  <p className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%] ">Tajik National University, TNU encompasses publishing, a research library, a botanical garden, a hostel, 114 departments (107 special departments) and a military chair and high school.
                  </p>
                  <ul className="list-disc pl-[4vw] md:pl-[1.5vw] list-outside text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%]">
                    <li>TNU has 198 doctors, professors and 632 candidates of sciences.</li>
                    <li>TNU has 8 dissertation councils and 26 Academic departments.</li>
                    <li>TNU has scientific library with 945000 copies of scientific, educational, fiction and periodicals.</li>
                    <li>TNU Research Institutes offers 110 research laboratories, electronic library with access to more than 12 million digital online sources, bio-technology Centre, Techno Park, Center for Language Studies, Cultural Education Center “Confucius”, Center of periodicals, printing and translation center. It emphasizes “Russian world”, and the cultural centers of Iran and Pakistan.</li>
                  </ul>
           </section>

           {/* Tajik National University Notable Alumini */}
           <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] ">
                  <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Tajik National University - Notable Alumini</h2>
                  <p className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%] ">Tajik National University, TNU, prepares extensive human resources for the economy of Tajikistan, from journalists to finance professionals and managers.
                  President <a href="https://en.wikipedia.org/wiki/Emomali_Rahmon" className="underline">Emomali Rahmon</a> and the former chairman of the <a href="https://en.wikipedia.org/wiki/National_Bank_of_Tajikistan" className="underline">National Bank of Tajikistan</a> Murodali Alimardon are alumni of Tajik National University, TNU.
                  </p>
           </section>

            {/* Tajik National University Facts */}
            <section className="flex flex-col md:flex-row mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] justify-between ">
              <div className="md:w-[37.5vw] flex-shrink-0">
                  <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Tajik National University - Key Facts</h2>
                  <ul className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%] list-disc pl-[4vw] md:pl-[1.5vw] list-outside">
                    <li><strong>Type</strong> - National University like AIIMS in India</li>
                    <li><strong>Established</strong> - 21st March, 1947</li>
                    <li>One of the reputed and old University</li>
                    <li><strong>Academic Staff</strong> - 1299</li>
                    <li><strong>Students</strong> - 22,661</li>
                    <li>Medium of instruction English</li>
                    <li>Country ranking 01</li>
                    <li><strong>QS Emerging</strong> - 241-250(Europe & Central Asia)</li>
                    <li><strong>QS World Rank</strong> - 561</li>
                    <li><strong>Europe & Asian University ranking</strong> - 36</li>
                    <li><strong>FMGE Passing Ratio</strong> - 50%</li>
                    <li>No Licensing exam</li>
                    <li>Direct admission</li>
                    <li>NEET/FMGE coaching from 1st year</li>
                    <li><strong>Travel time from India</strong> - 03 hours.</li>
                    <li>Direct Flight from Delhi to Dushanbe.</li>
                    <li>128 research labs</li>
                    <li>Campus TNU is spread over 500 acres</li>
                    <li>Indian teacher and Indian syllabus</li>
                    <li>Indian Food</li>
                    <li><strong>Weather</strong> - Same like India.</li>
                    <li><strong>Currency</strong> - Somoni</li>
                    <li><strong>Website</strong> - <a className="cursor-pointer underline" href="http://www.tnu.tj/">www.tnu.tj</a></li>
                    <li><a className="cursor-pointer underline"  href="/assets/pdf/Information-For-Students-Seeking-Admission-In-Tajik-National-University.pdf"><strong>Tajikistan fulfilling all criteria as laid down by NMC</strong></a>(Click Here to Know More)</li>
                    <li><strong>Scholarship</strong> - Scholarship is granted at entry level also to those students who have 450+ NEET score and 70% & above marks in 12th standard</li>
                  </ul>
              </div>

              <Image src="/assets/Images/mbbs-in-tajikistan/tajik-national-university/Tajikistan3.png" alt="Tajikistan" width={530} height={630} className="hidden md:block w-[32.5vw] ml-auto h-[39.375vw]"/>
           </section>

           {/* MBBS in Indian Student */}
           <section className=" mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] gap-[vw] justify-between ">
                  <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">MBBS in Tajik Natinonal University for Indian Student</h2>
                  <p className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%] mb-[2vw] md:mb-[.5vw]">The cost of studying MBBS in TNU, Tajikistan is affordable just like India. TNU is highly popular among Indian students due to following main reasons:-</p>
                  <div className="flex flex-col md:flex-row gap-[3vw] md:gap-[1.5vw]  ">
                  <ul className="text-smallTextPhone text-left md:text-regularText w-full md:w-[37.5vw] flex-shrink-0 md:text-justify leading-[150%] list-disc pl-[4vw] md:pl-[1.5vw] list-outside">
                    <li>Limited seats thereby offered quality education</li>
                    <li>Affordable & reasonable fees& other expenses</li>
                    <li>Best practical exposure.</li>
                    <li>Provided real cadaver from the very first year.</li>
                    <li>Biggest hospital</li>
                    <li>Safe & secure place to study</li>
                    <li>Indian Food</li>
                    <li>NExT coaching facility</li>
                  </ul>
                  <ul className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%] w-full md:w-[37.5vw] flex-shrink-0  list-disc pl-[4vw] md:pl-[1.5vw] list-outside">
                    <li>Indian professor.</li>
                    <li>Indian author books.</li>
                    <li>Strict vigilance and 24x7 monitoring.</li>
                    <li>Drinking & smoking is completely prohibited in the city</li>
                    <li>Located nearby India</li>
                    <li>Similar weather like India</li>
                    <li>English is the medium of instruction which breaks the barriers of communication for international students including Indian students.</li>
                  </ul>

                  </div>
                  
           </section>

           {/*NMC approved Medical College in Tajikistan  */}
           <section className=" mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] justify-between items-center gap-[2vw] flex flex-col md:flex-row">
            <div className="md:w-[37.5vw] flex-shrink-0 ">
              <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">NMC approved medical colleges in Tajikistan</h2>
              <ul className="text-smallTextPhone text-left md:text-regularText w-full md:text-justify leading-[150%] list-disc pl-[4vw] md:pl-[1.5vw] list-outside">
                <li>MBBS of Tajikistan is valid in India after passing FMGE/NExT conducted by National Board of Education (NBE).</li>
                <li>For Indian foreign medical graduates, the FMGE is conducted twice a year.</li>
                <li>Tajik National University is recognized by NMC, WHO, FAIMER, ECFMG, WFME and UNESCO.</li>
                <li>This recognition is very crucial for Indian students who wish to pursue their medical education from TNU and thereafter wish to practice medicine in India upon their return.</li>
                <li>TNU is recognized by several international educational bodies and organizations, ensuring that its degrees are acknowledged globally.</li>
                <li>TNU has established partnerships with numerous institutions worldwide, promoting academic exchange and research collaboration.</li>
                <li>The medical faculty of TNU is listed in the World Health Organization's (WHO) World Directory of Medical Schools.</li>
                <li>Being in the WHO directory also signifies adherence to global standards in medical education.</li>
              </ul>
            </div>
            <div>
              <Image src="/assets/Images/mbbs-in-tajikistan/tajik-national-university/Tajikistan4.jpg" alt="Tajikistan" width={600} height={500} className="mx-auto md:w-[20vw] h-auto rounded-[4vw] md:rounded-[1vw] "/>                  
              <h2 className="text-smallTextPhone leading-[120%] md:text-regularText mt-[3vw] md:mt-[1.5vw] text-center ">Our Director with Head of Anatomy Department of Tajik National University</h2>
            </div>
           </section>

            {/*TNU hostel  */}
            <section className=" mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] gap-[vw] justify-between ">
                  <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Tajik National University Hostel</h2>
                  <ul className="text-smallTextPhone text-left md:text-regularText w-full md:text-justify leading-[150%] list-disc pl-[4vw] md:pl-[1.5vw] list-outside">
                    <li>Tajik National University's residence halls are a collection of contemporary student campuses. They have access to all they need for a comfortable stay, independent study and scientific work, leisure, athletics, and involvement in university culture.</li>
                    <li>Each campus has comfortable rooms and necessary living facilities such as dining rooms, housekeeping complexes, recreation areas, libraries, sports grounds, gyms.</li>
                    <li>Separate girls and boys hostel.</li>
                    <li>4 sharing hostels are available for all students with all basic amenities</li>
                    <li>Constantly Indian pupils will be looked after by Indian wardens.</li>
                    <li>Indian foods are also available for Indian students</li>
                    <li>CCTV cameras are available all around inside the hostels</li>
                    <li>It is strictly forbidden to smoke and drink, and smoke detectors are placed in strategic locations.</li>
                  </ul>                  
           </section>
           {/*Research Opportunity  */}
           <section className=" mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] gap-[vw] justify-between ">
                  <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Research Opportunity in Tajik National University</h2>
                  <ul className="text-smallTextPhone text-left md:text-regularText w-full md:text-justify leading-[150%] list-disc pl-[4vw] md:pl-[1.5vw] list-outside">                
                    <li>TNU always prioritizes innovation and research, which motivates students to work on scientific research projects.</li>
                    <li>TNU boasts a large number of research centers and laboratories with state-of-the-art equipment.</li>
                    <li>Faculty members and Indian students could work together on research projects, advancing their academic and professional development.</li>
                  </ul>
           </section>

           {/* Tajik National University Facts */}
           <section className="flex flex-col md:flex-row mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw] pt-[5vw] md:pt-[0vw] gap-[8vw] md:gap-0 justify-between ">
              <div className="md:w-[36vw] flex-shrink-0">
                    <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Step by Step Complete Admission Process</h2>
                    <p className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%]">Following Documents are required for admission in Tajik National University.</p>
                    <ul className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%] list-disc pl-[4vw] md:pl-[1.5vw] list-outside">
                      <li>Submission of documents </li>
                      <li>Within one week, University issues admission letter.</li>
                      <li>Upon receipt of admission letter, student need to deposit $1000 (part of fees) to confirm their seat.</li>
                      <li>Once $1000 is received, university issues invitation/telex in the name of students</li>
                      <li>E-visa to be applied </li>
                      <li>Remaining fees of 1st part to be paid </li>
                      <li>Air ticket to be booked  </li>
                      <li>Departure to be planned  </li>
                    </ul>
              </div>
              
              <div className="md:w-[36vw] flex-shrink-0">
                  <h2 className="text-h5TextPhone leading-[120%] md:text-h3Text mb-[3vw] md:mb-[1.5vw]">Documents Required for Tajik Natinonal University</h2>
                  <p className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%]">Following Documents are required for admission in Tajik National University.</p>
                  <ul className="text-smallTextPhone text-left md:text-regularText md:text-justify leading-[150%] list-disc pl-[4vw] md:pl-[1.5vw] list-outside">
                    <li>10th & 12th Mark Sheets (Must Passed 12th with at least 50% in Physics, Chemistry and Biology).</li>
                    <li>Valid Indian Passport.</li>
                    <li>Passport Size Photos.</li>
                    <li>NEET Score Card (Must Qualify NEET).</li>
                    <li>1 Passport Size Photograph</li>
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