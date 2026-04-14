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
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Established", label: "1901" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "Public University" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Jinan, Shandong, China" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "MBBS Duration", label: "6 Years" },
];

const NAV = [
  { id: "sdu-overview", label: "Overview" },
  { id: "sdu-ranking", label: "Ranking" },
  { id: "sdu-mbbs", label: "MBBS Details" },
  { id: "sdu-hostel", label: "Hostel & Safety" },
  { id: "sdu-clinical", label: "Clinical" },
  { id: "sdu-admission", label: "Admission" },
  { id: "sdu-travel", label: "Travel" },
];

export default function ShandongUniversityInteractive() {
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
              src="/assets/Images/mbbs-in-china/associated-universities/shandong-university.webp"
              alt="Shandong University"
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
              Shandong University
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
                onClick={() => scrollTo("sdu-admission")}
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
        id="sdu-overview"
        ref={(el) => {
          sectionRefs.current["sdu-overview"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>About Shandong University, China</h3>
          <p className={paragraphClass}>
            Shandong University is one of the oldest and most prestigious universities in China, renowned for its excellence in medical education, research, and clinical training. Located in eastern China, the university has become a top choice for international students pursuing MBBS in China.
          </p>
          <p className={paragraphClass}>
            Founded in 1901, Shandong University is directly supported by the Chinese Ministry of Education and is part of China’s elite academic institutions. It is globally recognized for its high academic standards and strong medical programs.
          </p>

          <h3 className={sectionHeadingClass}>Overview of Shandong University</h3>
          <p className={paragraphClass}>
            Shandong University (SDU) is a comprehensive public university offering world-class education in medicine and healthcare sciences. It has built a strong reputation for producing highly skilled medical professionals.
          </p>
          <h4 className={subHeadingClass}>Key Highlights:</h4>
          <ul className={listClass}>
            <li>Established: 1901</li>
            <li>Type: Public University</li>
            <li>Location: Jinan, Shandong, China</li>
            <li>Medium of Teaching: English (for MBBS)</li>
            <li>Total Students: 60,000+</li>
            <li>International Students: 3,000+</li>
            <li>Advanced laboratories and research centers</li>
            <li>Extensive hospital network for clinical training</li>
          </ul>
          <p className={paragraphClass}>
            The university is particularly known for its contributions to medical research, clinical sciences, and innovation in healthcare education.
          </p>

          <h3 className={sectionHeadingClass}>About Jinan City</h3>
          <p className={paragraphClass}>
            Jinan, the capital of Shandong Province, is known as the “City of Springs” and offers a safe and comfortable environment for students.
          </p>
          <h4 className={subHeadingClass}>Why students prefer Jinan:</h4>
          <ul className={listClass}>
            <li>Clean and green city with natural springs</li>
            <li>Modern infrastructure and transport system</li>
            <li>Affordable cost of living</li>
            <li>Safe for international students</li>
            <li>Rich cultural heritage</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="sdu-ranking"
        ref={(el) => {
          sectionRefs.current["sdu-ranking"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Shandong University Ranking (2026)" defaultOpen>
            <h4 className={subHeadingClass}>World Ranking</h4>
            <ul className={listClass}>
              <li>QS World University Ranking 2026: #339 in the world</li>
              <li>Times Higher Education (THE) 2026: #251–300 globally</li>
              <li>US News Ranking (2025): #238 globally</li>
              <li>ARWU (Shanghai Ranking): #101–150 globally</li>
            </ul>
            <p className={paragraphClass}>
              Overall, Shandong University is consistently ranked among the Top 300–350 universities in the world.
            </p>
            <h4 className={subHeadingClass}>Country Ranking (China)</h4>
            <ul className={listClass}>
              <li>China Rank (Approx.): #14 in China</li>
            </ul>
            <p className={paragraphClass}>This places it among the Top 20 universities in China, which is considered highly prestigious.</p>
            <p className={paragraphClass}>Status: Elite Government University in China</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Key Insight for Students">
            <p className={paragraphClass}>
              Being ranked among the top universities globally and top 15 in China, Shandong University offers:
            </p>
            <ul className={listClass}>
              <li>High academic credibility</li>
              <li>Strong global recognition for MBBS</li>
              <li>Excellent research and clinical exposure</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="sdu-mbbs"
        ref={(el) => {
          sectionRefs.current["sdu-mbbs"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="MBBS in Shandong University, China" defaultOpen>
            <p className={paragraphClass}>
              Studying MBBS in China at Shandong University is a great opportunity for students seeking affordable and globally recognized medical education.
            </p>
            <p className={paragraphClass}>
              The university offers MBBS in China for Indian students with English-medium instruction, modern facilities, and strong clinical exposure through affiliated hospitals.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Why Choose MBBS in Shandong University?">
            <p className={paragraphClass}>Choosing study MBBS in China at Shandong University offers several benefits:</p>
            <ul className={listClass}>
              <li>Affordable MBBS in China fees compared to private colleges in India</li>
              <li>English-medium MBBS program</li>
              <li>Excellent clinical exposure in top hospitals</li>
              <li>Globally recognized medical degree</li>
              <li>Safe and student-friendly campus</li>
              <li>High-quality education aligned with international standards</li>
              <li>Ideal option for low-cost MBBS abroad</li>
              <li>Practical-based learning approach</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Recognition & Accreditation">
            <p className={paragraphClass}>Shandong University is globally recognized, making it a trusted choice for MBBS abroad:</p>
            <ul className={listClass}>
              <li>Recognized by WHO (World Health Organization)</li>
              <li>Approved by NMC (India)</li>
              <li>Listed in WDOMS (World Directory of Medical Schools)</li>
              <li>Recognized by international medical bodies</li>
            </ul>
            <p className={paragraphClass}>
              Graduates are eligible to appear for FMGE/NExT, USMLE, PLAB, and other global licensing exams.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Course Duration in China (Shandong University)">
            <p className={paragraphClass}>The MBBS course in China follows a standard international structure:</p>
            <ul className={listClass}>
              <li>Total Duration: 6 years</li>
              <li>5 years academic study</li>
              <li>1 year internship</li>
            </ul>
            <p className={paragraphClass}>This ensures students gain both theoretical knowledge and clinical experience.</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Syllabus in Shandong University">
            <p className={paragraphClass}>
              The MBBS syllabus in China at Shandong University is designed as per global medical standards:
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
            <p className={paragraphClass}>This curriculum prepares students for international medical careers.</p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="sdu-hostel"
        ref={(el) => {
          sectionRefs.current["sdu-hostel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Hostel Facilities for MBBS Indian Students" defaultOpen>
            <p className={paragraphClass}>
              Shandong University provides comfortable and well-equipped on-campus accommodation for international students.
            </p>
            <h4 className={subHeadingClass}>Accommodation Type</h4>
            <ul className={listClass}>
              <li>Single & double sharing rooms available</li>
              <li>Separate hostel facilities for boys & girls</li>
            </ul>
            <h4 className={subHeadingClass}>Room Facilities</h4>
            <ul className={listClass}>
              <li>Bed, study table, chair, wardrobe</li>
              <li>Air conditioner</li>
              <li>Bedding kit (mattress, pillow, blanket)</li>
              <li>Internet/Wi-Fi access</li>
            </ul>
            <h4 className={subHeadingClass}>Common Facilities</h4>
            <ul className={listClass}>
              <li>Shared kitchen/cooking area</li>
              <li>Laundry services</li>
              <li>Reading rooms & study areas</li>
              <li>Sports & recreational facilities</li>
            </ul>
            <h4 className={subHeadingClass}>Food for Indian Students</h4>
            <ul className={listClass}>
              <li>Self-cooking option available</li>
              <li>Cafeterias & international food nearby</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Security Features">
            <p className={paragraphClass}>Shandong University ensures a high level of safety and discipline:</p>
            <h4 className={subHeadingClass}>Hostel & Campus Security</h4>
            <ul className={listClass}>
              <li>Controlled entry into hostel (only authorized students)</li>
              <li>ID card-based access system</li>
              <li>Separate hostel management</li>
            </ul>
            <h4 className={subHeadingClass}>Surveillance</h4>
            <ul className={listClass}>
              <li>CCTV monitoring in campus and hostel areas (standard system)</li>
            </ul>
            <h4 className={subHeadingClass}>24×7 Security</h4>
            <ul className={listClass}>
              <li>Round-the-clock security guards</li>
              <li>Emergency response system</li>
            </ul>
            <h4 className={subHeadingClass}>Safety Measures</h4>
            <ul className={listClass}>
              <li>Fire safety systems (alarms, extinguishers, exits)</li>
              <li>Strict hostel rules for safety</li>
            </ul>
            <p className={paragraphClass}>
              Overall, Very safe campus with strong administrative support for international students
            </p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="sdu-clinical"
        ref={(el) => {
          sectionRefs.current["sdu-clinical"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Hospital Strength" defaultOpen>
            <p className={paragraphClass}>Shandong University is one of the strongest in China for medical infrastructure.</p>
            <h4 className={subHeadingClass}>Affiliated Hospitals</h4>
            <ul className={listClass}>
              <li>4 major affiliated hospitals + 10+ teaching hospitals</li>
              <li>Includes famous hospitals like Qilu Hospital</li>
            </ul>
            <h4 className={subHeadingClass}>Capacity & Infrastructure</h4>
            <ul className={listClass}>
              <li>Large multi-specialty hospitals</li>
              <li>Advanced research centers and labs</li>
              <li>Highly experienced faculty (600+ faculty & 600+ clinical professors)</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Clinical Exposure">
            <h4 className={subHeadingClass}>Practical Training</h4>
            <ul className={listClass}>
              <li>Clinical exposure starts early (from 2nd year)</li>
              <li>48+ weeks clinical rotation in hospitals</li>
            </ul>
            <h4 className={subHeadingClass}>Training Areas</h4>
            <ul className={listClass}>
              <li>Medicine, Surgery, Pediatrics</li>
              <li>Gynecology, Psychiatry, Neurology</li>
              <li>Diagnostics & emergency care</li>
            </ul>
            <p className={paragraphClass}>Strong point: One of the best clinical exposure systems in China</p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Fees in Shandong University">
            <p className={paragraphClass}>
              The university offers affordable MBBS in China, making it a popular choice. This makes it a strong option for cheap MBBS in China. If you are looking for MBBS abroad at low cost, then Shandong University is an excellent choice. With its global recognition, affordable fee structure, and strong clinical training, it stands among the top universities for MBBS in China for Indian students.
            </p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="sdu-admission"
        ref={(el) => {
          sectionRefs.current["sdu-admission"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 shadow-[0_14px_40px_rgba(255,117,0,0.12)]">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Eligibility for MBBS in China</h3>
            <p className={paragraphClass}>To apply for MBBS admission in China, students must meet:</p>
            <ul className={listClass}>
              <li>Minimum 50% in PCB</li>
              <li>NEET qualification (mandatory for Indian students)</li>
              <li>Minimum age: 17 years</li>
              <li>Valid passport</li>
            </ul>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Admission Process for MBBS in China</h3>
            <p className={paragraphClass}>The MBBS admission process in China is straightforward:</p>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Fill the application form</li>
              <li>Submit academic documents</li>
              <li>Apply through CSC/University portal</li>
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
            alt="Shandong University MBBS admission"
          />
        </div>
      </section>

      <section
        id="sdu-travel"
        ref={(el) => {
          sectionRefs.current["sdu-travel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">How to Reach Shandong University, China</h3>
            <p className={paragraphClass}>Reaching Jinan is easy via major Chinese cities.</p>

            <h4 className={subHeadingClass}>By Air</h4>
            <p className={paragraphClass}>Fly from India to:</p>
            <ul className={listClass}>
              <li>Beijing</li>
              <li>Shanghai</li>
              <li>Guangzhou</li>
            </ul>
            <p className={paragraphClass}>Then take a connecting flight to Jinan Yaoqiang International Airport.</p>

            <h4 className={subHeadingClass}>By High-Speed Train</h4>
            <p className={paragraphClass}>From:</p>
            <ul className={listClass}>
              <li>Beijing → Jinan (~1.5–2 hours)</li>
              <li>Shanghai → Jinan (~3–4 hours)</li>
            </ul>

            <h4 className={subHeadingClass}>From Airport to Campus</h4>
            <ul className={listClass}>
              <li>Taxi or cab: 30–50 minutes</li>
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

