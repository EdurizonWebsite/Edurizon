"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcumbs";
import CallingBox from "@/components/studyDestinationComponents/header/callingBox";
import {
  getNavScrollOffsetPx,
  InteractiveAccordionItem,
  InteractiveSectionNav,
  listClass,
  MotionRevealBlock,
  paragraphClass,
  sectionHeadingClass,
  subHeadingClass,
} from "@/components/studyDestinationComponents/shared/interactive";

const services = [
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Established", label: "1942" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Medium", label: "English" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Moscow & Obninsk" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Duration", label: "6 Years" },
];

const NAV = [
  { id: "mephi-overview", label: "Overview" },
  { id: "mephi-campuses", label: "Campuses" },
  { id: "mephi-facts", label: "Key Facts" },
  { id: "mephi-why", label: "Why MEPhI" },
  { id: "mephi-career", label: "Career & Research" },
  { id: "mephi-admission", label: "Admission" },
];

export default function MephiInteractive() {
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
              className="w-full h-[55vw] md:h-full min-h-[280px] object-cover"
              src="/assets/Images/universities/russia/NationalResearchNuclearUniversity1.webp"
              alt="National Research Nuclear University MEPhI"
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
              className="font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw] text-left"
            >
              National Research Nuclear University MEPhI
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
                  <Image src={item.icon} alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw]" />
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
              <Link href="/contact-us" className="inline-flex rounded-full bg-orangeChosen px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.55vw] text-smallTextPhone md:text-smallText font-semibold text-white">
                Enquire now
              </Link>
              <button
                type="button"
                onClick={() => scrollTo("mephi-admission")}
                className="inline-flex rounded-full border-2 border-orangeChosen px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.5vw] text-smallTextPhone md:text-smallText font-semibold text-orangeChosen"
              >
                View admission checklist
              </button>
            </motion.div>
            <CallingBox />
          </div>
        </motion.div>
      </div>

      <div className="sticky top-[14vw] md:top-[6vw] pt-[1vw] z-100 bg-white">
        <InteractiveSectionNav items={NAV} activeId={activeId} onNavigate={scrollTo} />
      </div>

      <section id="mephi-overview" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["mephi-overview"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>National Research Nuclear University MEPhI – Study MBBS in Russia</h3>
          <p className={paragraphClass}>
            The National Research Nuclear University MEPhI (Moscow Engineering Physics Institute) is a leading public university located in Moscow, Russia. Established in 1942, it was initially known as the Moscow Mechanical Institute of Munitions and later renamed the Moscow Engineering Physics Institute in 1953. Today, MEPhI is recognized as one of the top universities in Russia for MBBS, offering world-class education in medicine, engineering, and nuclear science.
          </p>
          <p className={paragraphClass}>
            In 2009, under a Russian government initiative, MEPhI was granted the prestigious status of a National Research University, strengthening its position among the best universities for MBBS in Russia. The university focuses on delivering high-quality education, advanced research opportunities, and professional training across various disciplines, including MBBS abroad for Indian students.
          </p>
          <h4 className={subHeadingClass}>MEPhI has two campuses</h4>
        </MotionRevealBlock>
      </section>

      <section id="mephi-campuses" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["mephi-campuses"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Main Campus of MEPhI (Russia) — Moscow Main Campus (Central Campus)" defaultOpen>
            <p className={paragraphClass}>Kashirskoe Highway, 31, Moscow, 115409, Russia</p>
            <ul className={listClass}>
              <li>Located in Moscow</li>
              <li>This is the headquarters and main academic campus</li>
              <li>Houses major faculties including General Medicine, Engineering, and Nuclear Sciences</li>
              <li>Equipped with advanced laboratories, simulation centers, and research facilities</li>
              <li>Close to Kashirskaya Metro Station (excellent connectivity)</li>
              <li>Fees – 6,57,360 ruble</li>
              <li>Hostel – 20,000 ruble</li>
              <li>Food and other charges etc</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Obninsk Campus (Medical Institute)">
            <p className={paragraphClass}>1 Studgorodok, Obninsk, Kaluga Region, 249040, Russia</p>
            <ul className={listClass}>
              <li>Located in Obninsk</li>
              <li>Known as the Medical Institute of MEPhI</li>
              <li>Primary center for MBBS / medical education in Russia</li>
              <li>Focuses on clinical training, medical sciences, and hospital exposure</li>
              <li>Modern infrastructure with strong practical and research facilities</li>
              <li>Fees – 5,10,000 ruble</li>
              <li>Hostel – 14,000 ruble</li>
              <li>Food and other charges etc</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section id="mephi-facts" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["mephi-facts"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Key Facts – MBBS at MEPhI Russia</h3>
          <ul className={listClass}>
            <li>Type – National Research University (similar to All India Institute of Medical Sciences level institutions)</li>
            <li>Established – 1942</li>
            <li>Total Students – 35,000+ across campuses</li>
            <li>Students in Moscow – 7,500+ (including 1300+ international students)</li>
            <li>Medium of Instruction – English</li>
            <li>QS World Ranking – 497</li>
            <li>QS EECA Ranking – 34</li>
            <li>Advanced Research Labs & Simulation Centers</li>
            <li>Direct admission process (no donation)</li>
            <li>Modern campus with global infrastructure</li>
            <li>One of the best medical universities in Russia for MBBS</li>
            <li>Provides English-medium MBBS courses in Russia</li>
            <li>Strong clinical exposure in affiliated hospitals</li>
            <li>Ideal destination for Indian students studying MBBS abroad</li>
            <li>Safe, multicultural, and student-friendly environment</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="mephi-why" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["mephi-why"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 shadow-[0_14px_40px_rgba(255,117,0,0.12)]">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">
              Why Choose MEPhI for MBBS in Russia?
            </h3>
            <p className={paragraphClass}>
              The National Research Nuclear University MEPhI is widely regarded as one of the best universities for MBBS in Russia due to its strong academic reputation and practical training approach.
            </p>
            <h4 className={subHeadingClass}>Key Advantages:</h4>
            <ul className={listClass}>
              <li>Globally Recognized MBBS Degree approved by National Medical Commission (NMC) and World Health Organization (WHO)</li>
              <li>Affordable MBBS in Russia compared to private medical colleges in India</li>
              <li>English-medium MBBS program for international students</li>
              <li>No donation or hidden charges</li>
              <li>Strong clinical exposure in affiliated hospitals</li>
              <li>Early practical learning with modern simulation labs</li>
              <li>Safe, secure, and student-friendly campus</li>
            </ul>
          </div>
          <Image
            src="/assets/Images/mbbs-in-nepal/nepal2.png"
            className="w-full md:w-[32.5vw] h-auto rounded-[2vw] md:rounded-[1vw] object-cover"
            width={690}
            height={690}
            alt="MEPhI practical training and student life"
          />
        </div>
      </section>

      <section id="mephi-career" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["mephi-career"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Duration of MBBS in Russia at MEPhI</h3>
          <p className={paragraphClass}>The MBBS course duration in Russia at MEPhI is 6 years, including internship.</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>First 3 years: Focus on basic medical sciences (Anatomy, Physiology, Biochemistry)</li>
            <li>Last 3 years: Clinical training in hospitals (Medicine, Surgery, Pediatrics, etc.)</li>
          </ul>
          <p className={paragraphClass}>
            This structure ensures students gain both theoretical knowledge and practical skills required for a successful medical career.
          </p>

          <h3 className={sectionHeadingClass}>Affordable MBBS in Russia – Fees & Living Cost</h3>
          <p className={paragraphClass}>One of the biggest advantages of choosing MEPhI is the low-cost MBBS in Russia.</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Tuition fees are much lower than private medical colleges in India</li>
            <li>Monthly living cost: Approx. USD 100–150</li>
            <li>Budget-friendly food, transport, and accommodation</li>
          </ul>
          <p className={paragraphClass}>
            This makes it an ideal option for students looking for affordable MBBS abroad without compromising quality.
          </p>

          <h3 className={sectionHeadingClass}>Career Opportunities After MBBS in Russia</h3>
          <p className={paragraphClass}>Graduates from MEPhI have excellent career prospects worldwide:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Practice in India after clearing FMGE/NExT</li>
            <li>Apply for USMLE (USA), PLAB (UK), MCCQE (Canada)</li>
            <li>Work in Russia or CIS countries</li>
            <li>Explore careers in research, public health, or hospital management</li>
            <li>Opportunities in Gulf countries like UAE, Saudi Arabia, and Qatar</li>
          </ul>

          <h3 className={sectionHeadingClass}>Recognition & Accreditation</h3>
          <p className={paragraphClass}>The National Research Nuclear University MEPhI is recognized by:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>National Medical Commission (NMC)</li>
            <li>World Health Organization (WHO)</li>
            <li>World Directory of Medical Schools (WDOMS)</li>
            <li>Ministry of Science & Higher Education, Russia</li>
            <li>International academic organizations and global universities</li>
          </ul>
          <p className={paragraphClass}>
            This ensures that the MBBS degree from Russia is globally accepted.
          </p>

          <h3 className={sectionHeadingClass}>Research Opportunities at MEPhI</h3>
          <p className={paragraphClass}>MEPhI is a research-driven university, offering excellent opportunities:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Advanced laboratories and simulation centers</li>
            <li>Participation in international research projects</li>
            <li>Exposure to modern medical technologies</li>
            <li>Collaboration with global institutions and hospitals</li>
          </ul>

          <h3 className={sectionHeadingClass}>Hostel & Student Life</h3>
          <p className={paragraphClass}>MEPhI provides comfortable and secure accommodation:</p>
          <ul className={listClass}>
            <li>Fully furnished hostel rooms</li>
            <li>Central heating for winter</li>
            <li>High-speed internet and study areas</li>
            <li>24/7 security and surveillance</li>
            <li>Multicultural student environment</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="mephi-admission" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["mephi-admission"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white">
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              Eligibility Criteria for MBBS in Russia
            </h3>
            <p className={paragraphClass}>To apply for MBBS at MEPhI, students must:</p>
            <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
              <li>Be at least 17 years old</li>
              <li>Have 50% in Physics, Chemistry, Biology</li>
              <li>Qualify the NEET exam</li>
            </ul>

            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              Admission Process – MBBS in Russia
            </h3>
            <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
              <li>Submit documents (10th & 12th marksheets, passport, NEET scorecard)</li>
              <li>Receive admission letter</li>
              <li>Schedule for entrance for exam</li>
              <li>Pay fees to confirm seat</li>
              <li>Get invitation letter</li>
              <li>Apply for visa</li>
              <li>Book flight and travel to Russia</li>
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
        </MotionRevealBlock>
      </section>
    </div>
  );
}

