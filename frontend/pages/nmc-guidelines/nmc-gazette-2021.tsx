import Head from "next/head";
import React from "react";
import Breadcrumbs from "@/components/Breadcumbs";
import dynamic from "next/dynamic";

const PdfAccessGate = dynamic(() => import("@/components/pdf/PdfAccessGate"), {
  ssr: false,
});

export default function NmcGazette2021Page() {
  return (
    <>
      <Head>
        <title>NMC Gazette 2021 | Edurizon</title>
        <meta
          name="description"
          content="NMC Gazette 2021 document access (contact to unlock)."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw] md:pt-[8vw]">
        <Breadcrumbs />

        <section className="w-full px-[5vw] md:px-[7.5vw]">
          <PdfAccessGate
            title="NMC Gazette 2021"
            pdfUrl="/assets/pdf/NMC%20GAZETTE%202021.pdf"
            storageKey="pdf_access:nmc_gazette_2021"
            contactCtaLabel="Download"
          />
        </section>
      </section>
    </>
  );
}

