import Head from "next/head";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import collegeData from "@/lib/data/govtMedicalColleges2026.json";

const PDF_LINKS = [
  {
    label: "Government Medical Institutions in India 2026",
    href: "/assets/downloads/govt_medical_colleges_india_2026.csv",
    note: "Download complete college list (CSV)",
  },
  {
    label: "MCC UG Seat Matrix 2026",
    href: "https://mcc.nic.in/UGCounselling/SeatMatrix/SeatMatrix",
    note: "Official MCC seat matrix portal",
    external: true,
  },
];

export default function StateWiseInstitutesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const state = typeof router.query.state === "string" ? router.query.state : "";
    if (state) {
      setSelectedState(state);
    }
  }, [router.isReady, router.query.state]);

  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return collegeData.byState
      .filter((group) => !selectedState || group.state === selectedState)
      .map((group) => ({
        ...group,
        colleges: group.colleges.filter((row) => {
          if (!query) return true;
          return (
            row.college.toLowerCase().includes(query) ||
            row.university.toLowerCase().includes(query) ||
            row.state.toLowerCase().includes(query)
          );
        }),
      }))
      .filter((group) => group.colleges.length > 0);
  }, [searchQuery, selectedState]);

  const visibleCollegeCount = filteredGroups.reduce(
    (sum, group) => sum + group.colleges.length,
    0
  );

  const visibleSeatCount = filteredGroups.reduce(
    (sum, group) => sum + group.colleges.reduce((s, row) => s + row.seats, 0),
    0
  );

  const summaryPairs = useMemo(() => {
    const items = collegeData.stateSummary;
    const mid = Math.ceil(items.length / 2);
    return [items.slice(0, mid), items.slice(mid)];
  }, []);

  return (
    <>
      <Head>
        <title>State Wise Government Medical Colleges NEET 2026 | Edurizon</title>
        <meta
          name="description"
          content="Complete list of 456 government medical colleges in India for NEET 2026 with 63,511 MBBS seats across 33 states and UTs."
        />
        <meta
          name="keywords"
          content="NEET 2026, government medical colleges India, state wise MBBS colleges, MCC seat matrix"
        />
      </Head>

      <main className="mbbs-india-page pt-[15vw] md:pt-[5.5vw]">
        <div className="top-bar">
          <div className="container">
            <span>NEET 2026 • Government Medical Colleges • State Wise List</span>
            <a href="tel:+919873381377">Talk to an Admission Expert: 9873381377</a>
          </div>
        </div>

        <header className="hero">
          <div className="container">
            <div className="india-crumb">
              <Link href="/mbbs-in-india">MBBS in India</Link>
              <span> / </span>
              <span>State Wise Institutes</span>
            </div>
            <div className="badge">NEET 2026</div>
            <h1>
              Government Medical Colleges <span>State Wise</span>
            </h1>
            <p>
              Explore all India government medical colleges for NEET UG 2026 with state-wise seat
              intake, university details and counselling information.
            </p>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">NEET 2026</div>
              <h2>About NEET (UG)</h2>
            </div>

            <div className="intro-block">
              <p>
                The Ministry of Education&apos;s National Testing Agency (NTA) conducts NEET (UG) as
                the uniform national entrance examination for admission to MBBS/BDS and Indian System
                of Medicine courses including BAMS, BUMS, BSMS and BHMS.
              </p>
              <p>
                NEET UG is conducted in 13 languages. Candidates aspiring for Military Nursing Service
                (MNS) are also required to qualify NEET.
              </p>
            </div>

            <div className="section-head">
              <h2>List of All India Government Medical Colleges 2026</h2>
              <p>
                Total: <b>{collegeData.totals.colleges}</b> government medical colleges •{" "}
                <b>{collegeData.totals.seats.toLocaleString("en-IN")}</b> MBBS seats •{" "}
                <b>{collegeData.totals.states}</b> states/UTs
              </p>
            </div>

            {/* <div className="pdf-links">
              {PDF_LINKS.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-card"
                  >
                    <strong>{item.label}</strong>
                    <span>{item.note}</span>
                  </a>
                ) : (
                  <a key={item.label} href={item.href} download className="pdf-card">
                    <strong>{item.label}</strong>
                    <span>{item.note}</span>
                  </a>
                )
              )}
            </div> */}

            <div className="table-meta">
              <h3>State-wise Summary</h3>
              <div className="meta-stats">
                <span>
                  Total Colleges: <b>{collegeData.totals.colleges}</b>
                </span>
                <span>
                  Total Seats: <b>{collegeData.totals.seats.toLocaleString("en-IN")}</b>
                </span>
              </div>
            </div>

            <div className="summary-grid">
              {summaryPairs.map((column, colIndex) => (
                <div className="summary-table-wrap" key={colIndex}>
                  <table className="summary-table">
                    <thead>
                      <tr>
                        <th>State</th>
                        <th>Colleges</th>
                        <th>Seats</th>
                      </tr>
                    </thead>
                    <tbody>
                      {column.map((row) => (
                        <tr key={row.state}>
                          <td>{row.state}</td>
                          <td>{row.colleges}</td>
                          <td>{row.seats.toLocaleString("en-IN")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            <div className="table-filters">
              <input
                className="field"
                type="search"
                placeholder="Search college, university or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">All States / UTs</option>
                {collegeData.stateSummary.map((row) => (
                  <option key={row.state} value={row.state}>
                    {row.state}
                  </option>
                ))}
              </select>
            </div>

            <div className="table-meta">
              <h3>Complete College List</h3>
              <div className="meta-stats">
                <span>
                  Showing: <b>{visibleCollegeCount}</b> colleges
                </span>
                <span>
                  Seats: <b>{visibleSeatCount.toLocaleString("en-IN")}</b>
                </span>
              </div>
            </div>

            <div className="table-wrap">
              <table className="college-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>State</th>
                    <th>College Name</th>
                    <th>University</th>
                    <th>Management</th>
                    <th>Estb.</th>
                    <th>Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGroups.map((group) => (
                    <Fragment key={group.state}>
                      <tr className="state-row">
                        <td colSpan={7}>
                          {group.state} — {group.colleges.length} colleges •{" "}
                          {group.colleges.reduce((s, r) => s + r.seats, 0).toLocaleString("en-IN")}{" "}
                          seats
                        </td>
                      </tr>
                      {group.colleges.map((row) => (
                        <tr key={`${group.state}-${row.sno}-${row.college}`}>
                          <td>{row.sno}</td>
                          <td>{row.state}</td>
                          <td>{row.college}</td>
                          <td>{row.university}</td>
                          <td>{row.management}</td>
                          <td>{row.estb}</td>
                          <td>{row.seats}</td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                  <tr className="total-row">
                    <td colSpan={6}>Total Number of MBBS Seats</td>
                    <td>{collegeData.totals.seats.toLocaleString("en-IN")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="help-card" id="contact">
              <div className="help-copy">
                <div className="eyebrow">Talk to a counsellor</div>
                <h3>Need help with NEET counselling or college selection?</h3>
                <p>
                  Get personalised guidance based on your NEET score, category, domicile and preferred
                  state government colleges.
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
