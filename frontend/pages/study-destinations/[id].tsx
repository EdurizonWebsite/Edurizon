import { GetServerSideProps } from "next";
import Head from "next/head";
interface NewPageProps {
  id: string;
  countryData:  { 
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    metaCanonical: string;
    countryName: string;
    countryDescription:string;
    countryTitle1:string;
    countryTitle2:string;
    countryWhyChoseSection:{
      title1normal:string;
      title1orange:string;
      title2:string;
      para:string;
      Description1:string[];
      Description2:string[];
      ImageSrc:string;
      ImageAlt:string;
    }
    countrySpecificSection1:boolean;
    countrySpecificSection2:boolean;
    countryCostData:{[key:string]:string};
    countrySpecificSection3:{data:string};
    para:string;
    countryUniversities:{
      universityName:string;
      location:string;
      annualFees:string;
      gloablRanking:string;
      highlights:string[];
      href:string;
    }[];
    admissionProcess:{
      title:string;
    }
    countryFeeStructure:{title:string;
        subTitle:string;
        description?:string;
        data:string[][];
        href:string;};
    countryEligibilityStructure:string[][][];
    keyHighlightsSection:{title:string;
        subTitle:string;
        data:string[][];};
    whyChoseUniversity:{title:string;content:string[][];imageURL:string};
    countryReasonsToStudySection:{[key:string]:string}[];
    russiaReasonsToStudySection:{[key:string]:string}[];
    scholarshipSection:{
        title:string;
        content:{[key:string]:string}[];
    },
    countryAdditionalCost:{title:string;
        subTitle:string;
        data:string[][];};
    videoData:{id:number;title:string;channel:string;views:string;time:string;duration:string;thumbnail:string;link:string}[]

   };
} 

const metaData={
  "study-mbbs-in-russia":<Head>
    <title>MBBS in Russia for Indian Students, Cost of MBBS in Russia | Edurizon</title> 
<meta name="keyword" content="mbbs in russia, mbbs in russia low cost, mbbs in russia for indian student, cost of mbbs in russia, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
<meta name="description" content="We offer affordable education for MBBS in Russia for Indian Students with low cost of MBBS in Russia and transparent MBBS Fees." />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
<meta name="DC.title" content="MBBS In Russia" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Dwarka" />
<meta name="geo.position" content="22.351115;78.667743" />
<meta name="ICBM" content="22.351115, 78.667743" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="Study MBBS in Russia | Top Medical Universities & Fees for 2025"/>
<meta property="og:description" content="Pursue MBBS in Russia at top-ranked medical universities. Affordable fees, English-medium courses, and best options for Indian students."/>
<meta property="og:url" content="https://www.edurizon.in/"/>
<meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:site" content="@edurizon"/>
<meta name="twitter:title" content="Study MBBS in Russia | Top Medical Universities & Fees for 2025"/>
<meta name="twitter:description" content="Pursue MBBS in Russia at top-ranked medical universities. Affordable fees, English-medium courses, and best options for Indian students."/>
<meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:image:alt" content="MBBS In Russia"/>
<link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-russia" hrefLang="en-in"/>


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



  </Head>,
  "study-mbbs-in-china":<Head>
    <title>Study MBBS in China, Top10 Medical Universities in China | Edurizon</title>
<meta name="keyword" content="mbbs in china, mbbs in china low cost, mbbs in china for indian student, cost of mbbs in china, MBBS Abroad for Indian Students, jilin university china, jilin university mbbs fees, jilin university for indian students, shandong university china, shandong university mbbs fees, shandong university for indian students, guangzhou medical university, guangzhou medical university mbbs fees, guangzhou medical university for indian students, zhengzhou university china, zhengzhou university mbbs fees, zhengzhou university for indian students." />
<meta name="description" content="Study MBBS in China at Top 10 medical universities or colleges which offer quality education and affordable MBBS fees." />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
  </Head>,
  
}


const NewPage = ({ id,countryData }: NewPageProps) => {
  return (
    <>
      {metaData[id as keyof typeof metaData]}
    <div className="flex flex-col gap-[10vw] md:gap-[4vw] justify-center pt-[15vw]  md:pt-[4vw] ">

      {/* Header Part */}
      <Header id={id} title1={countryData.countryTitle1} title2={countryData.countryTitle2??""} description={countryData.countryDescription} />


      {/* Description Part */}
      <DescriptionComponent id={id} title1normal={countryData.countryWhyChoseSection.title1normal} para={countryData.countryWhyChoseSection.para || ""} title1orange={countryData.countryWhyChoseSection.title1orange} title2={countryData.countryWhyChoseSection.title2} content1={countryData.countryWhyChoseSection.Description1} content2={countryData.countryWhyChoseSection.Description2} imageAlt={countryData.countryWhyChoseSection.ImageAlt} imageSrc={countryData.countryWhyChoseSection.ImageSrc} />

      {/* Country Reasons To Study Destination */}
      {countryData.russiaReasonsToStudySection&& <RussiaReasonsToStudy id={id} title1="Reasons to Study" title2={`MBBS in ${countryData.countryName}` } name={countryData.countryName} content={countryData.russiaReasonsToStudySection} darkImg={["1Dark","2Dark","3Dark","4Dark","5Dark","6Dark"]} lightImg={["1","2","3","4","5","6"]} />}
      {countryData.countryReasonsToStudySection&& <ReasonsToStudy id={id} title1="Reasons to Study" title2={`MBBS in ${countryData.countryName}` } name={countryData.countryName} content={countryData.countryReasonsToStudySection} darkImg={["1Dark","2Dark","3Dark","4Dark","5Dark","6Dark"]} lightImg={["1","2","3","4","5","6"]} />}

      {/* Scholarship Section */}
      {countryData.scholarshipSection && <ScholarshipSection id={id} data={countryData.scholarshipSection} />}

      {/* CSCA Requirement Section (China MBBS) */}
      {id === "study-mbbs-in-china" ? <CSCARequirementSection id={id} /> : null}
      
      {/* Country Cost Data */}
      {countryData.countryCostData && <CostTable id={id} data={countryData.countryCostData} />}
      
      {/* Country Specific Section 2 */}
      {countryData.countrySpecificSection2 && <Section2 id={id}  />}

      {/* Country Specific Section 3 */}
      {countryData.countrySpecificSection3 && <Section3 id={id} data={countryData.countrySpecificSection3.data}/> }
      {id === "study-mbbs-in-russia" && (
        <div className="mx-[6vw] md:mx-[12.5vw] -mt-[4vw] md:-mt-[1vw] mb-[2vw] md:mb-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[3vw] md:gap-[1.25vw] rounded-[3vw] md:rounded-[1vw] border border-orangeChosen/25 bg-linenChosen px-[5vw] md:px-[1.75vw] py-[4vw] md:py-[1.25vw] shadow-[0_8px_28px_rgba(255,117,0,0.12)]">
            <p className="text-smallTextPhone md:text-regularText text-left leading-[170%] text-foreground max-w-[640px]">
              <span className="font-semibold text-orangeChosen">Russia fee guide:</span> compare tuition, hostel, and other charges across low, medium, and higher-fee universities in one ordered page.
            </p>
            <TransitionLink href="/study-destinations/study-mbbs-in-russia/mbbs-university-in-russia-fees">
              <span className="shrink-0 inline-flex items-center justify-center rounded-full bg-orangeChosen px-[5vw] md:px-[1.35vw] py-[2.5vw] md:py-[0.55vw] text-smallTextPhone md:text-smallText font-semibold text-white shadow-md hover:opacity-95 transition-opacity">
                View fee comparison →
              </span>
            </TransitionLink>
          </div>
        </div>
      )}
      {/* Country Universiteis */}
      {countryData.countryUniversities && <Universities id={id} para={countryData.para} data={countryData.countryUniversities} countryName={countryData.countryName} />}


      
      {countryData.keyHighlightsSection && <UnlistedTable section2={"highlight"} content={countryData.keyHighlightsSection} id={id}/>}

      {countryData.whyChoseUniversity && <WhyChoseUniversity id={id} title={countryData.whyChoseUniversity.title} imageURL={countryData.whyChoseUniversity.imageURL} content={countryData.whyChoseUniversity.content}/>}

          

      {/* Country Eligibilty Criteria  */}
      {countryData.countryEligibilityStructure && <EligibilityCriteria id={id} data={countryData.countryEligibilityStructure} countryName={countryData.countryName} />}
      
      {/* Country Fee Structure */}
      {countryData.countryFeeStructure && <UnlistedTable section2={"feeStructure"} id={id} content={countryData.countryFeeStructure} />}

      
      {/* Country Additional Cost */}
      {<AdmissionProcess subHeading={countryData.admissionProcess.title}/>}
     {countryData.countryAdditionalCost && <UnlistedTable section2={"additionalCost"} id={id} content={countryData.countryAdditionalCost} />}
      
      {/* Authorization Slider - Only for Russia */}
      {id === 'study-mbbs-in-russia' && (
        <AuthorizationSlider 
          images={[
            '/assets/Images/authorization/russia/Russia1.jpeg',
            '/assets/Images/authorization/russia/Russia2.jpg',
            '/assets/Images/authorization/russia/Russia3.jpeg',
            '/assets/Images/authorization/russia/Russia4.jpg',
            '/assets/Images/authorization/russia/Russia5.jpg',
            '/assets/Images/authorization/russia/Russia6.jpg',
            '/assets/Images/authorization/russia/Russia7.jpg',
            '/assets/Images/authorization/russia/Russia8.jpg',
            '/assets/Images/authorization/russia/Russia9.jpg',
          ]}
        />
      )}
      
      <PostArrival/>
     {countryData.videoData && <RelatedVideos videoData={countryData.videoData}/>}
    </div>
    </>
  );
};

// RelatedVideos.jsx






import Section2 from "../../components/studyDestinationComponents/section2";
import Section3 from "@/components/studyDestinationComponents/section3";
import EligibilityCriteria from "@/components/studyDestinationComponents/eligibilityCriteriaTable";
import Universities from "@/components/studyDestinationComponents/universitiesTable";
import PostArrival from "@/components/studyDestinationComponents/postArrival";
import Header from "@/components/studyDestinationComponents/headerComponent";
import DescriptionComponent from "@/components/studyDestinationComponents/descriptionCompnent";
import ReasonsToStudy from "../../components/studyDestinationComponents/reasonsToStudy";
import CostTable from "@/components/studyDestinationComponents/costTable";
import WhyChoseUniversity from "@/components/studyDestinationComponents/whyChoseUniversity";
import countryNames  from '@/lib/countryData';
import ScholarshipSection from "@/components/studyDestinationComponents/scholarshipSection";
import CSCARequirementSection from "@/components/studyDestinationComponents/cscaRequirementSection";
import UnlistedTable from "@/components/studyDestinationComponents/unListedTable";
import AdmissionProcess from "@/components/studyDestinationComponents/admissionProcess";
import RelatedVideos from "@/components/videoSlider";
import RussiaReasonsToStudy from "@/components/studyDestinationComponents/russiaReasonsToStudy";
import AuthorizationSlider from "@/components/studyDestinationComponents/authorizationSlider";
import { TransitionLink } from "@/utils/TransitionLink";
// Server-Side Rendering (SSR)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id  = context.params?.id;
  const countryData = countryNames[id as keyof typeof countryNames];
  if (!countryData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { id,countryData },
  };
};

export default NewPage;
