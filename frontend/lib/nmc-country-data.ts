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

  export const faqs = [
    {
      question: 'Are you aware of the latest NMC guidelines for studying MBBS abroad?',
      answer: `
  NMC has issued comprehensive guidelines for Foreign Medical Graduates focusing on:
  
  i) 54 months MBBS
  ii) 12-month internship
  iii) Internship should not be in parts
  iv) Medium of instruction should be English
  v) Licence to practice
  vi) Degree must be completed from the same University where it is started
  vii) University should be recognized by WHO
  `
    },
    {
      question: 'Do you know that NEET qualification is mandatory for MBBS abroad eligibility?',
      answer: 'Yes, qualifying NEET is mandatory for Indian students who wish to study MBBS abroad and later practice in India.'
    },
    {
      question: 'Are you aware that the foreign medical course must be recognized as per NMC norms?',
      answer: 'Yes, the university and degree must meet NMC regulations; otherwise, students may face registration issues in India.'
    },
    {
      question: 'Do you know that the total course duration should be at least 54 months?',
      answer: 'Yes, the medical course must have a minimum duration of 54 months (4.5 years), excluding internship.'
    },
    {
      question: 'Are you aware that a 12-month internship is mandatory after completion of MBBS abroad?',
      answer: 'Yes, students must complete a 12-month clinical internship as part of their medical education.'
    },
    {
      question: 'Do you know that the internship should be completed in the same country/university?',
      answer: 'Yes, as per NMC guidelines, the internship should be part of the same institution where the student studied medicine.'
    },
    {
      question: 'Are you aware that the medium of instruction should be English?',
      answer: 'Yes, the course should be taught in English to ensure students understand academics and remain eligible.'
    },
    {
      question: 'Do you know that practical clinical training is compulsory as per NMC guidelines?',
      answer: 'Yes, hands-on clinical exposure and hospital training are essential parts of the medical program.'
    },
    {
      question: 'Are you aware that students must clear FMGE / NEXT to practice in India after MBBS abroad?',
      answer: 'Yes, students must qualify the screening or licensing exam (FMGE or NEXT) prescribed by Indian authorities to practice in India.'
    },
    {
      question: 'Do you know that choosing the wrong university may create eligibility issues in India?',
      answer: 'Yes, selecting a non-compliant university can lead to serious issues in registration and medical practice rights in India.'
    },
    {
      question: 'Are you aware of hidden risks in non-NMC compliant universities?',
      answer: 'Yes, risks include invalid degree, poor clinical exposure, additional expenses, delayed graduation, and possible rejection of medical licence.'
    },
    {
      question: 'Do you need expert guidance for selecting an NMC-approved university?',
      answer: 'Yes, professional counselling helps students choose the right university safely and confidently.'
    },
    {
      question: 'Would you like a free counselling session regarding latest NMC guidelines for MBBS abroad?',
      answer: 'Yes, free counselling helps students understand eligibility, country options, and make safe admission decisions.'
    }
  ];