export interface nmcCard{
    src:string,
    flgSrc:string,
    countryName:string,
    pdfSrc:string,
    description:string[],
    countryUrl?:string,
}

export const nmcCards:nmcCard[] = [
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/Russia.webp',
      flgSrc:'/assets/Images/country-flag/russia.png',
      countryName:'Russia',
      pdfSrc:'/assets/nmc/russia.pdf',
      description:[
        '6 Years MD Program',
        'Dual-Degree Verification',
        'NMC Pass Rates: High',
      ],
      countryUrl:'/study-destination/study-mbbs-in-russia'
    },
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/China.webp',
      flgSrc:'/assets/Images/country-flag/china.png',
      countryName:'China',
      pdfSrc:'/assets/nmc/china.pdf',
      description:[
        '5+1 Years MBBS Program',
        'English Medium Available',
        'Affordable Tuition Fees',
      ],
      countryUrl:'/study-destination/study-mbbs-in-china'
    },
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/Tajikistan.webp',
      flgSrc:'/assets/Images/country-flag/tajikistan.png',
      countryName:'Tajikistan',
      pdfSrc:'/assets/nmc/tajikistan.pdf',
      description:[
        'Affordable MBBS Program',
        '5–6 Years Duration',
        'Growing Popularity',
      ],
      countryUrl:'/study-destination/study-mbbs-in-tajikistan'
    },
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/Kyrgyzstan.webp',
      flgSrc:'/assets/Images/country-flag/kyrgyzstan.png',
      countryName:'Kyrgyzstan',
      pdfSrc:'/assets/nmc/kyrgyzstan.pdf',
      description:[
        'Low Cost MBBS',
        'English Medium',
        'Popular Among Indian Students',
      ],
      countryUrl:'/study-destination/study-mbbs-in-kyrgyzstan'
    },
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/Georgia.webp',
      flgSrc:'/assets/Images/country-flag/georgia.png',
      countryName:'Georgia',
      pdfSrc:'/assets/nmc/georgia.pdf',
      description:[
        '6 Years MD Program',
        'European Curriculum',
        'English Medium Available',
      ],
      countryUrl:'/study-destination/study-mbbs-in-georgia'
    },
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/Uzbekistan.webp',
      flgSrc:'/assets/Images/country-flag/uzbekistan.png',
      countryName:'Uzbekistan',
      pdfSrc:'/assets/nmc/uzbekistan.pdf',
      description:[
        'Affordable Fees',
        '5–6 Years Program',
        'English Medium',
      ],
      countryUrl:'/study-destination/study-mbbs-in-uzbekistan'
    },
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/Kazakhstan.webp',
      flgSrc:'/assets/Images/country-flag/kazakhstan.png',
      countryName:'Kazakhstan',
      pdfSrc:'/assets/nmc/kazakhstan.pdf',
      description:[
        'Low Tuition Fees',
        'Recognized Universities',
        'English Medium Available',
      ],
      countryUrl:'/study-destination/study-mbbs-in-kazakhstan'
    },
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/Nepal.webp',
      flgSrc:'/assets/Images/country-flag/nepal.png',
      countryName:'Nepal',
      pdfSrc:'/assets/nmc/nepal.pdf',
      description:[
        'NMC Approved Colleges',
        'Similar Curriculum to India',
        'Moderate Fees',
      ],
      countryUrl:'/study-destination/study-mbbs-in-nepal'
    },
    {
      src:'/assets/Images/CountryBlogs/studyDestinationCard/Bangladesh.webp',
      flgSrc:'/assets/Images/country-flag/bangladesh.png',
      countryName:'Bangladesh',
      pdfSrc:'/assets/nmc/bangladesh.pdf',
      description:[
        'High FMGE Pass Rate',
        '5 Years MBBS + Internship',
        'Affordable Fees',
      ],
      countryUrl:'/study-destination/study-mbbs-in-bangladesh'
    },
    // {
    //   src:'/assets/Images/mbbs-in-india/india-gate.jpg',
    //   flgSrc:'/assets/Images/country-flag/indian-flag.png',
    //   countryName:'India',
    //   pdfSrc:'/assets/nmc/india.pdf',
    //   description:[
    //     '5.5 Years MBBS Program',
    //     'Highly Competitive NEET',
    //     'Top Medical Colleges',
    //   ],
    //   countryUrl:'/study-destination/study-mbbs-in-india'
    // }
  ]

export const faqs=[
    {
        question:'What are the latest NMC guidelines for 2024?',
        answer:'The latest NMC guidelines (FMGL 2021) remain the primary regulatory framework for 2024. Key updates emphasize that students must complete their entire course and internship at the same institution, and the medium of instruction must be English. Additionally, students must be eligible to register as medical practitioners in the country where they obtained their degree.'
    },
    {
        question:'Is the 12-month internship mandatory abroad?',
        answer:'Yes, according to the FMGL Regulations 2021, a 12-month clinical internship must be completed in the same medical institution from which the degree was obtained. This must be done before applying for the FMGE screening test in India. After passing FMGE, students are further required to complete an additional 12 months of internship (CRMI) in India to obtain permanent registration.'
    },
    {
        question:'Are degrees from the Philippines still valid?',
        answer:'Degrees from the Philippines are valid provided they comply with the FMGL 2021 criteria. Recent clarifications suggest that the MD program (which follows the BS course) must be of 54 months duration to meet the 4.5-year academic requirement. Students who enrolled after the 2021 notification must ensure their curriculum aligns perfectly with the total duration and internship rules specified by the NMC.'
    },
    {
        question:'What is the "one institution" rule?',
        answer:'The "one institution" rule mandates that the entire primary medical qualification, including the clinical clerkship and internship, must be completed at a single medical university or institution. Transferring between colleges or countries during the course of study is no longer permitted for students seeking recognition of their foreign medical degrees by the National Medical Commission of India.'
    }
]