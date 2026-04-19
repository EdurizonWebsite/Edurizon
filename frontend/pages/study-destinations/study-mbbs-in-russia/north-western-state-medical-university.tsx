import Breadcrumbs from "@/components/Breadcumbs";
import Image from "next/image";
import Head from "next/head";
const feesData = {
  tuition: "5,50,000",
  hostel: "42,000",
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
      label: "St. Petersburg, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "World Rank",
      label: "Country - 100, QS world rank - 601",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "Offers a world-class education system",
    },
  ];
const NewPage=()=>{
    return(
        <>
            <Head>
                <title>North Western State Medical University in Russia, MBBS Fees | Edurizon
</title>
                <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
                <meta name="description" content="Edurizon offers admission to North Western State Medical University with affordable MBBS fees and quality medical education.
" />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS In Russia" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Low Cost MBBS in Russia for Indian Students – North Western State Medical University" />
                <meta property="og:description" content="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/north-western-state-medical-university helps Indian students find low cost MBBS in Russia, with info about university rankings, admission & scholarship." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="Low Cost MBBS in Russia for Indian Students – North Western State Medical University" />
                <meta name="twitter:description" content="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/north-western-state-medical-university helps Indian students find low cost MBBS in Russia, with info about university rankings, admission & scholarship." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in Russia" />
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/north-western-state-medical-university" hrefLang="en-in"/>

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
        <Image src="/assets/Images/universities/russia/NorthWesternStateMedicalUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">North Western State Medical University</h1>
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

        {/* Old Code base */}
        <section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="row">
                    <div className="col-xl-12 col-md-12 col-12">
                        <div className="heading">
                            <h2 className="text-h5TextPhone md:text-h5Text">Important videos of North-Western State Medical University</h2>
                            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div id="edurizon-videos grid " className="grid grid-cols-2 md:grid-cols-4 owl-carousel">
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/kqq2ZIaWim8?si=VgsZVVMaUjZumw6C" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/Tf7KFoQYkwY?si=YBVq1hlnYFMx1K-Q" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/naOH1yR4QAg?si=cdCstI-sH7sTNszE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/cyjslYmOQD0?si=zvXdkqLErn-s-RG9" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/HMHgQa8DIT0?si=mL-6h2RMNUoElRLd" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/XTB8fPLqV_8?si=AlaNyRWcLxvxtMQP" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%" className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/Tf7KFoQYkwY?si=KGGZs1Z4aRBseGfg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
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
    <div className="immigrate-bg">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h2 className="text-h5TextPhone md:text-h5Text">North-Western State Medical University</h2>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
          </div>
          <p>
            The two oldest educational and medical establishments in Russia, St. Petersburg Medical Academy of Postgraduate Education and St. Petersburg State Medical Academy named after I. I. I. Mechnikov, merged to form North-Western
            State Medical University Russia, which bears Mechnikov's name. This merger took place on October 12, 2011. One of the top MBBS programs in Russia is offered by North-Western State Medical University. Medicine, dentistry,
            pharmacy, nursing, and other medical and healthcare-related areas are among the many undergraduate, graduate, and postgraduate degrees that the university provides. North-Western State Medical University Russia is a fantastic
            choice for medical students wishing to further their studies in Russia.
          </p>
          <p>
            There are many extracurricular activities, organizations, sports facilities, and cultural events available for Northwestern State Medical University's active student body. A thorough overview of the university is given in this
            article, together with details on admissions, programs offered, prerequisites, costs, rankings, and more.
          </p>
          <p>
            The North-Western State Medical University strives for improved performance and outcomes by setting global goals and working toward them every day. In order to address the problems posed by the twenty-first century, the
            University works tirelessly to raise the standard of instruction and implement cutting-edge innovations.
          </p>
          <p>Pre-university training, higher education, and advanced training or retraining is all included in a continuous educational program that has been made possible by the years of experience of the predecessor universities.</p>
          <ul className="points-two">
            <li>Top Medical University in Russia.</li>
            <li>World Class infrastructure & facilities.</li>
            <li>Location in the heart of City St. Petersburg, Russia.</li>
            <li>Over 7000 students are presently pursuing their study in North Western State Medical University, Russia.</li>
            <li>As of now there are 77 buildings in North Western State Medical University.</li>
            <li>North Western State Medical University named after I.I. Mechnikov ranks the 5th position among TOP 100 Russian Universities.</li>
            <li>3 main directions: medical education, clinical work and scientific research.</li>
            <li>There is total 112 departments and 8 faculties in North Western State Medical University, Russia.</li>
            <li>Clinical work is provided by using 1645 beds in 14 medical profiles in North Western State Medical University, Russia.</li>
            <li>North Western State Medical University provides high-quality medical assistance for about 40,000 patients at the hospital and to 40,000 in the outpatient setting.</li>
            <li>North Western State Medical University, Russia have 2 research institutions and 6 research laboratories and departments.</li>
            <li>North Western State Medical University, Russia is one of the largest centers of genetic engineering bio-therapy.</li>
            <li>North Western State Medical University has a big museum complex (Museum of forensic medicine with thanatology center, Museum of Anatomy, Museum of dentistry, SZGMU history museum).</li>
          </ul>
          <div className="heading">
            <h2 className="pt-4 text-h5TextPhone md:text-h5Text">Why Study MBBS at North-Western State Medical University Russia?</h2>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
          </div>
          <ul className="points-two">
            <li>North-Western State Medical University Saint Petersburg offers the best quality education in medicine that too at an affordable cost.</li>
            <li>North Western State Medical University is situated in the heart of St.Petersburg, Russia.</li>
            <li>Those who do not want go beyond Moscow or St. Petersburg, NWSMU is the best option for them.</li>
            <li>Very safe environment in NWSMU.</li>
            <li>Best Hostels for Boys and Girls with proper security surveillance in North Western State Medical University.</li>
            <li>As every student wants a quality study at an economical price, North Western State Medical University stands with it.</li>
            <li>North Western State Medical University, Russia is listed among the top medical universities in Russia.</li>
            <li>North-Western State University Russia holds an attractive ranking in the country and the world as well. As regards the country rank, NWSMU of the top ranking University in Russia.</li>
            <li>Students, after graduating from NWSMU, can work worldwide.</li>
            <li>Tuition fees of NWSMU is more or less affordable.</li>
            <li>World rank university.</li>
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
            <h2 className="text-h5TextPhone md:text-h5Text">Quick Highlight of North-Western State Medical University</h2>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <tbody>
                <tr>
                  <th scope="row">Name of Institute</th>
                  <td>North-Western State Medical University</td>
                </tr>
                <tr>
                  <th scope="row">Popular Name</th>
                  <td>NWSMU Russia</td>
                </tr>
                <tr>
                  <th scope="row">Year of Establishment</th>
                  <td>1907</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                  <td>Saint Petersburg, Russia</td>
                </tr>
                <tr>
                  <th scope="row">No. of students</th>
                  <td>5,000</td>
                </tr>
                <tr>
                  <th scope="row">Country Rank</th>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">World Rank</th>
                  <td>3901</td>
                </tr>
                <tr>
                  <th scope="row">QS World Rank</th>
                  <td>601</td>
                </tr>
                <tr>
                  <th scope="row">In-Take</th>
                  <td>September</td>
                </tr> 
                <tr>
                  <th scope="row">Institute Type</th>
                  <td>Public</td>
                </tr>
                <tr>
                  <th scope="row">Medium of Teaching</th>
                  <td>Fully English</td>
                </tr>
                <tr>
                  <th scope="row">Approved by</th>
                  <td>NMC, WHO</td>
                </tr>
                <tr>
                  <th scope="row">Duration</th>
                  <td>6 years (including 1 year internship)</td>
                </tr>
                <tr>
                  <th scope="row">Authorisation Letter</th>
                  <td>
                    <a href="../../assets/pdf/authorisation-letter-north-western-state-medical-university.pdf" target="_blank">
                      <i className="fas fa-file-pdf" ></i> <b>North-Western State Medical University</b>
                    </a>
                  </td>
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
    <div className="immigrate-bg">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h2 className="text-h5TextPhone md:text-h5Text">About the Saint Petersburg City</h2>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
          </div>
          <p>Russia's Saint Petersburg is a stunning city with a vibrant past and present. Situated at the head of the Gulf of Finland on the Baltic Sea, on the Neva River, this city is the second largest in Russia.</p>
          <p>
            It is well known that Saint Petersburg has gardens, palaces, bridges, and canals. The Church of the Savior on Spilled Blood, the Winter Palace, and the Peterh of Palace are just a few of the city's many UNESCO World Heritage
            Sites.
          </p>
          <p>A well-liked summertime tourist destination, Saint Petersburg is well-known for its White Nights—a time of day when the sun never sets completely.</p>
          <p>Saint Petersburg is a significant hub for culture as well. The city is home to numerous top-notch opera houses, theaters, and museums.</p>
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
            <h2 className="text-h5TextPhone md:text-h5Text">Affiliation and Recognition of North-Western State Medical University</h2>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
          </div>
          <p>These are the renowned bodies who’ve given reputation to the North-Western State Medical University.</p>
          <ul className="points-two">
            <li>National Medical Commission of India (NMC).</li>
            <li>World Health Organization (WHO).</li>
            <li>Ministry of Science & Higher Education of the Russian Federation.</li>
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
            <h2 className="text-h5TextPhone md:text-h5Text">Faculties of North-Western State Medical University</h2>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
          </div>
          <p>North-Western State Medical University faculties differ from one department to another, encompassing various disciplines and specialties.</p>
          <ul className="points-two">
            <li>Faculty of General Medicine.</li>
            <li>Faculty of Preventive Medicine.</li>
            <li>Faculty of Pediatrics.</li>
            <li>Faculty of Dentistry.</li>
            <li>Faculty of Surgery.</li>
            <li>Faculty of Internal Diseases.</li>
            <li>Faculty of Biomedicine.</li>
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
            <h2 className="text-h5TextPhone md:text-h5Text">Why Study MBBS at North-Western State Medical University Russia?</h2>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
          </div>
          <p>The greatest pharmaceutical is available at a reasonable price from North-Western State Medical University in Saint Petersburg. This university offers affordable, high-quality medical education to all students.</p>
          <p>
            One of the best medical schools in Russia is NWSMU Russia. The University of the North-West Russia is ranked highly both domestically and internationally. In terms of the university's national ranking, it has the 100th rank.
          </p>
          <p>An MBBS from North Western State Medical University entitles you to employment anywhere in the globe.</p>
          <p>
            The fees of North-Western State Medical University are reasonable and inexpensive. International engagement, professional training in the real world, student exchange, and postgraduate studies are all part of North-Western State
            Medical University.
          </p>
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
            <h2 className="text-h5TextPhone md:text-h5Text">Fee Structure of North-Western State Medical University 2024-25</h2>
              <p>North Western State Medical University is a well-known Russian medical institution offering quality education at reasonable costs. North Western State Medical University Fees are affordable and transparent, making it a preferred choice for Indian students seeking globally recognized MBBS programs with strong clinical exposure.
</p>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <tbody>
                <tr>
                  <th scope="row">Tuition Fees</th>
                  <td>{feesData.tuition} Ruble</td>
                </tr>
                <tr>
                  <th scope="row">Hostel Fees</th>
                  <td>{feesData.hostel} Ruble</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><b>Note: </b>Visa Renewal, Medical Checkup, Medical Insurance, Biometric, Food and Air ticket will be extra charges.</p>
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
            <h2 className="text-h5TextPhone md:text-h5Text">Eligibility Criteria for Admission in North-Western State Medical University</h2>
            <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
            <p>The following requirements must be met by any Indian student wishing to study MBBS in Russia at Immanuel Kant Baltic Federal University:</p>
          </div>
          <ul className="points-two">
            <li><b>Age requirement:</b> The applicant should be 17 years of age as on 31st December in the admission year.</li>
            <li><b>Academic requirements:</b>The applicant must have passed 12th standard with at least 50% score in Physics, Chemistry, and Biology and English as a compulsory subject.</li>
            <li><b>NEET requirements:</b> Passed NEET exam (50th percentile for general/EWS category and 40th percentile for unreserved category)</li>
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
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading">
              <h2 className="text-h5TextPhone md:text-h5Text">Documents Required for North-Western State Medical University</h2>
              <span>MBBS in Russia – MBBS in North-Western State Medical University</span>
              <p><b>The following documents must be submitted as part of the Immanuel Kant Baltic Federal University's MBBS admissions process:</b></p>
            </div>
            <ul className="points-two">
              <li>Pass certificates and mark sheet of className 10th and 12th.</li>
              <li>Valid passport.</li>
              <li>Passport size photos.</li>
              <li>NEET scorecard.</li>
              <li>Transfer and migration certificate.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] my-[10vw] md:my-[1vw]">
              <h2 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[.5vw]   md:text-h3Text text-center font-bold">Authorization</h2>

              <div className='relative md:flex gap-[4vw] md:gap-[1vw] justify-center'>
                <Image src={"/assets/Images/authorization/russia/Russia5.jpg"} className='w-full md:w-[20vw] h-auto' width={1080} height={1080} alt='isbu1'/>
              </div>
            </section>
<div className='h-[2vw]'>

</div>
            </div>
        </>
    )
}

export default NewPage;
