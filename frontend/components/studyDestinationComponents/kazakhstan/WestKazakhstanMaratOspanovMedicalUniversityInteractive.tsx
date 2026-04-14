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
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Established", label: "1957" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "Government Medical University" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Aktobe, Kazakhstan" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Popular Course", label: "MBBS (General Medicine)" },
];

const NAV = [
  { id: "wkmu-overview", label: "Overview" },
  { id: "wkmu-history", label: "History" },
  { id: "wkmu-campus", label: "Campus" },
  { id: "wkmu-medicine", label: "Medicine" },
  { id: "wkmu-student-life", label: "Student Life" },
  { id: "wkmu-admission", label: "Admission" },
  { id: "wkmu-travel", label: "Travel" },
];

export default function WestKazakhstanMaratOspanovMedicalUniversityInteractive() {
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
            className="relative md:w-[43.625vw] shrink-0 overflow-hidden"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <Image
              className="w-full h-[55vw] md:h-full min-h-[280px] object-cover"
              src="/assets/Images/mbbs-in-kazakhstan/west-kazakhstan-marat-ospanov-medical-university.webp"
              alt="West Kazakhstan Marat Ospanov Medical University"
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
              West Kazakhstan Marat Ospanov Medical University (WKMU)
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
                onClick={() => scrollTo("wkmu-admission")}
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

      <section id="wkmu-overview" ref={(el) => {sectionRefs.current["wkmu-overview"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>West Kazakhstan Marat Ospanov Medical University (WKMU)</h3>
          <p className={paragraphClass}>
            West Kazakhstan Marat Ospanov Medical University (WKMU) is a reputed government medical university located in Aktobe. It is one of the leading institutions in Kazakhstan dedicated to medical education, clinical training, and healthcare research. The university is a popular choice for students planning to pursue MBBS abroad due to its affordability and quality education.
          </p>
          <p className={paragraphClass}>
            Established in 1957, WKMU has developed into a modern medical university known for producing skilled doctors and healthcare professionals. The university follows international medical standards, offering a strong combination of theoretical knowledge and practical training.
          </p>
          <p className={paragraphClass}>
            With experienced faculty, advanced laboratories, and access to teaching hospitals, WKMU provides a solid academic foundation for students pursuing MBBS and medical careers.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="wkmu-history" ref={(el) => {sectionRefs.current["wkmu-history"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>History</h3>
          <p className={paragraphClass}>
            WKMU was founded in 1957 as a medical institute to meet the growing demand for healthcare professionals in the region. Initially, it focused on basic medical sciences such as anatomy, physiology, and pathology.
          </p>
          <p className={paragraphClass}>
            Over time, the university expanded its academic structure by introducing specialized fields including general medicine, dentistry, pharmacy, and public health. Continuous development in infrastructure and teaching methods has helped WKMU become a recognized center for medical education and research.Today, it stands as a well-established institution offering modern education in MBBS and healthcare disciplines.
          </p>
          <h3 className={sectionHeadingClass}>About the City – Aktobe</h3>
          <p className={paragraphClass}>Aktobe is a developing and student-friendly city in Kazakhstan, known for:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Safe and peaceful environment</li>
            <li>Affordable cost of living</li>
            <li>Modern infrastructure and transport</li>
            <li>Comfortable climate for international students</li>
          </ul>
          <p className={paragraphClass}>
            It provides a suitable environment for students pursuing MBBS and medical studies abroad.
          </p>
          <h4 className={subHeadingClass}>Mission</h4>
          <p className={paragraphClass}>
            The mission of WKMU is to prepare competent and skilled medical professionals through high-quality education, clinical practice, and research. It aims to contribute to global healthcare by producing graduates capable of handling modern medical challenges.
          </p>
          <h4 className={subHeadingClass}>Vision</h4>
          <p className={paragraphClass}>
            The vision of WKMU is to become a globally competitive medical university, recognized for excellence in MBBS education, clinical training, and medical research, attracting international students worldwide.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="wkmu-campus" ref={(el) => {sectionRefs.current["wkmu-campus"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Campus</h3>
          <p className={paragraphClass}>
            WKMU has a well-equipped campus with facilities designed specifically for medical students and clinical training.
          </p>
          <ul className={listClass}>
            <li>Modern laboratories and simulation centers</li>
            <li>Affiliated teaching hospitals for hands-on experience</li>
            <li>Digital classrooms and medical libraries</li>
            <li>Research centers for healthcare innovation</li>
          </ul>
          <p className={paragraphClass}>
            The campus supports practical-based learning, which is essential for MBBS students.
          </p>
        </MotionRevealBlock>

        <div className="overflow-x-auto rounded-[3vw] md:rounded-[1vw] border border-black/10 mb-[5vw] md:mb-[2vw]">
          <table className="w-full text-smallTextPhone md:text-regularText">
            <tbody>
              {[
                ["Established", "1957"],
                ["Type", "Government Medical University"],
                ["Location", "Aktobe, Kazakhstan"],
                ["Medium of Instruction", "English (for international students)"],
                ["Popular Course", "MBBS (General Medicine)"],
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
            <li>Recognized among top medical universities in Kazakhstan</li>
            <li>Listed in international directories of medical education institutions</li>
            <li>Maintains a strong position in regional and national rankings</li>
            <li>Considered a preferred choice for students seeking affordable MBBS abroad</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="wkmu-medicine" ref={(el) => {sectionRefs.current["wkmu-medicine"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Faculty of Medicine & Healthcare</h3>
          <p className={paragraphClass}>WKMU focuses mainly on medical and healthcare education, offering:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>MBBS (General Medicine)</li>
            <li>Dentistry</li>
            <li>Pharmacy</li>
            <li>Nursing</li>
            <li>Public Health</li>
          </ul>
          <h4 className={subHeadingClass}>Key Features</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Early clinical exposure</li>
            <li>Practical-based learning approach</li>
            <li>International standard curriculum</li>
            <li>Training in affiliated hospitals</li>
          </ul>

          <h3 className={sectionHeadingClass}>Clinical Exposure</h3>
          <p className={paragraphClass}>Students gain real-life experience through:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Teaching hospitals</li>
            <li>Government healthcare centers</li>
            <li>Clinical laboratories</li>
            <li>Hands-on patient interaction</li>
            <li>Practical training from early years</li>
            <li>Exposure to real medical cases</li>
          </ul>

          <h3 className={sectionHeadingClass}>International Students</h3>
          <ul className={listClass}>
            <li>Students from multiple countries</li>
            <li>Growing popularity among Indian students</li>
            <li>Opportunities for medical internships and exchange programs</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="wkmu-student-life" ref={(el) => {sectionRefs.current["wkmu-student-life"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Hostel Facilities for Indian Students</h3>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Comfortable and affordable dormitories</li>
            <li>Fully furnished rooms</li>
            <li>Indian food availability</li>
            <li>Facilities include:</li>
            <li>Wi-Fi</li>
            <li>Study areas</li>
            <li>Kitchen</li>
            <li>Laundry</li>
            <li>Safe and multicultural environment</li>
          </ul>

          <h3 className={sectionHeadingClass}>Security Features</h3>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>24/7 campus security</li>
            <li>CCTV surveillance</li>
            <li>Controlled hostel access</li>
            <li>Emergency safety systems</li>
            <li>Safe for international students</li>
          </ul>

          <h3 className={sectionHeadingClass}>Student Life</h3>
          <p className={paragraphClass}>
            Student life at WKMU is balanced and engaging, combining academic learning with extracurricular activities.
          </p>
          <h4 className={subHeadingClass}>Facilities</h4>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Libraries and research centers</li>
            <li>Sports and fitness facilities</li>
            <li>Cultural and student events</li>
          </ul>
          <p className={paragraphClass}>
            Students can maintain a healthy balance between MBBS studies and personal development.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="wkmu-admission" ref={(el) => {sectionRefs.current["wkmu-admission"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 shadow-[0_14px_40px_rgba(255,117,0,0.12)]">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Why Choose WKMU for Indian Students?</h3>
            <ul className={listClass}>
              <li>Affordable MBBS abroad fees</li>
              <li>Recognized medical university</li>
              <li>Strong clinical and hospital training</li>
              <li>English-medium instruction</li>
              <li>Globally accepted degree</li>
              <li>Safe and student-friendly environment</li>
              <li>Good success rate in FMGE/NExT</li>
            </ul>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Recognition</h3>
            <ul className={listClass}>
              <li>Recognized by NMC (National Medical Commission)</li>
              <li>Listed in WHO World Directory of Medical Schools (WDOMS)</li>
              <li>Degree valid for practice after FMGE/NExT</li>
              <li>Follows international standards in medical education</li>
            </ul>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Eligibility Criteria</h3>
            <ul className={listClass}>
              <li>Minimum age: 17 years</li>
              <li>12th with PCB subjects</li>
              <li>Minimum 50% marks</li>
              <li>NEET qualification required</li>
            </ul>
          </div>
          <Image
            src="/assets/Images/mbbs-in-nepal/nepal2.png"
            className="w-full md:w-[32.5vw] h-auto rounded-[2vw] md:rounded-[1vw] object-cover"
            width={690}
            height={690}
            alt="Medical training and campus environment"
          />
        </div>
      </section>

      <section id="wkmu-travel" ref={(el) => {sectionRefs.current["wkmu-travel"] = el}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white">
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">Admission Process</h3>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%] mb-[5vw] md:mb-[1.5vw]">
              <li>Apply with documents</li>
              <li>Receive admission letter</li>
              <li>Pay fees</li>
              <li>Get invitation letter</li>
              <li>Apply for visa</li>
              <li>Travel to Kazakhstan</li>
            </ol>

            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">How to Reach WKMU (From India)</h3>
            <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
              <li>Nearest airport: Aktobe International Airport</li>
              <li>Flights via cities like:</li>
              <li>Dubai</li>
              <li>Istanbul</li>
              <li>Almaty</li>
              <li>20–30 minutes to university campus</li>
              <li>Airport pickup assistance available</li>
            </ul>

            <p className={paragraphClass}>
              West Kazakhstan Marat Ospanov Medical University is a solid option for students planning to study MBBS abroad, offering affordable education, strong clinical exposure, global recognition, and a safe learning environment.
            </p>
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

