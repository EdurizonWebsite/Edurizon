import React from 'react'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import UnlistedTableEqualWidth from '@/components/studyDestinationComponents/unListedTableEqualWidth'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import Head from 'next/head'

const academicCalenderData = {
    id: "china",
    section2: "",
    content: {
        title: "Academic Calendar",
        subTitle: "Important dates for MBBS admission at Xi'an Jiaotong University",
        data: [["Events", "Dates"],
        ["Admission process", "Starts in May"],
        ["Last date of application", "July/August"],
        ["Commencement of MBBS course", "September/October"]],
    }
}

const eligibilityData = {
    id: "china",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in Xi'an Jiaotong University for Indian students",
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
        label: "RMB 30,000/Year",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "WHO, NMC, C9 League",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "City & Country",
        label: "Xi'an, China",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "University Ranking",
        label: "Top 15 in China",
    },
];

const XianJiaotongUniversity = () => {
    const callBtnFnc=()=>{
        window.location.href = "tel:+919873381377"
    }
    const whatsappBtnFnc=()=>{
        window.open('https://wa.me/919873381377?')
    }
    
    return (
        <>
            <Head>
                <title>Xi'an Jiaotong University MBBS in China | Fees & Admission | Edurizon</title>
                <meta name="keyword" content="xi'an jiaotong university, xi'an jiaotong university china, xjtu mbbs, xi'an jiaotong university mbbs, mbbs in china, mbbs in shaanxi, study mbbs in xi'an, study mbbs in china, mbbs fees in china, top medical universities in china, best medical colleges in china, c9 league universities, project 985 universities, project 211 universities, double first-class construction, mbbs in china fees, china medical education" />
                <meta name="description" content="Study MBBS at Xi'an Jiaotong University in China with globally recognized education, advanced facilities, and affordable MBBS fees for Indian students." />
                <meta name="author" content="edurizon" />
                <meta name="robots" content="index, follow"/>
                <meta name="DC.title" content="MBBS in China" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="Dwarka" />
                <meta name="geo.position" content="22.351115;78.667743" />
                <meta name="ICBM" content="22.351115, 78.667743" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Xi'an Jiaotong University MBBS China | Fees & Admission Guide" />
                <meta property="og:description" content="Explore MBBS at Xi'an Jiaotong University in China. C9 League member, Project 985, Double First-Class, with affordable fees for Indian students." />
                <meta property="og:url" content="https://www.edurizon.in/" />
                <meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@edurizon" />
                <meta name="twitter:title" content="Xi'an Jiaotong University MBBS China | Fees & Admission Guide" />
                <meta name="twitter:description" content="Explore MBBS at Xi'an Jiaotong University in China. C9 League member, Project 985, Double First-Class, with affordable fees for Indian students." />
                <meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg" />
                <meta name="twitter:image:alt" content="MBBS in China" />
                <link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-china/xian-university"/>
                <link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-china/xian-university" hrefLang="en-in"/>
            </Head>
            <div>
            <div className="flex flex-col gap-[2vw] mb-[1vw] py-[4vw] items-center pt-[20vw]  md:pt-[8vw]">
                <div className="mx-[6vw] flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                    <Breadcrumbs/>
                </div>
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full text-black'>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-china/associated-universities/xian-jiaotong-university.webp"} alt='Xian Jiaotong University Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw]'>Xi'an Jiaotong University</h2>
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
                        <div className='absolute right-0 bottom-[2vw] flex gap-[8px] text-white text-smallTextPhone md:text-regularText font-semibold'>
                            <button onClick={callBtnFnc} className='bg-orangeChosen md:h-[3vw] w-[10vw] md:rounded-[.675vw] p-[10px]'>+91 98733 81377</button>
                            <button onClick={whatsappBtnFnc} className='bg-orangeChosen md:h-[3vw] w-[12vw] md:rounded-[.675vw] flex items-center justify-center p-[10px] gap-[2vw] md:gap-[.5vw] '><Image src={"/assets/Images/Icons/whatsapp.png"} alt='whatsapp' width={40} height={40} /> +91 98733 81377</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Xi'an Jiaotong University */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Xi'an Jiaotong University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Xi'an Jiaotong University (XJTU) is a leading public research university located in Xi'an, Shaanxi Province, China.</li>
                    <li>It is directly affiliated with and funded by the Ministry of Education of China.</li>
                    <li>XJTU is recognized as one of China's elite institutions and is included in Project 211, Project 985, and Double First-Class Construction (Class A).</li>
                    <li>It is a prestigious member of the C9 League, and is the only C9 League university located in Western China.</li>
                    <li>This reflects its strong national and global academic reputation.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Historical Background</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Founded in 1896 in Shanghai as Nanyang Public School under the Qing Dynasty, the institution underwent several transitions before becoming National Chiao Tung University.</li>
                    <li>Xi'an Jiaotong University (XJTU), a key university under the direct administration of the Ministry of Education, is one of China's oldest and most prestigious higher education institutions.</li>
                    <li>Sheng Xuanhuai, a renowned industrialist and educator, founded the Shanghai-based Nanyang Mission College in 1896.</li>
                    <li>In 1921, the college changed its name to Jiaotong University.</li>
                    <li>Starting in 1956, faculty and students relocated to Xi'an in batches.</li>
                    <li>In 1959, the Xi'an branch of Jiaotong University was officially named Xi'an Jiaotong University.</li>
                    <li>In 2000, Xi'an Jiaotong University further expanded through the merger with Xi'an Medical University and Shaanxi Institute of Finance and Economics, strengthening its medical and management disciplines.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Research & Academic Excellence</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>According to data released by Essential Science Indicators (ESI), 19 disciplines at XJTU ranked in the top 1 percent globally among academic institutions.</li>
                    <li>Six disciplines ranking in the top one-thousandth.</li>
                    <li>Engineering ranked in the top one-ten-thousandth, making it eighth globally.</li>
                    <li>XJTU has 34 schools, departments, and centers, nine colleges for undergraduates, and three affiliated hospitals.</li>
                    <li>It has 6,754 faculty and staff members, including 3,813 full-time teachers.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Population & Programs</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The university has 62,089 students, comprising 25,595 undergraduates, 32,565 postgraduates, and 3,929 international students from 136 countries.</li>
                    <li>It offers 77 undergraduate majors, and has 43 first-level disciplines authorized to confer doctoral degrees.</li>
                    <li>45 first-level disciplines authorized to confer master's degrees, seven majors authorized to confer professional doctoral degrees.</li>
                    <li>31 majors authorized to confer professional master's degrees.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Innovation & Research Platforms</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>It has built the Western China Science and Technology Innovation Harbour (iHarbour) and constructed eight major platforms.</li>
                    <li>30 research institutes, and over 400 research bases and think tanks focusing on four primary areas: science, engineering, medicine, and the humanities.</li>
                    <li>XJTU has achieved numerous landmark successes in scientific research both domestically and internationally.</li>
                    <li>Including the establishment of China's first institute of engineering thermophysics and the introduction of the first majors in steam turbines, automobile manufacturing, refrigeration, and low-temperature compressors.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">International Collaborations</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The university has jointly established several educational institutions and programs, including Xi'an Jiaotong-Liverpool University.</li>
                    <li>XJTU-POLIMI Joint School of Design and Innovation, and two Confucius Institutes at the University of Liverpool and Yamanishi Gakuin University in Japan.</li>
                    <li>It has collaborated with Samarkand State University in Uzbekistan to establish a China Center, pioneering an innovative "language + technology" cooperation model in Central Asia.</li>
                    <li>XJTU initiated the University Alliance of the Silk Road, attracting 207 universities from 45 countries and regions to join diverse cooperation efforts.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Life & Achievement</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>XJTU boasts a national base for cultural and high-quality education, along with 144 student societies.</li>
                    <li>A diverse range of scientific, cultural, and sports activities are offered.</li>
                    <li>Over the years, XJTU students have achieved outstanding results in international and domestic competitions.</li>
                    <li>Including the SAE Aero Design Competition, VEX Robotics World Championship, and International Mathematical Modeling Challenge.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">International Recognition</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>XJTU has established 106 international undergraduate student recruitment bases across 27 countries and regions.</li>
                    <li>In 2024, it achieved the highest rating of Class A+ in the re-certification of higher education quality for international students in China.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">University Motto & Spirit</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Motto:</strong> Study assiduously, resolve to succeed, act decisively, and manage affairs with magnanimity.</li>
                    <li><strong>School spirit:</strong> Love country and university, pursue truth, work with diligence and steadfastness, and live in simplicity and austerity</li>
                    <li><strong>Orientation:</strong> Take root in western China, serve the country, and strive to be world-class.</li>
                </ul>
            </section>

            {/* About Shaanxi Province and Xi'an */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS in Shaanxi Province, China</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Shaanxi Province is one of the most preferred destinations for pursuing MBBS in China due to its strong academic infrastructure.</li>
                    <li>Advanced medical universities, and affordable living costs are major highlights.</li>
                    <li>The capital city, Xi'an, is a major educational and research hub offering globally recognized medical programs taught in English for international students.</li>
                    <li>Shaanxi is home to top government-funded universities with modern laboratories, affiliated teaching hospitals, and excellent clinical exposure.</li>
                    <li>The province provides a safe and student-friendly environment with lower tuition fees compared to major metropolitan cities in China.</li>
                    <li>With high-quality medical education, internationally recognized degrees, and strong hospital training systems, Shaanxi Province is an ideal choice for Indian students.</li>
                    <li>Students also benefit from cultural diversity, historical heritage, and well-developed transportation connectivity.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Xi'an – Best Student City for MBBS in China</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Xi'an is one of the most historic and culturally rich cities in China and a rapidly developing education and medical hub.</li>
                    <li>It is the capital of Shaanxi Province and home to top universities including Xi'an Jiaotong University.</li>
                    <li>For international students planning to study MBBS in China, Xi'an offers the perfect balance of safety, affordability, and academic excellence.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Why Xi'an is Ideal for MBBS Students</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Affordable cost of living in China</li>
                    <li>Safe city for international students</li>
                    <li>Modern hospitals and medical ecosystem</li>
                    <li>Excellent public transport system</li>
                    <li>Strong international student community</li>
                    <li>Comfortable climate with four distinct seasons</li>
                    <li>Xi'an is globally famous for the Terracotta Warriors and its historical connection to the ancient Silk Road.</li>
                    <li>Today, it is also known for advanced medical research and innovation.</li>
                    <li>For students looking for low-cost MBBS in China with quality clinical exposure, Xi'an is one of the best destinations.</li>
                </ul>
            </section>

            {/* Why Choose Section */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw] gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text text-left leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose Xi'an Jiaotong University for MBBS?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText text-justify">
                            <li>C9 League Member: Prestigious membership in China's most elite university alliance.</li>
                            <li>Project 985 & Project 211: Government-recognized status as a top university.</li>
                            <li>Double First-Class Construction (Class A): Recognition as a world-class university.</li>
                            <li>Global Research Recognition: 19 disciplines ranked in top 1% globally; 6 disciplines in top 0.1%.</li>
                            <li>Advanced Medical Infrastructure: Three affiliated teaching hospitals ranked among China's top 100.</li>
                            <li>English-Medium Instruction: Entire MBBS program taught in English for international students.</li>
                            <li>Affordable Fees: Competitive tuition fees compared to Western universities.</li>
                            <li>International Recognition: WHO, NMC, and global medical body recognition.</li>
                            <li>Modern Campus & Facilities: Four major campuses with over 250 hectares of advanced infrastructure.</li>
                            <li>Excellent Library System: Qian Xuesen Library with over 5 million books and extensive digital resources.</li>
                            <li>Safe & Student-Friendly City: Xi'an offers a secure environment for international students.</li>
                            <li>Cultural Experience: Historic city with Terracotta Warriors and rich heritage.</li>
                            <li>Affordable Living: Lower cost of living compared to Beijing or Shanghai.</li>
                            <li>International Student Support: 3,929 international students from 136 countries already studying at XJTU.</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="Xi'an City"/>
            </div>

            {/* At a glance Section */}
            <section className="">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left mx-[6vw] md:mx-[12.5vw] font-bold">Xi'an Jiaotong University at a glance</h3>
                <UnlistedTableEqualWidth
                  id="xian-jiaotong-glance"
                  section2=""
                  content={{
                    title: "",
                    subTitle: "",
                    data: [
                      ["Details", "Information"],
                      ["University Name", "Xi'an Jiaotong University (XJTU)"],
                      ["Location", "Xi'an, Shaanxi Province, China"],
                      ["Recognition", "WHO, NMC, C9 League, Project 985, Project 211, Double First-Class (Class A)"],
                      ["Medium of Instruction", "English"],
                      ["Course Duration", "6 years"],
                      ["Internship Duration", "1 year"],
                      ["University Ranking in China", "Top 15"],
                      ["Global Research Ranking", "Among top universities in Asia-Pacific"],
                      ["NEET Requirement", "Mandatory"],
                      ["Annual Tuition Fee", "RMB 30,000 / Year"],
                      ["Admission Intake", "September/October"],
                      ["International Students", "3,929 from 136 countries"],
                      ["Affiliated Teaching Hospitals", "8 hospitals, 2 ranked in China's top 100"],
                    ]
                  }}
                />
            </section>

            {/* Research & Academic Strength */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Research & Academic Strength</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Xi'an Jiaotong University is a major research hub in China with 5 State Key Laboratories.</li>
                    <li>4 State Special Laboratories and 2 National Engineering Research Centers.</li>
                    <li>8 Affiliated Teaching Hospitals provide advanced clinical and research infrastructure.</li>
                    <li>Two of its affiliated hospitals are ranked among China's top 100 hospitals.</li>
                    <li>The university is the core institution of the University Alliance of the Silk Road, promoting global academic collaboration.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Research Impact</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>XJTU demonstrates strong global research performance.</li>
                    <li>Ranked among top universities in Asia-Pacific for research output.</li>
                    <li>High number of publications in top 1% globally cited research.</li>
                    <li>Strong performance in engineering, technology, medicine, and science.</li>
                    <li>Its research influence continues to expand internationally.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Faculty & Academic Excellence</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>XJTU has more than 5,500 faculty and staff members.</li>
                    <li>Including members of the Chinese National Academy of Engineering and Chinese Academy of Sciences.</li>
                    <li>Changjiang (Yangtze River) Scholars and National Distinguished Young Scholar awardees.</li>
                    <li>The university serves over 30,000 students, including approximately 15,000 postgraduate students.</li>
                    <li>It offers 84 Undergraduate Programs, 200 Master's Disciplines, and 115 Doctoral Programs.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Campus & Facilities</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Xi'an Jiaotong University operates four major campuses: Xingqing Campus, Yanta Campus, Innovation Harbor Campus, and Qujiang Campus.</li>
                    <li>The campuses cover more than 250 hectares with modern infrastructure, research facilities, and advanced academic resources.</li>
                    <li>The Qian Xuesen Library houses over 5 million books, thousands of academic journals, and extensive digital research databases.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Rankings & Global Reputation</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Xi'an Jiaotong University consistently ranks among the top universities in China and globally.</li>
                    <li>Recent international rankings include: Top 10–15 universities nationally in China.</li>
                    <li>Ranked within top 100 globally in research (ARWU category).</li>
                    <li>Recognized in QS, THE, and U.S. News global rankings.</li>
                    <li>Strong global graduate employability ranking.</li>
                    <li>According to international research metrics, XJTU is among the leading universities worldwide in scientific publications and high-impact research output.</li>
                </ul>
            </section>

            {/* MBBS Program Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS Program in Xi'an Jiaotong University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>The duration of MBBS programme in Xi'an Jiaotong University is for 6 years including 1 year internship.</li>
                    <li>The entire program is taught in English, making it accessible for international students.</li>
                    <li>The curriculum is designed with a focus on practical skills, clinical exposure, and research.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS Intake in Xi'an Jiaotong University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Intake: September/October</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Career Prospects in Xi'an Jiaotong University</h3>
                <p className="text-smallTextPhone text-left md:text-regularText">Graduates of Xi'an Jiaotong University are eligible to appear for global licensing exams like:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>USMLE (USA)</li>
                    <li>PLAB (UK)</li>
                    <li>NEET (India)</li>
                    <li>AMC (Australia)</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Xi'an Jiaotong University – Recognition</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Xi'an Jiaotong University is recognized by the World Health Organization (WHO), National Medical Commission (NMC) of India, and other international medical bodies.</li>
                    <li>The university's credentials ensure that graduates' qualifications are recognized globally.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Medium of Instruction in Xi'an Jiaotong University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Xi'an Jiaotong University offers fully English taught programs in medicine for international students.</li>
                    <li>Programs are designed to give students modern, practical knowledge and critical thinking skills.</li>
                    <li>The focus is on training competitive specialists with student-oriented teaching methods.</li>
                    <li>Programs are developed in line with international standards and modern requirements.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Xi'an Jiaotong University Ranking</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Xi'an Jiaotong University Ranking: Top 15 in China</li>
                    <li>One of the only C9 League universities in Western China</li>
                    <li>Project 985 and Project 211 institution</li>
                    <li>Double First-Class Construction (Class A) university</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Xi'an Jiaotong University MBBS Fees for Indian Students</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Tuition Fee: RMB 42,800 / Year (approximately USD 6,000-6,500)</li>
                    <li>Hostel & Mess: RMB 8,000-12,000 / Year (approximately USD 1,100-1,700)</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Hostel & Food Facilities</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Fully equipped and well-furnished modern air-conditioned hostels.</li>
                    <li>Indian cooks available in hostels to prepare delicious Indian food.</li>
                    <li>Multiple dining options with both Indian and Chinese cuisine.</li>
                    <li>Clean and hygienic food preparation standards maintained.</li>
                    <li>Regular monitoring to ensure student satisfaction.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Safety & Security</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>24/7 basis security cover on campus.</li>
                    <li>CCTV cameras placed at all strategic locations.</li>
                    <li>Separate hostels for boys and girls.</li>
                    <li>Relaxing and peaceful stay conducive to learning.</li>
                    <li>Numerous Indian restaurants available in Xi'an.</li>
                    <li>Students are well cared for during their entire stay at XJTU.</li>
                    <li>Xi'an is a safe city for international students.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Xi'an Jiaotong University – Library & Learning Resources</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Qian Xuesen Library: Over 5 million books and extensive academic journals.</li>
                    <li>Digital Resources: Thousands of e-books and online journals accessible to students.</li>
                    <li>Electronic Databases: Comprehensive access to medical and scientific databases.</li>
                    <li>Remote Access: Students can access library resources from home or anywhere.</li>
                    <li>Research Support: Library staff provides assistance with research and information retrieval.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Climate in Xi'an for International Students</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Spring: Mild and pleasant weather</li>
                    <li>Summer: Warm but manageable temperatures</li>
                    <li>Autumn: Cool and comfortable</li>
                    <li>Winter: Cold but dry, manageable for most students</li>
                    <li>Students easily adapt to the weather conditions in Xi'an.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Cost of Living in Xi'an for MBBS Students</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Compared to Beijing or Shanghai, Xi'an is more affordable.</li>
                    <li>Average monthly hostel accommodation: RMB 1,000-1,500 (approximately USD 140-210)</li>
                    <li>Food and groceries: RMB 800-1,200 per month (approximately USD 110-170)</li>
                    <li>Local transport: RMB 100-200 per month (approximately USD 15-30)</li>
                    <li>Personal expenses: RMB 300-500 per month (approximately USD 40-70)</li>
                    <li>Xi'an is considered one of the most budget-friendly cities for international medical students in China.</li>
                </ul>
            </section>

            {/* Tables outside sections */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* XJTU complete admission Process */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Xi'an Jiaotong University Initial Admission Process</h3>
                <p className="text-smallTextPhone mb-[1vw] text-left md:text-regularText">Documents required:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>10th, 12th Mark sheet</li>
                    <li>NEET score card</li>
                    <li>1 passport size photograph</li>
                    <li>Valid Indian Passport</li>
                    <li>Physical Fitness certificate</li>
                    <li>Gap certificate (in case there is any gap in the academic year)</li>
                    <li>No criminal report</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Xi'an Jiaotong University Complete Admission Process</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Step 1:</strong> Application form to be filled meticulously with all required information.</li>
                    <li><strong>Step 2:</strong> Students must submit their educational certificates and other supporting documents.</li>
                    <li><strong>Step 3:</strong> Students will be judged on the basis of merit and performance in interview.</li>
                    <li><strong>Step 4:</strong> Students will get an admission letter from the University.</li>
                    <li><strong>Step 5:</strong> Students need to pay tuition fee for one semester.</li>
                    <li><strong>Step 6:</strong> Invitation application to be submitted.</li>
                    <li><strong>Step 7:</strong> On receipt of invitation, an appointment for visa in VFS shall be taken.</li>
                    <li><strong>Step 8:</strong> On receipt of date of appointment, students need to appear in person in VFS for visa purpose.</li>
                    <li><strong>Step 9:</strong> On receipt of visa, students should get their passport and schedule their flight to China accordingly.</li>
                </ul>

                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How to Reach Xi'an Jiaotong University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Direct flight from New Delhi to Xi'an, China</li>
                    <li>Approximately 5-6 hours air journey</li>
                    <li>Affordable air fares available throughout the year</li>
                    <li>Approximately 30-45 minutes journey to Xi'an Jiaotong University after reaching Xi'an airport.</li>
                    <li>Well-connected by public transport and university shuttle services.</li>
                </ul>
            </section>

            </div>
        </>
    )
}

export default XianJiaotongUniversity
