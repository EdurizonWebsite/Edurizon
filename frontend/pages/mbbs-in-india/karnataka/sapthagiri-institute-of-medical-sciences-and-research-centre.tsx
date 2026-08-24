import React from "react";
import ListedTable from "@/components/studyDestinationComponents/ListedTable";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";
import CallingBox from "@/components/studyDestinationComponents/header/callingBox";

const COLLEGE_NAME =
  "SIMS & Research Centre";

const atAGlanceData = {
  id: "karnataka",
  section2: "highlight",
  content: {
    title: "Sapthagiri Medical College at a Glance",
    subTitle: "",
    data: [
      ["Particular", "Details"],
      ["College Name", COLLEGE_NAME],
      ["Location", "Bengaluru, Karnataka"],
      ["Year of Inception", "2011"],
      ["Management", "Private"],
      ["Current University", "Sapthagiri NPS University, Bengaluru"],
      ["Previous Affiliation", "Rajiv Gandhi University of Health Sciences (RGUHS)"],
      ["MBBS Seats", "250"],
      ["Course Duration", "5.5 years including internship"],
      ["Teaching Hospital", "Sapthagiri Hospital (~1,070 beds)"],
      ["Admission", "NEET-UG through KEA counselling"],
      [
        "Address",
        "15, Hesarghatta Road, Navy Layout, Chikkasandra, Chikkabanavara, Bengaluru – 560090",
      ],
    ],
  },
};

const feeStructureData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "MBBS Fee Structure 2025–26",
    subTitle: "Sapthagiri Institute of Medical Sciences, Bangalore",
    data: [
      ["Seat Category", "Seats", "Tuition Fee", "Skill Lab Fee", "Misc. Fee"],
      ["Government Merit Quota – Karnataka Domicile", "100", "₹1,41,621", "₹30,000", "₹15,000"],
      ["Private GMP Quota", "50", "₹22,00,000", "₹30,000", "₹15,000"],
      ["Private Open Quota", "50", "₹22,00,000", "₹30,000", "₹15,000"],
      ["Management – Indian/NRI", "50", "₹45,00,000", "₹30,000", "₹15,000"],
    ],
  },
};

const eligibilityData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "Eligibility Criteria",
    subTitle: "MBBS admission at Sapthagiri Institute of Medical Sciences",
    data: [
      ["Criteria", "Details"],
      ["Academic Qualification", ["Completion of 10+2 / equivalent", "Physics, Chemistry and Biology/Biotechnology as prescribed"]],
      ["Minimum Marks", "Fulfilment of applicable minimum qualifying marks"],
      ["Age", "Meeting the prescribed age requirement"],
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
    text: "Govt Quota Fee",
    label: "₹1,41,621/Year",
  },
  {
    icon: "/assets/Images/Icons/ExperienceIcon.svg",
    text: "Recognition",
    label: "NMC Approved",
  },
  {
    icon: "/assets/Images/Icons/TieUpsIcon.svg",
    text: "City & State",
    label: "Bengaluru, Karnataka",
  },
  {
    icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
    text: "MBBS Seats",
    label: "250",
  },
];

const whyChooseItems = [
  "250 MBBS seats with NMC-recognised intake",
  "Large 1,070-bed teaching hospital supporting clinical education",
  "NABH-accredited hospital (Certificate H-2024-1311)",
  "Bangalore location with strong healthcare ecosystem",
  "Integrated medical education under Sapthagiri NPS University",
  "Postgraduate and super-specialty learning environment",
  "Active research and academic programmes",
  "Community-oriented healthcare exposure",
];

const preClinicalDepartments = [
  "Anatomy",
  "Physiology",
  "Biochemistry",
];

const paraClinicalDepartments = [
  "Pathology",
  "Pharmacology",
  "Microbiology",
  "Forensic Medicine",
  "Community Medicine",
];

const clinicalDepartments = [
  "General Medicine",
  "General Surgery",
  "Obstetrics & Gynaecology",
  "Paediatrics",
  "Orthopaedics",
  "Ophthalmology",
  "ENT",
  "Dermatology",
  "Psychiatry",
  "Anaesthesiology",
  "Radiodiagnosis",
  "Pulmonary Medicine",
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

const SapthagiriInstitutePage = () => {
  return (
    <>
      <Head>
        <title>
          Sapthagiri Institute of Medical Sciences Bangalore | MBBS Fees & Admission | Edurizon
        </title>
        <meta
          name="description"
          content="Study MBBS at Sapthagiri Institute of Medical Sciences & Research Centre, Bangalore. Explore fees, eligibility, 250 MBBS seats, NABH hospital, KEA counselling and admission guidance."
        />
        <meta
          name="keywords"
          content="Sapthagiri Medical College Bangalore, SIMSRC MBBS fees, Sapthagiri Institute of Medical Sciences admission, MBBS in Bangalore, Karnataka medical college"
        />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow" />
        <link
          rel="alternate"
          href="https://www.edurizon.in/mbbs-in-india/karnataka/sapthagiri-institute-of-medical-sciences-and-research-centre"
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
              src="/assets/Images/mbbs-in-india/states/karnataka/sims.png"
              alt="Sapthagiri Institute of Medical Sciences, Bangalore"
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
              Sapthagiri Institute of Medical Sciences &amp; Research Centre (SIMSRC), Bangalore,
              is a private medical institution located on Hesaraghatta Main Road in Bengaluru,
              Karnataka.
            </li>
            <li>
              Established under the Sri Srinivasa Educational &amp; Charitable Trust, the institution
              provides undergraduate and postgraduate medical education along with tertiary and
              super-specialty healthcare services.
            </li>
            <li>
              The medical college is part of Sapthagiri NPS University, Bengaluru, established under
              the Sapthagiri NPS University Act, 2022.
            </li>
            <li>
              NMC identifies SIMSRC as a private medical college established in 2011, with an MBBS
              intake of 250 seats.
            </li>
            <li>
              The college combines medical education with hospital-based clinical training through
              laboratories, lecture facilities, clinical skills training, research activities and
              other learning resources.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            About Karnataka &amp; Bengaluru
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              Karnataka is one of India&apos;s leading destinations for medical education with a strong
              network of government and private medical colleges.
            </li>
            <li>
              Bengaluru is a major education, technology and healthcare hub with excellent
              connectivity and student-friendly infrastructure.
            </li>
            <li>
              Students benefit from exposure to multispecialty hospitals, research environments and
              diverse clinical cases across the city.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            About {COLLEGE_NAME}
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              <strong>Teaching Hospital:</strong> Sapthagiri Hospital with approximately 1,070 beds
              supporting clinical education and community healthcare.
            </li>
            <li>
              <strong>University:</strong> Part of Sapthagiri NPS University, Bengaluru; previously
              affiliated to Rajiv Gandhi University of Health Sciences (RGUHS).
            </li>
            <li>
              <strong>Programme:</strong> MBBS is a 5½-year programme including compulsory internship.
            </li>
            <li>
              <strong>Clinical Training:</strong> Pre-clinical, para-clinical and clinical disciplines
              with practical laboratory training, hospital postings and community-oriented medical
              education.
            </li>
            <li>
              <strong>Accreditation:</strong> NABH Certificate H-2024-1311 valid from 11 January 2024
              to 10 January 2028.
            </li>
          </ul>
        </section>

        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw] text-left">
              Why Choose Sapthagiri for MBBS?
            </h3>
            <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
              {whyChooseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Image
            src="/assets/Images/mbbs-in-india/states/karnataka.png"
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
          id={feeStructureData.id}
          section2={feeStructureData.section2}
          content={feeStructureData.content}
        />

        <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Sapthagiri NPS University
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              Sapthagiri Institute of Medical Sciences is part of the academic ecosystem of Sapthagiri
              NPS University, Bengaluru.
            </li>
            <li>
              The university was established through Karnataka Act No. 18 of 2023 and is promoted by
              the Sri Srinivasa Educational &amp; Charitable Trust.
            </li>
            <li>
              The School of Medicine &amp; Health Sciences offers MBBS, MD/MS specializations and
              selected DM/M.Ch programmes.
            </li>
            <li>
              Students should note that older third-party listings may still show RGUHS affiliation;
              the current NMC listing identifies Sapthagiri NPS University.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Teaching Hospital &amp; Clinical Training
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>Approximately 1,070-bed multispecialty teaching hospital</li>
            <li>Outpatient departments, inpatient wards and emergency services</li>
            <li>Intensive-care facilities, operation theatres and diagnostic services</li>
            <li>Blood bank, pharmacy, physiotherapy and clinical support services</li>
            <li>
              Exposure across General Medicine, Surgery, OBG, Paediatrics, Orthopaedics,
              Ophthalmology, ENT, Dermatology, Psychiatry, Anaesthesiology, Radiodiagnosis and more
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Academic Departments
          </h3>
          <p className="text-smallTextPhone md:text-regularText text-left mb-[2vw]">
            <strong>Pre-Clinical:</strong> {preClinicalDepartments.join(", ")}
          </p>
          <p className="text-smallTextPhone md:text-regularText text-left mb-[2vw]">
            <strong>Para-Clinical:</strong> {paraClinicalDepartments.join(", ")}
          </p>
          <p className="text-smallTextPhone md:text-regularText text-left mb-[4vw]">
            <strong>Clinical:</strong> {clinicalDepartments.join(", ")}
          </p>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Infrastructure &amp; Student Facilities
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>Lecture halls, teaching laboratories and departmental facilities</li>
            <li>Clinical skills training, library resources and diagnostic facilities</li>
            <li>Hostel accommodation with separate arrangements for male and female students</li>
            <li>Dining facilities, sports, recreation and student support services</li>
            <li>Seminars, workshops, conferences and research activities</li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Postgraduate &amp; Super-Specialty Programmes
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>MD/MS programmes across Anatomy, Medicine, Surgery, Paediatrics, Radiodiagnosis and other specialties</li>
            <li>Super-specialty programmes including DM Cardiology, DM Medical Gastroenterology, DM Endocrinology, M.Ch Surgical Oncology and M.Ch Urology</li>
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
            <li>MBBS college selection and Sapthagiri admission guidance</li>
            <li>Seat-category information, fee structure analysis and college comparison</li>
            <li>Eligibility assessment, document preparation, and reporting guidance</li>
          </ul>
          <p className="text-smallTextPhone md:text-regularText text-left">
            Looking for MBBS admission in Bangalore? Connect with Edurizon Pvt. Ltd. for
            personalized guidance on MBBS admission at Sapthagiri Institute of Medical Sciences and
            other medical colleges in Karnataka.
          </p>
        </section>
      </div>
    </>
  );
};

export default SapthagiriInstitutePage;
