"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcumbs";
import CallingBox from "@/components/studyDestinationComponents/header/callingBox";
import {
  getNavScrollOffsetPx,
  InteractiveSectionNav,
  listClass,
  MotionRevealBlock,
  paragraphClass,
  sectionHeadingClass,
  subHeadingClass,
} from "@/components/studyDestinationComponents/shared/interactive";

const services = [
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Established", label: "1930" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "Government Medical University" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Almaty, Kazakhstan" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Course", label: "MBBS (General Medicine)" },
];

const NAV = [
  { id: "kaznmu-overview", label: "Overview" },
  { id: "kaznmu-history", label: "History" },
  { id: "kaznmu-campus", label: "Campus" },
  { id: "kaznmu-medicine", label: "Medicine" },
  { id: "kaznmu-student-life", label: "Student Life" },
  { id: "kaznmu-admission", label: "Admission" },
  { id: "kaznmu-travel", label: "Travel" },
];

export default function KazakhNationalMedicalUniversityInteractive() {
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
              src="/assets/Images/mbbs-in-kazakhstan/kazakh-national-medical-university.webp"
              alt="Kazakh National Medical University"
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
              Kazakh National Medical University (KazNMU)
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
                onClick={() => scrollTo("kaznmu-admission")}
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

      <section id="kaznmu-overview" ref={(el) => {
  sectionRefs.current["kaznmu-overview"] = el;
}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Kazakh National Medical University (KazNMU)</h3>
          <p className={paragraphClass}>
            Kazakh National Medical University (KazNMU) is a well-known government medical university located in Almaty, Kazakhstan. It is one of the top institutions in the country dedicated entirely to medical education and healthcare training. The university is a popular choice among international students, especially those planning to study MBBS abroad.
          </p>
          <p className={paragraphClass}>
            Established in 1930, KazNMU is one of the oldest medical universities in Kazakhstan. Over the years, it has built a strong reputation for producing skilled doctors and healthcare professionals. The university focuses on modern teaching methods, practical learning, and clinical experience, which are essential for MBBS students.
          </p>
          <p className={paragraphClass}>
            KazNMU provides a supportive academic environment with experienced faculty, well-equipped laboratories, and access to hospitals for real-life medical training. Its affordable fee structure and global recognition make it a suitable option for Indian students looking for quality MBBS education at a reasonable cost.
          </p>
          <p className={paragraphClass}>
            Kazakh National Medical University is a reliable choice for students planning to study MBBS abroad, offering affordable fees, practical training, global recognition, and a strong medical learning environment.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="kaznmu-history" ref={(el) => {sectionRefs.current["kaznmu-history"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>History</h3>
          <p className={paragraphClass}>
            KazNMU started its journey in 1930 as a specialized medical institute. In the beginning, it mainly focused on basic medical subjects such as anatomy, physiology, and biochemistry.
          </p>
          <p className={paragraphClass}>
            As the university developed, it introduced advanced fields like surgery, pediatrics, pharmacy, and public health. Over time, it became a major center for medical education, research, and clinical training.
          </p>
          <p className={paragraphClass}>
            Today, KazNMU continues to grow as a leading institution that prepares students for careers in medicine, MBBS, and healthcare services.
          </p>

          <h4 className={subHeadingClass}>Mission</h4>
          <p className={paragraphClass}>
            The mission of KazNMU is to train highly qualified doctors and healthcare professionals through advanced education, practical training, and research. The university aims to contribute to global healthcare by preparing students for real-world medical challenges.
          </p>

          <h4 className={subHeadingClass}>Vision</h4>
          <p className={paragraphClass}>
            The vision of KazNMU is to become an internationally recognized medical university known for excellence in medical education, research, and clinical practice, attracting students from around the world.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="kaznmu-campus" ref={(el) => {sectionRefs.current["kaznmu-campus"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Campus</h3>
          <p className={paragraphClass}>
            KazNMU has a modern urban campus in Almaty with facilities designed specifically for medical students. The campus includes:
          </p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Advanced laboratories for medical and scientific research</li>
            <li>Affiliated hospitals for clinical training and patient interaction</li>
            <li>Digital classrooms and medical libraries</li>
            <li>Comfortable student accommodation</li>
          </ul>
          <p className={paragraphClass}>
            The campus environment supports both academic learning and practical training for MBBS students.
          </p>

          <h3 className={sectionHeadingClass}>About the City – Almaty</h3>
          <p className={paragraphClass}>
            Almaty, the largest city in Kazakhstan, is a modern and vibrant destination for students. It is well-known for its natural beauty and developed urban lifestyle.
          </p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Surrounded by mountains and scenic landscapes</li>
            <li>Offers a safe and student-friendly environment</li>
            <li>Features modern infrastructure and efficient public transport</li>
            <li>Home to a diverse and multicultural community</li>
          </ul>
          <p className={paragraphClass}>
            Almaty provides a comfortable and supportive environment for international students, especially those pursuing MBBS and medical education abroad.
          </p>
        </MotionRevealBlock>

        <div className="overflow-x-auto rounded-[3vw] md:rounded-[1vw] border border-black/10 mb-[5vw] md:mb-[2vw]">
          <table className="w-full text-smallTextPhone md:text-regularText">
            <tbody>
              {[
                ["Established", "1930"],
                ["Type", "Government Medical University"],
                ["Location", "Almaty, Kazakhstan"],
                ["Course Offered", "MBBS (General Medicine)"],
                ["Medium of Instruction", "English (for international students)"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-black/10 last:border-b-0">
                  <td className="p-[3vw] md:p-[1vw] font-semibold bg-linenChosen/60 w-[40%]">{k}</td>
                  <td className="p-[3vw] md:p-[1vw]">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>World Ranking</h3>
          <ul className={listClass}>
            <li>Ranked among the top universities worldwide in global rankings</li>
            <li>Achieved a position around 150th in QS World University Rankings 2023</li>
            <li>Recognized within the Top 20 universities in the EECA (Emerging Europe & Central Asia) region</li>
            <li>Consistently placed within the Top 500 universities globally, reflecting strong academic performance and research quality</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="kaznmu-medicine" ref={(el) => {sectionRefs.current["kaznmu-medicine"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Recognition</h3>
          <p className={paragraphClass}>KazNMU is recognized by major medical organizations, ensuring global acceptance of its degree:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Approved by NMC (National Medical Commission)</li>
            <li>Listed in the World Directory of Medical Schools (WDOMS)</li>
            <li>Recognized by WHO</li>
            <li>Degree valid for practice after clearing FMGE/NExT</li>
          </ul>

          <h3 className={sectionHeadingClass}>Faculty of Medicine & Courses</h3>
          <p className={paragraphClass}>KazNMU mainly focuses on medical fields such as:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>MBBS (General Medicine)</li>
            <li>Dentistry</li>
            <li>Pharmacy</li>
            <li>Nursing</li>
            <li>Public Health</li>
          </ul>
          <p className={paragraphClass}>
            The university provides practical-based medical education with early clinical exposure.
          </p>

          <h3 className={sectionHeadingClass}>Clinical Exposure</h3>
          <p className={paragraphClass}>Students receive hands-on training in:</p>
          <ul className={listClass}>
            <li>Government hospitals</li>
            <li>Teaching hospitals</li>
            <li>Specialized medical centers</li>
            <li>Early patient interaction</li>
            <li>Real clinical case experience</li>
            <li>Strong practical training</li>
          </ul>

          <h3 className={sectionHeadingClass}>Hostel Facilities</h3>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Affordable and comfortable dormitories</li>
            <li>Separate accommodation for international students</li>
            <li>Facilities include:</li>
            <li>Wi-Fi</li>
            <li>Study rooms</li>
            <li>Kitchen</li>
            <li>Laundry</li>
            <li>Safe and student-friendly environment</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="kaznmu-student-life" ref={(el) => {sectionRefs.current["kaznmu-student-life"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Student Life</h3>
          <p className={paragraphClass}>
            Student life at KazNMU is focused on both academic learning and personal development. Students participate in:
          </p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Cultural activities</li>
            <li>Medical seminars and workshops</li>
            <li>Sports and fitness programs</li>
          </ul>
          <p className={paragraphClass}>
            The university ensures a balanced lifestyle for students pursuing MBBS and medical studies.
          </p>

          <h3 className={sectionHeadingClass}>Why Choose KazNMU for Indian Students?</h3>
          <ul className={listClass}>
            <li>Affordable MBBS abroad fees</li>
            <li>Specialized medical university</li>
            <li>Strong clinical training and hospital exposure</li>
            <li>English-medium instruction</li>
            <li>Globally recognized degree</li>
            <li>Safe and secure environment</li>
            <li>Indian food and student support available</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="kaznmu-admission" ref={(el) => {sectionRefs.current["kaznmu-admission"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 shadow-[0_14px_40px_rgba(255,117,0,0.12)]">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Eligibility Criteria</h3>
            <ul className={listClass}>
              <li>Minimum age: 17 years</li>
              <li>12th with PCB subjects</li>
              <li>Minimum 50% marks</li>
              <li>Must qualify NEET exam</li>
              <li>English test</li>
            </ul>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Admission Process</h3>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Apply with required documents</li>
              <li>Receive admission letter</li>
              <li>Pay fees</li>
              <li>Get invitation letter</li>
              <li>Apply for visa</li>
              <li>Travel to Kazakhstan</li>
            </ol>
          </div>
          <Image
            src="/assets/Images/mbbs-in-nepal/nepal2.png"
            className="w-full md:w-[25.5vw] ml-auto
             h-auto rounded-[2vw] md:rounded-[1vw] object-cover"
            width={690}
            height={690}
            alt="Medical students in classroom"
          />
        </div>
      </section>

      <section id="kaznmu-travel" ref={(el) => {sectionRefs.current["kaznmu-travel"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white">
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">How to Reach</h3>
            <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
              <li>Fly from India to Almaty International Airport</li>
              <li>Direct or connecting flights available</li>
              <li>20–30 minutes travel to university</li>
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

