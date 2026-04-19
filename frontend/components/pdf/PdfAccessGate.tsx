import React, { useEffect, useState } from "react";
import ContactUnlockModal from "@/components/pdf/ContactUnlockModal";

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
  contactCtaLabel = "Contact Us",
}: PdfAccessGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(storageKey);
      if (v === "unlocked") setUnlocked(true);
    } catch {
      // no-op (SSR / privacy mode)
    }
  }, [storageKey]);

  return (
    <div className="w-full">
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

      <div className="relative mt-6 rounded-2xl overflow-hidden border border-primary-fixed bg-white">
        <div
          className={[
            "w-full h-[75vh] md:h-[80vh] bg-white",
            unlocked ? "" : "blur-md",
          ].join(" ")}
          style={{ transition: "filter 200ms ease" }}
        >
          <iframe
            title={title}
            src={pdfUrl}
            className="w-full h-full"
          />
        </div>

        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="max-w-xl w-full rounded-2xl bg-white/80 backdrop-blur-md border border-primary-fixed shadow-lg p-6 text-center">
              <div className="text-smallTextPhone md:text-smallText font-bold text-on-surface">
                This document is available after you contact us.
              </div>
              <div className="mt-2 text-tinyTextPhone md:text-tinyText text-on-surface-variant">
                Click “{contactCtaLabel}” and submit your details to unlock.
              </div>
              <div className="mt-5 flex items-center justify-center">
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

