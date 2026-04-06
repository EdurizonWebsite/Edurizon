"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "@/components/Breadcumbs";
import CallingBox from "@/components/studyDestinationComponents/header/callingBox";

const services = [
  {
    icon: "/assets/Images/Icons/feesIcon.svg",
    text: "Tution Fee",
    label: "26,000 RNB/Year ",
  },
  {
    icon: "/assets/Images/Icons/ExperienceIcon.svg",
    text: "Medium of Teaching",
    label: "English",
  },
  {
    icon: "/assets/Images/Icons/TieUpsIcon.svg",
    text: "City & Province",
    label: "Nantong, Jiangsu",
  },
  {
    icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
    text: "Recognition",
    label: "WHO & accepted globally",
  },
];

const NAV = [
  { id: "nt-overview", label: "Overview" },
  { id: "nt-life", label: "Campus life" },
  { id: "nt-mbbs", label: "MBBS & facilities" },
  { id: "nt-global", label: "Research & global" },
  { id: "nt-admission", label: "Admission" },
];

const p =
  "text-smallTextPhone md:text-regularText text-left md:text-justify mb-[4vw] md:mb-[1vw] leading-[170%]";
const ul =
  "text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-0 text-left md:text-regularText md:text-justify leading-[170%]";
const h3 =
  "text-h6TextPhone leading-[120%] md:text-h5Text text-left font-bold scroll-mt-[12vw] md:scroll-mt-[7vw]";
const h4 =
  "text-smallTextPhone md:text-regularText font-bold text-left mb-[2vw] md:mb-[0.75vw] mt-[2vw] md:mt-[1vw]";

function SectionNav({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      className="sticky top-[20vw] md:top-[8vw] z-30 mx-[4vw] md:mx-[12.5vw] mb-[6vw] md:mb-[2vw]"
      aria-label="Page sections"
    >
      <div className="rounded-full border border-black/10 dark:border-white/15 bg-white/90 dark:bg-black/60 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-[2vw] md:px-[1vw] py-[2vw] md:py-[0.65vw] overflow-x-auto no-scrollbar">
        <div className="flex gap-[2vw] md:gap-[0.5vw] min-w-min md:justify-center md:flex-wrap">
          {NAV.map((item) => {
            const active = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={[
                  "whitespace-nowrap rounded-full px-[4vw] md:px-[1.1vw] py-[2vw] md:py-[0.45vw]",
                  "text-tinyTextPhone md:text-tinyText font-semibold transition-all duration-300",
                  active
                    ? "bg-orangeChosen text-white shadow-[0_6px_20px_rgba(255,117,0,0.35)] scale-[1.02]"
                    : "bg-linenChosen/80 dark:bg-white/5 text-foreground hover:bg-orangeChosen/15 hover:text-orangeChosen",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-[3.5vw] md:rounded-[1.125vw] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-[3vw] md:gap-[1vw] p-[4vw] md:p-[1.25vw] text-left font-bold text-h6TextPhone md:text-h6Text leading-[130%] transition-colors hover:bg-linenChosen/50 dark:hover:bg-white/5"
        aria-expanded={open}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-[8vw] w-[8vw] md:h-[2vw] md:w-[2vw] shrink-0 items-center justify-center rounded-full bg-orangeChosen/15 text-orangeChosen"
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="md:w-4 md:h-4">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-black/5 dark:border-white/10 px-[4vw] md:px-[1.25vw] pb-[4vw] md:pb-[1.25vw] pt-[1vw] md:pt-[0.5vw]">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function MotionBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const statHighlight = [
  { k: "Founded", v: "1912" },
  { k: "China rank", v: "Top 100 (2025)" },
  { k: "Global partners", v: "170+" },
  { k: "Undergraduates", v: "47,000+" },
];

const esiTags = [
  "Clinical Medicine",
  "Neuroscience & Behavior",
  "Pharmacology & Toxicology",
  "Biology & Biochemistry",
  "Engineering & Computer Science",
];

function getNavScrollOffsetPx(): number {
  if (typeof window === "undefined") return 0;
  const w = window.innerWidth;
  return w * (w >= 768 ? 0.12 : 0.32);
}

export default function NantongUniversityInteractive() {
  const [activeId, setActiveId] = useState(NAV[0].id);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const updateActiveFromScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    const offsetPx = getNavScrollOffsetPx() + 32;
    const y = window.scrollY + offsetPx;
    let current = NAV[0].id;
    for (const { id } of NAV) {
      const el = document.getElementById(id);
      if (!el) continue;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      if (sectionTop <= y) current = id;
    }
    setActiveId(current);
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      setActiveId(id);
      const el = sectionRefs.current[id] ?? document.getElementById(id);
      if (!el || typeof window === "undefined") return;
      const offsetPx = getNavScrollOffsetPx();
      const top =
        el.getBoundingClientRect().top + window.scrollY - offsetPx;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      window.setTimeout(() => updateActiveFromScroll(), 450);
      window.setTimeout(() => updateActiveFromScroll(), 900);
    },
    [updateActiveFromScroll]
  );

  useEffect(() => {
    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveFromScroll();
        ticking = false;
      });
    };
    updateActiveFromScroll();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [updateActiveFromScroll]);

  return (
    <div>
      <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw] md:pt-[8vw]">
        <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
          <Breadcrumbs />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-stretch w-full text-black overflow-hidden"
        >
          <motion.div
            className="relative md:w-[40.625vw] shrink-0 overflow-hidden"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <Image
              className="w-full h-[55vw] md:h-full min-h-[280px] md:object-cover"
              src="/assets/Images/mbbs-in-china/associated-universities/nantong-university.webp"
              alt="Nantong University campus"
              width={650}
              height={550}
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
          </motion.div>
          <div className="relative mx-[6vw] md:mx-0 py-[4vw] flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]"
            >
              MBBS in China – Nantong University
            </motion.h1>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw] md:gap-[.75vw] items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.96 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black cursor-default"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={64}
                    height={64}
                    className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative overflow-hidden shrink-0"
                  />
                  <p className="text-tinyTextPhone md:text-tinyText text-center leading-[150%]">
                    {item.text} <br />
                    <span className="font-semibold"> {item.label}</span>
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-[4vw] md:mt-[2vw] flex flex-wrap gap-[2vw] md:gap-[1vw] items-center"
            >
              <Link
                href="/contact-us"
                className="inline-flex rounded-full bg-orangeChosen px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.55vw] text-smallTextPhone md:text-smallText font-semibold text-white shadow-[0_8px_24px_rgba(255,117,0,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Enquire now
              </Link>
              <button
                type="button"
                onClick={() => scrollTo("nt-documents")}
                className="inline-flex rounded-full border-2 border-orangeChosen px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.5vw] text-smallTextPhone md:text-smallText font-semibold text-orangeChosen transition-colors hover:bg-orangeChosen/10"
              >
                View admission checklist
              </button>
            </motion.div>
            <CallingBox />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-[6vw] md:mx-[12.5vw] mb-[8vw] md:mb-[2.5vw] grid grid-cols-2 md:grid-cols-4 gap-[3vw] md:gap-[1vw]"
      >
        {statHighlight.map((s, i) => (
          <div
            key={i}
            className="group rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 bg-gradient-to-br from-linenChosen to-white dark:from-white/5 dark:to-transparent p-[4vw] md:p-[1.25vw] text-center transition-transform duration-300 hover:-translate-y-1 hover:border-orangeChosen/50 hover:shadow-lg"
          >
            <p className="text-tinyTextPhone md:text-tinyText font-semibold text-orangeChosen uppercase tracking-wide">
              {s.k}
            </p>
            <p className="mt-[1vw] md:mt-[0.35vw] text-h6TextPhone md:text-h4Text font-bold leading-tight">
              {s.v}
            </p>
          </div>
        ))}
      </motion.div>
      <div className="sticky top-[16vw] md:top-[6vw] pt-[1vw] z-100  bg-white ">

      <SectionNav activeId={activeId} onNavigate={scrollTo} />
      </div>
      <section
        id="nt-overview"
        ref={(el) => {
          sectionRefs.current["nt-overview"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3}>About Nantong University</h3>
          <p className={p}>
            Established in 1912, Nantong University is one of China’s
            well-recognized institutions with a strong legacy in medical
            education and research. It was founded by renowned industrialist and
            educator Zhang Jian.
          </p>
          <p className={p}>
            In 2004, the university was restructured through the merger of
            Nantong Medical College, Nantong Institute of Technology, and Nantong
            Normal College, creating a comprehensive multidisciplinary
            university. There are 27 schools, one independent college, one
            affiliated Hospital of Nantong University, School of International
            Education, and School of Continuing Education in the university.
            There are 7 first-level doctoral programs of basic medicine,
            clinical medicine, information and communication engineering, Public
            Health and Preventive Medicine, Special Medicine, 1 professional
            doctor degree program, 25 first-level master degree programs, and
            30 professional master degree programs. 12 disciplines of Clinical
            Medicine, Neuroscience and Behavioral Science, Engineering,
            Pharmacology & Toxicology, Biology and Biochemistry, Chemistry,
            Materials Science, Molecular Biology and Genetics, Computer Science
            Environment/ Ecology Immunology, Plant & Animal Science entered the
            top 1% of ESI global ranking of disciplines.
          </p>
          <AnimatePresence initial={false}>
            {profileExpanded ? (
              <motion.div
                key="rest"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <p className={p}>
                  There are 3.274 faculty members in the university currently,
                  including 1,697 with senior and higher titles, and 1,913
                  doctoral and master tutors. There are 79 undergraduate
                  programs, covering 10 disciplines of literature, science,
                  engineering, medicine, art, economics, law, pedagogy, history
                  and management, etc. There are nearly 47,000 full-time
                  undergraduates, more than 6,400 postgraduates and 1000 overseas
                  students. The average annual employment rate of students keeps
                  above 95%.
                </p>
                <p className={p}>
                  The university has a number of high-end research platforms,
                  such as the National-local Joint Engineering Research Center,
                  the Key Laboratory of the Ministry of Education, the Key
                  Laboratory of Sinopec, the Provincial Key Laboratory and
                  Engineering Center, the Cooperative Innovation Center of
                  Jiangsu Universities and the Key Research Base of Philosophy and
                  Social Sciences of Provincial Universities. Over the past
                  five years, it has undertaken more than 600 projects of
                  National Key Research and Development Projects, Project of
                  National Natural Science and Social Science Foundation.
                </p>
                <p className={p}>
                  The university has extensively carried out overseas exchanges
                  and cooperation. It has established friendly cooperative
                  relations with 170 universities and research institutes in the
                  countries of United States, Canada, Britain, Germany, France,
                  Italy, Russia, Australia, Japan, Korea, and Chinese regions of
                  Hong Kong, Macao and Taiwan. Today, it is ranked among the Top
                  100 universities in China (2025) and continues to grow as a
                  preferred destination for MBBS in China for international
                  students.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <button
            type="button"
            onClick={() => setProfileExpanded(!profileExpanded)}
            className="mb-[4vw] md:mb-[1.5vw] text-smallTextPhone md:text-smallText font-semibold text-orangeChosen underline-offset-4 hover:underline"
          >
            {profileExpanded ? "Show less" : "Show full university profile"}
          </button>

          <h3 className={h3}>About Nantong City</h3>
          <p className={p}>
            Nantong is a beautiful and rapidly developing coastal city located
            in Jiangsu Province, China, on the northern bank of the Yangtze
            River. Known as the “First City in Modern China”, Nantong blends
            rich history, modern infrastructure, and a peaceful lifestyle,
            making it an ideal destination for international students.
          </p>

          <h4 className={h4}>Location Advantage</h4>
          <ul className={ul}>
            <li>Just 1 hour from Shanghai by high-speed train</li>
            <li>Well-connected by rail, road, and air</li>
            <li>Close to major economic and educational hubs</li>
          </ul>
          <p className={p}>
            Its strategic location offers students access to global
            opportunities while living in a calm and affordable environment.
          </p>
        </MotionBlock>
      </section>

      <section
        id="nt-life"
        ref={(el) => {
          sectionRefs.current["nt-life"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3 + " mb-[2vw] md:mb-[1vw]"}>Living at Nantong University</h3>
        </MotionBlock>
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <AccordionItem title="Student Life Overview" defaultOpen>
            <p className={p + " mb-0"}>
              Living at Nantong University offers a safe, comfortable, and
              academically focused environment for international students. With
              modern facilities, affordable living, and a welcoming campus
              atmosphere, students can easily adapt to life in China.
            </p>
          </AccordionItem>
          <AccordionItem title="Accommodation Facilities">
            <p className={p}>
              The university provides on-campus hostel facilities for
              international students:
            </p>
            <ul className={ul}>
              <li>Fully furnished rooms (bed, study table, wardrobe)</li>
              <li>Attached/shared bathrooms</li>
              <li>24/7 electricity, water, and internet access</li>
              <li>Laundry and common areas available</li>
              <li>
                Hostels are located close to classrooms and hospitals, ensuring
                convenience.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Food & Dining">
            <p className={p}>Students have access to:</p>
            <ul className={ul}>
              <li>University canteens with a variety of meals</li>
              <li>Availability of halal and vegetarian food options</li>
              <li>Nearby restaurants offering international cuisines</li>
              <li>
                Indian food is also available in and around Nantong, making it
                easier for Indian students to adjust.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Campus Facilities">
            <p className={p}>Nantong University offers modern infrastructure:</p>
            <ul className={ul}>
              <li>Well-equipped libraries</li>
              <li>Advanced laboratories</li>
              <li>Affiliated hospitals for clinical training</li>
              <li>Sports complexes and gym</li>
              <li>Convenience stores and student service centers</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Safety & Security">
            <ul className={ul}>
              <li>24/7 campus security</li>
              <li>CCTV surveillance</li>
              <li>Secure hostel entry systems</li>
              <li>
                The campus ensures a safe environment for international students.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Cost of Living">
            <p className={p}>
              Living at Nantong University is affordable compared to big cities
              like Shanghai:
            </p>
            <ul className={ul}>
              <li>Hostel: Budget-friendly</li>
              <li>Food: Low-cost options available</li>
              <li>Transport: Economical public transport</li>
              <li>Overall, students can manage expenses comfortably.</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      <section
        id="nt-mbbs"
        ref={(el) => {
          sectionRefs.current["nt-mbbs"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3}>MBBS in Nantong University</h3>
          <p className={p}>
            Pursuing MBBS in China at Nantong University is a popular choice
            among international students, especially Indian students, due to its
            affordable fees, global recognition, and strong clinical training.
          </p>
          <div className="grid md:grid-cols-2 gap-[3vw] md:gap-[1vw] mb-[6vw] md:mb-[2vw]">
            {[
              "Degree: MBBS (Bachelor of Medicine & Bachelor of Surgery)",
              "Medium of Teaching: English",
              "Tution Fees: 26,000 RMB/Year",
              "Hostel Fee: 6,000 RMB/Year",
              "Duration: 6 Years (5 Years Study + 1 Year Internship)",
              "Clinical Training: Affiliated teaching hospitals",
              "Location: Nantong (1 hour from Shanghai)",
              "Recognized by WHO & accepted globally",
            ].map((line) => (
              <div
                key={line}
                className="rounded-[2.5vw] md:rounded-[0.75vw] border border-black/10 dark:border-white/10 bg-linenChosen/40 dark:bg-white/[0.06] px-[4vw] md:px-[1vw] py-[3vw] md:py-[0.75vw] text-smallTextPhone md:text-regularText leading-[160%] transition-all duration-200 hover:border-orangeChosen/40 hover:bg-linenChosen/80"
              >
                {line}
              </div>
            ))}
          </div>

          <h3 className={h3 + " mb-[2vw] md:mb-[1vw]"}>Campus & Facilities – Nantong University</h3>
        </MotionBlock>
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <AccordionItem title="Modern & Student-Centric Campus" defaultOpen>
            <p className={p + " mb-0"}>
              The campus of Nantong University is designed to provide a
              comfortable, safe, and academically enriching environment for both
              local and international students. With multiple campuses spread
              across Nantong, the university combines modern infrastructure with
              a peaceful atmosphere ideal for focused study.
            </p>
          </AccordionItem>
          <AccordionItem title="Academic Infrastructure">
            <p className={p}>
              The university offers world-class academic facilities:
            </p>
            <ul className={ul}>
              <li>Spacious and digitally equipped classrooms</li>
              <li>Advanced laboratories for medical and scientific research</li>
              <li>
                Comprehensive libraries with vast collections of books,
                journals, and digital resources
              </li>
              <li>E-learning platforms and smart teaching systems</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Medical & Clinical Facilities">
            <p className={p}>
              A major advantage of studying at Nantong University is its strong
              clinical exposure:
            </p>
            <ul className={ul}>
              <li>Affiliated teaching hospitals with modern equipment</li>
              <li>Hands-on clinical training for MBBS students</li>
              <li>Early patient interaction and practical learning</li>
              <li>Specialized labs for medical research</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Accommodation & Student Housing">
            <p className={p}>On-campus accommodation includes:</p>
            <ul className={ul}>
              <li>Fully furnished rooms</li>
              <li>High-speed internet access</li>
              <li>Heating/cooling systems</li>
              <li>24/7 water and electricity</li>
              <li>Safe and secure hostel environment</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Strong Medical Education">
            <ul className={ul}>
              <li>
                7 Doctoral Programs including:
                <ul className="list-disc ml-[4vw] mt-[1vw]">
                  <li>Clinical Medicine</li>
                  <li>Public Health & Preventive Medicine</li>
                </ul>
              </li>
              <li>25+ Master’s Programs</li>
              <li>Advanced MBBS curriculum aligned with global standards</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Top 1% Global Disciplines (ESI Ranking)">
            <div className="flex flex-wrap gap-[2vw] md:gap-[0.5vw]">
              {esiTags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-default rounded-full border border-orangeChosen/30 bg-white dark:bg-white/10 px-[3.5vw] md:px-[0.9vw] py-[1.5vw] md:py-[0.35vw] text-tinyTextPhone md:text-tinyText font-medium transition-all duration-200 hover:scale-105 hover:border-orangeChosen hover:bg-orangeChosen hover:text-white hover:shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem title="University Structure & Facilities">
            <ul className={ul}>
              <li>27 academic schools + 1 independent college</li>
              <li>1 affiliated teaching hospital for clinical training</li>
              <li>
                79 undergraduate programs across:
                <ul className="list-disc ml-[4vw] mt-[1vw]">
                  <li>Medicine</li>
                  <li>Engineering</li>
                  <li>Science</li>
                  <li>Law, Arts & Management</li>
                </ul>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Faculty Strength">
            <ul className={ul}>
              <li>3,200+ faculty members</li>
              <li>1,600+ senior professors</li>
              <li>1,900+ postgraduate supervisors</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Student Strength">
            <ul className={ul}>
              <li>47,000+ undergraduate students</li>
              <li>6,400+ postgraduate students</li>
              <li>1,000+ international students</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] text-black md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[8vw] md:mb-[3vw] items-center bg-linenChosen"
      >
        <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
          <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">
            MBBS in China – Key Advantages
          </h3>
          <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw] leading-[170%]">
            <li>
              Affordable tuition fees compared to private medical colleges
            </li>
            <li>English-medium MBBS programs</li>
            <li>Modern laboratories & clinical exposure</li>
            <li>
              Globally accepted degree (eligible for FMGE/NExT, USMLE, PLAB)
            </li>
            <li>Safe and student-friendly campus</li>
          </ul>
        </div>
        <motion.div
          whileHover={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="ml-auto w-full md:w-[32.5vw] shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=75"
            className="w-full h-auto rounded-[2vw] md:rounded-[1vw] object-cover shadow-xl"
            width={690}
            height={690}
            alt="Medical university in China"
          />
        </motion.div>
      </motion.div>

      <section
        id="nt-global"
        ref={(el) => {
          sectionRefs.current["nt-global"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3}>Research & Innovation</h3>
          <p className={p}>Nantong University is equipped with:</p>
          <ul className={ul + " mb-[4vw] md:mb-[1vw]"}>
            <li>National Engineering Research Centers</li>
            <li>Ministry of Education Key Laboratories</li>
            <li>Provincial Research Platforms</li>
            <li>
              Over 600+ national research projects completed in the last 5 years.
            </li>
          </ul>

          <h3 className={h3}>International Collaboration</h3>
          <p className={p}>
            The university has partnerships with 170+ universities worldwide,
            including institutions in:
          </p>
          <div className="flex flex-wrap gap-[2vw] md:gap-[0.5vw] mb-[3vw] md:mb-[1vw]">
            {["USA, UK, Canada", "Germany, France, Italy", "Australia, Japan, South Korea"].map(
              (region) => (
                <span
                  key={region}
                  className="rounded-lg border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 px-[3vw] md:px-[0.75vw] py-[2vw] md:py-[0.4vw] text-smallTextPhone md:text-smallText font-medium"
                >
                  {region}
                </span>
              )
            )}
          </div>
          <p className={p}>
            This ensures strong global exposure for MBBS students in China.
          </p>

          <h3 className={h3}>Location Advantage – Study Near Shanghai</h3>
          <p className={p}>Located in Nantong, a modern and safe city:</p>
          <ul className={ul + " mb-[4vw] md:mb-[1vw]"}>
            <li>Just 1 hour from Shanghai via high-speed train</li>
            <li>Peaceful environment ideal for study</li>
            <li>Lower cost of living than major metro cities</li>
          </ul>

          <h3 className={h3 + " mb-[2vw] md:mb-[1vw]"}>Climate in Nantong</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[3vw] md:gap-[1vw] mb-[6vw] md:mb-[2vw]">
            {[
              "Average temperature: ~15°C",
              "Annual rainfall: 1000–1100 mm",
              "Climate type: Humid subtropical",
              "Four distinct seasons with mild winters",
            ].map((c) => (
              <div
                key={c}
                className="rounded-[2vw] md:rounded-[0.65vw] bg-linenChosen/50 dark:bg-white/[0.06] border border-black/5 px-[3vw] md:px-[1vw] py-[3vw] md:py-[0.85vw] text-smallTextPhone md:text-regularText text-center"
              >
                {c}
              </div>
            ))}
          </div>

          <h3 className={h3}>Facilities for International Students</h3>
          <ul className={ul + " mb-0"}>
            <li>Fully furnished on-campus accommodation</li>
            <li>Indian food availability</li>
            <li>Active student community & cultural activities</li>
            <li>Dedicated international student support</li>
          </ul>
        </MotionBlock>
      </section>

      <section
        id="nt-admission"
        ref={(el) => {
          sectionRefs.current["nt-admission"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[2vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3 + " mb-[2vw] md:mb-[1vw]"}>MBBS Programs & Admission</h3>
          <div className="grid md:grid-cols-2 gap-[4vw] md:gap-[1.25vw] mb-[6vw] md:mb-[2vw]">
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 dark:border-white/10 p-[5vw] md:p-[1.5vw] bg-white/60 dark:bg-white/[0.04] shadow-md transition-shadow hover:shadow-lg">
              <h4 className="text-h6TextPhone md:text-h5Text font-bold mb-[2vw] md:mb-[0.75vw]">
                Programs Offered:
              </h4>
              <ul className={ul}>
                <li>MBBS (English Medium)</li>
                <li>Pharmacy</li>
                <li>Engineering & other courses</li>
              </ul>
            </div>
            <div className="rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/25 p-[5vw] md:p-[1.5vw] bg-linenChosen/60 dark:bg-orangeChosen/10 shadow-md transition-shadow hover:shadow-lg">
              <h4 className="text-h6TextPhone md:text-h5Text font-bold mb-[2vw] md:mb-[0.75vw]">
                Scholarships Available:
              </h4>
              <ul className={ul}>
                <li>Chinese Government Scholarships</li>
                <li>Provincial Scholarships</li>
                <li>University Scholarships</li>
              </ul>
            </div>
          </div>
        </MotionBlock>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] text-black md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[8vw] md:mb-[3vw] items-center bg-linenChosen"
      >
        <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
          <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%]">
            Why MBBS in China at Nantong University?
          </h3>
          <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw] leading-[170%]">
            <li>MBBS in China for Indian students</li>
            <li>Affordable MBBS abroad</li>
            <li>English medium MBBS in China</li>
            <li>Top medical universities in China</li>
            <li>Low-cost MBBS with global recognition</li>
          </ul>
        </div>
        <motion.div
          whileHover={{ scale: 1 }}
          className="ml-auto w-full md:w-[32.5vw] shrink-0"
        >
          <Image
            src="/assets/Images/mbbs-in-nepal/nepal2.png"
            className="w-full max-w-[500px] h-auto rounded-[2vw] md:rounded-[1vw] object-cover"
            width={690}
            height={690}
            alt="Medical education and clinical learning"
          />
        </motion.div>
      </motion.div>

      <section className="mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white">
        <MotionBlock>
          <h3 className={h3}>Global Recognition & Rankings</h3>
          <ul className={ul + " mb-[6vw] md:mb-[2vw]"}>
            <li>Ranked Top 100 in China (2025 Evaluation)</li>
            <li>
              ESI Ranking: Among top 1% globally in multiple disciplines
            </li>
            <li>Globally recognized medical degrees (WHO-listed)</li>
          </ul>

          <div id="nt-documents" className="scroll-mt-[12vw] md:scroll-mt-[7vw] rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white dark:from-white/5 dark:to-transparent p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw]">
              Documents Required for MBBS admission in Zhejing University
            </h3>
            <ul className="grid md:grid-cols-2 gap-[2vw] md:gap-[0.75vw] list-none ml-0">
              {[
                "10th, 12th Mark sheet",
                "NEET score card",
                "1 passport size photograph",
                "Valid Indian Passport",
                "Physical Fitness certificate",
                "Gap certificate (in case there is any gap in the academic year)",
                "No criminal report",
              ].map((doc) => (
                <li
                  key={doc}
                  className="flex items-start gap-[2vw] md:gap-[0.65vw] text-smallTextPhone md:text-regularText"
                >
                  <span className="mt-[0.35vw] md:mt-[0.2vw] flex h-[6vw] w-[6vw] md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-orangeChosen text-white text-tinyTextPhone md:text-xs font-bold leading-none">
                    ✓
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-[5vw] md:mt-[1.5vw] flex flex-wrap gap-[3vw] md:gap-[1vw]">
              <Link
                href="/contact-us"
                className="inline-flex rounded-full bg-orangeChosen px-[6vw] md:px-[1.5vw] py-[3vw] md:py-[0.65vw] text-smallTextPhone md:text-smallText font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                Start your application
              </Link>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex rounded-full border border-orangeChosen px-[6vw] md:px-[1.5vw] py-[3vw] md:py-[0.6vw] text-smallTextPhone md:text-smallText font-semibold text-orangeChosen hover:bg-orangeChosen/10"
              >
                Back to top
              </button>
            </div>
          </div>
        </MotionBlock>
      </section>
    </div>
  );
}
