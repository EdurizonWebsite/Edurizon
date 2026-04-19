
interface EligibilityCriteriaProps {
    id: string;
    countryName:string;
    data:string[][][];
}



const EligibilityCriteria = ({ id,data,countryName }: EligibilityCriteriaProps) => {
    return (
        <div className="flex flex-col mx-[6vw] md:mx-[12.5vw] gap-[2vw] md:gap-[4vw] ">
          <div className="flex flex-col gap-[1.5vw]">
          <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]">Eligibility Criteria</h3>
          <h5 className="text-center text-regularTextPhone md:text-h5Text font-bold opacity-80]">Are You Eligible to Study MBBS in {countryName}?</h5>
          </div>
          <div className="flex overflow-x-auto  no-scrollbar">
          <table className="w-full border-collapse border border-black dark:border-borderGreyChosen ">
            <thead>
              <tr className="bg-linenChosen dark:text-black text-regularTextPhone md:text-mediumText text-center">
                {data[0].map((highlight, index) => (
                  <th key={index} className="min-w-[200px] border font-semibold border-black dark:border-r-black dark:border-borderGreyChosen px-[.75vw] py-[.625vw] ">{highlight}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-smallTextPhone md:text-regularText align-top"> 
        
              {data.slice(1).map((row, i) => {
                const width=row.length;
                return(
                <tr key={i}>
                  {row.map((highlight, index) => (
                    <td key={index} className={`border   border-black dark:border-white px-[.75vw] py-[.625vw] w-1/${width} ${index==0?"font-semibold bg-linenChosen dark:text-black dark:border-b-black dark:border-r-black":"dark:text-white"}`}>
                      {index!=0?
                      (highlight.map((highlight, index) => (
                        <li className=" list-none " key={index}>- {highlight}</li>
                      ))
                      ):(highlight)}
                      </td>
                  ))}
                </tr>
                )
              })}
              
            </tbody>
          </table>
          </div>
        </div>
    );
    }

export default EligibilityCriteria;