import Head from "next/head";
import React from "react";
import ShandongUniversityInteractive from "@/components/studyDestinationComponents/russia/ShandongUniversityInteractive";

const ShandongUniversityPage = () => {
  return (
    <>
      <Head>
        <title>MBBS Abroad | Shandong University</title>
        <meta
          name="description"
          content="Study MBBS at Shandong University, China. Explore ranking, MBBS syllabus, hostel and safety, hospital strength, admission process, and travel guidance for Indian students."
        />
      </Head>
      <ShandongUniversityInteractive />
    </>
  );
};

export default ShandongUniversityPage;

