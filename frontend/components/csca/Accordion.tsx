import React, { useMemo, useState } from "react";

export type AccordionItem = {
  id?: string;
  title: string;
  points: string[];
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
};

export default function Accordion({ items, defaultOpenId }: AccordionProps) {
  const firstId = items[0]?.id ?? "0";
  const normalized = useMemo(
    () =>
      items.map((it, idx) => ({
        id: it.id ?? String(idx),
        title: it.title,
        points: it.points,
      })),
    [items]
  );

  const [openId, setOpenId] = useState<string>(defaultOpenId ?? firstId);

  return (
    <div className="flex flex-col gap-[2vw] md:gap-[0.75vw]">
      {normalized.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-[4vw] md:rounded-[1.25vw] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? "" : item.id)}
              className="w-full flex items-center justify-between gap-[3vw] md:gap-[1vw] p-[4vw] md:p-[1.25vw] text-left transition-colors duration-200 hover:bg-linenChosen/60"
              aria-expanded={isOpen}
            >
              <span className="text-h6TextPhone md:text-h5Text font-bold leading-[130%]">
                {item.title}
              </span>
              <span
                className={[
                  "shrink-0 w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] rounded-full",
                  "border border-orangeChosen/30 bg-linenChosen text-orangeChosen",
                  "flex items-center justify-center transition-transform duration-200",
                  isOpen ? "rotate-45" : "rotate-0",
                ].join(" ")}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="w-[4vw] h-[4vw] md:w-[1vw] md:h-[1vw]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            <div
              className={[
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              ].join(" ")}
            >
              <div className="overflow-hidden">
                <div className="px-[4vw] md:px-[1.25vw] pb-[4vw] md:pb-[1.25vw]">
                  <ul className="list-disc pl-[6vw] md:pl-[1.25vw] text-regularTextPhone md:text-regularText opacity-90 leading-[170%]">
                    {item.points.map((p, i) => (
                      <li key={i} className="mb-[1vw] md:mb-[0.3vw]">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

