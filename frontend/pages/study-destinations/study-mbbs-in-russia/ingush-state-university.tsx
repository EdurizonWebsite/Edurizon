import Head from "next/head";
import React from "react";
import IngushStateUniversityInteractive from "@/components/studyDestinationComponents/russia/IngushStateUniversityInteractive";

const IngushStateUniversityPage = () => {
  return (
    <>
      <Head>
        <title>MBBS in Russia | Ingush State University</title>
        <meta
          name="description"
          content="Study MBBS at Ingush State University, Magas. Explore eligibility, fee structure, syllabus, hostel facilities, admission process, and travel guidance for Indian students."
        />
      </Head>
      <IngushStateUniversityInteractive />
    </>
  );
};

export default IngushStateUniversityPage;

