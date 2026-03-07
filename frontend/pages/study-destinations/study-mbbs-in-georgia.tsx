import DescriptionComponent from "@/components/studyDestinationComponents/descriptionCompnent";
import Header from "@/components/studyDestinationComponents/headerComponent";
import ListedTable from "@/components/studyDestinationComponents/ListedTable";
import PostArrival from "@/components/studyDestinationComponents/postArrival";
import ReasonsToStudy from "@/components/studyDestinationComponents/reasonsToStudy";
import UnlistedTable from "@/components/studyDestinationComponents/unListedTable";
import UnlistedTableEqualWidth from "@/components/studyDestinationComponents/unListedTableEqualWidth";
import { TransitionLink } from "@/utils/TransitionLink";
import Image from "next/image";
import AuthorizationSlider from "@/components/studyDestinationComponents/authorizationSlider";
import Head from "next/head";

const headerData={
    id:"georgia",
    title1:'Study MBBS in Georgia',
    title2:"Best Medical Colleges in Georgia",
    description:"Georgia has rapidly become one of the best country for MBBS for indian students, offering world‑class medical education. In this comprehensive guide, you’ll discover everything you need to know about pursuing MBBS in Georgia —from affordable tuition fees, top NMC‑approved universities to the seamless admission process, eligibility criteria, documents required, student visas etc. With Edurizon by your side, you can apply now and secure a bright medical future, backed by personalized counseling. Georgia has become a popular destination for affordable and globally recognized medical education with modern facilities. MBBS in Georgia for Indian students offers English-medium programs, simple admission procedures, and strong clinical exposure, making it an excellent choice for aspiring doctors from India.",
    description2:"Nestled between Eastern Europe and Western Asia, Georgia spans 69,700 sq km and houses a population of 3.7 million. Bordered by the Black Sea to the west, Russia to the north, Turkey and Armenia to the south, and Azerbaijan to the southeast, its strategic crossroads location has forged a rich cultural tapestry. The capital, Tbilisi, enchants with winding cobblestone lanes, pastel‑faced balconies and a seamless blend of medieval churches and modern architecture. Since its independence on April  9, 1991, Georgia has overhauled its economy and education system to become a hub for international medical students. Today, over 5,000 Indian students’ study MBBS in Georgia, drawn by its English‑medium programs, cutting‑edge technologies & infrastructure, and globally recognized degrees. ",
    subTitle:'Why Georgia for MBBS'
  }

const descriptionData={
    id:"geogia",
    title1normal:"Why Edurizon for MBBS in Georgia?",
    content:["At Edurizon, we guide you through every step of this journey—from free career counseling and university shortlisting to visa processing, Erasmus+ scholarships, and post‑graduation career pathways—ensuring your transition to a Georgian medical university is as smooth as it is successful."],

    content2:"",
    imageAlt:"Georgia",
    imageURL:"/assets/Images/mbbs-in-georgia/Georgia1.png"
}

const reasonToStudyData={
    id:"georgia",
    title:"Why Study MBBS in Georgia? (Key Benefits) ",
    content:[
        {title:"Affordable Education",description:"Georgia offers affordable MBBS course fees. The cost of MBBS in Georgia typically ranges from Rs.4 to Rs.7 lakh per year, making it budget-friendly without compromising quality. cost of MBBS in Georgia"},
        {title:"Globally Recognized Colleges",description:"All Georgia medical colleges are approved by the National Medical Commission (NMC)/WHO/FAIMER.  A Georgian MBBS is internationally recognized, allowing graduates to practice in India (after licensing exams) or pursue PG globally."},
        {title:"High FMGE/NExT Success",description:"Georgian universities boast strong preparation for the Foreign Medical Graduates Exam. Graduates have achieved impressive FMGE passing rates, thereby truly reflecting the high quality of education, training & practical exposure. With the upcoming NExT exam, the rigorous curriculum in Georgia will give you a head start in clearing it."},
        {title:"No Donation or Entrance Exam",description:"MBBS admission in Georgia does not require any donation or capitation fee. There is no separate entrance exam; however, an interview is taken by the Universities just to check the English knowledge & confidence of students. Moreover, NEET qualification is mandatory to get the admission."},
        {title:"Safe and welcoming for Indians",description:"Georgia is known for its hospitality and safety. It ranks among the safest countries in the world, offering a secure & conducive atmosphere to study MBBS for international students. A large community of Indian students means feel at home, with celebrations of all Indian festivals and enjoy Indian cuisine."},
        {title:"European Living Standards",description:"Studying in Georgia means living in a European standard environment – safe & secure cities, clean and green campuses, reliable public transport, and a rich cultural experience. "},
        {title:"English-Medium & Modern Curriculum",description:"The entire MBBS program is taught in English."},
        {title:"Easy Admission & Visa Process",description:"The process to MBBS admission in Georgia is easy, hassle-free, and student-friendly. "},
        
    ],
    darkImg:["1Dark","2Dark","3Dark","5Dark","6Dark","2Dark","4Dark","3Dark"],
    lightImg:["1","2","3","5","6","2","4","3"],
}

const academicData={
    id:"georgia",
    section2:"",
    content:{
        title:"Academic intakes for MBBS in Georgia",
        subTitle:"",
        data:[["Events","Dates"],["Admission Process","Start in the month of May"],["Last date of application","In the month of October"],["Commencement of MBBS course","There are two sessions September-October & February-March"]],
    }
}

const governmentUnivesitiesData={
    id:"georgia",
    section2:"",
    content:{
        title:"Top Government Universities for MBBS in Georgia",
        subTitle:"",
        data:[["University","Facts"],
        ["Tbilisi State Medical University (TSMU)","Georgia's most prestigious & demanding medical university."],
        ["Batumi Shota Rustaveli State University","Famous for its state-of-the-art infrastructure."],
        ["Ivane Javakhishvili Tbilisi State University (TSU)","Internationally acclaimed MBBS programs."],
        ["Akaki Tsereteli State University","Provides affordable education with a good FMGE record."]
        ],
    }
}

const privateUniversitiesData = {
  id: "georgia-private",
  section2: "",
  content: {
    title: "Top Private Universities for MBBS in Georgia",
    subTitle: "",
    data: [
      ["University", "Facts"],
      [
        "East European University (EEU)",
        "Own hospital and a large advanced simulation centre."
      ],
      [
        "New Vision University",
        "Famous for its state-of-the-art infrastructure."
      ],
      [
        "David Tvildiani Medical University",
        "One of the most reputed private medical universities with strong academic standards."
      ],
      [
        "SEU Georgian National University",
        "Provides affordable education with a good FMGE record."
      ],
      [
        "Grigol Robakidze University",
        "Well-known for modern teaching methods and international exposure."
      ]
    ]
  }
};


const universities = [
    {
      id: 1,
      name: "Tbilisi State Medical University",
      location: "Tbilisi",
      feesInUSD: 8000,
      hostelFeesInUSD: 3000,
      href: "/study-destinations/study-mbbs-in-georgia/tbilisi-state-medical-university"
    },
    {
      id: 2,
      name: "East European University",
      location: "Tbilisi",
      feesInUSD: 5500,
      hostelFeesInUSD: 3000,
      href: "/study-destinations/study-mbbs-in-georgia/east-european-university"
    },
    {
      id: 3,
      name: "Batumi Shota Rustaveli State University",
      location: "Batumi",
      feesInUSD: 5000,
      hostelFeesInUSD: 3300,
      href: "/study-destinations/study-mbbs-in-georgia/batumi-shota-rustaveli-state-university"
    },
    {
      id: 4,
      name: "SEU, Georgian National University",
      location: "Tbilisi",
      feesInUSD: 5900,
      hostelFeesInUSD: 3000,
      href: "/study-destinations/study-mbbs-in-georgia/georgian-national-university-seu"
    },
    {
      id: 5,
      name: "David Tvildiani Medical University",
      location: "Tbilisi",
      feesInUSD: 6000,
      hostelFeesInUSD: 3000,
      href: "/study-destinations/study-mbbs-in-georgia/david-tvildiani-medical-university"
    },
    {
      id: 6,
      name: "University of Georgia",
      location: "Tbilisi",
      feesInUSD: 6000,
      hostelFeesInUSD: 3000,
    },
    {
      id: 7,
      name: "Bau International University",
      location: "Batumi",
      feesInUSD: 4800,
      hostelFeesInUSD: 3000,
      href:'/study-destinations/study-mbbs-in-georgia/bau-international-university'
    },
    {
      id: 8,
      name: "Grigol Robakidze University",
      location: "Tbilisi",
      feesInUSD: 5500,
      hostelFeesInUSD: 3000,
    },
    {
      id:9,
      name: 'Akaki Tsereteli State University',
      location:'Kutaisi',
      feesInUSD:4000,
      hostelFeesInUSD:3000
    },
    {
      id: 10,
      name: "New Vision University",
      location: "Tbilisi",
      feesInUSD: 7000,
      hostelFeesInUSD: 3000,
      href: "/study-destinations/study-mbbs-in-georgia/new-vision-university"
    }
  ];
  


const eligibilityData={
    id:"georgia",
    section2:"",
    content:{
        title:"Eligibility Criteria",
        subTitle:"Eligibility Criteria for MBBS in Georgia for Indian students",
        data:[["Criteria","Details"],["Academic Qualification",["Class 12 (equivalent) with Phy, Chem, Bio (PCB).","General Category: Min 50% aggregate in PCB.","SC/ST/OBC: Min 40% aggregate in PCB."]],["NEET Qualification",["NEET qualification is mandatory."]],["Age Limit",["Minimum 17 years as of December 31, of the admission year."]]],
        href:"string;"
    }
}
const cardsData = [
  {
    title: 'Capital',
    value: 'Tbilisi',
    bgColor: '#E7F6FA',
    circleColor: '#F1FAFC',
    textColor:'#006363',
    icon: (
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path fill="#B9D8DB" d="M13 11.333H4.333A1.338 1.338 0 0 0 3 12.667v24.666a.667.667 0 0 0 .667.667H13V11.333zm14.667 0h8.666a1.338 1.338 0 0 1 1.334 1.334V38h-10V11.333zM15 2h10.667A1.333 1.333 0 0 1 27 3.333v2H13.667v-2A1.333 1.333 0 0 1 15 2z"/><path fill="#D6E9EA" d="M12.336 38.001v-32a1.338 1.338 0 0 1 1.333-1.333h13.334a1.337 1.337 0 0 1 1.333 1.333v32h-16z"/><path fill="#0DB7B7" d="M9.005 14.001H6.34a.667.667 0 0 0-.667.667v2.666c0 .369.298.667.667.667h2.666a.667.667 0 0 0 .667-.667v-2.666A.667.667 0 0 0 9.005 14zM9.005 20.668H6.34a.667.667 0 0 0-.667.667V24c0 .368.298.667.667.667h2.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667zM9.005 27.334H6.34a.667.667 0 0 0-.667.667v2.666c0 .368.298.667.667.667h2.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667zM31.669 18.002h2.666a.667.667 0 0 0 .667-.667V14.67a.667.667 0 0 0-.667-.667H31.67a.667.667 0 0 0-.667.667v2.666c0 .368.298.667.667.667zM31.669 24.668h2.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667H31.67a.667.667 0 0 0-.667.667V24c0 .368.298.667.667.667zM18.335 7.334H15.67a.667.667 0 0 0-.667.667v2.666c0 .369.298.667.667.667h2.666a.667.667 0 0 0 .667-.667V8.001a.667.667 0 0 0-.667-.667zM25.005 7.334H22.34a.667.667 0 0 0-.667.667v2.666c0 .369.298.667.666.667h2.667a.667.667 0 0 0 .667-.667V8.001a.667.667 0 0 0-.667-.667zM18.335 14.001H15.67a.667.667 0 0 0-.667.667v2.666c0 .369.298.667.667.667h2.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667zM25.005 14.001H22.34a.667.667 0 0 0-.667.667v2.666c0 .369.298.667.666.667h2.667a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667zM18.335 20.668H15.67a.667.667 0 0 0-.667.667V24c0 .368.298.667.667.667h2.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667zM25.005 20.668H22.34a.667.667 0 0 0-.667.667V24c0 .368.298.667.666.667h2.667a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667z"/></svg>
    )
  },
  {
    title: 'Languages',
    value: 'Georgian, Russian',
    bgColor: '#FAEDBC',
    circleColor: '#FCF4D7',
    textColor:'#957808',
    icon: (
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path fill="#00B6FF" d="M32.438 36a.938.938 0 0 0 .938-.938V30.98h1.687c.517 0 .937-.42.937-.938V11.967a.937.937 0 0 0-.938-.938H18.997a.937.937 0 0 0-.937.938v18.075c0 .517.42.937.937.937h8.033l4.746 4.746c.18.18.42.275.663.275z"/><path fill="#4893FF" d="M32.438 36a.938.938 0 0 0 .938-.938V30.98h1.687c.517 0 .937-.42.937-.938V11.967a.938.938 0 0 0-.938-.938H27.03v19.95l4.746 4.746c.18.18.42.275.663.275z"/><path fill="#F5FAFF" d="M30.952 24.793l-1.765-7.06a2.22 2.22 0 0 0-2.157-1.683 2.22 2.22 0 0 0-2.157 1.683l-1.765 7.06a.938.938 0 0 0 1.82.455l.324-1.298h3.557l.324 1.298a.937.937 0 1 0 1.82-.455zm-5.232-2.718l.972-3.887a.348.348 0 0 1 .676 0l.972 3.887h-2.62z"/><path fill="#FFCB00" d="M7.562 28.97a.938.938 0 0 1-.938-.937V23.95H4.937A.938.938 0 0 1 4 23.012V4.937C4 4.42 4.42 4 4.937 4h16.067c.518 0 .937.42.937.937v18.075c0 .518-.42.938-.937.938H12.97l-4.746 4.746a.937.937 0 0 1-.663.274z"/><path fill="#FF9D22" d="M21.004 4H12.97v19.95h8.033c.518 0 .937-.42.937-.938V4.937A.937.937 0 0 0 21.004 4z"/><path fill="#F5FAFF" d="M17.255 18.097a8.715 8.715 0 0 1-2.923-1.516 11.054 11.054 0 0 0 2.417-4.681h.24a.937.937 0 1 0 0-1.875h-3.08v-1.07a.938.938 0 0 0-1.875 0v1.07H8.955a.937.937 0 1 0 0 1.875h5.853a9.213 9.213 0 0 1-1.836 3.363 8.444 8.444 0 0 1-.528-.741l-.697-1.062a.938.938 0 0 0-1.567 1.03l.697 1.06c.232.355.485.693.756 1.014-1.307 1.015-2.509 1.387-2.973 1.542a.937.937 0 0 0 .295 1.827c.287 0 2.227-.587 4.017-2.04 1.788 1.482 3.725 2.04 4.017 2.04a.938.938 0 0 0 .266-1.836z"/><path fill="#DFE9EE" d="M17.256 18.098a8.714 8.714 0 0 1-2.923-1.516A11.055 11.055 0 0 0 16.75 11.9h.24a.938.938 0 0 0 0-1.875h-3.08v-1.07a.937.937 0 0 0-.937-.938V11.9h1.836a9.213 9.213 0 0 1-1.836 3.363v2.63c1.788 1.482 3.725 2.04 4.017 2.04a.938.938 0 0 0 .266-1.836zM29.132 25.249a.937.937 0 1 0 1.82-.455l-1.766-7.06a2.22 2.22 0 0 0-2.157-1.683v1.875c.16 0 .3.108.338.263l.972 3.887h-1.31v1.875h1.779l.324 1.298z"/></svg>
    )
  },
  {
    title: 'Population',
    value: '4 Million',
    bgColor: '#FAE4E8',
    circleColor: '#FCEFF1',
    textColor:'#CF3323',
    icon: (
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 41"><g clip-path="url(#clip0_12553_22955)"><path fill="#F7B6AD" d="M18.697 10.355a1.664 1.664 0 0 0-2.094 1.234c-.068.313-.145.643-.228.966l2.911 2.43a95.64 95.64 0 0 0 .58-2.726 1.652 1.652 0 0 0-1.17-1.904z"/><path fill="#F7B6AD" d="M18.07 33.651a3.652 3.652 0 0 1 0-1.519c-.04-.148-2.605-9.572-2.605-9.69.761-.455 1.612-1.141 2.165-2.124.073-.13.146-.277.219-.441l.006-.003c1.118-2.674.202-5.132-1.992-5.707a2.634 2.634 0 0 1-.216.415c-.245.368-.557.667-.903.963L12.47 4.819a1.327 1.327 0 0 0-1.572-1.017 1.32 1.32 0 0 0-1.025 1.556l-.363-1.712a1.327 1.327 0 0 0-1.572-1.018 1.322 1.322 0 0 0-1.026 1.56l.516 2.431a1.327 1.327 0 0 0-1.567-.995 1.32 1.32 0 0 0-1.026 1.56l.84 3.962a1.372 1.372 0 0 0-1.626-1.053 1.365 1.365 0 0 0-1.076 1.529c.052.35.114.76.187 1.21l6.878 15.691v.001l.311.738.97.722v4.494l2.575 6.19h3.13c0-2.346.5-4.46 1.304-6.31a2.806 2.806 0 0 1-.258-.707z"/><path fill="#FFC05A" d="M28.068 26.22c-.047.035-1.477-2.951-3.544-2.951-2.098 0-4.166 2.818-4.166 2.818s-1.366.404-1.236 2.17c.029.378.178.793.396 1.211 0 0-1.134 1.123-1.45 2.663v.001a3.649 3.649 0 0 0 0 1.52c.054.25.143.486.258.706a15.727 15.727 0 0 0-1.305 6.31h10.862c4.522-2.773 7.274-13.8 2.088-12.41v-.001l-1.903-2.037z"/><path fill="#FEC4B9" d="M29.581 10.954a1.21 1.21 0 0 0-1.344 1.055l.415-3.55a1.164 1.164 0 0 0-1.028-1.288 1.17 1.17 0 0 0-1.298 1.014l.256-2.193a1.166 1.166 0 0 0-1.029-1.289 1.17 1.17 0 0 0-1.298 1.02l-.18 1.534a1.167 1.167 0 0 0-1.03-1.285 1.17 1.17 0 0 0-1.297 1.021l-1.126 9.613c-.328-.233-.627-.47-.871-.773-.15-.186-.31-.49-.465-.848a19.139 19.139 0 0 1-.622-1.707 1.469 1.469 0 0 0-1.94-.917 1.452 1.452 0 0 0-.873 1.767l.011.04c.455 1.531 1.247 4.057 1.992 5.706.214.474.424.876.62 1.161.567.82 1.372 1.355 2.078 1.694.006.045-.078 1.46-.194 3.358 0 0 1.817 1.382 3.915 1.382 2.067 0 3.749-1.214 3.796-1.25l1.325-5.332c.81-1.947 1.144-6.54 1.26-8.675v-.065c0-.606-.458-1.123-1.073-1.194z"/><path fill="#655F68" d="M12.526 29.834l1.367 10.834H4.297l-1.219-9.66 1.208-.15c1.952-.87 4.336-1.101 7.03-.874l1.21-.15z"/><path fill="#E7F2F1" d="M11.117 28.39l.2 1.594-7.03.872-.201-1.594c1.504-2.062 3.453-2.439 5.95-.738l1.08-.135z"/><path fill="#FFD7D2" d="M12.56 18.33a1.355 1.355 0 0 0-.297-.036l-.016-.001c-.635 0-1.205.454-1.315 1.105-.152.901-.38 1.982-.649 2.434-.18.303-.419.555-.684.806v-.001l-2.244-8.5a1.063 1.063 0 0 0-1.298-.754 1.057 1.057 0 0 0-.759 1.289l-.359-1.36a1.066 1.066 0 0 0-1.78-.48 1.05 1.05 0 0 0-.278 1.014l.513 1.945a1.064 1.064 0 0 0-1.298-.753 1.057 1.057 0 0 0-.76 1.288l.828 3.14a1.102 1.102 0 0 0-2.166.274c0 .07.007.14.021.211.4 2.027 1.38 6.52 2.43 7.923a4.556 4.556 0 0 0 1.636 1.38l.001.008 5.95-.738c.648-.417 1.541-1.137 2.06-2.177.634-1.267 1.204-4.7 1.475-6.539.1-.678-.34-1.32-1.012-1.478zm26.564.028a1.1 1.1 0 0 0-1.304.844h-.001l.674-3.176a1.058 1.058 0 0 0-.822-1.25 1.065 1.065 0 0 0-1.25.769l.408-1.921a1.059 1.059 0 0 0-.822-1.25 1.064 1.064 0 0 0-1.26.816l-.287 1.348c.012-.064.019-.128.019-.19 0-.49-.345-.928-.846-1.033a1.064 1.064 0 0 0-1.26.815l-1.823 8.598c-.278-.238-.528-.477-.724-.771-.15-.226-.297-.62-.431-1.07-.126-.423-.24-.897-.336-1.33a1.334 1.334 0 0 0-1.678-.988 1.322 1.322 0 0 0-.937 1.525c.168.85.416 2.039.705 3.193.282 1.13.602 2.225.92 2.933.056.124.111.236.167.334.444.788 1.126 1.339 1.735 1.703.012.081-2.087 12.41-2.087 12.41h7.437l.851-11.486a4.565 4.565 0 0 0 1.776-1.566c.98-1.453 1.737-5.988 2.038-8.031a1.085 1.085 0 0 0-.862-1.226z"/><path fill="#5D5560" d="M12.525 29.834l1.367 10.834H4.297c8.552-.362 8.228-10.834 8.228-10.834z"/><path fill="#F9B132" d="M28.237 26.554a4.035 4.035 0 0 1-.167-.334 6.396 6.396 0 0 1-.92.534s.239 1.358.066 3.257c-.31 3.385-1.933 8.486-8.575 10.656h9.243s2.1-12.329 2.088-12.41c-.61-.365-1.292-.915-1.735-1.703z"/><path fill="#FEC4B9" d="M36.172 29.18l-.851 11.487h-6.393c5.838-3.913 5.844-11.085 5.844-11.085s.626-.023 1.4-.402zm1.623-9.864a.323.323 0 0 0-.383.247l-.42 1.978a3.883 3.883 0 0 0-1.339-.822l.769-3.625.304-1.438a.322.322 0 1 0-.631-.132l-.305 1.439-.758 3.577a7.024 7.024 0 0 0-1.483-.153l.9-4.24a.323.323 0 0 0-.631-.132l-.933 4.396c-.279.02-.453.048-.462.05a.32.32 0 1 0 .102.631c.003 0 .256-.04.64-.057.521-.024 1.295-.008 2.023.205a3.339 3.339 0 0 1 1.737 1.173c.33.418.47.781.471.784a.323.323 0 0 0 .605-.223 3.838 3.838 0 0 0-.476-.834l.519-2.445a.32.32 0 0 0-.25-.38zm-5.429 4.74a5.277 5.277 0 0 0-.341-.423.324.324 0 0 0-.455-.027.318.318 0 0 0-.028.451c.109.122.207.244.3.373.722 1 .904 1.87.906 1.879a.322.322 0 0 0 .378.252.32.32 0 0 0 .255-.375c-.008-.04-.205-1.008-1.015-2.13zm-.964 4.497c-.003 0-.255-.072-.614-.233a.324.324 0 0 0-.427.16c-.073.162 0 .351.162.424.408.182.693.262.705.265a.322.322 0 0 0 .397-.221.32.32 0 0 0-.223-.395z"/><path fill="#E5A7A1" d="M12.662 13.16a.32.32 0 0 0-.268-.366c-.012-.002-.25-.04-.63-.066L10.46 6.574a.322.322 0 0 0-.631.132l1.272 5.997a8.73 8.73 0 0 0-2.01.207L8.018 7.846a.323.323 0 0 0-.631.132l1.083 5.11a5.015 5.015 0 0 0-.772.345.319.319 0 0 0 .159.599.323.323 0 0 0 .158-.041c.12-.067.244-.129.37-.183.17-.074.355-.14.552-.198.914-.267 1.89-.288 2.548-.258.485.023.805.073.808.073a.323.323 0 0 0 .37-.265zm.992 2.884a7.404 7.404 0 0 0-1.353 1.558.319.319 0 0 0 .27.493c.106 0 .21-.052.272-.147a6.59 6.59 0 0 1 1.24-1.427.318.318 0 0 0 .026-.451.324.324 0 0 0-.455-.026z"/><path fill="#F7B6AD" d="M25.951 24.021c.014 0 .028 0 .042-.002.02-.003.203-.028.488-.115a.32.32 0 1 0-.19-.612c-.233.071-.38.092-.381.092a.32.32 0 0 0 .041.637zm1.657-8.42c.407.429.6.817.602.82a.323.323 0 0 0 .581-.277 4.206 4.206 0 0 0-.611-.87l.304-2.6a.32.32 0 0 0-.283-.355.321.321 0 0 0-.358.28l-.248 2.121a4.244 4.244 0 0 0-1.615-.805l.42-3.59a.32.32 0 0 0-.283-.354.321.321 0 0 0-.358.28l-.414 3.542a7.731 7.731 0 0 0-1.708-.02l.636-5.43a.323.323 0 1 0-.64-.074l-.655 5.59a6.754 6.754 0 0 0-.524.104.32.32 0 1 0 .16.62c.003 0 .28-.07.7-.128.572-.079 1.426-.139 2.25.022a3.698 3.698 0 0 1 2.044 1.124zm-4.882 2.303a6.374 6.374 0 0 0-1.018-.928.324.324 0 0 0-.452.063.318.318 0 0 0 .064.448c.37.276.66.541.918.836.899 1.03 1.188 1.972 1.19 1.981a.322.322 0 0 0 .62-.18c-.013-.043-.325-1.078-1.322-2.22z"/><path fill="#FEC4B9" d="M6.903 21.072c.382 0 .633.026.642.027a.322.322 0 0 0 .356-.283.32.32 0 0 0-.285-.354c-.01 0-.184-.02-.464-.027l-1.117-4.233a.323.323 0 0 0-.624.162l1.076 4.08a7.062 7.062 0 0 0-1.472.224l-1.043-3.952a.323.323 0 0 0-.624.162l1.055 3.999a3.872 3.872 0 0 0-1.299.886l-.514-1.95a.323.323 0 0 0-.624.163l.636 2.41c-.306.464-.429.84-.434.857a.32.32 0 0 0 .307.417.322.322 0 0 0 .307-.223c.001-.004.125-.374.433-.806a3.324 3.324 0 0 1 1.679-1.257c.714-.247 1.486-.3 2.007-.302h.002zm1.725 2.034a5.766 5.766 0 0 0-.78.947c-.752 1.157-.902 2.133-.908 2.174a.32.32 0 0 0 .32.366.322.322 0 0 0 .318-.273c.002-.009.141-.888.813-1.92.189-.29.41-.558.695-.844a.318.318 0 0 0-.002-.452.324.324 0 0 0-.456.002z"/><path fill="#EF9D26" d="M20.702 30.659c-.096-.12-.188-.24-.273-.356a.324.324 0 0 0-.45-.07.318.318 0 0 0-.071.447c.09.122.186.248.287.374.771.971 1.576 1.713 1.61 1.744a.323.323 0 0 0 .456-.018.318.318 0 0 0-.018-.452 16.51 16.51 0 0 1-1.541-1.67zm7.792-1.627a6.56 6.56 0 0 1-1.387.677 6.322 6.322 0 0 1-1.133.28.32.32 0 1 0 .099.633c.43-.066.85-.17 1.248-.31a7.2 7.2 0 0 0 1.523-.743.318.318 0 0 0 .096-.442.324.324 0 0 0-.446-.095zm-6.535 7.653c-.014-.005-1.42-.473-2.477-1.405a.324.324 0 0 0-.455.027.318.318 0 0 0 .027.452c1.16 1.022 2.641 1.514 2.704 1.534a.325.325 0 0 0 .407-.204.32.32 0 0 0-.206-.404z"/><path fill="#D6EAE8" d="M2.845 8.272a.319.319 0 0 0 .279-.48L.869 3.941a.324.324 0 0 0-.44-.116.319.319 0 0 0-.118.438l2.255 3.849c.06.102.168.159.28.159zm2.107-3.905a.322.322 0 0 0 .62-.174L4.636.9a.323.323 0 0 0-.62.174l.937 3.293zm10.625-2.519a.322.322 0 0 0-.636.107l1.094 6.404a.322.322 0 0 0 .372.262.32.32 0 0 0 .264-.369l-1.094-6.404zm4.542 6.777a.321.321 0 0 0 .322-.32V.987a.321.321 0 0 0-.322-.32.321.321 0 0 0-.323.32v7.318c0 .177.144.32.323.32zm11.949.536a.323.323 0 0 0 .409-.201l2.679-7.87a.32.32 0 0 0-.203-.406.323.323 0 0 0-.409.2l-2.679 7.871a.32.32 0 0 0 .203.406zm6.33-4.654a.324.324 0 0 0-.445.102l-2.77 4.409a.319.319 0 0 0 .274.489.323.323 0 0 0 .274-.15l2.77-4.41a.318.318 0 0 0-.104-.44z"/></g><defs><clipPath id="clip0_12553_22955"><path fill="#fff" d="M0 0h40v40H0z" transform="translate(0 .667)"/></clipPath></defs></svg>
    )
  },
  {
    title: 'Weather',
    value: '-5°C to 30°C',
    bgColor: '#BDE3FE',
    circleColor: '#D7EEFE',
    textColor:'#155F9A',
    icon: (
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 41"><g clip-path="url(#clip0_12553_17669)"><path fill="#FDD020" d="M35.257 15.588a8.811 8.811 0 1 1-17.622 0 8.811 8.811 0 1 1 17.622 0zM39.324 16.266H37.97a.678.678 0 1 1 0-1.356h1.355a.678.678 0 1 1 0 1.356zM25.09 4.743a.678.678 0 0 1-.678-.677V2.71a.678.678 0 0 1 1.356 0v1.356a.678.678 0 0 1-.678.677zM34.58 8.133a.677.677 0 0 1-.48-1.157l1.356-1.356a.677.677 0 1 1 .959.959l-1.356 1.355a.677.677 0 0 1-.48.199z"/><path fill="#A3D4F7" d="M30.768 32.533a7.045 7.045 0 1 0 0-14.083c-.478 0-.955.047-1.424.14a5.86 5.86 0 0 0-5.772-4.62c-.849 0-1.688.18-2.46.531A7.875 7.875 0 0 0 5.9 17.17c.001.877.157 1.747.459 2.57a6.397 6.397 0 1 0 .194 12.793"/><path fill="#60A2D7" d="M27.801 35.245a2.711 2.711 0 1 1-5.422 0c0-2.034 2.711-6.778 2.711-6.778s2.711 4.744 2.711 6.778zM21.022 28.466a2.711 2.711 0 1 1-5.422 0c0-2.033 2.71-6.777 2.71-6.777s2.712 4.744 2.712 6.777zM14.922 36.6a2.711 2.711 0 1 1-5.422 0c0-2.033 2.711-6.778 2.711-6.778s2.711 4.745 2.711 6.778z"/></g><defs><clipPath id="clip0_12553_17669"><path fill="#fff" d="M0 0h40v40H0z" transform="translate(0 .667)"/></clipPath></defs></svg>
    )
  },
  {
    title: 'Currency',
    value: 'Georgian Lari (GEL)',
    bgColor: '#D9FDCB',
    circleColor: '#E8FEE0',
    textColor:'#006363',
    icon: (
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45"><path fill="#179C5F" d="M39.24 37.52H4.758a2.682 2.682 0 0 1-2.683-2.683V16.224c0-1.482 1.201-2.683 2.683-2.683H39.24c1.481 0 2.682 1.201 2.682 2.683v18.613c0 1.481-1.2 2.682-2.682 2.682z"/><path fill="#34BA5D" d="M39.24 35.51H4.758a2.682 2.682 0 0 1-2.683-2.682V14.215c0-1.481 1.201-2.682 2.683-2.682H39.24c1.481 0 2.682 1.2 2.682 2.682v18.613c0 1.481-1.2 2.682-2.682 2.682z"/><path fill="#179C5F" d="M39.24 33.502H4.758a2.682 2.682 0 0 1-2.683-2.682V12.207c0-1.482 1.201-2.683 2.683-2.683H39.24c1.481 0 2.682 1.201 2.682 2.683V30.82c0 1.481-1.2 2.682-2.682 2.682z"/><path fill="#46CC6B" d="M39.24 31.493H4.758a2.682 2.682 0 0 1-2.683-2.683V10.198c0-1.482 1.201-2.683 2.683-2.683H39.24c1.481 0 2.682 1.201 2.682 2.683V28.81c0 1.482-1.2 2.683-2.682 2.683z"/><path fill="#34BA5D" d="M7.661 31.49H4.756a2.68 2.68 0 0 1-2.682-2.681V10.195a2.686 2.686 0 0 1 2.682-2.682H7.66a2.686 2.686 0 0 0-2.681 2.682v18.613A2.68 2.68 0 0 0 7.66 31.49z"/><path fill="#fff" d="M39.004 14.46v10.086a4.355 4.355 0 0 0-4.362 4.362H9.349a4.353 4.353 0 0 0-4.353-4.362V14.46a4.351 4.351 0 0 0 4.353-4.353h25.293a4.353 4.353 0 0 0 4.362 4.353z" opacity=".2"/><path fill="#46CC6B" d="M9.54 20.722a1.638 1.638 0 1 0 0-3.276 1.638 1.638 0 0 0 0 3.276zM34.458 20.722a1.638 1.638 0 1 0 0-3.276 1.638 1.638 0 0 0 0 3.276zM22.02 26.972a7.544 7.544 0 1 0 0-15.088 7.544 7.544 0 0 0 0 15.088z"/><path fill="#fff" d="M23.193 15.969c.203.282.326.565.4.872.005.024.065.05.1.05.311.004.623.002.935.002.216 0 .277.06.278.273 0 .185.002.37 0 .554-.003.174-.072.241-.248.242h-.946c-.054 0-.093.002-.107.072-.19.994-.804 1.618-1.737 1.946-.263.093-.542.143-.82.213.007.01.019.032.035.05.992 1.075 1.922 2.203 2.848 3.334.03.036.062.074.076.117.043.124-.058.258-.2.26-.416.003-.832 0-1.248.001-.085 0-.141-.044-.194-.106-.797-.93-1.592-1.86-2.393-2.786-.243-.282-.5-.552-.753-.825a.292.292 0 0 1-.086-.215c.003-.245 0-.49.001-.735 0-.176.075-.247.254-.248.299-.002.597.005.896-.006.419-.015.827-.088 1.197-.302a1.23 1.23 0 0 0 .586-.724c.002-.01 0-.02 0-.046H19.415c-.224 0-.28-.056-.28-.277-.001-.181-.002-.363 0-.544 0-.182.065-.247.25-.248H21.998c-.062-.087-.102-.156-.153-.214-.243-.278-.566-.412-.918-.453-.362-.042-.728-.042-1.093-.056-.147-.006-.295 0-.443-.001-.186-.001-.257-.071-.258-.254v-.755c0-.197.061-.259.258-.259H24.635c.195 0 .257.064.257.261v.554c0 .187-.066.252-.256.252h-1.443z"/></svg>
    )
  },
  {
    title: 'India ✈️ Georgia',
    value: '3240Km ~ 4 to 6 Hours',
    bgColor: '#ECE7FF',
    circleColor: '#F4F1FF',
    textColor:'#5C30FF',
    icon: (
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 41"><path fill="#64B5F6" d="M37.502 20.333c.003.682-.039 1.362-.125 2.038a17.5 17.5 0 0 1-14.625 15.237c-.909.151-1.829.227-2.75.225h-.938l-.812-.062-.55-.063-.75-.125a14.894 14.894 0 0 1-1.825-.425A17.5 17.5 0 0 1 2.502 20.333c-.002-1.086.098-2.17.3-3.237A17.5 17.5 0 0 1 15.127 3.533c.599-.18 1.208-.321 1.825-.425l.75-.125c.5-.062 1.012-.112 1.525-.137h.775c.939-.003 1.875.076 2.8.237.702.103 1.396.257 2.075.463a17.5 17.5 0 0 1 12.5 14.412c.098.788.14 1.582.125 2.375z"/><path fill="#fff" d="M37.502 20.333a17.5 17.5 0 0 1-12.625 16.8c-.35.1-.7.2-1.05.275l-.275.063c-.3.062-.587.112-.887.15H22.239c-.325 0-.65.075-.987.1-.337.025-.825 0-1.25 0a2.01 2.01 0 0 0 .6-.1c.21-.07.408-.171.587-.3a16.996 16.996 0 0 0 4.438-1.625 17.5 17.5 0 0 0 0-30.925 17.114 17.114 0 0 0-4.375-1.538c-.19-.12-.39-.22-.6-.3a2.088 2.088 0 0 0-.65-.1h1.25l.925.088.887.125h.076l.837.162c.288.063.563.138.85.225a17.5 17.5 0 0 1 12.675 16.9z" opacity=".2"/><path fill="#000" d="M16.253 36.658c.221.316.463.617.725.9a14.898 14.898 0 0 1-1.825-.425 17.5 17.5 0 0 1 0-33.6c.598-.18 1.208-.321 1.825-.425-.26.277-.498.574-.713.888-.655.25-1.294.543-1.912.875a17.5 17.5 0 0 0 0 30.925c.613.33 1.248.619 1.9.862z" opacity=".1"/><path fill="#000" d="M19.377 37.733c.202.063.413.096.625.1h-1.25c-.2 0-.713 0-1.05-.1l-.75-.125a8.727 8.727 0 0 1-.725-.9 15.89 15.89 0 0 0 2.5.763c.19.128.396.233.612.312l.038-.05z" opacity=".1"/><path fill="#FFB74D" d="M29.515 21.583a1.25 1.25 0 0 0-1.1-.2l-3.413.975-3.412-.938a1.25 1.25 0 0 0-1.1.2 1.248 1.248 0 0 0-.488 1v3.963c0 .663.375 1.525 2.15 1.925.939.183 1.894.27 2.85.262 3.363 0 5-.712 5-2.187v-3.962a1.25 1.25 0 0 0-.487-1.038z"/><path fill="#1565C0" d="M32.84 20.333l-7.5-2.075a1.25 1.25 0 0 0-.674 0l-7.5 2.075a1.251 1.251 0 0 0 0 2.4l7.5 2.075c.22.067.455.067.675 0l7.5-2.075a1.25 1.25 0 0 0 0-2.4z"/><path fill="#1565C0" d="M32.502 25.333a1.25 1.25 0 0 1-1.25-1.25v-2.5a1.25 1.25 0 1 1 2.5 0v2.5a1.25 1.25 0 0 1-1.25 1.25z"/><path fill="#fff" d="M25.777 31.77a17.976 17.976 0 0 1-3.025 5.838c-.909.151-1.829.227-2.75.225h-1.75l-.55-.062-.75-.125a8.738 8.738 0 0 1-.725-.9 23.273 23.273 0 0 1-3.188-9.4 41.706 41.706 0 0 1-.337-2.588 53.602 53.602 0 0 1-.2-4.425c0-1.45.075-3.05.225-4.55.088-.862.2-1.725.338-2.5a23.16 23.16 0 0 1 3.187-9.287c.214-.314.452-.61.713-.888l.75-.125c.5-.062 1.012-.112 1.524-.137h.763c.938-.003 1.875.076 2.8.237a19.177 19.177 0 0 1 3.325 6.888 1.25 1.25 0 1 1-2.375.725c-1.462-4.813-3.075-6.613-3.75-6.613-1.438 0-3.362 3.463-4.35 8.875-.15.788-.275 1.638-.375 2.5a42.466 42.466 0 0 0-.275 4.875 40.301 40.301 0 0 0 .262 4.725c.1.888.226 1.75.376 2.5.974 5.513 2.924 9.025 4.362 9.025.488 0 1.825-1.187 3.413-5.65a1.253 1.253 0 1 1 2.362.838zm11.725-11.437c.003.682-.04 1.362-.125 2.038a11.55 11.55 0 0 0-4.175-4.663 1.251 1.251 0 1 1 1.1-2.25 10.964 10.964 0 0 1 3.038 2.5c.11.787.164 1.58.162 2.375z"/><path fill="#fff" d="M23.752 14.083a1.25 1.25 0 0 1-1.25 1.25h-3.75c-1.25 0-2.387 0-3.475.137-1.087.138-1.75.188-2.5.313-5.713.9-9.025 2.963-9.025 4.55 0 1.25 3.325 3.3 8.95 4.338.813.15 1.662.287 2.563.387l1.337.137a1.251 1.251 0 0 1-.1 2.5h-.112c-.25 0-.5 0-.75-.075-.863-.075-1.738-.2-2.6-.35-4.288-.687-8.213-2.05-10.288-3.962a17.913 17.913 0 0 1-.25-2.975c-.002-1.086.098-2.17.3-3.237 2.062-1.95 5.95-3.263 10.263-3.863a29.24 29.24 0 0 1 2.587-.275c.875-.05 2.063-.125 3.1-.125h3.75a1.25 1.25 0 0 1 1.25 1.25zM26.252 15.333a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM30.002 16.583a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"/></svg>
    )
  }
];  

const services = [
  {
    icon: <svg className="w-8 h-8 md:w-16 md:h-16"  viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 60C25 51.7 31.7 45 40 45C41.5 45 43 45.2 44.4 45.7C47.3 38.3 54.5 33 63 33C73.5 33 82 41.5 82 52C82 52.7 82 53.3 81.9 54C88.2 55.1 93 60.5 93 67C93 74.7 86.7 81 79 81H35C29.5 81 25 76.5 25 71C25 67.4 26.9 64.3 29.8 62.5" fill="#BCCCDC"/>
    <path d="M15 75H45M10 65H35M18 85H30" stroke="#8E9AAF" stroke-width="4" stroke-linecap="round"/>
  </svg>
  ,
    text: "Autumn (Sep–Nov)",
    label: "Mild & cool weather, very scenic. Light jackets suffice.",
  },
  {
    icon: <svg className="w-8 h-8 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 55C20 46.7 26.7 40 35 40C36.5 40 38 40.2 39.4 40.7C42.3 33.3 49.5 28 58 28C68.5 28 77 36.5 77 47C77 47.7 77 48.3 76.9 49C83.2 50.1 88 55.5 88 62C88 69.7 81.7 76 74 76H30C24.5 76 20 71.5 20 66C20 62.4 21.9 59.3 24.8 57.5" fill="#E3F2FD"/>
    <circle cx="35" cy="85" r="3" fill="#A5D8FF"/>
    <circle cx="55" cy="88" r="3" fill="#A5D8FF"/>
    <circle cx="75" cy="85" r="3" fill="#A5D8FF"/>
    <path d="M55 80V96M47 88H63" stroke="#A5D8FF" stroke-width="2" stroke-linecap="round"/>
  </svg>,
    text: "Winter (Dec–Feb)",
    label: "Cold winters (0°C to -5°C). Heavy winter clothing essential.",
  },
  {
    icon: <svg className="w-8 h-8 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="65" cy="35" r="18" fill="#FFD600"/>
    <path d="M65 10V15M65 55V60M90 35H85M45 35H40M82.6 17.4L79 21M51 49L47.4 52.6M82.6 52.6L79 49M51 21L47.4 17.4" stroke="#FFD600" stroke-width="4" stroke-linecap="round"/>
    <path d="M20 65C20 56.7 26.7 50 35 50C36.5 50 38 50.2 39.4 50.7C42.3 43.3 49.5 38 58 38C68.5 38 77 46.5 77 57C77 57.7 77 58.3 76.9 59C83.2 60.1 88 65.5 88 72C88 79.7 81.7 86 74 86H30C24.5 86 20 81.5 20 76C20 72.4 21.9 69.3 24.8 67.5" fill="#A5D8FF"/>
    <path d="M35 75Q35 82 32 82Q29 82 29 75Q29 70 32 65Q35 70 35 75Z" fill="#4A90E2"/>
    <path d="M52 78Q52 85 49 85Q46 85 46 78Q46 73 49 68Q52 73 52 78Z" fill="#4A90E2"/>
  </svg>,
    text: "Spring (Mar–May)",
    label: "Pleasant weather (10°C–20°C), blooming flowers. Rain showers common.",
  },
  {
    icon: <svg className="w-8 h-8 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="22" fill="#FFD600"/>
    <g stroke="#FFD600" stroke-width="6" stroke-linecap="round">
      <line x1="50" y1="12" x2="50" y2="22"/>
      <line x1="50" y1="78" x2="50" y2="88"/>
      <line x1="88" y1="50" x2="78" y2="50"/>
      <line x1="22" y1="50" x2="12" y2="50"/>
      <line x1="76.8" y1="23.2" x2="69.8" y2="30.2"/>
      <line x1="30.2" y1="69.8" x2="23.2" y2="76.8"/>
      <line x1="76.8" y1="76.8" x2="69.8" y2="69.8"/>
      <line x1="30.2" y1="30.2" x2="23.2" y2="23.2"/>
    </g>
  </svg>,
    text: "Summer (Jun–Aug)",
    label: "Warm but moderate. Temperatures can reach 30–35°C.",
  },
];


const NewPage = () => {
    return(
      <>
      <Head>
  <title>Study MBBS in Georgia, Top Medical Universities in Georgia | Edurizon</title>

  <meta
    name="keyword"
    content="mbbs in georgia, study mbbs in georgia, mbbs in georgia for indian students, top medical universities in georgia, mbbs abroad in georgia, georgia medical universities, low cost mbbs in georgia, english medium mbbs in georgia"
  />

  <meta
    name="description"
    content="Study MBBS in Georgia for Indian students at top medical universities in Georgia which offer quality education, English medium & low fees."
  />

  <meta name="author" content="edurizon" />
  <meta name="robots" content="index, follow" />
  <meta name="DC.title" content="MBBS In Georgia" />

  <meta name="geo.region" content="IN-DL" />
  <meta name="geo.placename" content="Dwarka" />
  <meta name="geo.position" content="22.351115;78.667743" />
  <meta name="ICBM" content="22.351115, 78.667743" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Study MBBS in Georgia | Top Medical Universities & Fees"
  />
  <meta
    property="og:description"
    content="Study MBBS in Georgia for Indian students at top medical universities offering English-medium education, quality training & affordable fees."
  />
  <meta
    property="og:url"
    content="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia"
  />
  <meta
    property="og:image"
    content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@edurizon" />
  <meta
    name="twitter:title"
    content="Study MBBS in Georgia | Top Medical Universities"
  />
  <meta
    name="twitter:description"
    content="Study MBBS in Georgia for Indian students at top medical universities with English-medium courses and low fees."
  />
  <meta
    name="twitter:image"
    content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"
  />
  <meta name="twitter:image:alt" content="MBBS In Georgia" />


  <link
    rel="alternate"
    href="https://www.edurizon.in/study-destinations/study-mbbs-in-georgia"
    hrefLang="en-in"
  />

  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9JDZZKPGL8"></script>
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

      <div className="text-smallTextPhone md:text-smallText pt-[15vw] md:pt-[4vw]">
          

            {/* Header Part */}
            <Header subTitle={headerData.subTitle} id={headerData.id} title1={headerData.title1} title2={headerData.title2} description={headerData.description} description2={headerData.description2} 
            section={
              <div className="flex flex-col md:flex-row gap-4 w-full my-[2vw] md:my-[2vw]">
      {/* City Image - Left side */}
      <div className="lg:w-1/3 rounded-3xl overflow-hidden h-[400px] lg:h-auto">
        <Image
          height={1024}
          width={1024}
          src="/assets/Images/mbbs-in-georgia/mbbs-in-georgia-top.jpg"
          alt="Tbilisi cityscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cards Grid - Right side */}
      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`rounded-3xl p-6 relative overflow-hidden ${
              index === 4 || index===5 ? 'md:col-span-1 xl:col-span-2' : ''
            }`}
            style={{ backgroundColor: card.bgColor }}
          >
            {/* Semi-circle decoration */}
            <div 
              className="absolute top-0 -left-[70vw] md:-left-28 w-full h-full rounded-full"
              style={{ backgroundColor: card.circleColor }}
            ></div>
            
            {/* Icon */}
            <div className="relative z-10 mb-4 text-gray-700">
              {card.icon}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className={`font-bold  mb-2 text-regularTextPhone md:text-mediumText`} style={{ color: card.textColor }}>
                {card.title}
              </h3>
              <p className="text-gray-700 font-semibold text-smallTextPhone md:text-regularText">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
            } />
            <div className="max-w-7xl mx-auto px-4 py-12">
    

    {/* Main Layout - Image and Cards in Row */}
    
  </div>
            {/* Description Part */}
            {/* <DescriptionComponent id={descriptionData.id} title1normal={descriptionData.title1normal}  
            content1={descriptionData.content} imageAlt={descriptionData.imageAlt} imageSrc={descriptionData.imageURL} /> */}
            {/* Academic Calander */}
            <div className="text-regularTextPhone md:text-mediumText leading-[150%] mb-[2vw]  bg-linenChosen py-[4vw]">
                <div className="mx-[6vw] md:mx-[12.5vw] text-justify">
      
                <h3 className="text-h5TextPhone md:text-h2Text font-bold  leading-[120%] ">Why Edurizon for MBBS in Georgia?</h3>
                <ul className="pt-[2vw] md:pt-[.5vw] list-outside  list-disc">
                    <li className="ml-[2vw] md:ml-[1.5vw]"><strong className="">Established Experience: </strong>Providing expert student counselling since 2009 and successfully sending students abroad since 2013.</li>
                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>End-to-End Support: </strong>
                      Complete guidance at every stage — from free career counselling, course selection, and university shortlisting to admissions, visa processing, and pre-departure support.
                    </li>

                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>Scholarships Assistance: </strong>
                      Dedicated support for Erasmus+ scholarships and other international funding opportunities.
                    </li>

                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>Career-Focused Guidance: </strong>
                      Strong focus on post-graduation career pathways, licensing guidance, and return-to-India practice support.
                    </li>

                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>Proven Success Record: </strong>
                      300+ students graduated from Georgia and are successfully practicing in India, reflecting our trusted guidance and outcomes.
                    </li>

                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>Global University Network: </strong>
                      Partnerships with reputed universities across multiple countries, offering programs in MBBS, Engineering, MBA, and more.
                    </li>

                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>Personalized Counselling: </strong>
                      One-to-one counselling tailored to each student’s academic profile, budget, and career goals.
                    </li>

                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>Transparent Process: </strong>
                      Honest advice and clear documentation, ensuring peace of mind for students and parents.
                    </li>

                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>Experienced Team: </strong>
                      A knowledgeable and dedicated team with in-depth understanding of international education systems.
                    </li>

                    <li className="ml-[2vw] md:ml-[1.5vw]">
                      <strong>Student-First Approach: </strong>
                      Long-term support even after enrolment, ensuring a smooth academic and personal transition abroad.
                    </li>

                </ul>
                </div>
            </div>

            {/* Reasons to Study */}
            {<ReasonsToStudy id={reasonToStudyData.id} title1={reasonToStudyData.title}  content={reasonToStudyData.content} darkImg={reasonToStudyData.darkImg} lightImg={reasonToStudyData.lightImg} />}

            {/* Academic Calander */}
            <div className="text-smallTextPhone md:text-regularText leading-[150%] mb-[2vw]  ">
                <ListedTable  id={academicData.id} section2={academicData.section2} content={academicData.content}/>
                <div className="mx-[6vw] md:mx-[12.5vw]">
                <h3 className="text-h5TextPhone md:text-h3Text font-bold italic leading-[120%]">Course Duration - MBBS in Georgia</h3>
                <p className="pt-[2vw] md:pt-[.5vw] pb-[2vw] md:pb-[2vw]">6 years with 1 year compulsory clinic internship</p>
                {/* <h3 className="text-h5TextPhone md:text-h3Text font-bold italic leading-[120%]">Academic intakes for MBBS in Georgia</h3>
                <ul className="pt-[2vw] md:pt-[.5vw] list-outside  list-disc">6 years with 1 year compulsory clinic internship
                    <li className="ml-[2vw] md:ml-[1.5vw]">September-October</li>
                    <li className="ml-[2vw] md:ml-[1.5vw]">February-March</li>
                </ul> */}
                </div>
            </div>

            {/* Indian Opportunities */}
            {/* <div className="md:m-[4vw] flex flex-col gap-[4vw] md:gap-[2vw] mx-[6vw] md:mx-[12.5vw]">
                <h2 className="text-h4TextPhone md:text-h2Text font-bold text-center leading-[120%]">International Opportunities</h2>
                <div className="text-regularTextPhone md:text-mediumText leading-[150%] flex flex-col gap-[2vw] md:gap-[1.5vw] "> 
                    <h3 className="text-h5TextPhone and md:text-h3Text font-bold leading-[120%]">Erasmus+ and Student Exchange:</h3>
                    <p >One of the advantages of studying in Georgia to have the opportunity to participate in exchange programs and collaborations like Erasmus</p>
                    <p ><strong >Erasmus+ Program:</strong> Georgia is a partner country in the European Union’s Erasmus+ program, which means Georgian universities can partake in student exchange with other European universities. As an MBBS student in Georgia, student could apply for a semester abroad in another country (like Germany, Italy, Poland, etc.) under Erasmus funding.</p>
                    <p ><strong >How to avail opportunities:</strong> The opportunities as mentioned above and others offered by the universities from time to time are usually applicable to only those students who perform well in their academics.</p>
                </div>
                <Image src={"/assets/Images/mbbs-in-georgia/Georgia2.png"} className="w-full h-auto mt-[2vw]" width={1420} height={690  } alt="georgia3"/>
            </div> */}

             {/* Top Government Universities */}
             <UnlistedTableEqualWidth  id={governmentUnivesitiesData.id} section2={governmentUnivesitiesData.section2} content={governmentUnivesitiesData.content}/>
            
            {/* Top Private Universities */}
            <UnlistedTableEqualWidth  id={privateUniversitiesData.id} section2={privateUniversitiesData.section2} content={privateUniversitiesData.content}/>

            {/* Top 5 NMC - Approved  */}

            {/* <div className="text-smallTextPhone md:text-regularText leading-[150%] my-[8vw] md:my-[4vw] flex flex-col gap-[3vw] md:gap-[1.5vw] mx-[6vw] md:mx-[12.5vw]">
                <h2 className="text-h4TextPhone md:text-h2Text font-bold leading-[120%] text-center">Top 5 NMC-Approved Medical<br/>Universities in Georgia</h2>
                <p className="md:text-center md:mx-[9vw]">When it comes to choosing the best university in Georgia for mbbs, Indian students have several options. Edurizon has identified five top Georgia MBBS university that highly excel in quality & recognition.</p>
                <ul className="grid grid-cols-1 md:grid-cols-5 gap-[1.5vw] font-bold pl-[3vw] md:pl-[1.5vw] list-decimal">
                    <li>Tbilisi State Medical University</li>
                    <li>David Tvildiani Medical University</li>
                    <li>East European University (EEU)</li>
                    <li>New Vision University</li>
                    <li>Batumi Shota Rustaveli State University</li>
                </ul>
           </div> */}

           {/* Geogia Fees */}
           <section className="mx-[6vw] md:mx-[12.5vw] pb-[6vw] md:pb-[2vw] flex flex-col gap-[4vw] md:gap-[1vw]">
           <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]">Fees for MBBS in Georgia</h3>
           <p className="text-center text-smallTextPhone md:text-regularText opacity-80 ">One of the biggest attractions of Georgia is the affordable cost of MBBS in Georgia. The MBBS in Georgia fee structure is designed to be affordable & reasonable for international students. Georgia is known for its high-quality medical education and globally accepted degrees offered by reputed institutions. Top Medical Universities in Georgia provide English-medium MBBS programs, modern infrastructure, and excellent clinical exposure, attracting students from India and other countries.</p>
           <table className="w-full border-collapse border  mb-[4vw] md:mb-[2vw] border-black dark:border-borderGreyChosen ">
                <thead className="text-smallTextPhone md:text-regularText text-center font-bold align-top bg-linenChosen">
                    <tr>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Name of University</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Location</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]"> Fees in USD/Year</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Hostel and Food Fees in USD/Year</td>
                    <td className="border  dark:text-black dark:border-b-black dark:border-r-black border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">Know More</td>
                    </tr>
                </thead>
            <tbody className="text-smallTextPhone md:text-regularText align-top"> 

                {universities.map((college, index) => (
          <tr key={college.id}>
            
            <td className="border font-bold underline dark:text-black dark:border-b-black dark:border-r-black bg-linenChosen border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw]">
              {college.href ? <TransitionLink href={college.href}>
                <p className="dark:text-black dark:hover:text-orange-400 duration-300 transition-colors ease-in-out">
                {college.name}</p>
              </TransitionLink>:
              <>{college.name}</>
              }
              
            </td>
            <td className="border dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.location}
            </td>
            <td className="border dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.feesInUSD}
            </td>
            <td className="border dark:text-white  border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.hostelFeesInUSD}
            </td>
            <td className="border dark:text-white whitespace-nowrap  border-black dark:border-white px-[.75vw] py-[.625vw]">
              {college.href && <TransitionLink href={college.href}>
                Know More
              </TransitionLink>}
            </td>
            
          </tr>
        ))}
              
            </tbody>
          </table>
          </section>


           
           <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
           {/* Authorization Slider */}
           <AuthorizationSlider 
              images={[
                '/assets/Images/authorization/georgia/Georgia1.jpg',
                '/assets/Images/authorization/georgia/Georgia2.jpg',
                '/assets/Images/authorization/georgia/Georgia3.jpeg',
                '/assets/Images/authorization/georgia/Georgia4.jpeg',
              ]}
            />

           {/* <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[2vw]">
              <h3 className="text-h5TextPhone leading-[120%] pb-[2vw] md:pb-[1vw]   md:text-h3Text text-center">Image Gallery</h3>

              <div className='relative md:flex gap-[4vw] md:gap-[1vw] justify-center'>
                <div>
                <Image src={"/assets/Images/mbbs-in-georgia/seu1.jpg"} className='w-full md:w-[30vw] h-auto pb-[1vw] md:pb-[.5vw]' width={1080} height={1080} alt='isbu1'/>
                <span className="list-disc text-smallTextPhone md:text-smallText"><li>With Vice Dean of SEU</li></span>
                </div>
                <div>
                <Image src={"/assets/Images/mbbs-in-georgia/isbu1.jpg"} className='w-full md:w-[30vw] h-auto pb-[1vw] md:pb-[.5vw]' width={1080} height={1080} alt='isbu1'/>
                <span className="list-disc text-smallTextPhone md:text-smallText"><li>With Nino ma’am head of International Department IBSU</li></span>
                </div>
                <div>
                <Image src={"/assets/Images/mbbs-in-georgia/eeu1.jpg"} className='w-full md:w-[30vw] h-auto pb-[1vw] md:pb-[.5vw]' width={1080} height={1080} alt='isbu1'/>
                <span className="list-disc text-smallTextPhone md:text-smallText"><li>With Dean of East European University</li></span>
                </div>
              </div>
            </section> */}

            {/* Climate and Weather */}
           <div className="text-smallTextPhone md:text-regularText leading-[150%] my-[4vw] md:my-[2vw] py-[4vw] md:py-[2vw] flex flex-col gap-[3vw] md:gap-[1.5vw] px-[6vw] md:px-[12.5vw]">
                <h3 className="text-h5TextPhone and md:text-h3Text font-bold leading-[120%]  text-center">Climate and Weather</h3>
                <p className="text-center">Georgia’s climate is moderate and pleasant. There are four distinct seasons:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.25vw] md:gap-[.75vw] items-center justify-center">
                            {services.map((item, index) => (
                                <div key={index} className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
                                    rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] 
                                    md:py-[1.5vw] px-[3.875vw] md:px-[1vw] box-border gap-[.5vw] text-center text-regularText text-black">
                                    {/* <Image src={item.icon}
                                        alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative overflow-hidden shrink-0" /> */}
                                    <div>
                                      {item.icon}
                                      </div>
                                    <p className="text-tinyTextPhone md:text-smallText text-center leading-[150%] font-bold" > {item.text} <br /><span className="font-semibold text-justify"> {item.label}</span></p>
                                </div>
                            ))}
                        </div>
           </div>

           {/* Career Opportunity after mbbs */}
           <div className="text-smallTextPhone md:text-regularText leading-[150%] py-[8vw] bg-linenChosen px-[6vw] md:px-[16.5vw] md:py-[4vw] flex flex-col gap-[3vw] md:gap-[1.5vw] ">
                <h3 className="text-h5TextPhone and md:text-h3Text font-bold leading-[120%] mb-[1vw]">Career Opportunities After MBBS</h3>
                <div className="flex flex-col md:flex-row justify-center gap-[2vw] md:gap-[1.5vw]">
                    <div className="md:w-1/2 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">i.</div>
                        <div className="flex flex-col"><p className="font-bold">India</p><p>Graduates must clear FMGE or NExT (as per upcoming regulations) to practice in India. They can even opt for postgraduate studies (PG courses) or work in private hospitals.</p></div>
                    </div>
                    <div className="md:w-1/2 flex flex-row  gap-[.5vw]">
                        <div className="font-bold">ii.</div>
                        <div className="flex flex-col"><p className="font-bold">Overseas</p><p>The students may pursue residency courses in the US, UK, Canada or Europe through passing exams such as USMLE, PLAB or AMC. </p></div>
                    </div>
                </div>
           </div>

            {/* Scams and Admission Fraud Awarness */}
            {/* <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row gap-[4vw] md:gap-[1vw] px-[6vw] md:px-[12.5vw] items-center dark:text-black bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1.5vw] ">
                <h3 className="font-bold text-h5TextPhone md:text-h3Text  leading-[120%]">Scams & Admission Fraud Awarness</h3>
                <div>
                <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw]">
                    <li><strong>Identifying Fraud Agents:</strong> Be aware and cautious of the agents who gives you a guarantee for admission without having NEET qualification.</li>
                    <li>Under such circumstances always check an agent's credentials first.</li>
                    <li><strong>How to avoid fraudsters:</strong>
                        <ul className="list-disc pl-[2vw] md:pl-[1.5vw]">
                            <li>Verify the university's official website</li>
                            <li>Never pay high sums in cash or to personal bank accounts.</li>
                            <li>Be aware of counterfeit admission letters and forged documents.</li>
                            <li>Consult verified education consultants.</li>
                            <li>Check the testimonials.</li>
                        </ul>
                    </li>
                </ul>
                <p className="text-smallTextPhone md:text-regularText ">
                    We believe that through a thorough analysis, students can make a well-informed decision to pursue MBBS in Georgia and therefore can have a successful career in medicine.
                </p>
                </div>
                </div>  
                <Image src={"/assets/Images/mbbs-in-georgia/Georgia3.png"} className="min-w-[35vw] h-auto" width={690} height={690  } alt="georgia3"/>
            </div> */}

            

            {/* Post Arrival */}
            <PostArrival/>
            
            {/* Free MBBS Guidance & Support */}
            <div className=" my-[8vw] md:my-[0vw] flex flex-col gap-[4vw] md:gap-[2vw] mx-[6vw] md:mx-[12.5vw]">
                <h3 className="font-bold text-h5TextPhone md:text-h3Text md:text-center leading-[120%] text-orangeChosen">Free MBBS Guidance & Support</h3>
                <p className="text-smallTextPhone md:text-regularText leading-[150%]">
                From the moment you sign up with Edurizon, our services – counseling, application help, visa processing, pre-departure briefing – are designed. We aim to be your trusted partner in this life-changing journey, ensuring you make informed decisions at every step.<br/>
                Your ambition to become a doctor should not be limited by cut-throat competition or exorbitant fees. Georgia offers you a golden opportunity to pursue your MBBS in a world-class setting at an affordable cost. Thousands of Indian students have graduated from Georgia medical colleges and are now successful doctors across the world. You can join this proud list.<br/><br/>
                <strong>Over a period of time, we have sent hundreds of students for MBBS in Georgia (since 2013), out of which 300 students have already cleared FMGE & practicing in India successfully.</strong>
                </p>
            </div>

            {/* Get in Touch */}
            <div className="md:m-[4vw] my-[8vw] flex flex-col gap-[2vw] md:gap-[1vw] mx-[6vw] md:mx-[12.5vw] py-[2vw]">
                <h3 className="text-h5TextPhone md:text-h3Text md:text-center font-bold text-orangeChosen leading-[120%]">Get in Touch with Edurizon Today!</h3>
                <p className="text-smallTextPhone text-left md:w-[60vw] md:mx-auto md:text-center md:text-regularText leading-[150%]">
                Kickstart your MBBS abroad adventure. Contact Edurizon for MBBS admission assistance and take the first step towards wearing that coveted white coat. Your dream of becoming a globally qualified doctor is just an application away – let’s make it happen together!
                </p>
            </div>
        </div>
      </>
        
    )
}

export default NewPage;
