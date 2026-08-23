import Head from "next/head";
import Link from "next/link";
import {
  formatKarnatakaFee,
  KARNATAKA_PRIVATE_FEE_TABLE,
} from "@/lib/data/karnatakaMbbsFees";

const WHY_KARNATAKA = [
  {
    icon: "01",
    title: "Wide Choice of Medical Colleges",
    text: "Karnataka has a large network of government and private medical institutions, giving students a wide range of options during the counselling process.",
  },
  {
    icon: "02",
    title: "Excellent Clinical Exposure",
    text: "Many medical colleges are attached to teaching hospitals with substantial patient flow, providing valuable practical and clinical exposure during MBBS training.",
  },
  {
    icon: "03",
    title: "Strong Academic Environment",
    text: "Several established medical institutions in Karnataka offer experienced faculty, structured academic programmes, modern laboratories, and comprehensive medical education.",
  },
  {
    icon: "04",
    title: "Multiple Fee & Seat Categories",
    text: "Students can explore government, government-quota, management/private, and eligible NRI seats depending on NEET rank, eligibility, budget, and counselling rules.",
  },
];

const INFRASTRUCTURE_ITEMS = [
  "Advanced laboratories",
  "Libraries",
  "Lecture theatres",
  "Teaching hospitals",
  "Hostels",
  "Sports facilities",
  "Skill and simulation facilities",
  "Other student amenities",
];

const ADMISSION_STEPS = [
  {
    num: "01",
    title: "Qualify NEET-UG",
    text: "Candidates must qualify for the NEET-UG examination and fulfil the eligibility criteria prescribed for MBBS admission.",
  },
  {
    num: "02",
    title: "Register for Karnataka Counselling",
    text: "Eligible candidates must complete the KEA registration and application/form-filling process within the prescribed timeline with accurate personal, academic, NEET, category, and other required details.",
  },
  {
    num: "03",
    title: "Document Verification",
    text: "Candidates are required to complete the applicable document verification process as specified by KEA. Keep all original documents and required copies ready.",
  },
  {
    num: "04",
    title: "College & Course Selection",
    text: "After registration and verification, eligible candidates participate in choice-filling based on college preference, seat category, fee structure, location, reputation, clinical exposure, and infrastructure.",
  },
  {
    num: "05",
    title: "Seat Allotment",
    text: "KEA conducts seat allotment based on NEET rank, eligibility, category, seat availability, candidate preferences, and applicable counselling rules.",
  },
  {
    num: "06",
    title: "Fee Payment & Admission",
    text: "If a seat is allotted, the candidate must complete the prescribed fee payment, admission, and reporting formalities within the stipulated deadline.",
  },
];

const COUNSELLING_ROUNDS = [
  {
    title: "Round 1",
    text: "Initial seat allotment based on NEET rank, eligibility and choices.",
  },
  {
    title: "Round 2",
    text: "Further allotment or upgradation against available vacant seats.",
  },
  {
    title: "Round 3 – Mop-Up",
    text: "Conducted to fill remaining seats after the earlier rounds.",
  },
  {
    title: "Stray Vacancy Round",
    text: "Final round for filling seats that remain vacant after the regular counselling rounds.",
  },
];

const FEE_CATEGORIES = [
  {
    title: "General / Government Quota",
    text: "Government-quota seats generally have a lower tuition fee compared with management and NRI quota seats. Admission is based on NEET merit and applicable counselling rules.",
    points: [
      "Lower tuition fee",
      "Merit-based admission",
      "Access to established medical institutions",
      "Good clinical exposure",
      "Lower overall cost compared with management and NRI quota options",
    ],
  },
  {
    title: "Management Quota",
    text: "Management quota seats are available in eligible private medical colleges and generally carry a higher tuition fee than government-quota seats.",
    points: [
      "For students who have qualified NEET-UG",
      "Additional private medical college options",
      "May not secure a government-quota seat",
      "Higher tuition fee than government quota",
      "Subject to rules notified by the competent authority",
    ],
  },
  {
    title: "NRI Quota",
    text: "Karnataka provides NRI quota opportunities for eligible candidates, subject to applicable regulations, eligibility criteria, seat availability, and documentation requirements.",
    points: [
      "Higher fee structure compared with government-quota seats",
      "Subject to NRI eligibility and documentation",
      "Unfilled NRI seats may move to management quota in later rounds",
      "Candidates must meet NEET-UG qualification requirements",
    ],
  },
];

const DOCUMENTS = [
  "NEET-UG Admit Card",
  "NEET-UG Score Card / Result",
  "Class 10 Certificate",
  "Class 12 Certificate / Mark Sheet",
  "Transfer Certificate",
  "Migration Certificate, where applicable",
  "Valid Identity Proof",
  "Passport-size Photographs",
  "Category Certificate, where applicable",
  "Karnataka domicile/residency documents, where applicable",
  "Income Certificate, where applicable",
  "NRI documents, if applying under the NRI category",
  "Other documents specified by KEA",
];

const EDURIZON_SERVICES = [
  "NEET Rank Assessment",
  "Karnataka Medical College Selection",
  "Government / General Quota Guidance",
  "Management Quota Guidance",
  "NRI Quota Guidance",
  "Fee Comparison",
  "College Preference Planning",
  "Counselling Registration Assistance",
  "KEA Form-Filling Guidance",
  "Choice-Filling Guidance",
  "Counselling Guidance",
  "Seat Allotment Guidance",
  "Document Preparation",
  "Admission & Reporting Guidance",
];

function HelpCard() {
  return (
    <div className="help-card" id="contact">
      <div className="help-copy">
        <div className="eyebrow">Talk to a counsellor</div>
        <h3>Get Expert Guidance for Karnataka MBBS Admission</h3>
        <p>
          Start your Karnataka MBBS admission journey with Edurizon and make an informed decision
          based on your NEET rank, eligibility, category, budget, and college preference.
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
  );
}

export default function MbbsInKarnatakaPage() {
  return (
    <>
      <Head>
        <title>MBBS in Karnataka 2026 | KEA Counselling, Fees & Admission | Edurizon</title>
        <meta
          name="description"
          content="Complete guide to MBBS admission in Karnataka — KEA counselling, government and private quota fees, NRI seats, documents required, and expert admission guidance."
        />
        <meta
          name="keywords"
          content="MBBS in Karnataka, KEA counselling, Karnataka medical colleges, management quota MBBS Karnataka, NRI quota Karnataka"
        />
      </Head>

      <main className="mbbs-india-page pt-[15vw] md:pt-[5.5vw]">
        <div className="top-bar">
          <div className="container">
            <span>Karnataka • KEA Counselling • MBBS Admission 2026</span>
            <a href="tel:+919873381377">Talk to an Admission Expert: 9873381377</a>
          </div>
        </div>

        <header className="hero">
          <div className="container">
            <div className="india-crumb">
              <Link href="/mbbs-in-india">MBBS in India</Link>
              <span> / </span>
              <span>Karnataka</span>
            </div>
            <div className="badge">KARNATAKA MBBS</div>
            <h1>
              Study MBBS in <span>Karnataka</span>
            </h1>
            <p>
              Karnataka is one of India&apos;s most preferred destinations for MBBS, with a strong
              network of government and private medical colleges, experienced faculty, modern
              infrastructure, and excellent clinical exposure through KEA counselling.
            </p>
            <div className="actions">
              <a className="btn" href="#contact">
                Get Free Counselling
              </a>
              <Link className="btn outline-light" href="/mbbs-in-india/state-wise-institutes?state=Karnataka">
                View Karnataka Colleges
              </Link>
            </div>
          </div>
        </header>

        <section className="light">
          <div className="container">
            <div className="stats">
              <div className="stats-grid">
                <div className="stat">
                  <b>74+</b>
                  <small>Medical Colleges</small>
                </div>
                <div className="stat">
                  <b>15,095</b>
                  <small>MBBS Seats</small>
                </div>
                <div className="stat">
                  <b>23</b>
                  <small>Government Colleges</small>
                </div>
                <div className="stat">
                  <b>51</b>
                  <small>Private Colleges</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Overview</div>
              <h2>MBBS Admission in Karnataka</h2>
            </div>

            <div className="intro-block">
              <p>
                Karnataka is one of India&apos;s most preferred destinations for students seeking
                admission to MBBS programmes. The state has a strong network of government and
                private medical colleges, experienced faculty, modern infrastructure, and excellent
                opportunities for clinical exposure.
              </p>
              <p>
                Admission to MBBS courses in Karnataka is based on NEET-UG qualification and merit,
                followed by the applicable counselling process. Students seeking admission through
                Karnataka state counselling generally participate in the counselling process
                conducted by the Karnataka Examinations Authority (KEA).
              </p>
            </div>

            <div className="notice-box">
              <div className="eyebrow">Karnataka Form Filling</div>
              <h3>KEA Registration is Mandatory</h3>
              <p>
                Registration and form filling with KEA are mandatory for candidates seeking to
                participate in the Karnataka counselling process. Without completing the KEA
                registration and application process within the prescribed timeline, a candidate
                will not be eligible to participate in the counselling process or be considered for
                seat allotment.
              </p>
            </div>

            <div className="intro-block">
              <div className="eyebrow">Assistance by Edurizon</div>
              <p>
                At Edurizon Pvt. Ltd., we assist students throughout their MBBS admission journey,
                from understanding eligibility and selecting suitable colleges to counselling
                registration, choice filling, seat allotment, financial planning, and admission
                formalities.
              </p>
            </div>
          </div>
        </section>

        <section className="light">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Why Karnataka</div>
              <h2>Why Choose Karnataka for MBBS?</h2>
              <p>
                Karnataka is not only one of India&apos;s leading medical education destinations but
                also a major education and technology hub with a modern, student-friendly
                environment.
              </p>
            </div>

            <div className="intro-block">
              <p>
                With cities like Bengaluru being a leading IT and technology hub, students can enjoy
                a dynamic atmosphere alongside their studies. The combination of quality education,
                modern facilities, good connectivity, pleasant surroundings, and a cosmopolitan
                lifestyle makes Karnataka an attractive destination for students pursuing MBBS.
              </p>
            </div>

            <div className="cards">
              {WHY_KARNATAKA.map((item) => (
                <div className="card" key={item.title}>
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="section-head" style={{ marginTop: 40 }}>
              <h2>Ultra-Modern Infrastructure</h2>
              <p>Many medical colleges in Karnataka provide modern facilities such as:</p>
            </div>

            <div className="check">
              {INFRASTRUCTURE_ITEMS.map((item) => (
                <div key={item}>
                  <span>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Admission Process</div>
              <h2>Karnataka MBBS Admission Process</h2>
            </div>

            <div className="steps">
              {ADMISSION_STEPS.map((step) => (
                <div className="step" key={step.num}>
                  <div className="num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>

            <div className="section-head" style={{ marginTop: 40 }}>
              <h2>NEET-UG Counselling Rounds</h2>
              <p>Generally, NEET-UG MBBS counselling in Karnataka may include:</p>
            </div>

            <div className="cards">
              {COUNSELLING_ROUNDS.map((round) => (
                <div className="card" key={round.title}>
                  <h3>{round.title}</h3>
                  <p>{round.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="light">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Fee Categories</div>
              <h2>Major MBBS Fee Categories in Karnataka</h2>
              <p>
                One of the most important aspects of MBBS admission in Karnataka is understanding
                the different seat categories and their corresponding fee structures. The same medical
                college may have different fee structures depending on the category through which
                the seat is allotted.
              </p>
            </div>

            <div className="cards">
              {FEE_CATEGORIES.map((category) => (
                <div className="card" key={category.title}>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                  <ul className="bullet-list">
                    {category.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="section-head" style={{ marginTop: 40 }}>
              <h2>Karnataka – Open State Admission</h2>
            </div>

            <div className="intro-block">
              <p>
                Karnataka provides opportunities for students from other states to pursue MBBS,
                subject to the applicable eligibility criteria, seat availability, and counselling
                rules.
              </p>
              <p>
                <b>Government Medical College seats under All India Quota:</b> 15% of seats in
                government medical colleges are allocated through MCC&apos;s All India Quota (AIQ)
                counselling, providing an opportunity for eligible students from other states to
                compete for these seats based on their NEET-UG merit and applicable counselling
                rules.
              </p>
              <p>
                <b>Private, Management and NRI quota seats:</b> Eligible students from other states
                can participate in the applicable Karnataka counselling process for these seats,
                subject to the rules notified by KEA and the respective authorities.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Private Colleges</div>
              <h2>Top Private Medical Colleges in Karnataka</h2>
              <p>
                Karnataka has several reputed private medical colleges offering MBBS programmes.
                Students should evaluate colleges based on academics, hospital facilities, clinical
                exposure, infrastructure, location, hostel facilities, fee structure, and seat
                category.
              </p>
            </div>

            <div className="table-meta">
              <h3>Top Medical Colleges and Fee Categories</h3>
              <div className="meta-stats">
                <span>
                  Total Colleges: <b>{KARNATAKA_PRIVATE_FEE_TABLE.length}</b>
                </span>
              </div>
            </div>

            <div className="table-wrap">
              <table className="college-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Medical College</th>
                    <th>Estb.</th>
                    <th>Gen/Govt Quota Fee</th>
                    <th>Private Quota</th>
                    <th>NRI/Mgt Quota Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {KARNATAKA_PRIVATE_FEE_TABLE.map((row, index) => (
                    <tr key={row.college}>
                      <td>{index + 1}</td>
                      <td>{row.college}</td>
                      <td>{row.estb}</td>
                      <td>{formatKarnatakaFee(row.govtQuotaFee)}</td>
                      <td>{formatKarnatakaFee(row.privateQuotaFee)}</td>
                      <td>{formatKarnatakaFee(row.nriMgtQuotaFee)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="light">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Documents</div>
              <h2>Documents Required for Karnataka MBBS Counselling</h2>
              <p>
                Students should generally keep the following documents ready. Exact requirements may
                vary depending on the candidate&apos;s category and the counselling authority&apos;s
                latest notification.
              </p>
            </div>

            <div className="check">
              {DOCUMENTS.map((doc) => (
                <div key={doc}>
                  <span>✓</span>
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Edurizon Support</div>
              <h2>How Edurizon Helps with Karnataka MBBS Admission</h2>
              <p>
                At Edurizon Pvt. Ltd., we help students understand the complete MBBS admission
                process and make informed decisions based on their individual requirements.
              </p>
            </div>

            <div className="check">
              {EDURIZON_SERVICES.map((service) => (
                <div key={service}>
                  <span>✓</span>
                  {service}
                </div>
              ))}
            </div>

            <div className="intro-block" style={{ marginTop: 32 }}>
              <h3 style={{ marginTop: 0 }}>Start Your MBBS Journey in Karnataka</h3>
              <p>
                Getting an MBBS seat requires more than simply qualifying NEET. Choosing the right
                college, understanding the right seat category, preparing an effective choice list,
                and planning the overall fee structure are all important parts of the admission
                process.
              </p>
              <p>
                If you are looking for MBBS admission in Karnataka through NRI or Management Quota,
                Edurizon can help you understand the available options based on your NEET rank,
                eligibility, category, budget, and college preference.
              </p>
            </div>

            <HelpCard />
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Ready to Begin Your Karnataka MBBS Journey?</h2>
            <p>
              Speak with our admission experts for personalised guidance on KEA counselling, quota
              selection, and college shortlisting.
            </p>
            <div className="cta-actions">
              <a className="btn outline-white" href="tel:+919873381377">
                Call 9873381377
              </a>
              <a
                className="btn gold"
                href="https://wa.me/919999225264"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
