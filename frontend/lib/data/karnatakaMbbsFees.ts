import { SAPTHAGIRI_COLLEGE_SLUG } from "@/lib/mbbsIndiaCollegeSlugs";

export type KarnatakaFeeRow = {
  college: string;
  estb: number;
  govtQuotaFee: number;
  privateQuotaFee: number;
  nriMgtQuotaFee: number;
  slug?: string;
};

export const KARNATAKA_PRIVATE_FEE_TABLE: KarnatakaFeeRow[] = [
  {
    college: "Kempegowda Institute of Medical Sciences",
    estb: 1980,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 4311950,
  },
  {
    college: "Sri Basaveshwara Medical College & Hospital",
    estb: 1999,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 3511950,
  },
  {
    college: "BGS Global Institute of Medical Sciences",
    estb: 2013,
    govtQuotaFee: 153571,
    privateQuotaFee: 2215000,
    nriMgtQuotaFee: 4286950,
  },
  {
    college: "BGS Medical College and Hospital",
    estb: 2024,
    govtQuotaFee: 156621,
    privateQuotaFee: 2215000,
    nriMgtQuotaFee: 3515000,
  },
  {
    college: "Shridevi Institute of Medical Sciences and Research Hospital",
    estb: 2013,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 3861950,
  },
  {
    college: "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research",
    estb: 2020,
    govtQuotaFee: 156621,
    privateQuotaFee: 2215000,
    nriMgtQuotaFee: 3815000,
  },
  {
    college: "Siddaganga Medical College & Research Institute",
    estb: 2022,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 2861950,
  },
  {
    college: "M.V.J. Medical College and Research Hospital",
    estb: 1997,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 4011950,
  },
  {
    college: "Vydehi Institute of Medical Sciences and Research Centre",
    estb: 2002,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 4411950,
  },
  {
    college: "Sapthagiri Institute of Medical Sciences and Research Centre",
    estb: 2011,
    govtQuotaFee: 182371,
    privateQuotaFee: 2240750,
    nriMgtQuotaFee: 4540750,
    slug: SAPTHAGIRI_COLLEGE_SLUG,
  },
  {
    college: "Akash Institute of Medical Sciences and Research Centre",
    estb: 2016,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 3611950,
  },
  {
    college: "Khaja Bande Navaz Institute of Medical Sciences",
    estb: 2000,
    govtQuotaFee: 156621,
    privateQuotaFee: 1629965,
    nriMgtQuotaFee: 3215000,
  },
  {
    college: "Al-Ameen Medical College",
    estb: 1984,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 2711950,
  },
  {
    college: "Kanachur Institute of Medical Sciences",
    estb: 2016,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 3211950,
  },
  {
    college: "Dr. BR Ambedkar Medical College, Banglore",
    estb: 1980,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 3511950,
  },
  {
    college: "Adichunchanagiri Institute of Medical Sciences",
    estb: 1985,
    govtQuotaFee: 156621,
    privateQuotaFee: 2215000,
    nriMgtQuotaFee: 3415000,
  },
  {
    college: "SDM Medical College of Medical Sciences",
    estb: 2003,
    govtQuotaFee: 156621,
    privateQuotaFee: 2015000,
    nriMgtQuotaFee: 3515000,
  },
  {
    college: "Srinivasa Institute of Medical Research",
    estb: 2011,
    govtQuotaFee: 166621,
    privateQuotaFee: 2225000,
    nriMgtQuotaFee: 2825000,
  },
  {
    college: "Sri Madhusudan Sai Institute of Medical Sciences",
    estb: 2023,
    govtQuotaFee: 141621,
    privateQuotaFee: 2200000,
    nriMgtQuotaFee: 4500000,
  },
  {
    college: "PES University Institute of Medical Sciences and Research, Banglore",
    estb: 2024,
    govtQuotaFee: 156621,
    privateQuotaFee: 2215000,
    nriMgtQuotaFee: 3915000,
  },
  {
    college: "Navodaya Medical College, Navodaya Nagar, Raichur",
    estb: 2002,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 2736950,
  },
  {
    college: "Subbaiah Institute of Medical College",
    estb: 2012,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 2911950,
  },
  {
    college: "The Oxford Medical College Hospital and Research Center, Banglore",
    estb: 2014,
    govtQuotaFee: 153571,
    privateQuotaFee: 1200117,
    nriMgtQuotaFee: 3611950,
  },
];

export function formatKarnatakaFee(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
