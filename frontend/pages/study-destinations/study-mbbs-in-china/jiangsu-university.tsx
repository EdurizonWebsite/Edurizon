import Head from "next/head";
import React from "react";
import JiangsuUniversityInteractive from "@/components/studyDestinationComponents/russia/JiangsuUniversityInteractive";

const JiangsuUniversityPage = () => {
  return (
    <>
      <Head>
        <title>MBBS Abroad | Jiangsu University</title>
        <meta
          name="description"
          content="Study MBBS at Jiangsu University, China. Explore ranking, recognition, syllabus, hostel safety, clinical exposure, admission process, and travel guidance for Indian students."
        />
      </Head>
      <JiangsuUniversityInteractive />
    </>
  );
};

export default JiangsuUniversityPage;

