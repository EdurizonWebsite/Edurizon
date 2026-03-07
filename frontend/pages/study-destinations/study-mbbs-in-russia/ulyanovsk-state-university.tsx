import React from 'react'
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from 'next/head';

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tution Fees",
      label: "Ruble 3,50,000 / Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Ulyanovsk, Russia",
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
            <title>Cost of MBBS in Russia for Indian Students – Ulyanovsk State University</title>
            <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
            <meta name="description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/ulyanovsk-state-university." />
            <meta name="author" content="edurizon" />
            <meta name="robots" content="index, follow"/>
            <meta name="DC.title" content="MBBS In Russia" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Dwarka" />
            <meta name="geo.position" content="22.351115;78.667743" />
            <meta name="ICBM" content="22.351115, 78.667743" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Cost of MBBS in Russia for Indian Students – Ulyanovsk State University" />
            <meta property="og:description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/ulyanovsk-state-university." />
            <meta property="og:url" content="https://www.edurizon.in/" />
            <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@edurizon" />
            <meta name="twitter:title" content="Cost of MBBS in Russia for Indian Students – Ulyanovsk State University" />
            <meta name="twitter:description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/ulyanovsk-state-university." />
            <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:image:alt" content="MBBS in Russia" />
            <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/ulyanovsk-state-university" hrefLang="en-in"/>

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
        <Image src="/assets/Images/universities/russia/UlyanovskStateUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Ulyanovsk State University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Ulyanovsk State University stands as a hub for medical excellence, offering a globally competitive curriculum, hands-on training, and opportunities to shape a successful career in medicine.
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
          <h2 className="text-h5TextPhone md:text-h5Text">Ulyanovsk State University</h2>
          <p><b>Full name:</b> The Federal State-Funded Educational Institution of Higher Education "Ulyanovsk State University".</p>
        </div>
        <p>It is a public university situated across the Volga River in Ulyanovsk, Russia. Moscow is around 440 kilometers away. With over 16,000 students, 68 majors, and six colleges, this university is among the biggest research universities in Russia. It improved its educational levels and undertook reforms. "Classical choice" served as its motto when it was founded in 1988. The institution employees 1238 seasoned professionals, the bulk of who hold doctorates; the remaining members have various science degrees.</p>
        <p><b>In April 2017 Ulyanovsk State University won the competition of the Ministry of Education and Science of the Russian Federation and received the status of a Flagship university of the Ulyanovsk region.</b></p>
        <p>Additionally, students have the chance to get a degree that combines law and business. The well-known MBA program places a strong emphasis on finance and international business. The college provides 68 major options. It offers 14 internship programs, 29 resident training programs, and 66 postgraduate programs. For an extended period, the University has been providing "Hospice and palliative care" with funding from the "Health prom." The institution is making good progress in raising the standard of healthcare in the nation and the Ulyanovsk region. </p>
        <p>The university maintains relationships with numerous international universities, including Hunan Normal University (China), Jaro Institute of Management and Research (India), University of Osnabruck (Germany), Shenandoah University (Virginia), Wesleyan College (Macon, Georgia), and Duisburg Essen University (Duisburg, Germany).</p>
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
            <h2 className="text-h5TextPhone md:text-h5Text">Quick Highlights of Ulyanovsk State University</h2>
            <p className="mb-4"><b>Listed below are the key highlights of Ulyanovsk State University</b></p>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <tbody>
                <tr>
                  <th scope="row">Year of Establishment</th>
                  <td>1988</td>
                </tr>
                <tr>
                  <th scope="row">University Type</th>
                  <td>Public</td>
                </tr>
                <tr>
                  <th scope="row">Recognition</th>
                  <td>NMC and WHO approved</td>
                </tr>
                <tr>
                  <th scope="row">Eligibility Criteria</th>
                  <td>50% in PCB aggregate</td>
                </tr>
                <tr>
                  <th scope="row">Course Duration</th>
                  <td>6 years (including 1 year internship)</td>
                </tr>
                <tr>
                  <th scope="row">NEET</th>
                  <td>Qualifying Marks</td>
                </tr>
                <tr>
                  <th scope="row">Medium of Teaching</th>
                  <td>Fully English</td>
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
    <div className="row immigrate-bg">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text">City at Glance</h2>
        </div>
        <ul className="points-two">
          <li>Ulyanovsk is a city that is growing and blossoming every day. All of its residents are able to live respectable lives because to it. The city has an amazing year-round appearance thanks to its lovely parks, streets, and gardens. </li>
          <li>Located on the banks of the Volga River in the city of Ulyanovsk is Ulyanovsk State Medical University. The Ulyanovsk Baratayevka Airport and the Ulyanovsk Vostochny Airport are the two main airports in the city.</li>
        </ul>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Affiliation and Recognition of Ulyanovsk State University</h2>
        </div>
        <p><b>One of Russia's top medical schools, Ulyanovsk State University is associated with and accredited by numerous Medical Councils, including:</b></p>
        <ul className="points-two">
          <li>National Medical Commission of India (NMC).</li>
          <li>World Health Organization (WHO).</li>
          <li>United Nations Educational, Scientific, and Cultural Organization (UNESCO).</li>
          <li>Ministry of Science & Higher Education of the Russian Federation.</li>
          <li>US Department of Education.</li>
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
              <h2 className="text-h5TextPhone md:text-h5Text">Faculties of Ulyanovsk State University</h2>
              <p><b>There are many faculties provided by the university, some of the here:</b></p>
            </div>
            <ul className="points-three">
              <li>Anatomical Pathology.</li>
              <li>Cardiology.</li>
              <li>Dentistry.</li>
              <li>Gastroenterology.</li>
              <li>Infectious Diseases.</li>
              <li>Internal Diseases.</li>
              <li>Medicine.</li>
              <li>Medicine Physiology.</li>
              <li>Obstetrics & Gynecology.</li>
              <li>Path biology.</li>
              <li>Pediatrics.</li>
              <li>Physiology.</li>
              <li>Psychiatry.</li>
              <li>Radio Diagnostics & Therapy.</li>
              <li>Surgery.</li>
            </ul>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading">
              <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Why Study MBBS at Ulyanovsk State University Russia?</h2>
              <p><b>There are 6 faculties at the Samara State Medical University:</b></p>
            </div>
            <ul className="points-two">
              <li>The Faculty of General Medicine is one of the oldest and most respected faculties at the university.</li>
              <li>Over 3000 doctors have graduated since the university's establishment.</li>
              <li>Currently there are more than 500 Indian students enrolled.</li>
              <li>The environment of the Ulyanovsk State University campus is safe and calm, with a large Infrastructure.</li>
              <li>The university is approved by WHO and NMC and globally accepted.</li>
              <li>The university has partnerships with various universities in the USA, Germany, India, UK, and others.</li>
            </ul>
          </div>
        </div>
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
              <h2 className="text-h5TextPhone md:text-h5Text">Fees Structure of Ulyanovsk State University</h2>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle">
                <tbody>
                  <tr>
                    <th scope="row">Tuition Fees</th>
                    <td>3,50,000 Rubles</td>
                  </tr>
                  <tr>
                    <th scope="row">Hostel Fees</th>
                    <td>65,000 Ruble</td> 
                  </tr>
                </tbody>
              </table>
            </div>
            <p><b>Other Charges which includes in</b></p>
            <p>Visa, Medical Insurance, Medical Checkup, Biometric, Food and Air ticket will be extra charges.</p>
          </div>
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
            <h2 className="text-h5TextPhone md:text-h5Text">Ulyanovsk State University Eligibility Criteria</h2>
            <p><b>Students must meet the requirements in order to be admitted to the MBBS program at Ulyanovsk State University in Russia</b></p>
          </div>
          <ul className="points-two">
            <li>The applicant for admission to Ulyanovsk State University must be the age of 17 on December 31st, the year of the admission.</li>
            <li>The student must have received an average of 50% in the 12th grade in the areas of biology, chemistry, and physics. </li>
            <li>To be eligible for admission to the Ulyanovsk State University's MBBS program, one must also meet the NEET requirements.</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="immigrate-bg">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h2 className="text-h5TextPhone md:text-h5Text">Required Documents During Application Process</h2>
            <p><b>Please carry all these related documents before admission to Petrozavodsk State Medical University</b></p>
          </div>
          <ul className="points-two">
            <li>Passport (Minimum 18 months validity).</li>
            <li>10th Certificate & Mark sheet.</li>
            <li>12th Certificate & Mark sheet.</li>
            <li>Birth Certificate.</li>
            <li>10 passport-size Photographs.</li>
            <li>Official Invitation letter from the Medical University of Russia.</li>
            <li>Authorization of all documents from the Ministry of External Affairs, New Delhi.</li>
            <li>Legalization of all documents from the Russian Embassy.</li>
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

export default NewPage
