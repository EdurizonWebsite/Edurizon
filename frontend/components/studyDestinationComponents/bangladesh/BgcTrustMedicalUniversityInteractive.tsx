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
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Tuition Fees", label: "USD 33,000" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Medium", label: "English" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Near Chattogram" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Duration", label: "5+1 Years" },
];

const NAV = [
  { id: "bgc-overview", label: "Overview" },
  { id: "bgc-course", label: "MBBS details" },
  { id: "bgc-campus", label: "Campus" },
  { id: "bgc-eligibility", label: "Eligibility" },
  { id: "bgc-documents", label: "Admission" },
];

const stats = [
  { k: "Established", v: "2002" },
  { k: "Started", v: "Jan 2003" },
  { k: "Distance", v: "34 km from Chattogram" },
  { k: "Recognition", v: "NMC & WHO" },
];

export default function BgcTrustMedicalUniversityInteractive() {
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
    const offsetPx = getNavScrollOffsetPx() ;
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
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=75"
              alt="BGC Trust Medical College campus"
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
              className="font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]"
            >
              BGC Trust Medical College
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
                onClick={() => scrollTo("bgc-documents")}
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
        {stats.map((s) => (
          <div key={s.k} className="rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 bg-gradient-to-br from-linenChosen to-white p-[4vw] md:p-[1.25vw] text-center">
            <p className="text-tinyTextPhone md:text-tinyText font-semibold text-orangeChosen uppercase tracking-wide">{s.k}</p>
            <p className="mt-[1vw] md:mt-[0.35vw] text-h6TextPhone md:text-h4Text font-bold leading-tight">{s.v}</p>
          </div>
        ))}
      </motion.div>

      <div className="sticky top-[16vw] md:top-[6vw] pt-[1vw] z-100 bg-white">
        <InteractiveSectionNav items={NAV} activeId={activeId} onNavigate={scrollTo} />
      </div>

      <section
        id="bgc-overview"
        ref={(el) => {
          sectionRefs.current["bgc-overview"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>About the College</h3>
          <p className={paragraphClass}>
            BGC Trust Medical College was established in 2002 and started functioning in January 2003. Located in a lush green environment about 34 km from Chattogram, it offers a peaceful and academically focused atmosphere.
          </p>
          <p className={paragraphClass}>The college is:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Affiliated with University of Chittagong</li>
            <li>Recognized by Bangladesh Medical and Dental Council</li>
            <li>Approved by government authorities</li>
            <li>Recognized by NMC & WHO</li>
          </ul>
          <p className={paragraphClass}>
            Founded under Begum Gul Chemonara (BGC) Trust, the institution aims to provide quality medical education and affordable healthcare, especially for rural communities.
          </p>

          <h4 className={subHeadingClass}>Vision & Mission</h4>
          <ul className={listClass}>
            <li>Develop competent and compassionate doctors</li>
            <li>Promote research and innovation</li>
            <li>Serve rural and underprivileged populations</li>
            <li>Encourage ethical medical practice and lifelong learning</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="bgc-course"
        ref={(el) => {
          sectionRefs.current["bgc-course"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>MBBS Course Details</h3>
          <div className="overflow-x-auto rounded-[3vw] md:rounded-[1vw] border border-black/10 mb-[5vw] md:mb-[2vw]">
            <table className="w-full text-smallTextPhone md:text-regularText">
              <tbody>
                {[
                  ["Degree", "MBBS"],
                  ["Duration", "5 Years + 1 Year Internship"],
                  ["Medium", "English"],
                  ["Intake", "January"],
                  ["Tuition Fees", "Approx. ₹27 Lakhs (USD 33,000)"],
                  ["Eligibility", "60% in PCB + NEET"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-black/10 last:border-b-0">
                    <td className="p-[3vw] md:p-[1vw] font-semibold bg-linenChosen/60 w-[40%]">{k}</td>
                    <td className="p-[3vw] md:p-[1vw]">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className={subHeadingClass}>Course Structure</h4>
        </MotionRevealBlock>
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Phase I (1.5 Years)" defaultOpen>
            <ul className={listClass}>
              <li>Anatomy</li>
              <li>Physiology</li>
              <li>Biochemistry</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Phase II (1 Year)">
            <ul className={listClass}>
              <li>Community Medicine</li>
              <li>Forensic Medicine</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Phase III (1 Year)">
            <ul className={listClass}>
              <li>Pathology</li>
              <li>Microbiology</li>
              <li>Pharmacology</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Phase IV (1.5 Years)">
            <ul className={listClass}>
              <li>Medicine</li>
              <li>Surgery</li>
              <li>Obstetrics & Gynaecology</li>
            </ul>
            <p className={paragraphClass + " mt-[2vw] md:mt-[1vw]"}>Followed by 1-year compulsory internship</p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="bgc-campus"
        ref={(el) => {
          sectionRefs.current["bgc-campus"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Campus & Facilities</h3>
          <ul className={listClass + " mb-[5vw] md:mb-[2vw]"}>
            <li>Spacious lecture halls with modern teaching aids</li>
            <li>Fully equipped laboratories</li>
            <li>Anatomy museum & dissection halls</li>
            <li>Digital library with journals</li>
            <li>Computer lab with internet</li>
            <li>Hospital with modern medical equipment</li>
            <li>Separate hostels for boys & girls with security</li>
          </ul>

          <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw]">
            <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
              <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Why Choose BGC Trust Medical College?</h3>
              <ul className="text-smallTextPhone md:text-regularText list-none pl-0 leading-[170%]">
                <li>✔ Affordable MBBS for Indian students</li>
                <li>✔ English-medium teaching</li>
                <li>✔ Recognized degree (valid for FMGE/NExT)</li>
                <li>✔ Strong clinical exposure in hospital</li>
                <li>✔ Safe campus with CCTV & hostel security</li>
                <li>✔ Focus on rural healthcare training</li>
              </ul>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=75"
              className="w-full md:w-[32.5vw] h-auto rounded-[2vw] md:rounded-[1vw] object-cover shadow-xl"
              width={690}
              height={690}
              alt="Medical students campus life"
            />
          </div>
        </MotionRevealBlock>
      </section>

      <section
        id="bgc-eligibility"
        ref={(el) => {
          sectionRefs.current["bgc-eligibility"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Eligibility Criteria (For Indian Students)</h3>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Minimum 60% in PCB (Class 12)</li>
            <li>Minimum 60% in Biology</li>
            <li>NEET qualification mandatory</li>
            <li>Age: 17 years by admission year</li>
            <li>Maximum 1-year gap allowed after 12th</li>
            <li>Minimum 7 GPA (combined SSC + HSC)</li>
          </ul>

          <h4 className={subHeadingClass}>Discipline & Rules</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Mandatory attendance & dress code</li>
            <li>No political activities or demonstrations</li>
            <li>Strict anti-smoking & anti-drug policy</li>
            <li>ID card compulsory</li>
            <li>Misconduct may lead to fines or expulsion</li>
          </ul>

          <p className={paragraphClass}>
            BGC Trust Medical College is a good option for MBBS in Bangladesh, especially if you are looking for:
          </p>
          <ul className={listClass}>
            <li>Budget-friendly education</li>
            <li>NMC-approved college</li>
            <li>Safe and structured academic environment</li>
            <li>Best suited for students who want affordable MBBS abroad with decent clinical exposure.</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="bgc-documents"
        ref={(el) => {
          sectionRefs.current["bgc-documents"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              Required Documents
            </h3>
            <ul className="grid md:grid-cols-2 gap-[2vw] md:gap-[0.75vw] list-none ml-0 mb-[5vw] md:mb-[1.5vw]">
              {[
                "10th & 12th Mark Sheets",
                "NEET Scorecard",
                "Passport",
                "Aadhaar Card",
                "School Leaving Certificate",
                "Passport-size Photos",
                "Medical Fitness Certificate",
              ].map((doc) => (
                <li key={doc} className="flex items-start gap-[2vw] md:gap-[0.65vw] text-smallTextPhone md:text-regularText">
                  <span className="mt-[0.35vw] md:mt-[0.2vw] flex h-[6vw] w-[6vw] md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-orangeChosen text-white text-tinyTextPhone md:text-xs font-bold leading-none">
                    ✓
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <h4 className={subHeadingClass}>Admission Process</h4>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Apply through Bangladesh Embassy / Foreign Mission</li>
              <li>Approval from Ministry of Foreign Affairs (Bangladesh)</li>
              <li>Final clearance from Director General of Health Services (DGHS)</li>
            </ol>

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

