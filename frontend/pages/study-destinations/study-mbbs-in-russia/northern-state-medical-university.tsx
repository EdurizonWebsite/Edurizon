import Breadcrumbs from "@/components/Breadcumbs"
import Image from "next/image"
import Head from "next/head"
const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tution Fees",
      label: "Rs. 3,20,000 yearly",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Arkhangelsk Oblast, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "World Rank",
      label: "271",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "Offers a world-className education system",
    },
  ];
const NewPage=()=>{
    return(
        <>
            <Head>
                <title>Northern State Medical University | Cost & Admission Guide for Indian Students with Scholarships</title>
                <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
                <meta name="description" content="Visit https://www.edurizon.in/study-destinations/study-mbbs-in-russia/northern-state-medical-university for clear details on MBBS in Russia cost, admission steps, eligibility & how to get scholarships." />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS In Russia" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Northern State Medical University | Cost & Admission Guide for Indian Students with Scholarships" />
                <meta property="og:description" content="Visit https://www.edurizon.in/study-destinations/study-mbbs-in-russia/northern-state-medical-university for clear details on MBBS in Russia cost, admission steps, eligibility & how to get scholarships." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="Northern State Medical University | Cost & Admission Guide for Indian Students with Scholarships" />
                <meta name="twitter:description" content="Visit https://www.edurizon.in/study-destinations/study-mbbs-in-russia/northern-state-medical-university for clear details on MBBS in Russia cost, admission steps, eligibility & how to get scholarships." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Russia" />
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/northern-state-medical-university" hrefLang="en-in"/>

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
        <Image src="/assets/Images/universities/russia/NorthernStateMedicalUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Northern State Medical University</h1>
            </div>
            <p className="text-smallTextPhone md:text-regularTexts text-justify md:text-center">
            Are you aspiring to build a successful medical career? North-Western State Medical University in Russia offers top-tier medical education, advanced research opportunities, and a strong foundation for future healthcare professionals.
            </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.25vw]  md:gap-[1.125vw] items-center px-[5vw] md:p-[.5vw] justify-between">
              {services.map((item, index) => (
                <div key={index} className="w-[37.5vw]  md:w-[16.5vw] h-[33vw] md:h-[12.875vw] relative shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
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

        {/* old code */}
        <section className="inner-page-bg dark:bg-black">
  <div className="container">
      <div className="row g-0">
          <div className="immigrate-bg">
              <div className="row">
                  <div className="col-xl-12 col-md-12 col-12">
                      <div className="heading">
                          <h3 className="text-h5TextPhone md:text-h5Text">Important videos of Northern State Medical University</h3>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xl-12">
                      <div id="edurizon-videos" className="grid grid-cols-2 md:grid-cols-4 owl-carousel">
                          <div className="edu-videos">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/XkMc1nbrD9k?si=tJlr2JaJKLVY1EXY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          </div>
                          <div className="edu-videos">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/fuZAPHH2w-s?si=seYUrdDum_y-Yjvx" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          </div>
                          <div className="edu-videos">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/DnlnvUGYj8k?si=onDa-TAwgw4NiGbb" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          </div>
                          <div className="edu-videos">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/LmFpp7Gw2DI?si=grpubFLLsFBd2zsa" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          </div>
                          <div className="edu-videos">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/PDZWQ_AVuxU?si=2r-RfNEjbD0EY_Lx" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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
          <h3 className="text-h5TextPhone md:text-h5Text">Northern State Medical University</h3>
        </div>
        <p>
          Northern State Medical University is a state-run medical institution of higher education located in Arkhangelsk, Russia. It was founded in the year 1932 as Arkhangelsk State Medical Institute and later renamed Northern State
          Medical University in the year 2010. Northern State Medical University is one of the oldest and leading medical universities in the Russian Federation.
        </p>
        <p>
          University offers various undergraduate and postgraduate programs in medicine, dentistry, pharmacy, nursing and public health. Northern State Medical University has a faculty of over 800 highly qualified academic staff and the
          student body consists of around 6,000 students from various countries.
        </p>
        <p>
          University has modern teaching facilities including well-equipped classrooms, libraries, and laboratories. Northern State Medical University has collaboration agreements with several international universities, allowing students
          and faculty to participate in exchange programs, joint research projects and academic conferences.
        </p>
        <ul className="points-two">
          <li>Top medical university in Russia.</li>
          <li>Northern State Medical University is a leading and renowned medical university located in Arkhangelsk, Russia. The university was founded in 1936.</li>
        </ul>
        <div className="heading">
          <h3>Northern State Medical University Location</h3>
        </div>
        <ul className="points-two">
          <li>Northern State Medical University is located in Arkhangelsk, Russia. Arkhangelsk is the largest city in north European Russia.</li>
          <li>Northern State Medical University admission.</li>
            
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
            <h3 className="text-h5TextPhone md:text-h5Text">Quick Highlights of Northern State Medical University</h3>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <tbody>
                <tr>
                  <th scope="row">Year of Establishment</th>
                  <td>1932</td>
                </tr>
                <tr>
                  <th scope="row">University Type</th>
                  <td>Public</td>
                </tr>
                <tr>
                  <th scope="row">Recognition</th>
                  <td>NMC and WHO Approved</td>
                </tr>
                <tr>
                  <th scope="row">Elegibility</th>
                  <td>50% aggregate in PCB</td>
                </tr>
                <tr>
                  <th scope="row">Course Duration</th>
                  <td>6 years(including 1 year internship)</td>
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
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h3 className="text-h5TextPhone md:text-h5Text">City at a Glance</h3>
        </div>
        <p>Arkhangelsk is a city located in the north western part of Russia, on the banks of the Northern Dvina River, near the White Sea. It is the administrative center of the Arkhangelsk Oblast.</p>
        <p>The White Sea, which is roughly 40 kilometers from Arkhangelsk, contributes to the city's windy, humid environment and frequent rains.</p>
        <p>Russian cities dating back a long way includes Arkhangelsk.</p>
        <p>Among the major cultural and scientific hubs in the European North is Arkhangelsk.</p>
        <p>
          Arkhangelsk is one of the oldest cities in Russia, founded in the 12th century. It played a significant role in the country's history as a major seaport and trading center, particularly for timber and fur. Today, it remains an
          important industrial, cultural and educational hub in the region.
        </p>
        <p>
          Some of the city's main attractions are the Arkhangelskiye Gostinyye Dvor, the Kulakov Museum, the Northern Sea Museum, and the Museum of the Russian Art of the XVII Century, and the Small Korela Wooden Architecture and Folk Art
          Museum.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row immigrate-bg g-0">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="heading">
          <h3 className="text-h5TextPhone md:text-h5Text">Recognitions of Northern State Medical University</h3>
          <p>Several reputable international organizations, including the following, have acknowledged Northern State Medical University:</p>
        </div>
        <ul className="points-two">
          <li>National Medical Commission (formerly known as the Medical Council of India); Canadian Medical Council.</li>
          <li>Russia's Ministry of Science and Higher Education; the Education Commission for Foreign Medical Graduates (ECFMG); the World Directory of Medical Schools (WDOMS).</li>
          <li>A member of the Foundation for International Medical Education and Research Advancement (FAIMER).</li>
        </ul>
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
          <h3 className="text-h5TextPhone md:text-h5Text">Why Study at Northern State Medical University</h3>
        </div>
        <ul className="points-two">
          <li>The institution has state-of-the-art, fully furnished labs. Projectors, computers, and all the medical equipment needed are present.</li>
          <li>This university offers employment chances to its medical graduates throughout many nations.</li>
          <li>The MBBS course work is conducted in English.</li>
          <li>The dorms are located on campus and provide excellent assistance.</li>
          <li>Students can participate in a variety of clubs at the institution to explore their interests and follow their passions.</li>
        </ul>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="heading">
          <h3 className="text-h5TextPhone md:text-h5Text">Faculties of Northern State Medical University</h3>
        </div>
        <ul className="points-two">
          <li>Faculty of General Medicine.</li>
          <li>Faculty of Pediatric.</li>
          <li>Faculty of Nursing.</li>
          <li>Faculty of Postgraduate Education.</li>
          <li>Faculty of Pharmaceutical.</li>
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
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading">
              <h3 className="text-h5TextPhone md:text-h5Text">Fees Structure of Northern State Medical University</h3>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle">
                <tbody>
                  <tr>
                    <th scope="row">Tuition Fees</th>
                    <td>$6,500</td>
                  </tr>
                  <tr>
                    <th scope="row">Hostel Fees</th>
                    <td>Including Hostel Fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p><b>Note: </b>Ruble 4,000 (PER YEAR) from 2<sup>nd</sup> year  onwards for Medical Insurance.</p>
            <p><b>Note: </b>Biometric charges as per Russian Government rates.</p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="heading">
              <h3 className="pt-[1vw] text-h5TextPhone md:text-h5Text">The other charges which are included in your total budget</h3>
            </div> 
            <p>Visa Renewal, Medical checkup, Medical insurance, Biometric, Food optional (Self/Mess), and Air Ticket will be extra.</p>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading">
              <h3 className="pt-[1vw] text-h5TextPhone md:text-h5Text">Northern State Medical University Russia Fees in Indian Rupees</h3>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle">
                <tbody>
                  <tr>
                    <th scope="row">Tuition Fees</th>
                    <td>USD 6500 </td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading">
              <h3  className="text-h5TextPhone md:text-h5Text">Eligibility Criteria for Admission in Northern State Medical University</h3>
            </div>
            <p><b>The following requirements must be met by any Indian student wishing to study MBBS in Russia Northern State Medical University:</b></p>
            <ul className="points-two">
              <li><b>Age requirement:</b> The applicant should be 17 years of age as on 31st December in the admission year.</li>
              <li><b>Academic requirements:</b> The applicant must have passed 12th standard with at least 50% score in Physics, Chemistry, and Biology and English as a compulsory subject.</li>
              <li><b>NEET requirements:</b> Passed NEET exam (50th percentile for general/EWS category and 40th percentile for unreserved category).</li>
              <li>Students should have qualified className 10 & 12 from any recognized education board/institution.</li>
              <li>Student must have scored at least 50% in their className-12 while studying Physics, Chemistry, Biology (or any equivalent subject).</li>
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
              <h3 className="text-h5TextPhone md:text-h5Text">Northern State Medical University Hostel</h3>
            </div>
            <ul className="points-two">
              <li>Rooms are equipped with modern facilities. </li>
              <li>Hostel facility is very good and budget friendly.</li>
              <li>Hostels are available at pretty cheap prices and are quite comfortable. </li>
              <li>Northern State Medical University is located in Arkhangelsk city in Russia. This is located only less than 1000 km from Saint Petersburg. </li>
              <li>The main airport is only 20 to 25 minute's drive from the city.</li>
              <li>Northern state medical university entrance exam.</li>
              <li>Students from India, applying to Northern state Medical University should have a qualified NEET exam. </li>
              <li>Applicants must have passed 10/12th standard with 50% in PCB.</li>
              <li>Students should be 17 at the time of admission.</li>
              <li>Applicants should have a good understanding of the English Language. </li> 
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
              <h3 className="text-h5TextPhone md:text-h5Text">Northern State Medical University Ranking 2023-2024</h3>
            </div>
            <ul className="points-two"> 
              <li>Northern State Medical University ranking 2023-2024.</li>
              <li>Northern state medical university country ranking - 271.</li>
              <li>Northern State Medical University world ranking - 8447.</li>
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
              <h3 className="text-h5TextPhone md:text-h5Text">Northern State Medical University Russia Review</h3>
            </div>
            <ul className="points-two">
              <li>Northern State Medical University in Arkhangelsk, Russia, was known for offering medical education in various fields. It was established in the year 1936 and is one of the leading medical universities in the northwest region of Russia.</li>
              <li>Northern State Medical University has been recognized for its research activities, particularly in the field of Arctic medicine and healthcare. The Northern state medical university has collaborations with international institutions and offers programs in medicine, dentistry, pharmacy and nursing.</li>
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
              <h3 className="text-h5TextPhone md:text-h5Text">Northern State Medical UniversityOfficial Website</h3>
            </div>
            <p><b><a href="https://nsmu.ru/" target="_blank"><i className="fas fa-globe" aria-hidden="true"></i> Nsmu.ru</a></b></p>
            <p><b><a href="mailto:interdean@nsmu.ru" target="_blank"><i className="fas fa-envelope"></i> interdean@nsmu.ru</a></b></p>
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
          <h3 className="text-h5TextPhone md:text-h5Text">Documents Required for Northern State Medical University</h3>
          <p><b>The following documents must be submitted as part of the Northern State Medical University MBBS admissions process:</b></p>
        </div>
        <ul className="points-two">
          <li>Pass certificates and mark sheet of className 10<sup>th</sup> and 12<sup>th</sup>.</li>
          <li>Valid passport.</li>
          <li>Passport size photos.</li>
          <li>NEET scorecard.</li>
          <li>Transfer and migration certificate.</li>
        </ul>
      </div>
    </div>
  </div>
</section> 
<section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] my-[10vw] md:my-[1vw]">
              <h3 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[.5vw]   md:text-h3Text text-center font-bold">Authorization</h3>

              <div className='relative md:flex gap-[4vw] md:gap-[1vw] justify-center'>
                <Image src={"/assets/Images/authorization/russia/Russia4.jpg"} className='w-full md:w-[20vw] h-auto' width={1080} height={1080} alt='isbu1'/>
                <Image src={"/assets/Images/authorization/russia/Russia6.jpg"} className='w-full md:w-[20vw] h-auto' width={1080} height={1080} alt='isbu1'/>
              </div>
            </section>
<div className='h-[2vw]'>

</div>
            </div>
        </>
    )
}

export default NewPage