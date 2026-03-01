import Breadcrumbs from "@/components/Breadcumbs";
import DescriptionComponent from "@/components/studyDestinationComponents/descriptionCompnent";
import Header from "@/components/studyDestinationComponents/headerComponent";
import ListedTable from "@/components/studyDestinationComponents/ListedTable";
import PostArrival from "@/components/studyDestinationComponents/postArrival";
import ReasonsToStudy from "@/components/studyDestinationComponents/reasonsToStudy";
import UnlistedTable from "@/components/studyDestinationComponents/unListedTable";
import UnlistedTableEqualWidth from "@/components/studyDestinationComponents/unListedTableEqualWidth";
import RelatedVideos from "@/components/videoSlider";
import { TransitionLink } from "@/utils/TransitionLink";
import Image from "next/image";

const descriptionData={
    id:"nepal",
    title1normal:"Why MBBS in Nepal?",
    content:["Nepal is well known among Indian medical students for providing quality training, a top-notch medical framework and practice-based learning at the most reasonable cost. Good amount of patient inflow in maximum hospitals due to which students get good Practical exposures.",
        "Nepal can be an excellent choice for MBBS dream.","In Nepal, there are 2 main demanding universities:", "1. Kathmandu University", "2. Tribhuwan university’"],

    content2:"",
    imageAlt:"Georgia",
    imageURL:"/assets/Images/mbbs-in-nepal/nepal1.webp"
}


const academicCalenderData={
    id:"nepal",
    section2:"",
    content:{
        title:"Academic Calender",
        subTitle:"A glimpse of the important dates an aspirant must keep in mind to get on board the best medical colleges in Nepal. The information below is not absolute and may vary university-wise.",
        data:[["Events","Dates"],
        ["Admission process","Starts in the month of May"],
        ["Last date of application","In the month of October"],
        ["Commencement of MBBS course","From December"]],
    }
}

const eligibilityData={
    id:"nepal",
    section2:"",
    content:{
        title:"Eligibility Criteria",
        subTitle:"Eligibility Criteria for MBBS in Nepal for Indian students",
        data:[["Criteria","Details"],
        ["Academic Qualification",["Class 12 (equivalent) with Phy, Chem, Bio (PCB).","General Category: Min 50% aggregate in PCB.","SC/ST/OBC: Min 40% aggregate in PCB."]],
        ["NEET Qualification",["NEET qualification is mandatory."]],
        ["Age Limit",["Minimum 17 years as of December 31, 2024.", "Two ways admission in Nepal ","i. Through entrance exam conducted by MEC ", "ii. Direct through current NEET score."
            ,"Only current academic year NEET is accepted.","General category NEET score is considered for Indian student.","Students need to take at least 50 percentiles in the entrance exam to qualify",
            "Fees to be deposited directly in the account of Medical College after getting admission letter, as mentioned in the admission letter.","Students must go through an entrance test conducted by MEC.",
            "Selection of students will be based on the results.","Students will also have to undergo a counselling/interview held by the MEC. Final selection of the students will depend upon the aptitude and performance of the students."
        ]]],
    }
}
const reasonToStudyData={
    id:"nepal",
    title:"Why Study MBBS in Nepal?",
    content:[
        {title:"Easy Admission",description:"The process to mbbs admission in Nepal is easy, hassle-free, and student-friendly."},
        {title:"Easy Documentation",description:"Documentation system in Nepal Medical Colleges is very simple."},
        {title:"No Proficiency Test",description:"Proficiency test is not required to take admission for MBBS in Nepal but NEET qualification is mandatory."},
        {title:"English-Medium & Modern Curriculum:",description:"The entire MBBS program is taught in English."},
        {title:"Safe and welcoming for Indians:",description:"Nepal is known for its hospitality and safety. It offers a secure & conducive atmosphere to study MBBS for international students. A large community of Indian students means feel at home, with celebrations of all Indian festivals and enjoy Indian cuisine."},
        {title:"Other Facilities",description:"There are many other amenities provided to the students like Library, labs, Computer labs, study halls, Auditorium, sports courts, café, departmental stores, students club, canteen, and others. Bank and ATMs are also available inside the campus in maximum Medical Colleges for doing financial transactions."},
        
    ],
    darkImg:["2Dark","1Dark","3Dark","4Dark","6Dark","5Dark"],
    lightImg:["2","1","3","4","6","5"],
}

const KUAffiliated = [
  {
    id: 1,
    name: "Kathmandu Medical College",
    location: "Kathmandu",
    year: 1997,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/kathmandu-medical-college"
  },
  {
    id: 2,
    name: "Nepal Medical College",
    location: "Jorpati, Kathmandu",
    year: 1994,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/nepal-medical-college"
  },
  {
    id: 3,
    name: "Manipal College & Medical Science",
    location: "Pokhra",
    year: 1994,
    fee: "75,000 USD",
    duration: 50,
    href:"/study-destinations/study-mbbs-in-nepal/manipal-college-of-medical-science"
  },
  {
    id: 4,
    name: "Lumbini Medical College",
    location: "Palpa, Tansen",
    year: 2006,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/lumbini-medical-college"
  },
  {
    id: 5,
    name: "Devdaha Medical College",
    location: "Sunauli / Bhairaba border Rupandehi, Devdaha",
    year: 2006,
    fee: "75,000 USD",
    duration: 20,
    href:"/study-destinations/study-mbbs-in-nepal/devdaha-medical-college"
  },
  {
    id: 6,
    name: "Nobel Medical College",
    location: "Biratnagar, Nepal (6-8 KM away from Jogbani border (Bihar)",
    year: 2004,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/nobel-medical-college"
  },
  {
    id: 7,
    name: "Nepalgunj Medical College, Nepalgunj",
    location: "Bordering Bahraich, UP",
    year: 2004,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/nepalgunj-medical-college"
  },
  {
    id: 8,
    name: "College of Medical Sciences",
    location: "Bharatpur, Chitwan",
    year: 1994,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/college-of-medical-science"
  },
  {
    id: 9,
    name: "Birat Medical College",
    location: "Biratnagar",
    year: 2014,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/birat-medical-college"
  },
  {
    id: 10,
    name: "B & C Medical College & Teaching Hospital",
    location: "Jhapa",
    year: 2012,
    fee: "75,000 USD",
    duration: "16",
    href:"/study-destinations/study-mbbs-in-nepal/b&c-medical-college"
  },
];

const TUAffiliated=[
    {
    id: 1,
    name: "Chitwan Medical College",
    location: "Bharatpur, Chitwan",
    year: 2006,
    fee: "75,000 USD",
    duration: 33,
     href:"/study-destinations/study-mbbs-in-nepal/chitwan-medical-college"
  },
  {
    id: 2,
    name: "National Medical College",
    location: "Birgunj (Raxaul Border – 5 Km away)",
    year: 2001,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/national-medical-college"
  },
  {
    id: 3,
    name: "KIST Medical College",
    location: "Lalitpur, Kathmandu",
    year: 2006,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/kist-medical-college"
  },
  {
    id: 4,
    name: "Janaki Medical College",
    location: "Janakpur",
    year: 1999,
    fee: "75,000 USD",
    duration: 33,
    href:"/study-destinations/study-mbbs-in-nepal/janaki-medical-college"
  },
  // {
  //   id: 5,
  //   name: "Karnali Academy of Health Science",
  //   location: "Jumla",
  //   year: 2011,
  //   fee: "$50,000",
  //   duration: 4,
  // },
  // {
  //   id: 6,
  //   name: "Gandaki Medical College",
  //   location: "Pokhra",
  //   year: 2007,
  //   fee: "55 L",
  //   duration: "33",
  // },
  // {
  //   id: 7,
  //   name: "Universal Medical College",
  //   location: "Bhairahawa",
  //   year: 1971,
  //   fee: "55 L",
  //   duration: "33",
  // },
]

const videoData=[
  {
    id: 0,
    title: 'MBBS in Nepal | Big News is on the way !',
    channel: 'Edurizon Pvt Ltd',
    views: '44K views',
    time: '2 months ago',
    duration: '18:32',
    thumbnail: 'https://img.youtube.com/vi/8IcNTCwH78A/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=8IcNTCwH78A',
  },
  {
    id: 1,
    title: 'B&C Medical College & Teaching Hospital — A budget-friendly medical college in Nepal',
    channel: 'Edurizon Pvt Ltd',
    views: '27K views',
    time: '1 months ago',
    duration: '24:45',
    thumbnail: 'https://img.youtube.com/vi/AIjclDHYebc/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=AIjclDHYebc',
  },
  {
    id: 2,
    title: "Campus Tour of Nepal Medical College, Nepal | Best FMGE Passing Rate",
    channel: 'Edurizon Pvt Ltd',
    views: '10M views',
    time: '3 years ago',
    duration: '3:03',
    thumbnail: 'https://img.youtube.com/vi/eYFM_UwdVas/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=eYFM_UwdVas',
  },
  {
    id: 3,
    title: 'Campus Tour of Birat Medical College | Best Medical College in Nepal | Best FMGE Passing Rate',
    channel: 'Edurizon Pvt Ltd',
    views: '44K views',
    time: '2 months ago',
    duration: '18:32',
    thumbnail: 'https://img.youtube.com/vi/rtxMG8rVMpY/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=rtxMG8rVMpY',
  },
]

const NewPage=()=>{
    return(
        <div  className="text-smallTextPhone md:text-regularText pt-[15vw] md:pt-[4vw]">

            {/* Breadcumb section and about nepal */}
            <div className="mx-[6vw] md:w-[73.125vw] flex flex-col gap-[5vw] mb-[1vw] py-[4vw] items-center md:mx-auto">
                <div className="flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                <div className="flex flex-col items-center gap-[4vw] md:gap-[1vw]">
                    <Breadcrumbs/>
                    <h1 className="text-h4TextPhone text-center   font-bold leading-[120%] md:text-h1Text">MBBS in Nepal</h1>
                </div>
                 {/* Climate and Weather */}
           <div className="text-smallTextPhone md:text-regularText leading-[150%]  flex flex-col gap-[3vw] md:gap-[1.5vw] md:px-[4vw]">
                <h3 className="text-h5TextPhone and md:text-h3Text font-bold leading-[120%] ">About Nepal</h3>
                <p>Nepal is Federal Democratic Republic and a largest sovereign country which is a landlocked by Central Himalaya in South Asia.  It is located in the Himalayas, has a population of about 29 million and is the 93rd largest Country by area, bordering China in the North & India in the South, East & West.</p>
                <div className="flex flex-col md:flex-row justify-center gap-[2vw] md:gap-[1.5vw]">
                    <div className="md:w-1/2 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">i.</div>
                        <div className="flex flex-col"><p className="font-bold">CAPITAL OF NEPAL</p><p>Kathmandu is the Capital of Nepal. It is in the North part of the country, which has the tallest mountain range in the world, including that of Mount Everest.</p></div>
                    </div>
                    <div className="md:w-1/2 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">ii.</div>
                        <div className="flex flex-col"><p className="font-bold">GEOGRAPHY</p><p>Nepal has a diverse geography, including fertile plains, subalpine forested hills and eight of the world’s ten tallest mountains, from world’s deepest gorge Kali – Gandki to the highest point on earth Mt. Everest.</p></div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-[2vw] md:gap-[1.5vw]">
                    <div className="md:w-1/3 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">iii.</div>
                        <div className="flex flex-col"><p className="font-bold">LORD BUDDHA BIRTH PLACE</p><p>Lord Buddha’s birth Lumbini also lies in Nepal. It is one of the most renowned pilgrimage places in the world.</p></div>
                    </div>
                    <div className="md:w-1/3 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">iv.</div>
                        <div className="flex flex-col"><p className="font-bold">LANGUAGE SPOKEN</p><p>Nepali is the official language used in Nepal. However, 90% people in Nepal speaks & understands Hindi.</p></div>
                    </div>
                    <div className="md:w-1/3 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">v.</div>
                        <div className="flex flex-col"><p className="font-bold">PERMANENT SAARC OFFICE</p><p>Nepal hosts the permanent secretariat of the South Asian Association for Regional Cooperation (SAARC).</p></div>
                    </div>
                </div>
           </div>
                </div>
            </div>

            {/* Why CHose Nepal */}
             {/* Description Part */}
            <DescriptionComponent id={descriptionData.id} title1normal={descriptionData.title1normal}  
            content1={descriptionData.content} imageAlt={descriptionData.imageAlt} imageSrc={descriptionData.imageURL} />

            {/* Katmandu University */}
            <section className="mx-[6vw] md:mx-[12.5vw] py-[10vw] md:py-[4vw] ">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h3Text">KATHMANDU UNIVERSITY</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[8vw] md:mb-[2vw] text-left md:text-regularText md:text-justify">
              <li>
                Kathmandu University is an autonomous, no for profit, self-funding public institution established by an Act of Parliament in December 1991.  It is an institution of higher learning dedicated to maintaining the standard of academic excellence in various classical and professional.
                </li><li>The mission statement of the University is to provide quality education for leadership.  The vision is to become a world class university devoted to bringing knowledge and technology to the service of mankind.
              </li>
              </ul>
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h3Text">List of medical colleges affiliated with KU</h3>
              <ul className="text-smallTextPhone list-decimal ml-[3vw] md:ml-[1.5vw]  text-left md:text-regularText md:text-justify">
              <li>Manipal College of Medical Science, Pokhara (MCOMS)</li>
              <li>College of Medical Science, Bharatpur</li>
              <li>Kathmandu University School of Medical Sciences, Dhulikhel</li>
              <li>Birat Medical College, Biratnagar</li>
              <li>Kathmandu Medical College (KMC) Kathmandu</li>
              <li>Nepal Medial College (NMC), Jorpati, Kathmandu</li>
              <li>Devdaha Medial College & Teaching Hospital, Devdaha, Rupandehi</li>
              <li>Nepalgunj Medical College, Nepalgunj</li>
              <li>Lumbini Medical College (LMC) Palpa</li>
              <li>Nobel Medical College, Biratnagar</li>
              <li>B & C Medical College & Teaching Hospital, Jhapa</li>
              
              </ul>
            </section>

             {/* TRIBHUVAN University */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h3Text">TRIBHUVAN UNIVERSITY</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[8vw] md:mb-[2vw] text-left md:text-regularText md:text-justify">
                <li>
                    Tribhuvan University is a public university located in Kirtipur, Kathmandu.  It is established in the year 1959.  TU is the oldest university in Nepal. In terms of enrollment, it is the 12th largest university in the world.
                </li>
                <li>
                    TU is a non-profit making autonomous institution funded by the Government of Nepal.  On January8, 2013, the Government of Nepal has principally agreed to declare TU as the Central University which is fulfilling the requirements of large number of students.
                </li>
              </ul>
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h3Text">List of medical colleges affiliated with TU</h3>
              <ul className="text-smallTextPhone list-decimal ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
              <li>Institute of Medicine, Kathmandu</li>
              <li>Nepal Army Institute of Health Science, Kathmandu</li>
              <li>Kist Medical College, Kathmandu</li>
              <li>Chitwan Medical College, Bharatpur</li>
              <li>Gandaki Medical College, Pokhara</li>
              <li>Universal Medical College, Bhairahawa</li>
              <li>National Medical College, Birgunj</li>
              <li>Janaki Medical College, Janakpur</li>
              </ul>
            </section>

            {/* Entrance Exam  */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h3Text">ENTRANCE EXAM OF KU/TU</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  text-left md:text-regularText md:text-justify">
                <li>
                    Indian students either need to appear for entrance examination conducted by MEC or should have valid NEET score of current year.
                </li>
                <li>
                    It is compulsory for students to fill the application form & deposit the prescribed application form charge to appear for the CEE (Common Entrance Examination) conducted by MEC or for a direct admission through NEET.
                </li>
              </ul>
            </section>

            {/* Benefits of MBBS in Nepal */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row  px-[6vw] md:px-[12.5vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen dark:text-black">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] ">
                <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">BENEFITS OF MBBS IN NEPAL - MBBS in Nepal for Indian Students</h3>
                <div>
                <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                    <li>Nepal is one of the biggest and finest opportunities for Indian students. There are several advantages to studying MBBS in Nepal.</li>
                    <li>Nepal offers good quality education.</li>
                    <li>Easy accessibility, Indian students can even reach to their respective Medical Colleges by their own vehicles.</li>
                    <li>Parents can also go easily without visa to meet their son/daughter.</li>
                    <li>Well qualified and experienced teaching faculties.</li>
                    <li>All Medical Colleges have their own hospitals with good patient inflow.</li>
                    <li>No need to learn extra language as Hindi is understood and spoken in Nepal. As such, Indian students do not find any language barrier.</li>
                    <li>Weather of Nepal is almost same as prevalent in India.</li>
                    <li>No need to exchange money as Indian currency are accepted locally in Nepal as hard currency.</li>
                    <li>Visa-free travel is available for citizens of India. Moreover, no formal agreement is required since India and Nepal have such strong and cordial ties.</li>
                </ul>
                </div>
                <h5 className="font-bold text-h6TextPhone md:text-h5Text">Recognition</h5>
                <p className="text-smallTextPhone md:text-regularText ">
                    Degree is recognized by National Medical Commission, India, WHO and Sri Lanka Medical Council (SLMC)
                </p>
                </div>  
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="min-w-[32.5vw] h-auto" width={690} height={690  } alt="georgia3"/>
            </div>

            {/* Top Universities */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw]  md:text-h3Text text-center">Top 5 Medical Colleges in Nepal </h3>
              <p className="md:mx-[8vw] text-center mb-[4vw] md:mb-[2vw]">When it comes to choosing the best Medical College in Nepal for mbbs, Indian students have several options. Five top Medical Colleges that highly excel in quality.</p>
              <div className="flex flex-col md:flex-row justify-center gap-[2vw] md:gap-[1.5vw] md:mx-[4vw]  mb-[4vw] md:mb-[2vw]">
                    <div className="md:w-1/5 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">i.</div>
                    <TransitionLink href="/study-destinations/study-mbbs-in-nepal/kathmandu-medical-college">

                        <div className="flex flex-col"><p className="font-bold">Kathmandu Medical College</p></div>
                        </TransitionLink>
                    </div>
                    <div className="md:w-1/5 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">ii.</div>
                         <TransitionLink href="/study-destinations/study-mbbs-in-nepal/nepal-medical-college">

                        <div className="flex flex-col"><p className="font-bold">Nepal Medical College</p>
                        </div>
                        </TransitionLink>
                    </div>
                    <div className="md:w-1/5 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">iii.</div>
                        
                        <div className="flex flex-col"><p className="font-bold">Manipal College & Medical Science</p></div>
                    </div>
                    <div className="md:w-1/5 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">iv.</div>
                        <TransitionLink href="/study-destinations/study-mbbs-in-nepal/nobel-medical-college">
                        <div className="flex flex-col"><p className="font-bold">Nobel Medical College</p></div></TransitionLink>
                    </div>
                    <div className="md:w-1/5 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">v.</div>
                        <TransitionLink href="/study-destinations/study-mbbs-in-nepal/birat-medical-college">
                        <div className="flex flex-col"><p className="font-bold">Birat Medical College</p></div>
                        </TransitionLink>
                    </div>
                </div>
                    <p className={`border  dark:text-black dark:border-b-black dark:border-r-black  border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]  text-center font-semibold bg-linenChosen`} >AFFILIATED TO KU</p>
            
              <table className="w-full border-collapse border  mb-[4vw] md:mb-[2vw] border-black dark:border-borderGreyChosen ">
                <thead className="text-smallTextPhone md:text-regularText text-center font-bold align-top bg-linenChosen">
                    <td className="border w-1/6  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">S.No</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Name of University</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Location</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]"> Estd. Year</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Expected Tution Fees</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Seats for foreign Students</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]"></td>
                </thead>
            <tbody className="text-smallTextPhone md:text-regularText align-top"> 

                {KUAffiliated.map((college, index) => (
          <tr key={college.id}>
            <td className="border dark:text-black dark:border-b-black text-center dark:border-r-black w-[1vw] bg-linenChosen border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">
              {index + 1}.
            </td>
            <td className="border dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.href ? <TransitionLink href={college.href}>
                {college.name}
              </TransitionLink>:
              <>{college.name}</>
              }
              
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.location}
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.year}
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.fee}
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.duration}
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.href && <TransitionLink href={college.href}>
                Know More
              </TransitionLink>}
            </td>
            
          </tr>
        ))}
              
            </tbody>
          </table>

           <p className={`border  dark:text-black dark:border-b-black dark:border-r-black  border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]  text-center font-semibold bg-linenChosen`} >AFFILIATED TO TU</p>
            
              <table className="w-full border-collapse border border-black dark:border-borderGreyChosen ">
                <thead className="text-smallTextPhone md:text-regularText text-center font-bold align-top bg-linenChosen">
                    <td className="border w-1/6  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">S.No</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Name of University</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Location</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]"> Estd. Year</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Expected Tution Fees</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Seats for foreign Students</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]"></td>

                </thead>
            <tbody className="text-smallTextPhone md:text-regularText align-top"> 

                {TUAffiliated.map((college, index) => (
          <tr key={college.id}>
            <td className="border dark:text-black dark:border-b-black dark:border-r-black bg-linenChosen border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">
              {index + 1}.
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
               {college.href ? <TransitionLink href={college.href}>
                {college.name}
              </TransitionLink>:
              <>{college.name}</>
              }
              
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.location}
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.year}
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.fee}
            </td>
            <td className="border dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.duration}
            </td>
            <td className="border  whitespace-nowrap dark:text-white border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.href && <TransitionLink href={college.href}>
                Know More
              </TransitionLink>}
            </td>
          </tr>
        ))}
              
            </tbody>
          </table>
            </section>


             {/* MBBS NEPAL DURATION  */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[5vw] md:pb-[2vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h3Text">MBBS NEPAL DURATION</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  text-left md:text-regularText md:text-justify">
                <li>
                     MBBS Nepal duration is for 4.5 years. There will be theoretical classes in the beginning and subsequently basic study of medical sciences and clinical study
                </li>
                <li>
                    1-year separate internship programme. During internship, students are required to go through the internship program in hospitals of the college.
                </li>
               

              </ul>
            </section>

             {/* SYALLBUS OF MBBS NEPAL  */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h3Text">SYALLBUS OF MBBS NEPAL </h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[2vw] text-left md:text-regularText md:text-justify">
                <li>
                    Study pattern of Nepalese Medical Colleges is similar to India.
                </li>
                <li>
                    First 02 years students will be taught basic medical sciences and in the next 3 years, students will learn the principles and skills of clinical medicine.
                </li>
              </ul>
              <table className="w-full border-collapse border border-black dark:border-borderGreyChosen ">
            <tbody className="text-smallTextPhone md:text-regularText align-top"> 
                <tr>
                    <td className={`border  dark:text-black   border-black  px-[.75vw] py-[.625vw] w-1/2 font-semibold bg-linenChosen`}>Basic Sciences</td>
                    <td className={`border  dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw] w-1/2  `}>Anatomy Physiology Biochemistry Microbiology Pathology Pharmacology</td>
                </tr>
                <tr>
                    <td className={`border   dark:text-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw] w-1/2 font-semibold bg-linenChosen`}>Community Med</td>
                    <td className={`border  dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw] w-1/2  `}>Epidemiology Biostatistics Demography Health education Environmental
 health Nutrition Sociology Clinical Medicine</td>
                </tr>
                <tr>
                    <td className={`border  dark:text-black  border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw] w-1/2 font-semibold bg-linenChosen`}>Clinical Medicine</td>
                    <td className={`border  dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw] w-1/2  `}>Community Medicine Forensic Medicine Ophthalmology
                    Otorhinolaryngology (ENT) Medicine (including psychiatry and dermatology & venereal disease) Surgery (including orthopedics anesthesiology, radiology and dental) Obstetrics & Gynecology, Pediatrics</td>
                </tr>
              
            </tbody>
          </table>
            </section>

            

            {/* Reasons to Study */}
            {<ReasonsToStudy id={reasonToStudyData.id} title1={reasonToStudyData.title}  content={reasonToStudyData.content} darkImg={reasonToStudyData.darkImg} lightImg={reasonToStudyData.lightImg} />}

            {/* Academic Calander */}
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />
            
            {/* Eligibility Criteria */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
    
            {/* Key Features of NMC Gazette */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="text-h6TextPhone leading-[120%] italic mb-[4vw] md:mb-[1vw] text-left md:text-h5Text">Key Features of NMC Gazette 2021</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Minimum duration of MBBS must be at least 54 months or 4.5 years</li>
                <li>Mandatory to complete 12-months internship from the same university</li>
                <li>Entire MBBS program should be in English.</li>
                <li>Must obtain licence to practice from the same Country.</li>
              </ul>
              <h3 className="text-h6TextPhone italic leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h5Text text-orangeChosen">**Nepal fulfils all criteria as laid down in NMC gazette 2021</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  text-left md:text-regularText md:text-justify">
                <li>The licencing exam in Nepal shall be conducted in English language.</li>
              </ul>
            </section>

             {/* Other Fees*/}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
              <h3 className="italic text-h6TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h5Text">Other fees for international students</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] text-left md:text-regularText md:text-justify">
                <li>Admission form charge: IRs.5,000.00</li>
                <li>Registration fees: -</li>
                <ul className="mb-[1vw] md:mb-[.5vw]">
                        <li>o	Rs 23,500 for Indians</li>
                        <li>o	$ 400 for International (non-Indian) </li>
                        <li>o	Affiliation fee IRs 62,000</li>
                        <li>o	NMC registration approx. IRs. 3200 as per respective authorities notice.</li>
                        <li>o	Registration, affiliation and NMC registration fees are one time only. This amount shall be actual as per KU/TU and NMC notice for the batch of MBBS program.</li>
                </ul> 
                <li>University exam fee shall be actual as per KU/TU notice for the particular batch of MBBS program</li>
                <li>If student fails in university exam, IRs.14,500 has to be paid in each subject in the university re-exam besides university exam fee, logistic fee.</li>
                <li>Hostel fee (excluding food) IRs.8,000 per month (increased by 5% in every two year) in double sharing accommodation</li>
                <li>Food (breakfast, lunch, dinner) is available in approx.. IRs.4,000 to 5,000 per month.</li>
                <li>Electricity and water charge in the hostel has to be paid by student</li>
                <li>Hostel is mandatory for all international/Indians students for whole academic course and internship</li>
              </ul>
            </section>

             {/* Weather of Nepal */}
            <section className="p-[1vw] md:p-[2vw] mx-[6vw] md:mx-[12.5vw] ">
              <h3 className="text-h5TextPhone leading-[120%] mb-[4vw] md:mb-[1vw] text-left md:text-h3Text">Climate and Weather</h3>
              <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw]  mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>
                    In Summer - the maximum temperature reaches to 30 degrees during the month of May to August.
                </li>
                <li>
                    In monsoon – the minimum 40cm to 45cm rainfall recorded.
                </li>
                <li>
                    In Winters - very cold with an average temperature of 5-2 degree and sometimes it can drop in minus.
                </li>
              </ul>

              <p className="">○     However, it may be noted that all buildings and hostels are well equipped with centralized heating system.</p>
            </section>

            {/* How to Reach Nepal */}
            <div className="mb-[10vw] md:mb-[4vw] flex flex-col md:flex-row gap-[4vw] md:gap-[4vw] mx-[6vw] md:mx-[12.5vw] items-center ">
                <div className="flex flex-col gap-[2vw] md:gap-[2vw] ">
                <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">How to Reach Nepal From India</h3>
                <div>
                <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                    <li className="font-bold">By Flight</li>
                    <ul className="mb-[1vw] md:mb-[.5vw]">
                        <li>o	From Delhi to Kathmandu</li>
                        <li>o	Bhairawa (known as Sidharthnagar) & Jogbani borders have airports </li>
                        <li>o	Gautam Budha Airport is one of the busiest airports in Nepal</li>
                        <li>o	45 mins distance from Kathmandu to Bhairawa airport</li>
                    </ul> 
                    <li className="font-bold">By Road</li>
                    <ul className="mb-[1vw] md:mb-[.5vw]"> 
                        <li>o	Sunauli/Bhairawa Borders</li>
                        <li>o	Devdaha Medical College & Teaching Hospital – approx. 20 Km distance </li>
                        <li>o	Lumbini Medical College (LMC), Tansen – approx. 50 km distance</li>
                        <li>o	Jogbani border – Around 130 Km away from Patna</li>
                        <li>o	Nobel Medical College, Biratnagar – approx. 5-6 km distance</li>
                    </ul> 
                    <li className="font-bold">By Train</li>
                    <ul className="mb-[1vw] md:mb-[.5vw]">
                        <li>o	Raxual Border & Nautanwa </li>
                        <li>o	Manipal College of Medical Science (MCOMS), Pokhara – approx 250 Km distance.</li>
                        <li>o	College of Medical Sciences, Bharatpur – approx. 100 km distance</li>
                        <li>o	5 Km distance from Nautnwa to Sunauli border.</li>
                    </ul>                        
                    
                </ul>
                </div>
                </div>  
                <Image src={"/assets/Images/CountryBlogs/didYouKnow.png"} className="min-w-[25vw] h-auto" width={400} height={400  } alt="georgia3"/>
            </div>
            <RelatedVideos videoData={videoData}/>
        </div>
    )
}

export default NewPage;