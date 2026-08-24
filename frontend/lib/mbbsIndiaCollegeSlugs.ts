export function slugifyMbbsCollegeName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getKarnatakaCollegePagePath(slug: string) {
  return `/mbbs-in-india/karnataka/${slug}`;
}

export const SAPTHAGIRI_COLLEGE_SLUG =
  "sapthagiri-institute-of-medical-sciences-and-research-centre";
