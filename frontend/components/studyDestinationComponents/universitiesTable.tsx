import { TransitionLink } from "@/utils/TransitionLink";

interface UniversitiesProps {
    id: string;
    countryName:string;
    para:string;
    data:{
        universityName:string;
        location:string;
        annualFees:string;
        gloablRanking:string;
        highlights:string[];
        href:string;
      }[];
}



const Universities = ({ id,data,countryName,para }: UniversitiesProps) => {
    return (
        <div id='universities in country' className="flex flex-col mx-[6vw] md:mx-[12.5vw] mb-[5vw] md:mb-[4vw] gap-[3vw] md:gap-[4vw]">
          <div>
          <h3 className="text-center text-h5TextPhone md:text-h3Text font-bold leading-[120%]">Top Medical Colleges in {countryName} <br/>For Indian Students</h3>
          <p className="text-regularTextPhone md:text-regularText text-justify">{para}</p>
          </div>
          <div className="flex overflow-x-auto  no-scrollbar">
          <table className="overflow-auto border-collapse border border-black dark:border-borderGreyChosen ">
            <thead className="">
              <tr className="bg-linenChosen dark:text-black text-regularTextPhone md:text-mediumText text-center">
                <th className="min-w-[200px] md:min-w-0 border font-semibold border-black dark:border-r-black  dark:border-borderGreyChosen dark:border-b-black px-[.75vw] py-[.625vw] ">University</th>
                <th className="min-w-[200px] md:min-w-0 border font-semibold border-black dark:border-r-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw] ">Location</th>
                <th className="min-w-[200px] md:min-w-0 border font-semibold border-black dark:border-r-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw] ">Annual Fee (Rubble/$)</th>
                {/* <th className="min-w-[200px] md:min-w-0 border font-semibold border-black dark:border-r-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw] ">Global Ranking</th> */}
                <th className="min-w-[200px] md:min-w-0 border font-semibold border-black  dark:border-borderGreyChosen px-[.75vw] py-[.625vw] ">Key Highlights</th>
                <th className="min-w-[200px] md:min-w-0 border font-semibold border-black  dark:border-borderGreyChosen px-[.75vw] py-[.625vw] ">Know More</th>
              </tr>
            </thead>
            <tbody className="text-smallTextPhone md:text-regularText align-top"> 
            {data.map((university, i) => (
              <tr key={i}>
                <td className=" border dark:text-black bg-linenChosen underline border-black  dark:border-borderGreyChosen dark:border-r-black  dark:border-b-black px-[.75vw] py-[.625vw] font-semibold">
                <TransitionLink href={university.href}>
                  <p className="text-black text-left hover:text-orange-400 duration-300 transition-colors ease-in-out">
                  
                {university.universityName}</p>
                </TransitionLink></td>
                
                <td className="border border-black dark:border-white px-[.75vw] py-[.625vw]  ">{university.location}</td>
                <td className="border border-black dark:border-white px-[.75vw] py-[.625vw] ">{university.annualFees}</td>
                {/* <td className="border border-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw] ">{university.gloablRanking}</td> */}
                <td className="border border-black dark:border-white px-[.75vw] py-[.625vw] ">
                {university.highlights.map((highlight, index) => (
                  <li className=" list-none " key={index}>- {highlight}</li>
                ))}</td>
                <td className="border border-black dark:border-white px-[.75vw] whitespace-nowrap py-[.625vw] ">
                <TransitionLink href={university.href}>
                Know More
                </TransitionLink></td>
              </tr>
            ))}          
            </tbody>
          </table>
          </div>
      </div>
    );
    }

export default Universities;