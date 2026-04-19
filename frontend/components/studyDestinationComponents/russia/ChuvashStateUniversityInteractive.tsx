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
  tuition: "2,65,000",
  hostel: "81,000",
};

const services = [
  { icon: "/assets/Images/Icons/feesIcon.svg",text: "Tution|Hostel Fees/year", label: `${feesData.tuition} | ${feesData.hostel}` },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "Public (Government)" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Cheboksary, Russia" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Duration", label: "6 Years" },
];

const NAV = [
  { id: "chsu-overview", label: "Overview" },
  { id: "chsu-program", label: "Program" },
  { id: "chsu-student-life", label: "Student Life" },
  { id: "chsu-syllabus", label: "Syllabus" },
  { id: "chsu-admission", label: "Admission" },
  { id: "chsu-travel", label: "Travel" },
];

export default function ChuvashStateUniversityInteractive() {
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
              src="/assets/Images/mbbs-in-russia/chuvash-state-university.webp"
              alt="Chuvash State University"
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
              Chuvash State University
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
                onClick={() => scrollTo("chsu-admission")}
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

      <section id="chsu-overview" ref={(el) => {sectionRefs.current["chsu-overview"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Chuvash State University</h3>
          <p className={paragraphClass}>
            Chuvash State University (ChSU), established in 1967, is a well-known public university located in Cheboksary. It is one of the leading educational institutions in the Chuvash Republic and is popular among international students, especially for pursuing MBBS in Russia.
          </p>
          <p className={paragraphClass}>
            The university is gaining strong recognition for its affordable fee structure, quality medical education, and modern infrastructure, making it a preferred choice for Indian students.
          </p>
          <h3 className={sectionHeadingClass}>About the City – Cheboksary</h3>
          <p className={paragraphClass}>Cheboksary is the capital of the Chuvash Republic, located along the Volga River.</p>
          <ul className={listClass}>
            <li>A clean, green, and well-developed city</li>
            <li>Known for its safe and student-friendly environment</li>
            <li>Moderate population with peaceful surroundings</li>
            <li>Affordable living costs compared to major Russian cities</li>
            <li>Climate: Cold winters and pleasant summers</li>
          </ul>
          <p className={paragraphClass}>
            Cheboksary offers a comfortable lifestyle, making it suitable for students planning to study MBBS abroad.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="chsu-program" ref={(el) => {sectionRefs.current["chsu-program"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <div className="overflow-x-auto rounded-[3vw] md:rounded-[1vw] border border-black/10 mb-[5vw] md:mb-[2vw]">
          <table className="w-full text-smallTextPhone md:text-regularText">
            <tbody>
              {[
                ["Established", "1967"],
                ["University Type", "Public (Government)"],
                ["Location", "Cheboksary, Russia"],
                ["Total Students", "16,000+"],
                ["International Students", "2,000+"],
                ["Faculties & Departments", "15+ faculties, 100+ departments"],
                ["Medium of Teaching", "English & Russian"],
                ["Course Duration", "6 Years (including internship)"],
                ["Intake", "September"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-black/10 last:border-b-0">
                  <td className="p-[3vw] md:p-[1vw] font-semibold bg-linenChosen/60 w-[40%]">{k}</td>
                  <td className="p-[3vw] md:p-[1vw]">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Recognition & Accreditation" defaultOpen>
            <p className={paragraphClass}>The university is officially recognized by:</p>
            <ul className={listClass}>
              <li>World Health Organization (WHO)</li>
              <li>National Medical Commission (NMC), India</li>
              <li>Ministry of Science and Higher Education of Russia</li>
            </ul>
            <p className={paragraphClass}>This ensures that the MBBS degree is globally accepted.</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Program Details">
            <ul className={listClass}>
              <li>Duration: 6 Years</li>
              <li>Medium: English</li>
              <li>Eligibility: NEET qualification mandatory</li>
              <li>Curriculum: Theoretical + practical clinical training</li>
            </ul>
            <p className={paragraphClass}>Ideal for students searching for:</p>
            <ul className={listClass}>
              <li>MBBS abroad at low cost</li>
              <li>Study MBBS in Russia in English</li>
              <li>NMC-approved universities in Russia</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Courses Offered">
            <h4 className={subHeadingClass}>Undergraduate Programs</h4>
            <ul className={listClass}>
              <li>MBBS (General Medicine)</li>
              <li>Dentistry</li>
              <li>Pharmacy</li>
              <li>Engineering</li>
              <li>IT & Computer Science</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Cost of Living">
            <ul className={listClass}>
              <li>Monthly Expenses: 12,000 – 18,000 RUB</li>
              <li>Covers food, accommodation, and daily needs</li>
              <li>ChSU is a good option for students looking for affordable MBBS universities in Russia.</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Ranking">
            <ul className={listClass}>
              <li>Country Rank: 250+</li>
              <li>Global Rank: 5000–6000+</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section id="chsu-student-life" ref={(el) => {sectionRefs.current["chsu-student-life"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Why Choose Chuvash State University?" defaultOpen>
            <ul className={listClass}>
              <li>Affordable MBBS fees</li>
              <li>Recognized worldwide degree</li>
              <li>Modern laboratories & hospitals</li>
              <li>High number of international students</li>
              <li>Safe and student-friendly city</li>
              <li>Indian food availability</li>
              <li>Good clinical exposure</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Points to Consider">
            <ul className={listClass}>
              <li>Cold winters</li>
              <li>Russian language required for clinical practice</li>
              <li>Mid-sized city (not a metro like Moscow)</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Student Life at Chuvash State University">
            <p className={paragraphClass}>Student life at ChSU offers a mix of academic excellence and cultural diversity.</p>
            <ul className={listClass}>
              <li>Modern classrooms, labs, and libraries</li>
              <li>Active student participation in cultural programs</li>
              <li>Sports facilities and recreational activities</li>
              <li>International student community</li>
              <li>Events, festivals, and exchange programs</li>
            </ul>
            <p className={paragraphClass}>Students enjoy a safe, engaging, and academically focused environment.</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Hostel & Accommodation">
            <p className={paragraphClass}>The university provides comfortable and affordable hostel facilities for international students.</p>
            <h4 className={subHeadingClass}>Hostel Facilities</h4>
            <ul className={listClass}>
              <li>Fully furnished rooms</li>
              <li>Study tables and storage</li>
              <li>Indian food in mess/canteen</li>
              <li>24×7 Wi-Fi</li>
              <li>Heating system for winters</li>
              <li>Laundry and kitchen facilities</li>
              <li>Security and CCTV</li>
            </ul>
            <p className={paragraphClass}>Hostels ensure a safe and convenient living experience.</p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section id="chsu-syllabus" ref={(el) => {sectionRefs.current["chsu-syllabus"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>MBBS Syllabus at Chuvash State University</h3>
          <p className={paragraphClass}>The MBBS program follows a structured 6-year curriculum.</p>

          <div className="grid md:grid-cols-2 gap-[3vw] md:gap-[1vw]">
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 p-[4vw] md:p-[1.25vw] bg-linenChosen/40">
              <h4 className={subHeadingClass}>1st Year</h4>
              <ul className={listClass}>
                <li>Anatomy</li>
                <li>Physiology</li>
                <li>Biochemistry</li>
              </ul>
            </div>
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 p-[4vw] md:p-[1.25vw] bg-linenChosen/40">
              <h4 className={subHeadingClass}>2nd Year</h4>
              <ul className={listClass}>
                <li>Histology</li>
                <li>Microbiology</li>
                <li>Biochemistry</li>
                <li>Physiology</li>
              </ul>
            </div>
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 p-[4vw] md:p-[1.25vw] bg-linenChosen/40">
              <h4 className={subHeadingClass}>3rd Year</h4>
              <ul className={listClass}>
                <li>Pathology</li>
                <li>Pharmacology</li>
                <li>Microbiology</li>
                <li>Genetics</li>
              </ul>
            </div>
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 p-[4vw] md:p-[1.25vw] bg-linenChosen/40">
              <h4 className={subHeadingClass}>4th – 6th Year (Clinical Phase)</h4>
              <ul className={listClass}>
                <li>General Surgery</li>
                <li>Internal Medicine</li>
                <li>Pediatrics</li>
                <li>Obstetrics & Gynecology</li>
                <li>Neurology</li>
                <li>Psychiatry</li>
                <li>Cardiology</li>
                <li>Oncology</li>
                <li>Emergency Medicine</li>
              </ul>
            </div>
          </div>

          <h3 className={sectionHeadingClass + " mt-[3vw] md:mt-[1vw]"}>Key Features</h3>
          <ul className={listClass}>
            <li>Strong theoretical foundation</li>
            <li>Early clinical exposure</li>
            <li>Hands-on hospital training</li>
            <li>Focus on patient care</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="chsu-admission" ref={(el) => {sectionRefs.current["chsu-admission"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 shadow-[0_14px_40px_rgba(255,117,0,0.12)]">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Eligibility Criteria</h3>
            <ul className={listClass}>
              <li>Minimum 50% in PCB (40% for reserved category)</li>
              <li>NEET qualification required</li>
              <li>Minimum age: 17 years</li>
            </ul>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Required Documents</h3>
            <ul className={listClass}>
              <li>10th & 12th mark sheets</li>
              <li>Valid passport</li>
              <li>Passport-size photos</li>
              <li>NEET scorecard</li>
              <li>HIV report</li>
            </ul>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Admission Process</h3>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Fill application form</li>
              <li>Submit documents</li>
              <li>Receive admission letter</li>
              <li>Submit NEET scorecard</li>
              <li>Pay fees</li>
              <li>Get invitation letter</li>
              <li>Apply for visa</li>
              <li>Travel to Russia</li>
            </ol>
          </div>
          <Image
            src="/assets/Images/mbbs-in-nepal/nepal2.png"
            className="w-full md:w-[32.5vw] h-auto rounded-[2vw] md:rounded-[1vw] object-cover ml-auto"
            width={690}
            height={690}
            alt="Students in medical training lab"
          />
        </div>
      </section>

      <section id="chsu-travel" ref={(el) => {sectionRefs.current["chsu-travel"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white">
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">How to Reach Chuvash State University</h3>
            <h4 className={subHeadingClass}>From India</h4>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%] mb-[4vw] md:mb-[1vw]">
              <li>Take a flight to Delhi to Moscow/Kazan</li>
              <li>From Moscow, travel to Kazan or Cheboksary (flight)</li>
              <li>Reach university via taxi or arranged transport</li>
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

