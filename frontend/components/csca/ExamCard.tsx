import React from "react";

type ExamCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export default function ExamCard({ label, value, helper }: ExamCardProps) {
  return (
    <div className="rounded-[4vw] md:rounded-[1.25vw] bg-linenChosen border border-black/10 dark:border-white/10 p-[4vw] md:p-[1.5vw] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[0.4vw] md:hover:-translate-y-[0.15vw]">
      <p className="text-smallTextPhone md:text-smallText font-semibold opacity-70">
        {label}
      </p>
      <p className="mt-[1.5vw] md:mt-[0.5vw] text-h6TextPhone md:text-h4Text font-bold leading-[120%]">
        {value}
      </p>
      {helper ? (
        <p className="mt-[1.5vw] md:mt-[0.6vw] text-regularTextPhone md:text-regularText opacity-80">
          {helper}
        </p>
      ) : null}
    </div>
  );
}

