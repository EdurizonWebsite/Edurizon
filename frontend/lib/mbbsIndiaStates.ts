import govtData from "@/lib/data/govtMedicalColleges2026.json";
import privateData from "@/lib/data/privateMedicalColleges2026.json";

const STATE_ALIASES: Record<string, string> = {
  Chhattisgarh: "Chattisgarh",
  "Jammu and Kashmir": "Jammu & Kashmir",
  Puducherry: "Pondicherry",
};

export function normalizeMbbsIndiaState(state: string) {
  return STATE_ALIASES[state] || state;
}

const mergedStates = new Set<string>([
  ...govtData.stateSummary.map((item) => item.state),
  ...privateData.stateSummary.map((item) => item.state),
]);

export const MBBS_INDIA_STATES = [...mergedStates]
  .map(normalizeMbbsIndiaState)
  .filter((state, index, arr) => arr.indexOf(state) === index)
  .sort((a, b) => a.localeCompare(b));

export const MBBS_INDIA_STATE_PAGES: Record<string, string> = {
  Karnataka: "/mbbs-in-india/karnataka",
};

export const MBBS_INDIA_STATE_SLIDES = MBBS_INDIA_STATES.map((title) => ({
  title,
  href:
    MBBS_INDIA_STATE_PAGES[title] ??
    `/mbbs-in-india/state-wise-institutes?state=${encodeURIComponent(title)}`,
}));
