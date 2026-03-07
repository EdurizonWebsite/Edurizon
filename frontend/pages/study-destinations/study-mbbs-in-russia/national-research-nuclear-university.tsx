import React from 'react'
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tution Fees",
      label: "Ruble 6,57,360 / Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Moscow, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "Country Rank",
      label: "05",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "QS World Rank",
      label: "497",
    },
  ];
const NewPage = () => {
  return (
    <>
      <Head>
        <title>MBBS in Russia: Cost, Admission, Scholarship, National Research Nuclear University</title>
        <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
        <meta name="description" content="Check cost of MBBS in Russia, admission procedures, scholarship offers and affordable universities for Indian students on https://www.edurizon.in/study-destinations/study-mbbs-in-russia/national-research-nuclear-university." />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="MBBS In Russia" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MBBS in Russia: Cost, Admission, Scholarship, National Research Nuclear University" />
        <meta property="og:description" content="Check cost of MBBS in Russia, admission procedures, scholarship offers and affordable universities for Indian students on https://www.edurizon.in/study-destinations/study-mbbs-in-russia/national-research-nuclear-university." />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta name="twitter:title" content="MBBS in Russia: Cost, Admission, Scholarship, National Research Nuclear University" />
        <meta name="twitter:description" content="Check cost of MBBS in Russia, admission procedures, scholarship offers and affordable universities for Indian students on https://www.edurizon.in/study-destinations/study-mbbs-in-russia/national-research-nuclear-university." />
        <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
        <meta name="twitter:image:alt" content="MBBS in Russia" />
        <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/national-research-nuclear-university" hrefLang="en-in"/>

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
        <Image src="/assets/Images/universities/russia/NationalResearchNuclearUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">National Research Nuclear University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Interested in the intersection of medicine and nuclear sciences? National Research Nuclear University (MEPHI) offers a specialized medical program integrating advanced technology with healthcare innovation.
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
      <div className="col-xl-8 col-lg-8 col-md-8 col-12">
        <div className="immigrate-bg">
          <div className="row grid md:grid-cols-4 grid-cols-2 gap-y-[1vw] md:gap-y-[.5vw] gap-x-[1vw] md:gap-x-[.5vw]">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="video-section-2">
                <a href="https://www.youtube.com/watch?v=8KTff2M0peE" data-fancybox="video-gallery">
                  <img src="https://i3.ytimg.com/vi/8KTff2M0peE/maxresdefault.jpg" className="img-fluid" />
                  <div className="play-button">
                    <div className="triangle"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="video-section-2">
                <a href="https://www.youtube.com/watch?v=NtUgceLcByk" data-fancybox="video-gallery">
                  <img src="https://i3.ytimg.com/vi/NtUgceLcByk/maxresdefault.jpg" className="img-fluid" />
                  <div className="play-button">
                    <div className="triangle"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">National Research Nuclear University MEPhI (Moscow Engineering Physics Institute), MBBS in Russia – MBBS in MEPhI</h4>
              </div>
              <p>
                MEPhI is a public technical university in Moscow, Russia. It was founded in the year 1942 as the Moscow Mechanical Institute of Munitions, but later renamed as Moscow Mechanical Institute. Its original mission was to train
                skilled personnel for the Soviet military and Soviet atomic bomb project. The history of the National Research Nuclear University began with the creation of the Moscow Institute of Mechanical Munitions in 1942. Later, the
                main Russian nuclear university and leading Soviet scientists, including the head of the Soviet Union, were established there. The Igor Kurchatov Atomic Project played a role in its development and creation. Six Nobel
                Laureates have worked at MEPhI throughout its history: Nikolay Basov, Andrei Sakharov, Nikolay Semenov, Igor Tamm, Ilya Frank and Pavel Cherenkov Subsequently again it was renamed the Moscow Engineering Physics Institute in
                the year 1953, which was its name until 2009.
              </p>
              <p>
                Later, on the pilot project launching on creating National Research Universities" MEPhI was granted this new status. The aim of the university existence is now preparing the specialists by giving them higher professional,
                post-graduation professional, secondary professional and additional professional education, as well as educational and scientific activities.
              </p>
              <p>
                MEPhI is a global university collaborating with a wide range of scientific and educational organizations, attracting international students from all over the world to the educational programs in the groundbreaking fields of
                science, technology, and engineering.
              </p>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">New Wave of Development</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <p>A new wave of university development began in the year 2009, when MEPhI became one of the only two schools in Russia that were recognized by the Russian government as National Universities.</p>
              <p>The same year MEPhI was renamed as the National Research Nuclear University MEPhI (Moscow Engineering Physics Institute)</p>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Mission of MEPhI</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <p>
                MEPhI empowers the world’s best nuclear technology experts and talented students to produce secure and stable energy, excel in creating applied sciences, boost human capital and economic output in various fields, support
                industry and business, and be innovative and creative – as much as they want and can. Overall mission of MEPhI is to energize and improve people’s lives in Russia and all over the world.
              </p>
              <div className="heading">
                <h3>Strategy of MEPhI</h3>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>The strategic goal of MEPhI is to become a global leader in education, science and innovation in nuclear, radiation, sub-nano and nano- technologies and engineering.</li>
                <li>It is to provide a significant contribution to an innovation-driven growth and the competitiveness of the Rosatom State Corporation and other leading Russian high-tech companies in global markets.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Values and culture of MEPhI</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>The culture at MEPhI is based on the principles of openness, internationalism, and innovation.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Core Values of MEPhI</h4>
              </div>
              <ul className="points-two">
                <li>Accountability for results.</li>
                <li>Readiness for change.</li>
                <li>Effectiveness.</li>
                <li>Respect.</li>
                <li>One team.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Campus of MEPhI</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <p><b>15 campuses</b></p>
              <ul className="points-two">
                <li>Beyond Moscow, there are total 15 campuses located in 12 different cities all over Russia.</li>
                <li>It combines 12 higher education institutions and 3 colleges totalling 16200 students and over 1500 full and associate professors.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Student population in MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>MEPhI has about 35,000 students at branches in Moscow and in Obninsk.</li>
                <li>In Moscow there are around 7,500 students (including over 1300 foreigners).</li>
                <li>In Obninsk there are around 4229 students, 380 professors, including 229 PhDs.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Global university</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>MEPhI is a global university. It has adapted the European Bologna education process, and now offers BS, MS and PhD programs.</li>
                <li>
                  It is also a member of the CDIO (Conceive, Design, Implement and Operate), ENEN (European Nuclear Education Network), STAR-NET (Regional Network for Education and Training in Nuclear Technology) international communities
                  and offers several programs and courses in English.
                </li>
                <li>MEPhI is the base organization of the CIS member states for training, retraining and advanced training of the personnel in the field peaceful use of atomic energy.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Plans of MEPhI</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>
                  MEPhI is the global leader in the sphere of nuclear education. It works in the model of a distributed high-tech research university and provides training of the highly qualified specialists in demand on the global labor
                  market.
                </li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Own Research Reactor</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>We have our own pool-type research reactor, with “blue glow”, discovered by Cherenkov, one the University’s co-founders.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Graduates of MEPhI</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>MEPhI has undergraduate and graduate students from country like CIS, Bangladesh, Brazil, Bolivia, Bulgaria, Cuba, China, Egypt, India, Myanmar, Rwanda, Turkey, Vietnam, Zambia, and many others.</li>
                <li>
                  MEPhI generates scientific knowledge, disseminates, and preserves it aiming to address global challenges of the 21<sup>st</sup> century; as well as, to provide innovative transformations in Russia accompanying development
                  of country's competitiveness in global energy and non-energy high-tech markets.
                </li>
                <li>
                  MEPhI academic staff and students actively solve complex issues in high-priority fields. These issues range from nuclear energy to nanotechnology, medicine to ecology, IT to innovation management. The University exports
                  branch campuses, attracts students and researchers and collaborates with research partners.
                </li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">5/100 Project</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>
                  In July 2013, MEPhI was shortlisted in the governmental Competitiveness Enhancement Program, or so called “5 into 100” competition. The objective of the program is to boost 5 of 15 chosen universities, which are already
                  leaders in Russia, to be ranked in the top 100 universities worldwide.
                </li>
                <li>Today the University holds leading positions in training specialists of the highest level, combining principles of synthesis of education and research, laid down more than 75 years ago.</li>
                <li>MEPhI acknowledges the need to successfully ride the wave of change that is sweeping higher education institutions worldwide.</li>
                <li>
                  MEPhI aim to forge innovative partnerships, strike a balance between tradition and technology, demonstrate value, and become competitive in an increasingly globalized world. One crucial way to achieve these complex goals
                  is to embrace the seismic changes in the innovation and education landscape.
                </li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">MEPhI offers Unique Advantages for Education and Research:</h4>
                <h5>MBBS in RUSSIA – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>Compliances with the International Standards in Engineering Education.</li>
                <li>Modular learning, interdisciplinarity and individual educational tracks.</li>
                <li>Internships at international laboratories and mega science projects.</li>
                <li>On campus state-of-the art experimental facilities and research centers.</li>
                <li>Global academic cooperation with world’s top corporations and R&D centers.</li>
                <li>Unique degree programs for professions and technologies of the future.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Faculty of National Research University, MEPhI</h4>
                <h5>MBBS in Russia, MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>The faculty at National Research University, MEPhI consists of highly qualified professors & researchers, many of whom have earned their degrees from prestigious universities around the world.</li>
                <li>The National Research University, MEPhI boasts state-of-the-art facilities, including modern laboratories, libraries, and computer centers.</li>
                <li>The main library, with its vast collection of books, journals and electronic resources, is one of the largest in Russia.</li>
                <li>In addition to this, MEPhI also provides access to various online databases, ensuring that students have the resources they need for their studies and research.</li>
                <li>Among the teaching staff there are some academicians, many professors, associate professors, senior lecturers.</li>
                <li>Some of them are members of the Academy of Sciences. The teachers deliver lectures, conduct seminars and practical classNamees.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Today, MEPhI has 09 main departments (faculties or institutes):</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>Institute of Nuclear Physics and Engineering.</li>
                <li>Institute for Laser and Plasma Technologies.</li>
                <li>Institute of Engineering Physics for Biomedicine.</li>
                <li>Institute of Nanoengineering in Electronics, Spintronics and Photonics.</li>
                <li>Institute of Cyber Intelligence Systems.</li>
                <li>Institute of Financial and Economic Security.</li>
                <li>Institute of International Relations.</li>
                <li>Faculty of Physics and Technology.</li>
                <li>Faculty of Business Informatics and Complex Systems Management.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Rankings of MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>
                  It is not only the Russian government that sees world university rankings as important indicators of competitiveness, research excellence, academic quality, diversity, but even online presence. These global educations
                  impact the decision-making process by prospective faculty – and even more so – students.
                </li>
                <li>MEPhI has boosted its ratings and position in world rankings over the last couple of years and the trend continues.</li>
                <li>In 2022, QS World University rankings rated the university #308 in the world.</li>
                <li>World University Rankings Times Higher Education ranked the university #401 in the world.</li>
                <li>In 2023 U.S. News & World Report rated the university #483 in the world.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Notable Alumni in National Research University, MEPhI</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>National Research University, MEPhI prepares extensive human resources for the economy of Russia, from journalists to finance professionals and managers.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Following few are Notable Alumni of MEPhI - MBBS in MEPhI</h4>
              </div>
              <ul className="points-two">
                <li>Nicolay Gennadiyevich Basov – Nobel Prize.</li>
                <li>Pavel Cherenkov – Nobel Prize.</li>
                <li>Ilya Mikhailovich Frank – Nobel Prize.</li>
                <li>Andrey Dmitrievich Sakharov – Nobel Prize.</li>
                <li>Nikolay Nikolayevich Semyonov – Nobel Prize.</li>
                <li>Igor Tamm – Nobel Prize.</li>
                <li>Mukhtar Ablyazov – leader "Democratic choice of Kazakhstan", former minister of Energy, Industry and Trade in Kazakhstan (21 April 1998 – October 1999).</li>
                <li>Lev Artsimovich – known as "the father of the Tokamak".</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Quick Highlights of National Research Nuclear University, MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                  <tbody></tbody>
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
                      <th scope="row">Country rank</th>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>QS World Rank</td>
                      <td>497</td>
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
                      <td>6 Years</td>
                    </tr>
                    <tr>
                      <th scope="row">NEET</th>
                      <td>Just Qualifying Marks</td>
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
                      <th scope="row">Location</th>
                      <td>Moscow, Russia</td>
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
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Advantages of MBBS at National Research Nuclear University, MEPhI</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>MEPhI is one of the top University in Russia.</li>
                <li>MEPhI offers graduate and postgraduate courses in physics, mathematics, computer science and other fields.</li>
                <li>Campuses and dormitories of MEPhI meet all the modern standards that would expect by the students.</li>
                <li>State-of-the-art laboratories and research centres.</li>
                <li>Living costs in MEPhI is affordable.</li>
                <li>One of the leading universities in Russia.</li>
                <li>Good career opportunities.</li>
                <li>2 International campuses (Moscow & Obninsk)</li>
                <li>Good facilities for study and research.</li>
                <li>During the period of studies, students study theoretical and special subjects. At the end of each year, students have practice in different laboratories, enterprises, companies, firms & Ministries.</li>
                <li>Many students are members of scientific societies. Students carry out researches and make reports. The results of the work done by the students often find practical application.</li>
                <li>Students take an active part in social life. There is a wide choice of amateur circles.</li>
                <li>Students participate in festive concerts, singing, dancing and recite poems.</li>
                <li>There are many sport clubs where students go for sports activities.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Hostel & Accommodation at National Research Nuclear University, MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>The house consists of one bedroom suite style and shared apartments.</li>
                <li>The dormitory is within walking distance from the academic buildings.</li>
                <li>Students can get there by specially assigned buses or by various forms of public transport: buses and shuttle buses stop at the educational buildings.</li>
                <li>There is a gym, cafeteria, library room, laundry room in the dormitory of MEPhI.</li>
                <li>The bedrooms are also equipped with special spaces for washing and drying clothes in MEPhI</li>
                <li>
                  Residence halls of National Research University area set of modern campuses for students. They are provided with all the conditions for comfortable stay, self-study and scientific work, recreation, sports activities, and
                  participation in the university cultural life.
                </li>
                <li>Each campus has comfortable rooms and necessary living facilities such as dining rooms, housekeeping complexes, recreation areas, libraries & sports grounds.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Library of MEPhI</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>
                  The center of Informational and Library Support for teaching and research activities of MEPhI is one at the largest university library centers in Russia. It features modern technical equipment and well-organized services,
                  which include the following:
                  <ul>
                    <li>A unique collection of books on the natural sciences and other fields of knowledge (1 million copies).</li>
                    <li>A collection of rare and valuable books.</li>
                    <li>An electronic catalogue, possibility of on-line access.</li>
                    <li>An educational and scientific electronic resource.</li>
                    <li>A computer with free Internet access.</li>
                    <li>A Wi-Fi access in libraries and reading rooms.</li>
                  </ul>
                </li>
                <li>The most valuable part of the library is a collection of books and papers of the MEPhI authors, which even contains books published in the 1940s.</li>
                <li>
                  The electronic library of MEPhI is constantly updated with new resources either acquired, or created by the digitalization of rare books. Access to remote databases is in the process of expanding. MEPhI users also enjoy
                  the access to the full-text versions of foreign and national scientific and academic journals.
                  <ul className="points-two">
                    <li>Corporate Network of Moscow Libraries,</li>
                    <li>MARS (Regional analytical listing of articles),</li>
                    <li>ARBICON (Russian Association of Library Consortia).</li>
                  </ul>
                </li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Facilities for Students</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>The office gives out educational literature for temporary use. In addition to the obtained sets of textbooks, students may take additional educational literature, which is recommended by the training schedule.</li>
                <li>User service is automated and conducted after an on-line request at the library web-site <a href="www.library.mephi.ru" target="_blank">www.library.mephi.ru(link is external)(link is external).</a></li>
                <li>This subscription plan has a reading room.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Student Reading Room</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>The literary fund is formed according to the student training programs and schedules. Inside the reading room, the reader may use educational and scientific literature, as well as, reference books.</li>
                <li>The room has computer access to the library of educational publications at <a href="www.library.mephi.ru" target="_target">www.library.mephi.ru</a>(link is external)(link is external).</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Electronic Library</h4>
                <h5>MBBS in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>
                  www.library.mephi.ru(link is external)(link is external) provides access to electronic library resources, where a wide range of electronic catalogues, manuals, national and foreign full-text databases are available. The
                  reading rooms provide free Internet access and Wi-Fi for the readers.
                </li>
                <li>Library staff gives consultations and lectures on the modern methods of how to source, search and analyze the information. Students can sign up for a series of lectures on the library website.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Canteen & Cafeterias MEPhI</h4>
                <h5>MBBS in Russia – MBBS IN MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>MEPhI offers 3 dining halls + 1 dining hall for staff only and 4 buffets, which can serve about 1000 visitors at a time.</li>
                <li>MEPhI have own pastry shop, which supplies the variety of yummy baked goods and confectionery.</li>
                <li>The cafeterias are open from morning until evening to ensure that all MEPhI students and staff can study and work well for developing new ideas and advancing science and education.</li>
                <li>The menu is based on the wishes of employees and students. It includes cold appetizers, salads, entrees, vegetables, meat, fish and poultry, cereal, and baked goods.</li>
                <li>Everything is made of natural and ecologically clean products.</li>
                <li>
                  For those who are in a hurry, there will be a take-away station with a variety of sandwiches, fruit, desserts, and drinks. If you would rather bring food from home, you can use one of the microwaves available at the
                  cafeteria.
                </li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Cost of Education and Living</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>The most significant advantages of studying at National Research University, MEPhI is the affordability in cost of education as well as cost of living.</li>
                <li>Tuition fees at National Research University, MEPhI are relatively lower compared to many universities in Europe and North America etc.</li>
                <li>This makes it an attractive option for Indian students seeking quality education at a reasonable and affordable cost.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Sports Facility in MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>Studying at MEPhI is not only learning complex subjects but also a great opportunity to take up sports.</li>
                <li>Students have different choice of about 20 various sports clubs from athletics, martial arts, rugby, hockey, football, volleyball, fitness, climbing, sailing and badminton.</li>
                <li>This sports facility enhances mental and physical strength and students.</li>
                <li>Also help in developing sportsman spirit and personality development</li>
                <li>The Department of Physical Education carries out educational, training, health-improving, educational and sports work with university students.</li>
                <li>
                  The Department Head is Vyacheslav Starshinov – two-time Olympic champion, nine-time World champion, eight-time European champion, honored master of sports, candidate of pedagogical sciences, professor, academician of the
                  International Academy of Creativity.
                </li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Different Sport Programme in Mephi</h4>
                <h5>Mbbs in Russia - MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>
                  MEPhI students with good physical and sports training can choose to become a member of more than 20 sports sections, including: sambo, basketball, volleyball, arm wrestling, rugby, hockey, fitness aerobics, sports
                  gymnastics, chess, swimming, kettlebell lifting, table tennis, badminton, hand-to-hand fighting, mountaineering and rock climbing, orienteering and sports tourism, cyclic sports, football.
                </li>
                <li>MEPhI sport infrastructure comprises a game room, a gymnasium, two sambo halls, a table tennis hall, two outdoor sports grounds with artificial grass turf, a gym, and open planar facilities.</li>
                <li>
                  One of the strongest sports at MEPhI is sambo. The university has a rich history of sambo development. Among the founders and graduates of the MEPhI sambo section there are many Moscow champions and champions of the Soviet
                  Union.
                </li>
                <li>Since 1976, the University has been holding an annual international sambo tournament for the Conquerors of Space prize.</li>
                <li>At present, MEPhI is a pivotal university for sambo development in Moscow and Russia. More than 600 students, as well as graduate students and staff members are engaged in sambo activities.</li>
                <li>The history of the MEPhI basketball section goes back over 60 years. The university basketball team regularly competes in the Moscow Student Games.</li>
                <li>
                  One of the youngest sports that quickly gained popularity all over the world and in MEPhI is fitness aerobics. This is a massive, aesthetically exciting, and truly spectacular team sport that brings together all the best
                  from the theory and practice of health and sports aerobics.
                </li>
                <li>
                  Students involved in this sport section are permanent prize-winners of Moscow and All-Russian competitions, participants in the European and World Championships in aerobics and step aerobics. In 2018, the team won silver
                  medals in the Russian Cup (dance hip-hop direction).
                </li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">National Research University MEPhI Fees structure</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                  <tbody>
                    <tr>
                      <th scope="row">Tuition Fees</th>
                      <td>3,53,200 Ruble</td>
                    </tr>
                    <tr>
                      <th scope="row">Hostel Fees</th>
                      <td>36,000</td>
                    </tr>
                    <tr>
                      <th >2 – 3 seater hostels with attached washroom</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">National Research University MEPhI courses duration</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <p>MBBS course duration in National Research University, MEPhI is 6 years including internship</p>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">MEPhI General Medicine</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>General Medicine, MBBS programme, was started in National Research University, MEPhI from 2008.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Website of National Research University, MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <p>
                <b><a href="www.eng.mephi.ru" target="_blank">www.eng.mephi.ru</a></b>
              </p>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Location of MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>Kashira Hwy – 31, Moscow, Russia - 115409.</li>
                <li>It is a 15-minute walk (or a five-minute bus ride) from the university to the Kashirskaya station on the Zamoskvoretskaya Line of the Moscow Metro.</li>
                <li>85 Km away from Russia.</li>
              </ul>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Duration of MBBS in National Research University, MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <p>National Research University, MEPhI has 6 years MBBS programme including one year internship.</p>
              <div className="heading">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">National Research University, MEPhI for Indian Student</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
              </div>
              <ul className="points-two">
                <li>The cost of studying MBBS in Russia is affordable.</li>
                <li>Russia is popular among Indian students as the MBBS course is highly affordable compared to other nations.</li>
                <li>Russia is safe and secure for Indian students.</li>
                <li>No need to go outside Moscow as MEPhI is situated in Moscow itself.</li>
              </ul>
              <div className="">
                <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">MBBS in National Research University, MEPhI</h4>
                <h5>MBBS in Russia – MBBS in MEPhI</h5>
                <ul className="points-two">
                  <li>MBBS in Russia is not recognized in India but recognized globally.</li>
                  <li>MEPhI ensure to provide word className faculty and education at affordable costs.</li>
                  <li>English is the medium of instruction which breaks the barriers of communication for international students including Indian students.</li>
                </ul>
                <div className="heading">
                  <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">NMC approved medical Universities in Russia</h4>
                  <h5>MBBS in Russia – MBBS in MEPhI</h5>
                </div>
                <ul className="points-two">
                  <li>MBBS of Russia is valid in India after passing FMGE conducted by National Board of Education (NBE).</li>
                  <li>For Indian foreign medical graduates, the FMGE is conducted twice a year.</li>
                  <li>National Research University, MEPhI is recognized by NMC, WHO, FAIMER, ECFMG, WFME and UNESCO.</li>
                  <li>This recognition is very crucial for Indian students who wish to pursue their medical education from MEPhI and practice medicine in India upon their return.</li>
                  <li>MEPhI is recognized by several international educational bodies and organizations, ensuring that its degrees are acknowledged globally.</li>
                  <li>MEPhI has established partnerships with numerous institutions worldwide, promoting academic exchange and research collaboration.</li>
                  <li>The medical faculty of MEPhI is listed in the World Health Organization's (WHO) World Directory of Medical Schools.</li>
                  <li>Being in the WHO directory also signifies adherence to global standards in medical education.</li>
                </ul>
                <div className="points-two">
                  <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">English Taught Programme</h4>
                  <h5>MBBS in Russia – MBBS in MEPhI</h5>
                </div>
                <ul className="points-two">
                  <li>MEPhI offers several programs, especially in medicine, which are taught in English.</li>
                  <li>This is beneficial for Indian students who may not be proficient in Russian languages.</li>
                  <li>English-taught program ensures that language barriers do not hinder the learning experience of Indian students.</li>
                </ul>
                <div className="heading">
                  <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Student Exchange Programs</h4>
                  <h5>MBBS in Russia – MBBS in MEPhI</h5>
                </div>
                <ul className="points-two">
                  <li>MEPhI participates in various student exchange programs, allowing Indian or international students to spend a considerable time at partner universities abroad.</li>
                  <li>These exchange programs provide Indian students with the opportunity to gain international exposure and experience different educational system.</li>
                  <li>Participation in such programs enhances the global perspective and gives exposure.</li>
                </ul>
                <div className="heading">
                  <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Research Opportunities</h4>
                  <h5>MBBS in Russia – MBBS in MEPhI</h5>
                </div>
                <ul className="points-two">
                  <li>MEPhI invariably emphasizes on research & innovation thereby encouraging students to engage in scientific research projects.</li>
                  <li>MEPhI has numerous research centers and laboratories which are equipped with ultra-modern facilities.</li>
                  <li>Indian students could collaborate with faculty members on research projects, contributing to their academic & professional.</li>
                </ul>
                <div className="heading">
                  <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Eligibility Criteria for Admission in National Research University, MEPhI</h4>
                </div>
                <p><b>Following eligibility criteria for Indian student who are wishing to pursue their MBBS in National Research University, MEPhI, Russia:</b></p>
                <ul className="points-two">
                  <li><b>Age requirement:</b> The applicant should be 17 years of age as on 31st December in the admission year.</li>
                  <li><b>Academic requirements:</b> Applicant must have passed 12th standard with at least 50% in Physics, Chemistry and Biology.</li>
                  <li><b>NEET requirements:</b> Must qualify NEET exam.</li>
                </ul>
                <div className="heading">
                  <h4 className="text-h5TextPhone md:text-h5Text pt-[2vw] m:pt-[1vw]">Documents Required for National Research University, MEPhI</h4>
                  <h5>MBBS in Russia – MBBS in MEPhI</h5>
                </div>
                <p><b>The following documents are required for admission process In National Research University, MEPhI, Russia:</b></p>
                <ul className="points-two">
                  <li>10th & 12th Marksheets.</li>
                  <li>Valid Indian passport.</li>
                  <li>Passport size photos.</li>
                  <li>NEET scorecard.</li>
                  <li>Transfer and migration certificate.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
<section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] my-[10vw] md:my-[1vw]">
              <h3 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[.5vw]   md:text-h3Text text-center font-bold">Authorization</h3>

              <div className='relative md:flex gap-[4vw] md:gap-[1vw] justify-center'>
                <Image src={"/assets/Images/authorization/russia/Russia9.jpg"} className='w-full md:w-[30vw] h-auto' width={1080} height={1080} alt='isbu1'/>
              </div>
            </section>
    <div className='h-[4vw]'/>
      </div>
    </>
  )
}

export default NewPage
