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
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Established", label: "1912" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "Public Medical University" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Wenzhou, Zhejiang, China" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "MBBS Duration", label: "6 Years" },
];

const NAV = [
  { id: "wmu-overview", label: "Overview" },
  { id: "wmu-ranking", label: "Ranking" },
  { id: "wmu-mbbs", label: "MBBS Details" },
  { id: "wmu-hostel", label: "Hostel & Safety" },
  { id: "wmu-clinical", label: "Clinical" },
  { id: "wmu-admission", label: "Admission" },
  { id: "wmu-travel", label: "Travel" },
];

export default function WenzhouMedicalUniversityInteractive() {
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
              src="/assets/Images/mbbs-in-china/associated-universities/wenzhou-medical-university.webp"
              alt="Wenzhou Medical University"
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
              Wenzhou Medical University
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
                onClick={() => scrollTo("wmu-admission")}
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
        id="wmu-overview"
        ref={(el) => {
          sectionRefs.current["wmu-overview"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>About Wenzhou Medical University, China</h3>
          <p className={paragraphClass}>
            Wenzhou Medical University is one of the leading public medical universities in China, known for its excellence in medical education, research, and clinical training. Located in Wenzhou, the university has become a preferred destination for international students pursuing MBBS in China.
          </p>
          <p className={paragraphClass}>
            Established in 1912, the university has evolved into a key medical institution under the Zhejiang Provincial Government and is recognized globally for its academic standards and healthcare training.
          </p>

          <h3 className={sectionHeadingClass}>Overview of Wenzhou Medical University</h3>
          <p className={paragraphClass}>
            Wenzhou Medical University (WMU) is a government university specializing in medical sciences and healthcare education. It has a strong reputation for producing skilled medical professionals and maintaining high academic standards.
          </p>
          <h4 className={subHeadingClass}>Key Highlights:</h4>
          <ul className={listClass}>
            <li>Established: 1912</li>
            <li>Type: Public Medical University</li>
            <li>Location: Wenzhou, Zhejiang, China</li>
            <li>Medium of Teaching: English (for MBBS)</li>
            <li>Total Students: 20,000+</li>
            <li>International Students: 2,500+</li>
            <li>Advanced laboratories and research centers</li>
            <li>Strong hospital affiliations for clinical practice</li>
          </ul>
          <p className={paragraphClass}>
            The university is also known for its strong focus on research, especially in fields like ophthalmology and clinical medicine.
          </p>

          <h3 className={sectionHeadingClass}>About Wenzhou City</h3>
          <p className={paragraphClass}>Wenzhou is a fast-growing coastal city known for its modern lifestyle and safe environment.</p>
          <h4 className={subHeadingClass}>Why students love Wenzhou:</h4>
          <ul className={listClass}>
            <li>Comfortable climate</li>
            <li>Advanced infrastructure</li>
            <li>Good public transport</li>
            <li>Safe for international students</li>
            <li>Rich culture and food diversity</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="wmu-ranking"
        ref={(el) => {
          sectionRefs.current["wmu-ranking"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="MBBS in Wenzhou, China" defaultOpen>
            <p className={paragraphClass}>
              Pursuing an MBBS in China has become one of the most preferred options for Indian and international students. Among the top destinations, MBBS in Wenzhou, China stands out due to its high-quality education, affordable fee structure, and globally recognized medical universities.
            </p>
            <p className={paragraphClass}>
              Wenzhou is home to leading institutions offering MBBS in China for Indian students, with English-medium programs, modern infrastructure, and advanced clinical exposure.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Why Choose MBBS in Wenzhou, China?">
            <p className={paragraphClass}>Choosing study MBBS in China—especially in Wenzhou—offers multiple advantages:</p>
            <ul className={listClass}>
              <li>Affordable MBBS in China fees compared to private colleges in India</li>
              <li>English-medium MBBS programs in China</li>
              <li>Excellent clinical exposure in top hospitals</li>
              <li>Safe, modern, and student-friendly environment</li>
              <li>High-quality education aligned with global medical standards</li>
              <li>Ideal destination for low-cost MBBS abroad</li>
              <li>International exposure</li>
              <li>Globally accepted medical degree</li>
              <li>Practical-based learning approach</li>
              <li>Opportunity to appear for FMGE/NExT, USMLE, PLAB</li>
              <li>Strong reputation in medical and health sciences</li>
              <li>Ranked in global listings like THE, US News, ARWU</li>
              <li>Good choice for MBBS in China for Indian students</li>
              <li>Particularly strong in fields like ophthalmology and clinical medicine</li>
            </ul>
            <p className={paragraphClass}>
              If you are looking for MBBS abroad at low cost, then MBBS in Wenzhou, China is an excellent option. With affordable fees, globally recognized universities, and high-quality education, it is one of the best destinations for aspiring doctors
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Wenzhou Medical University Ranking (2026)">
            <h4 className={subHeadingClass}>World Ranking</h4>
            <ul className={listClass}>
              <li>Times Higher Education (THE) 2025: #801–1000 globally (Times Higher Education (THE))</li>
              <li>US News Ranking 2025: #1041 globally (Shiksha)</li>
              <li>EduRank 2025: #1142 globally (EduRank)</li>
              <li>ARWU (Shanghai Ranking): Top 501–600 globally (Wikipedia)</li>
            </ul>
            <p className={paragraphClass}>
              Overall, Wenzhou Medical University is ranked in the Top 800–1100 universities in the world.
            </p>
            <h4 className={subHeadingClass}>Country Ranking (China)</h4>
            <ul className={listClass}>
              <li>China Rank (EduRank 2025): #109 in China (EduRank)</li>
              <li>China Rank (Popularity Ranking): Around #25–27 in China (Shiksha)</li>
            </ul>
            <p className={paragraphClass}>
              This places it roughly among the Top 30–110 universities in China, depending on ranking systems.
            </p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="wmu-mbbs"
        ref={(el) => {
          sectionRefs.current["wmu-mbbs"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Recognition & Accreditation" defaultOpen>
            <p className={paragraphClass}>
              Wenzhou Medical University is globally recognized, making it a reliable choice for students planning to study MBBS abroad.
            </p>
            <ul className={listClass}>
              <li>Recognized by WHO (World Health Organization)</li>
              <li>Approved by NMC (India)</li>
              <li>Listed in WDOMS (World Directory of Medical Schools)</li>
              <li>Recognized by multiple international medical councils</li>
            </ul>
            <p className={paragraphClass}>
              This allows graduates to appear for licensing exams such as FMGE/NExT, USMLE, and PLAB.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Course Duration in China (Wenzhou)">
            <p className={paragraphClass}>The MBBS course in China follows a globally accepted structure:</p>
            <ul className={listClass}>
              <li>Total Duration: 6 years</li>
              <li>5 years academic education</li>
              <li>1 year internship</li>
            </ul>
            <p className={paragraphClass}>
              This makes it ideal for students seeking medical study in China with strong practical exposure.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Syllabus in Wenzhou">
            <p className={paragraphClass}>
              The MBBS syllabus in China is designed to meet international standards and includes:
            </p>
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
            <p className={paragraphClass}>
              This structured curriculum ensures students are well-prepared for global medical licensing exams like FMGE/NExT.
            </p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="wmu-hostel"
        ref={(el) => {
          sectionRefs.current["wmu-hostel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Hostel Facilities for MBBS Indian Students" defaultOpen>
            <p className={paragraphClass}>Wenzhou Medical University offers modern, international-standard hostel facilities.</p>
            <h4 className={subHeadingClass}>Accommodation Type</h4>
            <ul className={listClass}>
              <li>Shared rooms (2 students per room)</li>
              <li>Separate hostels for boys & girls</li>
            </ul>
            <h4 className={subHeadingClass}>Room Facilities</h4>
            <ul className={listClass}>
              <li>Bed, study table, wardrobe</li>
              <li>Air conditioning</li>
              <li>Attached bathroom</li>
              <li>Wi-Fi & internet</li>
              <li>Refrigerator & basic appliances</li>
            </ul>
            <h4 className={subHeadingClass}>Common Facilities</h4>
            <ul className={listClass}>
              <li>Kitchen & laundry</li>
              <li>Cafeteria & mess (Indian food available)</li>
              <li>Sports & recreational areas</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Security Features">
            <p className={paragraphClass}>Wenzhou Medical University provides very strong hostel and campus security:</p>
            <h4 className={subHeadingClass}>Surveillance</h4>
            <ul className={listClass}>
              <li>Hostel under CCTV surveillance (even monitored by authorities)</li>
            </ul>
            <h4 className={subHeadingClass}>Access Control</h4>
            <ul className={listClass}>
              <li>Restricted entry for outsiders</li>
              <li>ID-based hostel access</li>
            </ul>
            <h4 className={subHeadingClass}>24×7 Safety</h4>
            <ul className={listClass}>
              <li>Security guards on campus</li>
              <li>Emergency support system</li>
            </ul>
            <h4 className={subHeadingClass}>Safety Systems</h4>
            <ul className={listClass}>
              <li>Fire safety equipment and emergency exits</li>
              <li>Strict hostel discipline</li>
            </ul>
            <p className={paragraphClass}>Overall, Highly secure environment, especially for international students</p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="wmu-clinical"
        ref={(el) => {
          sectionRefs.current["wmu-clinical"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Hospital Strength" defaultOpen>
            <p className={paragraphClass}>Wenzhou Medical University is very strong in clinical hospitals.</p>
            <h4 className={subHeadingClass}>Affiliated Hospitals</h4>
            <ul className={listClass}>
              <li>Multiple affiliated teaching hospitals</li>
              <li>Includes The First Affiliated Hospital (major teaching hospital)</li>
            </ul>
            <h4 className={subHeadingClass}>Capacity Example</h4>
            <ul className={listClass}>
              <li>First Affiliated Hospital has ~3000 beds</li>
              <li>Serves millions of patients annually</li>
            </ul>
            <p className={paragraphClass}>High patient flow = excellent practical exposure</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Clinical Exposure">
            <h4 className={subHeadingClass}>Practical Training</h4>
            <ul className={listClass}>
              <li>Strong internship system</li>
              <li>Hands-on experience in hospitals</li>
            </ul>
            <h4 className={subHeadingClass}>Training Areas</h4>
            <ul className={listClass}>
              <li>Internal Medicine</li>
              <li>Surgery</li>
              <li>Pediatrics</li>
              <li>Obstetrics & Gynecology</li>
              <li>Emergency & specialized departments</li>
            </ul>
            <p className={paragraphClass}>Strong point: High patient load gives good practical exposure</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Fees in Wenzhou, China">
            <p className={paragraphClass}>
              One of the major reasons students choose affordable MBBS in China is the low cost, compared to Indian private colleges, this makes Wenzhou a top option for cheap MBBS in China.
            </p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="wmu-admission"
        ref={(el) => {
          sectionRefs.current["wmu-admission"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 shadow-[0_14px_40px_rgba(255,117,0,0.12)]">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Eligibility for MBBS in China</h3>
            <p className={paragraphClass}>To apply for MBBS admission in China, students must fulfill:</p>
            <ul className={listClass}>
              <li>Minimum 50% in PCB (Physics, Chemistry, Biology)</li>
              <li>NEET qualification (mandatory for Indian students)</li>
              <li>Minimum age: 17 years</li>
              <li>Valid passport</li>
            </ul>
            <p className={paragraphClass}>
              These criteria make it accessible for students planning MBBS abroad for Indian students at low cost.
            </p>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Admission Process for MBBS in China</h3>
            <p className={paragraphClass}>The MBBS admission process in China is simple and transparent:</p>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Fill the application form</li>
              <li>Submit academic documents</li>
              <li>CSCA (for admission)</li>
              <li>Receive admission letter</li>
              <li>Interview</li>
              <li>Fees payment</li>
              <li>Receive JW 202</li>
              <li>Apply for a student visa</li>
              <li>Fly to China and start your MBBS journey</li>
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
            alt="Wenzhou MBBS admission guidance"
          />
        </div>
      </section>

      <section
        id="wmu-travel"
        ref={(el) => {
          sectionRefs.current["wmu-travel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">How to Reach Wenzhou, China</h3>
            <p className={paragraphClass}>
              Reaching Wenzhou is convenient through a combination of international and domestic travel. Although Wenzhou does not have many direct international flights from India, it is well-connected via major Chinese cities.
            </p>

            <h4 className={subHeadingClass}>By Air (Most Preferred Route)</h4>
            <p className={paragraphClass}>Fly from India to major Chinese international hubs such as:</p>
            <ul className={listClass}>
              <li>Shanghai</li>
              <li>Guangzhou</li>
              <li>Beijing</li>
            </ul>
            <p className={paragraphClass}>Take a Domestic Flight to Wenzhou Longwan International Airport</p>
            <p className={paragraphClass}>Domestic flights are frequent and take:</p>
            <ul className={listClass}>
              <li>From Shanghai: 1 hour</li>
              <li>From Guangzhou: 2 hours</li>
              <li>From Beijing: 2.5 hours</li>
            </ul>

            <h4 className={subHeadingClass}>By High-Speed Train</h4>
            <p className={paragraphClass}>China’s high-speed rail network is fast and reliable.</p>
            <p className={paragraphClass}>From:</p>
            <ul className={listClass}>
              <li>Shanghai → Wenzhou (4–5 hours)</li>
              <li>Hangzhou → Wenzhou (3 hours)</li>
            </ul>
            <p className={paragraphClass}>Trains are comfortable, punctual, and cost-effective for students.</p>

            <h4 className={subHeadingClass}>From Airport to University</h4>
            <p className={paragraphClass}>after reaching Wenzhou:</p>
            <ul className={listClass}>
              <li>Take a taxi or cab (20–40 minutes depending on campus)</li>
              <li>Universities often provide airport pickup for international students</li>
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

