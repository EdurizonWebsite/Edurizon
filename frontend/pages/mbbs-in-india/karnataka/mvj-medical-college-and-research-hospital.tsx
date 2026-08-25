import React from "react";
import ListedTable from "@/components/studyDestinationComponents/ListedTable";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcumbs";
import Head from "next/head";
import CallingBox from "@/components/studyDestinationComponents/header/callingBox";

const COLLEGE_NAME = "MVJ Medical College & Research Hospital";

const atAGlanceData = {
  id: "karnataka",
  section2: "highlight",
  content: {
    title: "MVJ Medical College at a Glance",
    subTitle: "",
    data: [
      ["Particular", "Details"],
      ["College Name", COLLEGE_NAME],
      ["Location", "Hoskote, Bengaluru Rural District, Karnataka"],
      ["Year of Inception", "2001"],
      ["Management", "Private"],
      ["University", "Rajiv Gandhi University of Health Sciences (RGUHS)"],
      ["MBBS Seats – 2026–27", "250"],
      ["Course Duration", "5.5 years including internship"],
      ["Teaching Hospital", "MVJ Medical College & Research Hospital"],
      ["Hospital Beds", "1,100"],
      ["Emergency Beds", "30"],
      ["Operation Theatres", "12"],
      ["ICUs", "8"],
      ["Hospital Services", "24/7"],
      ["Admission", "NEET-UG through KEA counselling"],
      ["Hospital Accreditation", "NABH Entry-Level Certified and ISO Accredited, as stated by MVJ"],
      [
        "Address",
        "Dandupalya, 30th KM Milestone, National Highway 75, Kolathur Post, Hoskote Taluk, Bengaluru Rural District, Karnataka – 562114",
      ],
    ],
  },
};

const feeStructureData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "MBBS Fee Structure 2025–26",
    subTitle: "MVJ Medical College & Research Hospital, Bangalore",
    data: [
      ["Seat Category", "Tuition Fee", "Other College Fee"],
      ["NEET Government", "₹1,41,621", "₹60,000"],
      ["NEET Private", "₹11,88,167", "₹60,000"],
      ["NEET Others", "₹40,00,000", "—"],
    ],
  },
};

const eligibilityData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "Eligibility Criteria",
    subTitle: "MBBS admission at MVJ Medical College",
    data: [
      ["Criteria", "Details"],
      ["Academic Qualification", ["Physics, Chemistry and Biology must be studied", "Fulfilment of the prescribed age requirement"]],
      ["Minimum Marks", "Candidate must satisfy the minimum qualifying marks in PCB"],
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

const seatIntakeData = {
  id: "karnataka",
  section2: "",
  content: {
    title: "MBBS Seat Intake 2026–27",
    subTitle: "NMC UG seat matrix dated 13 July 2026",
    data: [
      ["Course", "Academic Year", "MBBS Seats"],
      ["MBBS", "2026–27", "250"],
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
    label: "Hoskote, Karnataka",
  },
  {
    icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
    text: "MBBS Seats",
    label: "250",
  },
];

const whyChooseItems = [
  "250 MBBS seats as per NMC UG seat matrix 2026–27",
  "1,100-bed teaching hospital with 24/7 services",
  "NABH entry-level certified and ISO accredited hospital, as stated by MVJ",
  "27-acre campus on NH-75 at Dandupalya, Hoskote",
  "Affiliation with Rajiv Gandhi University of Health Sciences",
  "3D interactive medical learning platform",
  "Dedicated skill laboratory for clinical training",
  "MVJ Neurosciences Centre and selected super-specialty services",
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
  "Other clinical specialties",
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

const MvjMedicalCollegePage = () => {
  return (
    <>
      <Head>
        <title>
          MVJ Medical College Bangalore | MBBS Fees, Admission & Counselling | Edurizon
        </title>
        <meta
          name="description"
          content="Study MBBS at MVJ Medical College & Research Hospital, Hoskote, Bangalore. Explore 250 MBBS seats, fees, eligibility, 1,100-bed hospital, KEA counselling and admission guidance."
        />
        <meta
          name="keywords"
          content="MVJ Medical College Bangalore, MVJMC MBBS fees, MVJ Medical College Hoskote admission, MBBS in Bangalore, Karnataka medical college"
        />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow" />
        <link
          rel="alternate"
          href="https://www.edurizon.in/mbbs-in-india/karnataka/mvj-medical-college-and-research-hospital"
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
              src="/assets/Images/mbbs-in-india/states/karnataka/mvj-medical-college.png"
              alt="MVJ Medical College & Research Hospital, Bangalore"
              width={650}
              height={550}
            />
            <div className="relative mx-[6vw] md:mx-0 py-[4vw]">
              <h1 className="font-bold text-h3TextPhone md:text-h3Text leading-[120%] mb-[2vw] md:mb-[1.5vw] ">
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
              MVJ Medical College &amp; Research Hospital (MVJMC&amp;RH), Bangalore, is a private
              medical college located at Dandupalya, Hoskote, in Bengaluru Rural District, Karnataka.
            </li>
            <li>
              Established in 2001, the institution operates under the Venkatesha Education Society
              and is affiliated with Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka.
            </li>
            <li>
              The college offers undergraduate and postgraduate medical education along with
              hospital-based clinical training through its attached teaching hospital.
            </li>
            <li>
              MVJ Medical College and Hospital, Hoskote, is a 27-acre medical education campus and
              tertiary healthcare facility at the 30th-kilometer milestone on Old Madras Road (NH-75).
            </li>
            <li>
              The teaching hospital has over 1,100 beds, modern intensive care units and advanced
              research facilities supporting clinical learning.
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
              Hoskote, in Bengaluru Rural District, offers hospital-based training with access to
              Bengaluru&apos;s education, technology and healthcare ecosystem.
            </li>
            <li>
              The hospital caters to communities across 454 villages covering the Hoskote, Malur and
              Chintamani areas.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            About {COLLEGE_NAME}
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              <strong>Teaching Hospital:</strong> MVJ Medical College &amp; Research Hospital with
              approximately 1,100 beds, 30 emergency beds, 12 operation theatres and 8 ICUs.
            </li>
            <li>
              <strong>University:</strong> Affiliated to Rajiv Gandhi University of Health Sciences
              (RGUHS), Karnataka.
            </li>
            <li>
              <strong>Programme:</strong> MBBS is a 5.5-year programme comprising 4.5 years of academic
              study followed by one year of compulsory rotating internship.
            </li>
            <li>
              <strong>Clinical Training:</strong> Pre-clinical, para-clinical and clinical disciplines
              with practical laboratory training, hospital postings and community-based medical
              education.
            </li>
            <li>
              <strong>Accreditation:</strong> NABH entry-level certified and ISO accredited, as stated
              by MVJ.
            </li>
          </ul>
        </section>

        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw] text-left">
              Why Choose MVJ for MBBS?
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
              The attached teaching hospital was established in 2001 to provide healthcare services
              to the population in and around Hoskote.
            </li>
            <li>1,100 beds with 24/7 hospital services, blood bank and pharmacy</li>
            <li>30 emergency beds, 12 operation theatres and 8 ICUs</li>
            <li>5+ laboratories, emergency and casualty services</li>
            <li>Broad medical and surgical specialties with selected super-specialty services</li>
            <li>MVJ Neurosciences Centre providing neurosurgical care</li>
            <li>
              Clinical exposure across OPD, inpatient wards, emergency services, ICUs, operation
              theatres, General Medicine, Surgery, OBG, Paediatrics, Orthopaedics, Ophthalmology,
              ENT, Dermatology, Psychiatry, Radiodiagnosis, Anaesthesiology and Community Medicine
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
            <strong>Clinical &amp; Allied Specialties:</strong> {clinicalDepartments.join(", ")}
          </p>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            3D Interactive Medical Learning
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              MVJ uses a digital 3D learning platform to help students visualise concepts that can
              be difficult through conventional two-dimensional teaching material.
            </li>
            <li>
              The technology is used in Anatomy, Physiology, Biochemistry, Histology, Neuroanatomy
              and Embryology.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Skill-Based Medical Training
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              A dedicated skill laboratory allows students to practise selected clinical procedures
              and communication techniques before supervised patient care.
            </li>
            <li>
              Training supports clinical confidence, procedural skills, communication, patient
              interaction, teamwork, decision-making and professional behaviour.
            </li>
          </ul>

          <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">
            Library, Research &amp; Campus Life
          </h3>
          <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
            <li>
              Central Library with textbooks, reference materials, journals and digital learning
              resources for undergraduate and postgraduate study
            </li>
            <li>
              Research projects, academic presentations, poster presentations, seminars, conferences
              and community-based research
            </li>
            <li>
              Hostel facilities including separate accommodation, furnished rooms, Wi-Fi, dining,
              hot water and power backup
            </li>
            <li>
              Sports and recreation including basketball, volleyball, badminton, tennis, outdoor
              sports and gymnasium
            </li>
            <li>Transportation, dining, student activities and academic support on campus</li>
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
            <li>MBBS college selection and MVJ admission guidance</li>
            <li>Seat-category information, fee structure analysis and college comparison</li>
            <li>Eligibility assessment, document preparation, and reporting guidance</li>
          </ul>
          <p className="text-smallTextPhone md:text-regularText text-left">
            Looking for MBBS admission in Bangalore? Connect with Edurizon Pvt. Ltd. for
            personalized guidance on MBBS admission at MVJ Medical College &amp; Research Hospital
            and other medical colleges in Karnataka.
          </p>
        </section>
      </div>
    </>
  );
};

export default MvjMedicalCollegePage;
