import React from "react";
import ListedTable from "@/components/studyDestinationComponents/ListedTable";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";
import CallingBox from "@/components/studyDestinationComponents/header/callingBox";

const COLLEGE_NAME = "Akash Institute of Medical Sciences & Research Centre";

const atAGlanceData = {
  id: "karnataka",
  section2: "highlight",
  content: {
    title: "Akash Medical College at a Glance",
    subTitle: "",
    data: [
      ["Particular", "Details"],
      ["College Name", COLLEGE_NAME],
      ["Location", "Devanahalli, Bengaluru, Karnataka"],
      ["Year of Inception", "2016"],
      ["Management", "Private"],
      ["Affiliated University", "Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka"],
      ["MBBS Intake", "250 seats"],
      ["MBBS Duration", "4.5 years + 1 year compulsory rotating internship"],
      ["Admission", "NEET-UG through KEA counselling"],
      ["Teaching Hospital", "Akash Hospital"],
      ["Hospital Location", "Prasannahalli Road, Devanahalli"],
      ["Clinical Training", "Hospital postings, practical training and simulation-based learning"],
      ["College Code", "M078"],
      ["Campus Location", "Near Kempegowda International Airport, Bengaluru"],
      [
        "Address",
        "Prasannahalli Road, Devanahalli, Near Kempegowda International Airport, Bengaluru – 562110, Karnataka",
      ],
    ],
  },
};

const feeStructureData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "MBBS Fee Structure",
    subTitle: "Akash Institute of Medical Sciences & Research Centre, Bangalore",
    data: [
      ["Seat Category", "Annual Tuition Fee"],
      ["Government / G Quota", "₹1,53,571"],
      ["Private / P Quota", "₹12,00,117"],
      ["Other / Management / Q Quota", "₹36,11,950"],
      ["NRI Quota", "₹36,11,950"],
    ],
  },
};

const seatIntakeData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "MBBS Seat Intake 2026–27",
    subTitle: "NMC UG MBBS seat matrix for Academic Year 2026–27",
    data: [
      ["Course", "Annual Intake"],
      ["MBBS", "250 Seats"],
    ],
  },
};

const eligibilityData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "Eligibility Criteria",
    subTitle: "MBBS admission at Akash Institute of Medical Sciences",
    data: [
      ["Criteria", "Details"],
      ["Academic Qualification", ["Completion of 10+2 / equivalent", "Physics, Chemistry and Biology as prescribed"]],
      ["Minimum Marks", "Fulfilment of applicable minimum qualifying marks"],
      ["NEET-UG", "Qualification in NEET-UG is mandatory"],
      [
        "Counselling",
        "Admissions, including NRI and Management quota seats, are allotted through online counselling conducted by KEA based on NEET merit",
      ],
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
    label: "₹1,53,571/Year",
  },
  {
    icon: "/assets/Images/Icons/ExperienceIcon.svg",
    text: "Recognition",
    label: "NMC Approved",
  },
  {
    icon: "/assets/Images/Icons/TieUpsIcon.svg",
    text: "City & State",
    label: "Devanahalli, Karnataka",
  },
  {
    icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
    text: "MBBS Seats",
    label: "250",
  },
];

const whyChooseItems = [
  "250 MBBS seats as per the NMC 2026–27 seat matrix",
  "MBBS programme established in 2016",
  "1,085 teaching beds and 105 non-teaching beds as per the latest Citizen Charter",
  "Centre for Advanced Simulation for practical skill development",
  "North Bengaluru location in Devanahalli, near Kempegowda International Airport",
  "Undergraduate and postgraduate medical education environment",
  "Multispecialty clinical exposure at the attached teaching hospital",
  "Research, CME programmes, seminars, conferences and community-based learning",
];

const preClinicalDepartments = ["Anatomy", "Physiology", "Biochemistry"];

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
  "Respiratory Medicine",
  "Emergency Medicine",
  "Other clinical and allied specialties",
];

const pgCourses = [
  "MD Anaesthesiology",
  "MD Community Medicine",
  "MD Dermatology",
  "MD General Medicine",
  "MD Pathology",
  "MD Paediatrics",
  "MD Pharmacology",
  "MD Radiodiagnosis",
  "MS General Surgery",
  "MS Orthopaedics",
  "MS Ophthalmology",
  "MS ENT",
  "MS Obstetrics & Gynaecology",
];

const documentsRequired = [
  "NEET-UG scorecard",
  "NEET-UG admit card",
  "Class 10 marks card/certificate",
  "Class 12 marks card",
  "Transfer Certificate",
  "Migration Certificate, where applicable",
  "Identity proof",
  "Passport-size photographs",
  "Category certificate, if applicable",
  "EWS certificate, if applicable",
  "Domicile documents, where required",
  "Medical fitness certificate",
  "Counselling allotment letter",
  "Fee-payment receipt",
  "Original academic certificates",
  "Other documents specified by KEA/NMC or the counselling authority",
];

const AkashInstitutePage = () => {
  return (
    <>
      <Head>
        <title>
          Akash Institute of Medical Sciences Bangalore | MBBS Fees & Admission | Edurizon
        </title>
        <meta
          name="description"
          content="Study MBBS at Akash Institute of Medical Sciences & Research Centre, Devanahalli, Bangalore. Explore 250 MBBS seats, fees, 1,085-bed hospital, simulation centre, KEA counselling and admission guidance."
        />
        <meta
          name="keywords"
          content="Akash Medical College Bangalore, AIMSRC MBBS fees, Akash Institute of Medical Sciences admission, MBBS in Devanahalli, Karnataka medical college"
        />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow" />
        <link
          rel="alternate"
          href="https://www.edurizon.in/mbbs-in-india/karnataka/akash-institute-of-medical-sciences-and-research-centre"
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
              src="/assets/Images/mbbs-in-india/states/karnataka/akash.png"
              alt="Akash Institute of Medical Sciences & Research Centre, Bangalore"
              width={650}
              height={550}
            />
            <div className="relative mx-[6vw] md:mx-0 py-[4vw]">
              <div className="md:w-[40vw]">
              <h1 className="font-bold text-h3TextPhone md:text-h3Text leading-[120%] pr-[2vw] text-left mb-[2vw] md:mb-[1.5vw] ">
                {COLLEGE_NAME}
              </h1>
              </div>
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
              Akash Institute of Medical Sciences &amp; Research Centre (AIMSRC), Bangalore is a
              private medical college located in Devanahalli, Bengaluru Rural, Karnataka, close to
              Kempegowda International Airport.
            </li>
            <li>
              The medical college began its MBBS programme in 2016 and is affiliated with Rajiv
              Gandhi University of Health Sciences (RGUHS), Karnataka.
            </li>
            <li>
              The National Medical Commission currently lists the institution as a private medical
              college in Karnataka, with an annual MBBS intake of 250 seats for 2026–27.
            </li>
            <li>
              AIMSRC combines classroom teaching with practical laboratory work, hospital postings,
              community-based learning and supervised clinical training.
            </li>
            <li>
              The college has a dedicated Centre for Advanced Simulation for practising clinical
              skills before and alongside hospital exposure.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Establishment &amp; Background
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              The institution was established to provide medical education along with comprehensive
              healthcare services in the Devanahalli region of Bengaluru.
            </li>
            <li>
              Official documents identify 2016 as the year of inception and the first MBBS batch,
              while the attached hospital was registered earlier.
            </li>
            <li>
              The college operates under the Akash educational group and has developed undergraduate,
              postgraduate, research, clinical and skill-based training infrastructure.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            About {COLLEGE_NAME}
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              <strong>Teaching Hospital:</strong> Akash Hospital on Prasannahalli Road, Devanahalli,
              with 1,085 teaching beds and 105 non-teaching beds as per the latest Citizen Charter.
            </li>
            <li>
              <strong>University:</strong> Affiliated to Rajiv Gandhi University of Health Sciences
              (RGUHS), Karnataka.
            </li>
            <li>
              <strong>Programme:</strong> MBBS is a 5.5-year programme comprising 4.5 years of
              academic study and one year of compulsory rotating internship.
            </li>
            <li>
              <strong>College Code:</strong> M078.
            </li>
          </ul>
        </section>

        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw] text-left">
              Why Choose Akash Institute of Medical Sciences?
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
            Teaching Hospital &amp; Clinical Training
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              Akash Hospital is a multispecialty and tertiary-care facility supporting medical
              education as well as patient services.
            </li>
            <li>1,085 teaching beds and 105 non-teaching beds, including emergency, ICU and private wards</li>
            <li>105-bed ICU facility and 24×7 casualty and emergency services</li>
            <li>
              Modular operation theatres, central laboratory, blood bank, CT, MRI, X-ray, ultrasound,
              colour Doppler, dialysis, endoscopy, bronchoscopy, rehabilitation, pharmacy and ambulance
              services
            </li>
            <li>
              Structured clinical postings across Medicine, Surgery, Orthopaedics, Paediatrics and
              Obstetrics &amp; Gynaecology
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Centre for Advanced Simulation
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              A skill-learning facility equipped with advanced mannequins and simulation technology.
            </li>
            <li>
              Helps students practise basic clinical procedures, patient assessment, emergency
              response, communication, clinical decision-making, teamwork and patient-safety
              practices.
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
            Postgraduate Courses
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            {pgCourses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Infrastructure, Research &amp; Campus Life
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              Lecture halls, teaching laboratories, central research facilities, skill laboratories,
              library, auditorium and hospital-based teaching facilities
            </li>
            <li>
              Faculty research, student projects, CME programmes, conferences, seminars and
              publications
            </li>
            <li>
              Community medicine outreach including health check-up camps, vaccination drives,
              diabetes screening and preventive-health initiatives
            </li>
            <li>
              Hostel facilities with separate accommodation for male and female students, furnished
              rooms, dining, study areas and common spaces
            </li>
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
            <li>MBBS college selection and Akash admission guidance</li>
            <li>Seat-category information, fee structure analysis and college comparison</li>
            <li>Eligibility assessment, document preparation, and reporting guidance</li>
          </ul>
          <p className="text-smallTextPhone md:text-regularText text-left">
            Looking for MBBS admission in Bangalore? Connect with Edurizon Pvt. Ltd. for
            personalized guidance on MBBS admission at Akash Institute of Medical Sciences &amp;
            Research Centre and other medical colleges in Karnataka.
          </p>
        </section>
      </div>
    </>
  );
};

export default AkashInstitutePage;
