import Head from "next/head";
import React from "react";
import KazakhNationalMedicalUniversityInteractive from "@/components/studyDestinationComponents/kazakhstan/KazakhNationalMedicalUniversityInteractive";

const KazakhNationalMedicalUniversityPage = () => {
  return (
    <>
      <Head>
        <title>MBBS in Kazakhstan | Kazakh National Medical University</title>
        <meta
          name="description"
          content="Study MBBS at Kazakh National Medical University (KazNMU), Almaty. Explore eligibility, campus facilities, recognition, admission process, and travel guidance for Indian students."
        />
      </Head>
      <KazakhNationalMedicalUniversityInteractive />
    </>
  );
};

export default KazakhNationalMedicalUniversityPage;

