import Head from "next/head";
import React from "react";
import MbbsUniversityInRussiaFeesInteractive from "@/components/studyDestinationComponents/russia/MbbsUniversityInRussiaFeesInteractive";

const MbbsUniversityInRussiaFeesPage = () => {
  return (
    <>
      <Head>
        <title>MBBS in Russia — University fees (low, medium, high) | Edurizon</title>
        <meta
          name="description"
          content="Compare MBBS tuition, hostel, and other charges for Russian medical universities — low, medium, and high fee bands — with city, distance from Moscow, and travel notes."
        />
      </Head>
      <MbbsUniversityInRussiaFeesInteractive />
    </>
  );
};

export default MbbsUniversityInRussiaFeesPage;
