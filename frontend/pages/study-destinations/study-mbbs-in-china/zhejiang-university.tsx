import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tuition Fees",
      label: "RMB 42,800/ Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Zhejiang, China",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "Country Rank",
      label: "QS World Rank 45",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "QS World Rank",
      label: "Most Popular University for Indians",
    },
  ];

const NewPage = () => {
  return (
    <>
    <Head>
    <title>Zhejiang University in China, MBBS Fees | Edurizon
</title> 
<meta name="keyword" content="mbbs in china, Top 10 medical colleges in china, Best Medical University in china, Top Medical Universities in china, Top10 Medical Universities in china, mbbs in china fee structure, Top medical colleges in china, Best medical colleges in china, zhejiang university, zhejiang science and technology university, zhejiang university china, xi an jiaotong university, xi an jiaotong university china, nanjing university china, nanjing university, nanjing medical university china, xiamen university, china xiamen university, xiamen university xiamen." />
<meta name="description" content="Study MBBS at Zhejiang University in China with world-class medical education, advanced facilities & affordable MBBS fees.
" />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
<meta name="DC.title" content="MBBS in China" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Dwarka" />
<meta name="geo.position" content="22.351115;78.667743" />
<meta name="ICBM" content="22.351115, 78.667743" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="MBBS in China – Fee Structure, Admission & Scholarships Zhejiang University"/>
<meta property="og:description" content="Compare cost of MBBS in    Russia, find admission & eligibility rules and apply to universities with help from Discover affordable MBBS in China, admission process, and fee structure with scholarship details at https://www.edurizon.in/study-destinations/study-mbbs-in-china/zhejiang-university."/>
<meta property="og:url" content="https://www.edurizon.in/"/>
    <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:site" content="@edurizon"/>
<meta name="twitter:title" content="MBBS in China – Fee Structure, Admission & Scholarships Zhejiang University"/>
<meta name="twitter:description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from Discover affordable MBBS in China, admission process, and fee structure with scholarship details at https://www.edurizon.in/study-destinations/study-mbbs-in-china/zhejiang-university"/>
<meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:image:alt" content="MBBS in China"/>
<link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-china/zhejiang-university" hrefLang="en-in"/>


{/* Google tag (gtag.js) */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-9JDZZKPGL8"
/>
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
        <Image src="/assets/Images/mbbs-in-china/associated-universities/zhejiang-university.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Zhejiang University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Zhejiang University was founded in the year 1897, and is one of the oldest and prestigious university of China. The University has 37schools, colleges and departments which offers 300 graduate programs, and 140 undergraduate programs. Zhejiang University is also included in the list of elite C9 league and is a Class A Double First Class University.
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
    <div className="container ">
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
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/G7i7lijJxtw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe src="https://www.youtube.com/embed/Jq0VtA6b3IE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  width="100%" height="250" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/LIAnNYDMEQs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div> 
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
                    <h2 className="mt-0">About Zhejiang University</h2>
                </div>
                <p>Zhejiang University was founded in the year 1897, and is one of the oldest and prestigious university of China. The University has 37schools, colleges and departments which offers 300 graduate programs, and 140 undergraduate programs.</p>
                <p>Zhejiang University is also included in the list of elite C9 league and is a className A Double First className University. The University consists of faculty members of more than 3,741 scholars, 10 liberal Arts and Humanities Senior Professors, 133 recipients of the National Science Fund for distinguished young scholars, 121 Chang Jiang Scholars Program Professors and 45 members from the Chinese Academy of Sciences and the Chinese Academy of Engineering.</p>
                <p>Currently the University has a total enrollment of 54,641 students which includes graduates, undergraduates, PhD, and International students. Zhejiang University has 5 academic libraries with a total collection of more than 7.7 million volumes of textbooks making it one of the China’s highest collections of textbooks. The University has total 7 affiliated hospitals, 2 international joint institutes, boasts over 150 student organizations and 1 museum.</p>
                <p>The University has 7 campuses, Yuquan Campus, Xixi Campus, Haining International Campus, Huajiachi Campus, Zhijiang Campus, Zijin’gang Campus, and Zhoushan campus.</p>
                <div className="heading">
                    <h2>Location</h2>
                </div>
                <p>Zhejiang University is located in Hangzhou, which is the most populous and the capital city of Zhejiang Province in China. The city was also rated as the best commercial city of China by Forbes. It is the third city in China to host the Asian Games in 2022 after Beijing. It is also one of the most renowned and prosperous city of China.</p>
                <p>Some of the best known attractions of the city are City’s West Lake, and UNESCO World Heritage site. Hangzhou is famous for many tourist attraction sites like tea and silk, the ancient water towns and many more to explore.</p>
                <div className="heading">
                    <h2>Climate</h2>
                </div>
                <p>The Climate of Hangzhou is mild and warm throughout the year. The city experiences enough rainfall and sunshine all the year. July is the hottest month of the year with a temperature of 29 degree centigrade.</p>
                <p>Winter last from December till February month and January is the coldest month of the year. In winter the temperature drops down to 3 degree centigrade. There is little snowfall during the peak winter session only.</p>
                <p>Summer season experiences good amount rainfall from mid June to September. Temperature varies in most of the season but most probably it remains warm.</p>
                <div className="heading">
                    <h2>Advantages of Zhejiang University </h2>
                </div>
                <ul className="points-two">
                    <li>QS World ranking of the University is 54.</li>
                    <li>Zhejiang University is one of the oldest universities of China founded in the year 1897.</li>
                    <li>The University is also included in the list of elite C9 league University.</li>
                    <li>It is one of the top ranked universities of China which is ranked in 5th position.</li>
                    <li>It is a className A Double First className University, located in the prime location of Hangzhou, Zhejiang province.</li>
                    <li>The University has 7 campuses spread over an area of 5.9 square kilometers.</li>
                    <li>In ESI ranking the University is ranked in the top 1% position in 15 disciplines. </li>
                    <li>The University has a high level of 7 affiliated hospitals for its students.</li>
                </ul>
                <div className="heading">
                    <h2>Intake</h2>
                </div>
                <p>MBBS in China has probably 1 intake in a year. Generally, classes start from the month of September, so our students start departing from the first week of September only. China has very limited number of seats for International students. Almost all the seats are filled up very fast for most of the universities that is why the students are requested to Pre- book their seat from the month of December. China offers world ranked universities and most of the universities are included in C9 league.</p>
                <div className="heading">
                    <h2>Scholarship</h2>
                </div>
                <p>China offers scholarship to International students based on their performance. Every University in China provides scholarship but they have set their own criteria for granting scholarship. Zhejiang University offers scholarship to International students from the 2nd year of study only to the top performing 5 medical students. For Scholarship apart from study full attendance is taken into consideration.</p>
                <div className="heading">
                    <h2>Hostel</h2>
                </div>
                <p>Zhejiang University has its own hostel which provides single sharing room for the students. Separate apartment is built for all boys and girls. Biometric entry of the students is compulsory in the hostel for which a card has been issued to them based on which they have to enter into their rooms. Same biometric card is required for attendance in the classes also. Apart from biometrics, hostel warden is also available in every building besides the security guards at the main entrance. CC TV camera is installed all around the campus for effective surveillance, safety and security of the students.</p>
            </div>
        </div>
    </div>
</section>

<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-md-12 col-12">
                    <div className="heading">
                        <h2 className="mt-0 mb-3 mb-md-0">Our Director visited China</h2>
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
                                    <td>1892</td>
                                </tr>
                                <tr>
                                    <th scope="row">Recognition</th>
                                    <td>NMC, WHO, ECFMG (USMLE), GMC (PLAB), AMEE</td>
                                </tr>
                                <tr>
                                    <th scope="row">Fees</th>
                                    <td>RMB 42,800 per year</td>
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
                                    <td>QS World Rank 45</td>
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
                        <h2 className="mt-0">Documents Required for MBBS admission in Zhejing University</h2>
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
<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                    <h2 className="mt-0">Why Choose Edurizon for admission in Zhejiang University</h2>
                </div>
                <ul className="points-two">
                    <li>Edurizon Pvt Ltd is an authorized agent of Zhejiang University.</li>
                    <li>Edurizon Pvt Ltd is a study abroad consultant with 10 years of experience for admission in China.</li>
                    <li>We have sent highest number of students to China in 2019 from almost every state of India.</li>
                    <li>We help our students in each and every step of their career.</li>
                    <li>We provide free service to the students for total 6years, till the completion of the course.</li>
                    <li>We are always ready to carry all the necessary items of the students sent from their hometown whenever we visit China.</li>
                    <li>Our Director’s on regular basis visits China, to look after our students so that they are comfortable in the city.</li>
                    <li>Our representatives are always present at the university to help the students with any issues.</li>
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
