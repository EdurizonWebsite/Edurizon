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
  tuition: "2,99,000",
  hostel: "25,000",
};


const services = [
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Tution|Hostel Fees/year", label: `${feesData.tuition} | ${feesData.hostel}` },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "Public University" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Kemerovo, Russia" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Students", label: "21,000+" },
];

const NAV = [
  { id: "ksu-overview", label: "Overview" },
  { id: "ksu-why", label: "Why KemSU" },
  { id: "ksu-academics", label: "Academics" },
  { id: "ksu-fees-campus", label: "Fees & Campus" },
  { id: "ksu-eligibility", label: "Eligibility" },
  { id: "ksu-travel", label: "Travel" },
];

const stats = [
  { k: "International Students", v: "1,600+" },
  { k: "Ranking", v: "QS EECA ~401–450" },
  { k: "Status", v: "Flagship University" },
  { k: "Countries", v: "25+" },
];

export default function KemorovoStateUniversityInteractive() {
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
              src="/assets/Images/universities/russia/KemerovoStateUniversity.webp"
              alt="Kemerovo State University campus"
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
              Kemerovo State University (KemSU)
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
                onClick={() => scrollTo("ksu-eligibility")}
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

      <div className="sticky top-[14vw] md:top-[6vw] pt-[1vw] z-100 bg-white">
        <InteractiveSectionNav items={NAV} activeId={activeId} onNavigate={scrollTo} />
      </div>

      <section id="ksu-overview" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["ksu-overview"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Kemerovo State University (KemSU) – MBBS in Russia with Lowest Fees</h3>
          <h4 className={subHeadingClass}>Overview</h4>
          <p className={paragraphClass}>
            Kemerovo State University (KemSU) is a reputed public university established in 1973 in Kemerovo. It is widely recognized as one of the best universities for MBBS in Russia, offering high-quality education at affordable fees for international students.
          </p>
          <p className={paragraphClass}>
            For Indian students looking for MBBS abroad at low cost, KemSU provides an ideal combination of quality education, global recognition, and budget-friendly tuition.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="ksu-why" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["ksu-why"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>MBBS in Russia at Lowest Fees – Why Choose KemSU?</h3>
          <p className={paragraphClass}>KemSU is becoming a top destination for students searching for:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>MBBS in Russia with lowest fees</li>
            <li>Affordable MBBS abroad for Indian students</li>
            <li>Best university for MBBS in Russia</li>
          </ul>

          <h4 className={subHeadingClass}>Key Benefits</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Lowest MBBS fees in Russia compared to many universities</li>
            <li>Globally accepted medical degree</li>
            <li>Modern hospitals and clinical training</li>
            <li>English-medium MBBS programs available</li>
            <li>Safe and student-friendly environment</li>
            <li>High FMGE/NEXT preparation support</li>
          </ul>

          <h4 className={subHeadingClass}>Quick Facts</h4>
          <ul className={listClass}>
            <li>Established: 1973</li>
            <li>Type: Public University</li>
            <li>Students: 21,000+</li>
            <li>International Students: 1,600+</li>
            <li>Ranking: QS EECA ~401–450</li>
            <li>Status: Flagship University</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="ksu-academics" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["ksu-academics"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Location Advantage</h3>
          <p className={paragraphClass}>
            Located in Kemerovo, the university provides a perfect study environment with low living costs—making it ideal for students seeking cheap MBBS abroad options.
          </p>
          <h4 className={subHeadingClass}>City Highlights</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Affordable cost of living</li>
            <li>Well-connected via Trans-Siberian Railway</li>
            <li>Clean, safe, and student-friendly city</li>
            <li>Rich cultural and natural attractions</li>
          </ul>
          <p className={paragraphClass}>Top attractions include:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Kuzbass Botanical Garden</li>
            <li>Park Angelov</li>
            <li>Moskovaya Square</li>
          </ul>

          <h3 className={sectionHeadingClass}>Academics & Medical Education</h3>
          <p className={paragraphClass}>
            KemSU provides a strong academic foundation for students pursuing MBBS in Russia.
          </p>
          <h4 className={subHeadingClass}>Academic Highlights</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>20+ faculties and 70+ departments</li>
            <li>21,000+ students</li>
            <li>900+ experienced faculty members</li>
            <li>Advanced medical laboratories</li>
            <li>Strong research and clinical exposure</li>
          </ul>

          <h4 className={subHeadingClass}>Medical Faculties</h4>
          <p className={paragraphClass}>Students enrolling for MBBS gain access to specialized departments:</p>
          <ul className={listClass}>
            <li>General Medicine (MBBS equivalent)</li>
            <li>Surgery</li>
            <li>Ophthalmology</li>
            <li>Urology</li>
            <li>Internal Medicine</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="ksu-fees-campus" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["ksu-fees-campus"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Affordable MBBS Fees Structure</h3>
          <p className={paragraphClass}>
            KemSU is known for offering low-cost MBBS education without compromising quality.
            <ul>
              <li>Tution Fees: {feesData.tuition} Rubel</li>
              <li>Hostel Fees: {feesData.hostel} Rubel</li>
            </ul>
          </p>
          <h4 className={subHeadingClass}>Why It’s Budget-Friendly</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Low tuition fees compared to private colleges in India</li>
            <li>Affordable hostel and living expenses</li>
            <li>High return on investment for medical careers</li>
          </ul>
          <p className={paragraphClass}>
            This makes it one of the best choices for MBBS abroad with lowest fees.
          </p>

          <h3 className={sectionHeadingClass}>Campus & Hostel Facilities</h3>
          <p className={paragraphClass}>
            KemSU provides modern infrastructure and comfortable living conditions:
          </p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>17+ academic buildings</li>
            <li>Fully furnished hostels</li>
            <li>Sports complexes and swimming pool</li>
            <li>Libraries and research centers</li>
          </ul>
        </MotionRevealBlock>

        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Hostel Features" defaultOpen>
            <ul className={listClass}>
              <li>Safe and secure accommodation</li>
              <li>Separate kitchen and bathroom facilities</li>
              <li>Comfortable environment for international students</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="International Student Support">
            <p className={paragraphClass}>KemSU hosts students from over 25 countries, including India.</p>
            <h4 className={subHeadingClass}>Student Life</h4>
            <ul className={listClass}>
              <li>Cultural festivals and events</li>
              <li>Clubs for sports, music, and arts</li>
              <li>Friendly and diverse student community</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section id="ksu-eligibility" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["ksu-eligibility"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Eligibility Criteria for MBBS Admission</h3>
          <p className={paragraphClass}>To apply for MBBS at KemSU:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Minimum age: 17 years</li>
            <li>50% marks in Physics, Chemistry, Biology</li>
            <li>NEET qualification (mandatory for Indian students)</li>
          </ul>

          <h3 className={sectionHeadingClass}>Required Documents</h3>
          <ul className="grid md:grid-cols-2 gap-[2vw] md:gap-[0.75vw] list-none ml-0 mb-[5vw] md:mb-[1.5vw]">
            {[
              "Valid passport",
              "10th & 12th certificates",
              "NEET scorecard",
              "Medical certificate",
              "Passport-size photographs",
              "Admission invitation letter",
            ].map((doc) => (
              <li key={doc} className="flex items-start gap-[2vw] md:gap-[0.65vw] text-smallTextPhone md:text-regularText">
                <span className="mt-[0.35vw] md:mt-[0.2vw] flex h-[6vw] w-[6vw] md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-orangeChosen text-white text-tinyTextPhone md:text-xs font-bold leading-none">
                  ✓
                </span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="ksu-travel" ref={(el : HTMLElement | null) => { if (el) sectionRefs.current["ksu-travel"] = el; }} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white">
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              How to Reach Kemerovo State University from India
            </h3>
            <p className={paragraphClass}>
              Traveling from India to Kemerovo is convenient with multiple flight options available via major Russian cities. This makes it easier for students planning to pursue MBBS in Russia at affordable fees.
            </p>

            <h4 className={subHeadingClass}>By Air (Best & Fastest Option)</h4>
            <p className={paragraphClass}>There are no direct flights to Kemerovo from India, but students can easily reach via connecting flights:</p>
            <h4 className={subHeadingClass}>Step 1: India to Russia</h4>
            <ul className={listClass + " mb-[2vw] md:mb-[0.75vw]"}>
              <li>Fly from major Indian cities like Delhi, Mumbai, or Chennai to:</li>
              <li>Moscow</li>
              <li>Novosibirsk</li>
            </ul>
            <h4 className={subHeadingClass}>Step 2: Russia to Kemerovo</h4>
            <ul className={listClass + " mb-[2vw] md:mb-[0.75vw]"}>
              <li>From Moscow/Novosibirsk, take:</li>
              <li>Domestic flight to Kemerovo Airport (fastest option)</li>
              <li>Train via Trans-Siberian Railway (budget-friendly option)</li>
            </ul>

            <h4 className={subHeadingClass}>By Train (Budget Travel Option)</h4>
            <p className={paragraphClass}>Students looking for low-cost travel options can choose trains:</p>
            <ul className={listClass + " mb-[2vw] md:mb-[0.75vw]"}>
              <li>From Moscow to Kemerovo</li>
              <li>Well-connected railway network across Russia</li>
              <li>Comfortable long-distance travel experience</li>
            </ul>

            <h4 className={subHeadingClass}>Final Step: Airport to University</h4>
            <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
              <li>Kemerovo Airport is close to the city</li>
              <li>Taxi or university pickup services are available</li>
              <li>Travel time: approximately 20–30 minutes to campus</li>
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

