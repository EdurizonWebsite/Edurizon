import React from "react";
import ListedTable from "@/components/studyDestinationComponents/ListedTable";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";
import CallingBox from "@/components/studyDestinationComponents/header/callingBox";

const COLLEGE_NAME = "Ramaiah Medical College";

const atAGlanceData = {
  id: "karnataka",
  section2: "highlight",
  content: {
    title: "Ramaiah Medical College at a Glance",
    subTitle: "",
    data: [
      ["Particular", "Details"],
      ["College Name", COLLEGE_NAME],
      ["Location", "Bangalore, Karnataka"],
      ["Year of Inception", "1979"],
      ["Management", "Private"],
      ["University", "Ramaiah University of Applied Sciences (RUAS) from AY 2022–23"],
      ["Recognition", "National Medical Commission (NMC)"],
      ["MBBS Seats", "200 per year"],
      ["PG Seats (MD/MS)", "192 per year across 23 departments"],
      ["Super-Specialty Seats (DM/M.Ch)", "56 per year across 13 departments"],
      ["Teaching Hospital", "Ramaiah Medical College Hospital (est. 1984)"],
      ["Hospital Capacity", "Approximately 1,392 beds"],
      ["Campus", "65 acres"],
      ["Admission", "NEET-UG through KEA counselling"],
      ["NIRF Ranking (2024)", "46 among medical colleges in India"],
      ["India Today Ranking (2024)", "26 among medical colleges in India"],
    ],
  },
};

const feeStructureData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "MBBS Fee Structure 2026–27",
    subTitle: "Ramaiah Medical College, Bangalore",
    data: [
      ["Seat Category", "MBBS Fee"],
      ["Government Quota", "As per the Government of Karnataka fee orders"],
      ["Private Quota", "₹25,00,000 per annum"],
      ["NRI / Other Quota", "₹45,00,000 per annum"],
    ],
  },
};

const seatIntakeData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "Seat Breakdown Summary",
    subTitle: "Undergraduate, postgraduate and super-specialty intake",
    data: [
      ["Programme", "Seats per year", "Details"],
      ["Undergraduate (UG/MBBS)", "200", "MBBS seats per year"],
      ["Postgraduate (PG/MD/MS)", "192", "Distributed across 23 departments"],
      ["Super-Specialty (DM/M.Ch)", "56", "Distributed across 13 departments"],
    ],
  },
};

const eligibilityData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "Eligibility Criteria",
    subTitle: "MBBS admission at Ramaiah Medical College",
    data: [
      ["Criteria", "Details"],
      [
        "Academic Qualification",
        [
          "Passed 2nd PUC / Class 12 / equivalent examination",
          "English as one of the subjects/languages",
        ],
      ],
      [
        "Minimum Marks",
        "50% aggregate in Physics, Chemistry and Biology, with applicable relaxation for eligible reserved categories",
      ],
      ["NEET-UG", "Qualification in NEET-UG is mandatory"],
      ["Category Requirements", "Compliance with eligibility and category requirements applicable to counselling"],
    ],
  },
};

const counsellingData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "Karnataka MBBS Counselling Process",
    subTitle: "Admission through KEA counselling",
    data: [
      ["Step", "Details"],
      ["Step 1", "Qualify NEET-UG and meet eligibility criteria"],
      ["Step 2", "Register and complete KEA application/form filling"],
      ["Step 3", "Complete document verification as specified by KEA"],
      ["Step 4", "Participate in choice filling and college selection"],
      ["Step 5", "Seat allotment based on NEET rank, category and preferences"],
      ["Step 6", "Fee payment, admission and reporting within stipulated deadline"],
    ],
  },
};

const services = [
  {
    icon: "/assets/Images/Icons/feesIcon.svg",
    text: "Private Quota Fee",
    label: "₹25,00,000/Year",
  },
  {
    icon: "/assets/Images/Icons/ExperienceIcon.svg",
    text: "Recognition",
    label: "NMC Approved",
  },
  {
    icon: "/assets/Images/Icons/TieUpsIcon.svg",
    text: "City & State",
    label: "Bangalore, Karnataka",
  },
  {
    icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
    text: "MBBS Seats",
    label: "200",
  },
];

const whyChooseItems = [
  "Established in 1979 with NMC recognition",
  "200 MBBS seats with attached 1,392-bed teaching hospital",
  "Constituent college of Ramaiah University of Applied Sciences",
  "NIRF rank 46 and India Today rank 26 among medical colleges in 2024",
  "65-acre campus with modern academic and clinical facilities",
  "Advanced Learning Centre, skill laboratory and Integrated Museum",
  "5,360+ publications with patents filed, granted and published",
  "Broad-specialty and super-specialty clinical exposure",
];

const museumDepartments = [
  "Anatomy",
  "Microbiology",
  "Pathology",
  "Pharmacology",
  "Forensic Medicine",
  "Medicine",
];

const superSpecialtyServices = [
  "Endocrinology",
  "Cardiology",
  "Surgical Gastroenterology",
  "Pulmonary & Critical Care Medicine",
  "Other specialized clinical services",
];

const documentsRequired = [
  "NEET-UG scorecard",
  "NEET-UG admit card",
  "Class 10 certificate/marks card",
  "Class 12 / 2nd PUC marks card",
  "Transfer certificate",
  "Migration certificate, where applicable",
  "Identity proof",
  "Passport-size photographs",
  "Category certificate, where applicable",
  "EWS certificate, where applicable",
  "Domicile documents, where required",
  "Medical fitness certificate",
  "Counselling allotment letter",
  "Original academic documents",
  "Other documents specified by the counselling authority",
];

const RamaiahMedicalCollegePage = () => {
  return (
    <>
      <Head>
        <title>
          Ramaiah Medical College Bangalore | MBBS Fees, Admission & Ranking | Edurizon
        </title>
        <meta
          name="description"
          content="Study MBBS at Ramaiah Medical College, Bangalore. Explore 200 MBBS seats, 2026–27 fees, 1,392-bed hospital, NIRF ranking, eligibility, KEA counselling and admission guidance."
        />
        <meta
          name="keywords"
          content="Ramaiah Medical College Bangalore, RMC MBBS fees, MS Ramaiah Medical College admission, MBBS in Bangalore, Karnataka medical college"
        />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow" />
        <link
          rel="alternate"
          href="https://www.edurizon.in/mbbs-in-india/karnataka/ramaiah-medical-college"
          hrefLang="en-in"
        />
      </Head>

      <div>
        <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw] md:pt-[8vw]">
          <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
            <Breadcrumbs />
          </div>
          <div className="bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black">
            <Image
              className="w-full md:w-[40.625vw] h-full object-cover"
              src="/assets/Images/mbbs-in-india/states/karnataka/ramaiah-medical-college.png"
              alt="Ramaiah Medical College, Bangalore"
              width={650}
              height={550}
            />
            <div className="relative mx-[6vw] md:mx-0 py-[4vw]">
              <h1 className="font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw] ">
                {COLLEGE_NAME}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw] md:gap-[.75vw] items-center justify-center">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={64}
                      height={64}
                      className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative overflow-hidden shrink-0"
                    />
                    <p className="text-tinyTextPhone md:text-tinyText text-center leading-[150%]">
                      {item.text}
                      <br />
                      <span className="font-semibold">{item.label}</span>
                    </p>
                  </div>
                ))}
              </div>
              <CallingBox />
            </div>
          </div>
        </div>

        <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Overview</h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              Ramaiah Medical College (RMC), Bangalore, was established in 1979 with the vision of
              providing quality medical education and developing competent healthcare professionals.
            </li>
            <li>
              The college is a constituent college of Ramaiah University of Applied Sciences (RUAS)
              from the academic year 2022–23 onwards and is recognized by the National Medical
              Commission (NMC).
            </li>
            <li>
              With a strong emphasis on academics, clinical training, research and professional
              development, RMC combines rigorous medical education with practical clinical experience.
            </li>
            <li>
              The college is equipped with modern infrastructure, technology-enabled classrooms,
              advanced laboratories, clinical learning facilities and skill-development resources.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            A Legacy of Medical Education
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              The Ramaiah Group of Institutions was founded by Late Sri. M. S. Ramaiah with the
              vision of creating institutions that contribute meaningfully to education and society.
            </li>
            <li>
              Since its establishment, Ramaiah Medical College has developed into a prominent
              medical education institution focused on academic excellence, clinical competence,
              research and professional ethics.
            </li>
            <li>
              The college aims to develop doctors with strong medical knowledge as well as the
              ability to communicate, collaborate, make informed clinical decisions and respond to
              patient and community needs.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            About {COLLEGE_NAME}
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              <strong>Teaching Hospital:</strong> Ramaiah Medical College Hospital, established in
              1984, with approximately 1,392 beds.
            </li>
            <li>
              <strong>University:</strong> Constituent college of Ramaiah University of Applied
              Sciences (RUAS) from AY 2022–23.
            </li>
            <li>
              <strong>Campus:</strong> 65-acre campus with library, hostel, laboratories, cafeteria,
              sports complex, counselling cell, auditorium and student tracking security.
            </li>
            <li>
              <strong>Rankings:</strong> Ranked 46th by NIRF (2024) and 26th by India Today (2024)
              among medical colleges in India.
            </li>
          </ul>
        </section>

        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw] text-left">
              Why Choose Ramaiah Medical College?
            </h3>
            <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
              {whyChooseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Image
                        src="/assets/Images/why-chose.png"
            className="ml-auto w-full md:w-[32.5vw] h-auto"
            width={690}
            height={690}
            alt="MBBS in Karnataka"
          />
        </div>

        <ListedTable
          id={atAGlanceData.id}
          section2={atAGlanceData.section2}
          content={atAGlanceData.content}
        />

        <ListedTable
          id={seatIntakeData.id}
          section2={seatIntakeData.section2}
          content={seatIntakeData.content}
        />

        <ListedTable
          id={feeStructureData.id}
          section2={feeStructureData.section2}
          content={feeStructureData.content}
        />

        <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            MBBS Programme
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              The MBBS programme covers pre-clinical, para-clinical and clinical disciplines in
              accordance with applicable NMC guidelines.
            </li>
            <li>
              Students undergo classroom teaching, lectures, tutorials, practical sessions,
              laboratory training, clinical postings, hospital-based training and community/field-based
              learning.
            </li>
            <li>
              The curriculum focuses on integrated learning so students understand how medical
              disciplines work together in diagnosis, management and treatment.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Teaching Hospital &amp; Clinical Exposure
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>Approximately 1,392-bed teaching hospital operating 24 hours a day, 7 days a week</li>
            <li>Emergency and inpatient services with broad-specialty and super-specialty departments</li>
            <li>Clinical wards, outpatient departments and rural and urban field practice areas</li>
            <li>
              Super-specialty services include {superSpecialtyServices.join(", ")}
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Modern Infrastructure &amp; Learning Facilities
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>Technology-enabled classrooms, advanced laboratories and a skill laboratory</li>
            <li>Advanced Learning Centre, clinical training facilities and teaching hospital</li>
            <li>Library and learning resources with co-curricular and extracurricular facilities</li>
            <li>
              Integrated Museum covering {museumDepartments.join(", ")} with specimens, charts and
              case-based learning resources
            </li>
            <li>
              Museum features include a common display area, student feedback area, self-learning
              area, tabletop touchscreen 3D simulator, interactive simulator, LCD kiosks and about
              10,000 sq. ft. of museum space
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Research, Rankings &amp; Recognition
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>5,360+ publications with 15 patents filed, 11 granted and 11 published</li>
            <li>NMC recognition and NABH-accredited institutional initiatives</li>
            <li>Accredited centre for Pharmacovigilance in India</li>
            <li>Regional Centre for training in the Basic Course in Medical Education (BCME)</li>
            <li>
              Regional Centre for the Curriculum Implementation Support Programme (CISP) under NMC
              initiatives
            </li>
            <li>Ranked 50th in India in 2025, as stated by the institution</li>
          </ul>
        </section>

        <ListedTable
          id={eligibilityData.id}
          section2={eligibilityData.section2}
          content={eligibilityData.content}
        />
        <ListedTable
          id={counsellingData.id}
          section2={counsellingData.section2}
          content={counsellingData.content}
        />

        <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Documents Required for MBBS Admission
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            {documentsRequired.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Get MBBS Admission Guidance from Edurizon
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>NEET counselling guidance and Karnataka medical counselling support</li>
            <li>MBBS college selection and Ramaiah admission guidance</li>
            <li>Seat-category information, fee structure analysis and college comparison</li>
            <li>Eligibility assessment, document preparation, and reporting guidance</li>
          </ul>
          <p className="text-smallTextPhone md:text-regularText text-left">
            Looking for MBBS admission in Bangalore? Connect with Edurizon Pvt. Ltd. for
            personalized guidance on MBBS admission at Ramaiah Medical College and other medical
            colleges in Karnataka.
          </p>
        </section>
      </div>
    </>
  );
};

export default RamaiahMedicalCollegePage;
