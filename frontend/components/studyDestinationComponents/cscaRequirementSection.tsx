import React from "react";
import Link from "next/link";
import Image from "next/image";

type CSCARequirementSectionProps = {
  id?: string;
};

export default function CSCARequirementSection({}: CSCARequirementSectionProps) {
  return (
    <section className="mx-[6vw] md:mx-[12.5vw] py-[4vw]">
      <div className="rounded-[5vw] md:rounded-[1.75vw] border border-black/10 dark:border-white/10 bg-linenChosen shadow-[0_16px_45px_rgba(0,0,0,0.10)] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-[6vw] md:gap-[2vw] p-[6vw] md:p-[2.5vw]">
          <div className="flex flex-col gap-[3vw] md:gap-[1vw] justify-center">
            <h3 className="text-h5TextPhone md:text-h3Text font-bold leading-[120%] text-left">
              CSCA Requirement for MBBS in China
            </h3>
            <p className="text-regularTextPhone md:text-regularText opacity-80 leading-[175%]">
              CSCA (China Scholastic Competency Assessment) is increasingly required or preferred by Chinese medical universities for international MBBS applicants. It validates academic readiness and supports admission and scholarship review.
            </p>

            <ul className="list-disc pl-[6vw] md:pl-[1.5vw] text-regularTextPhone md:text-regularText leading-[180%]">
              <li>Acts as an admission screening tool</li>
              <li>Used as a scholarship reference by universities</li>
              <li>Improves chances in top universities</li>
            </ul>

            <div className="flex flex-col md:flex-row gap-[3vw] md:gap-[1vw] mt-[2vw]">
              <Link
                href="/csca"
                className="rounded-full bg-orangeChosen text-white px-[6vw] md:px-[1.25vw] py-[3.25vw] md:py-[0.75vw] text-smallTextPhone md:text-smallText font-semibold text-center transition-all duration-200 hover:opacity-95"
              >
                View CSCA Details
              </Link>
              <Link
                href="/csca-syllabus"
                className="rounded-full border border-orangeChosen text-orangeChosen bg-white/70 dark:bg-black/30 px-[6vw] md:px-[1.25vw] py-[3.25vw] md:py-[0.75vw] text-smallTextPhone md:text-smallText font-semibold text-center transition-all duration-200 hover:bg-white"
              >
                View Syllabus
              </Link>
            </div>
          </div>

          <div className="relative rounded-[4vw] md:rounded-[1.25vw] overflow-hidden border border-black/10 dark:border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=70"
              alt="Online exam preparation and study"
              width={1600}
              height={1000}
              className="w-full h-[60vw] md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

