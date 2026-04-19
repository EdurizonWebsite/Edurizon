import React from 'react'
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import RelatedVideos from '@/components/videoSlider';
import Head from 'next/head';
const feesData = {
  tuition: "4,10,000",
  hostel: "Included",
};


const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tuition Fees",
      label: `Ruble ${feesData.tuition} / Year`,
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Tambov, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "",
      label: "Highest FMGE Ratio",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "",
      label: "Biggest Hospital in the region",
    },
  ];
  const videoData=[
    {
      id: 0,
      title: "You won't find better university than this under 30 lakhs in Russia",
      channel: 'Edurizon Pvt Ltd',
      views: '44K views',
      time: '2 months ago',
      duration: '18:32',
      thumbnail: 'https://img.youtube.com/vi/xm14Ck8YilA/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=xm14Ck8YilA',
    },
    {
      id: 1,
      title: "Tambov State University Russia | Best Budget-Friendly MBBS Option for Indian Students",
      channel: 'Edurizon Pvt Ltd',
      views: '44K views',
      time: '2 months ago',
      duration: '18:32',
      thumbnail: 'https://img.youtube.com/vi/avYg0ak9Qms/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=avYg0ak9Qms',
    },
    {
      id: 2,
      title: "Tambov State University || The Best University Under 24 Lakhs | MBBS IN RUSSIA",
      channel: 'Edurizon Pvt Ltd',
      views: '44K views',
      time: '2 months ago',
      duration: '18:32',
      thumbnail: 'https://img.youtube.com/vi/0pfplVt8M08/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=0pfplVt8M08',
    },
    {
      id: 3,
      title: "Hostel of Tambov State University || MBBS IN RUSSIA",
      channel: 'Edurizon Pvt Ltd',
      views: '44K views',
      time: '2 months ago',
      duration: '18:32',
      thumbnail: 'https://img.youtube.com/vi/G3pOwOGY4DI/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=G3pOwOGY4DI',
    },
    {
      id: 4,
      title: "Introducing one of the leading University of Russia || Tambov State University || MBBS IN RUSSIA",
      channel: 'Edurizon Pvt Ltd',
      views: '44K views',
      time: '2 months ago',
      duration: '18:32',
      thumbnail: 'https://img.youtube.com/vi/r_lZ1U3oIvY/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=r_lZ1U3oIvY',
    },
  
  ]


const NewPage = () => {
  return (
    <>
        <Head>
            <title>Tambov State Medical University in Russia, MBBS Fees | Edurizon
</title>
            <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
            <meta name="description" content="Edurizon offers admission to Tambov State Medical University in Russia with quality medical education and low MBBS fees.
" />
            <meta name="author" content="edurizon" />
            <meta name="robots" content="index, follow"/>
            <meta name="DC.title" content="MBBS In Russia" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Dwarka" />
            <meta name="geo.position" content="22.351115;78.667743" />
            <meta name="ICBM" content="22.351115, 78.667743" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Tambov State University - MBBS in Russia Low Cost – Indian Students Admission" />
            <meta property="og:description" content="Visit https://www.edurizon.in/study-destinations/study-mbbs-in-russia/tambov-state-university for clear details on MBBS in Russia cost, admission steps, eligibility & how to get scholarships." />
            <meta property="og:url" content="https://www.edurizon.in/" />
            <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@edurizon" />
            <meta name="twitter:title" content="Tambov State University - MBBS in Russia Low Cost – Indian Students Admission" />
            <meta name="twitter:description" content="Visit https://www.edurizon.in/study-destinations/study-mbbs-in-russia/tambov-state-university for clear details on MBBS in Russia cost, admission steps, eligibility & how to get scholarships." />
            <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:image:alt" content="MBBS in Russia" />
            <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/tambov-state-university" hrefLang="en-in"/>

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
        <Image src="/assets/Images/universities/russia/TambovStateUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Tambov State University</h1>
            </div> 
            <p className="text-regularTexts text-center">
            Make your medical dreams a reality at Tambov State University, known for its strong medical faculty, state-of-the-art facilities, and a curriculum that shapes skilled and compassionate doctors. Tambov State Medical University is a reputed Russian institution known for quality medical education and international recognition. Tambov State Medical University offers English-medium MBBS programs, modern infrastructure, and strong clinical exposure, making it a suitable choice for Indian students aspiring to study medicine abroad.
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
        <section className="inner-page-bg mb-4 dark:bg-black">
  <div className="container">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <div className="immigrate-bg">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text">History</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <p className='text-black'>
                Tambov State University named after G.R. Derzhavin with 100 years of history is a modern educational and research center based on the best practices of a traditional university. Sometimes referred to as G. R. Derzhavin State
                University, it is named in honor of the Russian poet and statesman, Gavrila Romanovich Derzhavin, and was formed in 1994 when the Tambov State Pedagogical Institute and Tambov State Institute of Culture were merged into a
                single institution.
              </p>
              <p className='text-black'>
                Tambov State University went through extreme progress transformations. Tambov State University attracts numerous national and international students pursuing higher education due to its progressive and accommodating nature.
                The Tambov State University has world className infrastructure and urban lifestyle gives young students the opportunity to mix leisure with education. This includes being involved in entertaining events like festivals and sports
                competitions. Sports Complexes and museums are always accessible to the university students to help them take their mind off of books and to experience the rich Russian culture. Tambov State University also have Volleyball,
                football and other teams take part in inter university sports competitions across the nation.
              </p>
              <p className='text-black'>
                The Tambov state University is one of the best state University in and around the Russian federation which not only adds to the rapid development of the city but also provides high quality specialists. The Tambov State
                University has more than 100 specialists in various fields ranging from medicine, computer science, nanotechnology to economics, arts etc.
              </p >

              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">The Tambov State University structure is divided into 15 segments which comprise of:-</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>3 academies</li>
                <li>1 faculty &</li>
                <li>11 institutes</li>
              </ul>
              <p>Over 15,000 prospective students from all over the world pursue their study at Tambov State University every year.</p>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov City</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <p className='text-black'>
                Tambov is a city and the administrative center of Tambov Oblast, central Russia, at the confluence of the Tsna and Studenents rivers, about 418 km south-southeast of Moscow. With a population of 261,803 as of 2021, Tambov is
                the largest city, and historical center, of the Tambov Oblast as a whole.
              </p>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University – at a Glance</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                  <tbody>
                    <tr>
                      <th scope="row">Type</th>
                      <td>Public</td>
                    </tr>
                    <tr>
                      <th scope="row">Established</th>
                      <td>1917</td>
                    </tr>
                    <tr>
                      <th scope="row">Rector</th>
                      <td>Vladimir Y.Stromov</td>
                    </tr>
                    <tr>
                      <td>Administrative staff</td>
                      <td>650</td>
                    </tr>
                    <tr>
                      <th scope="row">Undergraduates</th>
                      <td>Over 15,000</td>
                    </tr>
                    <tr>
                      <th scope="row">Postgraduates</th>
                      <td>800</td>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <td>392000, Tambov, Internatsionalnaya St., 33 Tambov, Russia</td>
                    </tr>
                    <tr>
                      <th scope="row">Campus</th>
                      <td>18</td>
                    </tr>
                    <tr>
                      <th scope="row">Location</th>
                      <td>Tambov City, Russia</td>
                    </tr>
                    <tr>
                      <th scope="row">NEET Exam</th>
                      <td>Qualifying marks</td>
                    </tr>
                    <tr>
                      <th scope="row">Course Duration</th>
                      <td>6 years, Including Internship</td>
                    </tr>
                    <tr>
                      <th scope="row">Medium of teaching</th>
                      <td>English</td>
                    </tr>
                    <tr>
                      <th scope="row">University ranking</th>
                      <td>151</td>
                    </tr>
                    <tr>
                      <th scope="row">Research</th>
                      <td>Strong Research & clinical base</td>
                    </tr>
                    <tr>
                      <th scope="row">Hostels</th>
                      <td>2 & 3 sharing with flat bed</td>
                    </tr>
                    <tr>
                      <th scope="row">Cutting-edge, vibrant university offering chances for top-notch research and instruction in the fields of pediatrics, dentistry, medicine and pharmacy.</th>
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
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">About Tambov State University</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Tambov State University is the biggest university in Tambov region.</li>
                <li>Around 13,000 students, including over 2700 international students from more than 69 countries are currently studying at the university.</li>
                <li>The University academic staff is about 800 people, with over 88% of them having academic degrees and ranks.</li>
                <li>
                  At present Tambov State University has cooperative agreements with about a hundred foreign universities, research centers, and public organizations from more than 40 countries of Asia, Africa, Europe and America. The
                  University successfully pursues the policy of international cooperation development, which includes student and professor exchange programs, joint researches, conferences and seminars, publication of scientific journals
                  and collections of scientific works together with foreign partners, and other international activities.
                </li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University has the largest infrastructure in the region</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>well-equipped academic buildings</li>
                <li>Modern comfortable hostels</li>
                <li>Unique stadiums and other sports facilities</li>
                <li>Research and development centers</li>
                <li>Sports and health-improving centers</li>
                <li>A zoo-botanical garden</li>
                <li>A recreation centre on the river bank</li>
                <li>The largest scientific library in the region</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Tambov State University is an old University.</li>
                <li>Tambov State University was established in the year 1917.</li>
                <li>Tambov State University has attained a very good reputation.</li>
                <li>Tambov State University has several hospitals in the region.</li>
                <li>Tambov State University has very low fees and therefore Tambov State University is an economical University.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University Hostel</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <p><b>15 campuses</b></p>
              <ul className="points-two">
                <li>Tambov State University hostels are equipped with all modern facilities. Tambov State University hostels are within the University premises.</li>
                <li>The hostel capacity of Tambov State University has 2 & 3 sharing.</li>
                <li>As of now, there is no Indian food being served for the Indian students. Students either to cook themselves or take food from the canteen/cafeteria available in the University premises.</li>
                <li>All other facilities like washing Machine, WIFI, water filter, microwave etc. is available in all hostels.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University Fee Structure</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Tuition + Hostel + Biometric Fees – 3,85,000 Ruble.</li>
                <li>Charges for Visa renewal, medical insurance, medical checkup etc. will be nominal and taken separately by the Tambov State University</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University for Indian Students</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Recognized, reputed and very good University.</li>
                <li>Best for such students who often look universities near Moscow.</li>
                <li>Presently around 500+ students are pursuing their MBBS in Tambov State University.</li>
                <li>Low and affordable fees.</li>
                <li>Semester-wise fees can be paid.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Affiliation and Recognition of Tambov State University</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <p><b>The Tambov State University has been affiliated and recognized by the various medical council bodies such as</b></p>
              <ul className="points-two">
                <li>National Medical Commission of India (NMC).</li>
                <li>World Health Organization (WHO).</li>
                <li>Ministry of Science & Higher Education of the Russian Federation.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University has seven faculties. The faculty details are given below</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Faculty of General Medicine.</li>
                <li>Faculty of Pediatric.</li>
                <li>Faculty of Dental.</li>
                <li>Faculty of Nursing.</li>
                <li>Faculty of Postgraduate Education.</li>
                <li>Faculty of Pharmaceutical.</li>
                <li>Faculty of General Practitioners.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University for MBBS/Reviews</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Tambov State University has affiliations with and recognition from several international medical councils.</li>
                <li>Because of friendly relationship with India, Tambov State university's campus is welcoming and the environment is healthy for Indian students.</li>
                <li>In addition to strict security vigilance, extra precautions are taken to ensure the safety & security of girls on the university campus and in the residence halls as well.</li>
                <li>Tambov State University hosts visiting lecturers who teach medical students from throughout the globe.</li>
                <li>Students can gain practical experience and exposure to state-of-the-art medical technologies in the university's well-equipped laboratories and clinical settings. MBBS in RUSSIA – MBBS IN TAMBOV STATE UNIVERSITY.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University Ranking</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <p><b>Tambov State University is one of the top public universities in Tambov, Russia</b></p>
              <ul className="points-two">
                <li>It is ranked #401-450 in EECA University Rankings 2022.</li>
                <li>Country Ranking - 145.</li>
                <li>World Ranking - 4,844.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University Eligibility Criteria</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Applicant should have minimum 17 years of age as on December 31st, of the year of admission.</li>
                <li>50% in the 12th standard.</li>
                <li>NEET qualifying marks.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University Admission</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Admissions are done on first-cum-first basis.</li>
                <li>There shall be an entrance exam.</li>
                <li>Students much qualify the entrance exam.</li>
                <li>300 MBBS seats are reserved for the Indian students.</li>
                <li>Student must possess valid Indian passport.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University Eentrance Exam</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Online entrance exam will be held for the subject like Chemistry & Biology.</li>
                <li>Passing/qualifying marks will be 50 out of 100.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University location</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Tambov State University is a public University in Tambov city, Tambov Oblast region of Russia. MBSS IN RUSSIA – MBBS IN TAMBOV STATE UNIVERSITY.</li>
                <li>Tambov State University located in the Tambov city. MBSS IN RUSSIA – MBBS IN TAMBOV STATE UNIVERSITY.</li>
                <li>Tambov State University is the only institution of higher education in the Tambov Oblast which prepares doctors and pharmacists with higher education. MBSS IN RUSSIA – MBBS IN TAMBOV STATE UNIVERSITY.</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Address of Tambov State University</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>392000, Tambov, Internatsionalnaya St., 33 Tambov, Russia</li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">Tambov State University official website</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li><a href="http://www.tsutmb.ru/" target="_blank">http://www.tsutmb.ru/</a></li>
              </ul>
              <div className="heading">
                <h2 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]">How to Reach Tambov State University</h2>
                <span>MBSS in Russia – MBBS in Tambov State University</span>
              </div>
              <ul className="points-two">
                <li>Delhi to Moscow – by flight.</li>
                <li>Moscow to Tambov – by road, by train & by flight.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<RelatedVideos videoData={videoData}/>
<div className='h-[4vw]'/>
        </div>
    </>
  )
}

export default NewPage
