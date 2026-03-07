import Breadcrumbs from "@/components/Breadcumbs";
import CTASection from "@/components/landingPage/CTASection";
import EligibilityCriteria from "@/components/studyDestinationComponents/eligibilityCriteriaTable";
import PostArrival from "@/components/studyDestinationComponents/postArrival";
import ScholarshipSection from "@/components/studyDestinationComponents/scholarshipSection";
import UnlistedTable from "@/components/studyDestinationComponents/unListedTable";
import Image from "next/image";
import Head from "next/head";
import AuthorizationSlider from "@/components/studyDestinationComponents/authorizationSlider";
import Script from "next/script";

const services = [
    {
      icon: "/assets/Images/Icons/feesIcon.svg",
      text: "Tution Fees",
      label: "Ruble 5,94,000 / Year",
    },
    {
      icon: "/assets/Images/Icons/TieUpsIcon.svg",
      text: "City & Province",
      label: "Kazan, Russia",
    },
    {
      icon: "/assets/Images/Icons/ExperienceIcon.svg",
      text: "World Rank",
      label: "396",
    },
    {
      icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
      text: "Amazing Fact",
      label: "FMGE Passing Ratio 2024 - 68%",
    },
  ];

const why=["All 50,000 students who are studying and enjoying at the 2nd oldest university of Russia, Kazan Federal University knows the answer.",
"A world of thoughts, ideas, diversity and culture can be discovered from students of Kazan Federal University which was once always considered as a bridge between the students of east and west. You will be able to grow, explore yourself more, identify your talent, ability and learn many things from the outside world apart from classroom teaching.",
"Kazan Federal University is a top rated university in Russia with 215 years of experience in imparting quality education and research work in extensive field for its students.",
"More than 3000 professors are employed for providing under graduated and graduate courses. Professors are highly qualified as most of them hold either a doctorate degree or some represent powerful scientific minds in and out of Russia across the world. The whole credit goes to them as under their leadership and supervision students have excelled and become strong leaders today both in industry and studies.",
"Kazan Federal University has developed much from the last years. It has extended itself by including more research centers across the globe, well built infrastructure, 80 teaching world class laboratories, and 17 competitive research centers."]

const feeStructure = {
  title: "Fee Structure",
  subTitle: "Kazan Federal University Fees",
  description: "Kazan Federal University is popular among international students for its quality education and transparent cost structure. Kazan Federal University MBBS Fees are affordable compared to many other countries, offering Indian students access to modern facilities, experienced faculty, and excellent clinical training.",
  data: [
    ["Expense", "Annual Cost"],
    ["Tution Fees", "5,94,000 Ruble"],
    ["Hostel Fees", "24,000 Ruble"],
    ["Miscellaneous", "10,000–20,000 Ruble"],
  ],
};

const facts={
    title:"Quick Facts Related to Kazan Federal University",
    subTitle:"",
    data:[
        [],
        ["Established In","1804"],
        ["Recognition","NMC, WHO, ECFMG (USMLE), GMC (PLAB), AMEE"],
        ["Medium of Teaching","Fully English"],
        ["Course Duration","6 Years"],
        ["Indian students","Yes"],
        ["Entrance Exam","Yes, Kazan Federal conducts entrance exams in respect of all international students, including Indians, every year."],
        ["University Ranking","347"]
    ]
}

const eligibility=[
    
        [["Criteria"],["Details"]],
        [["Academic Qualification"],["Above 50% in 10+2, PCBE."]],
        [["NEET Qualification"],["NEET Score - Just Qualify."]],
        [["Age Limit"],["Age should be 17 years as on 31st December in the year of seeking admission."]],
        [["University Exam"],["Qualify the university exam."]],
]



const KazanFederalUniversity = () => {
  return (
    <>
      <Head>
        <title>
          Kazan Federal University Russia for Indian Students, MBBS Fees | Edurizon
        </title>
        <meta
          name="keyword"
          content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia."
        />
        <meta
          name="description"
          content="Edurizon offers Kazan Federal University in Russia for Indian Students for quality medical education with affordable MBBS fees and global recognition."
        />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow" />
        <meta name="DC.title" content="MBBS In Russia" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MBBS in Russia for Indian Students – Kazan Federal University"
        />
        <meta
          property="og:description"
          content="Explore affordable MBBS in Russia, low cost tuition, admission criteria, eligibility & scholarship details at https://www.edurizon.in/study-destinations/study-mbbs-in-russia/kazan-federal-university."
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
          content="MBBS in Russia for Indian Students – Kazan Federal University"
        />
        <meta
          name="twitter:description"
          content="Explore affordable MBBS in Russia, low cost tuition, admission criteria, eligibility & scholarship details at https://www.edurizon.in/study-destinations/study-mbbs-in-russia/kazan-federal-university."
        />
        <meta
          name="twitter:image"
          content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
        />
        <meta name="twitter:image:alt" content="MBBS in Russia" />
      
        <link
          rel="alternate"
          href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia/kazan-federal-university"
          hrefLang="en-in"
        />
      </Head>

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9JDZZKPGL8"
        strategy="afterInteractive"
        async
      />
      <Script id="ga-gtag-kazan" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9JDZZKPGL8');
        `}
      </Script>
      <div>
        <div className="relative h-auto w-full">
        <Image src="/assets/Images/universities/russia/KazanFederalUniversity.webp" alt="Kazan Federal University" layout="fill" objectFit="cover" className="z-[-1] opacity-50" />
        <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[6vw] py-[7.125vw] items-center md:mx-auto">
            <div className="flex flex-col items-center gap-[2vw]">
            <div className="flex flex-col items-center gap-[1vw]">
                <Breadcrumbs/>
                <h1 className="text-h3TextPhone font-bold leading-[120%] md:text-h1Text">Kazan Federal University</h1>
            </div>
            <p className="text-regularTexts text-center">
            Are you dreaming of pursuing a career in medicine and becoming a skilled doctor? Look no further than Kazan Federal University in Russia - a prestigious institution with a rich history and a renowned medical program. Kazan Federal University is one of Russia’s leading institutions known for quality education and global recognition. Kazan Federal University for Indian Students offers English-medium medical programs, modern infrastructure, and strong clinical exposure, making it a preferred choice for aspiring doctors from India.
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
         {/* Authorization Slider */}
         <AuthorizationSlider 
          images={[
            '/assets/Images/authorization/russia/Russia1.jpg',
            '/assets/Images/authorization/russia/Russia2.jpg',
            '/assets/Images/authorization/russia/Russia3.jpeg',
          ]}
        />

        <div className="mx-[12.5vw] my-[4vw]">
            <p className="text-regularText font-semibold leading-[150%] text-justify">
            Kazan Federal University was established in the year 1804 and received the federal status in the year 2010. The University is located in Kazan and is one of the best government universities in Russia. The University has two branches one is located at Naberezhnye and the other is situated at Yelabuga. The main campus of the University is in downtown Kazan which consists of 16 institutes, 3 higher schools and 2 faculties and is just10 minutes away from Kazan Kremlin.<br/><br/>
            The University offers variety of undergraduate and postgraduate programs and every year more than 50,000 students register themselves in different courses from across the world. The University also has a good arrangement of stay for students who come from outside of Kazan. It has a separate dormitory campus built in Universaide village which can accommodate about 12000 students with all facilities like laundry, beauty salon, sports equipment, medical centre, cafeteria and drug store.<br/><br/>
            In 2014 Kazan Federal University celebrated its 210th anniversary. It is one of the oldest universities in Russia to achieve such a milestone. It is all due to its dedication and mission that it is considered the leading educational institution of today both in Russia and across the world.<br/><br/>
            The University scholars and graduates are doing excellence around the world. It is all due to their endurance and efforts today Kazan Federal University has gained so much of fame and recognition around the world. Their perseverance and achievement has changed and impacted the country as well. The University has also contributed for the development of the country.<br/><br/>
            Acknowledged as the dynamic and modern university Kazan Federal University also got an opportunity to participate in various government projects coordinated by the government of Russian Federation and improve its presence across the world in both research and educational centres. The University also worked in co ordinance with both international and local cooperation, work on boosting the regions human resource development, networking with academia and industry and also look after the progress of research and innovation centres in different field.<br/><br/>
            The University has a huge contribution in the establishment of various world class research and teaching centres along with laboratories. The determination and participation of the university in projects like 5-100 solely intensifies its dedication and passion to reach the peak and make a name for one self.<br/><br/>
            Whatever fame the university has earned till today it is all because of the right planning and execution. The university was able to rose to fame from a small traditional Institute to a Research University where all state-of-the-art and entrepreneurial activities are represented.<br/><br/>
            </p>
        </div>
        <div className="grid grid-cols-2 gap-[5vw] mx-[12.5vw] my-[4vw]">
            <div className="flex flex-col gap-[2vw] justify-center">
                <h2 className="text-h3Text font-bold leading-[120%]">
                    The City <br/> <span className="text-orangeChosen">Kazan</span>
                </h2>
                <p className="text-regularText leading-[150%] text-justify">
                The history of Kazan situated in the center of Europe which is a multinational and multifessional city of Russia is filled with millennium past record. The university is very easily reachable by underground metro from the dormitory. The city is also well known around the world for many cultural events and international sport like universaide 2013 (world student games) FINA World Acquatics Championships 2015, International Classical Ballet and Opera Festivals, International Festival of Muslim Cinema and 21st FIFA World Cup (2018).
                </p>
            </div>
            <Image src="/assets/Images/kazanFederalCity.webp" alt="Kazan Federal City" width={500} height={500} className="w-[32.375vw] h-auto" />
        </div>

        <div className="px-[12.5vw] w-full bg-linenChosen grid grid-cols-2 text-black items-center py-[4vw] gap-[2vw]  my-[4vw]">
            <div className="flex flex-col gap-[2vw] justify-center">
                <h2 className="text-h2Text font-bold leading-[120%]">Why MBBS in Kazan Federal University?</h2>
                <ul className="list-disc pl-[2vw] text-regularText leading-[150%] text-justify">
                    {why.map((item,index)=>(
                        <li key={index} >{item}</li>
                    ))}
                </ul>
            </div>
            <Image src="/assets/Images/CountryBlogs/didYouKnow.png" alt="Did You Know" width={500} height={500} className="w-[30.5vw] h-auto mx-auto" />
        </div>
        <div className=""> 
        <UnlistedTable id="1" section2="fee" content={feeStructure}/>
        </div>
        <div>
        <div className=" flex flex-col  mx-[12.5vw] gap-[2vw] py-[4vw] mb-[4vw]">
            <div className="flex flex-col gap-[1vw]">
            <h2 className="text-h5TextPhone md:text-h3Text text-center font-bold leading-[130%]">Kazan Federal University Entrance Exam</h2>
            <p className="text-smallText text-center ">Kazan Federal Conducts entrance exams in respect to all international students, including Indians, every year.</p>
            </div>
            <div className="flex flex-col gap-[1vw]">
                <span className="text-h4Text font-bold text-left">Kazan Federal University Entrance Exam Sample Paper</span>
                <ul className="text-regularText list-disc list-inside">
                    <li>The subjects for the entrance exams are English & Biology.</li>
                    <li>It is mandatory to get qualified in each subject.</li>
                    <li>It is expected that, this year, qualifying marks will be lower as Chemistry subject has been exempted.</li>
                </ul>
            </div>
        </div>
        
        <EligibilityCriteria id="1" data={eligibility} countryName="Kazan Federal University"/>
        

        <div className="mb-[4vw]"> 
        <UnlistedTable id="1" section2="fee" content={facts}/>
        </div>

       

        </div>
        <PostArrival/>
        </div>
    </>
  )
}

export default KazanFederalUniversity;
