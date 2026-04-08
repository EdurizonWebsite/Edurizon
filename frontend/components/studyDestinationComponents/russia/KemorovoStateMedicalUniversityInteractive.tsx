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
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Established", label: "1955" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Medium", label: "English & Russian" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Kemerovo, Russia" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Duration", label: "6 Years" },
];

const NAV = [
  { id: "kem-overview", label: "Overview" },
  { id: "kem-why", label: "Why KSMU" },
  { id: "kem-mbbs", label: "MBBS Details" },
  { id: "kem-hostel", label: "Hostel" },
  { id: "kem-admission", label: "Admission" },
  { id: "kem-travel", label: "Travel" },
];

const stats = [
  // { k: "University Type", v: "Public" },
  // { k: "Recognition", v: "NMC, WHO, ECFMG" },
  // { k: "NEET", v: "Required (Qualifying)" },
  // { k: "IELTS/TOEFL", v: "Not Required" },
];

export default function KemorovoStateMedicalUniversityInteractive() {
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
              src="/assets/Images/universities/russia/KemerovoStateMedicalUniversity.webp"
              alt="Kemerovo State Medical University"
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
              Kemerovo State Medical University
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
                onClick={() => scrollTo("kem-admission")}
                className="inline-flex rounded-full border-2 border-orangeChosen px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.5vw] text-smallTextPhone md:text-smallText font-semibold text-orangeChosen"
              >
                View admission checklist
              </button>
            </motion.div>
            <CallingBox />
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-[6vw] md:mx-[12.5vw] mb-[8vw] md:mb-[2.5vw] grid grid-cols-2 md:grid-cols-4 gap-[3vw] md:gap-[1vw]"
      >
        {stats.map((s) => (
          <div key={s.k} className="rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 bg-gradient-to-br from-linenChosen to-white p-[4vw] md:p-[1.25vw] text-center">
            <p className="text-tinyTextPhone md:text-tinyText font-semibold text-orangeChosen uppercase tracking-wide">{s.k}</p>
            <p className="mt-[1vw] md:mt-[0.35vw] text-h6TextPhone md:text-h4Text font-bold leading-tight">{s.v}</p>
          </div>
        ))}
      </motion.div> */}

      <div className="sticky top-[14vw] md:top-[6vw] pt-[1vw] z-100 bg-white">
        <InteractiveSectionNav items={NAV} activeId={activeId} onNavigate={scrollTo} />
      </div>

      <section
        id="kem-overview"
        ref={(el) => {
          sectionRefs.current["kem-overview"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Welcome to Kemerovo State Medical University</h3>
          <p className={paragraphClass}>
            Kemerovo State Medical University (KSMU), established in 1955, is one of the best and most affordable medical universities in Russia. Located in Kemerovo, it is widely recognized for providing high-quality MBBS education at low cost, making it a top choice for international students, especially from India.
          </p>
          <p className={paragraphClass}>
            KSMU offers globally recognized MBBS programs in both English and Russian. The university is approved by major medical bodies such as the World Health Organization (WHO), National Medical Commission (NMC), and Educational Commission for Foreign Medical Graduates (ECFMG), ensuring worldwide recognition of its degree.
          </p>

          <h4 className={subHeadingClass}>Location Advantage</h4>
          <p className={paragraphClass}>
            Located in Kemerovo, the university provides a perfect study environment with low living costs—making it ideal for students seeking cheap MBBS abroad options.
          </p>
          <h4 className={subHeadingClass}>City Highlights</h4>
          <ul className={listClass}>
            <li>Affordable cost of living</li>
            <li>Well-connected via Trans-Siberian Railway</li>
            <li>Clean, safe, and student-friendly city</li>
            <li>Rich cultural and natural attractions</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="kem-why"
        ref={(el) => {
          sectionRefs.current["kem-why"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Why Choose Kemerovo State Medical University?</h3>
          <p className={paragraphClass}>Affordable MBBS in Russia with lowest fees</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>No donation or capitation fee required</li>
            <li>Recognized by WHO, NMC & ECFMG</li>
            <li>English-medium MBBS program available</li>
            <li>Modern infrastructure & advanced laboratories</li>
            <li>Highly experienced faculty</li>
            <li>Extensive clinical exposure in affiliated hospitals</li>
            <li>Safe and comfortable hostel facilities</li>
            <li>Ideal for Indian students seeking budget-friendly MBBS abroad</li>
          </ul>

          <h3 className={sectionHeadingClass}>About Kemerovo State University (KemSU)</h3>
          <p className={paragraphClass}>
            KSMU is academically connected with Kemerovo State University, the largest university in the Kuzbass region.
          </p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Over 21,400 students</li>
            <li>Ranked among top 100 universities in Russia</li>
            <li>Ranked in Top 400 QS BRICS Universities (2018)</li>
            <li>Among Top 10 flagship universities in Russia</li>
          </ul>
          <p className={paragraphClass}>
            This collaboration enhances academic quality and research exposure.
          </p>
        </MotionRevealBlock>
      </section>

      <section
        id="kem-mbbs"
        ref={(el) => {
          sectionRefs.current["kem-mbbs"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>MBBS in Kemerovo State Medical University (KSMU)</h3>
          <div className="overflow-x-auto rounded-[3vw] md:rounded-[1vw] border border-black/10 mb-[5vw] md:mb-[2vw]">
            <table className="w-full text-smallTextPhone md:text-regularText">
              <thead>
                <tr className="bg-linenChosen/70">
                  <th className="p-[3vw] md:p-[1vw] text-left">Particulars</th>
                  <th className="p-[3vw] md:p-[1vw] text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Year of Establishment", "1955"],
                  ["University Type", "Public"],
                  ["Recognition", "NMC & WHO Approved"],
                  ["Eligibility", "50% in PCB"],
                  ["Course Duration", "6 Years"],
                  ["NEET", "Required (Qualifying)"],
                  ["IELTS/TOEFL", "Not Required"],
                  ["Medium of Teaching", "English"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-t border-black/10">
                    <td className="p-[3vw] md:p-[1vw] font-semibold">{k}</td>
                    <td className="p-[3vw] md:p-[1vw]">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={paragraphClass}>
            KSMU is considered one of the best universities for MBBS in Russia with affordable fees, offering quality education comparable to global standards.
          </p>
        </MotionRevealBlock>
      </section>

      <section
        id="kem-hostel"
        ref={(el) => {
          sectionRefs.current["kem-hostel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>MBBS Fee Structure 2025</h3>
          <p className={paragraphClass}>KSMU provides one of the lowest MBBS fees in Russia:</p>
        </MotionRevealBlock>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[3vw] md:gap-[1vw] mb-[6vw] md:mb-[2vw]">
          {[
            "Affordable tuition fees",
            "Low-cost hostel accommodation",
            "No donation or hidden charges",
            "Subsidized fees for future years",
          ].map((item) => (
            <div key={item} className="rounded-[2.5vw] md:rounded-[0.75vw] border border-orangeChosen/30 bg-linenChosen/40 px-[4vw] md:px-[1vw] py-[3vw] md:py-[0.85vw] text-smallTextPhone md:text-regularText">
              {item}
            </div>
          ))}
        </div>
        <MotionRevealBlock>
          <p className={paragraphClass}>
            This makes it a top choice for students searching for low-cost MBBS abroad.
          </p>

          <h3 className={sectionHeadingClass}>Hostel & Accommodation</h3>
          <p className={paragraphClass}>KSMU provides international-standard hostel facilities:</p>
        </MotionRevealBlock>
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Hostel Facilities" defaultOpen>
            <ul className={listClass}>
              <li>7 well-maintained hostel buildings</li>
              <li>Fully furnished rooms</li>
              <li>24/7 security and safety</li>
              <li>On-campus dining (healthy meals available)</li>
              <li>Study & recreational areas</li>
            </ul>
            <p className={paragraphClass + " mt-[2vw] md:mt-[1vw]"}>Comfortable, safe, and affordable living for international students.</p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="kem-admission"
        ref={(el) => {
          sectionRefs.current["kem-admission"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Eligibility Criteria for MBBS Admission</h3>
          <p className={paragraphClass}>To apply for MBBS at KemSU:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Minimum age: 17 years</li>
            <li>50% marks in Physics, Chemistry, Biology</li>
            <li>NEET qualification (mandatory for Indian students)</li>
          </ul>

          <h3 className={sectionHeadingClass}>Required Documents</h3>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Valid passport</li>
            <li>10th & 12th certificates</li>
            <li>NEET scorecard</li>
            <li>Medical certificate</li>
            <li>Passport-size photographs</li>
            <li>Admission invitation letter</li>
          </ul>

          <h3 className={sectionHeadingClass}>Admission Process (Step-by-Step)</h3>
          <p className={paragraphClass}>Steps for Admission to KSMU:</p>
          <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
            <li>Fill the Admission Form</li>
            <li>Submit Required Documents</li>
          </ol>
          <ul className={listClass + " mt-[2vw] md:mt-[0.75vw] mb-[2vw] md:mb-[0.75vw]"}>
            <li>10th & 12th mark sheets</li>
            <li>NEET scorecard</li>
            <li>Passport copy</li>
            <li>Medical certificate</li>
          </ul>
          <ol start={3} className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
            <li>Receive Invitation Letter (10–15 days)</li>
            <li>Pay Tuition Fees</li>
            <li>Apply for Student Visa (Processing 10 days)</li>
          </ol>
        </MotionRevealBlock>
      </section>

      <section
        id="kem-travel"
        ref={(el) => {
          sectionRefs.current["kem-travel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              How to Reach Kemerovo from India
            </h3>
            <p className={paragraphClass}>Traveling from India to Kemerovo is simple with connecting flights:</p>
            <h4 className={subHeadingClass}>Step-by-Step Travel Route:</h4>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Fly from India to Russia</li>
            </ol>
            <ul className={listClass + " mt-[2vw] md:mt-[0.75vw] mb-[2vw] md:mb-[0.75vw]"}>
              <li>Major departure cities: Delhi, Mumbai, Chennai</li>
              <li>Arrive at Moscow or Novosibirsk</li>
            </ul>
            <ol start={2} className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Domestic Flight / Train</li>
            </ol>
            <ul className={listClass + " mt-[2vw] md:mt-[0.75vw] mb-[2vw] md:mb-[0.75vw]"}>
              <li>From Moscow/Novosibirsk to Kemerovo</li>
              <li>Duration:</li>
              <li>Flight: 4–5 hours</li>
              <li>Train: 10–12 hours</li>
            </ul>
            <ol start={3} className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Arrival in Kemerovo</li>
            </ol>
            <ul className={listClass + " mt-[2vw] md:mt-[0.75vw]"}>
              <li>University representatives usually assist with airport pickup</li>
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

