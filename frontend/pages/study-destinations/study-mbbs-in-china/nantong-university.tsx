import React from "react";
import Head from "next/head";
import NantongUniversityInteractive from "@/components/studyDestinationComponents/nantong/NantongUniversityInteractive";

export default function NantongUniversityPage() {
  return (
    <>
      <Head>
        <title>MBBS in China – Nantong University | Edurizon</title>
        <meta
          name="keyword"
          content="nantong university mbbs, mbbs in china nantong university, nantong medical university china, mbbs in china for indian students, english medium mbbs china, nantong university jiangsu"
        />
        <meta
          name="description"
          content="Study MBBS at Nantong University, China: English-medium program, clinical training, campus life, admission and scholarships guidance from Edurizon."
        />
        <meta name="author" content="edurizon" />
        <meta name="robots" content="index, follow" />
        <meta name="DC.title" content="MBBS in China" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka" />
        <meta name="geo.position" content="22.351115;78.667743" />
        <meta name="ICBM" content="22.351115, 78.667743" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MBBS in China – Nantong University | Edurizon"
        />
        <meta
          property="og:description"
          content="Nantong University MBBS in China: overview, campus, living, admission and global recognition."
        />
        <meta property="og:url" content="https://www.edurizon.in/" />
        <meta
          property="og:image"
          content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@edurizon" />
        <meta
          name="twitter:title"
          content="MBBS in China – Nantong University | Edurizon"
        />
        <meta
          name="twitter:description"
          content="Nantong University MBBS in China: overview, campus, living, admission and global recognition."
        />
        <meta
          name="twitter:image"
          content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
        />
        <meta name="twitter:image:alt" content="MBBS in China" />
        <link
          rel="alternate"
          href="https://www.edurizon.in/study-destinations/study-mbbs-in-china/nantong-university"
          hrefLang="en-in"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9JDZZKPGL8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9JDZZKPGL8');
            `,
          }}
        />
      </Head>
      <NantongUniversityInteractive />
    </>
  );
}
