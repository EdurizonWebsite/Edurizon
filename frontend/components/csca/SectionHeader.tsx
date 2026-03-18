import React from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} gap-[1.5vw] md:gap-[0.75vw]`}>
      {eyebrow ? (
        <p className="text-smallTextPhone md:text-smallText font-semibold text-orangeChosen tracking-wide">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-h4TextPhone md:text-h3Text font-bold leading-[120%]">
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-regularTextPhone md:text-regularText ${isCenter ? "md:w-[58vw]" : "md:w-[52vw]"} opacity-80`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

