import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";
import Script from "next/script";

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tution Fees",
      label: "RMB 34,000/Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Nanjing, Jiangsu, China",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "World Rank",
      label: "494",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "Amazing Fact",
      label: "Most Populat",
    },
  ];

const NewPage = () => {
  return (
    <>
      <Head>
        <title>
          Nanjing Medical University in China, MBBS Fees | Edurizon
        </title>
        <meta
          name="keyword"
          content="mbbs in china, Top 10 medical colleges in china, Best Medical University in china, Top Medical Universities in china, Top10 Medical Universities in china, mbbs in china fee structure, Top medical colleges in china, Best medical colleges in china, zhejiang university, zhejiang science and technology university, zhejiang university china, xi an jiaotong university, xi an jiaotong university china, nanjing university china, nanjing university, nanjing medical university china, xiamen university, china xiamen university, xiamen university xiamen."
        />
        <meta
          name="description"
          content="Study MBBS at Nanjing Medical University in China with quality medical education, global recognition & affordable MBBS fees."
        />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow" />
        <meta name="DC.title" content="MBBS in China" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Top 10 Medical Colleges in China – Rankings, Admission & Fee Guide - Nanjing Medical University"
        />
        <meta
          property="og:description"
          content="Explore top 10 medical colleges in China, updated rankings, fee structure & admission process for 2025 at https://www.edurizon.in/study-destinations/study-mbbs-in-china/nanjing-medical-university."
        />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta
          property="og:image"
          content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta
          name="twitter:title"
          content="Top 10 Medical Colleges in China – Rankings, Admission & Fee Guide - Nanjing Medical University"
        />
        <meta
          name="twitter:description"
          content="Explore top 10 medical colleges in China, updated rankings, fee structure & admission process for 2025 at https://www.edurizon.in/study-destinations/study-mbbs-in-china/nanjing-medical-university."
        />
        <meta
          name="twitter:image"
          content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
        />
        <meta name="twitter:image:alt" content="MBBS in China" />
    
        <link
          rel="alternate"
          href="https://www.edurizon.in/study-destinations/study-mbbs-in-china/nanjing-medical-university"
          hrefLang="en-in"
        />
      </Head>

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9JDZZKPGL8"
        strategy="afterInteractive"
        async
      />
      <Script id="ga-gtag-nanjing" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9JDZZKPGL8');
        `}
      </Script>
    <div className="text-regularTextPhone md:text-regularText text-black">
        <div className="relative h-auto w-full dark:text-white">
        <Image src="/assets/Images/mbbs-in-china/associated-universities/nanjing-medical-university.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Nanjing Medical University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Nanjing Medical University was established in the year 1934 as Jiangsu Provincial College of Health Policy & Management. In 1957, Nanjing Medical University shifted from Zhenjiang to Nanjing & changed its name to Nanjing Medical College.</p>
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
                            <h2 className="mt-0">Important Videos of University / Student & Parent Review</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div id="edurizon-videos" className="grid md:grid-cols-4 grid-cols-2 gap-y-[1vw] md:gap-y-[.5vw] owl-carousel"> 
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/0BF-kRVlX5E" title="Exposing the Real Cost of Medical Study Abroad"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/t05HLStQp_o" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/Ih2IVhQM3mM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/xUn2qD0bSH4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/DdHQx5OhbhY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/k0hFsNiTvQU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                          
                            {/* <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/LIAnNYDMEQs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>  */}
                            
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/T0gI3qDCyos" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
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
                    <h2 className="mt-0">About Nanjing Medical University</h2>
                </div>
                <p>Nanjing Medical University was established in the year 1934 as Jiangsu Provincial College of Health Policy & Management. In 1957, Nanjing Medical University shifted from Zhenjiang to Nanjing & changed its name to Nanjing Medical College. In the year 1962, Nanjing Medical College became one of the first group of medical colleges in China & and finally in the year 1993 it’s renamed as Nanjing Medical University.</p>
                <p>Nanjing Medical University has 20 schools; it has 24 affiliated hospitals & more than 50 teaching hospitals in Shanghai, Shandong, Zhejiang& Jiangsu provinces.</p>
                <p>Nanjing Medical University is one of the best medical universities of China; it has many employees working which range from more than 1600 employees including 825 teaching staff, 188 professors, 252 associate professors, 422 doctoral supervisors & 1746 master tutors. The land area of Nanjing Medical University is spread over eighty-seven hectares of land.</p>
                <p>The University having a land area of eight hectares acts as a main center mainly for clinical teaching programme and research option. The University library possess not less than 1,080, 000 printed medical resources, a good number of 1,500,000 e-resources and over 6,000 journals in a variety of languages. This makes the University the main center of attraction for all the medical literature in Jiangsu province. NMU is accountable for issuing at least 11 scholastic journals. Nanjing medical university is one of the top medical universities in china for Mbbs. Students from India & other countries are preferring Nanjing Medical University for MBBS in China. In the year 2014 Nanjing medical university is ranked between 401-500 in the world.</p>
                <p>Nanjing Medical Universiry was one of the first university to offer an English taught MBBS program as approved by Ministry of Education of the People’s Republic of China The University consist of an international exchange and cooperation programme also in which it forwards instructors overseas for studies and works with scientific research ins titutions and medical schools in the Britain, United States of America, Australia, Germany, Japan and France. By the year 2014 there were enough foreigners studying, almsost 500 foreign students in total. NMU is a partner organization with the World Health Organization.</p>
                <div className="heading">
                    <h2>Ranking</h2>
                </div>
                <p>It is ranked between 401-500 in the world.</p>
                <p>Among the universities of China it is ranked between 26-32nd position.</p>
                <div className="heading">
                    <h2>Location</h2>
                </div>
                <p>Nanjing medical university is located at Jiangsu province, which is located at Eastern Central coast area of China. Nanjing is the third smallest and fourth most populous city in China. This province is very famous for Education, Finance, Technology and Tourism. Jiangsu is one of the most developed provinces in China; It has highest GDP in China. Jiangsu borders Shanghai to the south, Anhui to the west, Shandong in the north. Jiangsu has the coast line of more than 1000 km with Yellow sea & Yangtze river.</p>
                <div className="heading">
                    <h2>Climate</h2>
                </div>
                <p>The average annual temperature of Nanjing is 16 degree centigrade. The temperature rises to 32 degree centigrade during the July month.</p>
                <p>January is the coldest month of the year with an average temperature of 7 degree centigrade. Sometimes the temperature falls below -1 degree centigrade. The climate of Nanjing is defined as hot summers and cold winters. The city experiences plenty of rainfall during the whole year and occasional snowfall.</p>
                <div className="heading">
                    <h2>Advantages of Nanjing Medical University</h2>
                </div>
                <ul className="points-two">
                    <li>Nanjing Medical University is the best medical college in China.</li>
                    <li>NMU has been ranking between 401-500 in the top medical university in the world.</li>
                    <li>It is one of the First university to offer English taught MBBS program in China.</li>
                    <li>The University was established long back in the year 1934 .</li>
                    <li>Nanjing Medical University was one of the first institution to admit Graduates in the year 1941.</li>
                    <li>It was the first university to confer the masters degree &amp; doctoral program in China.</li>
                    <li>It is a full fledged university with a complete range of discipline, strong intellectual capital, &amp; a first className research facility.</li>
                    <li>The University has eleven first level discipline master’s program, seven first level discipline doctoral programs, six post doctoral research centers.</li>
                    <li>NMU is the best university in china as it offers almost all the courses like-Medicine, Science, Technology, Management, Law, Education, &amp; Literature.</li>
                    <li>The University has 23 affiliated Hospitals which is why it is considered to be the top medical college in China.</li>
                    <li>Also the University has more than 50 teaching hospitals in Jiangsu, Shanghai, Zhejiang, and Shandong, which makes it the top medical college in China.</li>
                    <li>Nanjing Medical University has established co-operation and academic exchange program with medical colleges and institutions in USA, CANADA, UK, Australia, Sweden, Japan, Germany and Taiwan Province</li>
                    <li>The University is spread over 87 hectares. </li>
                    <li>It has more than 1,070,000 printed medical resources.</li>
                    <li>The University has more than 1,500,000 e-resources.</li>
                    <li>The University has over 6000 journals in different languages</li>
                    <li>NMU has more than 1400 faculty members which include 1117 full professors &amp; 175 associate professors</li>
                    <li>The University has 812 supervisors of the Master’s Program &amp; 185 supervisors of the Doctoral Program</li>
                    <li>By 2018 the University has more than 900 foreign students from allover the world</li>
                    <li>The University is also a partner organization with the World Health Organization.</li>
                </ul>
                <div className="heading">
                    <h2>Intake</h2>
                </div>
                <p>The Universities of China has only 1 intake in a year. Classes start from the month of September every year .So by mid of September all the students reach China. Advance booking generally starts from the month of December only. Seats are filled very fast for most of the top universities. So it is required to book in advance.</p>
                <div className="heading">
                    <h2>Scholarship</h2>
                </div>
                    <p>Nanjing Medical University is gaining popularity amongst the talented students as it carefully picks up the best talents of the country by offering them with good scholarship.The University offers Scholarship to the medical students based on their 12th percentage &amp; NEET score.So higher the score more the scholarship.</p>
                    <p>We, Edurizon Pvt Ltd have helped our students get almost 70% scholarships of their tuition fees in the year 2018. Edurizon have always maintained transparency with its students and this is the main reason why maximum number of parents and students have trusted us till today. As a practice we believe in favoring our students &amp; take all the necessary measures so that our students get higher scholarships.</p>
                    <p>Nanjing Medical University not only provides scholarship to students in the first year but also top 10 students of the university get scholarship.Top rank holder gets 50% waiver in tuition fees. Unlike other consultancy, Edurizon always believes in informing the students about the scholarship they are eligible for even if they are not aware of the fact, and that is the reason Edurizon Pvt Ltd is known as the best consultant for mbbs in china.</p>
                <div className="heading">
                    <h2>Hostel</h2>
                </div>
                <p>The University hostel is very huge and is located within the campus. There is separate hostel for both boys and girls and are provided with all facilities inside the hostel. Safety and security is very tight. Students are not allowed to enter the hostel without a biometric entry. If any outsider wants to meet the students they have to take special permission, then only they can take entry.</p>
                
            </div>
        </div>
    </div>
</section>
{/* <!--<section className="inner-page-bg">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                        <h2 className="mt-0">Fees Structure of Nanjing Medical University</h2>
                    </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">1st Year</th>
                                <th scope="col">2nd Year</th>
                                <th scope="col">3rd Year</th>
                                <th scope="col">4th Year</th>
                                <th scope="col">5th Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Tuition Fee (RMB)</th>
                                <td>34,000</td>
                                <td>34,000</td>
                                <td>34,000</td>
                                <td>34,000</td>
                                <td>34,000</td>
                            </tr>
                            <tr>
                                <th scope="row">Hostel (RMB)</th>
                                <td>6,000</td>
                                <td>6,000</td>
                                <td>6,000</td>
                                <td>6,000</td>
                                <td>6,000</td>
                            </tr>
                            <tr>
                                <th scope="row">Total (RMB)</th>
                                <td><b>40,000</b></td>
                                <td><b>40,000</b></td>
                                <td><b>40,000</b></td>
                                <td><b>40,000</b></td>
                                <td><b>40,000</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>--> */}
<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-md-12 col-12">
                    <div className="heading">
                        <h2 className="mt-0 mb-3 mb-md-0">Our Director visited Nanjing Medical University</h2>
                    </div>
                    <div id="edurizon-photos" className="owl-carousel">
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-1.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-1.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-2.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-2.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-3.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-3.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-4.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-4.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-5.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-5.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-6.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-6.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-7.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-7.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-8.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-8.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search"></i></div>
                                    </div>
                                </a>
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
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                    <h2 className="mt-0 mb-4">Quick Facts</h2>
                </div>
                <div className="table-responsive">
                        <table className="table table-bordered table-striped align-middle">
                            <tbody>
                                <tr>
                                    <th scope="row">Established in</th>
                                    <td>1934</td>
                                </tr>
                                <tr>
                                    <th scope="row">Recognition</th>
                                    <td>NMC, WHO, ECFMG (USMLE), GMC (PLAB), AMEE</td>
                                </tr>
                                <tr>
                                    <th scope="row">Fees</th>
                                    <td>RMB 34,000 per year</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hostel</th>
                                    <td>RMB 6,000 per year</td>
                                </tr>
                                <tr>
                                    <th scope="row">Medium of Teaching</th>
                                    <td>Fully English</td>
                                </tr>
                                <tr>
                                    <th scope="row">Course Duration</th>
                                    <td>5 Years + 1 year Internship</td>
                                </tr>
                                <tr>
                                    <th scope="row">Indian students</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">Entrance Exam</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">University Ranking</th>
                                    <td>494</td>
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
                                    
                                    <td><a href="callto:9873381377" className="btn-custom btn-univ-detail" title="9873381377"><i className="fas fa-phone-volume" aria-hidden="true"></i> Call</a> <a href="https://wa.link/v328m4" className="btn-custom whtsp-btn btn-univ-detail" title="9873381377"><i className="fab fa-whatsapp" aria-hidden="true"></i> Whatsapp</a></td>
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
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                        <h2 className="mt-0">Documents Required for MBBS Admission in Nanjing Medical University</h2>
                    </div>
                    <ul className="points-two">
                        <li>10th, 12th Mark sheet.</li>
                        <li>NEET score card.</li>
                        <li>1 passport size photograp.</li>
                        <li>Passport.</li>
                        <li>Physical Fitness certificate.</li>
                        <li>Gap certificate (in case there is any gap in the academic year).</li>
                        <li>6 months bank statement (minimum balance should be around the fees of 1st year).</li>
                        <li>Character certificate.</li>
                        <li>Migration & Transfer Certificate.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="h-[4vw]"/> 
    </div></>
  )
}

export default NewPage
