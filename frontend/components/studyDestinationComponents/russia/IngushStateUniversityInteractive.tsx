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
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Tution|Hostel Fees/year", label: `${feesData.tuition} | ${feesData.hostel}` },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "Public (Government)" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Magas, Russia" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "MBBS Duration", label: "6 Years" },
];

const NAV = [
  { id: "ingu-overview", label: "Overview" },
  { id: "ingu-program", label: "Program" },
  { id: "ingu-student-life", label: "Student Life" },
  { id: "ingu-syllabus", label: "Syllabus" },
  { id: "ingu-admission", label: "Admission" },
  { id: "ingu-travel", label: "Travel" },
];

export default function IngushStateUniversityInteractive() {
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
              src="/assets/Images/mbbs-in-russia/ingush-state-university.webp"
              alt="Ingush State University"
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
              Ingush State University Russia
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
                onClick={() => scrollTo("ingu-admission")}
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
        id="ingu-overview"
        ref={(el) => {
          sectionRefs.current["ingu-overview"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Ingush State University Russia</h3>
          <p className={paragraphClass}>
            Ingush State University, established in 1994, is a public university located in Magas. It is one of the leading institutions in the Republic of Ingushetia, offering globally recognized programs including MBBS in Russia for Indian students.
          </p>
          <p className={paragraphClass}>
            The university is gaining popularity among international students due to its affordable MBBS fees in Russia, quality education, and student-friendly environment.
          </p>
          <h3 className={sectionHeadingClass}>About the City – Magas</h3>
          <p className={paragraphClass}>Magas is the capital city of the Republic of Ingushetia in southern Russia.</p>
          <ul className={listClass}>
            <li>A small and well-planned city with a peaceful environment</li>
            <li>Located in the North Caucasus region</li>
            <li>Safe and suitable for international students</li>
            <li>Low cost of living compared to major Russian cities</li>
            <li>Climate: Cold winters and mild summers</li>
          </ul>
          <p className={paragraphClass}>
            Magas is ideal for students looking for a safe and affordable destination to study MBBS abroad.
          </p>
        </MotionRevealBlock>
      </section>

      <section
        id="ingu-program"
        ref={(el) => {
          sectionRefs.current["ingu-program"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="overflow-x-auto rounded-[3vw] md:rounded-[1vw] border border-black/10 mb-[5vw] md:mb-[2vw]">
          <table className="w-full text-smallTextPhone md:text-regularText">
            <tbody>
              {[
                ["Established", "1994"],
                ["University Type", "Public (Government)"],
                ["Location", "Magas, Russia"],
                ["Total Students", "8,000+"],
                ["Faculty Members", "500+"],
                ["Faculties & Departments", "10 faculties, 40+ departments"],
                ["Medium of Teaching", "English & Russian"],
                ["Course Duration", "6 Years (MBBS in Russia) including internship"],
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
              <li>World Health Organization</li>
              <li>National Medical Commission</li>
              <li>Ministry of Science and Higher Education of Russia</li>
            </ul>
            <p className={paragraphClass}>
              This ensures the degree is valid for students planning to pursue a medical career after MBBS abroad.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="MBBS Program Details">
            <ul className={listClass}>
              <li>Duration: 6 Years</li>
              <li>Medium: English</li>
              <li>Eligibility: NEET qualification mandatory</li>
              <li>Curriculum: Includes theoretical + practical training</li>
            </ul>
            <p className={paragraphClass}>This program is suitable for students searching for:</p>
            <ul className={listClass}>
              <li>MBBS abroad at low cost</li>
              <li>Study MBBS in Russia in English medium</li>
              <li>NMC approved medical universities in Russia</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Courses Offered">
            <h4 className={subHeadingClass}>Undergraduate Programs</h4>
            <ul className={listClass}>
              <li>MBBS (General Medicine)</li>
              <li>Engineering</li>
              <li>Natural Sciences</li>
              <li>Humanities & Social Sciences</li>
              <li>Business & Economics</li>
            </ul>
            <h4 className={subHeadingClass}>Postgraduate Programs</h4>
            <ul className={listClass}>
              <li>MD/MS (Medical fields)</li>
              <li>MSc & Engineering</li>
              <li>IT & Management</li>
              <li>Arts & Languages</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Fee Structure 2026 (affordable fees for MBBS in Russia)">
            <ul className={listClass}>
              <li>Tuition Fee: 2,00,000 RUB/year</li>
              <li>Hostel Fee: 23,000 RUB/year</li>
            </ul>
            <p className={paragraphClass}>
              The university is a good option for students looking for low-cost MBBS universities in Russia.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Cost of Living">
            <ul className={listClass}>
              <li>Monthly Expenses: 10,000 – 15,000 RUB</li>
              <li>Covers food, accommodation, and daily needs</li>
            </ul>
            <p className={paragraphClass}>
              This makes it ideal for students searching for affordable MBBS abroad options.
            </p>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Ranking">
            <ul className={listClass}>
              <li>Country Rank: 340+</li>
              <li>Global Rank: 9700+</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="ingu-student-life"
        ref={(el) => {
          sectionRefs.current["ingu-student-life"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Why Choose Ingush State University?" defaultOpen>
            <ul className={listClass}>
              <li>Affordable MBBS fees in Russia</li>
              <li>Globally recognized medical degree</li>
              <li>Good student-teacher ratio</li>
              <li>Safe and peaceful study environment</li>
              <li>Indian food availability</li>
              <li>Growing international student base</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Points to Consider">
            <ul className={listClass}>
              <li>Smaller city compared to metro locations</li>
              <li>Cold climate conditions</li>
              <li>Russian language required during clinical training</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Student Life at Ingush State University">
            <ul className={listClass}>
              <li>Student life at Ingush State University offers a balanced combination of academics, comfort, and cultural engagement. The university provides a well-developed campus environment that supports both learning and personal growth.</li>
              <li>The campus includes modern classrooms, well-equipped laboratories, a central library, and dedicated spaces for sports and recreational activities. These facilities help medical students gain both theoretical knowledge and practical exposure throughout their studies.</li>
              <li>Accommodation facilities are designed to meet the needs of international students. Hostels are equipped with furnished rooms, beds, study areas, and access to dining options such as university canteens. This ensures a comfortable and convenient living experience while studying MBBS in Russia.</li>
              <li>A dedicated International Activities Department plays an important role in student life. It encourages participation in cultural programs, sports events, and academic exchanges, helping students integrate into a new environment and interact with peers from different countries.</li>
              <li>The university maintains a peaceful and focused study atmosphere, making it ideal for students pursuing medical education. Along with academics, various extracurricular activities, sports events, and cultural programs are regularly organized to support overall personality development.</li>
              <li>Overall, students experience a supportive, safe, and engaging environment that makes their journey of studying MBBS abroad both enjoyable and enriching.</li>
            </ul>
          </InteractiveAccordionItem>

          <InteractiveAccordionItem title="Hostel & Accommodation at Ingush State University">
            <p className={paragraphClass}>
              Ingush State University provides comfortable and affordable accommodation options for international students, especially those pursuing MBBS in Russia. Every year, students from different countries choose the university, and the hostel facilities are designed to ensure a safe and convenient living experience.
            </p>
            <p className={paragraphClass}>
              Students are usually accommodated in shared rooms, promoting a friendly and multicultural environment. The hostels are well-maintained and equipped with essential amenities to support daily student life.
            </p>
            <h4 className={subHeadingClass}>Hostel Facilities</h4>
            <ul className={listClass}>
              <li>Fully furnished rooms with beds and storage</li>
              <li>Study tables and basic furniture for academic needs</li>
              <li>Availability of Indian food in mess/canteen</li>
              <li>24×7 Wi-Fi connectivity</li>
              <li>Heating and ventilation systems (suitable for cold climate)</li>
              <li>Air-conditioned rooms (in selected facilities)</li>
              <li>Access to sports and recreational facilities</li>
            </ul>
            <p className={paragraphClass}>
              The university ensures that students feel at home while studying abroad, offering a secure and student-friendly atmosphere. The accommodation system supports both comfort and focus, helping students concentrate on their medical studies.
            </p>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section
        id="ingu-syllabus"
        ref={(el) => {
          sectionRefs.current["ingu-syllabus"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>MBBS Syllabus at Ingush State University</h3>
          <p className={paragraphClass}>
            The MBBS program at Ingush State University follows a comprehensive 6-year curriculum designed to build strong theoretical knowledge along with practical clinical skills. The course structure gradually progresses from basic medical sciences to advanced clinical training.
          </p>
          <p className={paragraphClass}>
            During the initial years, students focus on core scientific subjects, while the later years emphasize clinical exposure, hospital training, and patient care—making it ideal for students pursuing MBBS in Russia.
          </p>
          <h4 className={subHeadingClass}>Year-wise MBBS Syllabus</h4>
          <div className="grid md:grid-cols-2 gap-[3vw] md:gap-[1vw]">
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 p-[4vw] md:p-[1.25vw] bg-linenChosen/40">
              <h4 className={subHeadingClass}>1st Year - 1st Semester</h4>
              <ul className={listClass}>
                <li>Anatomy</li>
                <li>Physiology</li>
                <li>Biochemistry</li>
              </ul>
              <h4 className={subHeadingClass}>2nd Semester</h4>
              <ul className={listClass}>
                <li>Anatomy</li>
                <li>Histology</li>
                <li>Physiology</li>
                <li>Biochemistry</li>
              </ul>
            </div>
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 p-[4vw] md:p-[1.25vw] bg-linenChosen/40">
              <h4 className={subHeadingClass}>2nd Year - 3rd Semester</h4>
              <ul className={listClass}>
                <li>Histology</li>
                <li>Biochemistry</li>
                <li>Microbiology</li>
                <li>General Pathology</li>
                <li>Cell Biology</li>
                <li>Anatomy</li>
              </ul>
              <h4 className={subHeadingClass}>4th Semester</h4>
              <ul className={listClass}>
                <li>Biochemistry</li>
                <li>Microbiology</li>
                <li>Physiology</li>
              </ul>
            </div>
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 p-[4vw] md:p-[1.25vw] bg-linenChosen/40">
              <h4 className={subHeadingClass}>3rd Year - 5th Semester</h4>
              <ul className={listClass}>
                <li>Pathology</li>
                <li>Pharmacology</li>
                <li>Microbiology</li>
                <li>Pathophysiology</li>
              </ul>
              <h4 className={subHeadingClass}>6th Semester</h4>
              <ul className={listClass}>
                <li>Pathology</li>
                <li>Pathophysiology</li>
                <li>Pharmacology</li>
                <li>Genetics</li>
              </ul>
            </div>
            <div className="rounded-[3vw] md:rounded-[1vw] border border-black/10 p-[4vw] md:p-[1.25vw] bg-linenChosen/40">
              <h4 className={subHeadingClass}>4th to 6th Year (Clinical Phase) 7th – 12th Semester</h4>
              <ul className={listClass}>
                <li>General Surgery</li>
                <li>Internal Medicine</li>
                <li>Pediatrics</li>
                <li>Obstetrics and Gynecology</li>
                <li>Neurology</li>
                <li>Psychiatry</li>
                <li>ENT (Ear, Nose & Throat)</li>
                <li>Cardiology</li>
                <li>Oncology</li>
                <li>Emergency Medicine</li>
                <li>Primary Care Medicine</li>
                <li>Psychology</li>
              </ul>
            </div>
          </div>
          <h3 className={sectionHeadingClass + " mt-[3vw] md:mt-[1vw]"}>Key Features of the Curriculum</h3>
          <ul className={listClass}>
            <li>Strong foundation in basic medical sciences</li>
            <li>Early exposure to clinical subjects</li>
            <li>Hands-on hospital training in later years</li>
            <li>Focus on practical skills and patient care</li>
            <li>Aligned with global standards for MBBS abroad programs</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section
        id="ingu-admission"
        ref={(el) => {
          sectionRefs.current["ingu-admission"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white"
      >
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
              <li>Passport-size photographs</li>
              <li>NEET scorecard</li>
              <li>HIV report</li>
            </ul>

            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">Admission Process</h3>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Fill application form</li>
              <li>Submit required documents</li>
              <li>Receive admission letter</li>
              <li>Submit NEET scorecard</li>
              <li>Pay fees</li>
              <li>Receive invitation letter</li>
              <li>Apply for student visa</li>
              <li>Travel to Russia</li>
            </ol>
          </div>
          <Image
            src="/assets/Images/mbbs-in-nepal/nepal2.png"
            className="w-full md:w-[32.5vw] h-auto rounded-[2vw] md:rounded-[1vw] object-cover ml-auto"
            width={690}
            height={690}
            alt="Medical students in classroom"
          />
        </div>
      </section>

      <section
        id="ingu-travel"
        ref={(el) => {
          sectionRefs.current["ingu-travel"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white"
      >
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">How to Reach Ingush State University</h3>
            <h4 className={subHeadingClass}>From India</h4>
            <p className={paragraphClass}>Students can travel from cities like Delhi or Mumbai:</p>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%] mb-[4vw] md:mb-[1vw]">
              <li>Take an international flight to Moscow</li>
              <li>From Moscow, take a domestic flight to Magas/Nazran</li>
              <li>Reach the university via taxi or arranged transport</li>
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

