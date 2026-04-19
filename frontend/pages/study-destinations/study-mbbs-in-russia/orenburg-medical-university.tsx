import Breadcrumbs from "@/components/Breadcumbs";
import CTASection from "@/components/landingPage/CTASection";
import EligibilityCriteria from "@/components/studyDestinationComponents/eligibilityCriteriaTable";
import PostArrival from "@/components/studyDestinationComponents/postArrival";
import ScholarshipSection from "@/components/studyDestinationComponents/scholarshipSection";
import UnlistedTable from "@/components/studyDestinationComponents/unListedTable";
import Image from "next/image";
import Head from "next/head";

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tuition Fees",
      label: "USD 6000 / Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Orenburg, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "World Rank",
      label: "WHO-Listed",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "Free Russian Language Course",
    },
  ];



const OrenburgMedicalUniversity=()=>{
    return <>
        <Head>
            <title>MBBS in Russia for Indian Students – Cost, University & Scholarship Orenburg Medical University</title>
            <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
            <meta name="description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/orenburg-medical-university." />
            <meta name="author" content="edurizon" />
            <meta name="robots" content="index, follow"/>
            <meta name="DC.title" content="MBBS In Russia" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Dwarka" />
            <meta name="geo.position" content="22.351115;78.667743" />
            <meta name="ICBM" content="22.351115, 78.667743" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="MBBS in Russia for Indian Students – Cost, University & Scholarship Orenburg Medical University" />
            <meta property="og:description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/orenburg-medical-university." />
            <meta property="og:url" content="https://www.edurizon.in/" />
            <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@edurizon" />
            <meta name="twitter:title" content="MBBS in Russia for Indian Students – Cost, University & Scholarship Orenburg Medical University" />
            <meta name="twitter:description" content="Compare cost of MBBS in Russia, find admission & eligibility rules and apply to universities with help from https://www.edurizon.in/study-destinations/study-mbbs-in-russia/orenburg-medical-university." />
            <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
            <meta name="twitter:image:alt" content="MBBS in Russia" />
            <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/orenburg-medical-university" hrefLang="en-in"/>

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
        <Image src="/assets/Images/universities/russia/OrenburgStateMedicalUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Orenburg Medical University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Embark on a journey toward a rewarding medical career at Far Eastern Federal University, a distinguished institution offering world-className medical education, research, and clinical practice.
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
    <div className="container">
        <div className="row immigrate-bg g-0">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="heading">
                    <h2 className="text-h5TextPhone md:text-h5Text">About Orenburg State Medical University</h2>
                </div>
                <p>Orenburg State Medical University (OrSMU), situated in the Russian city of Orenburg, is one of the best government medical schools in the country. It was founded in 1944. It provides courses leading to masters, doctorate, and bachelor's degrees in a variety of subject areas that are officially recognized as higher education degrees. The University satisfies every contemporary criterion and prerequisite set forth for graduate-level medical programs. For this reason, the most sought-after Russian medical school is Orenburg State Medical University, especially for Indian students hoping to pursue an MBBS in Russia. </p>
                <p>In order to prepare the upcoming generation of doctors, researchers, and healthcare workers, Orenburg State Medical University offers top-notch educational programs. This university has produced numerous well-known experts in the medical profession. They are employed in public and private medical and preventive facilities, holding prominent roles in state governance frameworks, and resolving fundamental problems in the advancement of contemporary medicine. </p>
                <p>Orenburg State Medical University works hard to give its students the greatest medical education possible in order to equip them to face problems down the road and graduate with the capacity to manage the obligations of the medical sector. </p> 
                <p>More than 1200 Indian students are enrolled at Orenburg State Medical University's MBBS program right now.</p>    
            </div>
        </div>
    </div>
</section>
<section className="inner-page-bg dark:bg-black" >
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                        <h2 className="text-h5TextPhone md:text-h5Text">Quick Facts of Orenburg State Medical University</h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped align-middle">
                            <tbody>
                                <tr>
                                    <th scope="row">Year of Establishment </th>
                                    <td>1944</td>
                                </tr>
                                <tr>
                                    <th scope="row">Type</th>
                                    <td>Government</td>
                                </tr>
                                <tr>
                                    <th scope="row">Course Duration</th>
                                    <td>6 year (including 1 year internship)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Medium of Teaching</th>
                                    <td>Fully English</td>
                                </tr>
                                <tr>
                                    <th scope="row">Eligibility</th>
                                    <td>minimum 50% in Physics, Chemistry and Biology Aggregate</td>
                                </tr>
                                <tr>
                                    <th scope="row">NEET</th>
                                    <td>Qualifying Marks</td>
                                </tr>
                                <tr>
                                    <th scope="row">Affiliation & Accreditation</th>
                                    <td>Health Ministry Of Russian Federation</td>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">City at a Glance</h2>
                </div>
                <ul className="points-two">
                    <li>The administrative hub of Russia's Orenburg Oblast is Orenburg. </li>
                    <li>Because of its location between Europe and Asia, the city is well-known. </li>
                    <li>Large engineering industries that produce agricultural and heavy industrial machinery are present in modern Orenburg. </li>
                    <li>The city serves as Orenburg Oblast's administrative hub. The city is near Kazakhstan's border. </li>
                    <li>Orenburg has a very continental climate, with hot, dry summers and mildly chilly winters. </li>
                    <li>The Holy Trinity Convent of Mercy, the Dead Sea in the Dessert, and the caravanserai are the top attractions in Orenburg.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section className="inner-page-bg dark:bg-black" >
    <div className="container">
        <div className="row immigrate-bg g-0">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="heading">
                    <h2 className="text-h5TextPhone md:text-h5Text">Recognitions of Orenburg State Medical University</h2>
                    <p>Several reputable international organizations, including the following, have acknowledged Orenburg State Medical University:</p>
                </div>
                <ul className="points-two">
                    <li>National Medical Commission (formerly known as the Medical Council of India); Canadian Medical Council; </li>
                    <li>Russia's Ministry of Science and Higher Education; the Education Commission for Foreign Medical Graduates (ECFMG); the World Directory of Medical Schools (WDOMS); </li>
                    <li>A member of the Foundation for International Medical Education and Research Advancement (FAIMER).</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row immigrate-bg g-0">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="heading">
                    <h2 className="text-h5TextPhone md:text-h5Text">Faculties of Orenburg State Medical University</h2>
                </div>
                <ul className="points-three">
                    <li>Eco biology.</li>
                    <li>Theoretical and practical aspects of Biochemistry and Physiology.</li>
                    <li>Morphology.</li>
                    <li>Microbiology, Immunology.</li>
                    <li>surgery.</li>
                    <li>Pediatric surgery.</li>
                    <li>Internal diseases.</li>
                    <li>Side issues of clinical medicine (Eye diseases, Neurology, Dermatovenerology, Otorhinolaryngology).</li>
                    <li>Gynaecology and Obstetrics.</li>
                    <li>Topical issues of pediatric pathologies.</li>
                    <li>Topical issues of pediatrics.</li>
                    <li>The English and German languages.</li>
                    <li>The Latin language.</li>
                    <li>Philosophy.</li>
                    <li>History of medicine, economic theory, sociology and pedagogics.</li>
                    <li>Pharmacology and Pharmacy.</li>
                    <li>Public health and General psychology.</li>
                    <li>Stomatology.</li>
                    <li>Clinical psychology and psychiatry.</li>
                    <li>Biophysics and Mathematics.</li>
                    <li>Topical issues of Hygiene.</li>
                    <li>Epidemiology and Infectious diseases.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row immigrate-bg g-0">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="heading">
                    <h2 className="text-h5TextPhone md:text-h5Text">Why Choose Orenburg State Medical University for MBBS in Russia</h2>
                </div>
                <ul className="points-two">
                    <li>Learners Here, more than 3,000 students and 1000 listeners are enrolled in the MBBS program.</li>
                    <li>Standards For international students, the entrance requirements are simple: they just need to fulfill the academic requirements in order to be eligible for the NEET exam.</li>
                    <li>Accepted by the NMC has approved the university's MBBS program.</li>
                    <li>Additionally, this university received approval to improve clinical practice from a global medical body.</li>
                    <li> Language: English is the medium of instruction for the university's medical program.</li>
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
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="heading">
                        <h2 className="text-h5TextPhone md:text-h5Text">Fees Structure of Orenburg State Medical University</h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped align-middle">
                            <tbody>
                                <tr>
                                    <th scope="row">Tuition Fees</th>
                                    <td>USD 6000</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hostel Fees</th>
                                    <td>(Hostel Fee Included)</td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> 
                  <div className="heading">
              <h2 className="text-h5TextPhone md:text-h5Text">Other Charges which includes in</h2> 
          </div>
          <ul className="points-two"> 
              <li>Visa, Medical Insurance, Biometric, Medical Checkup, Food, and Air Ticket will be extra charge.</li>
          </ul>  
          <p><b>Note: 1Dollar= 83 rupees (It can vary)</b></p>
      </div>
    </div>
            </div>
        </div>
    </div>
  </section>


  <section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row immigrate-bg">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="heading">
                    <h2 className="text-h5TextPhone md:text-h5Text">Orenburg State Medical University's Eligibility Standards</h2>
                </div>
                <p>This is the eligibility criteria for all applicants to the MBBS program at Orenburg State Medical University. The university has implemented a simplified admissions process for international applicants, making it very simple to gain admission. The full set of requirements for MBBS admission to OSMU is provided below.</p>
                <ul className="points-two">
                    <li>Learners Here, more than 3,000 students and 1000 listeners are enrolled in the MBBS program.</li>
                    <li>Standards For international students, the entrance requirements are simple: they just need to fulfill the academic requirements in order to be eligible for the NEET exam.</li>
                    <li>Accepted by the NMC has approved the university's MBBS program.</li>
                    <li>Additionally, this university received approval to improve clinical practice from a global medical body.</li>
                    <li> Language: English is the medium of instruction for the university's medical program.</li>
                </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="heading">
                <h2 className="pt-2  text-h5TextPhone md:text-h5Text">Academics</h2>
                </div>
                <ul className="points-two">
                    <li>A minimum of 50% marks is required in the 12th className exam.</li>
                    <li>40% marks are required for reserved category candidates.</li>
                    <li>Physics, Chemistry, and Biology are compulsory subjects.</li>
                </ul>
                <div className="heading">
                <h2 className="pt-2  text-h5TextPhone md:text-h5Text">Criteria</h2>
                </div>
                <ul className="points-two">
                    <li>Candidates need to qualify for the NEET Exam to get admission to OSMU.</li>
                </ul>
                <div className="heading">
                <h2 className="pt-2 text-h5TextPhone md:text-h5Text">Age</h2>
                </div>
                <ul className="points-two">
                    <li>The minimum age required is 17; students completing 17 till 31 December of the admission year are also eligible.</li>
                </ul>
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
                        <h2 className="text-h5TextPhone md:text-h5Text">Documents Required for Orenburg State Medical University</h2>
                    </div> 
                    <ul className="points-two"> 
                        <li>10TH/12TH Mark sheet.</li>
                        <li>Passport size photos.</li>
                        <li>NEET  Scorecard.</li>
                        <li>Original Passport.</li>
                        <li>HIV Report.</li>
                        <li>Covid-19 Report(Negative).</li>
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
                        <h2 className="text-h5TextPhone md:text-h5Text">Student's life at Orenburg State Medical University</h2>
                    </div> 
                    <ul className="points-two"> 
                        <li><b>Cultural Events:</b> For their international medical students, the university hosts dancing, music, and other cultural programs.</li>
                        <li> <b>Campus Vibrant:</b> The University boasts a lively campus with top-notch amenities for offering a top-notch medical education alongside a comfortable lifestyle.</li>
                        <li><b>Modern Classrooms:</b> To improve instruction, students are provided with state-of-the-art classrooms equipped with several amenities.</li>
                        <li><b>Library:</b> It boasts a large, well-stocked library with both print and digital medical journals.</li>
                        <li><b>Labs:</b> For improved clinical practice, a variety of medical laboratories are accessible.</li>
                        <li><b>Hostel:</b> Both domestic and foreign medical students can find lodging at the OSMU.</li>
                        <li><b>Mess:</b> Since the hostel mess provides a sample of the cuisine, medical students do not need to cook.</li>
                        <li><b>Sports Club:</b> Students can play games in the sports club on campus at the university.</li>
                    </ul>  
                </div>
            </div>
        </div>
    </div>
    <div className="h-[4vw]"/>
</section>


        
        </div>
    </>
}

export default OrenburgMedicalUniversity;