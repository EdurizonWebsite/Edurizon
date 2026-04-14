import Head from "next/head";
import React from "react";
import WenzhouMedicalUniversityInteractive from "@/components/studyDestinationComponents/russia/WenzhouMedicalUniversityInteractive";

const WenzhouMedicalUniversityPage = () => {
  return (
    <>
      <Head>
        <title>MBBS Abroad | Wenzhou Medical University</title>
        <meta
          name="description"
          content="Study MBBS at Wenzhou Medical University, China. Explore rankings, recognition, syllabus, hostel safety, clinical exposure, admission process, and travel guidance for Indian students."
        />
      </Head>
      <WenzhouMedicalUniversityInteractive />
    </>
  );
};

export default WenzhouMedicalUniversityPage;

