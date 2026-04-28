import Breadcrumbs from "@/components/Breadcumbs";
import CountryWiseSection from "@/components/nmc/country-wise-section";
import FAQSection from "@/components/landingPage/FAQSection";
import Head from "next/head";
import React from "react";
import { faqs } from "@/lib/nmc-country-data";
import NMCHeader from "@/components/nmc/header-section";
import { useRouter } from "next/router";
import { TransitionLink } from "@/utils/TransitionLink";
const NmcGuidelines = () => {
  const router = useRouter();

  const handleExploreGuidelines = () => {
    const el = document.getElementById("nmc-country-wise-section");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOpenGazettePdf = () => {
    router.push("/nmc-guidelines/nmc-gazette-2021");
  };

  return (
    <>
      <Head>
        <title>NMC Guidelines | Edurizon</title>
        <meta name="description" content="NMC Guidelines" />
        <meta
          name="keywords"
          content="NMC Guidelines, NMC Guidelines for Indian Students, NMC Guidelines for International Students, NMC Guidelines for MBBS Students, NMC Guidelines for MD Students, NMC Guidelines for MS Students, NMC Guidelines for PhD Students"
        />
        <meta name="author" content="Edurizon" />
        <meta name="robots" content="index, follow" />
        <meta name="DC.title" content="NMC Guidelines" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
      </Head>
      <section className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw] md:pt-[8vw]">
        <Breadcrumbs />

        {/* Header */}
        <NMCHeader
          onExploreClick={handleExploreGuidelines}
          onDownloadClick={handleOpenGazettePdf}
        />
        {/* Advisory from NMC*/}
        <section className="px-8 py-10 relative  ">
          <div className="max-w-7xl mx-auto bg-linenChosen  border border-primary-fixed p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-16 h-16 bg-orangeChosen flex-shrink-0 rounded-xl flex items-center justify-center text-white">
              <svg
                width="33"
                height="29"
                viewBox="0 0 33 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 28.5L16.5 0L33 28.5H0V28.5M5.175 25.5H27.825L16.5 6L5.175 25.5V25.5M16.5 24C16.925 24 17.2813 23.8563 17.5688 23.5688C17.8563 23.2813 18 22.925 18 22.5C18 22.075 17.8563 21.7187 17.5688 21.4312C17.2813 21.1437 16.925 21 16.5 21C16.075 21 15.7187 21.1437 15.4312 21.4312C15.1437 21.7187 15 22.075 15 22.5C15 22.925 15.1437 23.2813 15.4312 23.5688C15.7187 23.8563 16.075 24 16.5 24V24M15 19.5H18V12H15V19.5V19.5M16.5 15.75V15.75V15.75V15.75V15.75"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex-grow space-y-1 text-center md:text-left">
              <h2 className="text-mediumTextPhone md:text-mediumText font-helvetica font-bold text-[#7B2F00]">
                Important Advisory from NMC
              </h2>
              <p className="text-[#584238] text-smallTextPhone max-w-3xl md:text-smallText font-poppins leading-relaxed">
                Beware of unauthorized medical colleges and consultants. Ensure
                you verify the FMGE/NExT eligibility before enrolling. All
                foreign medical degrees must comply with the FMGL 2021 gazette
                requirements.
              </p>
            </div>
            <TransitionLink href="/nmc-guidelines/nmc-gazette-2021">
              <button className="flex-shrink-0 hover:bg-[#351000] transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-full font-bold bg-[#a5451c] whitespace-nowrap text-smallTextPhone md:text-smallText">
                Read Full Advisory
              </button>
            </TransitionLink>
          </div>
        </section>
        {/* Country Wise Section  */}
        <section id="nmc-country-wise-section" className="w-full">
          <CountryWiseSection />
        </section>

        {/* FAQ Section */}
        <FAQSection data={faqs} />
      </section>
    </>
  );
};

export default NmcGuidelines;
