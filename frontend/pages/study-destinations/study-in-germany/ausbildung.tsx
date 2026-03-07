import DescriptionComponent from '@/components/studyDestinationComponents/descriptionCompnent'
import Header from '@/components/studyDestinationComponents/headerComponent'
import ReasonsToStudy from '@/components/studyDestinationComponents/reasonsToStudy'
import WhyChoseUniversity from '@/components/studyDestinationComponents/whyChoseUniversity'
import React from 'react'
import Image from 'next/image'
import UnlistedTable from '@/components/studyDestinationComponents/unListedTable'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import Head from 'next/head'
import Script from 'next/script'

const tableData = {
  title:"Top 10 Ausbildung Courses in Germany",
  subTitle:"",
  data:[
    ["Course","Duration","Average Salary","Employers Hiring"],
    ["IT Specialist","3 years","€1,200–€1,500","SAP, Siemens, Deutsche Telekom"],
    ["Nursing","3 years","€1,000–€1,300","Charité, Asklepios"],
    ["Mechatronics Technician","3.5 years","€1,100–€1,400","BMW, Bosch, Volkswagen"],
    ["Hotel Management","2 years","€900–€1,200","Marriott, Hilton"],
    ["Industrial Electrician","3 years","€1,100–€1,300","BASF, ThyssenKrupp"],
    ["Aircraft Mechanic","3.5 years","€1,300–€1,500","Lufthansa, Airbus"],
    ["Baking & Confectionery","3 years","€800–€1,000","Kamps, Dallmayr"],
    ["Pharmaceutical Assistant","3 years","€1,000–€1,200","Bayer, Merck"],
    ["Dental Assistant","3 years","€950–€1,100","Dental Praxis Networks"],
    ["Retail Management","2 years","€900–€1,100","Aldi, Lidl, MediaMarkt"],
  ]
}

const tableData2 = {
  title:"Detailed Eligibility & Requirements of Ausbildung in Germany",
  subTitle:"",
  data:[
    ["Course","Duration"],
    ["Academic Qualification",["School Certificate: Equivalent to German secondary education (e.g., Class 12 for Indians).","Indian Students: CBSE/ICSE/State Board certificates accepted after recognition via the Anabin Database."]],
    ["Field-Specific Requirements",["Nursing: Biology/Chemistry basics.","IT Ausbildung: Mathematics/Computer Science background."],],
    ["Language Proficiency",["German: B1/B2 for most programs (exceptions for English-taught IT/Engineering).","English: IELTS 5.5+ or equivalent for English-medium courses."]],
    ["Training Contract",["Secure a contract with a German employer (Ausbildungsvertrag).","Edurizon’s Support: We partner with 200+ companies to match students."]],
    ["Financial Proof",["Blocked Account: Minimum €11,208/year (as per 2023 visa rules).","Health Insurance: Mandatory coverage (€110–€120/month).wb"]],
  ]
}

const highestPaidTable = {
  title:"Highest-Paid Ausbildung in Germany",
  subTitle:"",
  data:[
    ["Course","Average Salary","Post-Training Salary"],
    ["IT Specialist","€1,200–€1,500","€45,000–€60,000/year"],
    ["Industrial Electrician","€1,100–€1,300","€50,000–€65,000/year"],
    ["Aircraft Mechanic","€1,300–€1,500","€40,000–€55,000/year"],
    ["Pharmaceutical Assistant","€1,000–€1,200","€38,000–€48,000/year"],
  ]
}

const reasonsToStudy = [
  {
    title: "Earn While You Learn",
    description:
        "One of the most significant advantages of studying MBBS in China is cost-effectiveness. Annual tuition ..............",
  },
  {
  title: "Globally Recognized Qualifications",
  description:
      "Medical universities in China are recognized by global organizations like the World Health Organization ...........",
  },
  {
    title: "Pathway to Permanent Residency",
    description:
        "One of the most significant advantages of studying MBBS in China is cost-effectiveness. Annual tuition ..............",
    },
        {
          title: "Job Security & Career Growth",
          description:
              "One of the most significant advantages of studying MBBS in China is cost-effectiveness. Annual tuition ..............",
          },
          {
            title: " Personal Development & Work-Life Balance",
            description:
                "One of the most significant advantages of studying MBBS in China is cost-effectiveness. Annual tuition ..............",
            },
      {
        title: "Cultural Immersion & Language Mastery",
        description:
            "One of the most significant advantages of studying MBBS in China is cost-effectiveness. Annual tuition ..............",
        },
                            
]

const Ausbildung = () => {
  return (
    <>
    <Head>
      <title>Ausbildung in Germany for Indian Students – Job-Oriented Study</title>
      <meta
        name="keywords"
        content="study in germany for free, Free education in Germany for Masters, german language course, universities in germany for international students, ausbildung courses in germany, Ausbildung in Germany for Indian Students, Top Ausbildung Courses In Germany, scholarships in germany, master degree in germany, mba in germany, MBA in Germany fees, ms in germany, masters program in germany for international students"
      />
      <meta
        name="description"
        content="Apply for Ausbildung in Germany with paid training, high job demand & visa support. Full details at https://www.edurizon.in/study-destinations/study-in-germany/ausbildung."
      />
      <meta name="author" content="edurizon" />
      <meta name="robots" content="index, follow" />
      <meta name="DC.title" content="Ausbildung in Germany for Indian Students" />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Dwarka" />
      <meta name="geo.position" content="22.351115;78.667743" />
      <meta name="ICBM" content="22.351115, 78.667743" />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Ausbildung in Germany for Indian Students – Job-Oriented Study"
      />
      <meta
        property="og:description"
        content="Apply for Ausbildung in Germany with paid training, high job demand & visa support. Full details at https://www.edurizon.in/study-destinations/study-in-germany/ausbildung."
      />
      <meta
        property="og:url"
        content="https://www.edurizon.in/study-destinations/study-in-germany/ausbildung"
      />
      <meta
        property="og:image"
        content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@edurizon" />
      <meta
        name="twitter:title"
        content="Ausbildung in Germany for Indian Students – Job-Oriented Study"
      />
      <meta
        name="twitter:description"
        content="Apply for Ausbildung in Germany with paid training, high job demand & visa support. Full details at https://www.edurizon.in/study-destinations/study-in-germany/ausbildung."
      />
      <meta
        name="twitter:image"
        content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
      />
      <meta name="twitter:image:alt" content="Ausbildung in Germany" />

      <link
        rel="alternate"
        href="https://www.edurizon.in/study-destinations/study-in-germany/ausbildung"
        hrefLang="en-in"
      />
    </Head>

    {/* Google tag (gtag.js) */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-9JDZZKPGL8"
      strategy="afterInteractive"
      async
    />
    <Script id="ga-gtag-ausbildung" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9JDZZKPGL8');
      `}
    </Script>
    <div className='flex flex-col gap-[5vw] md:gap-[7vw] pt-[15vw]  md:pt-[4vw] '>
      <Header title1="Ausbildung in Germany"  title2='' id='' description='Are you ready to build a successful career through a structured, hands-on training program? Germany’s dual vocational training system, Ausbildung, offers a unique blend of paid work experience and classroom learning, making it a gateway to stable and rewarding careers. Renowned for its world-class education system, Germany provides international students and professionals—especially from India and beyond—an affordable, practical pathway to career success while earning a stipend.' />
      <DescriptionComponent id='' title1normal={"What is"} title1orange={"Ausbildung in Germany?"} content1={["Ausbildung is Germany’s innovative dual vocational training system that combines classroom-based education with hands-on, on-the-job training. This structured apprenticeship program is designed to equip participants with specialized, industry-ready skills and is globally recognized for its rigorous standards and excellent career prospects. Whether you’re seeking an ausbildung program in English or traditional German, our platform offers comprehensive resources—from detailed program listings to essential requirements and benefits."]} 
      title2={""} content2={["At Edurizon, we specialize in guiding aspiring professionals every step of the way to secure an Ausbildung in Germany. Whether you are interested in IT Ausbildung programs, dual Ausbildung opportunities, or exploring other specialized fields, we provide comprehensive support tailored to your needs."]} imageAlt={"Ausbildung Image"} imageSrc={"/assets/Images/study-in-germany/ausbildungImg2.webp"}/>
      {/* <ReasonsToStudy id='' name='Germany'  /> */}
      <ReasonsToStudy id='' title1='Benefits of Pursuing' title2='Ausbildung in Germany' name='Germany' content={reasonsToStudy} darkImg={["1Dark","2Dark","3Dark","4Dark","5Dark","6Dark"]} lightImg={["1","2","3","4","5","6"]} />

      {/* Why Chose Section */}
      <div className=" flex flex-col-reverse md:flex-row gap-[5vw] px-[6vw] md:px-[12.5vw] dark:text-black bg-linenChosen py-[10vw] md:py-[4vw] items-center  ">
            <div className="flex flex-col gap-[1.5vw] w-full md:w-[39.625vw]">
                <h1 className="text-h5TextPhone md:text-h3Text font-bold leading-[130%]">
                Why Choose Edurizon for Your Ausbildung Journey?
                </h1>
                <p>
                At Edurizon, we provide expert guidance to ensure your transition into the German vocational training system is smooth and successful. We understand the nuances of Germany Ausbildung courses and offer:
                </p>
                <ul className="list-disc pl-[6vw] md:pl-[1.5vw] list-outside md:text-regularText text-regularTextPhone ">
                    <li><strong>Personalized  Counselling: </strong>Tailored advice for ausbildung in Germany for foreigners and Indian students.</li>
                    <li><strong>Detailed Information & Updates: </strong>Stay informed about the latest trends, best Ausbildung courses in Germany, and highest paid Ausbildung in Germany.</li>
                    <li><strong>Comprehensive Support: </strong>From choosing the right course to fulfilling the requirements, we are with you every step of the way.</li>
                </ul>
            </div>
            <Image alt="whyChoseRussia" width={490} height={470} className="w-full md:w-[30.5vw] rounded-[4vw] md:rounded-[1vw] h-auto" src={"/assets/Images/study-in-germany/ausbildungImg1.webp"}/>
        </div>

      {/* Unlisted Table */}
      <UnlistedTable section2={"ausbildung"} content={tableData} id=''/>

      <ListedTable section2='ausbildung' content={tableData2} id=''/>

      <UnlistedTable section2={"ausbildung"} content={highestPaidTable} id=''/>
      
      <div/>
    </div>
    </>
  )
}

export default Ausbildung
