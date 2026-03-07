import React from 'react'
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from 'next/head';

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tution Fees",
      label: "Ruble 3,00,000 / Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Yekaterinburg, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "Country Rank",
      label: "14",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "World Rank",
      label: " 967",
    },
  ];
const NewPage = () => {
  return (
    <>
        <Head>
            <title>MBBS in Russia – Scholarship & Low Cost Options Ural State Medical University</title>
            <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
            <meta name="description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/ural-state-medical-university." />
            <meta name="author" content="edurizon" />
            <meta name="robots" content="index, follow"/>
            <meta name="DC.title" content="MBBS In Russia" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Dwarka" />
            <meta name="geo.position" content="22.351115;78.667743" />
            <meta name="ICBM" content="22.351115, 78.667743" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="MBBS in Russia – Scholarship & Low Cost Options Ural State Medical University" />
            <meta property="og:description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/ural-state-medical-university." />
            <meta property="og:url" content="https://www.edurizon.in/" />
            <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@edurizon" />
            <meta name="twitter:title" content="MBBS in Russia – Scholarship & Low Cost Options Ural State Medical University" />
            <meta name="twitter:description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/ural-state-medical-university." />
            <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:image:alt" content="MBBS in Russia" />
            <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/ural-state-medical-university" hrefLang="en-in"/>

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
        <Image src="/assets/Images/universities/russia/UralStateMedicalUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Ural State Medical University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Want to study at one of Russia’s most respected medical institutions? Ural State Medical University offers a comprehensive medical education with cutting-edge research and clinical training.
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
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text ">Important videos of Ural State Medical University</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <div className="video-section">
                <a href="https://youtu.be/PPfnTwTGEtw?si=TRsDtKzX6itJ2TVn" data-fancybox="video-gallery">
                  <img src="https://img.youtube.com/vi/PPfnTwTGEtw/maxresdefault.jpg" className="img-fluid" />
                  <div className="play-button">
                    <div className="triangle"></div>
                  </div>
                </a>
              </div> 
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Ural State Medical University</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <p className='dark:text-black'>
                Ural State Medical University was established in the year 1930. Since Ural State Medical University is accredited by both UNESCO and the WHO, it can guarantee the highest standards of theoretical instruction, research, and
                development in higher education. It has a history of more than a century of distinction in medical teaching and research, making it one of the best medical universities in Russia.
              </p>
              <p>Situated in the nation's fourth largest city, Oral State Medical University is a pre-eminent medical establishment in Russia.</p>
              <p>At one point of time, it had just one faculty, faculty of medicine, but with the passage of time, Ural has established new faculties such as the faculties of dentistry, pediatrics, and pharmacy.</p>
              <p>Ural State University is the new name given to the institution in the year 1993.</p>
              <p>As of now, USMU is a cutting-edge, vibrant university offering chances for top-notch research and instruction in the fields of pediatrics, dentistry, medicine, and pharmacy.</p>
              <p>Ural State Medical University has about 1300 academic staff members, including over 600 professors and associate professors, and has over 7000 students.</p>
              <p>International recognition for Ural State Medical University programs is granted by the University of Education and Science of the Russian Federation.</p>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Ural State Medical University Ranking</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>Ural State Medical University ranking - 14.</li>
                <li>Ural State Medical University world ranking - 967.</li>
                <li>It is important for prospective students to thoroughly research specific universities, programs, and entry requirements to ensure a successful and fulfilling educational experience in Russia.</li>
                <li>This is an old University, established in the year 1930.</li>
                <li>Ural State Medical University has attained a very good reputation in the Yekaterinburg region.</li>
                <li>Ural State Medical University has 78 hospitals in the region.</li>
                <li>Ural State Medical University has very low fees and therefore Ural State Medical University is an economical University.</li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Duration of MBBS in Ural State Medical University</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>Ural State Medical University has 6 years MBBS programme including internship.</li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Scientific Medical Library at Ural State Medical University</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>
                  Scientific Medical Library at Ural State Medical University, named after Professor V.N.Klimov, has been an integral part of the institution since its inception in the year 1931, coinciding with the commencement of classNamees
                  at the medical faculty of the Sverdlovsk State Medical Institute.
                </li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Key Facts of Ural State Medical University</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                  <tbody>
                    <tr>
                      <th scope="row">Year of Establishment</th>
                      <td>1930</td>
                    </tr>
                    <tr>
                      <th scope="row">Location</th>
                      <td>Yekaterinburg, Russia</td>
                    </tr>
                    <tr>
                      <th scope="row">City</th>
                      <td>4<sup>th</sup> Largest City in Russia</td>
                    </tr>
                    <tr>
                      <th scope="row">NEET Exam</th>
                      <td>Qualifying Marks</td>
                    </tr>
                    <tr>
                      <th scope="row">Course duration</th>
                      <td>6 years, Including Internship</td>
                    </tr>
                    <tr>
                      <th scope="row">Medium of teaching</th>
                      <td>English</td>
                    </tr>
                    <tr>
                      <th scope="row">University ranking</th>
                      <td>14</td>
                    </tr>
                    <tr>
                      <th scope="row">Degree</th>
                      <td>Ural State Medical University offers dual degree. Students can opt IT (Medicine) along with MBBS</td>
                    </tr>
                    <tr>
                      <th scope="row">Research</th>
                      <td>Strong Research & clinical base</td>
                    </tr>
                    <tr>
                      <th scope="row">Hospitals</th>
                      <td>78 hospitals in Yekaterinburg Region</td>
                    </tr>
                    <tr>
                      <th scope="row">Time Gap</th>
                      <td>30 Minutes time difference from India to Yekaterinburg, Russia</td>
                    </tr>
                    <tr>
                      <th scope="row">Mess</th>
                      <td>Indian Food is Available</td>
                    </tr>
                    <tr>
                      <th scope="row">Hostels</th>
                      <td>2 & 3 Sharing with Flat Bed</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>Cutting-edge, vibrant university offering chances for top-notch research and instruction in the fields of pediatrics, dentistry, medicine, and pharmacy.</td>
                    </tr>
                    <tr>
                      <th scope="row">Staff</th>
                      <td>1300 Academic Staff Members</td>
                    </tr>
                    <tr>
                      <th scope="row">Professors</th>
                      <td>600 Professors & Associate Professors</td>
                    </tr>
                    <tr>
                      <th scope="row">Students</th>
                      <td>Over 7000 students.</td>
                    </tr>
                    <tr>
                      <th scope="row">Photos in Instagram</th>
                      <td><a href="https://www.instagram.com/edurizon_pvt.ltd/" target="_blank" className="btn-custom btn-univ-detail">Click Here</a></td>
                    </tr>
                    <tr>
                      <th scope="row">University &amp; Review videos</th>
                      <td><a href="https://www.youtube.com/c/EdurizonPvtLtd" target="_blank" className="btn-custom btn-univ-detail">Click Here</a></td>
                    </tr>
                    <tr>
                      <th scope="row">Need Sample Paper</th>
                      <td>
                        <a href="callto:9873381377" className="btn-custom btn-univ-detail" title="9873381377"><i className="fas fa-phone-volume" aria-hidden="true"></i> <span className="d-none d-lg-inline-block">Call</span></a>
                        <a href="https://wa.link/v328m4" className="btn-custom whtsp-btn btn-univ-detail"  title="9873381377">
                          <i className="fab fa-whatsapp" aria-hidden="true"></i> <span className="d-none d-lg-inline-block">Whatsapp</span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> About Yekaterinburg City</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>This is the largest city in Russia's Sverdlovsk Oblast and Ural Federal District is Yekaterinburg, which also serves as their administrative hub.</li>
                <li>As the biggest city in the Ural Federal District and one of the country's principal industrial and cultural hubs, Yekaterinburg is the fourth-largest city in all of Russia.</li>
                <li>Yekaterinburg, which ranks third in terms of economy, culture, transportation, and tourism, has earned the moniker "Third capital of Russia.</li>
                <li>Yekaterinburg is a significant hub for transportation, featuring a vast road network, rail connections, and an international airport.</li>
                <li>Located on the Trans-Siberian Railway, it serves as a vital link between Moscow and the Far East of Russia.</li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Ural State Medical University Fee Structure</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                  <tbody>
                    <tr>
                      <th scope="row">Tuition Fees</th>
                      <td>3,00,000 Ruble</td>
                    </tr>
                    <tr>
                      <th scope="row">Hostel Fees</th>
                      <td>18,000 Ruble</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><b>Note:</b> Charges for Visa renewal, medical insurance, medical checkup, biometrics etc. will be nominal taken separately by the Ural State Medical University</p>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Hostel Facilities at Ural State Medical University</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <p>The campus at Ural State Medical University is an integral component of the institution, serving as temporary residence for non-resident students, full-time residents, and applicants during entrance examinations.</p>
              <div className="heading">
                <h5>The following features characterize the hostel facilities:</h5>
              </div>
              <ul className="points-two">
                <li>
                  <b>Accommodation for Foreign Citizens</b> – Ural State Medical University: Foreign citizens admitted under interstate agreements, share student dormitories with Russian students, fostering a sense of community and cultural
                  exchange.
                </li>
                <li><b>Optimal Living Conditions</b> – Ural State Medical University: campus is dedicated to creating optimal living conditions in the dormitories to ensure the well-being and comfort of its residents.</li>
                <li><b>Efficient Hostel Operation</b> – Ural State Medical University: Rational operation of hostels is a priority, emphasizing maintenance, cleanliness, and efficient management.</li>
                <li><b>Event Organization</b> – Ural State Medical University: campus organizes events related to settlement, accommodation, educational processes, and social activities to enhance the overall student experience.</li>
                <li>
                  <b>Educational and Social Support</b> – Ural State Medical University: campus plays a crucial role in organizing the educational process, providing social work, and offering socio-pedagogical support to facilitate the
                  adaptation of students.
                </li>
              </ul>
              <div className="video-section">
                <a href="https://youtu.be/cfG9dJD_18A?si=YIad7UeD2v1HWDUP" data-fancybox="video-gallery">
                  <img src="https://i3.ytimg.com/vi/cfG9dJD_18A/maxresdefault.jpg" className="img-fluid" />
                  <div className="play-button">
                    <div className="triangle"></div>
                  </div>
                </a>
              </div>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Dormitory Living</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>
                  <b>Diverse Student Population</b> – Ural State Medical University: Over 1,600 students from Ural State Medical University call the campus home, fostering student self-government bodies and opportunities for
                  self-realization, leadership development, and organizational skills.
                </li>
                <li><b>Room Configurations</b> – Ural State Medical University: Students reside in rooms accommodating 2-4 individuals, providing a balance between communal living and personal space.</li>
                <li><b>Study Halls and Amenities</b> – Ural State Medical University: Each building features study halls for students to engage in self-training during their free time, promoting academic engagement.</li>
                <li>Living rooms are equipped with furniture and essential amenities, contributing to a comfortable living environment.</li>
                <li>
                  <b>Shared Facilities</b> – Ural State Medical University: Shared kitchens on each floor and showers on the ground floors of the buildings contribute to the communal living experience, fostering interaction and a sense of
                  community among residents.
                </li>
                <li>
                  <b>Student Councils</b> – Ural State Medical University: Each dormitory has a self-governing body known as the student council. This council coordinates the activities of floor elders, organizes self-service work within
                  the dormitory, and plans various events to enhance the overall living experience.
                </li>
                <li>
                  <b>Medical Care and Services</b> – Ural State Medical University: The campus, as a structural subdivision of the university, provides therapeutic and diagnostic medical care to students. It also organizes and conducts
                  preventive, anti-epidemic, and sanitary-hygienic measures, prioritizing the health and well-being of its residents.
                </li>
              </ul>
              <p>
                In summary, hostel facilities at Ural State Medical University prioritize creating a supportive and comfortable living environment, promoting student engagement, and ensuring the overall well-being of its diverse student
                population.
              </p>
              <div className="video-section">
                <a href="https://youtu.be/FdL5iRhdIq0?si=N-Gzr_1JA2fRfYfh" data-fancybox="video-gallery">
                  <img src="https://i3.ytimg.com/vi/FdL5iRhdIq0/maxresdefault.jpg" className="img-fluid" />
                  <div className="play-button">
                    <div className="triangle"></div>
                  </div>
                </a>
              </div>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> About The Sverdlovsk City</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <p>Sverdlovsk Oblast is a federal subject (oblast) located in the Ural Federal District of Russia.</p>
              <div className="heading">
                <h5>Here are some key details about Sverdlovsk Oblast:</h5>
              </div>
              <ul className="points-two">
                <li>
                  <b>Capital</b> - The administrative center of Sverdlovsk Oblast is Yekaterinburg, which is also the fourth-largest city in Russia. Yekaterinburg is a major industrial and cultural hub and serves as the economic and
                  administrative center of the region.
                </li>
                <li>
                  <b>Geography</b> - Sverdlovsk Oblast is situated in the eastern part of the Ural Mountains, which form a natural boundary between Europe and Asia. The oblast has diverse landscapes, including mountains, forests, and
                  plains.
                </li>
                <li><b>Economy</b> - The region has a diverse and robust economy, with key industries including metallurgy, machinery, chemicals, and mining. Yekaterinburg is known for its industrial and economic significance.</li>
                <li>
                  <b>Education and Culture</b> - Sverdlovsk Oblast is home to several educational institutions and cultural landmarks. Yekaterinburg, being a major city, has numerous universities, museums, theaters, and historical sites,
                  contributing to the cultural and intellectual life of the region.
                </li>
                <li>
                  <b>History</b> - The oblast has a rich history, and its development is closely tied to industrialization and the growth of the Trans-Siberian Railway. Yekaterinburg, is known for its historical significance, including
                  being the place where the last Russian Emperor, Nicholas II, and his family were executed in 1918.
                </li>
                <li>
                  <b>Natural Resources</b> - Sverdlovsk Oblast is rich in natural resources, including minerals such as iron ore, copper, and gold. The presence of these resources has played a significant role in the development of the
                  region’s mining and metallurgical industries.
                </li>
                <li>
                  <b>Tourism</b> -The region attracts tourists with its natural beauty, historical sites, and cultural attractions. The Ural Mountains offer opportunities for outdoor activities, and Yekaterinburg’s historical sites,
                  including the Church on the Blood (built on the site of the Romanovs’ execution), are popular tourist destinations.
                </li>
                <li>
                  <b>Transportation</b> - Sverdlovsk Oblast is well-connected by transportation networks. Yekaterinburg, as a major city, has an international airport, and the Trans-Siberian Railway passes through the region, contributing
                  to its accessibility and connectivity.
                </li>
                <li>
                  <b>Population</b> - As of my last knowledge update in January 2022, Sverdlovsk Oblast had a diverse population. Yekaterinburg, as the largest city, is a cultural melting pot with residents from various ethnic backgrounds.
                </li>
                <li>
                  <b>Cost of Living</b> - The cost of living in Sverdlovsk Oblast, like in any region, can vary depending on factors such as the city or town, lifestyle, and personal spending habits. Here are some general considerations
                  regarding the cost of living in Sverdlovsk Oblast, focusing on its capital city, Yekaterinburg.
                </li>
                <li>
                  <b>Accommodation</b> - The cost of housing can vary based on factors such as location, size, and amenities. In Yekaterinburg, rental prices for apartments may range from moderate to relatively high, with prices generally
                  being more affordable compared to major cities like Moscow or St. Petersburg.
                </li>
                <li>
                  <b>Utilities</b> - The cost of utilities, including electricity, heating, cooling, water, and garbage, is typically reasonable compared to Western European countries. However, it can vary based on individual consumption
                  and the size of the accommodation.
                </li>
                <li>
                  <b>Food</b> - Grocery prices are generally affordable, especially if you buy local products. Eating out in restaurants or cafes may vary like 2 USD -5 USD in cost depending on the establishment and the type of cuisine.
                </li>
                <li>
                  <b>Transportation</b> - Public transportation in Yekaterinburg is available and relatively affordable. The cost of a monthly transportation pass or individual tickets can contribute to overall living expenses like 8 USD.
                </li>
                <li>
                  <b>Healthcare</b> - Healthcare expenses can vary based on individual needs and whether individuals have private health insurance. Russia has a public healthcare system, and some residents may also opt for additional
                  private insurance coverage.
                </li>
                <li>
                  <b>Entertainment and Leisure</b> - The cost of entertainment and leisure activities, such as going to the cinema, theater, or cultural events, can vary. Yekaterinburg offers a range of cultural and recreational
                  opportunities.
                </li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Ural State Medical University for Indian Students</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>Very good University.</li>
                <li>Presently around 300+ students are pursuing their MBBS in Ural State Medical University.</li>
                <li>Indian mess for Indians students available in the University.</li>
                <li>4-time foods (breakfast, Lunch, tea/snacks & dinner) are available in just $1200 for 10 months.</li>
              </ul>
              <div className="heading">
                <h4>Advantages of MBBS in Russia for Indian Students</h4>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <p>Studying MBBS (Bachelor of Medicine, Bachelor of Surgery) in Russia offers several advantages, making it an attractive option for international students including Indians.</p>
              <ul className="points-two">
                <li><b>Here are some key advantages</b> - Ural State Medical University.</li>
                <li><b>Affordability</b> - Tuition and living expenses in Russia are generally lower than in many Western countries. This makes pursuing MBBS in Russia a cost-effective option for many students.</li>
                <li>
                  <b>World-className Education</b> - Russia has a long-standing tradition of excellence in medical education. Many universities, including those offering MBBS programs, are recognized globally for their high academic standards
                  and rigorous curriculum.
                </li>
                <li>
                  <b>English-Medium Programs</b> - Several Russian universities offer MBBS programs in English, making it accessible to international students who may not be fluent in Russian. This facilitates a smoother learning experience
                  for students from different linguistic backgrounds.
                </li>
                <li>
                  <b>International Recognition</b> - Medical degrees obtained from Russian universities are recognized by major medical councils and organizations worldwide. This recognition enables graduates to practice medicine in various
                  countries after fulfilling additional licensing requirements.
                </li>
                <li>
                  <b>Cultural Diversity</b> - Studying in Russia provides students with exposure to a rich cultural and historical environment. Interaction with diverse student populations and exposure to different medical practices
                  contribute to a well-rounded educational experience.
                </li>
                <li>
                  <b>Modern Facilities</b> - Many medical universities in Russia are equipped with state-of-the-art facilities, laboratories, and medical technology. This ensures that students receive practical, hands-on training in line
                  with global medical standards.
                </li>
                <li>
                  <b>Clinical Training Opportunities</b> - Russian medical universities often collaborate with well-established hospitals and clinics, providing students with opportunities for practical clinical training. This exposure is
                  essential for developing practical skills and gaining real-world experience.
                </li>
                <li>
                  <b>Global Perspective</b> - The MBBS curriculum in Russia is designed to provide students with a global perspective on healthcare. This prepares graduates to adapt to diverse healthcare systems and contribute effectively
                  in an international context.
                </li>
                <li>
                  <b>Research Opportunities</b> - Russia is known for its contributions to scientific and medical research. Students pursuing MBBS in Russia may have opportunities to engage in research projects and contribute to
                  advancements in the field.
                </li>
                <li>
                  <b>Post-Graduation Opportunities</b> - Graduates from Russian medical universities have the option to pursue postgraduate studies or gain practical experience in various countries. The international recognition of Russian
                  medical degrees enhances opportunities for further education and career advancement.
                </li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Affiliation and Recognition of Ural State Medical University</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
                <p><b>Ural State Medical University Russia is one of the biggest medical universities in Russia, it is affiliated and recognized by various Medical Councils such as:</b></p>
              </div>
              <ul className="points-two">
                <li>World Health Organization (WHO).</li>
                <li>National Medical Commission of India (NMC).</li>
                <li>Recognized by the United Nations Educational, Scientific, and Cultural Organization (UNESCO).</li>
                <li>Ministry of Science & Higher Education of the Russian Federation.</li>
              </ul>
              <div className="heading">
                <h4>Faculty of Ural State Medical University</h4>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-three">
                <li>Faculty of Dentistry.</li>
                <li>Faculty of Pediatrics.</li>
                <li>Faculty of Medicine.</li>
                <li>Faculty of Surgery.</li>
                <li>Faculty of Psychology.</li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Why Study MBBS at Ural State Medical University Russia?</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>Ural State Medical University has affiliations with and recognition from several international medical councils.</li>
                <li>Because of friendly relationship with India, Ural State Medical university's campus is welcoming and the environment is healthy for Indian students.</li>
                <li>There are five student dorms. In addition to strict security vigilance, extra precautions are taken to ensure the safety & security of girls on the university campus and in the residence halls as well.</li>
                <li>Ural State Medical University hosts visiting lecturers who teach medical students from throughout the globe.</li>
                <li>Students can gain practical experience and exposure to state-of-the-art medical technologies in the university's well-equipped laboratories and clinical settings.</li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Eligibility Criteria of Ural State Medical University</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>Applicant should have minimum 17 years of age as on December 31st, of the year of admission.</li>
                <li>50% in the 12th standard.</li>
                <li>NEET qualifying marks.</li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Ural State Medical University Admission</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>Admissions are done on first-cum-first basis.</li>
                <li>300 MBBS seats are reserved for the Indian students.</li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Ural State Medical University Entrance Exam</h3>
              </div>
              <ul className="points-two">
                <li>Online entrance exam will be held for the subject like Chemistry, Biology and English.</li>
                <li>Passing/qualifying marks will be 30 out of 45.</li>
              </ul>
              <div className="heading">
                <h3 className="text-h5TextPhone md:text-h5Text pt-[2vw] md:pt-[1vw]"> Ural State Medical University Location</h3>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <ul className="points-two">
                <li>Ural State Medical University is a public Medical University in Yekaterinburg, Sverdlovsk Oblast in the Ural region of Russia.</li>
                <li>Ural State Medical University located in the centre of Yekaterinburg.</li>
                <li>Ural State Medical University is the only institution of higher education in the Sverdlovsk Oblast which prepares doctors and pharmacists with higher education.</li>
              </ul>
              <div className="heading">
                <h4>Address of Ural State Medical University</h4>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <p>Ulitsa Repina, 3, Yekaterinburg, Sverdlovskaya oblast, Russia - 620014</p>
              <div className="heading">
                <h4>Ural State Medical University Official Website</h4>
              </div>
              <p>
                <b>
                  <a href="https://usma.ru" target="_blank"><i className="fas fa-globe" aria-hidden="true"></i> https://usma.ru</a>
                </b>
              </p>
              <div className="heading">
                <h4>How to Reach Ural State Medical University</h4>
                <h5>MBBS in Russia – MBBS in Ural State Medical University</h5>
              </div>
              <p>Delhi to Tashkent & Tashkent to Yekaterinburg</p>
              <div className="heading">
                <h4>Airlines</h4>
              </div>
              <ul className="points-three">
                <li>Uzbek Airlines</li>
                <li>Air Arabia</li>
              </ul>
            </div>
          </div>
        </div>
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
