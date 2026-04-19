"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcumbs";
import {
  getNavScrollOffsetPx,
  InteractiveAccordionItem,
  InteractiveSectionNav,
  listClass,
  MotionRevealBlock,
  paragraphClass,
} from "@/components/studyDestinationComponents/shared/interactive";
import {
  HIGH_TUITION_UNIVERSITIES,
  LOW_TUITION_UNIVERSITIES,
  MEDIUM_TUITION_UNIVERSITIES,
  type RussiaFeeUniversity,
} from "@/components/studyDestinationComponents/russia/mbbsRussiaFeesData";

const NAV = [
  { id: "fees-russia-low", label: "Low tuition" },
  { id: "fees-russia-medium", label: "Medium tuition" },
  { id: "fees-russia-high", label: "High tuition" },
];

function FeesTable({ rows }: { rows: RussiaFeeUniversity[] }) {
  return (
    <div className="overflow-x-auto rounded-[3vw] md:rounded-[1vw] border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <table className="w-full min-w-[720px] text-left text-tinyTextPhone md:text-tinyText">
        <thead>
          <tr className="bg-orangeChosen text-white">
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold whitespace-nowrap">#</th>
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold min-w-[160px]">University</th>
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold whitespace-nowrap">City</th>
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold whitespace-nowrap">Est.</th>
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold whitespace-nowrap">Tuition</th>
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold whitespace-nowrap">Hostel</th>
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold whitespace-nowrap">Other</th>
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold whitespace-nowrap">km (Moscow)</th>
            <th className="p-[2.5vw] md:p-[0.85vw] font-semibold whitespace-nowrap">By air</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((u, i) => (
            <tr key={u.id} className={i % 2 === 0 ? "bg-white dark:bg-black/20" : "bg-linenChosen/50 dark:bg-white/[0.03]"}>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top text-orangeChosen font-bold">{i + 1}</td>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top font-semibold text-foreground">
                {u.detailHref ? (
                  <Link href={u.detailHref} className="text-orangeChosen hover:underline underline-offset-2">
                    {u.name}
                  </Link>
                ) : (
                  u.name
                )}
              </td>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top">{u.cityLabel}</td>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top whitespace-nowrap">{u.established}</td>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top whitespace-nowrap">{u.tuition}</td>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top whitespace-nowrap">{u.hostel}</td>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top whitespace-nowrap">{u.other}</td>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top whitespace-nowrap">{u.distanceMoscow}</td>
              <td className="p-[2.5vw] md:p-[0.85vw] align-top whitespace-nowrap">{u.byAir}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UniversityDetailsAccordions({ rows, sectionLabel }: { rows: RussiaFeeUniversity[]; sectionLabel: string }) {
  return (
    <div className="mt-[6vw] md:mt-[2vw]">
      <p className="text-tinyTextPhone md:text-tinyText font-semibold text-orangeChosen uppercase tracking-wide mb-[3vw] md:mb-[1vw] text-left">
        {sectionLabel}
      </p>
      <div className="flex flex-col gap-[2.5vw] md:gap-[0.65vw]">
        {rows.map((u) => (
          <InteractiveAccordionItem
            key={u.id}
            title={`${u.name} · ${u.cityLabel}`}
            defaultOpen={false}
          >
            <p className="text-tinyTextPhone md:text-tinyText font-semibold text-left mb-[2vw] md:mb-[0.65vw] text-orangeChosen/90">
              {u.tuition} tuition · {u.hostel} hostel · {u.other} other (typical)
            </p>
            {u.detailHref ? (
              <p className="text-smallTextPhone md:text-smallText text-left mb-[2vw] md:mb-[0.75vw]">
                <Link href={u.detailHref} className="font-semibold text-orangeChosen hover:underline underline-offset-2">
                  Open full university page →
                </Link>
              </p>
            ) : null}
            {u.description ? <p className={paragraphClass}>{u.description}</p> : null}
            <ul className={listClass}>
              {u.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </InteractiveAccordionItem>
        ))}
      </div>
    </div>
  );
}

export default function MbbsUniversityInRussiaFeesInteractive() {
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
    <div className="pb-[10vw] md:pb-[4vw]  pt-[5vw] md:pt-[3vw]">
      <div className="relative mx-[6vw] md:mx-[12.5vw] mt-[18vw] md:mt-[6vw] mb-[6vw] md:mb-[2.5vw]">
        <Breadcrumbs />
      </div>

      <section className="mx-[6vw] md:mx-[12.5vw] mb-[8vw] md:mb-[3vw] text-left">
        <div className="grid gap-[4vw] md:gap-[2vw] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-stretch rounded-[4vw] md:rounded-[1.5vw] border border-black/8 bg-gradient-to-br from-linenChosen via-white to-linenChosen/80 shadow-[0_20px_60px_rgba(0,0,0,0.07)] overflow-hidden">
          <div className="flex flex-col justify-center p-[6vw] md:p-[2.5vw] md:pl-[3vw] order-2 md:order-1 border-t md:border-t-0">
            <p className="text-tinyTextPhone md:text-tinyText font-semibold uppercase tracking-[0.14em] text-orangeChosen mb-[2vw] md:mb-[0.65vw]">
              Russia · MBBS fees
            </p>
            <h1 className="text-h3TextPhone md:text-h2Text font-bold text-foreground leading-[120%] mb-[3vw] md:mb-[1vw]">
              MBBS universities in Russia
              <span className="block text-h5TextPhone md:text-h4Text mt-[1.5vw] md:mt-[0.5vw] font-semibold text-foreground/85">
                Tuition & hostel — ordered comparison
              </span>
            </h1>
            <p className="text-smallTextPhone md:text-regularText text-foreground/80 leading-[170%] max-w-[540px]">
              Scan the fee bands below, then expand any university for the full write-up. Replace the hero photo on the right when you have a branded asset.
            </p>
            <div className="mt-[4vw] md:mt-[1.35vw] flex flex-wrap gap-[2vw] md:gap-[0.65vw]">
              <button
                type="button"
                onClick={() => scrollTo("fees-russia-low")}
                className="rounded-full bg-orangeChosen px-[5vw] md:px-[1.35vw] py-[2.5vw] md:py-[0.55vw] text-smallTextPhone md:text-smallText font-semibold text-white shadow-[0_8px_24px_rgba(255,117,0,0.35)]"
              >
                Low-fee band
              </button>
              <button
                type="button"
                onClick={() => scrollTo("fees-russia-medium")}
                className="rounded-full border-2 border-orangeChosen/40 bg-white px-[5vw] md:px-[1.35vw] py-[2.5vw] md:py-[0.5vw] text-smallTextPhone md:text-smallText font-semibold text-orangeChosen hover:bg-orangeChosen/10"
              >
                Medium band
              </button>
              <button
                type="button"
                onClick={() => scrollTo("fees-russia-high")}
                className="rounded-full border-2 border-orangeChosen/40 bg-white px-[5vw] md:px-[1.35vw] py-[2.5vw] md:py-[0.5vw] text-smallTextPhone md:text-smallText font-semibold text-orangeChosen hover:bg-orangeChosen/10"
              >
                High band
              </button>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-[5vw] md:px-[1.35vw] py-[2.5vw] md:py-[0.5vw] text-smallTextPhone md:text-smallText font-semibold text-foreground hover:border-orangeChosen/40"
              >
                Confirm fees
              </Link>
            </div>
          </div>
          <div className="relative min-h-[42vw] md:min-h-[280px] order-1 md:order-2">
            <Image
              src="/assets/Images/mbbs-in-russia/mbbs-university-in-russia-fees.png"
              alt="Campus placeholder — swap for your image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-linenChosen/90 pointer-events-none" />
            {/* <div className="absolute bottom-[3vw] left-[3vw] right-[3vw] md:bottom-[1.25vw] md:left-[1.25vw] md:right-[1.25vw] rounded-[2vw] md:rounded-[0.75vw] bg-white/92 backdrop-blur-sm px-[3vw] py-[2vw] md:px-[1vw] md:py-[0.65vw] border border-white/80 shadow-lg">
              <p className="text-tinyTextPhone md:text-tinyText font-semibold text-foreground">Quick tip</p>
              <p className="text-tinyTextPhone md:text-tinyText text-foreground/75 leading-[150%] mt-[0.5vw]">
                Use the comparison tables first; open toggles only for universities you shortlist.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <MotionRevealBlock className="mx-[6vw] md:mx-[12.5vw] mb-[6vw] md:mb-[2vw]">
        <p className={paragraphClass}>
          Fees and other charges are listed as provided for planning purposes. Final amounts, hostel availability, and visa or medical add-ons can change by intake — confirm with admissions before you pay.
        </p>
      </MotionRevealBlock>

      <div className="sticky top-[14vw] md:top-[6vw] pt-[1vw] z-40 bg-white dark:bg-black">
        <InteractiveSectionNav items={NAV} activeId={activeId} onNavigate={scrollTo} />
      </div>

      <section
        id="fees-russia-low"
        ref={(el) => {
          sectionRefs.current["fees-russia-low"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[3.5vw]"
      >
        <MotionRevealBlock>
          <h2 className="text-h5TextPhone md:text-h3Text font-bold text-left mb-[1vw] md:mb-[0.5vw]">Low tuition fees universities, Russia</h2>
          <p className={paragraphClass}>
            Sorted from lower to higher annual tuition within this band. Use the table for a quick comparison, then expand into the notes for each university.
          </p>
        </MotionRevealBlock>
        <FeesTable rows={LOW_TUITION_UNIVERSITIES} />
        <UniversityDetailsAccordions rows={LOW_TUITION_UNIVERSITIES} sectionLabel="University details (low tuition band)" />
      </section>

      <section
        id="fees-russia-medium"
        ref={(el) => {
          sectionRefs.current["fees-russia-medium"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[3.5vw]"
      >
        <MotionRevealBlock>
          <h2 className="text-h5TextPhone md:text-h3Text font-bold text-left mb-[1vw] md:mb-[0.5vw]">Medium tuition fees universities, Russia</h2>
          <p className={paragraphClass}>Mid-range tuition with strong clinical and campus options across regions.</p>
        </MotionRevealBlock>
        <FeesTable rows={MEDIUM_TUITION_UNIVERSITIES} />
        <UniversityDetailsAccordions rows={MEDIUM_TUITION_UNIVERSITIES} sectionLabel="University details (medium tuition band)" />
      </section>

      <section
        id="fees-russia-high"
        ref={(el) => {
          sectionRefs.current["fees-russia-high"] = el;
        }}
        className="scroll-mt-[12vw] md:scroll-mt-[7vw] mx-[6vw] md:mx-[12.5vw] pb-[4vw]"
      >
        <MotionRevealBlock>
          <h2 className="text-h5TextPhone md:text-h3Text font-bold text-left mb-[1vw] md:mb-[0.5vw]">High fees universities, Russia</h2>
          <p className={paragraphClass}>
            Premium-tier fee bands — often tied to location (e.g. capitals), brand, or infrastructure. Verify current year fees on the official offer.
          </p>
        </MotionRevealBlock>
        <FeesTable rows={HIGH_TUITION_UNIVERSITIES} />
        <UniversityDetailsAccordions rows={HIGH_TUITION_UNIVERSITIES} sectionLabel="University details (high tuition band)" />
      </section>

      <MotionRevealBlock className="mx-[6vw] md:mx-[12.5vw]">
        <div className="rounded-[3vw] md:rounded-[1.25vw] border border-orangeChosen/25 bg-linenChosen p-[6vw] md:p-[2vw] flex flex-col md:flex-row md:items-center md:justify-between gap-[4vw] md:gap-[2vw]">
          <p className="text-smallTextPhone md:text-regularText text-left leading-[170%] max-w-[640px]">
            Need a fee quote or hostel confirmation for a specific intake? Our team can align these figures with the latest university notice and your eligibility.
          </p>
          <Link
            href="/contact-us"
            className="shrink-0 inline-flex justify-center rounded-full bg-orangeChosen px-[6vw] md:px-[1.5vw] py-[3vw] md:py-[0.65vw] text-smallTextPhone md:text-smallText font-semibold text-white shadow-lg"
          >
            Contact Edurizon
          </Link>
        </div>
      </MotionRevealBlock>
    </div>
  );
}
