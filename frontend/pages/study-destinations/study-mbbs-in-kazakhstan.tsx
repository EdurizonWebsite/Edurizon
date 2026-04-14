import Breadcrumbs from "@/components/Breadcumbs";
import RelatedCountries from "@/components/studyDestinationComponents/relatedCountries";
import { TransitionLink } from "@/utils/TransitionLink";
import Link from "next/link";
import Image from "next/image";
const NewPage=()=>{
    return(
        <div className="text-black pt-[15vw]  md:pt-[4vw]">
             <section className="country-inner-banner dark:bg-black">
                <div className="container pt-[4vw] pb-[4vw] md:pb-0">
                    <div className="flex flex-row align-items-center ">
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-9 ">
                        <div className="heading">
                        <h2 className=" text-h5TextPhone md:text-h5Text">Study in Kazakhstan</h2>
                        </div>
                        <Breadcrumbs/>
                    </div>
                    <div className="hidden md:block col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 text-end ml-auto">
                        <Image alt="banglades flag" width={100} height={100} src="/assets/Images/country-flag/kazakhstan-flag.png" className="img-fluid" />
                    </div>
                    </div>
                </div>
            </section>
            <section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row g-0">
      <div className="immigrate-bg">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="flex justify-center items-center overflow-hidden  h-[37.25vw]">
                        <Image alt="hi" src="/assets/Images/slider/kazakhstan-slider.jpg"  className=" overflow-hidden contain object-cover h-full w-full" width={1000} height={1000} />
                    </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading">
              <h3 className="pt-4 text-h5TextPhone md:text-h5Text">About Kazakhstan</h3>
            </div>
            <p>
              Kazakhstan is a country in central Asia and the Ninth largest country in the world. The country is bordered with China, Russia, Kyrgyzstan, Turkmenistan and Uzbekistan and a large part of Caspian Sea. Nur sultan is the capital
              city of Kazakhstan which was moved in 1997 from Almaty. The local language of Kazakhstan is Kazakh but Russian language is also widely used.
            </p>
            <p>
              Currently the country has a population of about 18 million people. Almaty is the largest city of Kazakhstan and is one of the most developed cities. The currency of Kazakhstan is Tenge (KZT).Some of the largest cities of
              Kazakhstan are Almaty, Shymkent, Karaganda, Nur-sultan, and Pavlodar & Aklobe. Islam is the main religion of Kazakhstan.
            </p>
            <p>Some of the major reasons to visit Kazakhstan are the beauty of the country. Baiterak Tower, Big Almaty Lake, Shymbulak ski resort and Medeo a high mountain open air arena are some of the major attractions of the city.</p>
            <p>Students who come to Study Mbbs in Kazakhstan can enjoy the beauty of the country alongside his medical studies.</p>
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
            <h3 className="text-h5TextPhone md:text-h5Text">MBBS in Kazakhstan</h3>
          </div>
          <p>
            Mbbs in Kazakhstan is highly appreciated and admired by every Indian student. More than 1000 students from almost every country come to study MBBS from Kazakhstan. The medical course provided by the university is quite nominal
            for Indian students which help them to save a great amount.
          </p>
          <p>
            All the Medical Universities of Kazakhstan are recognized by NMC, WHO, USMLE, GMC and IMED. It is a dream of every student to pursue Mbbs from Abroad. But not every individual is able to meet the budget of European countries.
            Medical Universities of Kazakhstan.
          </p>
          <p>
            No doubt, Indian students have a lot of options to study Mbbs from different countries but Kazakhstan because of its high-quality of education has set up its own true benchmark. Clinical training of the University is truly worth
            as compared to other countries.
          </p>
          <p>Admission process is also very easy and simple for Mbbs in Kazakhstan Medical Universities. Kazakhstan is a country in Central Asia and the medical degree provided by the University is valued across the globe.</p>
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
            <h3 className="text-h5TextPhone md:text-h5Text">Benefits of studying MBBS in Kazakhstan</h3>
          </div>
          <ul className="points-two">
            <li>Affordable fees structure</li>
            <li>Total duration of the course is only for 5 years.</li>
            <li>Indian food is easily available in almost all the universities.</li>
            <li>Medical Universities are recognized by NMC &amp; WHO.</li>
            <li>Quality education assured to all the students.</li>
            <li>World className facility with main focus on practical training</li>
            <li>Direct admission without any entrance test and donation of fees.</li>
            <li>No requirement of English proficiency test such as IELTS and TOEFL.</li>
            <li>Despite Russian being the official language of Kazakhstan, International students are taught in English language and especially English medium course was introduced for the International students.</li>
            <li>Pass out students of the University are all successfully working in different countries as medical practitioners and Doctors.</li>
            <li>The Medical Universities in Kazakhstan provide admission in a very simpler way without any difficulty.</li>
          </ul>
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
            <h3 className=" text-h5TextPhone md:text-h5Text">Popular Universities to Study in Kazakhstan</h3>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-dark">
                <tr className="text-white">
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Image</th>
                  <th scope="col">University Name</th>
                  <th scope="col">Tuition Fees(USD)</th>
                  <th scope="col">Duration</th>
                  <th scope="col">More Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1.</th>
                  <td>
                    <TransitionLink href="/study-destinations/study-mbbs-in-kazakhstan/kazakh-national-medical-university">
                      <Image width={100} height={100} src="/assets/Images/mbbs-in-kazakhstan/university-logo/kazakhstan-national-medical-university-logo.png" className="img-fluid univ-logo-size" alt="Kazakhstan National Medical University" title="Kazakhstan National Medical University" />
                    </TransitionLink>
                  </td>
                  <td>
                    <b><TransitionLink href="/study-destinations/study-mbbs-in-kazakhstan/kazakh-national-medical-university">Kazakh National Medical University</TransitionLink></b>
                  </td>
                  <td>Contact Us For Details</td>
                  <td>5 Years</td>
                  <td><Link href="/study-destinations/study-mbbs-in-kazakhstan/kazakh-national-medical-university"  className="btn-custom btn-univ-detail">Read More</Link></td>
                </tr>
                <tr>
                <th scope="row">2.</th>
                  <td>
                    <TransitionLink href="/study-destinations/study-mbbs-in-kazakhstan/west-kazakhstan-marat-ospanov-medical-university">
                      <Image  width={100} height={100} src="/assets/Images/mbbs-in-kazakhstan/university-logo/west-kazakhstan-medical-university-logo.png" className="img-fluid univ-logo-size" alt="West Kazakhstan Medical University" title="West Kazakhstan Medical University" />
                    </TransitionLink>
                  </td>
                  <td>
                    <b><TransitionLink href="/study-destinations/study-mbbs-in-kazakhstan/west-kazakhstan-marat-ospanov-medical-university">West Kazakhstan Marat Ospanov Medical University</TransitionLink></b>
                  </td>
                  <td>Contact Us For Details</td>
                  <td>5 Years</td>
                  <td><Link href="/study-destinations/study-mbbs-in-kazakhstan/west-kazakhstan-marat-ospanov-medical-university" className="btn-custom btn-univ-detail">Read More</Link></td>
                </tr>
                <tr>
                  <th scope="row">3.</th>
                  <td>
                    <TransitionLink href="/study-destinations/study-mbbs-in-kazakhstan/al-farabi-kazakh-national-university">
                    <Image  width={100} height={100}
                      src="/assets/Images/mbbs-in-kazakhstan/university-logo/al-farabi-kazakh-national-university-logo.jpeg"
                      className="img-fluid univ-logo-size"
                      alt="Al-Farabi Kazakh National University"
                      title="Al-Farabi Kazakh National University"
                    />
                    </TransitionLink>
                  </td>
                  <td><b><TransitionLink href="/study-destinations/study-mbbs-in-kazakhstan/al-farabi-kazakh-national-university">Al-Farabi Kazakh National University</TransitionLink></b></td>
                  <td>Contact Us For Details</td>
                  <td>5 Years</td>
                  <td><Link href="/study-destinations/study-mbbs-in-kazakhstan/al-farabi-kazakh-national-university" className="btn-custom btn-univ-detail">Read More</Link></td>
                </tr>
                <tr>
                  <th scope="row">4.</th>
                  <td><Image width={100} height={100} src="/assets/Images/mbbs-in-kazakhstan/university-logo/asthana-medical-university-logo.jpeg" className="img-fluid univ-logo-size" alt="Asthana Medical University" title="Asthana Medical University" /></td>
                  <td><b>Asthana Medical University</b></td>
                  <td>$3,200</td>
                  <td>5 Years</td>
                  <td><a href="#" className="btn-custom btn-univ-detail">Read More</a></td>
                </tr>
                <tr>
                  <th scope="row">5.</th>
                  <td><Image  width={100} height={100} src="/assets/Images/mbbs-in-kazakhstan/university-logo/semey-state-medical-university-logo.png" className="img-fluid univ-logo-size" alt="Semey State Medical University" title="Semey State Medical University" /></td>
                  <td><b>Semey State Medical University</b></td>
                  <td>$3,100</td>
                  <td>5 Years</td>
                  <td><a href="#" className="btn-custom btn-univ-detail">Read More</a></td>
                </tr>
                <tr>
                  <th scope="row">6.</th>
                  <td><Image width={100} height={100} src="/assets/Images/mbbs-in-kazakhstan/university-logo/international-medical-school-logo.png" className="img-fluid univ-logo-size" alt="International Medical School" title="International Medical School" /></td>
                  <td><b>International Medical School</b></td>
                  <td>$3,500</td>
                  <td>5 Years</td>
                  <td><a href="#" className="btn-custom btn-univ-detail">Read More</a></td>
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
  <div className="container">
    <div className="row g-0">
      <div className="immigrate-bg">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="heading">
            <h3 className="text-h5TextPhone md:text-h5Text">Relation of Kazakhstan with India</h3>
          </div>
          <p>
            India and Kazakhstan relationship has gone a long way in history. There has been a good exchange of thoughts, ideas and goods from the middle ages. Indian Prime Minister Narendra Modi visited Kazakhstan twice in the year 2015
            and 2017.After the country Kazakhstan became independent in 1991, the relationship between the two countries became more strong. In 2009 the president Nursultan Nazarbayev’s visited India and became good strategic partners.
          </p>
          <p>
            Kazakhstan is very strong in the area of energy, so there are a lot of opportunities for India to invest in oil and gas sector. The country also has enough uranium and India is interested in ferroalloys, Uranium and Kazakhstan’s
            oil. On the other hand Kazakhstan imports medicines and tea from India.
          </p>
          <p>
            Modi said in his joint presser with Kazakh President that nuclear cooperation is a key pillar of partnership. He said Kazakhstan was one of the first country with which India has launched civil nuclear cooperation through a
            uranium purchase contract. We are pleased to have a much larger second contract now. Upgrading the MoU on defence ties, the agreement on defence and military-technical cooperation would further widen the scope of bilateral
            defence cooperation. Further both the countries have developed a close collaboration in fighting religious terrorism and extremism as well as promotion regional security. Both the countries have also held joint military
            exercises in Kazakhstan in 2016 and in Himachal Pradesh region in 2017.
          </p>
          <p>
            The Kazakh national firm Kazmunay Gaz had also offered ONGC for Indian participation in petrochemical industrial projects in the Atirau and Akhtau regions. Both nations have also sought to establish extensive collaboration and
            commerce in information technology, space research, banking and increasing volume of bilateral trade. India has offered Kazakhstan $1,000,000,000 in loans while the latter has granted major tax concessions to Indian companies.
            Kazakhstan has also sought to negotiate a multilateral agreement with Iran and Turkmenistan to create a transport corridor to India to ensure a reliable trade route and provide Kazakhstan commercial and shipping access to the
            warm water ports of India.
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
            <h3 className="text-h5TextPhone md:text-h5Text">Admission Process of MBBS in Kazakhstan</h3>
          </div>
          <p>
            Medical aspirants who are not able to pay the high fees of universities in India can relax as Mbbs in Kazakhstan has very affordable fees structure. It is very easy to get admission in Kazakhstan only if you have the required
            budget. Tuition fees and the living cost are very affordable within your budget. The country has many good reputed universities to offer at a reasonable budget.
          </p>
          <div className="heading">
            <h3 className="pt-4 text-h5TextPhone md:text-h5Text">Eligibility Criteria</h3>
          </div>
          <ul className="points-two">
            <li>Minimum 50% marks is required in PCB for admission</li>
            <li>An age criterion is minimum 17 yrs at the time of admission.</li>
            <li>NEET score card is mandatory with passing marks</li>
          </ul>
          <div className="heading">
            <h3 className="pt-4 text-h5TextPhone md:text-h5Text">Documents required for Admission</h3>
          </div>
          <ul className="points-two">
            <li>10th &amp; 12th Marksheet</li>
            <li>A copy of Passport</li>
            <li>Passport size photos</li>
            <li>Bank statement</li>
            <li>Birth certificate</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section> 
{/* <section className="inner-page-bg">
  <div className="container">
    <div className="row g-0">
      <div className="immigrate-bg">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-12">
            <div className="heading">
              <h3 className="text-h5TextPhone md:text-h5Text">Edurizon Pvt. Ltd. Student Reviews</h3>
            </div>
          </div>
        </div>
        <div className="row grid ">
          <div className="col-xl-12 ">
            <div id="edurizon-videos " className="grid grid-cols-2 md:grid-cols-4 gap-[1vw] owl-carousel">
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/psO_4DIJlFY"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div>
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/uecmbVRw4b4"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div>
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/79nLuFGiEi8"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div>
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/GLeOo2O4t-8"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div>
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/mFQ-XUbRxFs"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div>
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/Mw_DG67wzdM"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div>
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/7c1DZGDzQLw"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div> 
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/Mw_DG67wzdM"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div> 
              <div className="edu-videos">
                <iframe
                  width="100%"
                  className="h-[100px] md:h-[250px]"
                  src="https://www.youtube.com/embed/WJqGcMwJOP8"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
<section className="inner-page-bg dark:bg-black">
  <div className="container">
    <div className="row g-0">
      <div className="immigrate-bg">
        <RelatedCountries/>
      </div>
    </div>
  </div>
  </section>
        </div>
    )
}

export default NewPage;