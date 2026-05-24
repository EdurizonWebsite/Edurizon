import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/csca/SectionHeader";
import InfoCard from "@/components/csca/InfoCard";
import ExamCard from "@/components/csca/ExamCard";
import SubjectCard from "@/components/csca/SubjectCard";
import CTASection from "@/components/csca/CTASection";
import UnlistedTable from "@/components/studyDestinationComponents/unListedTable";
import countryNames from "@/lib/countryData";
import VideoCarousel from "@/components/videoCarousel";
const overview = {
  title: "CSCA",
  subtitle: "Start Your Higher Education in China",
  keyDetails: {
    examDates: ["April 25, 2026"],
    registration: "April 1–9, 2026",
    subjects: ["Mathematics", "Physics", "Chemistry", "Professional Chinese"],
    format: ["60 minutes per subject", "100 marks", "48 MCQs", "Online/home-based"],
  },
};

const icon = {
  bolt: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M13 2L3 14H11L10 22L21 9H13L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L20 6V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  medal: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 15C14.7614 15 17 12.7614 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 12.7614 9.23858 15 12 15Z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 14L6 22L12 19L18 22L16 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 5C4 3.89543 4.89543 3 6 3H20V21H6C4.89543 21 4 20.1046 4 19V5Z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export const videos = [
  {
    id: 1,
    title: 'Exposing the Real Cost of Medical Study Abroad',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/0BF-kRVlX5E/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=0BF-kRVlX5E',
    state: 'general'
  },
  {
    id: 2,
    title: 'Study Abroad Guidance',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/wDyCtDtdOuU/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=wDyCtDtdOuU',
    state: 'general'
  },
  // {
  //   id: 3,
  //   title: 'MBBS Abroad Information',
  //   channel: 'Edurizon Pvt Ltd',
  //   thumbnail: 'https://img.youtube.com/vi/2CMapuFuPTM/maxresdefault.jpg',
  //   link: 'https://www.youtube.com/watch?v=2CMapuFuPTM',
  //   state: 'general'
  // },
  // {
  //   id: 4,
  //   title: 'Medical Study Abroad Tips',
  //   channel: 'Edurizon Pvt Ltd',
  //   thumbnail: 'https://img.youtube.com/vi/hFL_VInm6yc/maxresdefault.jpg',
  //   link: 'https://www.youtube.com/watch?v=hFL_VInm6yc',
  //   state: 'general'
  // },
  // {
  //   id: 5,
  //   title: 'MBBS Abroad Student Guide',
  //   channel: 'Edurizon Pvt Ltd',
  //   thumbnail: 'https://img.youtube.com/vi/6i5YDgvy2MU/maxresdefault.jpg',
  //   link: 'https://www.youtube.com/watch?v=6i5YDgvy2MU',
  //   state: 'general'
  // },
  {
    id: 6,
    title: 'Study Abroad Reality Check',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/DdHQx5OhbhY/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=DdHQx5OhbhY',
    state: 'general'
  },
  {
    id: 7,
    title: 'Student Experience Abroad',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/LIAnNYDMEQs/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=LIAnNYDMEQs',
    state: 'general'
  },
  {
    id: 8,
    title: 'MBBS Abroad Explained',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/T0gI3qDCyos/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=T0gI3qDCyos',
    state: 'general'
  },
  {
    id: 9,
    title: 'Study Abroad Insights',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/3JA3KOKdeW8/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=3JA3KOKdeW8',
    state: 'general'
  },
  {
    id: 10,
    title: 'Medical Abroad Overview',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/VKvD4mcQOKo/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=VKvD4mcQOKo',
    state: 'general'
  },
  {
    id: 11,
    title: 'MBBS Abroad Consultation',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/G7i7lijJxtw/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=G7i7lijJxtw',
    state: 'general'
  },
  {
    id: 12,
    title: 'Study Abroad Complete Guide',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/Jq0VtA6b3IE/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=Jq0VtA6b3IE',
    state: 'general'
  }
];

export default function CSCAOverviewPage() {
  const chianUniversityData={
    title:"Universities in which CSCA provide scholarships",
    subTitle:"",
    description:'Medical education in China is widely known for its affordability and high academic standards. China MBBS Fees are comparatively lower than many other countries, offering Indian students access to quality universities, modern infrastructure, and excellent clinical exposure at a reasonable cost. For more details regarding any of the below university you can click on the university name and visit their webpages.',
    data:countryNames["study-mbbs-in-china"].countryFeeStructure?.data,
    href:countryNames["study-mbbs-in-china"].countryFeeStructure?.href,
  }
  return (
    <>
      <Head>
        <title>CSCA (China Scholastic Competency Assessment) | Edurizon</title>
        <meta
          name="description"
          content="CSCA overview for international students applying to China (especially MBBS): exam dates, registration, subjects, format, eligibility, and why CSCA matters."
        />
        <meta name="keywords" content="How to apply for CSCA exam in China, CSCA certification exam fees in China, CSCA Exam China, CSCA exam syllabus and pattern China" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="pt-[20vw] md:pt-[7.25vw] flex flex-col gap-[10vw] md:gap-[4vw] overflow-hidden ">
        {/* Hero */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <div className="rounded-[5vw] md:rounded-[1.75vw] border border-black/10 dark:border-white/10 bg-linenChosen overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.10)]">
            <div className="grid md:grid-cols-2 gap-[6vw] md:gap-[2vw] p-[6vw] md:p-[2.5vw]">
              <div className="flex flex-col gap-[3vw] md:gap-[1vw] justify-center">
                <p className="text-smallTextPhone md:text-smallText font-semibold text-orangeChosen tracking-wide">
                  CSCA • China Scholastic Competency Assessment
                </p>
                <h1 className="text-h3TextPhone md:text-h2Text font-bold text-left leading-[115%]">
                  {overview.title}
                  <br />
                  <span className="text-orangeChosen">{overview.subtitle}</span>
                </h1>
                <p className="text-regularTextPhone md:text-regularText opacity-80 leading-[170%]">
                  Organized by China Scholarship Council (CSC), CSCA is used by Chinese universities as an admission and scholarship reference for international applicants.
                </p>

                <div className="flex flex-col md:flex-row gap-[3vw] md:gap-[1vw]">
                  <Link
                    href="/contact-us"
                    className="rounded-full bg-orangeChosen text-white px-[6vw] md:px-[1.25vw] py-[3.25vw] md:py-[0.75vw] text-smallTextPhone md:text-smallText font-semibold text-center transition-all duration-200 hover:opacity-95"
                  >
                    Apply / Contact
                  </Link>
                  <Link
                    href="/csca-syllabus"
                    className="rounded-full border border-orangeChosen text-orangeChosen bg-white/70 dark:bg-black/30 px-[6vw] md:px-[1.25vw] py-[3.25vw] md:py-[0.75vw] text-smallTextPhone md:text-smallText font-semibold text-center transition-all duration-200 hover:bg-white"
                  >
                    View Syllabus
                  </Link>
                </div>
              </div>

              <div className="relative rounded-[4vw] md:rounded-[1.25vw] overflow-hidden border border-black/10 dark:border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=70"
                  alt="Students studying together"
                  width={1600}
                  height={1000}
                  className="w-full h-[60vw] md:h-[22vw] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                <div className="absolute bottom-[4vw] md:bottom-[1.25vw] left-[4vw] md:left-[1.25vw] right-[4vw] md:right-[1.25vw]">
                  <div className="rounded-[3vw] md:rounded-[0.9vw] bg-white/85 backdrop-blur border border-white/40 p-[3vw] md:p-[1vw]">
                    <div className="grid grid-cols-2 gap-[2vw] md:gap-[0.75vw]">
                      <div>
                        <p className="text-tinyTextPhone md:text-tinyText opacity-70 font-semibold">Exam dates (2026)</p>
                        <p className="text-smallTextPhone md:text-smallText font-bold">
                          {overview.keyDetails.examDates[0]}
                        </p>
                      </div>
                      <div>
                        <p className="text-tinyTextPhone md:text-tinyText opacity-70 font-semibold">Registration</p>
                        <p className="text-smallTextPhone md:text-smallText font-bold">{overview.keyDetails.registration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is CSCA */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <SectionHeader
            eyebrow="Introduction"
            title="What is CSCA?"
            subtitle="CSCA is a standardized test required for international students applying to China (especially MBBS). It checks academic readiness and supports university admissions and scholarship evaluations."
          />

          <div className="mt-[6vw] md:mt-[2vw] grid md:grid-cols-3 gap-[4vw] md:gap-[1.25vw]">
            <InfoCard
              icon={icon.book}
              title="Organized by CSC"
              description="Developed with experts from Chinese universities under China Scholarship Council (CSC)."
            />
            <InfoCard
              icon={icon.shield}
              title="Remote proctored"
              description="Home-based online testing with strict proctoring and anti-cheating measures."
            />
            <InfoCard
              icon={icon.medal}
              title="Results + percentile"
              description="Results typically arrive in 7–14 days; universities can also view percentile ranking."
            />
          </div>
        </section>

        {/* Why CSCA Matters */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <SectionHeader
            eyebrow="Why CSCA"
            title="Why CSCA matters"
            subtitle="CSCA helps you understand your readiness and improves competitiveness for admission and scholarships—especially for top universities."
          />

          <div className="mt-[6vw] md:mt-[2vw] grid md:grid-cols-3 gap-[4vw] md:gap-[1.25vw]">
            <InfoCard icon={icon.bolt} title="Admission screening tool" description="Used as an academic reference during university admission review." />
            <InfoCard icon={icon.medal} title="Scholarship reference" description="Many universities consider CSCA performance in scholarship evaluation." />
            <InfoCard icon={icon.shield} title="Boosts top-university chances" description="Strong scores can strengthen applications where CSCA is preferred or required." />
          </div>
        </section>
        
          <UnlistedTable section2={"feeStructure"} id={'csca-overview'} content={chianUniversityData} />
        
        {/* Exam Structure */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <SectionHeader
            eyebrow="Exam structure"
            title="Simple, standardized format"
            subtitle="Each subject follows the same core structure so you can plan prep and test day with clarity."
          />

          <div className="mt-[6vw] md:mt-[2vw] grid md:grid-cols-4 gap-[4vw] md:gap-[1.25vw]">
            <ExamCard label="Duration" value="60 min" helper="Per subject" />
            <ExamCard label="Total score" value="100" helper="Per subject" />
            <ExamCard label="Questions" value="48 MCQs" helper="Single-answer multiple choice" />
            <ExamCard label="Mode" value="Online" helper="Remote, home-based testing" />
          </div>
        </section>

        {/* Subjects */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <SectionHeader
            eyebrow="Subjects"
            title="Choose subjects based on your program"
            subtitle="Core subjects are commonly required for international undergrad admissions (especially MBBS)."
          />

          <div className="mt-[6vw] md:mt-[2vw] grid md:grid-cols-4 gap-[4vw] md:gap-[1.25vw]">
            <SubjectCard title="Mathematics" description="Core quantitative assessment." icon={icon.book} />
            <SubjectCard title="Physics" description="Mechanics to modern physics basics." icon={icon.bolt} />
            <SubjectCard title="Chemistry" description="Chemical calculations, bonding, equilibrium." icon={icon.medal} />
            <SubjectCard title="Professional Chinese" description="Program-aligned language competency." icon={icon.shield} />
          </div>
        </section>

        {/* Eligibility + Notes */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <div className="grid md:grid-cols-2 gap-[6vw] md:gap-[1.5vw]">
            <div className="rounded-[5vw] md:rounded-[1.75vw] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur p-[5vw] md:p-[2vw] shadow-[0_16px_45px_rgba(0,0,0,0.10)]">
              <SectionHeader
                align="left"
                eyebrow="Eligibility"
                title="Who can take CSCA?"
                subtitle="Typical baseline requirements for MBBS applicants."
              />
              <ul className="mt-[4vw] md:mt-[1.25vw] list-disc pl-[6vw] md:pl-[1.5vw] text-regularTextPhone md:text-regularText leading-[180%]">
                <li>10+2 with PCB (Physics, Chemistry, Biology)</li>
                <li>Minimum ~50% (varies by category/university)</li>
                <li>NEET still required (for Indian students)</li>
              </ul>
            </div>

            <div className="rounded-[5vw] md:rounded-[1.75vw] border border-black/10 dark:border-white/10 bg-linenChosen p-[5vw] md:p-[2vw] shadow-[0_16px_45px_rgba(0,0,0,0.10)]">
              <SectionHeader
                align="left"
                eyebrow="Notes"
                title="What to keep in mind"
                subtitle="Quick operational details for test day and results."
              />
              <ul className="mt-[4vw] md:mt-[1.25vw] list-disc pl-[6vw] md:pl-[1.5vw] text-regularTextPhone md:text-regularText leading-[180%]">
                <li>Remote proctored exam with strict monitoring</li>
                <li>Results in 7–14 days depending on test format</li>
                <li>Universities consider percentile ranking among test-takers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exam Dates */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <SectionHeader eyebrow="Schedule" title="CSCA exam dates (2026)" subtitle="Plan registration and preparation around these key dates." />
          <div className="mt-[6vw] md:mt-[2vw] grid md:grid-cols-4 gap-[4vw] md:gap-[1.25vw]">
            {overview.keyDetails.examDates.map((d) => (
              <div
                key={d}
                className="rounded-[4vw] md:rounded-[1.25vw] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur p-[4vw] md:p-[1.5vw] shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <p className="text-smallTextPhone md:text-smallText font-semibold opacity-70">Exam date</p>
                <p className="mt-[1.5vw] md:mt-[0.5vw] text-h6TextPhone md:text-h5Text font-bold">{d}</p>
              </div>
            ))}
            <div className="rounded-[4vw] md:rounded-[1.25vw] border border-orangeChosen/30 bg-linenChosen p-[4vw] md:p-[1.5vw] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <p className="text-smallTextPhone md:text-smallText font-semibold opacity-70">Registration window</p>
              <p className="mt-[1.5vw] md:mt-[0.5vw] text-h6TextPhone md:text-h5Text font-bold">{overview.keyDetails.registration}</p>
            </div>
          </div>
        </section>
        <VideoCarousel videoData={videos} title="Why Chose Edurizon for MBBS in China" />
        {/* CTA Banner */}
        <section className="pb-[12vw] md:pb-[6vw]">
          <CTASection
            title="Ready to plan your MBBS in China journey?"
            description="Explore CSCA requirements, then review the syllabus and prep with confidence."
            primaryCta={{ label: "View Syllabus", href: "/csca-syllabus" }}
            secondaryCta={{ label: "Apply / Contact", href: "/contact-us" }}
          />
        </section>
      </main>
    </>
  );
}

