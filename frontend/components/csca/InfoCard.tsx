import React from "react";

type InfoCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function InfoCard({ title, description, icon, className = "" }: InfoCardProps) {
  return (
    <div
      className={[
        "group rounded-[4vw] md:rounded-[1.25vw] border border-black/10 dark:border-white/10",
        "bg-white/80 dark:bg-black/40 backdrop-blur",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "p-[4vw] md:p-[1.5vw] transition-all duration-300",
        "hover:-translate-y-[0.4vw] md:hover:-translate-y-[0.15vw] hover:shadow-[0_16px_45px_rgba(0,0,0,0.10)]",
        className,
      ].join(" ")}
    >
      <div className="flex items-start gap-[3vw] md:gap-[0.9vw]">
        {icon ? (
          <div className="shrink-0 w-[10vw] h-[10vw] md:w-[2.75vw] md:h-[2.75vw] rounded-full bg-linenChosen flex items-center justify-center border border-orangeChosen/30">
            <div className="text-orangeChosen">{icon}</div>
          </div>
        ) : null}
        <div className="flex flex-col gap-[1vw] md:gap-[0.35vw]">
          <h3 className="text-h6TextPhone md:text-h5Text font-bold leading-[130%]">
            {title}
          </h3>
          <p className="text-regularTextPhone md:text-regularText opacity-80 leading-[170%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

