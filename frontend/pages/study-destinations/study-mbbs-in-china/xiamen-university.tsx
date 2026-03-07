import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";
const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tution Fees",
        label: "RMB 38,000/Year",
      },
      {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "City & Province",
        label: "Xiamen, China",
      },
      {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "QS World Rank",
        label: "362",
      },
  ];

const NewPage = () => {
  return (
        <>
        <Head>
        <title>
  Xiamen University in China, MBBS Fees | Edurizon

</title>
<meta
  name="keyword"
  content="mbbs in china, Top 10 medical colleges in china, Best Medical University in china, Top Medical Universities in china, Top10 Medical Universities in china, mbbs in china fee structure, Top medical colleges in china, Best medical colleges in china, zhejiang university, zhejiang science and technology university, zhejiang university china, xi an jiaotong university, xi an jiaotong university china, nanjing university china, nanjing university, nanjing medical university china, xiamen university, china xiamen university, xiamen university xiamen."
/>
<meta
  name="description"
  content="Study MBBS at Xiamen University in China with world-class medical education, English-medium programs & affordable MBBS fees.
"
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
  content="Best Medical University in China – Eligibility & Admission for MBBS - Xiamen University"
/>
<meta
  property="og:description"
  content="Find the best medical university in China for MBBS. Get eligibility info and admission steps at https://www.edurizon.in/study-destinations/study-mbbs-in-china/xiamen-university."
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
  content="Best Medical University in China – Eligibility & Admission for MBBS - Xiamen University"
/>
<meta
  name="twitter:description"
  content="Find the best medical university in China for MBBS. Get eligibility info and admission steps at https://www.edurizon.in/study-destinations/study-mbbs-in-china/xiamen-university."
/>
<meta
  name="twitter:image"
  content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
/>
<meta name="twitter:image:alt" content="MBBS in China" />

<link
  rel="alternate"
  href="https://www.edurizon.in/study-destinations/study-mbbs-in-china/xiamen-university"
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
        <div className="relative h-auto w-full dark:text-white">
        <Image src="/assets/Images/mbbs-in-china/associated-universities/xiamen-university.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Xiamen University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Over the past ninety years, Xiamen University has amassed a wealth of expertise in providing educational programs. The university which offers a reasonably wide variety of educational programs and have strong faculty and staff, has grown into a first-className comprehensive university in China with significant international influence.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw]  md:gap-[1.125vw] items-center px-[5vw] md:p-[.5vw] justify-center">
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
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/0BF-kRVlX5E" title="Exposing the Real Cost of Medical Study Abroad"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/3JA3KOKdeW8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/LIAnNYDMEQs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div> 
                            {/* <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/0liJ61My-Cw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/AM6vhqiTsLc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div> */}
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/T0gI3qDCyos" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            {/* <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/f4jyXDgmo68" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
                    <h2 className="mt-0">About Xiamen University</h2>
                </div>
                <p>Tan Kah Kee, a well-known patriotic overseas Chinese leader, founded Xiamen University in 1921. It was the first overseas Chinese to create a university in China. Over the past ninety years, Xiamen University has amassed a wealth of expertise in providing educational programs. The university which offers a reasonably wide variety of educational programs and have strong faculty and staff, has grown into a first-className comprehensive university in China with significant international influence.</p>
                <p>It is now the sole university in any of China's five special economic zones. Xiamen University has a large international presence, has developed a strong faculty and staff. Xiamen University has generated over 200,000 undergraduates and graduates for the country since its foundation, as well as over 60 academicians from the Chinese Academy of Sciences (CAS) and the Chinese Academy of Engineering (CAE).</p>
                <p>Over 270 institutes of higher education in China and overseas have inter-university collaboration relationships with Xiamen University. The campaign to teach Chinese as a foreign language is strongly promoted at Xiamen University. With institutions in North America, Europe, Africa, and other parts of the world, the university has co-founded 15 Confucius Institutes. It is the primary university most actively engaged in cross-strait educational, scientific, and cultural interactions due to its particularly excellent geographical location and advantageous personnel resources.</p>
                <div className="heading">
                    <h2>About Faculties</h2>
                </div>
                <ul className="points-two">
                <li>XMU currently has a faculty of over 2,600 full-time teachers and researchers, of whom 22 are the members of the Chinese Academy of Sciences or of the Chinese Academy of Engineering (including 9 who are employed simultaneously by other institutions), and 44 professors are Distinguished or Chair Professors on the Changjiang Scholars Program.</li>
                <li>With a graduate school, 6 academic divisions consisting of 28 schools and colleges, and 14 research institutes, XMU boasts a total enrollment of nearly 40,000 full-time students (including 1,500 international students), i.e. 20,000 undergraduates, 16,400 graduate students toward a master’s degree, 3,600 doctoral candidates.</li>
                <li>One of the reasons why students choose Xiamen is because of its affordable tuition fee and great international exposure.</li>
                <li>Because of the high quality of its education, the National Medical Commission (NMC) and the World Health Organization (WHO) have approved Xiamen University.</li>
                <li>XMU is known as China's "most beautiful university" for its great academic facilities and lovely surroundings, situated snugly between green hills and the turquoise sea.</li>
                <li>No Donation/Capitation Fees: To study MBBS at Xiamen University there would be no need to pay any donation or capitation fees.</li>
                <li>The Medical Council of India has recognised Xiamen University.</li>
                <li>The cost of both studying and living at Xiamen University is very reasonable.</li>
                <li>The hospital linked with Xiamen University offers students numerous opportunities for practical training.</li>
                <li>Xiamen University is ranked number 10 in China for medical education, demonstrating that it is a top performer among China's medical universities.</li>
                </ul>
                <div className="heading">
                    <h2>University Ranking</h2>
                </div>
                <ul className="points-two">
                    <li><b>QS World Rank 2022: 407</b></li>
                    <li><b>Asian University Ranking: 73</b></li>
                </ul>
                <div className="heading">
                    <h2>Quick Highlights of Xiamen University China</h2>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped align-middle">
                        <tbody>
                            <tr>
                                <th scope="row">Established in</th>
                                <td>1921</td>
                            </tr>
                            <tr>
                                <th scope="row">Located in</th>
                                <td>Xiamen, China</td>
                            </tr>
                            <tr>
                                <th scope="row">Eligibility Criteria</th>
                                <td>10+2 (PCB) with 60%</td>
                            </tr>
                            
                            <tr>
                                <th scope="row">IELTS & TOEFL</th>
                                <td>Not Required</td>
                            </tr>
                            <tr>
                                <th scope="row">NEET Exam</th>
                                <td>Yes, it is compulsory</td>
                            </tr>
                            <tr>
                                <th scope="row">MBBS Course Duration (in Years)</th>
                                <td>5+1 with Internship</td>
                            </tr>
                            <tr>
                                <th scope="row">Recognition</th>
                                <td>NMC, WHO & BMDC, NMC</td>
                            </tr>
                            <tr>
                                <th scope="row">Medium of instruction</th>
                                <td>English</td>
                            </tr>
                            <tr>
                                <th scope="row">Total international students</th>
                                <td>3,000</td>
                            </tr>
                            <tr>
                                <th scope="row">No. of campuses </th>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="heading">
                    <h2>Other Benefits</h2>
                </div>
                <ul className="points-two">
                    <li>One of the best medical universities of the world with under 500 world rank.</li>
                    <li>It is a large research and teaching university with 82 undergraduate programs. There are 276 graduate programs and 187 doctoral programs taught in English by Chinese-educated academics.</li>
                    <li>In the dorm, there is a shared kitchen where students can prepare their own meals according to their preferences.</li>
                    <li>Currently, Xiamen University's three campuses span approximately 600 hectares. With grassy hills behind and in front of the sea, Xiamen University is regarded as one of China's most attractive universities.</li>
                    <li>Gymnasium and Stadium.</li>
                    <li>There is a conventional 400-meter track and field ground, ten basketball courts, and several horizontal and parallel bars. There are tennis courts and volleyball courts, as well as a Football Field with two small football pitches where football fans can show off their skills. Aside from that, eight new basketball courts have been constructed. The Qing Ming Swimming Gymnasium has a swimming pool with standard tracks as well as other facilities. To swim there, students must have a health certificate issued by XMU Hospital and pay with an XMU e-card.MBBS</li>
                    <li>Graduates from china have a lot of work opportunities all over the world.</li>
                    <li>In China, there are numerous scholarship programmes for medical students that will assist students in obtaining their MBBS degrees.</li>
                    <li>When compared to other countries, the educational level in China is superior in every manner.</li>
                    <li>Students' dormitories at chinese medical universities are all equipped with modern and necessary amenities at a reasonable price.</li>
                    <li><b>Corner for Foreign Languages: </b> Once a week, students can attend the foreign language corner in the courtyard of the OEC college building, where students of various majors and nationalities can meet and converse in a foreign language that they both understand.</li>
                </ul>
                <div className="heading">
                    <h2>Duration of MBBS Programme</h2>
                </div>
                <ul className="points-two">
                    <li>The duration of MBBS in Xiamen University is for 5+1 years. </li>
                    <li>1 year internship from the affiliated hospitals of Xiamen University is also compulsory in the University after completing 5 years MBBS programme.</li>
                    <li>Only 1 intake in Xiamen University which every year commences from the Month of September.</li>
                </ul>
                <div className="heading">
                    <h2>Weather</h2>
                </div>
                <p>Xiamen, which is located in the subtropical zone, has a maritime environment with pleasant, spring-like weather throughout the year. The brilliant sunlight, pleasant breezes, lush greenery, and vibrant flowers can be enjoyed all year.</p>
                <div className="heading">
                    <h2>Airport Facilities</h2>
                </div>
                <ul className="points-two">
                    <li>There is a connecting flight from New Delhi International Airport to Xiamen University.</li>
                    <li>The nearest airport to Xiamen university is 16 km to Xiamen Gaoqi <br/>
                    International Airport (XMN / ZSAM)<br/>
                    27 km to Kinmen Airport (KNH / RCBS)<br/>
                    85 km to Quanzhou Jinjiang Airport (JJN / ZSQZ)</li>
                </ul>
                <div className="heading">
                    <h2>Basic Criteria</h2>
                </div>
                <ul className="points-two">
                    <li><b>Minimum percentage for MBBS: </b> 70% PCBE.</li>
                    <li><b>NEET Requirements: </b>Just to Qualify.</li>
                    <li><b>Medium of Teaching:</b> English.</li>
                    <li>Students who expected 80% (aggregate) in his/her Higher Secondary can book their seats in advance and should not wait for the NEET result.</li>
                    <li>In most of the top-ranking medical Universities, seats generally get filled well before the time being availability of limited number of seats.</li>
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
                        <h2 className="mt-0">Chinese Government Scholarship</h2>
                    </div>
                    <ul className="points-two">
                        <li>International students studying in China are eligible for Chinese Government Scholarship that is being awarded by the Chinese Scholarship Council (CSC). </li>
                        <li>This is awarded to the students applying or studying in the universities affiliated to CSC. Every year the CSC online application system starts from December to April. </li>
                        <li>Every university under the CSC affiliation has a different application deadline. It is mandatory to fill the online application form for students applying for Chinese Government Scholarship.</li>
                        <li>At present 289 Chinese Universities are designated to offer a wide range of programs in science, engineering, fine arts, philosophy, economics, medicine, legal studies, agriculture, history, literature and management under the CSC Scholarship scheme at all levels.</li>
                    </ul>
                    <div className="heading">
                        <h2>Documents Required for Chinese Government Scholarship</h2>
                    </div>
                    <ul className="points-two">
                        <li>A duly filled application form.</li>
                        <li>Passport copy.</li>
                        <li>Notarized copy of highest diploma/degree certificates. </li>
                        <li>Reference letters from professors wherever demanded.</li>
                        <li>Study Plan.</li>
                        <li>Copy of Academic transcripts (clear colored scanned copies).</li>
                        <li>Foreigners Health Examination Form.</li>
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
                <div className="col-xl-12 col-md-12 col-12">
                    <div className="heading">
                        <h2 className="mt-0 mb-3 mb-md-0">Our Director visited China</h2>
                    </div>
                    <div id="edurizon-photos" className="owl-carousel">
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/china/china-gallery-1.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/china/china-gallery-1.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search" aria-hidden="true"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/china/china-gallery-2.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/china/china-gallery-2.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search" aria-hidden="true"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-2.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-2.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search" aria-hidden="true"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-8.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/nanjing-medical-university/nanjing-8.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search" aria-hidden="true"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/china/china-gallery-3.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/china/china-gallery-3.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search" aria-hidden="true"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/china/china-gallery-4.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/china/china-gallery-4.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search" aria-hidden="true"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/china/china-gallery-5.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/china/china-gallery-5.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search" aria-hidden="true"></i></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edu-photos">
                            <div className="gallery-box">
                                <a data-fancybox="video-gallery" href="assets/images/mbbs-in-china/gallery/china/china-gallery-6.jpeg" className="img-fluid">
                                    <img src="assets/images/mbbs-in-china/gallery/china/china-gallery-6.jpeg" alt="" className="img-fluid" title="" />
                                    <div className="overlay">
                                        <div className="zoom-btn"><i className="fas fa-search" aria-hidden="true"></i></div>
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
                        <h2 className="mt-0">Documents Required for MBBS Admission in Xiamen University</h2>
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
                    <div className="heading">
                        <h2>Eligibility</h2>
                    </div>
                    <ul className="points-two">
                        <li>An applicant must be Non-Chinese National and must possess a valid passport with a valid Chinese visa for study in China.</li>
                        <li>Applicants must present their HSK marks cards depicting their proficiency in Chinese language. However, relaxation can be given to students applying for programs taught in the English Language.</li>
                        <li>Applicants must abide by the rules & regulations of the University as well as the Chinese government.</li>
                        <li>Undergraduate program applicants of not more than 25 years and must submit high school mark sheets.</li>
                        <li>Master’s degree applicants of not more than 35 years, a bachelor degree holder and must submit 2 recommendation letters from professors.</li>
                        <li>A Doctoral program applicant must be a Master degree holder and not above 45 years of age. Submission of 2 recommendation letters from professors is a mandatory requirement.</li>
                    </ul>
                    <p className="mt-3 mt-md-3">Expertise and relevant team of professionals verify and selects the students who are granted pre-admission letters by the mid of June. By the end of June, these must apply for University Scholarship online. Once the applications are scrutinized, the students are awarded the scholarship in the month of September each year. The provincial department where the university is located takes the responsibility of all applications. Each university in the province receives funds and aids from the Provincial Department of Education according to the number of students who have been awarded the scholarship. If the student does not abide by the rules & regulations of the university or the government, the university has the authority to report to the provincial department of education and his/her scholarship is deemed to be terminated with immediate effect. The university or college must submit a comprehensive report of students’ assessment to the provincial department that will help them determine the student’s eligibility for scholarship in the coming year. This report must be submitted in writing by the end of May.</p>
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
