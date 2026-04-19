import React from 'react'
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";
const feesData = {
  tuition: "3,47,380",
  hostel: "20,000",
};

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tuition Fees",
      label: `Ruble ${feesData.tuition} / Year`
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Kaliningrad Oblast, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "Rank",
      label: "Country Rank - 5th, QS World Rank - 801",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "",
      label: "Best FMGE Ratio",
    },
  ];

const ImmanuelKantBalticFederalUniversity = () => {
  return (
    <>
      <Head>
        <title>Cost of MBBS in Russia | Indian Students Guide – Immanuel Kant Baltic Federal University</title>
        <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
        <meta name="description" content="Learn the true cost of MBBS in Russia, scholarship options and best university admission process for Indian students on https://www.edurizon.in/study-destinations/study-mbbs-in-russia/immanuel-kant-baltic-federal-university" />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS In Russia" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cost of MBBS in Russia | Indian Students Guide – Immanuel Kant Baltic Federal University" />
        <meta property="og:description" content="Learn the true cost of MBBS in Russia, scholarship options and best university admission process for Indian students on https://www.edurizon.in/study-destinations/study-mbbs-in-russia/immanuel-kant-baltic-federal-university" />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="Cost of MBBS in Russia | Indian Students Guide – Immanuel Kant Baltic Federal University" />
        <meta name="twitter:description" content="Learn the true cost of MBBS in Russia, scholarship options and best university admission process for Indian students on https://www.edurizon.in/study-destinations/study-mbbs-in-russia/immanuel-kant-baltic-federal-university" />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Russia" />
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/immanuel-kant-baltic-federal-university" hrefLang="en-in"/>

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
      <div className="text-regularTextPhone md:text-regularText text-black"> 

<div className="relative h-auto w-full dark:text-white">
        <Image src="/assets/Images/universities/russia/ImmanuelKantBalticFederalUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Immanuel Kant Baltic Federal University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Established in 1932,Bashkir State Medical University located at Ufa is one of the top and leading institutions of Russia and the center of the medical and pharmaceutical sciences of the Republic of Bashkortostan.
            </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.25vw]  md:gap-[1.125vw] items-center px-[5vw] md:p-[.5vw] justify-center">
              {services.map((item, index) => (
                <div key={index} className="w-[37.5vw] md:w-[16.5vw] h-[29.25vw] md:h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
                            rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start py-[3vw] 
                            md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black">
                  <Image src={item.icon}
                    alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative  overflow-hidden shrink-0" />
                  <p className="text-tinyTextPhone md:text-tinyText text-center leading-[150%]"> {item.text} <br /><span className="font-semibold"> {item.label}</span></p>
                </div>
              ))}
            </div>
        </div>
        </div>
      <section className="inner-page-bg dark:bg-black">
  <div className="container">
      <div className="row g-0">
          <div className="immigrate-bg">
              <div className="row">
                  <div className="col-xl-12 col-md-12 col-12">
                      <div className="heading">
                          <h2 className="text-h5TextPhone md:text-h5Text">Important videos of Immanuel Kant Baltic Federal University</h2>
                          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xl-12">
                      <div id="edurizon-videos" className="grid md:grid-cols-4 grid-cols-2 gap-y-[1vw] md:gap-y-[.5vw] owl-carousel">
                          <div className="edu-videos">
                            <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/BmmBVnrPL-s?si=oaw4Y8Z6cc8g2ekB" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                          </div>
                          <div className="edu-videos">
                            <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/imcEmLmOF8U?si=Almyq_e9zFob-Mkg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                          </div>
                          <div className="edu-videos">
                            <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/81IIFf70naA?si=eNzcV02m1o29XCMW" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                          </div>
                          <div className="edu-videos">
                            <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/WCz0c6EWSaM?si=TCrHr-BwFh1D6eyk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                          </div>
                          <div className="edu-videos">
                            <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/rSdmJMbPCno?si=ZrPNLFh_tHz2ihJI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                          </div> 
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">Immanuel Kant Baltic Federal University</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <p>
          The Baltic Federal University, also known as Immanuel Kant Baltic Federal University, is a university located in Kaliningrad, Russia. It was named after Immanuel Kant to honour his contributions to philosophy. The university
          offers a wide range of academic programs in various fields of study.
        </p>
        <p>Baltic Federal University (BFU) is a higher education institution located in Kaliningrad, Russia. It was established in the year 2010 through the merger of two previously existing universities.</p>
        <p>BFU is a multidisciplinary university offering undergraduate and postgraduate programs in various fields including humanities, natural sciences, engineering, social sciences and economics.</p>
        <p>
          The university aims to provide high-quality education, promote scientific research and contribute to the socio-economic development of the region. It actively collaborates with international partners, participates in academic
          exchange programs and offers opportunities for students to study abroad.
        </p>
        <p>
          BFU's campus is equipped with modern facilities, including research centers, laboratories, libraries and sports facilities. The university also emphasizes extracurricular activities, cultural events and student organizations to
          enhance the overall learning experience.
        </p>
        <p>Baltic Federal University serves as an important educational institution in the Kaliningrad region offering diverse academic programs and fostering intellectual growth and development for its students.</p>
      </div>
    </div>
  </div>
</section>

<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">Immanuel Kant Baltic Federal University, Kaliningrad, Russia New Campus</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <p>Kaliningrad was founded by Teutonic knights in the XIII century. It became one of the cities of the Hanseatic League and was once the capital of Prussia. The philosopher Immanuel Kant spent all his life in the city and died there in 1804.</p>
        <p>Today Kaliningrad is a dynamically developing trade and industrial centre of Russia’s westernmost region. The historical legacy of many centuries, which has garnered interest in the past years, successfully intertwines with signs of the third millennium, creating a unique combination, which attracts guests from all over the world.</p>
        <p>Immanuel Kant Baltic Federal University is the largest educational, scientific, and cultural centre in the westernmost region of Russia.</p>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">Why Study MBBS at Immanuel Kant Baltic Federal University</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <ul className="points-two">
          <li>Immanuel Kant Baltic Federal is a Government University which can be equated with AIIMS.</li>
          <li>Affordable and budget friendly fee for MBBS in Russia.</li>
          <li>Hassle-free & smooth admission procedure.</li>
          <li>English taught programme for international students.</li>
          <li>Hostel facilities are available for international students.</li>
          <li>2 - 3 sharing rooms are available.</li>
          <li>World className, modern and advanced infrastructure.</li>
          <li>Degree is accepted globally so students can practise medicine anywhere in the world.</li>
          <li>Laboratories and classNamerooms have cutting edge technology enabling students to have better theoretical and practical exposure.</li>
          <li>Clinical training at top hospitals and clinics.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row g-0">
      <div className="immigrate-bg">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h2 className="text-h5TextPhone md:text-h5Text">Student Life at Immanuel Kant Baltic Federal University</h2>
            <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
          </div> 
          <ul className="points-two">
            <li>Extracurricular activities being conducted for the holistic development of students.</li>
            <li>Indian students very often organise various celebrations, festivals, sports activities and art competitions all through the year.</li>
            <li>Students have the access to enjoy the best sports facilities.</li>
            <li>Sports activities are held regularly in the university such as volleyball, basketball, table tennis, badminton, rugby, football,  track and field athletics, swimming etc.</li>
            <li>7 dormitories within walking distance from the university campus.</li>
            <li>27 Research laboratories at Immanuel Kant Baltic Federal University campus for the holistic development of practical skills.</li>
            <li>Connectivity of wifi in the campus area.</li>
          </ul>
        </div>  
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">Immanuel Kant Baltic Federal Key Figures & Facts</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <ul className="points-two">
          <li>Students - 12 000+.</li>
          <li>Staff and faculty - 1400+.</li>
          <li>Professors 740.</li>
          <li>PhD students 430.</li>
          <li>Degree programmes 150.</li>
          <li>Scientific and educational 4.</li>
          <li>Higher schools and the university college 13.</li>
          <li>International students from 51 countries.</li>
        </ul>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="heading">
          <h2 className="pt-[1vw] text-h5TextPhone md:text-h5Text">Immanuel Kant Baltic Federal Infrastructure</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <ul className="points-two">
          <li>Educational buildings  23.</li>
          <li>Sports facilities 20.</li>
          <li>Dormitories, 7 of them are apartment-type 13.</li>
          <li>Common use centres 29.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">Application Dates for Immanuel Kant Baltic Federal University</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <ul className="points-two">
          <li>Immanuel Kant Baltic Federal University admission 2024.</li>
          <li>Admission for MBBS in Immanuel Kant Baltic Federal University generally starts from the Month of April every year.</li>
          <li>Seats are very limited and therefore are filled on a first-come-first-served basis.</li>
          <li>Early applications help the students in securing confirmed seats in Immanuel Kant Baltic Federal University.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">Immanuel Kant Baltic Federal University Entrance Exam</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <ul className="points-two">
          <li>Entrance examinations for applicants into Bachelor programmes will be held from.</li> 
          <li>Immanuel Kant Baltic Federal University conducts entrance exams in respect of all international students, including Indians, every year. </li>
          <li>The subjects for the entrance exams are English & Biology.</li>
          <li>It is mandatory to get qualified in each subject. </li>
          <li>The International General Medicine programme does not require Russian language skills.</li>
        </ul>
        <div className="heading">
          <h2>Duration of MBBS Course in Immanuel Kant Baltic Federal University</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <p>Duration of the MBBS course in Immanuel Kant Baltic Federal University, Russia is 6 years including internship.</p>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">Immanuel Kant Baltic Federal University for Indian Students</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <ul className="points-two">
          <li>Immanuel Kant Baltic Federal University is one of the 10 Russian federal universities and it holds a leading position in education and science in the Northwestern Federal District.</li>
          <li>Immanuel Kant Baltic Federal University is very good university for the Indian students.</li>
          <li>Several Indian students are presently pursuing their MBBS from Immanuel Kant Baltic Federal University.</li>
        </ul>
        <div className="heading">
          <h2 className='pt-[1vw] text-h5TextPhone md:text-h5Text'>Immanuel Kant Baltic Federal University FMGE Result</h2>
        </div>
        <p>42.31% - 2024.</p>
        <div className="heading">
          <h2 className='pt-[1vw] text-h5TextPhone md:text-h5Text'>Immanuel Kant Baltic Federal University Hostel</h2>
        </div>
         <ul className="points-two">
          <li>Immanuel Kant Baltic Federal University has 13 comfortable dormitories for international students. </li>
          <li>Dormitories are located near University buildings. </li>
          <li>Immanuel Kant Baltic Federal University administration offers international students to live together with their compatriots.</li>
         </ul>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">Immanuel Kant Baltic Federal University Acceptance Rate</h2>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <ul className="points-two">
          <li>The Immanuel Kant Baltic Federal University is a leading university of the Kaliningrad region and one of 10 federal universities of the Russian Federation.</li>
          <li>Conveniently located in the heart of Europe, Immanuel Kant Baltic Federal University attracts students and researchers from around the world.</li>
          <li>Today citizens from 50 countries of the world - from Europe, Latin America, Asia and Africa - study at different levels and conduct research at the University.</li>
          <li>Immanuel Kant Baltic Federal University is the scientific and education bridge between Europe and Russia.</li>
        </ul>
        
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
        <div className="heading">
          <h4>Immanuel Kant Baltic Federal University Official Website</h4>
          <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <p><a href="https://kantiana.ru/" target="_blank"><b><i className="fas fa-globe" aria-hidden="true"></i> Kantiana.ru</b></a></p>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
        <div className="heading">
          <h4>Authorisation Letter of Immanuel Kant Baltic Federal University</h4>
        </div>
        <div className="card p-2 d-inline-block"><p className="mb-0"><a href="../../assets/pdf/authorisation-letter-of-lmmanuel-kant-baltic-federal-university.pdf" target="_blank"><b><i className="fas fa-file-pdf"></i> Authorisation Letter</b></a></p></div>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                        <h2 className="text-h5TextPhone md:text-h5Text">Quick Highlights of About Immanuel Kant Baltic Federal University</h2>
                        <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered align-middle">
                            <tbody>
                                <tr>
                                    <th scope="row">Year of Establishment</th>
                                    <td>1947</td>
                                </tr>
                                <tr>
                                    <th scope="row">University Type</th>
                                    <td>Public</td>
                                </tr>
                                <tr>
                                  <th scope="row" >Immanuel Kant Baltic Federal University Fees</th>
                                  <td>{feesData.tuition} Ruble per annum	-	2026</td> 
                              </tr>
                              <tr> 
                                <td>{feesData.hostel} Ruble per annum	-	2026</td>
                            </tr>
                                <tr>
                                    <th scope="row">Recognition</th>
                                    <td>NMC and WHO approved</td>
                                </tr>
                                <tr>
                                    <th scope="row">Eligibility</th>
                                    <td>50% in PCB aggregate</td>
                                </tr>
                                <tr>
                                    <th scope="row">Course Duration</th>
                                    <td>6 Years (including 1 year internship)</td>
                                </tr>
                                <tr>
                                    <th scope="row">NEET</th>
                                    <td>Qualifying Marks</td>
                                </tr>
                                <tr>
                                    <th scope="row">IELTS/TOFEL</th>
                                    <td>No need</td>
                                </tr>
                                <tr>
                                    <th scope="row">Medium of Teaching</th>
                                    <td>Fully English</td>
                                </tr>
                                <tr>
                                  <th scope="row">Immanuel Kant Baltic Federal University Location</th>
                                  <td>Ulitsa Aleksandra Nevskogo, 14, Kaliningrad, Kaliningradskaya oblast, Russia - 236041</td>
                              </tr>
                                <tr>
                                    <th scope="row">Photos in Instagram</th>
                                    <td><a href="https://www.instagram.com/edurizon_pvt.ltd/" target="_blank" className="btn-custom btn-univ-detail">Click Here</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">University &amp; Review videos</th>
                                    <td><a href="https://www.youtube.com/c/EdurizonPvtLtd" target="_blank" className="btn-custom btn-univ-detail">Click Here</a></td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="immigrate-bg">
    <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="heading">
            <h2 className="text-h5TextPhone md:text-h5Text">Immanuel Kant Baltic Federal University City at a Glance</h2>
            <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
          </div>
          <ul className="points-two">
            <li>Kaliningrad, a city beside the Baltic Sea, was a part of Germany for seven centuries.</li>
            <li>Ninety-five percent of the people living in Kaliningrad speak and comprehend Russian.</li>
            <li>Amber production in Kaliningrad is well-known.</li>
            <li>The headquarters of the Russian Navy's Baltic Fleet are located in Kaliningrad.</li>
            <li>Immanuel Kant, one of the greatest philosophers of all time, was born and raised in Konigsberg (now Kaliningrad). </li>
          </ul>
        </div> 
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="heading">
            <h2 className="mt-0">Recognitions of Immanuel Kant Baltic Federal University</h2> 
            <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
        </div>
        <ul className="points-two">
          <li>National Medical Commission (erstwhile Medical Council of India).</li>
          <li>Ministry of Science and Higher Education, Russia (MSHE).</li>
          <li>World Directory of Medical Schools (WDOMS).</li>
          <li>Education Commission for Foreign Medical Graduates (ECFMG).</li>
          <li>Foundation for Advancement of International Medical Education and Research (FAIMER).</li>
        </ul>
        </div> 
      </div>
    </div>
  </div>
</section> 
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row g-0">
      <div className="immigrate-bg">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h2 className="text-h5TextPhone md:text-h5Text">Faculties of Immanuel Kant Baltic Federal University</h2>
            <p><b>Total 4 faculties in Immanuel Kant Baltic Federal University: </b></p>
          </div> 
          <ul className="points-two">
            <li>Faculty of Medicine.</li>
            <li>Faculty of Surgical Disciplines.</li>
            <li>Faculty of Obstetrics & Gynecology.</li>
            <li>Faculty of Therapy.</li>
          </ul>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h2 className='pt-[1vw] text-h5TextPhone md:text-h5Text'>Fee Structure of Immanuel Kant Baltic Federal University</h2>
            <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
                <tbody>
                    <tr>
                        <th scope="row">Tuition Fees</th>
                        <td>{feesData.tuition} Ruble</td>
                    </tr>
                    <tr>
                        <th scope="row">Hostel Fees</th>
                        <td>{feesData.hostel} Ruble</td>
                    </tr> 
                </tbody>
            </table>
        </div>
        <p><b>Visa Renewal, Medical Checkup, Medical Insurance, Biometric, Food and Air ticket will be extra charges.</b></p>
      </div>
    </div>
  </div>
    </div>
</section>

<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row g-0">
      <div className="immigrate-bg">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h2 className="text-h5TextPhone md:text-h5Text">Eligibility Criteria for Admission in Immanuel Kant Baltic Federal University</h2>
            <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
          </div>
          <p>The following requirements must be met by any Indian student wishing to study MBBS in Russia at Immanuel Kant Baltic Federal University:</p>
          <ul className="points-two">
            <li><b>Age requirement:</b> The applicant should be 17 years of age as on 31st December in the admission year.</li>
            <li><b>Academic requirements:</b> The applicant must have passed 12th standard with at least 50% score in Physics, Chemistry, and Biology and English as a compulsory subject.</li>
            <li><b>NEET requirements:</b> Passed NEET exam (50th percentile for general/EWS category and 40th percentile for unreserved category).</li>
          </ul>
        </div>  
      </div>
    </div>
  </div>
</section>

<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row g-0">
      <div className="immigrate-bg">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h2 className="text-h5TextPhone md:text-h5Text">Documents Required for Immanuel Kant Baltic Federal University</h2>
            <span>MBBS in Russia – MBBS in Immanuel Kant Baltic Federal University</span>
            <p><b>The following documents must be submitted as part of the Immanuel Kant Baltic Federal University's MBBS admissions process:</b></p>
          </div> 
          <ul className="points-two">
            <li>Pass certificates and mark sheet of className 10th and 12th.</li>
            <li>Valid passport.</li>
            <li>Passport size photos.</li>
            <li>NEET scorecard.</li>
            <li>Transfer and migration certificate.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="h-[4vw]"/>
       

      </div>
    </>
  )
}

export default ImmanuelKantBalticFederalUniversity
