import React from 'react'
import ListedTable from '@/components/studyDestinationComponents/ListedTable'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcumbs'
import Head from 'next/head'
import CallingBox from '@/components/studyDestinationComponents/header/callingBox'

const academicCalenderData = {
    id: "kyrgyzstan",
    section2: "",
    content: {
        title: "Academic Calendar",
        subTitle: "Important dates for MBBS admission at Jalal-Abad State University",
        data: [
            ["Events", "Dates"],
            ["Admission process", "Starts in May"],
            ["Last date of application", "July/August"],
            ["Commencement of MBBS course", "September/October"]
        ],
    }
}

const eligibilityData = {
    id: "kyrgyzstan",
    section2: "",
    content: {
        title: "Eligibility Criteria",
        subTitle: "Eligibility Criteria for MBBS in Jalal-Abad State University for Indian students",
        data: [
            ["Criteria", "Details"],
            ["Age", "Must be 17 years of age as on December 31st of the admission year"],
            ["Academic Qualification", ["Class 12 with PCB", "Minimum 50% in PCB"]],
            ["NEET Qualification", ["NEET qualification is mandatory"]],
        ],
    }
}

const services = [
    {
        icon: "/assets/Images/Icons/feesIcon.svg",
        text: "Tuition Fees",
        label: "$4,200/Year",
    },
    {
        icon: "/assets/Images/Icons/ExperienceIcon.svg",
        text: "Recognition",
        label: "WHO, NMC, UNESCO, ECFMG",
    },
    {
        icon: "/assets/Images/Icons/TieUpsIcon.svg",
        text: "City & Country",
        label: "Jalal-Abad, Kyrgyzstan",
    },
    {
        icon: "/assets/Images/Icons/AcademinCoursesIcon.svg",
        text: "Course Duration",
        label: "6 years (5+1)"
    },
];

const JalalAbadStateUniversity = () => {
    return (
        <>
        <Head>
        <title>Jalal-Abad State University Kyrgyzstan | MBBS Fees & Admission</title>
<meta name="keyword" content="mbbs in kyrgyzstan, central asian international medical university, central asian international medical university mbbs fees, caimu kyrgyzstan, jasu kyrgyzstan, Jalal-Abad State University, Kyrgyzstan, Jalal-Abad State University fees, mbbs in kyrgyzstan, best medical colleges in kyrgyzstan, kyrgyzstan mbbs fees, mbbs in kyrgyzstan fees, Mbbs in kyrgyzstan for indian students, Jalal -Abad international University, Jalal -Abad international University fees." />
<meta name="description" content="Pursue MBBS at Jalal-Abad State University Kyrgyzstan. Affordable MBBS fees, quality education, and top choice for Indian medical aspirants." />
<meta name="author" content="edurizon" />
<meta name="robots" content="index, follow"/>
<meta name="DC.title" content="MBBS in Kyrgyzstan" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Dwarka" />
<meta name="geo.position" content="22.351115;78.667743" />
<meta name="ICBM" content="22.351115, 78.667743" />
<meta property="og:type" content="website"/>
<meta property="og:title" content="Jalal-Abad State University Kyrgyzstan | MBBS Fees & Admission"/>
<meta property="og:description" content="Pursue MBBS at Jalal-Abad State University Kyrgyzstan. Affordable MBBS fees, quality education, and top choice for Indian medical aspirants."/>
<meta property="og:url" content="https://www.edurizon.in/"/>
<meta property="og:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:site" content="@edurizon"/>
<meta name="twitter:title" content="Jalal-Abad State University Kyrgyzstan | MBBS Fees & Admission"/>
<meta name="twitter:description" content="Pursue MBBS at Jalal-Abad State University Kyrgyzstan. Affordable MBBS fees, quality education, and top choice for Indian medical aspirants."/>
<meta name="twitter:image" content="https://www.edurizon.in/assets/Images/landingPage/WhyChoseUs2.svg"/>
<meta name="twitter:image:alt" content="MBBS in Kyrgyzstan"/>
<link rel="canonical" href="https://www.edurizon.in/study-destinations/study-mbbs-in-kyrgyzstan/jalal-abad-state-university"/>
<link rel="alternate" href="https://www.edurizon.in/study-destinations/study-mbbs-in-kyrgyzstan/jalal-abad-state-university" hrefLang="en-in"/>



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
                <div className='bg-linenChosen flex flex-col md:flex-row gap-[3vw] items-center w-full '>
                    <Image className='w-full md:w-[40.625vw] h-full' src={"/assets/Images/mbbs-in-kyrgyzstan/JASU.png"} alt='college Image' width={650} height={550}/>
                    <div className='relative mx-[6vw] md:mx-0 py-[4vw]'>
                        <h2 className='font-bold text-h3TextPhone md:text-h2Text leading-[120%] mb-[2vw] md:mb-[1.5vw] text-black'>Jalal-Abad State University</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.25vw] md:gap-[.75vw] items-center justify-center">
                            {services.map((item, index) => (
                                <div key={index} className="w-full md:w-[16.5vw] relative mx-auto shadow-[0px_.25vw_2.46875vw_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_.25vw_2.46vw_rgba(255,_255,_255,_0.25)] rounded-[3.75vw] md:rounded-[1.875vw] bg-white overflow-hidden shrink-0 flex items-center justify-start py-[3vw] md:py-[1.5vw] px-[3.875vw] md:px-[1.937vw] box-border gap-[1vw] text-center text-regularText text-black">
                                    <Image src={item.icon} alt={item.label} width={64} height={64} className="w-[8.5vw] h-[8.5vw] md:w-[4.25vw] md:h-[4.25vw] relative overflow-hidden shrink-0" />
                                    <p className="text-tinyTextPhone md:text-tinyText text-center leading-[150%]"> {item.text} <br /><span className="font-semibold"> {item.label}</span></p>
                                </div>
                            ))}
                        </div>
                        <CallingBox/>
                    </div>
                </div>
            </div>

            {/* About Kyrgyzstan & Jalal-Abad */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Kyrgyzstan Overview</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Capital: Bishkek</li>
                    <li>Official Language: Kyrgyz (state) and Russian (official)</li>
                    <li>Population: about 7 million</li>
                    <li>Currency: Kyrgyzstani Som (KGS)</li>
                    <li>Major Cities: Bishkek, Osh, Jalal-Abad, Karakol</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Geography & Climate</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Located in Central Asia, bordering Kazakhstan, Uzbekistan, Tajikistan, and China.</li>
                    <li>Mostly mountainous, known as “Switzerland of Central Asia.”</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Jalal-Abad</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Regional capital city and one of Kyrgyzstan’s major urban centers.</li>
                    <li>Known for its natural beauty, mineral springs, and proximity to the Fergana Valley.</li>
                    <li>Peaceful and safe city, ideal for focused academic life.</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS in Jalal-Abad</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Home to Jalal-Abad State University (JaSU), Central Asian International Medical University (CAIMU), and Jalal-Abad International University (JaIU).</li>
                    <li>These universities attract hundreds of international students.</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Attractions & Leisure</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Arslanbob Forest – world’s largest natural walnut forest (~50 km away)</li>
                    <li>Thermal springs & spas – known for their healing properties</li>
                    <li>Mountains & rivers – great for hiking, sightseeing, and eco-tourism</li>
                    <li>Local bazaars and tea houses for authentic Central Asian experiences</li>
                </ul>
            </section>

            {/* About JaSU */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">About Jalal-Abad State University</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Jalal-abad state University was established in the year 1993.</li>
                    <li>Jalal-Abad State University (JaSU) Named after B. Osmonov is a distinguished institution solely dedicated to providing exceptional medical education.</li>
                    <li>JaSU offers prestigious M.B.B.S. and M.D. programs, preparing students for successful careers in the dynamic field of medicine.</li>
                    <li>JaSU focus on academic excellence, hands-on clinical experience, and ethical practice.</li>
                    <li>JaSU comprehensive training includes rigorous coursework, immersive clinical rotations, and access to state-of-the-art facilities.</li>
                    <li>JaSU esteemed faculty nurtures intellectual curiosity and critical thinking, while our diverse student body gains a global perspective on healthcare, fostering collaboration and compassionate care.</li>
                    <li>As graduates, JaSU students emerge as skilled and compassionate physicians, ready to make a meaningful impact in the lives of their patients and communities</li>
                </ul>
            </section>

            {/* Academics & Programs */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Academics at JaSU</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>At Jalal-Abad State University is committed to providing an exceptional and rigorous medical education that prepares our students for successful and impactful careers in healthcare.</li>
                    <li>JaSU academic philosophy is built upon the pillars of comprehensive knowledge, practical expertise, and unwavering ethical conduct, ensuring our graduates are not only skilled clinicians but also compassionate healers and leaders.</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">JaSU Esteemed Programs</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>M.B.B.S.:</strong> <ul className='list-decimal list-inside'>
                        <li>This undergraduate program provides a foundational and in-depth understanding of medical sciences, clinical skills, and patient care.</li>
                        <li>The curriculum is meticulously structured to cover anatomy, physiology, biochemistry, pharmacology, pathology, microbiology, community medicine, and a wide range of clinical subjects through systematic teaching and early patient exposure.</li>
                    </ul></li>
                    <li><strong>Doctor of Medicine:</strong> Our postgraduate program offers advanced specialization and research opportunities for medical professionals seeking to deepen their expertise in specific medical fields.</li>
                    <li><strong>Rigorous Didactic Sessions:</strong> Engaging lectures, interactive seminars, and tutorials led by highly qualified faculty members.</li>
                    <li><strong>Hands-on Clinical Rotations:</strong> Extensive practical training in affiliated hospitals and healthcare centers, providing invaluable real-world experience across various specialties.</li>
                    <li><strong>Laboratory Work and Simulations:</strong> Our state-of-the-art labs and simulation centers let students master scientific principles and clinical skills in a controlled setting before patient care.</li>
                    <li><strong>Problem-Based Learning:</strong> Encouraging students to analyze complex medical cases, fostering critical thinking and collaborative problem-solving skills.</li>
                </ul>
            </section>

            {/* Why JaSU Graduates Excel */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Why JaSU Graduates Excel: A Legacy of Success and Support</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Jalal-Abad State University (JASU) takes immense pride in its thriving alumni network of over 1500 graduates. Their remarkable achievements, including excelling in their medical careers and successfully clearing demanding licensing exams like the FMGE and PM&DC, are direct evidence of the exceptional education and robust support system at JASU.</li>
                    <li>Our graduates are now global citizens, bringing essential healing and expertise to communities worldwide. Many have not only secured licensure but have also become dedicated healthcare professionals, embodying the spirit of service and inspiring countless aspiring doctors.</li>
                    <li>A cornerstone of their success lies in our strategic preparation. JASU boasts impressive pass rates for the FMGE and PM&DC exams, thanks to coaching classes. These invaluable sessions are led by highly qualified guest lecturers from prestigious institutions in India and Pakistan, whose expertise is crucial to our graduates’ stellar performance.</li>
                    <li>This investment in free, expert-led coaching underscores JASU’s deep commitment to empowering our students for successful medical careers. Furthermore, our accomplished alumni actively serve as mentors, sharing their insights and experiences. This blend of comprehensive education, specialized exam preparation, and alumni guidance creates a powerful environment that consistently produces highly competent medical professionals.</li>
                    <li>The success of our graduates in FMGE and PM&DC exams is a clear reflection of the collective dedication of JASU, its faculty, and our alumni who are making significant contributions to healthcare globally.</li>
                </ul>
            </section>

            {/* Innovative Facilities & Diversity */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Innovative Facilities & Diversity</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Our campus features a private hospital, library, and sports facilities for holistic student development.</li>
                    <li>Experience a rich blend of cultures with diverse food options, fostering an inclusive learning atmosphere.</li>
                </ul>
            </section>

            {/* Mission, Vision, Initiatives */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Mission & Vision</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Mission:</strong> Train specialists using modern educational methods and research to tackle global sustainable development challenges and succeed in the labor market.</li>
                    <li><strong>Vision:</strong> Become a leading international university recognized across Asia, attracting students from India, Bangladesh, Uzbekistan, Nepal, Sri Lanka, and beyond.</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">JASU - Initiatives </h3>
                <p className="text-smallTextPhone list-disc  text-left md:text-regularText md:text-justify">Various programmes are conducted to help students to get a better understanding of the medical field.</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Health Camps:</strong> •	We organize health camps in underserved communities, providing medical check-ups and treatment services to those who need it most.</li>
                    <li><strong>Scholarship Programs:</strong> Our scholarship programs aim to support talented students from low-income backgrounds pursue their medical education.</li>
                    <li><strong>Community Training:</strong> We conduct training workshops for local healthcare providers, improving medical knowledge and skills in the community.</li>
                    <li><strong>Clinical Training:</strong> Gain invaluable hands-on experience in our private hospital, ensuring practical learning complements your theoretical studies effectively.</li>
                    <li><strong>Cultural Activities:</strong> Participate in diverse cultural events and activities that foster community engagement and enrich your educational experience.</li>
                    <li><strong>Hostel Facilities:</strong> Enjoy comfortable and secure accommodation with access to essential amenities, creating a conducive environment for your studies.</li>
                </ul>
            </section>

            {/* Recognitions & Accreditation */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Recognitions & Accreditation</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Recognized by WHO, UNESCO, NMC (India) and ECFMG</strong> •	Recognized by WHO, UNESCO, NMC (India) and ECFMG</li>
                    <li><strong>Features extensive FMGE/NExT coaching integrated into the curriculum from the first year</strong> •	Features extensive FMGE/NExT coaching integrated into the curriculum from the first year</li>
                    <li><strong>Indian qualifications supported; many Indian lecturers and mentorship available to support or give frequent FMGE based lectures to Indian students.</strong> •	Indian qualifications supported; many Indian lecturers and mentorship available to support or give frequent FMGE based lectures to Indian students.</li>
                    <li><strong>Acquired best FMGE rate.</strong> •	Acquired best FMGE rate.</li>
                </ul>
            </section>

            {/* MBBS Program Details */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">MBBS Program in JaSU</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Total 6 years duration (5 years academics + 1-year internship).</li>
                    <li>Tuition fees: $4,200 yearly</li>
                    <li>Hostel: $800 yearly</li>
                    <li>Mess: $1,200 yearly</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Ultra-modern hostel & Indian food</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Fully equipped and well-furnished ultra-modern hostels.</li>
                    <li>Indian cooks in hostels to prepare delicious Indian food.</li>
                    <li>Edurizon strives to serve the best food for students.</li>
                    <li>Separate accommodations for boys and girls.</li>
                    <li>Cost of Indian food: $1,200 yearly</li>
                </ul>
            </section>

            {/* Facilities & Support */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Facilities & Support</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Clinical exposure through university-affiliated teaching hospitals in Jalal-Abad</li>
                    <li>Modern infrastructure</li>
                    <li>Digital classrooms, well equipped labs, simulation centers, library, and on campus hostel</li>
                    <li>Promotion of research and community outreach, exemplified by medical camps in local communities.</li>
                </ul>
            </section>

            {/* Student Life & Community */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Student Life & Community</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Diverse multinational student body, including many Indian students.</li>
                    <li>Campus life includes Indian food in mess, secure hostels, and a multicultural environment.</li>
                </ul>
            </section>

            {/* Why Choose JaSU */}
            <div className="p-[8vw] md:p-[4vw] flex flex-col md:flex-row px-[6vw] md:px-[12.5vw]  gap-[5vw] md:gap-[2vw] mb-[10vw] md:mb-[4vw] items-center bg-linenChosen">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] text-black">
                    <div>
                        <h3 className="font-bold text-h5TextPhone md:text-h3Text leading-[120%] mb-[4vw] md:mb-[1vw]">Why Choose JaSU for MBBS?</h3>
                        <ul className="list-disc list-outside pl-[2vw] md:pl-[1.5vw] text-smallTextPhone md:text-regularText">
                            <li>A leading and most demanded Medical University among Indian students</li>
                            <li>High quality programs regulated and accredited by the Ministry of Education of Kyrgyzstan</li>
                            <li>Modern Academic programs</li>
                            <li>Best Medical University</li>
                            <li>Best infrastructure</li>
                            <li>Best FMGE ratio</li>
                            <li>Experienced and highly qualified Academic staff</li>
                            <li>Student-oriented environment</li>
                            <li>Low fee structure and low cost of living</li>
                            <li>Strong management with rich experience in the education industry</li>
                            <li>Robust, research-based course and curriculum</li>
                            <li>Focuses on holistic development: Learning opportunities, Community Support, Safety, Social Life, and Connection to Nature</li>
                            <li>Worldwide recognition</li>
                        </ul>
                    </div>
                </div>
                <Image src={"/assets/Images/mbbs-in-nepal/nepal2.png"} className="ml-auto w-full md:w-[32.5vw] h-auto" width={690} height={690} alt="jalal-abad"/>
            </div>

            {/* At a glance Section */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Jalal-Abad State University at a glance</h3>
                <ul className="text-smallTextPhone ml-[3vw] md:ml-[1.5vw] text-left gap-x-[1vw] md:text-regularText md:text-justify grid grid-cols-2">
                    <li className='font-bold'>o College name</li>
                    <li>Jalal-Abad State University</li>
                    <li className='font-bold'>o Year of establishment</li>
                    <li>1993</li>
                    <li className='font-bold'>o Recognition</li>
                    <li>WHO, UNESCO, NMC (India), ECFMG</li>
                    <li className='font-bold'>o Medium of instruction</li>
                    <li>English</li>
                    <li className='font-bold'>o Course duration</li>
                    <li>6 years (5+1)</li>
                    <li className='font-bold'>o Tuition Fees</li>
                    <li>$4,200 yearly</li>
                    <li className='font-bold'>o Hostel Fees</li>
                    <li>$800 yearly</li>
                    <li className='font-bold'>o Mess Fees</li>
                    <li>$1,200 yearly</li>
                    <li className='font-bold'>o NEET</li>
                    <li>Mandatory</li>
                    <li className='font-bold'>o Intake</li>
                    <li>September/October</li>
                    <li className='font-bold'>o Location</li>
                    <li>Jalal-Abad, Kyrgyzstan</li>
                </ul>
            </section>

            {/* Safety & Security */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">Safety & Security</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>24/7 basis security cover.</li>
                    <li>Proper CCTV have been placed at all appropriate locations.</li>
                    <li>Separate hostels for Boys and Girls.</li>
                    <li>Relaxing and peaceful stay that is conducive to learning is assured.</li>
                    <li>Numerous Indian restaurants are there in the market where students can enjoy Indian food.</li>
                    <li>Students are very well taken-care of during their entire stay in JAIU.</li>
                    <li>Considered a safe and student-friendly city.</li>
                    <li>Law enforcement is active; student ID is often sufficient for identification</li>
                </ul>
            </section>

            {/* JASU Library */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">JASU Library</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>High-Tech laboratories</li>
                    <li>Diverse literature is available in JASU library, which provides students with modern book fund, electronic resources and on digital carriers.</li>
                    <li>Electronic Scientific databases take an important part of the library resources, and this includes the literature determined under academic programs in all directions of the university programs.</li>
                    <li>Library is a structural unit of the University, which provides all kinds of personnel and students with modern books, as a kind of electronic and digital media resources.</li>
                    <li>An important part of the library resources is electronic library, which includes the literature provided by training program.</li>
                    <li>Student reading rooms and lounge.</li>
                    <li>Wide holdings of library books</li>
                </ul>
            </section>

            {/* Eligibility Table */}
            <ListedTable id={eligibilityData.id} section2={eligibilityData.section2} content={eligibilityData.content} />
            <ListedTable id={academicCalenderData.id} section2={academicCalenderData.section2} content={academicCalenderData.content} />

            {/* Admission Process */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">JASU Initial Admission Process</h3>
                <p className="text-smallTextPhone mb-[1vw] text-left md:text-regularText">Documents required:</p>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Copy of 10/12 Marksheet</li>
                    <li>Adhaar card copy</li>
                    <li>Passport</li>
                    <li>Neet score card</li>
                    <li>Passport-sized photos</li>
                </ul>
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">JASU Complete Admission Process</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[4vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li><strong>Step 1:</strong> Application form to be filled meticulously.</li>
                    <li><strong>Step 2:</strong> Submit educational certificates and supporting documents.</li>
                    <li><strong>Step 3:</strong> Receive admission letter from the University.</li>
                    <li><strong>Step 4:</strong> Apply for invitation.</li>
                    <li><strong>Step 5:</strong> On receipt of invitation, apply for visa.</li>
                    <li><strong>Step 6:</strong> On receipt of visa, departure schedule and flight tickets are arranged.</li>
                </ul>
            </section>

            {/* How to Reach Jalal-Abad */}
            <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
                <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left">How to reach Jalal-Abad, Kyrgyzstan</h3>
                <ul className="text-smallTextPhone list-disc ml-[3vw] md:ml-[1.5vw] mb-[2vw] md:mb-[1vw] text-left md:text-regularText md:text-justify">
                    <li>Well-connected by road and public transport.</li>
                    <li>6–8 hours by road from Bishkek to Jalal-Abad</li>
                    <li>25 minutes by domestic flight (Bishkek to Jalal-Abad)</li>
                    <li>Closest major international airport: Osh International Airport.</li>
                    <li>Students often fly into Bishkek or Osh and travel to Jalal-Abad by bus or taxi.</li>
                </ul>
            </section>
        </div>
        </>
    )
}

export default JalalAbadStateUniversity
