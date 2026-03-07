import React from 'react'
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tution Fees",
      label: "Ruble 3,19,000 / Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Krasnoyarsk , Russia",
    },
    // {
    //   icon: "/assets/Images/Icons/ExperienceIcon.svg",
    //   text: "World Rank",
    //   label: "Top 10 in Russia",
    // },
    // {
    
    //   icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
    //   text: "Amazing Fact",
    //   label: "Highest Practical Exposure",
    // },
  ];
const NewPage = () => {
  return (
    <>
      <Head>
        <title>MBBS Abroad for Indian Students: Krasnoyarsk State Medical University</title>
        <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
        <meta name="description" content="From cost of MBBS in Russia to university admission & eligibility, https://www.edurizon.in/study-destinations/study-mbbs-in-russia/krasnoyarsk-state-medical-university provides detailed information and scholarship tips for Indian students" />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS In Russia" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MBBS Abroad for Indian Students: Krasnoyarsk State Medical University" />
        <meta property="og:description" content="From cost of MBBS in Russia to university admission & eligibility, https://www.edurizon.in/study-destinations/study-mbbs-in-russia/krasnoyarsk-state-medical-university provides detailed information and scholarship tips for Indian students." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="MBBS Abroad for Indian Students: Krasnoyarsk State Medical University" />
        <meta name="twitter:description" content="From cost of MBBS in Russia to university admission & eligibility, https://www.edurizon.in/study-destinations/study-mbbs-in-russia/krasnoyarsk-state-medical-university provides detailed information and scholarship tips for Indian students." />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Russia" />
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/krasnoyarsk-state-medical-university" hrefLang="en-in"/>

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
      <div  className="text-regularTextPhone md:text-regularText text-black">
        <div className="relative h-auto w-full dark:text-white">
        <Image src="/assets/Images/universities/russia/KrasnoyarskStateMedicalUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Krasnoyarsk State Medical University
                </h1>
            </div>
            <p className="text-regularTexts text-center">
            Get the best medical education at Krasnoyarsk State Medical University, where experienced faculty, advanced laboratories, and clinical exposure shape the future doctors of the world.
            </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-[2.25vw]  md:gap-[1.125vw] items-center px-[5vw] md:p-[.5vw] justify-center">
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
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h3 className="text-h5TextPhone md:text-h5Text">Krasnoyarsk State Medical University</h3>
          <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
        </div>
        <p>One of the top universities in Siberia and the Far East for higher education is Krasnoyarsk State Medical University. Third in Siberia and the Far East, Krasnoyarsk State Medical University is ranked third among medical universities in the Russian Federation. It is ranked seventeenth overall. Combining Leningrad Medical Institute and Leningrad Pediatric Dental Institute, Krasnoyarsk State Medical University was formed. The All-Union Committee for Higher Education issued an order in 1942 that established Krasnoyarsk Medical Institute, which later became Krasnoyarsk State Medical University. The Krasnoyarsk Medical Institute only had a medical faculty until 1958, when a pediatric faculty was established. Three faculties were established: the Faculty of Dentistry in 1978, the Faculty of Higher Nursing Education in 1992, and the Faculty of Pharmacy in 2006. Over 30,000 physicians, pediatricians, dentists, managers, and organizers of practical public health have been trained at Krasnoyarsk State Medical University during its history. Krasnoyarsk State Medical University has trained roughly 2,500 physicians during the past five years. </p>
        <p>About 800 students are enrolled in Krasnoyarsk University across all faculties as of right now. The Krasnoyarsk State Medical University is a dynamic institution. Krasnoyarsk State Medical University has added eight new departments in the previous five years, including the Interdepartmental Biochemical Research Laboratory, the Laboratory of Anthropology, the Institute of Nutrition, and the Morphological Center. In international collaboration with other universities in Krasnoyarsk, Russia, Japan, France, Italy, Germany, and other nations, Krasnoyarsk State Medical University has undertaken innovative and engaging cooperative initiatives. Currently, 690 professors and teachers work at Krasnoyarsk State Medical University throughout 66 departments.</p>
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
                        <h3 className="text-h5TextPhone md:text-h5Text"> Quick Highlights Of About Krasnoyarsk State Medical University</h3>
                        <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped align-middle">
                            <tbody>
                                <tr>
                                    <th scope="row">University Type</th>
                                    <td>Public</td>
                                </tr>
                                <tr>
                                    <th scope="row">Established</th>
                                    <td>1942</td>
                                </tr>
                                <tr>
                                    <th scope="row">Recognition</th>
                                    <td>NMC and WHO approved</td>
                                </tr>
                                <tr>
                                    <th scope="row">Elegibility</th>
                                    <td>50% in Physics, Chemistry and Biology</td>
                                </tr>
                                <tr>
                                    <th scope="row">Course Duration</th>
                                    <td>6 Years</td>
                                </tr>
                                <tr>
                                    <th scope="row">NEET</th>
                                    <td>Qualifying Marks</td>
                                </tr>
                                <tr>
                                    <th scope="row">IELTS/TOEFL</th>
                                    <td>Not Required</td>
                                </tr>
                                <tr>
                                    <th scope="row">Medium of Teaching</th>
                                    <td>English</td>
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
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h3 className="text-h5TextPhone md:text-h5Text"> Krasnoyarsk City</h3>
          <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
        </div>
         <p>The largest city in Krasnoyarsk Krai, Russia, is also its administrative hub. It is the second-biggest city in Siberia after Novosibirsk, and it is located along the Yenisey River. More than 1.1 million people live there. One of the biggest aluminum producers in the nation, Krasnoyarsk is also a significant intersection of the well-known Trans-Siberian Railway. Author Anton Chekhov deemed Krasnoyarsk to be the most beautiful city in Siberia due to the area's unparalleled natural scenery. Located 10 kilometers south of the city is the Stolby Nature Sanctuary. Home to the Siberian Federal University, Krasnoyarsk is a significant hub for education in Siberia. 2019 saw the third Winter Universiade held in Russia, with Krasnoyarsk serving as host city.</p>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="heading">
          <h3 className="text-h5TextPhone md:text-h5Text">Affiliation and Recognition of Krasnoyarsk State Medical University</h3>
          <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
        </div>
         <ul className="points-two">
          <li>The Russian government established the Krasnoyarsk State Medical University.</li>
          <li>NMC approved college.</li>
          <li>College recognized by WHO and NMC.</li>

        </ul>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="heading">
          <h3 className="text-h5TextPhone md:text-h5Text"> Faculties of Krasnoyarsk State Medical University</h3>
          <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
        </div>
         <ul  className="points-two">
          <li>Faculty of General Medicine.</li>
          <li>Faculty of Pharmacy.</li>
          <li>Faculty of Stomatology.</li>
          <li>Faculty of Pediatrics.</li>
          <li>Faculty of Clinical Psychology.</li>
          <li>Faculty of Medical Cybernetics.</li>
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
          <h3 className="text-h5TextPhone md:text-h5Text">Why Study MBBS at Krasnoyarsk State Medical University?</h3>
          <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
          <p>Students at Krasnoyarsk State Medical University will have access to excellent resources that will help them comprehend the subject matter more fully. </p>
          <p>After graduating from Krasnoyarsk State Medical University, a student will be well-equipped to face obstacles outside of the classroom.</p>
          <p>Since English will be the primary medium of instruction, international students will be able to follow along.</p>
        </div>
        <ul className="points-two">
          <li>The one and only university which provide Scholarship for eligible students.</li>
          <li>Recognized by NMC, WHO.</li>
          <li>Affordable Course Fees.</li>
          <li>Accommodations.</li>
          <li>Best Quality Education.</li>
          <li>Availability of Indian Food.</li>
          <li>Modern Technologies.</li>            
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="inner-page-bg dark:bg-black">
  <div className="container">
      <div className="row g-0">
          <div className="immigrate-bg">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="heading">
                      <h3 className="text-h5TextPhone md:text-h5Text">Fee Structure of Krasnoyarsk State Medical University</h3>
                      <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
                  </div>
                  <div className="table-responsive">
                      <table className="table table-bordered table-striped align-middle">
                          <tbody>
                              <tr>
                                  <th scope="row">Tuition Fees</th>
                                  <td>3,19,000 Ruble</td>
                              </tr>
                              <tr>
                                  <th scope="row">Hostel Fees</th>
                                  <td>12,000 Ruble</td>
                              </tr> 
                          </tbody>
                      </table>
                  </div> 
                  <p>Visa, Medical Insurance, Medical Checkup, Biometric, Food, and Air ticket will be extra charges.</p>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"> 
                <div className="heading">
            <h3 className="text-h5TextPhone md:text-h5Text"> Eligibility Criteria to Study Medicine at Krasnoyarsk State Medical University?</h3> 
            <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
            <p>In recent years, international students aiming to obtain a medical degree have grown to love Russia's Krasnoyarsk State Medical University. To apply to the Krasnoyarsk State Medical University in Russia's MBBS program, make sure you meet the requirements listed below.</p>
        </div>
        <ul className="points-two"> 
            <li>The applicant must pass an equivalent competent test or the higher secondary examination offered by an accredited board.</li>
            <li>In the 10+2 test, students must receive at least 50% in Physics, Chemistry, Biology, and English.</li>
            <li>The applicant must be 17 years old at the time of admission.</li>
            <li>Indian applicants need to score well on the NEET in order to be considered.</li>
        </ul>  
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
          <h3 className="text-h5TextPhone md:text-h5Text"> Documents Required for Krasnoyarsk State Medical University</h3>
          <h5>MBBS in Russia – MBBS in Krasnoyarsk State Medical University</h5>
          <p><b>Please bring all of these necessary documents with you when you apply to Krasnoyarsk State Medical University.</b></p>
        </div>
        <ul className="points-two">
          <li>Passport (validity minimum of 18 months).</li>
          <li>10<sup>th</sup> grade diploma with grade report.</li>
          <li>12<sup>th</sup> grade diploma with grade report.</li>
          <li>10 passport-sized photos.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<div className='h-[4vw]'/> 
      </div>
    </>
  )
}

export default NewPage
