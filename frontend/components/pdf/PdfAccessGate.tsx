"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import ContactUnlockModal from "@/components/pdf/ContactUnlockModal";
import { Document, Page, pdfjs } from "react-pdf";

type PdfAccessGateProps = {
  pdfUrl: string;
  title?: string;
  storageKey: string;
  contactCtaLabel?: string;
};

export default function PdfAccessGate({
  pdfUrl,
  title = "Document",
  storageKey,
  contactCtaLabel = "Download",
}: PdfAccessGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [wrapWidth, setWrapWidth] = useState<number>(0);

  useEffect(() => {
    // Configure PDF.js worker (client-side only)
    try {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    } catch {
      // no-op
    }
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = () => setWrapWidth(el.getBoundingClientRect().width);
    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pageWidth = useMemo(() => {
    // Padding + a tiny breathing room
    return Math.max(320, Math.floor(wrapWidth - 24));
  }, [wrapWidth]);

  useEffect(() => {
    try {
      const v = localStorage.getItem(storageKey);
      if (v === "unlocked") setUnlocked(true);
    } catch {
      // no-op (SSR / privacy mode)
    }
  }, [storageKey]);

  return (
    <div className="w-full max-w-[70vw] mx-auto ">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="text-mediumTextPhone md:text-h2Text font-headline font-extrabold text-on-surface">
          {title}
        </h1>

        {!unlocked && (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-[#A14000] text-white px-5 py-3 rounded-full font-bold text-smallTextPhone md:text-smallText hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-primary/20"
          >
            {contactCtaLabel}
          </button>
        )}
      </div>

      <div className="relative  rounded-2xl overflow-hidden border border-primary-fixed bg-white scale-75 mt-[-3vw]">
        <div
          ref={wrapRef}
          className="w-full h-[75vh] md:h-[80vh]  overflow-y-auto bg-white"
        >
          <div className="px-3 py-4">
            <Document
              file={pdfUrl}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              loading={
                <div className="text-smallTextPhone md:text-smallText text-on-surface-variant">
                  Loading PDF…
                </div>
              }
              error={
                <div className="text-smallTextPhone md:text-smallText text-on-surface-variant">
                  Could not load the PDF.
                </div>
              }
            >
              {/* Page 1: fully visible */}
              <div className="flex justify-center">
                <Page pageNumber={1} width={pageWidth} />
              </div>

              {/* Pages 2+: blurred until unlock */}
              {!unlocked && (
                <div className="mt-6 sticky top-[50%] translate-y-[-50%] z-10 flex justify-center">
                  <div className="max-w-xl w-full rounded-2xl bg-white/85 backdrop-blur-md border border-primary-fixed shadow-lg p-4 text-center">
                    <div className="text-smallTextPhone md:text-smallText font-bold text-on-surface">
                      Submit your details to get full document.
                    </div>
                    <div className="mt-1 text-tinyTextPhone md:text-tinyText text-on-surface-variant">
                      Click “{contactCtaLabel}” and submit your details to unlock.
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#A14000] text-white px-5 py-3 rounded-full font-bold text-smallTextPhone md:text-smallText hover:scale-105 transition-all duration-300"
                      >
                        {contactCtaLabel}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {numPages &&
                Array.from({ length: Math.max(0, numPages - 1) }).map((_, idx) => {
                  const pageNumber = idx + 2;
                  return (
                    <div key={pageNumber} className="mt-6 flex justify-center">
                      <div className="relative">
                        <div
                          className={unlocked ? "" : "blur-md"}
                          style={{ transition: "filter 200ms ease" }}
                        >
                          <Page pageNumber={pageNumber} width={pageWidth} />
                        </div>
                        {!unlocked && (
                          <div className="absolute inset-0" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                  );
                })}
            </Document>
          </div>
        </div>
      </div>

      <ContactUnlockModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        interestedCountry="general"
        remark="Lead from NMC Page"
        onSuccess={() => {
          setUnlocked(true);
          try {
            localStorage.setItem(storageKey, "unlocked");
          } catch {
            // no-op
          }
        }}
      />
    </div>
  );
}

