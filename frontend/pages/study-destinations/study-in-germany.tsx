import Breadcrumbs from '@/components/Breadcumbs';
import Image from 'next/image';
import Header from '@/components/studyDestinationComponents/headerComponent';
import { TransitionLink } from '@/utils/TransitionLink';
import RelatedVideos from '@/components/videoSlider';
import Head from 'next/head';
const videoData=[
    {
      id: 1,
      title: 'Student Review MBBS in Germany | MBBS in Germany for Indian students',
      channel: 'Edurizon Pvt Ltd',
      views: '27K views',
      time: '1 months ago',
      duration: '24:45',
      thumbnail: 'https://img.youtube.com/vi/Vne9JYxgtlg/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=Vne9JYxgtlg',
    },
    {
      id: 2,
      title: "Why Germany is getting Popular | Punjab Student Review | Study in Germany",
      channel: 'Edurizon Pvt Ltd',
      views: '10M views',
      time: '3 years ago',
      duration: '3:03',
      thumbnail: 'https://img.youtube.com/vi/tK2uYJ8TI0U/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=tK2uYJ8TI0U',
    },
    {
      id: 3,
      title: 'Student Review TU - Clausthal Germany | Study in Germany',
      channel: 'Edurizon Pvt Ltd',
      views: '44K views',
      time: '2 months ago',
      duration: '18:32',
      thumbnail: 'https://img.youtube.com/vi/bJvR9HoUo-8/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=bJvR9HoUo-8',
    },
    {
      id: 4,
      title: "MBBS in Germany for Indian Students | Is German Language Tough ? Review | free MBBS in Germany",
      channel: 'Edurizon Pvt Ltd',
      views: '10M views',
      time: '3 years ago',
      duration: '3:03',
      thumbnail: 'https://img.youtube.com/vi/G3sa8uEsK00/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=G3sa8uEsK00',
    },
    {
      id: 5,
      title: 'Student Review for MBBS in Germany',
      channel: 'Edurizon Pvt Ltd',
      views: '44K views',
      time: '2 months ago',
      duration: '18:32',
      thumbnail: 'https://img.youtube.com/vi/QHpxbApkJyw/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=QHpxbApkJyw',
    },
    {
      id: 6,
      title: "Journey from Delhi to Germany | MBBS in Germany",
      channel: 'Edurizon Pvt Ltd',
      views: '10M views',
      time: '3 years ago',
      duration: '3:03',
      thumbnail: 'https://img.youtube.com/vi/UQautmY8erY/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=UQautmY8erY',
    },
    
  ]

const NewPage=()=>{
    return(
        <>
            <Head>
                <title>Study in Germany for Free | Top Universities & Scholarships Abroad</title>
                <meta name="keyword" content="mbbs in Germany, mbbs in Germany low cost, mbbs in Germany for indian student, cost of mbbs in Germany, MBBS Abroad for Indian Students, kazan federal university russia, kazan federal university, kazan federal uni, kazan federal university mbbs fees, kazan federal university for indian students, North western state medical university, North western state medical university fees, North western state medical university for indian students, tambov state university, tambov state university Russia, tambov state university mbbs fees, petrozavodsk state university, petrozavodsk state Medical University, petrozavodsk state university fees, kemerovo state university, kemerovo state medical university fees, kemerovo state medical university russia." />
                <meta name="description" content="Explore free education in Germany for international students. Apply to top universities with scholarships and career opportunities." />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS In Germany" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Study in Germany for Free | Top Universities & Scholarships Abroad" />
                <meta property="og:description" content="Explore free education in Germany for international students. Apply to top universities with scholarships and career opportunities." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="Study in Germany for Free | Top Universities & Scholarships Abroad" />
                <meta name="twitter:description" content="Explore free education in Germany for international students. Apply to top universities with scholarships and career opportunities." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS In Germany" />
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-in-germany" hrefLang="en-in"/>

                {/* Google tag (gtag.js) */}
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
            <div className='text-smallTextPhone md:text-smallText dark:bg-black dark:text-black pt-[15vw]  md:pt-[4vw]'>
        <section className="country-inner-banner dark:bg-black">
                <div className="container pt-[4vw] pb-[4vw] md:pb-0">
                    <div className="flex flex-row align-items-center ">
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-9 ">
                        <div className="heading">
                        <h1 className=" text-h5TextPhone md:text-h5Text">Study in Germany</h1>
                        </div>
                        <Breadcrumbs/>
                    </div>
                    <div className="md:block hidden col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 text-end ml-auto ">
                        <Image alt="banglades flag" width={100} height={100} src="/assets/Images/country-flag/german.png" className="img-fluid dark:border-[2px] rounded-sm" />
                    </div>
                    </div>
                </div>
            </section>
            <section className="inner-page-bg dark:bg-black dark:text-white">
            <div className="container">
                <div className="row g-0">
                <div className="immigrate-bg">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="flex justify-center items-center overflow-hidden  h-[37.25vw] ">
                                    <Image alt="hi" src="/assets/Images/slider/german-slider.jpeg"  className=" overflow-hidden contain object-cover h-full w-full" width={1000} height={1000} />
                                </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        <section className="inner-page-bg dark:bg-black ">
            <div className="container">
                <div className="row g-0">
                    <div className="immigrate-bg">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="heading">
                                    <h3 className="text-h5TextPhone md:text-h5Text">About Germany</h3>
                                </div>
                                <p className=''>
                                    Germany pronounced, formally the Federal Republic of Germany, is a country situated in Central Europe. It is the second most populous country in Europe after Russia, and the most populous member state of the
                                    European Union. Germany is situated between the Baltic and North seas to the north, and the Alps to the south. Germany is the 7th largest country in Europe bordering borders Denmark to the north, Poland and the
                                    Czech Republic to the east, Austria and Switzerland to the south and France, Luxembourg, Belgium and the Netherlands to the west. The nation's capital and largest city is Berlin and its financial Centre is
                                    Frankfurt. Germany is a good destination to study. Living in Germany is relatively affordable compared to other European countries. In addition.
                                </p> 
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="row"> 
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="heading">
                            <h3 className="mt-0 text-h5TextPhone md:text-h5Text">Salient Features of Germany</h3>
                        </div>
                        <ul className="points-two">
                            <li>Education system is fully free in public universities/institutions.</li>
                            <li>Language is must to enhance education in Germany.</li>
                            <li>Germany is top most in automobile sector in the world.</li>
                            <li>Most of the international students want to join UG & PG programme.</li>
                            <li>Germany is fully safe for international students as the part time job allowed, they can meet all the average maintenance expenses very easily.</li>
                            <li>Private universities are also good. There are no partialities in job search but some pvt universities charges tuition fees. It depends on course of universities.</li>
                            <li>20,000 students used to opt for Germany for various studies.</li>
                            <li>Most of the Universities in Germany are funded by their respective State Governments.</li>
                            <li>Students are allowed to work 20 hours in a week as part time job to meet their needy expenses.</li>
                            <li>Students can earn 500-600 Euro per month in their part time jobs.</li>
                            <li>During vacation, students can work full time job that amounts to 40 hours in a week.</li>
                            <li>After 5 years of regular work in Germany, students are eligible to apply for permanent residency.</li>
                            <li>Students can get scholarship by 2 ways: <b>i) Non-Government funded </b>and <b>ii) Government funded (through DAAD).</b></li>
                            <li>Paid internship facilities.</li> 
                        </ul>
                    </div> 
                </div> 
            </div>
        </div>
    </div>
</section>
<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                        <h3 className="mt-0 text-h5TextPhone md:text-h5Text">Languages</h3>
                    </div>
                    <p>
                        German is the official and predominant spoken language in Germany. It is one of 24 official and working languages of the European Union and one of the three procedural languages of the European Commission. German is
                        the most widely spoken first language. in the European Union
                    </p>
                </div> 
            </div>
        </div>
    </div>
</section>
<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg"> 
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                        <h3 className="mt-0 text-h5TextPhone md:text-h5Text">Education</h3>
                    </div>
                    <p>
                        Most of the German universities are public institutions and students traditionally study without fee payment. According to an OECD report in 2014, Germany is the world's third leading destination for international
                        study. The established universities in Germany include some of the oldest in the world, with Heidelberg University being the oldest. The Humboldt University of Berlin became the academic model for many Western
                        universities. In the contemporary era Germany has developed eleven universities of Excellence.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="inner-page-bg dark:bg-black">
    <div className="container">
        <div className="row g-0">
            <div className="immigrate-bg"> 
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="heading">
                        <h3 className="mt-0 text-h5TextPhone md:text-h5Text">Course Details</h3>
                    </div>
                    <div className="table-responsive">
                    <table className="table table-bordered table-striped align-middle">
                        <thead className="table-dark text-left text-white ">
                            <tr className='text-white'>
                                <th scope="col">Sr. No.</th> 
                                <th scope="col">Course Name</th> 
                                <th scope="col">More Information</th>
                            </tr>
                        </thead>
                        <tbody className='font-light '>
                            <tr>
                                <th scope="row">1.</th>
                                <td><TransitionLink href="/study-destinations/study-in-germany/ausbildung" >
                                <b className='text-black'>Ausbildung in Germany</b>
                                </TransitionLink>
                                </td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/ausbildung" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">2.</th> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/bachelors-in-germany" ><b className='text-black'>Bachelors</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/bachelors-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">3.</th>
                                <td><TransitionLink href="/study-destinations/study-in-germany/masters-in-germany" ><b className='text-black'>Masters</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/masters-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">4.</th> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/md-in-germany" ><b className='text-black'>MD – Medicine</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/md-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">5.</th>
                                <td><TransitionLink href="/study-destinations/study-in-germany/hotel-management-in-germany" ><b className='text-black'>Hotel Management</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/hotel-management-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">6.</th>
                                <td><TransitionLink href="/study-destinations/study-in-germany/pharmacy-in-germany" ><b className='text-black'>Pharmaceuticals</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/pharmacy-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">7.</th>
                                <td><TransitionLink href="/study-destinations/study-in-germany/nursing-in-germany" ><b className='text-black'>Nursing</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/nursing-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">8.</th> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/vocational-courses-in-germany" ><b className='text-black'>Vocational Courses</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/vocational-courses-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">9.</th> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/education-system-in-germany" ><b className='text-black'>German Education System</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/education-system-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">10.</th> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/mbbs-in-germany" ><b className='text-black'>MBBS in Germany</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/mbbs-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">11.</th> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/ms-in-economics-in-germany" ><b className='text-black'>MS in Economics in Germany</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/ms-in-economics-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                            <tr>
                                <th scope="row">12.</th> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/phd-in-germany" ><b className='text-black'>PHD in Garmany</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/phd-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                           
                            <tr>
                                <th scope="row">13.</th> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/masters-in-public-health-in-germany" ><b className='text-black'>Masters in Public Health</b></TransitionLink></td> 
                                <td><TransitionLink href="/study-destinations/study-in-germany/masters-in-public-health-in-germany" ><p className='btn-custom btn-univ-detail'>Read More</p></TransitionLink></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="inner-page-bg dark:bg-black">
    <div className="container mb-[2vw] md:mb-[4vw]">
        <div className="immigrate-bg ">
        <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="heading">
                        <h3 className="mt-0 text-h6TextPhone md:text-h6Text">Language Course</h3>
                    </div>
                    <ul className="points-two">
                        <li>A1, A2, B1, B2 & C1 is mandatory for pursuing in German taught programme.</li>
                        <li>We provide A1 & A2 German language from India.</li>
                        <li>B1, B2 and C1 will be done from Germany.</li>
                        <li>For English taught programme, 6.5 band in IELTS and TOEFL will be needed.</li>
                    </ul>
                </div> 
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                    <div className="heading">
                        <h3 className="mt-0 text-h6TextPhone md:text-h6Text">Important Facts</h3>
                    </div>
                    <ul className="points-two">
                        <li>No need of NEET to pursue MBBS in Germany.</li>
                        <li>No need of JEE to pursue technical courses.</li>
                        <li>No need of IELTS/TOEFL for German taught programme.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <RelatedVideos videoData={videoData}/>
    <div className='h-[2vw]'>

        </div>
</section>
            </div>
        </>
    )
}

export default NewPage;