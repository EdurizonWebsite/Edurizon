import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tuition Fees",
      label: "RMB 32,400/ Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Jiangsu, Nanjing, China",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "QS World Rank",
      label: "465",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Amazing Fact",
        label: "Nearest University to the Airport",
      },
  ];

const NewPage = () => {
  return (
    <>
    <Head>
    <title>
  Top Medical Universities in China – MBBS Admission & Scholarship - SouthEast
  University
</title>
<meta
  name="keyword"
  content="mbbs in china, Top 10 medical colleges in china, Best Medical University in china, Top Medical Universities in china, Top10 Medical Universities in china, mbbs in china fee structure, Top medical colleges in china, Best medical colleges in china, zhejiang university, zhejiang science and technology university, zhejiang university china, xi an jiaotong university, xi an jiaotong university china, nanjing university china, nanjing university, nanjing medical university china, xiamen university, china xiamen university, xiamen university xiamen."
/>
<meta
  name="description"
  content="View top-ranked medical universities in China for MBBS, plus admission and scholarship opportunities at https://www.edurizon.in/study-destinations/study-mbbs-in-china/southeast-university."
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
  content="Top Medical Universities in China – MBBS Admission & Scholarship - SouthEast University"
/>
<meta
  property="og:description"
  content="View top-ranked medical universities in China for MBBS, plus admission and scholarship opportunities at https://www.edurizon.in/study-destinations/study-mbbs-in-china/southeast-university."
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
  content="Top Medical Universities in China – MBBS Admission & Scholarship - SouthEast University"
/>
<meta
  name="twitter:description"
  content="View top-ranked medical universities in China for MBBS, plus admission and scholarship opportunities at https://www.edurizon.in/study-destinations/study-mbbs-in-china/southeast-university."
/>
<meta
  name="twitter:image"
  content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
/>
<meta name="twitter:image:alt" content="MBBS in China" />

<link
  rel="alternate"
  href="https://www.edurizon.in/study-destinations/study-mbbs-in-china/southeast-university"
  hrefLang="en-in"
/>

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
        <div className="relative h-auto w-full">
        <Image src="/assets/Images/mbbs-in-china/associated-universities/southeast-university.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw] dark:text-white">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">SouthEast University</h1>
            </div>
            <p className="text-regularTexts text-center">
            The University has also been ranked in the top 3 list nationally in the following fields of landscape architecture, urban planning, civil engineering, electronic engineering, biomedical engineering and transportation engineering.</p>
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
                               <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/wDyCtDtdOuU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
                            </div>
                            <div className="edu-videos">
                              <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/2CMapuFuPTM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>  
                            </div>
                            <div className="edu-videos">
                              <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/hFL_VInm6yc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>  
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/6i5YDgvy2MU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            {/* <div className="edu-videos">
                              <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/8YG2ZP7IgsM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>  
                            </div> */}
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/DdHQx5OhbhY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/LIAnNYDMEQs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div> 
                            {/* <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/0liJ61My-Cw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div> */}
                            {/* <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/AM6vhqiTsLc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div> */}
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/T0gI3qDCyos" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            {/* <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/f4jyXDgmo68" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div> */}
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
                    <h2 className="mt-0">About Southeast University</h2>
                </div>
                <p>
                    South East University is one of the oldest university of China located in the city of Nanjing. It is a public research university in Jiangsu Province which was established in the year 1902.South East University has been
                    ranked among the top universities of China. It is ranked 300 in the world and also ranked in number 20 among the research universities of China.
                </p>
                <p>
                    The University has also been ranked in the top 3 list nationally in the following fields of landscape architecture, urban planning, civil engineering, electronic engineering, biomedical engineering and transportation
                    engineering.
                </p>
                <p>
                    Southeast University is the only university in China which is directly administered by the Chinese Department of Education and is one of the top className universities of China. The University has a faculty member of about
                    5400 faculties which includes 8 members of Chinese Academy, 1 fellow of State Department Degree Committee, 31 distinguished national youth research scientist, 7 members of “863 projects” expert committee, 57 excellent
                    department of Education research scientists and 25 “Changjiang Scholars”.
                </p>
                <p>
                    Southeast University has three main campuses namely Jiulonghu campus, Dingjiaqiao campus and Sipailou campus. All the three campuses are located in the same city of Nanjing but different district; Jiulonghu campus is
                    located in Jiangning District of Nanjing, Sipailou is located in the Xuanwu District and Dingjiaqiao is located in the Gulou district.
                </p>
                <p>
                    The university started as Sanjiang Normal College. Later in 1921 the university has change its name to National Southeast University and was crowned the second national university in China. In 1928 it was renamed as
                    National Central University. Again after the loss of Nanking by the KMT government, the university in 1949 was named as National Nanking University. In the year 1988 on May the University was finally named as Southeast
                    University.
                </p>
                <div className="heading">
                    <h2>Ranking</h2>
                </div>
                <p>
                    Southeast University is ranked in the top 300 in the world. Among the research universities also the university is ranked is ranked in top 20. Nationally also the University has been ranked in top 3 in different fields
                    like art history, urban planning, architecture, landscape architecture, electronic engineering, biomedical engineering and transportation engineering.
                </p>
                <div className="heading">
                    <h2>Location</h2>
                </div>
                <p>
                    Southeast University is located in the capital city of China that is Nanjing. Since the Ming Dynasty the city is considered as a sacred place for education and is one of the largest commercial centers of East China
                    region.
                </p>
                <p>
                    Nanjing is considered as one of the most important cities of the country over the past thousand years. It is one of the peaceful cities of the world despite the disaster and war. Since the establishment of People’s
                    Republic of China, the city has served as the capital of Jiangsu province. The city is famous for mountains, water and human historical landscapes such as Porcelain Tower, Drum Tower, City wall, Xuanwu Lake, Purple
                    Mountain, Qinhuai River, Stone city, Ming palace, Chaotian Palace, and Fuzimiao.
                </p>
                <div className="heading">
                    <h2>Climate</h2>
                </div>
                <p>
                    Nanjing city has hot summers and cold winters. The maximum annual temperature is 32 degree centigrade during the summers and July is the hottest month of the year. The average low temperature goes down to -1 degree
                    centigrade during the winters. January is the coldest month of the year. Snowfall occurs occasionally during the peak month.
                </p>
                <div className="heading">
                    <h2>Advantages of Southeast University</h2>
                </div>
                <ul className="points-two">
                    <li>Southeast University offers quality education at a very affordable cost and attempts to develop as a centre of excellence.</li>
                    <li>It is one of the oldest Government universities of China established in the year 1902 and is one of the best universities of China.</li>
                    <li>Southeast University is the only university in China which is financed by the Central Government and included in project 211 and program 985 to build as a world-className university.</li>
                    <li>The University has developed and grown over the years with 40 schools offering 60 undergraduate programs.</li>
                    <li>The University is listed under NMC and WHO and is one of the most prestigious universities of China.</li>
                    <li>The University is ranked among the top institutions of China and also throughout Asia.</li>
                    <li>Southeast University is a public research university located in the main capital city of China, Nanjing.</li>
                </ul>
                <div className="heading">
                    <h2>Intake</h2>
                </div>
                <p>
                    All the 45 universities of China have only one Intake in a year. It is very tough to get admission in the universities of China due to the high demand. Almost all the Universities of China are world ranked, so 70% of the
                    seats are occupied by International students other than India. Pre booking is done in advance and all the top university seats are filled up before the 12th result.
                </p>
                <div className="heading">
                    <h2>Scholarship</h2>
                </div>
                <p>
                    China is the only country to provide scholarship to International students. Every University in China has their own criteria for granting scholarship. Southeast University offers scholarship every year to top 10 medical
                    students during their course of study. Scholarship is not only based on the percentage of marks acquired but as a whole attendance, punctuality and other curricular activities are considered.
                </p>
                <div className="heading">
                    <h2>Hostel</h2>
                </div>
                <p>
                    Southeast University hostel is located within the University campus. There is a huge canteen nearby the hostel with all facilities including daily need commodities. The University has around 50-60 multistoried buildings
                    which is being used as hostel for the International students. Students are allotted double sharing room with all contemporary basic facilities along with a common kitchen wherein students can cook food as per their
                    wishes. The University provides full proof safety and security for all the students. Students are not allowed to enter the hostel without a Biometric entry.
                </p>
                <div className="heading"></div>
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
                        <h2 className="mt-0">Fees Structure of Southeast University</h2>
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
                                    <th scope="row">Tuition Fee (¥)</th>
                                    <td>32,800</td>
                                    <td>32,800</td>
                                    <td>32,800</td>
                                    <td>32,800</td>
                                    <td>32,800</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hostel (¥)</th>
                                    <td>6,000</td>
                                    <td>6,000</td>
                                    <td>6,000</td>
                                    <td>6,000</td>
                                    <td>6,000</td>
                                </tr>
                                <tr>
                                    <th scope="row">Total (¥)</th>
                                    <td><b>38,800</b></td>
                                    <td><b>38,800</b></td>
                                    <td><b>38,800</b></td>
                                    <td><b>38,800</b></td>
                                    <td><b>38,800</b></td>
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
                        <h2 className="mt-0 mb-3 mb-md-0">Our Director visited Southeast University</h2>
                    </div>
                    <div id="edurizon-photos" className="owl-carousel">
                        <div className="edu-photos">
                            <div className="gallery-box">
                        <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/southeast-university/southeast-2.jpeg" className="img-fluid">
                            <img src="assets/images/mbbs-in-china/gallery/southeast-university/southeast-2.jpeg" alt="" className="img-fluid" title="" />
                            <div className="overlay">
                                <div className="zoom-btn"><i className="fas fa-search"></i></div>
                            </div>
                        </a>
                    </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                        <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/southeast-university/southeast-1.jpeg" className="img-fluid">
                            <img src="assets/images/mbbs-in-china/gallery/southeast-university/southeast-1.jpeg" alt="" className="img-fluid" title="" />
                            <div className="overlay">
                                <div className="zoom-btn"><i className="fas fa-search"></i></div>
                            </div>
                        </a>
                    </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                        <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/southeast-university/southeast-3.jpeg" className="img-fluid">
                            <img src="assets/images/mbbs-in-china/gallery/southeast-university/southeast-3.jpeg" alt="" className="img-fluid" title="" />
                            <div className="overlay">
                                <div className="zoom-btn"><i className="fas fa-search"></i></div>
                            </div>
                        </a>
                    </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                        <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/southeast-university/southeast-4.jpeg" className="img-fluid">
                            <img src="assets/images/mbbs-in-china/gallery/southeast-university/southeast-4.jpeg" alt="" className="img-fluid" title="" />
                            <div className="overlay">
                                <div className="zoom-btn"><i className="fas fa-search"></i></div>
                            </div>
                        </a>
                    </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                        <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/southeast-university/southeast-5.jpeg" className="img-fluid">
                            <img src="assets/images/mbbs-in-china/gallery/southeast-university/southeast-5.jpeg" alt="" className="img-fluid" title="" />
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
                                    <td>1902</td>
                                </tr>
                                <tr>
                                    <th scope="row">Recognition</th>
                                    <td>NMC, WHO, ECFMG (USMLE), GMC (PLAB), AMEE</td>
                                </tr>
                                <tr>
                                    <th scope="row">Fees</th>
                                    <td>RMB 32,400 per year</td>
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
                                    <td>QS World Rank 465</td>
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
                                    <td><a href="callto:9873381377" className="btn-custom btn-univ-detail" title="9873381377"><i className="fas fa-phone-volume" aria-hidden="true"></i> Call</a> <a href="https://wa.link/v328m4" className="btn-custom whtsp-btn btn-univ-detail"  title="9873381377"><i className="fab fa-whatsapp" aria-hidden="true"></i> Whatsapp</a></td>
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
                        <h2 className="mt-0">Documents Required for MBBS Admission in Southeast University</h2>
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
    </div>
    </>
  )
}

export default NewPage
