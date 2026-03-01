import React from 'react'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'


const eligibilityData = {
    id: "nepal",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in CAIMU for Indian students",
        data: [["Criteria", "Details"],
        ["Age", "Must be 17 years of age as on December 31st of the admission year"],
        ["Academic Qualification", ["Class 12 with PCB", "Minimum 50% in PCB"]],
        ["NEET Qualification", ["NEET qualification is mandatory"]],
        ["Language", "No specific language requirements as medium of instruction is English"]],
    }
}

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tuition Fees",
        label: "3500 USD/Year",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "WHO, UNESCO, NMC, ECFMG",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "City & Country",
        label: "Jalal-Abad, Kyrgyzstan",
    },
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Hostel Fees",
        label: "500 USD/Year",
    },
];

const TbilisiStateMedicalUniversity = () => {
    return (
        <>
        <Head>
        <title>Central Asian International Medical University | MBBS Fees</title>
<meta name="keyword" content="mbbs in kyrgyzstan, central asian international medical university, central asian international medical university mbbs fees, caimu kyrgyzstan, jasu kyrgyzstan, Jalal-Abad State University, Kyrgyzstan, Jalal-Abad State University fees, mbbs in kyrgyzstan, best medical colleges in kyrgyzstan, kyrgyzstan mbbs fees, mbbs in kyrgyzstan fees, Mbbs in kyrgyzstan for indian students, Jalal -Abad international University, Jalal -Abad international University fees." />
<meta name="description" content="Get MBBS admission at CAIMU Kyrgyzstan. Low tuition fees, NMC-approved, and among the best medical universities in Kyrgyzstan for Indian students." />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
<meta name="DC.title" content="MBBS in Kyrgyzstan" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Dwarka" />
<meta name="geo.position" content="22.351115;78.667743" />
<meta name="ICBM" content="22.351115, 78.667743" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="Central Asian International Medical University | MBBS Fees"/>
<meta property="og:description" content="Get MBBS admission at CAIMU Kyrgyzstan. Low tuition fees, NMC-approved, and among the best medical universities in Kyrgyzstan for Indian students."/>
<meta property="og:url" content="https://www.edurizon.in/"/>
<meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:site" content="@edurizon"/>
<meta name="twitter:title" content="Central Asian International Medical University | MBBS Fees"/>
<meta name="twitter:description" content="Get MBBS admission at CAIMU Kyrgyzstan. Low tuition fees, NMC-approved, and among the best medical universities in Kyrgyzstan for Indian students."/>
<meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:image:alt" content="MBBS in Kyrgyzstan"/>   
<link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-kyrgyzstan/central-asian-international-medical-university"/>
<link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-kyrgyzstan/central-asian-international-medical-university" hrefLang="en-in"/>


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
        <div>
            <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-kyrgyzstan/CAIMU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h4Text leading-[120%] mb-[2vw] md:mb-[1.5vw] text-black'>Central Asian International Medical University</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw] md:gap-[.75vw] items-center justify-center">
                            {services.map((item, index) => (
                                <div key={index} className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] 
                                    rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] 
                                    md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black">
                                    <Image src={item.icon}
                                        alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative overflow-hidden shrink-0" />
                                    <p className="text-tinyTextPhone md:text-tinyText text-center leading-[150%]"> {item.text} <br /><span className="font-semibold"> {item.label}</span></p>
                                </div>
                            ))}
                        </div>
                        <CallingBox/>
                        </div>
                </div>
            </div>

            {/* About Georgia */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[5vw] md:pb-[2vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Jalal-Abad</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Jalal-Abad is a regional capital city and one of Kyrgyzstan’s major urban centers.</li>
                    <li>Known for its natural beauty, mineral springs, and proximity to the Fergana Valley.</li>
                    <li>It’s a peaceful and safe city, ideal for focused academic life.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS in Jalal-Abad</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Jalal-Abad is home to: i. CAIMU, ii. Jalal-Abad International University, iii. JASU </li>
                    <li>These universities attract hundreds of international students. </li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Life in Jalal-Abad</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Cost of living is very affordable:</li>
                    <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                        <li>Monthly expenses: $100–200</li>
                        <li>Indian mess options are available with $1,200 per year</li>
                    </ul>
                    <li>Local markets and supermarkets are available in nearby which provide fresh, low-cost groceries.</li>
                    <li>Many hostels and areas cater specifically to Indian students with familiar amenities.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Food & Culture in Jalal-Abad</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Multi-ethnic community: Kyrgyz, Uzbeks and Russians. </li>
                    <li>Local food includes bread, rice, kebabs, soups are available </li>
                    <li>Indian restaurants and messes are also available.</li>
                    <li>Indian restaurants and messes are also available. </li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Attractions & Leisure</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Arslanbob Forest – world’s largest natural walnut forest (~50 km away)</li>
                    <li>Thermal springs & spas – known for their healing properties </li>
                    <li>Mountains & rivers – great for hiking, sightseeing, and eco-tourism</li>
                    <li>Local bazaars and tea houses for authentic Central Asian experiences </li>
                </ul>
            </section>

            {/* About Georgia */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">

                <h3 className="text-h6TextPhone leading-[120%] md:text-h3Text text-left">About CAIMU</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Central Asian International Medical University (CAIMU), Kyrgyzstan is a private medical University. </li>
<li>It was established in the year 2016 </li>
<li>Central Asian International Medical University (CAIMU) in Jalal-Abad. </li>
<li>Central Asian International Medical University (CAIMU) offers a 5-year MBBS program and one-year separate internship program</li>

                    <li>English is the medium of instruction. </li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h3Text text-left">Recognitions & Accreditation</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Recognized by WHO, UNESCO, NMC (India) and ECFMG </li>
                    <li>Features extensive FMGE/NExT coaching integrated into the curriculum from the first year </li>
                    <li>Indian qualifications supported; many Indian lecturers and mentorship available to support or give frequent FMGE based lectures to Indian students.</li>
                </ul>
            </section>

            {/* Why Choose Section */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose CAIMU for MBBS?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
                            <li>A leading and most demanded Medical University among indian students</li>
                            <li>High quality programs regulated and accredited by the Ministry of Education of Kyrgyzstan.</li>
                            <li>Modern Academic programs</li>
                            <li>Best Medical University</li>
                            <li>Best infrastructure</li>
                            <li>Experienced and highly qualified Academic staff</li>
                            <li>Student – oriented environment</li>
                            <li>Low fee structure and low cost of living.</li>
                            <li>Strong management having rich experience in the education industry.</li>
                            <li>Robust, research-based course and curriculum is followed to inculcate the Leaders for tomorrow</li>
                            <li>Focuses on holistic development of the student by providing Learning opportunities, Community Support, Safety, Social Life and Connection to Nature</li>
                            <li>Worldwide recognition</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="nepal2"/>
            </div>

            {/* At a glance Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">CAIMU Medical University at a glance</h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2">
                    <li className='font-bold'>o College name</li>
                    <li>Central Asian International Medical University</li>
                    <li className='font-bold'>o Year of establishment</li>
                    <li>2016</li>
                    <li className='font-bold'>o Recognition</li>
                    <li>WHO, UNESCO, NMC (India) and ECFMG </li>
                    <li className='font-bold'>o Medium of instruction</li>
                    <li>English</li>
                    <li className='font-bold'>o Course duration</li>
                    <li>5 years</li>
                    <li className='font-bold'>o Internship duration</li>
                    <li>1 year</li>
                    <li className='font-bold'>o NEET</li>
                    <li>Mandatory</li>
                    <li className='font-bold'>o Intake</li>
                    <li>September/October & Feburary/March</li>
                    <li className='font-bold'>o Tution Fees</li>
                    <li>$3500 yearly</li>
                    <li className='font-bold'>o Hostel Fees</li>
                    <li>$500 yearly</li>
                    <li className='font-bold'>o Mess Fees</li>
                    <li>$1200 yearly</li>
                    <li className='font-bold'>o Currency</li>
                    <li>Som</li>
                </ul>
            </section>

            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Ultra-modern hostel & Indian food</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Fully equipped and well-furnished ultra-modern hostels.</li>
                    <li>Indian Cooks are in the Hostels to prepare delicious Indian food.</li> 
                    <li>Edurizon try to serve the best food for our students. </li>
                    <li>We make sure students are always satisfied with food. </li>
                    <li>Hostels provided with separate accommodations for boys and girls.</li>
                    <li>Costs of indian food is $1200 yearly</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Facilities & Support</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Clinical exposure through university-affiliated teaching hospitals in Jalal-Abad</li>
                    <li>Modern infrastructure</li>
                    <li>digital classrooms, well equipped labs, simulation centers, library, and on campus hostel</li>
                    <li>Promotion of research and community outreach, exemplified by medical camps in local communities.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Life & Community</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Diverse multinational student body, including a significant number of Indian students.</li>
                    <li>Campus life includes Indian food in mess, secure hostels, and a multicultural environment</li>
                    <li>Strong alumni performance: notable FMGE pass rates in January 2025, with multiple success stories from graduates</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Safety & security </h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>24/7 basis security cover.</li>  
                    <li>Proper CCTV have been placed at all appropriate locations.</li>
                    <li>Separate hostels for Boys and Girls.</li>
                    <li>Relaxing and peaceful stay that is conducive to learning is assured.</li>
                    <li>Numerous Indian restaurants are there in the market where students can enjoy Indian food.</li>
                    <li>Students are very well taken-care of during their entire stay in CAIMU.</li>
                    <li>Considered a safe snf student-friendly city.</li>
                    <li>Law enforcement is active; student ID is often sufficient for identification.</li>
                                        
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">CAIMU - Library</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>High-Tech laboratories</li>
                    <li>Diverse literature is available in CAIMU library, which provides students with modern book fund, electronic resources and on digital carriers.</li>
                    <li>Electronic Scientific databases take an important part of the library resources, and this includes the literature determined under academic programs in all directions of the university programs.</li>
                    <li>Library is a structural unit of the University, which provides all kinds of personnel and students with modern books, as a kind of electronic and digital media resources.</li>
                    <li>An important part of the library resources is electronic library, which includes the literature provided by training program.</li>
                    <li>Student reading rooms and lounge.</li>
                    <li>Wide holdings of library books</li>
                </ul>

            </section>

            {/* Tables outside sections */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                
            <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">CAIMU initial admission Process</h3>
                <p className="text-smallTextPhone text-left md:text-regularText">Documents required:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Copy of 10/12 Marksheet</li>
                    <li>Adhaar card copy</li>
                    <li>Passport</li>
                    <li>Neet score card</li>
                    <li>Passport-sized photos</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">CAIMU complete admission Process:</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Step 1:</strong> Application form to be filled meticulously.</li>
                    <li><strong>Step 2:</strong> Students must submit their educational certificates and other supporting documents</li>
                    <li><strong>Step 3:</strong> On apply to the University, student will get an admission letter from the University</li>
                    <li><strong>Step 4:</strong> Invitation to be applied</li>
                    <li><strong>Step 5:</strong> On receipt of invitation, visa shall be applied</li>
                    <li><strong>Step 6:</strong> On receipt of visa, departure schedule of all students shall be prepared and  flight tickets shall be booked </li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How to reach Jalal-Abad, Kyrgyzstan</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Well-connected by road and public transport.</li>
                    <li>6–8 hours by road from Bishkek to Jalal-Abad</li>
                    <li>25 minutes by domestic flight (Bishkek to Jalala-Abad)</li>
                    <li>Closest major international airport: Osh International Airport.</li>
                    <li>Students often fly into Bishkek or Osh and travel to Jalal-Abad by bus or taxi.</li>
                </ul>
            </section>
        </div>
        </>
    )
}

export default TbilisiStateMedicalUniversity 