import React from "react";
import { CollegeDataOverviewInterface } from "./collegeDataOverviewInterface";

const CollegeOverviewTable = ({ title, data }: { title: string, data:CollegeDataOverviewInterface[]  }) => {
  return (
    <section className="mx-[6vw] md:mx-[12.5vw] pb-[10vw] md:pb-[4vw]">
      <h3 className="text-h6TextPhone leading-[120%] md:text-h5Text text-left mb-[4vw] md:mb-[1.5vw]">{title}</h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-smallTextPhone md:text-regularText">
          <tbody>
            {data.map((item, index) => (
              <tr key={index}   
                className={index !== data.length - 1 ? "border-b" : ""}
              >
                <td className="font-bold py-[2vw] md:py-[0.75vw] pr-[4vw] md:pr-[2vw] align-top">{item.label}</td>
                <td className="py-[2vw] md:py-[0.75vw]">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CollegeOverviewTable;