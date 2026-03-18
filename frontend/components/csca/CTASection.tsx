import React from "react";
import Link from "next/link";
import { TitleButton } from "@/components/Buttons";

type CTASectionProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <div className="mx-[6vw] md:mx-[12.5vw]">
      <div className="rounded-[5vw] md:rounded-[1.75vw] border border-black/10 dark:border-white/10 bg-linenChosen shadow-[0_16px_45px_rgba(0,0,0,0.10)] p-[5vw] md:p-[2vw] flex flex-col md:flex-row items-start md:items-center justify-between gap-[4vw] md:gap-[2vw]">
        <div className="flex flex-col gap-[1.5vw] md:gap-[0.6vw]">
          <h3 className="text-h5TextPhone md:text-h3Text font-bold leading-[120%] text-left">
            {title}
          </h3>
          <p className="text-regularTextPhone md:text-regularText opacity-80 md:w-[44vw]">
            {description}
          </p>
        </div>

        <div className="flex flex-col  gap-[3vw] md:gap-[1vw] w-full md:w-auto">
          <Link href={primaryCta.href} className="w-full md:w-auto">
            <TitleButton
              btnTitle={primaryCta.label}
              btnWidth={12.5}
              btnHeight={3.25}
              btnRadius={6.25}
              btnWidthPhone={80}
              btnHeightPhone={12}
              btnRadiusPhone={999}
              className="w-full"
            />
          </Link>

          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="w-full md:w-auto rounded-full border border-orangeChosen text-orangeChosen bg-white/70 dark:bg-black/30 px-[6vw] md:px-[1.25vw] py-[3.25vw] md:py-[0.75vw] text-smallTextPhone md:text-smallText font-semibold text-center transition-all duration-200 hover:bg-white"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

