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
  { icon: "/assets/Images/Icons/feesIcon.svg", text: "Established", label: "1933" },
  { icon: "/assets/Images/Icons/ExperienceIcon.svg", text: "Type", label: "National Research University" },
  { icon: "/assets/Images/Icons/TieUpsIcon.svg", text: "Location", label: "Almaty, Kazakhstan" },
  { icon: "/assets/Images/Icons/AcademinCoursesIcon.svg", text: "Students", label: "20,000+" },
];

const NAV = [
  { id: "kaznu-overview", label: "Overview" },
  { id: "kaznu-history", label: "History" },
  { id: "kaznu-campus", label: "Campus" },
  { id: "kaznu-medicine", label: "Medicine" },
  { id: "kaznu-student-life", label: "Student Life" },
  { id: "kaznu-admission", label: "Admission" },
  { id: "kaznu-travel", label: "Travel" },
];

export default function AlFarabiKazakhNationalUniversityInteractive() {
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
              src="/assets/Images/mbbs-in-kazakhstan/al-farabi-kazakh-national-university.webp"
              alt="Al-Farabi Kazakh National University"
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
              Al-Farabi Kazakh National University (KazNU)
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
                onClick={() => scrollTo("kaznu-admission")}
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

      <section id="kaznu-overview" ref={(el) => {
  sectionRefs.current["kaznu-overview"] = el;
}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Kemerovo State Medical University</h3>
          <h3 className={sectionHeadingClass}>Al-Farabi Kazakh National University (KazNU)</h3>
          <p className={paragraphClass}>
            Al-Farabi Kazakh National University (KazNU) is a prestigious public research university located in Almaty, Kazakhstan. Named after the renowned philosopher Al-Farabi, it is considered one of the leading higher education institutions in Central Asia. The university offers diverse academic programs, including medical education, making it a preferred destination for students planning to pursue MBBS abroad.
          </p>
          <p className={paragraphClass}>
            Founded in 1933, KazNU is the oldest university in Kazakhstan and has consistently maintained high academic standards. In 2001, it was awarded the статус of a national university, highlighting its importance in the country’s educational and research development.
          </p>
          <p className={paragraphClass}>
            With a student population exceeding 20,000 and more than 2,500 faculty members, KazNU provides a strong academic environment. The university is known for its experienced teaching staff, modern laboratories, and emphasis on practical training and clinical exposure, which are essential for students pursuing MBBS and healthcare-related courses. Its focus on research, innovation, and medical sciences ensures students receive globally competitive education.
          </p>
          <p className={paragraphClass}>
            KazNU has gained international recognition and was ranked around 150th in the QS World University Rankings 2023. This ranking enhances its reputation among international students seeking affordable MBBS programs, globally recognized degrees, and quality medical education.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="kaznu-history" ref={(el) => {
  sectionRefs.current["kaznu-history"] = el;
}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>History</h3>
          <p className={paragraphClass}>
            The university officially began its academic operations on January 15, 1934, following a government decree during the Soviet era. Initially, it focused on core science disciplines such as Biology, Physics, Mathematics, and Chemistry, which later became the foundation for advanced fields like medical sciences and healthcare education.
          </p>
          <p className={paragraphClass}>
            Over time, KazNU expanded its academic structure by introducing new faculties. The humanities stream developed with the addition of language and philology programs, while journalism education was introduced in the early 1940s.
          </p>
          <p className={paragraphClass}>
            After World War II, the university saw rapid growth, with the establishment of faculties such as Geography, Philosophy, Economics, and Law. This expansion strengthened its academic diversity and research capabilities, supporting the development of scientific and medical research fields.
          </p>
          <p className={paragraphClass}>
            By the 1980s, KazNU had evolved into a major research institution with numerous departments, laboratories, and highly qualified academic staff. This strong foundation enabled the university to advance in areas like medicine, clinical research, and healthcare education.
          </p>
          <p className={paragraphClass}>
            Today, KazNU continues to build on its legacy by offering modern infrastructure, advanced research opportunities, and high-quality education for students pursuing careers in MBBS, medicine, and other healthcare professions.
          </p>
          <h4 className={subHeadingClass}>Mission</h4>
          <p className={paragraphClass}>
            The mission of Al-Farabi Kazakh National University is to develop highly skilled and competitive professionals through innovative education, research, and industry integration. The university aims to prepare students, including those pursuing MBBS and medical education, to meet global challenges and contribute effectively to the fields of healthcare, science, and technology.
          </p>
          <h4 className={subHeadingClass}>Vision</h4>
          <p className={paragraphClass}>
            The vision of KazNU is to become a world-class research university that is globally competitive in education, scientific research, and medical innovation, attracting students from around the world, especially those seeking quality MBBS abroad programs.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="kaznu-campus"  ref={(el) => {
  sectionRefs.current["kaznu-campus"] = el;
}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Campus</h3>
          <p className={paragraphClass}>
            Al-Farabi Kazakh National University features a large and modern campus known as Kazgugrad, situated in a scenic and well-developed part of Almaty. Spread across nearly 100 hectares, it is considered the largest university campus in Kazakhstan and provides an excellent environment for both academic and student life, including those pursuing MBBS and medical education abroad.
          </p>
          <p className={paragraphClass}>
            The campus is located between Timiryazev Street, Al-Farabi Avenue, and the Vesnovka River, offering a peaceful and accessible setting. The central administrative building is a 15-story structure that houses key faculties such as history, economics, law, philology, and journalism. In total, the university has 13 academic buildings covering around 165,000 square meters, along with advanced scientific laboratories spanning nearly 19,000 square meters. These modern facilities support high-quality medical training, clinical research, and practical learning for MBBS students.
          </p>
          <p className={paragraphClass}>
            Student accommodation is well-developed, with 17 dormitories available on campus, providing a safe and comfortable living environment for both local and international students, including those enrolled in medical and healthcare programs.
          </p>
          <p className={paragraphClass}>
            In addition to the main campus, there is a smaller secondary campus located at the intersection of Karasay Batyr and Masanchi streets. This campus hosts departments such as Philosophy and Political Science, Oriental Studies, Preparatory Studies, and International Relations. Previously, science-related faculties like Physics, Chemistry, and Mathematics were also located here, but in 2011 they were relocated to newly built facilities on the main campus to enhance infrastructure and support modern scientific and medical education.
          </p>
          <p className={paragraphClass}>KazNU has a massive 100-hectare campus ("Kazgugrad"), featuring:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>13+ academic buildings</li>
            <li>Advanced laboratories & research centers</li>
            <li>2 million+ books library</li>
            <li>Sports complexes & stadium</li>
            <li>Student activity centers</li>
          </ul>
        </MotionRevealBlock>

        <div className="overflow-x-auto rounded-[3vw] md:rounded-[1vw] border border-black/10 mb-[5vw] md:mb-[2vw]">
          <table className="w-full text-smallTextPhone md:text-regularText">
            <tbody>
              {[
                ["Official Name", "Äl-Farabi Kazakh National University"],
                ["Type", "National Research University"],
                ["Established", "1934"],
                ["Total Students", "20,000+"],
                ["Undergraduates", "16,000"],
                ["Postgraduates", "4,000"],
                ["Location", "Al-Farabi Avenue 71, Almaty, Kazakhstan"],
                ["Campus", "Urban"],
                ["Website", "www.farabi.university"],
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
            <li>QS World University Ranking 2026: 166th in the world</li>
            <li>QS Ranking 2023: Top 150 globally</li>
            <li>QS EECA Ranking: Top 20 in Emerging Europe & Central Asia</li>
            <li>Among Top 500 Universities worldwide</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="kaznu-medicine" ref={(el) => {
  sectionRefs.current["kaznu-medicine"] = el;
}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>About the City – Almaty</h3>
          <p className={paragraphClass}>Almaty is the largest and most developed city in Kazakhstan, known for its:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Beautiful mountains and scenic landscapes</li>
            <li>Safe and student-friendly environment</li>
            <li>Modern infrastructure and public transport</li>
            <li>Multicultural atmosphere</li>
          </ul>
          <p className={paragraphClass}>
            It offers an ideal environment for international students, especially for medical studies.
          </p>

          <h3 className={sectionHeadingClass}>Faculty of Medicine & Healthcare</h3>
          <p className={paragraphClass}>KazNU’s Faculty of Medicine and Healthcare offers globally aligned MBBS programs with:</p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Modern clinical training & research-based education</li>
            <li>Highly qualified international faculty</li>
            <li>Programs in English medium</li>
            <li>Training in:</li>
            <li>General Medicine (MBBS equivalent)</li>
            <li>Public Health</li>
            <li>Clinical Specialties</li>
          </ul>
        </MotionRevealBlock>

        <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
          <InteractiveAccordionItem title="Faculties" defaultOpen>
            <p className={paragraphClass}>
              Al-Farabi Kazakh National University (KazNU) offers a wide range of faculties covering science, technology, humanities, and medical education, making it suitable for students pursuing MBBS and healthcare-related courses.
            </p>
            <ul className={listClass}>
              <li>Faculty of Biology and Biotechnology – Focuses on biomedical sciences, genetics, and biotechnology, important for MBBS students and medical research.</li>
              <li>Faculty of Physics and Technology – Provides advanced education in physics and modern technology with strong research opportunities.</li>
              <li>Faculty of Chemistry and Chemical Technology – Offers training in chemistry with modern labs, useful for pharmaceutical and medical studies.</li>
              <li>Faculty of Philology and World Languages – Specializes in languages, literature, and communication skills.</li>
              <li>Faculty of Journalism – Trains students for careers in media and mass communication.</li>
              <li>Faculty of Information Technology – Focuses on IT, software, and modern digital technologies.</li>
              <li>Faculty of History, Archaeology and Ethnology – Covers history, culture, and heritage studies.</li>
              <li>Faculty of Philosophy and Political Science – Deals with psychology, philosophy, and political studies.</li>
              <li>Higher School of Economics and Business – Offers programs in economics, finance, and business management.</li>
              <li>Faculty of Law – Provides legal education and professional law training.</li>
              <li>Faculty of Oriental Studies – Focuses on Asian languages and international cultural studies.</li>
              <li>Faculty of International Relations – Prepares students for global relations, diplomacy, and international law.</li>
              <li>Faculty of Pre-University Education – Helps international students prepare for higher studies.</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Medical & Science Focus">
            <ul className={listClass}>
              <li>Higher School of Medicine – Provides medical education, clinical training, and MBBS-related programs, essential for students aiming for careers in healthcare and medicine.</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Clinical Exposure">
            <p className={paragraphClass}>Students gain hands-on experience at:</p>
            <ul className={listClass}>
              <li>Clinical Diagnostic Center</li>
              <li>City Hospital No. 1</li>
              <li>Affiliated medical institutions</li>
              <li>Early clinical exposure</li>
              <li>Practical-based training</li>
              <li>International medical standards</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Students from 100+ countries">
            <ul className={listClass}>
              <li>Exchange programs & global partnerships</li>
              <li>Internships in hospitals and research centers</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Hostel Facilities for Indian Students">
            <ul className={listClass}>
              <li>14+ modern student dormitories</li>
              <li>Fully furnished rooms</li>
              <li>Separate accommodation options</li>
              <li>Facilities include:</li>
              <li>Wi-Fi internet</li>
              <li>Study halls & reading rooms</li>
              <li>Kitchens & laundry rooms</li>
              <li>24/7 water & heating system</li>
              <li>Comfortable & affordable living</li>
              <li>Multicultural student environment</li>
            </ul>
          </InteractiveAccordionItem>
          <InteractiveAccordionItem title="Security Features">
            <p className={paragraphClass}>KazNU ensures high-level student safety, including:</p>
            <ul className={listClass}>
              <li>24/7 campus security personnel</li>
              <li>CCTV surveillance across campus & hostels</li>
              <li>Electronic access entry system</li>
              <li>Fire safety & emergency systems</li>
              <li>Controlled hostel entry timings</li>
              <li>Safe environment for international students</li>
            </ul>
          </InteractiveAccordionItem>
        </div>
      </section>

      <section id="kaznu-student-life" ref={(el) => {
  sectionRefs.current["kaznu-student-life"] = el;
}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <MotionRevealBlock>
          <h3 className={sectionHeadingClass}>Student Life</h3>
          <p className={paragraphClass}>
            Student life at Al-Farabi Kazakh National University is vibrant, engaging, and focused on overall development. The university provides an environment where students can gain knowledge, build skills, and develop a positive and active lifestyle. It especially supports students pursuing MBBS and medical education by offering a balanced mix of academics, practical training, and extracurricular activities.
          </p>
          <h4 className={subHeadingClass}>Campus Life & Facilities</h4>
          <p className={paragraphClass}>
            The Kazgugrad campus offers modern facilities, including academic buildings, a large scientific library, research centers, and a medical center for healthcare support. Students also benefit from Wi-Fi-enabled campus areas, computer labs, and a 24/7 internet center, which are essential for medical studies and research work.
          </p>
          <p className={paragraphClass}>
            Accommodation is available in well-equipped dormitories with safety systems, study areas, kitchens, and internet access, making it convenient for international students studying MBBS abroad.
          </p>
          <h4 className={subHeadingClass}>Student Activities & Organizations</h4>
          <p className={paragraphClass}>
            KazNU encourages students to participate in youth organizations, cultural clubs, and social initiatives. Programs focused on sustainable development, environmental awareness, and leadership help students grow personally and professionally.
          </p>
          <p className={paragraphClass}>
            Creative platforms like the Art Center allow students to explore talents in music, theatre, and arts, ensuring a balanced student life alongside medical and academic studies.
          </p>
          <h4 className={subHeadingClass}>Health, Support & Inclusion</h4>
          <p className={paragraphClass}>
            The university promotes student well-being through psychological support services and an Office of Equality, Diversity, and Inclusion. These services ensure a safe, respectful, and supportive environment for all students, including those in medical and healthcare programs.
          </p>
          <h4 className={subHeadingClass}>Food & Daily Needs</h4>
          <p className={paragraphClass}>
            The campus includes modern canteens, cafes, and food outlets offering healthy and affordable meals. Facilities like printing centers, stationery shops, and convenience services make daily student life comfortable.
          </p>
          <h4 className={subHeadingClass}>Sports & Fitness</h4>
          <p className={paragraphClass}>
            KazNU has excellent sports infrastructure, including stadiums, gyms, swimming pools, and courts for various games. Students regularly participate in national and international competitions, promoting fitness and teamwork alongside demanding MBBS studies.
          </p>
        </MotionRevealBlock>
      </section>

      <section id="kaznu-admission" ref={(el) => {
  sectionRefs.current["kaznu-admission"] = el;
}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[8vw] md:pb-[3vw] text-black dark:text-white">
        <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[5vw] md:gap-[2vw] items-center bg-linenChosen rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/20 shadow-[0_14px_40px_rgba(255,117,0,0.12)]">
          <div className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] text-left">
              Why Choose Al-Farabi Kazakh National University (KazNU) for Indian Students?
            </h3>
            <p className={paragraphClass}>
              Al-Farabi Kazakh National University (KazNU) is one of the top universities in Kazakhstan and a preferred choice for Indian students planning to pursue MBBS abroad. It offers a combination of quality education, global recognition, and modern medical training.
            </p>
            <h4 className={subHeadingClass}>Key Reasons to Choose KazNU</h4>
            <ul className={listClass}>
              <li>Affordable MBBS fees compared to private medical colleges in India</li>
              <li>Globally recognized university with strong academic reputation</li>
              <li>High-quality medical education and clinical training</li>
              <li>Modern infrastructure with advanced laboratories and research centers</li>
              <li>Experienced faculty with expertise in medicine and healthcare</li>
              <li>Emphasis on practical exposure and hospital-based training</li>
              <li>Well-equipped campus with medical and research facilities</li>
              <li>Safe and secure environment for international students</li>
              <li>Availability of hostels and Indian food options</li>
              <li>Multicultural environment with students from different countries</li>
              <li>English-medium programs for international students</li>
              <li>Located in Almaty, a developed city with good living conditions</li>
            </ul>
          </div>
          <Image
            src="/assets/Images/mbbs-in-nepal/nepal2.png"
            className="w-full md:w-[32.5vw] h-auto rounded-[2vw] md:rounded-[1vw] object-cover"
            width={690}
            height={690}
            alt="KazNU student and campus environment"
          />
        </div>

        <MotionRevealBlock className="mt-[6vw] md:mt-[2vw]">
          <h3 className={sectionHeadingClass}>Recognition of KazNU</h3>
          <p className={paragraphClass}>
            Al-Farabi Kazakh National University is recognized by major international organizations, ensuring global acceptance of its degree.
          </p>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Recognized by NMC (National Medical Commission)</li>
            <li>Listed in the World Directory of Medical Schools (WDOMS)</li>
            <li>Recognized by WHO (World Health Organization)</li>
            <li>Ranked among the top universities globally (QS Rankings)</li>
            <li>Degree is valid for students who want to practice in India after qualifying NExT/FMGE</li>
          </ul>

          <h3 className={sectionHeadingClass}>Eligibility Criteria for MBBS Admission</h3>
          <ul className={listClass + " mb-[4vw] md:mb-[1vw]"}>
            <li>Minimum age: 17 years by 31st December of admission year</li>
            <li>Must complete 12th with Physics, Chemistry, and Biology (PCB)</li>
            <li>Minimum 50% marks in PCB (40% for reserved categories)</li>
            <li>Must qualify the NEET exam</li>
          </ul>
        </MotionRevealBlock>
      </section>

      <section id="kaznu-travel" ref={(el) => {
  sectionRefs.current["kaznu-travel"] = el;
}} className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[12vw] md:pb-[5vw] text-black dark:text-white">
        <MotionRevealBlock>
          <div className="rounded-[4vw] md:rounded-[1.25vw] border-2 border-orangeChosen/30 bg-gradient-to-br from-linenChosen to-white p-[6vw] md:p-[2vw] shadow-[0_12px_40px_rgba(255,117,0,0.12)]">
            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              Admission Process & Required Documents
            </h3>
            <h4 className={subHeadingClass}>Required Documents</h4>
            <ul className="grid md:grid-cols-2 gap-[2vw] md:gap-[0.75vw] list-none ml-0 mb-[5vw] md:mb-[1.5vw]">
              {[
                "10th & 12th mark sheets",
                "Valid passport",
                "NEET scorecard",
                "Passport-size photographs",
                "English test (IELTS/DUOLINGO)",
              ].map((doc) => (
                <li key={doc} className="flex items-start gap-[2vw] md:gap-[0.65vw] text-smallTextPhone md:text-regularText">
                  <span className="mt-[0.35vw] md:mt-[0.2vw] flex h-[6vw] w-[6vw] md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-orangeChosen text-white text-tinyTextPhone md:text-xs font-bold leading-none">
                    ✓
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <h4 className={subHeadingClass}>Admission Steps</h4>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%] mb-[5vw] md:mb-[1.5vw]">
              <li>Submit application with documents</li>
              <li>Receive admission letter from KazNU</li>
              <li>Pay tuition fees</li>
              <li>Get invitation letter</li>
              <li>Apply for student visa</li>
              <li>Book air tickets</li>
              <li>Travel to Kazakhstan and begin MBBS course</li>
            </ol>

            <h3 className="text-h5TextPhone md:text-h4Text font-bold mb-[3vw] md:mb-[1vw] text-left">
              How to Reach KazNU (From India)
            </h3>
            <h4 className={subHeadingClass}>Nearest Airport:</h4>
            <ul className={listClass + " mb-[2vw] md:mb-[0.75vw]"}>
              <li>Almaty International Airport</li>
            </ul>
            <h4 className={subHeadingClass}>Travel Route:</h4>
            <ol className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>Flight from Delhi / Mumbai → Almaty</li>
              <li>Direct flights available or via cities like:</li>
            </ol>
            <ul className={listClass + " mt-[2vw] md:mt-[0.75vw] mb-[2vw] md:mb-[0.75vw]"}>
              <li>Dubai</li>
              <li>Istanbul</li>
              <li>Tashkent</li>
            </ul>
            <ol start={3} className="text-smallTextPhone md:text-regularText list-decimal ml-[5vw] md:ml-[1.5vw] leading-[170%]">
              <li>From airport:</li>
            </ol>
            <ul className={listClass + " mt-[2vw] md:mt-[0.75vw] mb-[4vw] md:mb-[1vw]"}>
              <li>20–30 minutes drive to university campus</li>
              <li>University assistance available for airport pickup</li>
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

