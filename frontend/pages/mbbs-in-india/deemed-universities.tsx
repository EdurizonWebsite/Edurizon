import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

type CollegeRow = {
  no: number;
  college: string;
  university: string;
  estb: number;
  seats: number;
};

type StateGroup = {
  state: string;
  colleges: CollegeRow[];
};

const DEEMED_BY_STATE: StateGroup[] = [
  {
    state: "Andhra Pradesh",
    colleges: [
      {
        no: 1,
        college: "GITAM Institute of Medical Sciences and Research, Visakhapatnam",
        university: "GITAM University (Deemed)",
        estb: 2015,
        seats: 150,
      },
    ],
  },
  {
    state: "Delhi",
    colleges: [
      {
        no: 2,
        college: "Hamdard Institute of Medical Sciences & Research, New Delhi",
        university: "Jamia Hamdard University",
        estb: 2012,
        seats: 150,
      },
    ],
  },
  {
    state: "Gujarat",
    colleges: [
      {
        no: 3,
        college: "SBKS Medical Institute & Research Centre, Vadodara",
        university: "Sumandeep Vidyapeeth University (Deemed)",
        estb: 2002,
        seats: 250,
      },
    ],
  },
  {
    state: "Haryana",
    colleges: [
      {
        no: 4,
        college: "MM Institute of Medical Sciences & Research, Mullana, Ambala",
        university: "Maharishi Marakandeshwar University",
        estb: 2003,
        seats: 200,
      },
      {
        no: 5,
        college: "Amrita School of Medicine, Faridabad",
        university: "Amrita Vishwa Vidyapeetham University",
        estb: 2023,
        seats: 150,
      },
    ],
  },
  {
    state: "Jharkhand",
    colleges: [
      {
        no: 6,
        college: "Manipal Tata Medical College, Jamshedpur",
        university: "Manipal University",
        estb: 2020,
        seats: 200,
      },
    ],
  },
  {
    state: "Karnataka",
    colleges: [
      { no: 7, college: "BLDE University, Bijapur", university: "BLDE (Deemed University)", estb: 1986, seats: 250 },
      { no: 8, college: "Jawaharlal Nehru Medical College, Belgaum", university: "KLE Academy of Higher Education & Research", estb: 1963, seats: 200 },
      { no: 9, college: "JSS Medical College, Mysore", university: "JSS Academy of Higher Education & Research", estb: 1984, seats: 250 },
      { no: 10, college: "JGMM Medical College, Hubballi", university: "KLE Academy of Higher Education & Research", estb: 2021, seats: 200 },
      { no: 11, college: "Kasturba Medical College, Mangalore", university: "Manipal Academy of Higher Education", estb: 1955, seats: 250 },
      { no: 12, college: "Kasturba Medical College, Manipal", university: "Manipal Academy of Higher Education", estb: 1953, seats: 250 },
      { no: 13, college: "K S Hegde Medical Academy, Mangalore", university: "Nitte University", estb: 1999, seats: 250 },
      { no: 14, college: "Raja Rajeswari Medical College & Hospital, Bengaluru", university: "Dr. MGR Educational & Research Institute", estb: 2019, seats: 250 },
      { no: 15, college: "Sri Devaraj URS Medical College, Kolar", university: "Sri Devaraj Urs Academy of Higher Education", estb: 1986, seats: 200 },
      { no: 16, college: "Sri Siddhartha Academy of Higher Education, Bangalore", university: "Sri Siddhartha Academy of Higher Education", estb: 2019, seats: 250 },
      { no: 17, college: "Sri Siddhartha Medical College, Tumkur", university: "Sri Siddhartha Academy of Higher Education", estb: 1988, seats: 200 },
      { no: 18, college: "Yenepoya Medical College, Mangalore", university: "Yenepoya University", estb: 1999, seats: 250 },
    ],
  },
  {
    state: "Kerala",
    colleges: [
      { no: 19, college: "Amrita School of Medicine, Kochi", university: "Amrita Vishwa Vidyapeetham University", estb: 2000, seats: 150 },
    ],
  },
  {
    state: "Maharashtra",
    colleges: [
      { no: 20, college: "Bharati Vidyapeeth Deemed University Medical College, Sangli", university: "Bharati Vidyapeeth University", estb: 2005, seats: 250 },
      { no: 21, college: "Bharati Vidyapeeth University Medical College, Pune", university: "Bharati Vidyapeeth University", estb: 1989, seats: 250 },
      { no: 22, college: "Datta Meghe Institute of Medical Science, Nagpur", university: "Datta Meghe Institute of Higher Education & Research", estb: 2020, seats: 250 },
      { no: 23, college: "Dr. D Y Patil Medical College, Kolhapur", university: "D.Y. Patil Education Society", estb: 1989, seats: 150 },
      { no: 24, college: "Jawaharlal Nehru Medical College, Sawangi (Meghe), Wardha", university: "Datta Meghe Institute of Higher Education & Research", estb: 1990, seats: 250 },
      { no: 25, college: "Krishna Institute of Medical Sciences, Karad", university: "Krishna Vishwa Vidyapeeth", estb: 1984, seats: 250 },
      { no: 26, college: "Mahatma Gandhi Missions Medical College, Aurangabad", university: "MGM Institute of Health Sciences", estb: 1989, seats: 250 },
      { no: 27, college: "Mahatma Gandhi Missions Medical College, Kamothe, Navi Mumbai", university: "MGM Institute of Health Sciences", estb: 1989, seats: 200 },
      { no: 28, college: "Mahatma Gandhi Mission Medical College, Vashi, Navi Mumbai", university: "MGM Institute of Health Sciences", estb: 2023, seats: 100 },
      { no: 29, college: "Mahatma Gandhi Mission Medical College, Nerul, Navi Mumbai", university: "MGM Institute of Health Sciences", estb: 2024, seats: 50 },
      { no: 30, college: "Padmashri Dr. D Y Patil Medical College, Pimpri, Pune", university: "Dr. D Y Patil University", estb: 1995, seats: 250 },
      { no: 31, college: "Padmashri Dr. D Y Patil Medical College, Nerul, Navi Mumbai", university: "Padmashree Dr. D Y Patil University", estb: 1989, seats: 250 },
      { no: 32, college: "DY Patil University School of Medicine, Taluka Maval, Pune", university: "Dr. D Y Patil University", estb: 2025, seats: 100 },
      { no: 33, college: "Rural Medical College, Loni", university: "Pravara Institute of Medical Sciences", estb: 1984, seats: 200 },
      { no: 34, college: "Symbiosis Medical College for Women, Pune", university: "Symbiosis International University", estb: 2020, seats: 150 },
    ],
  },
  {
    state: "Odisha",
    colleges: [
      { no: 35, college: "Institute of Medical Sciences & SUM Hospital, Bhubaneswar", university: "Siksha O Anusandhan University", estb: 2007, seats: 250 },
      { no: 36, college: "Institute of Medical Sciences & SUM Hospital, Campus II, Bhubaneswar", university: "Siksha O Anusandhan University", estb: 2024, seats: 250 },
      { no: 37, college: "Kalinga Institute of Medical Sciences, Bhubaneswar", university: "KIIT University", estb: 2007, seats: 250 },
    ],
  },
  {
    state: "Pondicherry",
    colleges: [
      { no: 38, college: "Aarupadai Veedu Medical College, Pondicherry", university: "Vinayaka Missions University", estb: 1999, seats: 150 },
      { no: 39, college: "Mahatma Gandhi Medical College & Research Institute, Pondicherry", university: "Sri Balaji Vidyapeeth", estb: 2002, seats: 250 },
      { no: 40, college: "Sri Lakshmi Narayana Institute of Medical Sciences, Pondicherry", university: "Bharath Institute of Higher Education & Research", estb: 2006, seats: 250 },
      { no: 41, college: "Vinayaka Missions Medical College, Karaikal, Pondicherry", university: "Vinayaka Missions University", estb: 1997, seats: 150 },
    ],
  },
  {
    state: "Tamil Nadu",
    colleges: [
      { no: 42, college: "ACS Medical College & Hospital, Chennai", university: "Dr. MGR Educational & Research Institute", estb: 2008, seats: 250 },
      { no: 43, college: "Bhaarat Medical College & Hospital, Chennai", university: "Bharath Institute of Higher Education & Research", estb: 2020, seats: 250 },
      { no: 44, college: "Chettinad Hospital & Research Institute, Kanchipuram, Chennai", university: "Chettinad Academy of Research and Education", estb: 2006, seats: 250 },
      { no: 45, college: "J R Medical College & Hospital, Villupuram", university: "Bharath University", estb: 2024, seats: 200 },
      { no: 46, college: "Meenakshi Medical College & Research Institute, Kanchipuram, Chennai", university: "Meenakshi University", estb: 2003, seats: 250 },
      { no: 47, college: "Saveetha Medical College & Hospital, Kanchipuram, Chennai", university: "Saveetha University", estb: 2008, seats: 250 },
      { no: 48, college: "Shri Sathya Sai Medical College & Research Institute, Kanchipuram", university: "Sri Balaji Vidyapeeth", estb: 2008, seats: 250 },
      { no: 49, college: "Sree Balaji Medical College & Hospital, Chennai", university: "Bharath Institute of Higher Education & Research", estb: 2003, seats: 250 },
      { no: 50, college: "Sri Lalithambigai Medical College and Hospital", university: "The Tamilnadu Dr. MGR Medical University", estb: 2021, seats: 200 },
      { no: 51, college: "Sri Ramachandra Medical College & Research Institute, Chennai", university: "Sri Ramachandra Institute of Higher Education & Research", estb: 1985, seats: 250 },
      { no: 52, college: "SRM Medical Hospital & Research Centre, Kanchipuram, Chennai", university: "SRM Institute of Science & Technology", estb: 2005, seats: 250 },
      { no: 53, college: "Vinayaka Missions Kirupananda Variyar Medical College, Salem", university: "Vinayaka Missions University", estb: 2015, seats: 150 },
      { no: 54, college: "VELS Medical College, Tiruvallur", university: "VELS Institute Of Science, Technology & Advanced Studies (VISTAS)", estb: 2021, seats: 250 },
    ],
  },
  {
    state: "Telangana",
    colleges: [
      { no: 55, college: "Malla Reddy Institute of Medical Sciences, Hyderabad", university: "Malla Reddy Vishwavidyapeetham", estb: 2012, seats: 200 },
      { no: 56, college: "Malla Reddy Medical College for Women, Hyderabad", university: "Malla Reddy Vishwavidyapeetham", estb: 2013, seats: 200 },
    ],
  },
  {
    state: "Uttarakhand",
    colleges: [
      { no: 57, college: "Graphic Era Institute Of Medical Sciences, Dehradun", university: "Graphic Era University", estb: 2024, seats: 150 },
    ],
  },
  {
    state: "Uttar Pradesh",
    colleges: [
      { no: 58, college: "Santosh Medical College & Hospital, Ghaziabad", university: "Santosh University", estb: 1996, seats: 150 },
    ],
  },
];

const TOP_COLLEGES = [
  "Kasturba Medical College, Manipal",
  "Kasturba Medical College, Mangalore",
  "Sri Ramachandra Medical College, Chennai",
  "JN Medical College, Belgaum",
  "JSS Medical College, Mysore",
  "Symbiosis Medical College for Women, Pune",
  "Rural Medical College, Loni",
  "Bharati Vidyapeeth University Medical College, Pune",
  "D Y Patil Medical College, Pimpri, Pune",
];

export default function DeemedUniversitiesPage() {
  return (
    <>
      <Head>
        <title>Deemed Medical Colleges in India 2026 | Edurizon</title>
        <meta
          name="description"
          content="List of 59 deemed medical colleges in India offering MBBS with 12,600 seats. State-wise colleges, universities, establishment year and seats for 2026 admissions."
        />
        <meta
          name="keywords"
          content="Deemed medical colleges in India, MBBS deemed university, KMC Manipal, Sri Ramachandra, DY Patil Pune"
        />
      </Head>

      <main className="mbbs-india-page pt-[15vw] md:pt-[5.5vw]">
        <div className="top-bar">
          <div className="container">
            <span>Deemed Institute • MBBS in India • NEET-UG 2026</span>
            <a href="tel:+919873381377">Talk to an Admission Expert: 9873381377</a>
          </div>
        </div>

        <header className="hero">
          <div className="container">
            <div className="india-crumb">
              <Link href="/mbbs-in-india">MBBS in India</Link>
              <span> / </span>
              <span>Deemed Institute</span>
            </div>
            <div className="badge">DEEMED INSTITUTE</div>
            <h1>
              Deemed Medical Colleges <span>in India</span>
            </h1>
            <p>
              Explore NMC-recognised deemed universities offering MBBS, with state-wise college lists,
              seat intake and counselling guidance for 2026 admissions.
            </p>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Deemed Institute</div>
              <h2>Deemed Medical Colleges in India</h2>
            </div>

            <div className="intro-block">
              <p>
                As of August 2025, India has <b>59 Deemed Medical Colleges</b> offering MBBS.
                State breakdown: Andhra Pradesh, Delhi, Gujarat, Jharkhand, Kerala, Uttarakhand and
                Uttar Pradesh — 1 each; Odisha — 3; Telangana &amp; Haryana — 2 each; Pondicherry — 5
                (table lists 4); Tamil Nadu — 13; Karnataka — 12; Maharashtra — 15. Total:{" "}
                <b>12,600 MBBS seats</b> across all 59 colleges.
              </p>
              <p>
                Some of the best-known deemed medical colleges include Kasturba Medical College Manipal
                &amp; Mangalore, Sri Ramachandra Chennai, JN Medical College Belgaum, JSS Mysore,
                Symbiosis Pune, Rural Medical College Loni, Bharati Vidyapeeth Pune and D Y Patil
                Pimpri Pune.
              </p>
              <div className="top-pills">
                {TOP_COLLEGES.map((name) => (
                  <span className="pill" key={name}>
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="table-meta">
              <h3>List of Deemed Medical Colleges 2026</h3>
              <div className="meta-stats">
                <span>
                  Total Colleges: <b>59</b>
                </span>
                <span>
                  Total Seats: <b>12,600</b>
                </span>
              </div>
            </div>

            <div className="table-wrap">
              <table className="college-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>College</th>
                    <th>University</th>
                    <th>Estb</th>
                    <th>Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {DEEMED_BY_STATE.map((group) => (
                    <Fragment key={group.state}>
                      <tr className="state-row">
                        <td colSpan={5}>{group.state}</td>
                      </tr>
                      {group.colleges.map((row) => (
                        <tr key={row.no}>
                          <td>{row.no}</td>
                          <td>{row.college}</td>
                          <td>{row.university}</td>
                          <td>{row.estb}</td>
                          <td>{row.seats}</td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                  <tr className="total-row">
                    <td colSpan={4}>Total Number of MBBS Seats</td>
                    <td>12,600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="help-card" id="contact">
              <div className="help-copy">
                <div className="eyebrow">Talk to a counsellor</div>
                <h3>Need help choosing a deemed medical college?</h3>
                <p>
                  Get personalised guidance based on your NEET score, budget, category and preferred
                  state.
                </p>
              </div>
              <div className="help-actions">
                <a className="help-link" href="tel:+919873381377">
                  <span className="help-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                      <path
                        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.6 21 3 12.4 3 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <strong>Call counsellor</strong>
                    <small>9873381377</small>
                  </span>
                </a>
                <a
                  className="help-link whatsapp"
                  href="https://wa.me/919999225264"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="help-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.33 4.94L2 22l5.38-1.4a10 10 0 0 0 4.66 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.77 14.12c-.24.67-1.4 1.24-1.93 1.32-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.56.17.28.75 1.23 1.61 2 .1.9 1.97 1.82 2.27 1.95.29.14.46.12.63-.07.17-.19.73-.85.93-1.14.19-.29.39-.24.65-.14.26.1 1.66.78 1.95.92.29.14.48.21.55.33.07.12.07.7-.17 1.37Z" />
                    </svg>
                  </span>
                  <span>
                    <strong>WhatsApp expert</strong>
                    <small>9999225264</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
