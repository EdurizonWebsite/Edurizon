import DescriptionComponent from "@/components/studyDestinationComponents/descriptionCompnent";
import Header from "@/components/studyDestinationComponents/headerComponent";
import ListedTable from "@/components/studyDestinationComponents/ListedTable";
import PostArrival from "@/components/studyDestinationComponents/postArrival";
import ReasonsToStudy from "@/components/studyDestinationComponents/reasonsToStudy";
import UnlistedTable from "@/components/studyDestinationComponents/unListedTable";
import UnlistedTableEqualWidth from "@/components/studyDestinationComponents/unListedTableEqualWidth";
import { TransitionLink } from "@/utils/TransitionLink";
import Image from "next/image";

const headerData={
    id:"Kyrgyzstan",
    title:"Study MBBS in Kyrgyzstan",
    title2:"About Kyrgyzstan",
    description:"Kyrgyzstan is a landlocked country in Central Asia, bordering Kazakhstan, China, Tajikistan and Uzbekistan. The mountainous region of the Tian Shan covers over 80% of the country (Kyrgyzstan is occasionally referred to as 'the Switzerland of Central Asia', as a result), with the remainder made up of valleys and basins. Issyk-Kul Lake is the largest lake in Kyrgyzstan which is situated in the north-eastern Tian Shan and the second largest mountain lake in the world after Titicaca. Heavy snowfall in winter leads to spring floods which often cause serious damage downstream. The runoff from the mountains is also used for hydro-electricity.",
    description2:"Kyrgyzstan has significant deposits of metals including gold and rare-earth metals. Due to the country's predominantly mountainous terrain, less than 8% of the land is cultivated, and this is concentrated in the northern lowlands and the fringes of the Fergana Valley.Bishkek in the north is the capital and largest city. The second city is the ancient town of Osh, located in the Fergana Valley near the border with Uzbekistan."
}

const descriptionData={
    id:"geogia",
    title1normal:"Reasons to choose MBBS in Kyrgyzstan",
    content:[
        'MBBS in Kyrgyzstan complies with all conditions of NMC guidelines 2021.',
        'Kyrgyzstan has wide range of universities catering to all types of budget category starting from 14 lakh onwards.',
        'Internationally recognized by NMC, WHO, ECFMG, GMC, AMC, Europe and Gulf countries.',
        'Providing high quality education.', 
        'Huge practical exposure.',
        'Friendly environment ',
        ],

    content2:"",
    imageAlt:"Georgia",
    imageURL:"/assets/Images/mbbs-in-kyrgyzstan/Kyrgyzstan.png"
}

const reasonToStudyData={
    id:"Kyrgyzstan",
    title:"Why Study MBBS in Kyrgyzstan? ",
    content: [
        {title: "No Capitation Fees", description: "Kyrgyzstan medical programs have no capitation fees."},
        {title: "Fulfilling NMC Criteria", description: "MBBS program in Kyrgyzstan is based on a 5 + 1 pattern, thereby fulfilling the criteria of NMC, India."},
        {title: "Cost-Effective", description: "Total tuition fees range from 14 INR lakhs onwards, making it one of the most cost-effective countries to study medicine abroad."},
        {title: "Low Cost of Living", description: "The cost of living in Kyrgyzstan is very low, similar to India, further reducing the financial burden on students."},
        {title: "Visa & Accommodation Support", description: "Universities offer support with visa processes and accommodation, ensuring a smooth transition for students."},
        {title: "Modern & Affordable Education", description: "With affordable education, modern infrastructure, and clinical exposure, Kyrgyzstan remains an attractive MBBS destination."},
        {title: "Global Recognition", description: "All Kyrgyzstan universities are affiliated with recognized bodies like WHO & NMC."},
        {title: "Comprehensive Curriculum", description: "Universities provide a strong curriculum focusing on both theoretical and clinical education."},
        {title: "Research & Clinical Facilities", description: "Universities encourage deep research with access to modern labs and clinical facilities."},
        {title: "Indian Faculty", description: "Most universities have experienced Indian faculties to guide students."},
        {title: "Indian Mess Facilities", description: "Indian mess with Indian chefs is available in most universities, offering home-style meals."},
        {title: "Campus-Based Institutions", description: "Universities in Kyrgyzstan are campus-based, offering a focused academic environment."},
        {title: "FMGE/NExT Coaching", description: "FMGE/NExT coaching is provided by Indian faculty to support licensure exam success."}
      ],      
    darkImg:["1Dark","2Dark","3Dark","4Dark","5Dark","6Dark","2Dark","4Dark","3Dark","5Dark","6Dark","3Dark","3Dark"],
    lightImg:["1","2","3","4","5","6","2","4","3",'5','6','3','3'],
}

const academicData={
    id:"georgia",
    section2:"",
    content:{
        title:"Academic Calender",
        subTitle:"A glimpse of the important dates an aspirant must keep in mind to get on board the best medical colleges in Georgia. The information below is not absolute and may vary university-wise.",
        data:[["Events","Dates"],["Admission Process","Start in the month of May"],["Last date of application","In the month of October"],["Commencement of MBBS course","From October"]],
    }
}

const universities = [
    {
      id: 6,
      name: "CAIMU",
      feesInUSD: 3500,
      hostelFeesInUSD: 500,
      href: "/study-destinations/study-mbbs-in-kyrgyzstan/central-asian-international-medical-university"
    },
    {
      id: 1,
      name: "Jalal-Abad State University",
      feesInUSD: 4200,
      hostelFeesInUSD: 800,
      href: "/study-destinations/study-mbbs-in-kyrgyzstan/jalal-abad-state-university"
    },
    {
      id: 2,
      name: "Jalal-Abad International University",
      feesInUSD: 3500,
      hostelFeesInUSD: 600,
      href: "/study-destinations/study-mbbs-in-kyrgyzstan/jalal-abad-international-university"
    },
    {
      id: 3,
      name: "Osh International State Medical University",
      feesInUSD: 3500,
      hostelFeesInUSD: 600,
      href: "/study-destinations/study-mbbs-in-kyrgyzstan/osh-international-state-medical-university"
    },
    {
      id: 4,
      name: "Osh State University",
      feesInUSD: 4000,
      hostelFeesInUSD: 1500,
      href: "/study-destinations/study-mbbs-in-kyrgyzstan/osh-state-university"
    },
    {
      id: 5,
      name: "Royal Metropolitan University",
      feesInUSD: 3500,
      hostelFeesInUSD: 800,
      href: "/study-destinations/study-mbbs-in-kyrgyzstan/royal-metropolitan-university"
    },
    
  ];



  


const eligibilityData={
    id:"georgia",
    section2:"",
    content:{
        title:"Eligibility Criteria",
        subTitle:"Eligibility Criteria for MBBS in Georgia for Indian students",
        data:[["Criteria","Details"],["Academic Qualification",["Class 12 (equivalent) with Phy, Chem, Bio (PCB).","General Category: Min 50% aggregate in PCB.","SC/ST/OBC: Min 40% aggregate in PCB."]],["NEET Qualification",["NEET qualification is mandatory."]],["Age Limit",["Minimum 17 years as of December 31, 2024."]]],
        href:"string;"
    }
}

const NewPage = () => {
    return(
        <div className="text-smallTextPhone md:text-smallText pt-[15vw]  md:pt-[4vw]">
            {/* Header Part */}
            <Header id={headerData.id} title1={headerData.title} title2={headerData.title2} description={headerData.description} description2={headerData.description2} />

            {/* Description Part */}
            <DescriptionComponent id={descriptionData.id} title1normal={descriptionData.title1normal}  
            content1={descriptionData.content} imageAlt={descriptionData.imageAlt} imageSrc={descriptionData.imageURL} />

            {/* Reasons to Study */}
            {<ReasonsToStudy id={reasonToStudyData.id} title1={reasonToStudyData.title}  content={reasonToStudyData.content} darkImg={reasonToStudyData.darkImg} lightImg={reasonToStudyData.lightImg} />}

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Administrative divisions</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Kyrgyzstan is divided into seven regions. </li>
                    <li>These regions are further subdivided into 44 districts. </li>
                    <li>The districts are further subdivided into rural districts at the lowest level of administration, which include all rural settlements and villages without an associated municipal government.</li>
                    <li>The cities of Bishkek and Osh have status "state importance" and do not belong to any region.</li>
                    <li>Each region is headed by a Regional Governor) appointed by the president. </li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Licence to Practice</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>As per NMC Gazette 2021, students need to take licence from that particular country from which she/he has done his/her MBBS. </li>
                    <li>Kyrgyzstan is following all the guidelines as laid down in the Gazette.</li>
                    <li>Kyrgyzstan is also giving licence to practice to Indian students</li>
                    <li>No licencing exam in Kyrgyzstan for students who clear MBBS.</li>
                    <li>In order to practice in India, post MBBS, students shall also have to undergo through an MCI exam called FMGE.</li>
                    <li>FMGE is held twice a year. </li>
                    <li>FMGE exam is of 300 marks with objective type which is to be conducted online and students need to get only 150 to qualify.</li>                    
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Hostel Facilities in Kyrgyzstan:  </h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>All universities in Kyrgyzstan are providing proper accommodation with all basic necessary facilities. </li>
                    <li>Campus based universities which has everything inside the campus</li>
                    <li>Separate arrangements for boys and girls. </li>
                    <li>Proper security arrangements, reception, library, laundry, cleaning, washing & reading rooms. </li>
                    <li>Unauthorized persons are not allowed inside the hostels. </li>
                    <li>All hostels are well furnished. </li>
                    <li>Separate girls and boys hostel with separate messes.</li>
                    <li>Proper wardens have been placed at all hostels for effective monitoring.</li>
                </ul>

            </section>
           


            {/* Top 5 NMC - Approved  */}

             {/* Geogia Fees */}
           <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw] flex flex-col gap-[2vw] md:gap-[1.5vw]">
           <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]">TOP MEDICAL UNIVERSITIES IN KRYGYZSTAN</h3>
           <table className="w-full border-collapse border  mb-[4vw] md:mb-[2vw] border-black dark:border-borderGreyChosen ">
                <thead className="text-smallTextPhone md:text-regularText text-center font-bold align-top bg-linenChosen">
                  <tr>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Name of University</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]"> Tution Fees in USD/Year</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]"> Hostel Fees in USD/Year</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Know More</td>
                </tr></thead>
            <tbody className="text-smallTextPhone md:text-regularText align-top"> 

                {universities.map((college, index) => (
          <tr key={college.id}>
            
            <td className="border font-bold underline dark:text-black dark:border-b-black dark:border-r-black bg-linenChosen border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">
              {college.href ? <TransitionLink href={college.href}>
                <p className="dark:text-black dark:hover:text-orange-400 duration-300 transition-colors ease-in">
                {college.name}</p>
              </TransitionLink>:
              <>{college.name}</>
              }
              
            </td>
            <td className="border dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.feesInUSD}
            </td>
          
            <td className="border dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.hostelFeesInUSD}
            </td>
          
            <td className="border dark:text-white whitespace-nowrap  border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.href && <TransitionLink href={college.href}>
                Know More
              </TransitionLink>}
            </td>
            
          </tr>
        ))}
              
            </tbody>
          </table>
          </section>
           
           <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />

            {/* Climate and Weather */}
           <div className="text-smallTextPhone md:text-regularText leading-[150%] my-[8vw] md:px-[4vw] md:my-[4vw] flex flex-col gap-[3vw] md:gap-[1.5vw] mx-[6vw] md:mx-[12.5vw]">
                <h3 className="text-h5TextPhone and md:text-h3Text font-bold leading-[120%] mb-[1vw]">Climate and Weather</h3>
                <div className="flex flex-col md:flex-row justify-center gap-[2vw] md:gap-[1.5vw]">
                    <div className="md:w-1/4 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">i.</div>
                        <div className="flex flex-col"><p>The climate of Kyrgyzstan varies regionally. The low-lying Fergana Valley in the southwest is subtropical and extremely hot in summer, with temperatures reaching 40 °C (104 °F). </p></div>
                    </div>
                    <div className="md:w-1/4 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">ii.</div>
                        <div className="flex flex-col"><p>The northern foothills are temperate and the Tian Shan varies from dry continental to polar climate, depending on elevation.</p></div>
                    </div>
                    <div className="md:w-1/4 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">iii.</div>
                        <div className="flex flex-col"><p>In the coldest areas, winter temperatures drop below freezing for approximately 40 days, and even some desert areas experience constant snowfall during this period. </p></div>
                    </div>
                    <div className="md:w-1/4 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">iv.</div>
                        <div className="flex flex-col"><p>In the lowlands the temperature ranges from around −6 °C in January to 24 °C in July.</p></div>
                    </div>
                </div>
           </div>

           <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Class Strength</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The strength of the batch is between 12-15 students. </li>
                    <li>Every student gets the individual attention of the teachers.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">World Class Infrastructure</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>All the Universities in Kyrgyzstan have a world-class structure with ultra-modern gadgets in all hospitals. </li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">International Exposure</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Students get international exposure which help them greatly. Kyrgyzstan provides opportunities for medical students to get exposed to large patient inflow. </li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How much does MBBS cost in Kyrgyzstan</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                <li>Minimum tuition Fees – 3200 USD yearly (total 13-14 lakhs for 5 years)</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How much does Hostel cost in Kyrgyzstan</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Hostel fees – 500 USD yearly (total Rs.2,55,000 for 6 years)</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Medium of instruction: </h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>English is the medium of instruction for MBBS course for international students in Kyrgyzstan.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Kyrgyzstan MBBS duration</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Kyrgyzstan has 5 years MBBS programme and one-year separate internship</li>
                    <li>The programme of MBBS designed as 5 + 1 basis.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Entrance Test for Admission</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>No entrance test for MBBS admission in Kyrgyzstan </li>
                    <li>Admissions are taken on first-cum-first-serve basis. </li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Hassle free admission process</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Kyrgyzstan universities have the best & easy selection process. </li>
                </ul>

            </section>


          

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Documents Required for MBBS in Kyrgyzstan</h3>
                    <p className="text-smallTextPhone text-left md:text-regularText">Following documents are required for MBBS in Kyrgyzstan:</p>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                        <li>Copy of 10/12 Marksheet</li>
                        <li>Valid Indian Passport</li>
                        <li>Passport size photos</li>
                        <li>Neet score card</li>
                        <li>Transfer and Migration Certificate</li>
                    </ul>
    
                    <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Step By Step Complete Admission Process </h3>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                        <li><strong>Step 1:</strong> Submission of documents.</li>
                        <li><strong>Step 2:</strong> Within one week, University issues admission letter.</li>
                        <li><strong>Step 3:</strong> Invitation to be applied/received</li>
                        <li><strong>Step 4:</strong> E-visa to be applied </li>
                        <li><strong>Step 5:</strong> Air ticket to be booked </li>
                        <li><strong>Step 6:</strong> Departure to be planned</li>
                    </ul>
    
                    <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Travel time from India to Kyrgyzstan </h3>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                        <li>3-hour air journey from India to Bishkek, capital of Kyrgyzstan</li>
                    </ul>
                </section>
        </div>
    )
}

export default NewPage;