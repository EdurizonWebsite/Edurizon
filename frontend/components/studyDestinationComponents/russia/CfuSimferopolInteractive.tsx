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

const feesData = {
  tuition: "3,50,000",
  hostel: "30,000",
};


const services = [
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Tuition", label: "3,00,000 RUB/year" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Medium", label: "English" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Simferopol, Crimea" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Duration", label: "5+1 Years" },
];

const NAV = [
  { id: "cfu-simferopol", label: "Simferopol" },
  { id: "cfu-about", label: "About CFU" },
  { id: "cfu-mbbs", label: "MBBS" },
  { id: "cfu-ranking-fees", label: "Ranking & Fees" },
  { id: "cfu-eligibility", label: "Eligibility" },
  { id: "cfu-documents", label: "Admission" },
];

const stats = [
  { k: "Established", v: "1934" },
  { k: "Federal status", v: "2014" },
  { k: "Students", v: "32,000+" },
  { k: "International", v: "3,000+" },
];

export default function CfuSimferopolInteractive() {
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
              src="/assets/Images/universities/russia/CFUSimferopolUniversity.webp"
              alt="Crimean Federal University campus"
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
              className="font-bold text-h3TextPhone text-left md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]"
            >
              CFU Simferopol (Crimean Federal University)
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
                onClick={() => scrollTo("cfu-documents")}
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
        id="cfu-simferopol"
        ref={(el) => {
          sectionRefs.current["cfu-simferopol"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>ABOUT SIMFEROPOL</h3>
          <p className={paragraphClass}>
            Simferopol is the second-largest city in Crimea and serves as the capital of the Republic of Crimea. It is a major political, economic, and transportation hub of the peninsula.
          </p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Acts as the administrative center of Simferopol Municipality and district</li>
            <li>Home to the famous football club FC TSK Simferopol</li>
            <li>Known for having the largest concentration of higher education institutions in Crimea</li>
            <li>A modern Federal University campus was inaugurated in 2014</li>
          </ul>
          <h4 className={subHeadingClass}>Population</h4>
          <p className={paragraphClass}>Over 3,32,317 people (as per 2014 census)</p>
          <h4 className={subHeadingClass}>Geography</h4>
          <ul className={listClass}>
            <li>Located in south-central Crimea</li>
            <li>Situated on the Salhir River</li>
            <li>Near the Simferopol Reservoir, one of Europe’s largest earth dams</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="cfu-about"
        ref={(el) => {
          sectionRefs.current["cfu-about"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>ABOUT CRIMEAN FEDERAL UNIVERSITY</h3>
          <p className={paragraphClass}>
            V.I. Vernadsky Crimean Federal University (CFU) is one of the leading government universities in Russia.
          </p>
          <h4 className={subHeadingClass}>Key Highlights</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Established: 1934</li>
            <li>Reorganized as Federal University: 2014</li>
            <li>Named after scientist Vladimir Vernadsky</li>
            <li>Origin dates back to Taurida University (1918)</li>
          </ul>
          <h4 className={subHeadingClass}>Student & Staff Strength</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>32,000+ students</li>
            <li>7,000+ staff members</li>
            <li>3,000+ international students from 54 countries</li>
          </ul>
          <h4 className={subHeadingClass}>Infrastructure</h4>
          <ul className={listClass}>
            <li>23 academic & non-academic units</li>
            <li>10 academies/institutes</li>
            <li>7 colleges</li>
            <li>11 research centers</li>
            <li>Multiple campuses across Crimea</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="cfu-mbbs"
        ref={(el) => {
          sectionRefs.current["cfu-mbbs"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>MEDICAL EDUCATION (MBBS)</h3>
          <p className={paragraphClass}>CFU is considered a top destination for MBBS in Russia due to:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>English-medium medical program</li>
            <li>Strong clinical exposure</li>
            <li>Training in government hospitals</li>
            <li>Early patient interaction (from 3rd year)</li>
          </ul>
        </MotionRevealBlock>
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="ACCOMMODATION" defaultOpen>
            <ul className={listClass}>
              <li>Hostel options: 2, 3, and 4-seater rooms</li>
              <li>Fully furnished rooms with bedding</li>
              <li>Kitchen, laundry, and cleaning services</li>
              <li>High-level security (especially for female students)</li>
              <li>Indian mess available</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="TEACHING QUALITY">
            <ul className={listClass}>
              <li>Teacher-student ratio: 1:14</li>
              <li>Highly qualified faculty</li>
              <li>Modern teaching methods</li>
              <li>Strong research infrastructure</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="ADMISSION & ENTRANCE">
            <ul className={listClass}>
              <li>Entrance exam: Biology & Chemistry (online, English)</li>
              <li>Minimum requirement: 50% marks in exam</li>
              <li>NEET: Qualification required</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="ACADEMIC SESSION">
            <ul className={listClass}>
              <li>Starts: September</li>
              <li>Ideal arrival: Mid–end September</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="STUDENT LIFE">
            <ul className={listClass}>
              <li>Multicultural environment</li>
              <li>International events & festivals</li>
              <li>Exchange programs & research opportunities</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="cfu-ranking-fees"
        ref={(el) => {
          sectionRefs.current["cfu-ranking-fees"] = el;
        }}
        className="scroll-mt-[12vw]  md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>RANKING & RECOGNITION</h3>
          <div className="rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/25 bg-gradient-to-br from-linenChosen to-white p-[5vw] md:p-[1.75vw] mb-[5vw] md:mb-[2vw]">
            <p className={paragraphClass + " mb-[2vw] md:mb-[0.75vw]"}>Among Top Universities in Russia</p>
            <p className={paragraphClass + " mb-[2vw] md:mb-[0.75vw]"}>Recognized by:</p>
            <div className="flex flex-wrap gap-[2vw] md:gap-[0.6vw]">
              {["WHO", "NMC", "UNESCO", "WFME", "European Universities Association"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-orangeChosen/30 bg-white px-[3.5vw] md:px-[1vw] py-[1.6vw] md:py-[0.4vw] text-smallTextPhone md:text-smallText font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <h3 className={sectionHeadingClass}>FEES STRUCTURE (Approx.)</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[3vw] md:gap-[1vw]">
            {[
              { k: "Tuition Fees", v: "3,00,000 RUB/year" },
              { k: "Hostel", v: "12,000 RUB/year" },
              { k: "Insurance & Visa", v: "10,000 RUB/year" },
              { k: "Total", v: "~3,22,200 RUB/year" },
            ].map((fee) => (
              <div
                key={fee.k}
                className="rounded-[2.5vw] md:rounded-[0.75vw] border border-black/10 bg-linenChosen/40 px-[4vw] md:px-[1vw] py-[3vw] md:py-[0.85vw]"
              >
                <p className="text-tinyTextPhone md:text-tinyText font-semibold text-orangeChosen">{fee.k}</p>
                <p className="mt-[1vw] md:mt-[0.3vw] text-smallTextPhone md:text-regularText font-bold leading-[140%]">
                  {fee.v}
                </p>
              </div>
            ))}
          </div>
        </MotionRevealBlock>
      </section>

      <section
        id="cfu-eligibility"
        ref={(el) => {
          sectionRefs.current["cfu-eligibility"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>ELIGIBILITY CRITERIA</h3>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Minimum 60% in 12th (PCB)</li>
            <li>NEET qualified</li>
            <li>English medium</li>
          </ul>

          <h3 className={sectionHeadingClass}>TRANSPORT & AIRPORT</h3>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Simferopol International Airport connects via Moscow</li>
            <li>Travel time to university: 35–40 minutes</li>
          </ul>

          <h3 className={sectionHeadingClass}>ADVANTAGES OF MBBS AT CFU</h3>
          <ul className="text-smallTextPhone md:text-regularText list-none pl-0 leading-[170%] mb-[4vw] md:mb-[1vw]">
            <li>✔ Affordable fees</li>
            <li>✔ High-quality education</li>
            <li>✔ Good FMGE passing rate (~40%)</li>
            <li>✔ Indian food & community</li>
            <li>✔ Global career opportunities</li>
            <li>✔ Practical exposure in hospitals</li>
          </ul>

          <h3 className={sectionHeadingClass}>Climate</h3>
          <ul className={listClass}>
            <li>Mild climate: humid subtropical to continental</li>
            <li>Average temperature:</li>
            <li>January: 0.2°C</li>
            <li>July: 22.3°C</li>
            <li>Annual sunshine: 2,471 hours</li>
            <li>Best time to visit: July to October</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="cfu-documents"
        ref={(el) => {
          sectionRefs.current["cfu-documents"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              REQUIRED DOCUMENTS
            </h3>
            <ul className="grid md:grid-cols-2 gap-[2vw] md:gap-[0.75vw] list-none ml-0 mb-[5vw] md:mb-[1.5vw]">
              {[
                "10th & 12th marksheets",
                "NEET scorecard",
                "Passport",
                "Photos",
                "HIV report",
              ].map((doc) => (
                <li key={doc} className="flex items-start gap-[2vw] md:gap-[0.65vw] text-smallTextPhone md:text-regularText">
                  <span className="mt-[0.35vw] md:mt-[0.2vw] flex h-[6vw] w-[6vw] md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-orangeChosen text-white text-tinyTextPhone md:text-xs font-bold leading-none">
                    ✓
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <h4 className={subHeadingClass}>IMPORTANT NOTE</h4>
            <p className={paragraphClass}>Students should:</p>
            <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
              <li>Carry original documents</li>
              <li>Complete medical tests before travel</li>
              <li>Follow airline luggage guidelines</li>
              <li>Convert currency in advance</li>
            </ul>

            <h4 className={subHeadingClass}>ABOUT EDURIZON PVT. LTD.</h4>
            <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
              <li>Head office: Dwarka, New Delhi</li>
              <li>Services include:</li>
              <li>Admission & visa processing</li>
              <li>Travel & insurance</li>
              <li>Airport pickup</li>
              <li>Post-arrival support</li>
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

