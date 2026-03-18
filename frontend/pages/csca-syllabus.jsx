import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/csca/SectionHeader";
import InfoCard from "@/components/csca/InfoCard";
import Accordion from "@/components/csca/Accordion";
import CTASection from "@/components/csca/CTASection";

const syllabusData = {
  Physics: {
    hero: {
      title: "CSCA Syllabus",
      subtitle: "Physics • Chemistry • Mathematics",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=70",
      imageAlt: "Science study setup",
    },
    topicCards: [
      { title: "Mechanics", desc: "Kinematics, Newton’s laws, momentum, work-energy." },
      { title: "Electromagnetism", desc: "Electrostatics, circuits, induction, Lorentz force." },
      { title: "Thermodynamics", desc: "Kinetic theory, ideal gas, first law." },
      { title: "Optics", desc: "Reflection/refraction, interference, diffraction." },
      { title: "Modern Physics", desc: "Photoelectric effect, atoms, nuclear basics." },
    ],
    accordions: [
      {
        title: "Mechanics",
        points: [
          "Displacement, velocity, acceleration, uniform acceleration, free fall",
          "Newton’s laws and applications",
          "Momentum, impulse, conservation of momentum",
          "Work & energy, conservation of mechanical energy",
          "Circular motion & universal gravitation",
          "Simple harmonic motion & mechanical waves",
        ],
      },
      {
        title: "Electromagnetism",
        points: [
          "Coulomb’s law, electric field, electric potential",
          "DC circuits: Ohm’s law, series/parallel",
          "Magnetic induction, Ampere’s force, Lorentz force",
          "Faraday’s law & Lenz’s law",
        ],
      },
      {
        title: "Thermodynamics",
        points: ["Kinetic theory of gases", "Ideal gas equation of state", "First law of thermodynamics"],
      },
      {
        title: "Optics",
        points: ["Laws of reflection and refraction", "Interference and diffraction (physical optics)"],
      },
      {
        title: "Modern Physics",
        points: ["Photoelectric effect", "Atomic structure", "Fundamentals of nuclear physics"],
      },
    ],
  },
  Chemistry: {
    topicCards: [
      { title: "Basics + Calculations", desc: "Notation, equations, concentration, pH, moles, gases." },
      { title: "Substances + Reactions", desc: "Inorganic properties, organic basics, redox, ionic tests." },
      { title: "Theories + Laws", desc: "Atomic structure, bonding, kinetics, equilibrium." },
      { title: "Experiments + Applications", desc: "Lab safety, gases, separation, industrial processes." },
    ],
    accordions: [
      {
        title: "Basic Chemical Concepts and Calculations",
        points: [
          "Classification and state changes of matter",
          "Chemical notation and equation writing",
          "Solution concentration and pH calculations",
          "Amount of substance calculations",
          "Ideal gas law applications",
        ],
      },
      {
        title: "Properties and Reactions of Substances",
        points: [
          "Common inorganic substances: elements, oxides, acids, bases, salts",
          "Basic organic compounds: hydrocarbons and derivatives",
          "Identify redox reactions",
          "Ionic reactions and testing methods",
        ],
      },
      {
        title: "Chemical Theories and Laws",
        points: [
          "Atomic structure and periodic law",
          "Chemical bonds and intermolecular forces",
          "Reaction rate and chemical equilibrium",
          "Electrolyte solution concepts",
        ],
      },
      {
        title: "Chemical Experiments and Applications",
        points: [
          "Lab safety and apparatus use",
          "Preparation/identification of common gases",
          "Separation and purification methods",
          "Industrial processes (e.g., ammonia synthesis)",
        ],
      },
    ],
  },
  Mathematics: {
    topicCards: [
      { title: "Sets + Inequalities", desc: "Set operations; quadratic/rational inequality solving." },
      { title: "Functions", desc: "Domain/range, monotonicity; trig/exp/log; sequences." },
      { title: "Calculus Basics", desc: "Derivatives: meaning and simple applications." },
      { title: "Geometry + Algebra", desc: "Conics, vectors, complex numbers, 3D geometry." },
      { title: "Probability + Stats", desc: "Classical probability, mean/variance, normal distribution." },
    ],
    accordions: [
      {
        title: "Sets and Inequalities",
        points: [
          "Definition, operations and representation of sets",
          "Properties and solution methods of inequalities (quadratic, rational)",
        ],
      },
      {
        title: "Functions",
        points: [
          "Domain, range, monotonicity, parity and key properties",
          "Elementary functions: power, exponential, logarithmic, trigonometric",
          "Sequences: arithmetic/geometric general term and summation",
          "Basics of derivatives and calculus: definition, geometric meaning, simple applications",
        ],
      },
      {
        title: "Geometry and Algebra",
        points: [
          "Analytic geometry: lines, circles, ellipse, hyperbola, parabola",
          "Vectors and complex numbers: core operations",
          "Solid geometry: 3D coordinates and properties of simple solids",
        ],
      },
      {
        title: "Probability and Statistics",
        points: [
          "Classical probability model and probability calculation",
          "Numerical characteristics of data: mean, variance",
          "Basic concept of normal distribution",
        ],
      },
    ],
  },
};

const tabOrder = ["Physics", "Chemistry", "Mathematics"];

function TabButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-[6vw] md:px-[1.25vw] py-[2.75vw] md:py-[0.65vw]",
        "text-smallTextPhone md:text-smallText font-semibold transition-all duration-200",
        active
          ? "bg-orangeChosen text-white shadow-[0_10px_25px_rgba(255,117,0,0.25)]"
          : "border border-orangeChosen text-orangeChosen bg-white/70 dark:bg-black/30 hover:bg-white",
      ].join(" ")}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

export default function CSCASyllabusPage() {
  const [active, setActive] = useState("Physics");

  const activeData = useMemo(() => syllabusData[active], [active]);

  return (
    <>
      <Head>
        <title>CSCA Syllabus (Physics, Chemistry, Mathematics) | Edurizon</title>
        <meta
          name="description"
          content="CSCA syllabus overview for Physics, Chemistry, and Mathematics with topic breakdowns and detailed accordion sections."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="pt-[20vw] md:pt-[7.25vw] flex flex-col gap-[10vw] md:gap-[4vw]">
        {/* Hero */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <div className="rounded-[5vw] md:rounded-[1.75vw] border border-black/10 dark:border-white/10 bg-linenChosen overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.10)]">
            <div className="grid md:grid-cols-2 gap-[6vw] md:gap-[2vw] p-[6vw] md:p-[2.5vw]">
              <div className="flex flex-col gap-[3vw] md:gap-[1vw] justify-center">
                <p className="text-smallTextPhone md:text-smallText font-semibold text-orangeChosen tracking-wide">
                  CSCA • Syllabus
                </p>
                <h1 className="text-h3TextPhone md:text-h2Text font-bold leading-[115%]">
                  {syllabusData.Physics.hero.title}
                  <br />
                  <span className="text-orangeChosen">{syllabusData.Physics.hero.subtitle}</span>
                </h1>
                <p className="text-regularTextPhone md:text-regularText opacity-80 leading-[170%]">
                  Toggle between subjects to see the key topics and a detailed outline you can use to structure prep.
                </p>

                <div className="flex flex-col md:flex-row gap-[3vw] md:gap-[1vw]">
                  <Link
                    href="/csca"
                    className="rounded-full border border-orangeChosen text-orangeChosen bg-white/70 dark:bg-black/30 px-[6vw] md:px-[1.25vw] py-[3.25vw] md:py-[0.75vw] text-smallTextPhone md:text-smallText font-semibold text-center transition-all duration-200 hover:bg-white"
                  >
                    View CSCA Details
                  </Link>
                  <Link
                    href="/contact-us"
                    className="rounded-full bg-orangeChosen text-white px-[6vw] md:px-[1.25vw] py-[3.25vw] md:py-[0.75vw] text-smallTextPhone md:text-smallText font-semibold text-center transition-all duration-200 hover:opacity-95"
                  >
                    Apply / Contact
                  </Link>
                </div>
              </div>

              <div className="relative rounded-[4vw] md:rounded-[1.25vw] overflow-hidden border border-black/10 dark:border-white/10">
                <Image
                  src={syllabusData.Physics.hero.image}
                  alt={syllabusData.Physics.hero.imageAlt}
                  width={1600}
                  height={1000}
                  className="w-full h-[60vw] md:h-[22vw] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <div className="rounded-[5vw] md:rounded-[1.75vw] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur p-[5vw] md:p-[2vw] shadow-[0_16px_45px_rgba(0,0,0,0.10)]">
            <SectionHeader
              eyebrow="Subjects"
              title="Explore the CSCA syllabus"
              subtitle="Select a subject to view topic highlights and a detailed breakdown."
            />

            <div className="mt-[5vw] md:mt-[1.5vw] flex flex-col md:flex-row gap-[3vw] md:gap-[1vw] items-stretch md:items-center justify-center">
              {tabOrder.map((t) => (
                <TabButton key={t} active={active === t} onClick={() => setActive(t)}>
                  {t}
                </TabButton>
              ))}
            </div>
          </div>
        </section>

        {/* Topic Cards */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <SectionHeader
            eyebrow={`${active} • Highlights`}
            title="Key topic areas"
            subtitle="A quick scan of what you’ll be tested on—use this to guide weekly preparation."
          />

          <div className="mt-[6vw] md:mt-[2vw] grid md:grid-cols-3 gap-[4vw] md:gap-[1.25vw]">
            {activeData.topicCards.map((t) => (
              <InfoCard key={t.title} title={t.title} description={t.desc} />
            ))}
          </div>
        </section>

        {/* Accordion */}
        <section className="mx-[6vw] md:mx-[12.5vw]">
          <SectionHeader
            eyebrow={`${active} • Detailed`}
            title="Detailed syllabus breakdown"
            subtitle="Expand each topic for the exact points you should cover."
          />

          <div className="mt-[6vw] md:mt-[2vw]">
            <Accordion items={activeData.accordions} />
          </div>
        </section>

        {/* CTA */}
        <section className="pb-[12vw] md:pb-[6vw]">
          <CTASection
            title="Want a prep plan aligned to your target university?"
            description="We’ll help you map subjects and timelines based on your MBBS in China goals."
            primaryCta={{ label: "Apply / Contact", href: "/contact-us" }}
            secondaryCta={{ label: "View CSCA Details", href: "/csca" }}
          />
        </section>
      </main>
    </>
  );
}

