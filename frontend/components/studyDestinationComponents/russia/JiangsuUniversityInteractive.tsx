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
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Established", label: "1902" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "Public University" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Zhenjiang" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "MBBS Duration", label: "6 Years" },
];

const NAV = [
  { id: "jsu-overview", label: "Overview" },
  { id: "jsu-ranking", label: "Ranking" },
  { id: "jsu-mbbs", label: "MBBS Details" },
  { id: "jsu-hostel", label: "Hostel & Safety" },
  { id: "jsu-clinical", label: "Clinical" },
  { id: "jsu-admission", label: "Admission" },
  { id: "jsu-travel", label: "Travel" },
];

export default function JiangsuUniversityInteractive() {
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
              src="/assets/Images/mbbs-in-china/associated-universities/jiangsu-university.webp"
              alt="Jiangsu University"
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
              Jiangsu University
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
                onClick={() => scrollTo("jsu-admission")}
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

      <section
        id="jsu-overview"
        ref={(el) => {
          sectionRefs.current["jsu-overview"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>About Jiangsu University, China</h3>
          <p className={paragraphClass}>
            Jiangsu University is a well-established and prestigious university in China, known for its excellence in medical education, research, and clinical training. Located in eastern China, the university has become a preferred destination for international students pursuing MBBS in China.
          </p>
          <p className={paragraphClass}>
            Founded in 1902 and restructured in 2001, Jiangsu University is supported by the Chinese government and is recognized for its strong academic system and global collaborations. It has built a solid reputation in medicine, engineering, and applied sciences.
          </p>

          <h3 className={sectionHeadingClass}>Overview of Jiangsu University</h3>
          <p className={paragraphClass}>
            Jiangsu University (JSU) is a comprehensive public university offering high-quality education in medicine and healthcare sciences. It is widely known for producing competent medical professionals with global exposure.
          </p>
          <h4 className={subHeadingClass}>Key Highlights:</h4>
          <ul className={listClass}>
            <li>Established: 1902</li>
            <li>Type: Public University</li>
            <li>Location: Zhenjiang</li>
            <li>Medium of Teaching: English (for MBBS)</li>
            <li>Total Students: 30,000+</li>
            <li>International Students: 2,000+</li>
            <li>Advanced laboratories and research facilities</li>
            <li>Large network of affiliated hospitals for clinical training</li>
          </ul>
          <p className={paragraphClass}>
            The university focuses on innovation, research, and practical-based medical education.
          </p>

          <h3 className={sectionHeadingClass}>About Zhenjiang City</h3>
          <p className={paragraphClass}>
            Zhenjiang is a beautiful and peaceful city in Jiangsu Province, located near major cities like Shanghai and Nanjing. It provides a safe and student-friendly atmosphere for international students.
          </p>
          <h4 className={subHeadingClass}>Why students prefer Zhenjiang:</h4>
          <ul className={listClass}>
            <li>Affordable cost of living</li>
            <li>Safe and clean environment</li>
            <li>Well-connected to major cities</li>
            <li>Modern infrastructure</li>
            <li>Rich cultural heritage</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="jsu-ranking"
        ref={(el) => {
          sectionRefs.current["jsu-ranking"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Jiangsu University Ranking (2026)" defaultOpen>
            <h4 className={subHeadingClass}>World Ranking</h4>
            <ul className={listClass}>
              <li>THE Ranking 2026: 501–600 globally</li>
              <li>US News Ranking: Around Top 700 globally</li>
              <li>EduRank 2025: 742 globally</li>
            </ul>
            <p className={paragraphClass}>
              Overall, Jiangsu University is ranked among the Top 600–750 universities in the world.
            </p>
            <h4 className={subHeadingClass}>Country Ranking (China)</h4>
            <ul className={listClass}>
              <li>China Rank: Around #50–70 in China</li>
            </ul>
            <p className={paragraphClass}>This places it among the Top 100 universities in China.</p>
            <p className={paragraphClass}>Status: Recognized Government University in China</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Key Insight for Students">
            <p className={paragraphClass}>Being ranked among top universities globally, Jiangsu University offers:</p>
            <ul className={listClass}>
              <li>Good academic reputation</li>
              <li>Increasing global recognition</li>
              <li>Strong clinical training exposure</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="jsu-mbbs"
        ref={(el) => {
          sectionRefs.current["jsu-mbbs"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="MBBS in Jiangsu University, China" defaultOpen>
            <p className={paragraphClass}>
              Studying MBBS in China at Jiangsu University is an excellent option for students seeking affordable and globally recognized medical education.
            </p>
            <p className={paragraphClass}>
              The university offers MBBS programs for international students with English-medium instruction and strong hospital-based training.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Why Choose MBBS in Jiangsu University?">
            <p className={paragraphClass}>Choosing to study MBBS in China at Jiangsu University offers several benefits:</p>
            <ul className={listClass}>
              <li>Affordable MBBS fees compared to many countries</li>
              <li>English-medium MBBS program</li>
              <li>Good clinical exposure in affiliated hospitals</li>
              <li>Globally recognized degree</li>
              <li>Safe and student-friendly campus</li>
              <li>Practical-oriented teaching methods</li>
              <li>Suitable for students looking for low-cost MBBS abroad</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Recognition & Accreditation">
            <p className={paragraphClass}>Jiangsu University is globally recognized, making it a reliable choice:</p>
            <ul className={listClass}>
              <li>Recognized by WHO</li>
              <li>Approved by NMC (India)</li>
              <li>Listed in WDOMS</li>
              <li>Recognized by international medical councils</li>
            </ul>
            <p className={paragraphClass}>Graduates can apply for licensing exams like FMGE/NExT, USMLE, and PLAB.</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Course Duration in China (Jiangsu University)">
            <p className={paragraphClass}>The MBBS program follows a standard structure:</p>
            <ul className={listClass}>
              <li>Total Duration: 6 years</li>
              <li>5 years academic study</li>
              <li>1 year internship</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Syllabus in Jiangsu University">
            <p className={paragraphClass}>The MBBS curriculum is designed according to international medical standards:</p>
            <h4 className={subHeadingClass}>Pre-Clinical Phase:</h4>
            <ul className={listClass}>
              <li>Anatomy</li>
              <li>Physiology</li>
              <li>Biochemistry</li>
            </ul>
            <h4 className={subHeadingClass}>Para-Clinical Phase:</h4>
            <ul className={listClass}>
              <li>Pathology</li>
              <li>Microbiology</li>
              <li>Pharmacology</li>
            </ul>
            <h4 className={subHeadingClass}>Clinical Phase:</h4>
            <ul className={listClass}>
              <li>General Medicine</li>
              <li>Surgery</li>
              <li>Pediatrics</li>
              <li>Obstetrics & Gynecology</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Eligibility for MBBS in China">
            <p className={paragraphClass}>To apply for MBBS admission:</p>
            <ul className={listClass}>
              <li>Minimum 50% in PCB</li>
              <li>NEET qualification (mandatory for Indian students)</li>
              <li>Minimum age: 17 years</li>
              <li>Valid passport</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="jsu-hostel"
        ref={(el) => {
          sectionRefs.current["jsu-hostel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Hostel Facilities for MBBS Indian Students" defaultOpen>
            <p className={paragraphClass}>
              Jiangsu University provides modern, safe, and international-standard hostel facilities specially designed for foreign students.
            </p>
            <h4 className={subHeadingClass}>Accommodation Type</h4>
            <ul className={listClass}>
              <li>International students stay in Overseas Students’ Hostel</li>
              <li>Fully furnished double-sharing rooms</li>
              <li>Separate accommodation for boys & girls</li>
            </ul>
            <h4 className={subHeadingClass}>Room Facilities</h4>
            <ul className={listClass}>
              <li>Bed, study table, wardrobe</li>
              <li>Attached bathroom</li>
              <li>Air conditioning & heating</li>
              <li>24×7 hot water</li>
              <li>Wi-Fi / Internet</li>
              <li>Washing machines & utilities</li>
            </ul>
            <h4 className={subHeadingClass}>Common Facilities</h4>
            <ul className={listClass}>
              <li>Shared kitchen (for Indian cooking)</li>
              <li>Laundry rooms</li>
              <li>Common study areas</li>
              <li>Reception & student support services</li>
            </ul>
            <h4 className={subHeadingClass}>Food for Indian Students</h4>
            <ul className={listClass}>
              <li>Indian food available nearby</li>
              <li>Self-cooking option in hostel kitchens</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Hostel Security Features (VERY IMPORTANT)">
            <p className={paragraphClass}>
              Jiangsu University hostels follow strict safety regulations and monitored access systems, ensuring a secure environment for international students.
            </p>
            <h4 className={subHeadingClass}>Entry & Access Control</h4>
            <ul className={listClass}>
              <li>Only registered students allowed inside hostel (no unauthorized entry)</li>
              <li>Controlled entry with ID cards / keys</li>
              <li>Visitors strictly regulated</li>
            </ul>
            <h4 className={subHeadingClass}>Room-Level Security</h4>
            <ul className={listClass}>
              <li>Students must lock doors & windows when leaving</li>
              <li>Keys/access cards must be kept secure</li>
              <li>No duplication or sharing of keys allowed</li>
            </ul>
            <h4 className={subHeadingClass}>Fire & Emergency Safety</h4>
            <ul className={listClass}>
              <li>Fire safety systems installed (alarms, exits, equipment)</li>
              <li>Emergency exits must remain clear</li>
              <li>Strict ban on fire hazards (open flames, unsafe cooking)</li>
            </ul>
            <h4 className={subHeadingClass}>Surveillance & Monitoring</h4>
            <ul className={listClass}>
              <li>Hostel areas monitored by security staff and campus surveillance (standard in Chinese universities)</li>
              <li>Regular checks by hostel management</li>
            </ul>
            <h4 className={subHeadingClass}>24×7 Campus Security</h4>
            <ul className={listClass}>
              <li>Round-the-clock security personnel</li>
              <li>Campus patrol and monitoring systems</li>
              <li>Immediate response in case of emergency</li>
            </ul>
            <h4 className={subHeadingClass}>Safety Rules for Students</h4>
            <ul className={listClass}>
              <li>No illegal activities or disturbances</li>
              <li>Report suspicious persons immediately</li>
              <li>Keep valuables safe (anti-theft awareness)</li>
            </ul>
            <p className={paragraphClass}>
              Overall, High level of discipline, strict rules and very safe environment for all international students
            </p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="jsu-clinical"
        ref={(el) => {
          sectionRefs.current["jsu-clinical"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Hospital Strength & Clinical Exposure" defaultOpen>
            <p className={paragraphClass}>
              Jiangsu University is strong in clinical training, which is a key factor for MBBS students.
            </p>
            <h4 className={subHeadingClass}>Affiliated Hospitals</h4>
            <ul className={listClass}>
              <li>80+ affiliated hospitals</li>
              <li>Includes teaching hospitals & specialized centers</li>
            </ul>
            <h4 className={subHeadingClass}>Infrastructure</h4>
            <ul className={listClass}>
              <li>Multi-specialty hospitals</li>
              <li>Advanced diagnostic labs & ICUs</li>
              <li>High patient flow (excellent for practice)</li>
            </ul>
            <h4 className={subHeadingClass}>Capacity</h4>
            <ul className={listClass}>
              <li>Major hospitals have 1000–2000+ beds</li>
            </ul>
            <h4 className={subHeadingClass}>Clinical Training Benefits</h4>
            <ul className={listClass}>
              <li>Early patient exposure</li>
              <li>Practical-based learning</li>
              <li>Internship in final year (China or India option)</li>
            </ul>
            <h4 className={subHeadingClass}>Clinical Departments</h4>
            <ul className={listClass}>
              <li>General Medicine</li>
              <li>Surgery</li>
              <li>Pediatrics</li>
              <li>Obstetrics & Gynecology</li>
              <li>Emergency & ICU care</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Final Insight">
            <p className={paragraphClass}>Jiangsu University offers:</p>
            <ul className={listClass}>
              <li>Safe hostel environment (very important for parents)</li>
              <li>Strong hospital network (important for MBBS quality)</li>
            </ul>
            <p className={paragraphClass}>Best suited for students looking for:</p>
            <ul className={listClass}>
              <li>Affordable MBBS</li>
              <li>Safe campus</li>
              <li>Good clinical exposure</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="jsu-admission"
        ref={(el) => {
          sectionRefs.current["jsu-admission"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 shadow-[0_14px_40px_rgba(255,117,0,0.12)]">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Admission Process for MBBS in China</h3>
            <p className={paragraphClass}>The admission process is simple and student-friendly:</p>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Fill the application form</li>
              <li>Submit academic documents</li>
              <li>Apply through university portal</li>
              <li>Receive admission letter</li>
              <li>Attend interview (if required)</li>
              <li>Pay fees</li>
              <li>Receive JW202 form</li>
              <li>Apply for student visa</li>
              <li>Travel to China</li>
            </ol>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Documents Required</h3>
            <ul className={listClass}>
              <li>10th & 12th mark sheets</li>
              <li>NEET scorecard</li>
              <li>Valid passport</li>
              <li>Passport-size photographs</li>
              <li>Medical fitness certificate</li>
            </ul>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=75"
            className="w-full md:w-[32.5vw] h-auto rounded-[2vw] md:rounded-[1vw] object-cover shadow-xl"
            width={690}
            height={690}
            alt="Medical university admission support"
          />
        </div>
      </section>

      <section
        id="jsu-travel"
        ref={(el) => {
          sectionRefs.current["jsu-travel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">How to Reach Jiangsu University, China</h3>
            <h4 className={subHeadingClass}>By Air</h4>
            <p className={paragraphClass}>Fly from India to major cities like:</p>
            <ul className={listClass}>
              <li>Beijing</li>
              <li>Shanghai</li>
              <li>Guangzhou</li>
            </ul>
            <p className={paragraphClass}>Then take a connecting train or flight to Zhenjiang.</p>

            <h4 className={subHeadingClass}>By High-Speed Train</h4>
            <ul className={listClass}>
              <li>Shanghai → Zhenjiang (1–2 hours)</li>
              <li>Nanjing → Zhenjiang (30–40 minutes)</li>
            </ul>

            <h4 className={subHeadingClass}>From Station/Airport to Campus</h4>
            <ul className={listClass}>
              <li>Taxi: 20–40 minutes</li>
              <li>University pickup available for international students</li>
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

