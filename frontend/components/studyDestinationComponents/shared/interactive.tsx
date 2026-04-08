"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const paragraphClass =
  "text-smallTextPhone md:text-regularText text-left md:text-justify mb-[4vw] md:mb-[1vw] leading-[170%]";
export const listClass =
  "text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-0 text-left md:text-regularText md:text-justify leading-[170%]";
export const sectionHeadingClass =
  "text-h6TextPhone leading-[120%] md:text-h5Text text-left font-bold scroll-mt-[12vw] mb-2 md:scroll-mt-[7vw]";
export const subHeadingClass =
  "text-smallTextPhone md:text-regularText font-bold text-left mb-[2vw] md:mb-[0.75vw] mt-[2vw] md:mt-[1vw]";

export function getNavScrollOffsetPx(): number {
  if (typeof window === "undefined") return 0;
  const w = window.innerWidth;
  return w * (w >= 768 ? 0.12 : 0.32);
}

export function InteractiveSectionNav({
  items,
  activeId,
  onNavigate,
}: {
  items: { id: string; label: string }[];
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      className="sticky top-[16vw] md:top-[8vw] z-30 mx-[4vw] md:mx-[12.5vw] mb-[6vw] md:mb-[2vw]"
      aria-label="Page sections"
    >
      <div className="rounded-full border border-black/10 dark:border-white/15 bg-white/90 dark:bg-black/60 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-[2vw] md:px-[1vw] py-[2vw] md:py-[0.65vw] overflow-x-auto no-scrollbar">
        <div className="flex gap-[2vw] md:gap-[0.5vw] min-w-min md:justify-center md:flex-wrap">
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={[
                  "whitespace-nowrap rounded-full px-[4vw] md:px-[1.1vw] py-[2vw] md:py-[0.45vw]",
                  "text-tinyTextPhone md:text-tinyText font-semibold transition-all duration-300",
                  active
                    ? "bg-orangeChosen text-white shadow-[0_6px_20px_rgba(255,117,0,0.35)] scale-[1.02]"
                    : "bg-linenChosen/80 dark:bg-white/5 text-foreground hover:bg-orangeChosen/15 hover:text-orangeChosen",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function InteractiveAccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-[3.5vw] md:rounded-[1.125vw] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-[3vw] md:gap-[1vw] p-[4vw] md:p-[1.25vw] text-left font-bold text-h6TextPhone md:text-h6Text leading-[130%] transition-colors hover:bg-linenChosen/50 dark:hover:bg-white/5"
        aria-expanded={open}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-[8vw] w-[8vw] md:h-[2vw] md:w-[2vw] shrink-0 items-center justify-center rounded-full bg-orangeChosen/15 text-orangeChosen"
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="md:w-4 md:h-4">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-black/5 dark:border-white/10 px-[4vw] md:px-[1.25vw] pb-[4vw] md:pb-[1.25vw] pt-[1vw] md:pt-[0.5vw]">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function MotionRevealBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

