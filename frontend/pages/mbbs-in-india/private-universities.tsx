import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import collegeData from "@/lib/data/privateMedicalColleges2026.json";

const TOP_COLLEGES = [
  "Kasturba Medical College, Manipal",
  "Apollo Institute of Medical Sciences and Research, Chittoor",
  "Narayana Medical College, Nellore",
  "NRI Medical College, Guntur",
  "GITAM Institute of Medical Sciences and Research, Visakhapatnam",
  "Rural Medical College, Loni",
  "DY Patil Medical College, Kolhapur",
  "Krishna Institute of Medical Sciences, Karad",
];

const topStates = [...collegeData.stateSummary]
  .sort((a, b) => b.colleges - a.colleges)
  .slice(0, 5)
  .map((item) => `${item.state} (${item.colleges})`)
  .join(", ");

export default function PrivateUniversitiesPage() {
  const { totals, byState } = collegeData;

  return (
    <>
      <Head>
        <title>Private Medical Colleges in India 2026 | Edurizon</title>
        <meta
          name="description"
          content={`List of ${totals.colleges} private medical colleges in India offering MBBS with ${totals.seats.toLocaleString("en-IN")} seats for AY 2026-27.`}
        />
        <meta
          name="keywords"
          content="Private medical colleges in India, MBBS private university, private MBBS admission 2026"
        />
      </Head>

      <main className="mbbs-india-page pt-[15vw] md:pt-[5.5vw]">
        <div className="top-bar">
          <div className="container">
            <span>Private Institute • MBBS in India • NEET-UG 2026</span>
            <a href="tel:+919873381377">Talk to an Admission Expert: 9873381377</a>
          </div>
        </div>

        <header className="hero">
          <div className="container">
            <div className="india-crumb">
              <Link href="/mbbs-in-india">MBBS in India</Link>
              <span> / </span>
              <span>Private Universities</span>
            </div>
            <div className="badge">PRIVATE INSTITUTE</div>
            <h1>
              Private Medical Colleges <span>in India</span>
            </h1>
            <p>
              Explore NMC-recognised private medical colleges offering MBBS, with state-wise lists,
              seat intake and counselling guidance for AY 2026-27 admissions.
            </p>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Private Institute</div>
              <h2>Private Medical Colleges in India</h2>
            </div>

            <div className="intro-block">
              <p>
                For Academic Year 2026-27, India has <b>{totals.colleges} private medical colleges</b>{" "}
                offering MBBS across <b>{totals.states} states/UTs</b>, with a combined intake of{" "}
                <b>{totals.seats.toLocaleString("en-IN")} MBBS seats</b>.
              </p>
              <p>
                Karnataka, Maharashtra, Tamil Nadu, Uttar Pradesh and Telangana host the highest
                number of private medical colleges. Top states by college count include {topStates}.
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
              <h3>List of Private Medical Colleges 2026</h3>
              <div className="meta-stats">
                <span>
                  Total Colleges: <b>{totals.colleges}</b>
                </span>
                <span>
                  Total Seats: <b>{totals.seats.toLocaleString("en-IN")}</b>
                </span>
              </div>
            </div>

            <div className="table-wrap">
              <table className="college-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>College</th>
                    <th>Status</th>
                    <th>Seats Renewed</th>
                    <th>Seats Increased</th>
                    <th>Total Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {byState.map((group) => (
                    <Fragment key={group.state}>
                      <tr className="state-row">
                        <td colSpan={6}>
                          {group.state} — {group.collegeCount} colleges •{" "}
                          {group.seats.toLocaleString("en-IN")} seats
                        </td>
                      </tr>
                      {group.colleges.map((row) => (
                        <tr key={`${group.state}-${row.sno}-${row.college}`}>
                          <td>{row.sno}</td>
                          <td>{row.college}</td>
                          <td>{row.status}</td>
                          <td>{row.seatsRenewed || "—"}</td>
                          <td>{row.seatsIncreased || "—"}</td>
                          <td>{row.totalSeats}</td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                  <tr className="total-row">
                    <td colSpan={5}>Total Number of MBBS Seats</td>
                    <td>{totals.seats.toLocaleString("en-IN")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="help-card" id="contact">
              <div className="help-copy">
                <div className="eyebrow">Talk to a counsellor</div>
                <h3>Need help choosing a private medical college?</h3>
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
