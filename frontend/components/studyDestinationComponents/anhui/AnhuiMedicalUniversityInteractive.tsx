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
    text: "Tution Fees",
    label: "30,000 RMB/Year",
  },
  {
    icon: "/assets/Images/Icons/ExperienceIcon.svg",
    text: "Medium",
    label: "English",
  },
  {
    icon: "/assets/Images/Icons/TieUpsIcon.svg",
    text: "Location",
    label: "Hefei, China",
  },
  {
    icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
    text: "Type",
    label: "Public Medical University",
  },
];

const NAV = [
  { id: "am-overview", label: "Overview" },
  { id: "am-hefei", label: "Hefei city" },
  { id: "am-academics", label: "Academics" },
  { id: "am-campus", label: "Campus" },
  { id: "am-documents", label: "Admission" },
];

const p =
  "text-smallTextPhone md:text-regularText text-left md:text-justify mb-[4vw] md:mb-[1vw] leading-[170%]";
const ul =
  "text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-0 text-left md:text-regularText md:text-justify leading-[170%]";
const h3 =
  "text-h6TextPhone leading-[120%] md:text-h5Text text-left font-bold scroll-mt-[12vw] md:scroll-mt-[7vw]";
const h4 =
  "text-smallTextPhone md:text-regularText font-bold text-left mb-[2vw] md:mb-[0.75vw] mt-[2vw] md:mt-[1vw]";

function getNavScrollOffsetPx(): number {
  if (typeof window === "undefined") return 0;
  const w = window.innerWidth;
  return w * (w >= 768 ? 0.12 : 0.32);
}

function SectionNav({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      className="sticky top-[16vw] md:top-[8vw] z-30 mx-[4vw] md:mx-[12.5vw] mb-[6vw] md:mb-[2vw]"
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
  { k: "Established", v: "1926" },
  { k: "Students", v: "16,000+" },
  { k: "Affiliated hospitals", v: "10" },
  { k: "Training centers", v: "40+" },
];

export default function AnhuiMedicalUniversityInteractive() {
  const [activeId, setActiveId] = useState(NAV[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const pauseSpyUntilRef = useRef(0);

  const updateActiveFromScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    if (Date.now() < pauseSpyUntilRef.current) return;
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

  const scrollTo = useCallback((id: string) => {
    pauseSpyUntilRef.current = Date.now() + 900;
    setActiveId(id);
    const el = sectionRefs.current[id] ?? document.getElementById(id);
    if (!el || typeof window === "undefined") return;
    const offsetPx = getNavScrollOffsetPx();
    const top = el.getBoundingClientRect().top + window.scrollY - offsetPx;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

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
              src="/assets/Images/mbbs-in-china/associated-universities/anhui-medical-university.webp"
              alt="Anhui Medical University campus"
              width={650}
              height={550}
              priority
            />
          </motion.div>
          <div className="relative mx-[6vw] md:mx-0 py-[4vw] flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-bold text-left text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]"
            >
              MBBS in China - Anhui Medical University
            </motion.h1>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw] md:gap-[.75vw] items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 16, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black"
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
                    <span className="font-semibold">{item.label}</span>
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
                className="inline-flex rounded-full bg-orangeChosen px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.55vw] text-smallTextPhone md:text-smallText font-semibold text-white"
              >
                Enquire now
              </Link>
              <button
                type="button"
                onClick={() => scrollTo("am-documents")}
                className="inline-flex rounded-full border-2 border-orangeChosen px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.5vw] text-smallTextPhone md:text-smallText font-semibold text-orangeChosen"
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
            className="group rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 bg-gradient-to-br from-linenChosen to-white p-[4vw] md:p-[1.25vw] text-center transition-transform duration-300 hover:-translate-y-1 hover:border-orangeChosen/50 hover:shadow-lg"
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

      <div className="sticky top-[16vw] md:top-[6vw] pt-[1vw] z-100 bg-white">
        <SectionNav activeId={activeId} onNavigate={scrollTo} />
      </div>

      <section
        id="am-overview"
        ref={(el) => {
          sectionRefs.current["am-overview"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3}>About Anhui Medical University</h3>
          <p className={p}>
            Anhui Medical University is a well-established public medical university located in Hefei. It is one of the preferred choices for MBBS in China for Indian students due to its strong academic reputation, modern infrastructure, and affordable fee structure.
          </p>
          <p className={p}>
            The university operates under the Anhui Provincial Government and is supported by China’s Ministry of Education and National Health Commission. With a student population of over 16,000, including international students, it offers a globally recognized MBBS program in China that integrates theoretical knowledge with practical clinical training.
          </p>
          <p className={p}>
            Anhui Medical University is widely known for its advanced teaching system, affiliated hospitals, and research-driven education, making it an ideal destination for students seeking low-cost MBBS abroad and top medical universities in China.
          </p>
          <h4 className={h4}>History</h4>
          <p className={p}>
            Established in 1926 as Dongnan Medical College in Shanghai, the institution later shifted to Anhui Province and finally to Hefei. It was renamed Anhui Medical College and officially became Anhui Medical University in 1996. Today, it stands among the recognized universities for study MBBS in China.
          </p>
        </MotionBlock>
      </section>

      <section
        id="am-hefei"
        ref={(el) => {
          sectionRefs.current["am-hefei"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3}>About Hefei City</h3>
          <p className={p}>
            Hefei is a rapidly developing city and a major hub for education, science, and innovation in eastern China. It is a popular destination for international students pursuing MBBS in China in English medium.
          </p>
          <h4 className={h4}>Location & Connectivity</h4>
          <p className={p}>
            Hefei is strategically located between major cities like Shanghai and Wuhan, offering excellent connectivity through high-speed trains and international transport systems.
          </p>
          <h4 className={h4}>Education Hub</h4>
          <p className={p}>
            The city hosts several reputed institutions including Anhui Medical University, making it a strong center for medical education in China and attracting students globally.
          </p>
          <h4 className={h4}>Student Lifestyle & Living Cost</h4>
          <p className={p}>Hefei is ideal for students looking for affordable MBBS in China:</p>
          <ul className={ul}>
            <li>Low cost of living compared to major cities</li>
            <li>Safe and student-friendly environment</li>
            <li>Availability of Indian and international food</li>
            <li>Efficient public transport system</li>
          </ul>
        </MotionBlock>
      </section>

      <section
        id="am-academics"
        ref={(el) => {
          sectionRefs.current["am-academics"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3}>Academic Structure & MBBS Program in China</h3>
          <p className={p}>Anhui Medical University offers a well-structured MBBS in China program with:</p>
        </MotionBlock>
        <div className="grid md:grid-cols-2 gap-[3vw] md:gap-[1vw] mb-[6vw] md:mb-[2vw]">
          {[
            "Tution Fees: 30,000 RMB/Year",
            "Hostel Fees: 4,000 RMB/Year",
            "24 teaching faculties",
            "10 affiliated hospitals (strong clinical exposure)",
            "40+ clinical training centers",
          ].map((line) => (
            <div
              key={line}
              className="rounded-[2.5vw] md:rounded-[0.75vw] border border-black/10 bg-linenChosen/40 px-[4vw] md:px-[1vw] py-[3vw] md:py-[0.75vw] text-smallTextPhone md:text-regularText leading-[160%]"
            >
              {line}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <AccordionItem title="Programs offered include:" defaultOpen>
            <ul className={ul}>
              <li>MBBS (Clinical Medicine) in English medium</li>
              <li>Master’s and PhD programs</li>
              <li>Postdoctoral research opportunities</li>
            </ul>
            <p className={p + " mt-[2vw] md:mt-[1vw]"}>
              This makes it one of the best options for MBBS admission in China for Indian students.
            </p>
          </AccordionItem>
          <AccordionItem title="Research & Facilities">
            <p className={p}>The university is a leader in medical research with:</p>
            <ul className={ul}>
              <li>40+ research institutes</li>
              <li>Advanced laboratories</li>
              <li>Participation in national-level projects</li>
            </ul>
            <p className={p + " mt-[2vw] md:mt-[1vw]"}>
              It is ideal for students interested in medical research in China along with MBBS studies.
            </p>
          </AccordionItem>
          <AccordionItem title="International Collaboration">
            <p className={p + " mb-0"}>
              The university has partnerships with global institutions, offering exchange programs and enhancing opportunities for students pursuing MBBS abroad in China.
            </p>
          </AccordionItem>
        </div>
      </section>

      <section
        id="am-campus"
        ref={(el) => {
          sectionRefs.current["am-campus"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3}>Campus & Infrastructure</h3>
          <p className={p}>The university has two campuses equipped with:</p>
          <ul className={ul + " mb-[4vw] md:mb-[1vw]"}>
            <li>Modern laboratories</li>
            <li>Digital libraries</li>
            <li>Student hostels</li>
            <li>Sports and recreational facilities</li>
          </ul>
          <p className={p}>
            The campus environment supports international students aiming for MBBS study in China.
          </p>

          <h3 className={h3}>Colleges & Departments</h3>
          <p className={p}>Major faculties include:</p>
          <ul className={ul + " mb-[4vw] md:mb-[1vw]"}>
            <li>Clinical Medicine</li>
            <li>Public Health</li>
            <li>Pharmacy</li>
            <li>Nursing</li>
            <li>Dentistry (Stomatology)</li>
            <li>Basic Medical Sciences</li>
          </ul>
          <p className={p}>Specialized departments:</p>
          <ul className={ul + " mb-[4vw] md:mb-[1vw]"}>
            <li>Medical Psychology</li>
            <li>Rehabilitation</li>
            <li>Anesthesiology</li>
            <li>Medical Imaging</li>
          </ul>
        </MotionBlock>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] text-black md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[8vw] md:mb-[3vw] items-center bg-linenChosen"
      >
        <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
          <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">
            Why Choose Anhui Medical University for MBBS in China?
          </h3>
          <ul className="text-smallTextPhone md:text-regularText list-disc list-outside pl-[2vw] md:pl-[1.5vw] leading-[170%]">
            <li>Recognized university for MBBS in China for Indian students</li>
            <li>Affordable tuition fees and living costs</li>
            <li>English-medium MBBS program</li>
            <li>Strong clinical exposure</li>
            <li>Modern infrastructure and research facilities</li>
            <li>Safe and student-friendly environment</li>
          </ul>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=75"
          className="ml-auto w-full md:w-[32.5vw] h-auto rounded-[2vw] md:rounded-[1vw] object-cover shadow-xl"
          width={690}
          height={690}
          alt="Medical education and campus life"
        />
      </motion.div>

      <section
        id="am-admission"
        ref={(el) => {
          sectionRefs.current["am-admission"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white"
      >
        <MotionBlock>
          <h3 className={h3}>Climate</h3>
          <p className={p}>Hefei has a humid subtropical climate:</p>
          <ul className={ul + " mb-[4vw] md:mb-[1vw]"}>
            <li>Summers: Warm and humid</li>
            <li>Winters: Cool to cold</li>
            <li>Spring & Autumn: Pleasant</li>
          </ul>
          <p className={p}>
            This makes it suitable for students planning to study MBBS abroad in China.
          </p>

          <h3 className={h3}>Attractions & Culture</h3>
          <p className={p}>Popular attractions include:</p>
          <ul className={ul + " mb-[5vw] md:mb-[2vw]"}>
            <li>Baohe Park</li>
            <li>Xiaoyaojin Park</li>
            <li>Museums and cultural landmarks</li>
          </ul>

          <div id="am-documents" className="scroll-mt-[12vw] md:scroll-mt-[7vw] rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              Documents Required for MBBS Admission in China
            </h3>
            <p className={p}>
              For MBBS admission in Anhui Medical University, students need:
            </p>
            <ul className="grid md:grid-cols-2 gap-[2vw] md:gap-[0.75vw] list-none ml-0">
              {[
                "10th & 12th mark sheets",
                "NEET scorecard (mandatory for Indian students)",
                "Valid passport",
                "Passport-size photographs",
                "Medical fitness certificate",
                "Gap certificate (if applicable)",
                "Police clearance / no criminal record",
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
                className="inline-flex rounded-full bg-orangeChosen px-[6vw] md:px-[1.5vw] py-[3vw] md:py-[0.65vw] text-smallTextPhone md:text-smallText font-semibold text-white shadow-lg"
              >
                Start your application
              </Link>
            </div>
          </div>
        </MotionBlock>
      </section>
    </div>
  );
}

