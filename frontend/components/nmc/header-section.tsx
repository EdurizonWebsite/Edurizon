import Image from "next/image";

type NMCHeaderProps = {
  onExploreClick?: () => void;
  onDownloadClick?: () => void;
};

export default function NMCHeader({
  onExploreClick,
  onDownloadClick,
}: NMCHeaderProps) {
    
  return (
    
    <section className="w-full px-[5vw] md:px-[7.5vw]">
      <div className="w-full  flex flex-col md:flex-row  items-center relative z-10 ">
        <div className="space-y-8 mr-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full  bg-linenChosen text-[#A14000] font-label text-smallTextPhone md:text-smallText font-semibold">
            <span className="material-symbols-outlined text-sm">
                <svg className="size-6" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.43333 12.25L3.325 10.3833L1.225 9.91667L1.42917 7.75833L0 6.125L1.42917 4.49167L1.225 2.33333L3.325 1.86667L4.43333 0L6.41667 0.845833L8.4 0L9.50833 1.86667L11.6083 2.33333L11.4042 4.49167L12.8333 6.125L11.4042 7.75833L11.6083 9.91667L9.50833 10.3833L8.4 12.25L6.41667 11.4042L4.43333 12.25V12.25M4.92917 10.7625L6.41667 10.1208L7.93333 10.7625L8.75 9.3625L10.3542 8.98333L10.2083 7.35L11.2875 6.125L10.2083 4.87083L10.3542 3.2375L8.75 2.8875L7.90417 1.4875L6.41667 2.12917L4.9 1.4875L4.08333 2.8875L2.47917 3.2375L2.625 4.87083L1.54583 6.125L2.625 7.35L2.47917 9.0125L4.08333 9.3625L4.92917 10.7625V10.7625M6.41667 6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125M5.80417 8.19583L9.1 4.9L8.28333 4.05417L5.80417 6.53333L4.55 5.30833L3.73333 6.125L5.80417 8.19583V8.19583" fill="#A14000"/>
                </svg>
            </span>
            Official Regulatory Compliance
          </div>
          <h1 className="text-5xl md:text-h1Text font-headline font-extrabold text-on-surface tracking-[-0.03em] leading-[1.1]">
            NMC Guidelines <br />
            <span className="text-[#A14000]">&amp; Gazette</span>
          </h1>
          <p className="text-regularTextPhone md:text-regularText md:max-w-[37.5vw] text-on-surface-variant  leading-relaxed">
            Access official NMC regulations and country-wise medical eligibility
            guidelines to ensure your international medical degree is fully
            recognized in India.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onExploreClick}
              className="bg-[#A14000] text-white px-[16px] md:px-[1.5vw] py-[12px] md:py-[1vw] rounded-full font-bold text-regularTextPhone md:text-mediumText hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-primary/20"
            >
              Explore Guidelines
            </button>
            <button
              type="button"
              onClick={onDownloadClick}
              className="flex items-center gap-2 px-[16px] md:px-[1.5vw] py-[12px] md:py-[1vw] rounded-full font-bold text-regularTextPhone md:text-mediumText border-2 border-paleOrangeChosen hover:bg-paleOrangeChosen transition-all duration-300"
            >
              <span className="material-symbols-outlined">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12V12M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14V14V14H14V14V14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2V16" fill="#1F1B18"/>
                </svg>
              </span>
              Download Full PDF
            </button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative w-full h-[37.5vw] rounded-3xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              data-alt="Modern medical university campus with glass architecture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxLUY_BaA7nUbaCdNEt-FEfA7nZtTl0zRRLrU_-8DaauslQRLgztvioixt5pmM856YSowW9fUwEzrasbQVZJfiB8ZGHAGmCmNKQB1xk46lQKtp3hWP4qP8NRhhgw41R_S88kpefBnpmCO1Ds-N_rtrc5oC4P51gatbp2kJEa99k88g-oDTlLdngqj0YSwqK-cwx3j2A6Ue3vm1dlVQCRgoPqP5vbDdAtMuXQa_wXb5702O_n6UuctlB4JikfNYH4vPV2_zxES32gk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#A14000] rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 19V17H12V19H0V19M5.65 14.15L0 8.5L2.1 6.35L7.8 12L5.65 14.15V14.15M12 7.8L6.35 2.1L8.5 0L14.15 5.65L12 7.8V7.8M16.6 18L3.55 4.95L4.95 3.55L18 16.6L16.6 18V18" fill="white"/>
                    </svg>
                  </span>
                </div>
                <div>
                  <div className="font-bold text-[# 1F1B18]">
                    FMGL Regulations 2021
                  </div>
                  <div className="text-tinyTextPhone   md:text-tinyText text-[#584238]">
                    Last updated October 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
