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
      text: "Tution Fees",
      label: "Ruble 4,90,080 / Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "UFA, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "World Rank",
      label: "Top 10 in Russia",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "Highest Practical Exposure",
    },
  ];

const why=["All 50,000 students who are studying and enjoying at the 2nd oldest university of Russia, Kazan Federal University knows the answer.",
"A world of thoughts, ideas, diversity and culture can be discovered from students of Kazan Federal University which was once always considered as a bridge between the students of east and west. You will be able to grow, explore yourself more, identify your talent, ability and learn many things from the outside world apart from classroom teaching.",
"Kazan Federal University is a top rated university in Russia with 215 years of experience in imparting quality education and research work in extensive field for its students.",
"More than 3000 professors are employed for providing under graduated and graduate courses. Professors are highly qualified as most of them hold either a doctorate degree or some represent powerful scientific minds in and out of Russia across the world. The whole credit goes to them as under their leadership and supervision students have excelled and become strong leaders today both in industry and studies.",
"Kazan Federal University has developed much from the last years. It has extended itself by including more research centers across the globe, well built infrastructure, 80 teaching world className laboratories, and 17 competitive research centers."]

const feeStructure={
    title:"Fee Structure",
    subTitle:"Kazan Federal University Fees",
    data:[
        ["Expense", "Annual Cost"],
        ["Tution Fees","3,70,080 Ruble"],
        ["Hostel Fees","36,000 Ruble"],
    ]
}

const facts={
    title:"Quick Facts Related to Bashkir Medical University",
    subTitle:"",
    data:[
        [],
        ["Established In","1909"],
        ["Recognition","NMC, WHO, ECFMG (USMLE), GMC (PLAB), AMEE"],
        ["Fees","3,70,080 per year"],
        ["Medium of Teaching","1Fully English"],
        ["Course Duration","6 Years"],
        ["Indian students","Yes"],
        ["University Ranking","Top 10 in Russia"]
    ]
}

const eligibility=[
    
        [["Criteria"],["Details"]],
        [["Academic Qualification"],["Above 50% in 10+2, PCBE."]],
        [["NEET Qualification"],["NEET Score - Just Qualify."]],
        [["Age Limit"],["Age should be 17 years as on 31st December in the year of seeking admission."]],
        [["University Exam"],["Qualify the university exam."]],
]



const BashkirMedicalUniversity=()=>{
    return (
        <>
            <Head>
                <title>MBBS in Russia Low Cost | Bashkir Medical University – Admission & Eligibility</title>
                <meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
                <meta name="description" content="Discover low cost MBBS in Russia for Indian students. Get complete admission & eligibility info, cost estimates, scholarships & top universities at https://www.edurizon.in/study-destinations/study-mbbs-in-russia/bashkir-medical-university" />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS In Russia" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="MBBS in Russia Low Cost | Bashkir Medical University – Admission & Eligibility" />
                <meta property="og:description" content="Discover low cost MBBS in Russia for Indian students. Get complete admission & eligibility info, cost estimates, scholarships & top universities at https://www.edurizon.in/study-destinations/study-mbbs-in-russia/bashkir-medical-university" />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="MBBS in Russia Low Cost | Bashkir Medical University – Admission & Eligibility" />
                <meta name="twitter:description" content="Discover low cost MBBS in Russia for Indian students. Get complete admission & eligibility info, cost estimates, scholarships & top universities at https://www.edurizon.in/study-destinations/study-mbbs-in-russia/bashkir-medical-university" />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="Best Divorce Lawyer in Delhi" />
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/bashkir-medical-university" hrefLang="en-in"/>

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
        <div className="relative h-auto w-full">
        <Image src="/assets/Images/universities/russia/BashkirStateMedicalUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text dark:text-white">Bashkir Medical University</h1>
            </div>
            <p className="text-regularText text-center dark:text-white">
            Established in 1932,Bashkir State Medical University located at Ufa is one of the top and leading institutions of Russia and the center of the medical and pharmaceutical sciences of the Republic of Bashkortostan.
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
                            <h2 className="text-h5TextPhone md:text-h5Text">Important Videos of University / Student & Parent Review</h2>
                            <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div id="edurizon-videos" className="grid md:grid-cols-4 grid-cols-2  owl-carousel">
                            <div className="edu-videos">
                                <iframe src="https://www.youtube.com/embed/0BF-kRVlX5E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  width="100%" className="h-[100px] md:h-[250px]"></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%"  className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/XwVvd0DUWkg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%"  className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/kLdQhlyqZDY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div> 
                            
                            <div className="edu-videos">
                                <iframe width="100%"  className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/xwdk-dZGOB0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div> 
                            <div className="edu-videos">
                                <iframe width="100%"  className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/kbEiC5J_4JY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%"  className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/cgt1YgzwZMg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%"  className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/-loTCN_ecVs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div className="edu-videos">
                                <iframe width="100%"  className="h-[100px] md:h-[250px]" src="https://www.youtube.com/embed/Ao8tAG8wtZ8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">Bashkir State Medical University</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <p>Established in 1932,Bashkir State Medical University located at Ufa is one of the top and leading institutions of Russia and the center of the medical and pharmaceutical sciences of the Republic of Bashkortostan.</p>
                <p>Initially the University started with only one Faculty that is Faculty of General Medicine. But later in 1961, it extended itself to Faculty of pediatrics and Faculty of Preventive Medicine in 1970 which was later renamed to Faculty of Preventive Medicine and Microbiology. Two more faculties - Faculty of Dentistry and Faculty of Pharmacy were extended by 1976 -1981.</p>
                <p>The University receives a good number of medical enrollments from all over the world. The medical college at BSMU along with medicine also offers vocational secondary education in specialist of Nursing and Prosthetic Dentistry. Among 8000 medical students, more than 850 are International students from about 40 countries and 1000 are clinical residences and PHD Programs along with 7000 postgraduate professional trainings. </p>
                <p>Bashkir State Medical University is known for offering intense research work facilities for medical students along with simulation- based training for clinical residents and physicians which is equipped with state of the art simulators where they can enhance their practical skills in anesthesiology, resuscitation, neonatology, endoscopy, gynecology, obstetrics, and neurosurgery.</p>
                <p>The University has a variety of scientific infrastructure within the campus and that includes Cell Culture Laboratory, Central Scientific Research Laboratory, Vivarium, Scientific Research Institute Rehabilitation Medicine, Scientific Research Institute of Oncology and laboratory of experimental surgery. It has also cooperated with RUSNANO’S Pet Center for training specialist of nuclear medicine. The University has a large library for its medical students which can store about 527000 books and medicine and is counted as one of the best medical libraries in Russia.</p>
                <p>Bashkir State Medical University is also known to receive many accolades for training more than 700 Volunteers for winter Olympic and Paralympic Games in 2014 in Sochi.</p>
            <ul className="points">
                <li>BSMU is amongst the top universities of the Russian Federation.</li>
                <li>Government funded university.</li>
                <li>Recognized by the leading medical council NMC</li>
                <li>Recognized by WHO.</li>
                <li>Recognized by Ministry of Healthcare and Ministry of Education and Science of the Russian Federation.</li>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">Bashkir State Medical University, UFA</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <ul className="points-two">
                    <li>Bashkir State Medical University is one of the leading medical universities in Russia.</li>
                    <li>It was established in 1932.</li>
                    <li>Bashkir State Medical University has offered the best medical education to international as well as local candidates.</li>
                    <li>Students get a chance to learn the world-className medical program with ultra-modern study patterns.</li>
                </ul>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"> 
                <div className="heading">
                    <h2 className="text-h5TextPhone md:text-h5Text">Bashkir State Medical University offers following Programs</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <ul className="points-two">
                    <li>Faculty of General Medicine (MBBS).</li>
                    <li>Faculty of Dentistry.</li>
                    <li>Faculty of Pediatrics.</li>
                    <li>Faculty of Pharmacy.</li>
                    <li>Faculty of Sports Medicine.</li>
                    <li>Faculty of Postgraduate Studies.</li>
                    <li>Faculty of Adaptive Physical Education Culture.</li>
                    <li>Faculty of Clinical Psychology.</li>
                    <li>Faculty for Foreign Students.</li>
                    <li>Higher Education Nursing School.</li>
                    <li>Faculty of Pre-University Education.</li>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">Undergraduate Courses in Bashkir State Medical University</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <ul className="points-two">
                    <li>The University offers a number of undergraduate courses and is quite popular for Medical education among the International students because of its low tuition fees and excellent education system.</li>
                    <li>Bashkir State Medical University has students from across the globe. The University receives yearly enrolment of more than 10,000 medical students including International students. Other departments are also flooded with admissions and so the University has appointed over 700 full time faculty at School of General medicine, Pediatrics, Preventive Medicine and Pharmacy.</li>
                    <li>BSMU is a reputed university and is recognized by both World Health Organization and NMC (National Medical Commission). Other recognitions of the university include MMC (Malaysia) and other countries too. </li>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">Bashkir State Medical University Admission</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <p>In order to get admission in Bashkir State Medical University, an Indian applicant must fulfill these requirements:</p>
                <ul className="points-two">
                    <li>Candidates must have passed 10+2 (intermediate) with a minimum score of 50% in physics, chemistry, biology, and English.</li>
                    <li>Applicants also need to qualify the NEET-UG exam.</li>
                    <li>Students must be at least 17 years old at the time of admission to the university.</li>
                </ul>
                <p> To ensure and increase your chances of getting a confirmed seat, willing students should apply for admission to the Bashkir State Medical University well in advance as seats are limited and the number of applications are high.</p>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">Bashkir State Medical University - Clinic</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <ul className="points-two">
                    <li>BSMU has a unique medical institution and a huge clinic with over 625 beds and teaching facilities. The University clinic is equipped with all modern CT and MRI facilities, up-to-date digital biplane angiography system with electrophysiology laboratory and intracardiac navigation system and single photon emission computed tomography (SPECT). More than 24000 patients are treated annually at the University clinic and more than 10000 surgeries along with 4000 babies are delivered hereunder expert supervision. </li>
                    <li>High-tech surgeries are performed by surgeons at the University clinic some of which are placement of intrabronchial valves, video-assisted thoracic lobotomy, endovascular manipulations, minimally invasive abdominal surgeries, surgical reconstruction of trachea, laparoscopic liver and pancreas resections, pelvic exenterations, brachytherapy, cryoablation of bone metastases, prostatectomy and stomach and small intestine reconstructive surgeries.</li>
                    <li>Master classes by prominent Russian and foreign specialists are regularly hosted at the University in order to promote transfer of leading medical technologies. In a year about 50 master-classes are performed by the University Clinic in total. Well known prominent doctors also visit BSMU Clinic. Few of them are :, Professor V.N. Yegiev (treatment of ventral hernia), RAS Academician R.S. Akchurin (valve replacement) , Professor P.V. Tsar’kov (surgery of pelvic floor, surgical treatment of rectocele), Professor D.P. Dundua (percutaneous coronary intervention with coronary arteries stenting through radial route), and Professor E.A. Gallyamov (mini-invasive technologies in abdominal surgery and urology), Professor P.K. Yablonsky (video-assisted thoracic lung resection, lymph node dissection on lung cancer), Professor V.D. Trufanov (radiowave surgery in gynaecology), Professor B.Y. Alexeev (kidney cancer: new treatment opportunities), Professor M.I. Kogan (reconstructive surgery of urethra), Professor Julia Shale from Germany (pulmonary emphysema, placement of intrabronchial valves), Professor Alois Fuerst from Germany (laparoscopy in coloproctology,3D surgery of colorectal cancer), Professor Jens-Uwe Stolzenburg (laparoscopy and robotic surgery), Professor Lucas Prantl (plastic surgery), Professor Wolf F. Wieland (laparoscopic kidney resection),Professor Marco van Strijen from Netherlands (cryoablation of bone metastases), China (laparoscopic pancreaticoduodenal resection), Professor Peng Bing from Sichuan University etc. </li>
                    <li>Recently in 2018, BSMU Clinic has opened the largest Robotic Surgery Center which is one of the greatest achievements in the history of BSMU till date.</li>
                    <li>At Present as we all know Robot-assisted surgery is at the forefront of operative medicine. Digital equipment and the technical progress of our team reflected in the improvement of computer technology, and robotic instruments allowed us to bring simply invasive surgery to an entirely new level of visualization and accuracy. </li>
                    <li>Surgical robot is a rack which is performed with the help of four manipulators. The Surgeon with the help of the increased three-dimensional image of high definition (3D, HD) visualize anatomical structures in a more detailed manner, which, together with precision instruments with high freedom of movement, provides the most accurate tissue dissection. An operating surgeon, located behind the remote control console, controls the movements of the camera and manipulators and conducts the whole process. </li>
                </ul>
                <div className="heading">
                    <h2 className="pt-2 text-h5TextPhone md:text-h5Text">United Center of Simulation-Based Training, Bashkir State Medical University</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <ul className="points-two">
                    <li>BSMU United Center of Simulation Based Training was established on 21st December 2011 according to the government decree of the Russian Federation № 1069 "On financial support for the establishment of simulation training centres in federal state budgetary institutions".But the Grand opening of the United Center of Simulation-Based Training took place on 23 November 2012 at the 80th anniversary of the Bashkir State Medical University.</li>
                    <li>Valentin N. Pavlov, the rector of the University has reconstructed and repaired the building of BSMU Clinic and boughtdifferent teaching aids for the clinic like: phantoms for practicing different skills,computerized robotic mannequins of an adult,a premature baby,a newborn baby,mothers,and the expert className medical equipment for artificial lung ventilation.</li>
                    <li>Simulation based training is a segment of the University itself.The main target of the University is to improve practical training by organizing and conducting activities, improve their professional capabilities and develop simulation training at the University.</li>
                    <li>Our Simulation-Based Training consists of the following items: the Anesthesiology and Resuscitation unit (tracheal intubation dummy, CPR dummy, SimMan and iStan critical state dummy robots); the Obstetrics and Gynecology unit (Noel 3 and Noel 4 robot simulator of birth activity);artificial lung ventilation devices,Savina 300, Sophie)robot computer simulator of a 5-year-old child Meti, the Pediatrics and Neonatology unit (robot computer simulator of a year-old child Meti, , which includes the room of general care pediatric manipulations, the room of cardiopulmonary resuscitation in children of different ages, and the room of cardiopulmonary resuscitation in the birth hall (incubator transformable, premature baby simulator).</li>
                    <li>Thereafter, now in future the Center of Simulation-Based Training is used as a distinct structure foraccreditation and practical training of BSMU students, residents, and students of the additional Postgraduate Education Institute. </li>
                    <li>There are new units for preparation in other subjects too: the Minimally Invasive Laparoscopic Surgery unit (robot simulator Chloe for laparoscopy, , virtual laparoscopic simulator LapSim), theNeurosurgeryand Neurology unit (virtual simulator NeuroTouch, phantoms for lumbar puncture);; simulator for examination of the cardiac patient Physico),; the Cardiology unit with the virtual surgical x-ray device (angiographic virtual simulator CatLabVR, the Ambulance unit with Reanimobiledummy,critical conditions robot simulator iStan, and laparoscopic stand Gimmi.</li>
                    <li>Our Simulation-Based Training includes two debriefing rooms for each one with 30 seats, which is equipped with a video monitoring system.All the units of our rooms are equipped with both audio and video surveillance that makes easier for conducting classes over the remote control over the actions of students. The teaching staff of BSMU Center of Simulation-Based Training consists of associate professors of the clinical departments and leading professors. Head of the Center is assistant of the Anesthesiology and Intensive Care department, Rakhimova Rita Flyurovna.</li>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">Students International Exchanges, Bashkir State Medical University</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <ul className="points-two">
                    <li>BSMU Partnership with various scientific, educational, and healthcare centreshas provided students with uncountable opportunities.They get familiar withdifferent culture and traditions of other countries and regions, to conduct individual researches in foreign universities. This has helped them to improve their professional and language skills to a great extent. </li>
                    <li>Because of this partnership young doctors and students of the university get an opportunity to undergo short-term internships in the best clinics of German. The University has signed agreements with few educational institutions of Germany like Medical Faculty of Regensburg University, Medical Faculty Mannheim of Heidelberg University, Medical Faculty Carl Gustav Carus of Technical University Dresden, and studying advanced medical technologies. In 2019 the university students were granted with a summer internship in Germany where only 6 students can participate. BSMU Clinic also allows the German students to practice in their clinic.</li>
                    <li>The University has built good relations with some Universities of China. In a year almost 30 doctors and students of the BSMU clinic get an opportunity to undertake short-term internshipsin the hospitals of Jilin University, Sichuan University, and Nanchang University. This relation has also allowedand benefitted residents and young doctors of BSMU Clinic to take a long-term internship for 3 to 12 monthsat Nanchang University. It’s a give and take relationship for both of us as the University too accepts students of Nanchang, Jilin and Sichuan for summer practice annually. In 2019 the university accepted up to 40 students from China.</li>
                    <li>Agreement of the university with International Federation of Medical Students’ Associations (IFMSA) also allows students for internships in other countries in the framework of programs organized by IFMSA. </li>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">Quick Facts in Bashkir State Medical University</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <div className="table-responsive">
                        <table className="table table-bordered table-striped align-middle">
                            <tbody>
                                <tr>
                                    <th scope="row">Established in</th>
                                    <td>1909</td>
                                </tr>
                                <tr>
                                    <th scope="row">Recognition</th>
                                    <td> NMC, WHO, ECFMG (USMLE), GMC (PLAB), AMEE</td>
                                </tr>
                                <tr>
                                    <th scope="row">Fees</th>
                                    <td>Ruble 3,70,080 per year</td>
                                </tr>
                                <tr>
                                    <th scope="row">Medium of Teaching</th>
                                    <td>Fully English</td>
                                </tr>
                                <tr>
                                    <th scope="row">Course Duration</th>
                                    <td>6 Years</td>
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
                                    <td>Top 10 in Russia</td>
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
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                    <h2 className="text-h5TextPhone md:text-h5Text">Bashkir State Medical University fees</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <div className="table-responsive">
                        <table className="table table-bordered table-striped align-middle">
                            <thead className="table-dark">
                <tr className="text-white">
                  <th scope="col">Particular</th>
                  <th scope="col">Fees</th> 
                </tr>
              </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Tuition Fees</th>
                                    <td>3,70,080</td> 
                                </tr>
                                <tr>
                                    <th scope="row">Hostel Fees</th>
                                    <td> 36,000</td> 
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                    <h3  className="pt-2 text-h6TextPhone md:text-h6Text">Bashkir State Medical University Location</h3>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <p>Ulitsa Lenina, 3, UFA, Republic of Bashkortostan, Russia - 450008</p>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                    <h3  className="pt-2 text-h6TextPhone md:text-h6Text">Bashkir State Medical University official Website</h3>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div>
                <p><a href="https://bashgmu.ru/" target="_blank"><i className="fas fa-globe" aria-hidden="true"></i> Bashgmu.ru</a></p>
                <p><a href="mailto:bashsnu@yandex.ru" target="_blank"><i className="fas fa-envelope"></i> bashsnu@yandex.ru</a></p>
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
                    <h2 className="text-h5TextPhone md:text-h5Text">Bashkir State Medical University Entrance Exam</h2>
                    <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                </div> 
                <ul className="points-two">
                    <li>Bashkir State Medical University conducts exams in respect of all international students, including Indian.</li>
                    <li>As of now, online exams are being held.</li>
                    <li>Biology & English exams are to be written.</li>
                    <li>It is mandatory to qualify the exams of both the papers.</li>
                    <li>NEET is also mandatory.</li>
                </ul>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="heading">
                <h2 className="pt-2 text-h5TextPhone md:text-h5Text">Bashkir State Medical University for Indian Students</h2>
                <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
            </div> 
            <ul className="points-two">
                <li>Bashkir State Medical University (BSMU), located in Ufa, Russia, has emerged as a leading institution for medical education, attracting students from multiple corners of the globe, including India.</li>
                <li>Bashkir State Medical University, Ufa is also called mini India as various students are pursuing their dream career of MBBS.</li>
            </ul>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading">
            <h2 className="pt-2 text-h5TextPhone md:text-h5Text">Bashkir State Medical University FMGE Result</h2>
            <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
        </div> 
        <ul className="points-two">
            <li>The FMGE result of Bashkir State Medical University is good.</li>
            <li>FMGE result for the year 2023 is  around - 23%.</li>
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
                            <h2 className="text-h5TextPhone md:text-h5Text">Admission Process in Bashkir State Medical University</h2>
                            <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                        </div>
                        <ul className="points-two">
                            <li>We always try to advise students to apply at the earliest possible for admissions.</li>
                            <li><b>Interested students should follow undermentioned steps to take admission in Bashkir State Medical University.</b></li>
                        </ul>
                        <ul className="points">
                            <li>Submit documents (Scanned copies of className 10th and 12th mark sheets.</li>
                            <li>NEET Score.</li>
                            <li>Passport (scanned copy).</li>
                            <li>Get admission letter/confirmation letter, which generally takes 10 working days).</li>
                            <li>Invitation letter (processing time for invitation is 15-20 days).</li>
                            <li>Apply for Visa (Russia Embassy takes minimum 10 days for visa processing).</li>
                        </ul>
                    </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                        <h2 className="pt-2 text-h5TextPhone md:text-h5Text">Admission Dates in Bashkir State Medical University</h2>
                        <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                    </div>
                    <ul className="points-two">
                        <li>Admission for MBBS in Bashkir State Medical University generally starts from the Month of April every year.</li>
                        <li>Seats are limited and are filled on first-come-first-served basis.</li>
                        <li>Early applications help the students in securing confirmed seats in the University.</li>
                        <li>Last date to apply for admission in Bashkir State Medical University is August 30.</li>
                    </ul>
                </div>
                
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="heading">
                        <h2 className="pt-2 text-h5TextPhone md:text-h5Text">Documents Required Applying for Visa in Bashkir state medical University</h2>
                        <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                    </div>
                    <ul className="points-two">
                        <li>12th Marksheet (for attestation from Ministry of External Affairs).</li>
                        <li>Original Passport.</li>
                        <li>Invitation letter.</li>
                        <li>4 Photographs (3.5 x 4.5 cm in size, white background, 80% face).</li>
                        <li>HIV test report (preferably from Lal Path Lab).</li> 
                    </ul>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="heading">
                        <h2 className="pt-2 text-h5TextPhone md:text-h5Text">Eligibility in Bashkir state medical University</h2>
                        <span>MBBS in Russia – MBBS in Bashkir State Medical University</span>
                    </div>
                    <ul className="points-two">
                        <li>Above 50% in 10+2, PCBE.</li>
                        <li>Age should be 17 years as on 31st December in the year of seeking admission.</li>
                        <li>NEET Score - Just Qualify.</li>
                        <li>Qualify the university exam.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] my-[10vw] md:my-[1vw]">
              <h2 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[.5vw]   md:text-h3Text text-center font-bold">Authorization</h2>

              <div className='relative md:flex gap-[4vw] md:gap-[1vw] justify-center'>
                <Image src={"/assets/Images/authorization/russia/Russia7.jpg"} className='w-full md:w-[20vw] h-auto' width={1080} height={1080} alt='isbu1'/>
              </div>
            </section>
<div className="h-[4vw]"/>
       
            </div>
        </>
    )
}

export default BashkirMedicalUniversity;

 