import Head from "next/head";
import Link from "next/link";
import { FormEvent, useMemo, useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "@/lib/baseUrl";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  // "Ladakh",
  // "Puducherry",
  // "Chandigarh",
  // "Dadra and Nagar Haveli and Daman and Diu",
  // "Lakshadweep",
  // "Andaman and Nicobar Islands",
];

const COLLEGE_TYPES = ["Government", "Private", "Deemed"] as const;

const BUDGET_RANGES = [
  { label: "Under ₹10 Lakhs", min: 0, max: 10 },
  { label: "₹10L – ₹25L", min: 10, max: 25 },
  { label: "₹25L – ₹50L", min: 25, max: 50 },
  { label: "Above ₹50L", min: 50, max: 999 },
];

const COLLEGE_DATA = [
  { name: "AIIMS New Delhi", state: "Delhi", type: "Government", fees: 8 },
  { name: "Maulana Azad Medical College", state: "Delhi", type: "Government", fees: 6 },
  { name: "King George's Medical University", state: "Uttar Pradesh", type: "Government", fees: 7 },
  { name: "Grant Medical College", state: "Maharashtra", type: "Government", fees: 9 },
  { name: "Bangalore Medical College", state: "Karnataka", type: "Government", fees: 8 },
  { name: "Christian Medical College Vellore", state: "Karnataka", type: "Private", fees: 45 },
  { name: "Kasturba Medical College", state: "Karnataka", type: "Private", fees: 55 },
  { name: "DY Patil Medical College", state: "Maharashtra", type: "Private", fees: 38 },
  { name: "SRM Medical College", state: "Tamil Nadu", type: "Deemed", fees: 42 },
  { name: "Manipal Academy of Higher Education", state: "Karnataka", type: "Deemed", fees: 48 },
  { name: "Amrita School of Medicine", state: "Kerala", type: "Deemed", fees: 52 },
  { name: "NRS Medical College", state: "West Bengal", type: "Government", fees: 7 },
  { name: "SMS Medical College", state: "Rajasthan", type: "Government", fees: 8 },
  { name: "Gandhi Medical College", state: "Telangana", type: "Government", fees: 9 },
  { name: "BJ Medical College", state: "Gujarat", type: "Government", fees: 8 },
];

const WHY_ITEMS = [
  "NMC-recognized institutions",
  "Internationally recognized degree",
  "Experienced faculty",
  "Modern laboratories",
  "Teaching hospitals",
  "Clinical exposure",
  "1-year compulsory internship",
  "PG & career opportunities",
];

const ADMISSION_STEPS = [
  { num: "01", title: "Qualify NEET-UG", text: "Appear for and qualify NEET-UG with the applicable qualifying criteria." },
  { num: "02", title: "Explore Colleges", text: "Shortlist government, private or deemed colleges according to rank and preference." },
  { num: "03", title: "Register for Counselling", text: "Complete AIQ, State or Deemed University counselling registration as applicable." },
  { num: "04", title: "Choice Filling", text: "Select preferred colleges and participate in seat allotment." },
  { num: "05", title: "Document Verification", text: "Submit required original documents for verification." },
  { num: "06", title: "Confirm Admission", text: "Pay prescribed fees and complete admission formalities on time." },
  { num: "07", title: "Report to College", text: "Join the allotted institution and begin your MBBS journey." },
];

const NRI_SERVICES = [
  { icon: "01", title: "Eligibility Assessment", text: "Evaluate NRI/NRI sponsorship eligibility, academic qualification and NEET requirements." },
  { icon: "02", title: "College Selection", text: "Compare reputation, fees, infrastructure, faculty, research environment and student considerations." },
  { icon: "03", title: "Documentation", text: "Support for NRI certificates, sponsorship documents, affidavits, family-tree documents and other requirements." },
  { icon: "04", title: "Counselling & Seat Allocation", text: "Guidance through AIQ and state-wise counselling, choice filling and seat allocation." },
  { icon: "05", title: "Document Verification", text: "Assistance with physical document verification and institution-specific requirements." },
  { icon: "06", title: "Fee Payment Assistance", text: "Guidance for fee payment from Indian and foreign accounts, as applicable." },
];

const RESOURCE_CARDS = [
  {
    title: "Eligibility Criteria",
    text: "10+2 with Physics, Chemistry, Biology/Biotechnology and English, NEET qualification, age criteria and counselling requirements.",
  },
  {
    title: "Documents Required",
    text: "NEET admit card & scorecard, Class 10/12 documents, TC, migration certificate where applicable, ID, photographs, category/domicile and medical certificates.",
  },
  {
    title: "State-wise Information",
    text: "Explore MBBS colleges and fee information across Andhra Pradesh, Bihar, Delhi, Gujarat, Haryana, Karnataka, Kerala, Maharashtra, Rajasthan, Telangana, UP, West Bengal and other listed states.",
  },
];

type HeroForm = {
  name: string;
  neetScore: string;
  preference: string;
  phone: string;
};

export default function MbbsInIndiaPage() {
  const contactRef = useRef<HTMLDivElement>(null);
  const collegesRef = useRef<HTMLElement>(null);
  const feesRef = useRef<HTMLElement>(null);

  const [heroForm, setHeroForm] = useState<HeroForm>({
    name: "",
    neetScore: "",
    preference: "",
    phone: "",
  });
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);

  const [searchState, setSearchState] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchBudget, setSearchBudget] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const scrollTo = (ref: React.RefObject<HTMLElement | HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitConsultation = async (e: FormEvent, data: HeroForm) => {
    e.preventDefault();
    if (!data.name.trim() || !data.phone.trim()) {
      toast.error("Please enter your name and WhatsApp number.");
      return;
    }

    setHeroLoading(true);
    try {
      const cleanPhone = data.phone.replace(/\D/g, "");
      const remark = [
        data.neetScore.trim() && `NEET Score/Rank: ${data.neetScore.trim()}`,
        data.preference.trim() && `Preference: ${data.preference.trim()}`,
      ]
        .filter(Boolean)
        .join(" | ");

      const response = await axios.post(`${baseUrl}/api/consultation/request`, {
        name: data.name.trim(),
        email: `mbbs-india+${cleanPhone || Date.now()}@inquiry.edurizon.in`,
        phone: data.phone.trim(),
        interestedCountry: "India",
        remark: remark || "MBBS in India enquiry",
        status: "pending",
      });

      if (response.data.success) {
        setHeroSuccess(true);
        toast.success("Request submitted! Our counsellor will contact you soon.");
        setHeroForm({ name: "", neetScore: "", preference: "", phone: "" });
      } else {
        toast.error(response.data.message || "Failed to submit request.");
      }
    } catch (err: unknown) {
      const message =
        axios.isAxiosError(err) && err.response?.data?.message
          ? String(err.response.data.message)
          : "Failed to submit request. Please try again.";
      toast.error(message);
    } finally {
      setHeroLoading(false);
    }
  };

  const filterColleges = () => {
    const budget = BUDGET_RANGES.find((b) => b.label === searchBudget);

    return COLLEGE_DATA.filter((college) => {
      const stateMatch = !searchState || college.state === searchState;
      const typeMatch = !searchType || college.type === searchType;
      const budgetMatch =
        !budget || (college.fees >= budget.min && college.fees <= budget.max);
      return stateMatch && typeMatch && budgetMatch;
    });
  };

  const searchResults = useMemo(() => {
    if (!hasSearched) return [];
    return filterColleges();
  }, [hasSearched, searchState, searchType, searchBudget]);

  const handleCollegeSearch = () => {
    const results = filterColleges();
    setHasSearched(true);
    if (results.length === 0) {
      toast.info("No exact matches found. Contact our counsellor for personalised options.");
    }
  };

  return (
    <>
      <Head>
        <title>MBBS in India | Edurizon</title>
        <meta
          name="description"
          content="Study MBBS in India at leading government, private and deemed medical colleges. NEET-UG counselling, NRI quota guidance and personalised admission support from Edurizon."
        />
        <meta
          name="keywords"
          content="MBBS in India, NEET UG, medical colleges India, NRI quota MBBS, MBBS admission India"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="mbbs-india-page pt-[15vw] md:pt-[5.5vw]">
        <div className="top-bar">
          <div className="container">
            <span>MBBS Admissions • NEET-UG • NEET-PG • NRI Quota</span>
            <a href="tel:+919873381377">Talk to an Admission Expert: 9873381377</a>
          </div>
        </div>

        <header className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">INDIA MBBS ADMISSION 2026</div>
              <h1>
                Study <span>MBBS in India</span> at Leading Medical Colleges
              </h1>
              <p>
                Find the right government, private or deemed medical college based on your NEET score,
                budget, preferences and eligibility — with guidance from college selection to admission.
              </p>
              <div className="actions">
                <button
                  type="button"
                  className="btn gold"
                  onClick={() => scrollTo(contactRef)}
                >
                  Check My Eligibility
                </button>
                <button
                  type="button"
                  className="btn outline-light"
                  onClick={() => scrollTo(collegesRef)}
                >
                  Explore Colleges →
                </button>
              </div>
            </div>

            <form
              className="hero-card"
              onSubmit={(e) => submitConsultation(e, heroForm)}
            >
              <h3>Get Personalised MBBS Guidance</h3>
              <input
                className="field"
                placeholder="Your Name"
                value={heroForm.name}
                onChange={(e) => setHeroForm((p) => ({ ...p, name: e.target.value }))}
                required
              />
              <input
                className="field"
                placeholder="NEET Score / Rank"
                value={heroForm.neetScore}
                onChange={(e) => setHeroForm((p) => ({ ...p, neetScore: e.target.value }))}
              />
              <select
                className="field"
                value={heroForm.preference}
                onChange={(e) => setHeroForm((p) => ({ ...p, preference: e.target.value }))}
              >
                <option value="">Select State / College Preference</option>
                {INDIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <input
                className="field"
                placeholder="WhatsApp Number"
                type="tel"
                value={heroForm.phone}
                onChange={(e) => setHeroForm((p) => ({ ...p, phone: e.target.value }))}
                required
              />
              <button type="submit" className="btn" disabled={heroLoading}>
                {heroLoading ? "Submitting..." : "Get Free Counselling"}
              </button>
              {heroSuccess && (
                <p className="form-success">Thank you! We will contact you shortly.</p>
              )}
              <p className="form-note text-adminTextChosen" style={{color: "#FF7500"}}>
                Our counsellor will help you understand suitable options.
              </p>
            </form>
          </div>
        </header>

        <div className="container">
          <div className="stats">
            <div className="stats-grid">
              <div className="stat">
                <b>18+</b>
                <small>Years of Experience</small>
              </div>
              <div className="stat">
                <b>500+</b>
                <small>Partnered Universities</small>
              </div>
              <div className="stat">
                <b>150+</b>
                <small>Academic Courses</small>
              </div>
              <div className="stat">
                <b>25,000+</b>
                <small>Students Onboarded</small>
              </div>
            </div>
          </div>
        </div>

        <section id="colleges" ref={collegesRef}>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Explore Your Options</div>
              <h2>Medical Colleges Across India</h2>
              <p>
                Compare colleges by state, college type and fee structure. Use this section as the
                primary discovery point for students.
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <div className="icon">G</div>
                <h3>Government Medical Colleges</h3>
                <p>
                  Explore government medical colleges, eligibility, seats, counselling routes and
                  available NRI options.
                </p>
                <Link href="/mbbs-in-india/state-wise-institutes" className="btn">
                  View Colleges →
                </Link>
              </div>
              <div className="card">
                <div className="icon">P</div>
                <h3>Private Medical Colleges</h3>
                <p>
                  Browse private MBBS colleges with state-wise fee information and admission guidance.
                </p>
                <button type="button" className="btn" onClick={() => scrollTo(feesRef)}>
                  View Colleges →
                </button>
              </div>
              <div className="card">
                <div className="icon">D</div>
                <h3>Deemed Universities</h3>
                <p>
                  Discover deemed medical universities and compare tuition fee structures and admission
                  pathways.
                </p>
                <Link href="/mbbs-in-india/deemed-universities" className="btn">
                  View Colleges →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="light">
          <div className="container feature-grid">
            <div>
              <div className="eyebrow">Why MBBS in India?</div>
              <h2>Build Your Medical Career in India</h2>
              <p>
                India offers high academic standards, advanced healthcare infrastructure, experienced
                faculty and extensive clinical exposure. Students can choose from a wide network of
                government, private and deemed institutions.
              </p>
              <div className="check">
                {WHY_ITEMS.map((item) => (
                  <div key={item}>
                    <span>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ background: "#fff" }}>
              <h3>MBBS at a Glance</h3>
              <p>
                <b>Course Duration:</b> 5.5 Years including 1-year internship
              </p>
              <p>
                <b>Eligibility:</b> NEET-UG qualified + 10+2 with PCB
              </p>
              <p>
                <b>Degree:</b> Bachelor of Medicine and Bachelor of Surgery (MBBS)
              </p>
              <p>
                <b>Recognition:</b> NMC-recognized institutions
              </p>
              <p>
                <b>Medium:</b> English
              </p>
              <button type="button" className="btn" onClick={() => scrollTo(contactRef)}>
                Check Eligibility
              </button>
            </div>
          </div>
        </section>

        <section id="admission">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Simple • Guided • Transparent</div>
              <h2>MBBS Admission Process</h2>
              <p>Seven clear steps from NEET qualification to joining your allotted medical college.</p>
            </div>
            <div className="steps">
              {ADMISSION_STEPS.map((step) => (
                <div className="step" key={step.num}>
                  <div className="num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
              <div className="step highlight">
                <div className="num">→</div>
                <h3>Need Help?</h3>
                <p>Let our counsellors guide you through the process.</p>
                <button
                  type="button"
                  className="btn"
                  style={{ marginTop: 10, padding: "10px 16px", fontSize: 13 }}
                  onClick={() => scrollTo(contactRef)}
                >
                  Talk to Expert →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="light" id="fees" ref={feesRef}>
          <div className="container">
            <div className="searchbox">
              <div>
                <div className="eyebrow" style={{ color: "#ffd7c3" }}>
                  College Finder
                </div>
                <h2>Find MBBS Colleges & Fees</h2>
                <p>
                  Filter by state, college type and budget to discover suitable MBBS colleges across India.
                </p>
              </div>
              <div>
                <div className="search-controls">
                  <select
                    className="select"
                    value={searchState}
                    onChange={(e) => setSearchState(e.target.value)}
                  >
                    <option value="">Select State</option>
                    {INDIAN_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <select
                    className="select"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                  >
                    <option value="">College Type</option>
                    {COLLEGE_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <select
                    className="select"
                    value={searchBudget}
                    onChange={(e) => setSearchBudget(e.target.value)}
                  >
                    <option value="">Budget Range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range.label} value={range.label}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                  <button type="button" className="btn gold" onClick={handleCollegeSearch}>
                    Search Colleges
                  </button>
                </div>
              </div>
            </div>

            {hasSearched && (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  searchResults.map((college) => (
                    <div className="search-result-card" key={college.name}>
                      <h4>{college.name}</h4>
                      <p>
                        {college.state} • {college.type}
                      </p>
                      <p>Approx. annual fees: ₹{college.fees} Lakhs</p>
                    </div>
                  ))
                ) : (
                  <div className="search-result-card" style={{ gridColumn: "1 / -1" }}>
                    <h4>No colleges match your filters</h4>
                    <p>
                      Contact our admission expert for personalised college recommendations based on
                      your NEET score and budget.
                    </p>
                    <button
                      type="button"
                      className="btn"
                      style={{ marginTop: 12 }}
                      onClick={() => scrollTo(contactRef)}
                    >
                      Get Free Counselling
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section id="nri">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Specialised Guidance</div>
              <h2>MBBS Admission Under NRI Quota</h2>
              <p>
                Dedicated support for NRI students and eligible candidates exploring NRI quota seats in
                government, private and deemed medical colleges.
              </p>
            </div>
            <div className="cards">
              {NRI_SERVICES.map((item) => (
                <div className="card" key={item.title}>
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="light">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Student Resources</div>
              <h2>Everything You Need Before Admission</h2>
            </div>
            <div className="cards">
              {RESOURCE_CARDS.map((card) => (
                <div className="card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="cta mb-10" id="contact" ref={contactRef}>
          <div className="container">
            <h2>Confused About Which MBBS College to Choose?</h2>
            <p>
              Get personalised guidance based on your NEET score, budget, category and preferred
              location.
            </p>
            <div className="cta-actions">
              <a className="btn gold" href="tel:+919873381377">
                Call 9873381377
              </a>
              <a
                className="btn outline-white"
                href="https://wa.me/919999225264"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Expert
              </a>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
