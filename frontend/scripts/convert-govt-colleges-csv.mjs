import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseCsvLine(line) {
  const parts = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (c === "," && !inQuotes) {
      parts.push(cur);
      cur = "";
      continue;
    }
    cur += c;
  }
  parts.push(cur);
  return parts;
}

const csvPath =
  process.argv[2] ||
  "C:/Users/noddy/Downloads/govt_medical_colleges_india_2026.csv";
const outPath = path.join(
  __dirname,
  "../lib/data/govtMedicalColleges2026.json"
);

const csv = fs.readFileSync(csvPath, "utf8");
const lines = csv.trim().split(/\r?\n/).slice(1);
const rows = [];
const byState = {};
let totalSeats = 0;

for (const line of lines) {
  const parts = parseCsvLine(line);
  if (parts.length < 7) {
    console.error("Skipping line:", line.slice(0, 100));
    continue;
  }

  const [sno, state, college, university, management, estb, seats] = parts;
  const row = {
    sno: Number(sno),
    state: state.trim(),
    college: college.trim(),
    university: university.trim(),
    management: management.trim(),
    estb: Number(estb),
    seats: Number(seats),
  };

  rows.push(row);
  if (!byState[row.state]) {
    byState[row.state] = { colleges: [], seats: 0 };
  }
  byState[row.state].colleges.push(row);
  byState[row.state].seats += row.seats;
  totalSeats += row.seats;
}

const stateOrder = Object.keys(byState).sort((a, b) => a.localeCompare(b));
const grouped = stateOrder.map((state) => ({
  state,
  colleges: byState[state].colleges,
  seats: byState[state].seats,
  collegeCount: byState[state].colleges.length,
}));

const output = {
  totals: {
    colleges: rows.length,
    seats: totalSeats,
    states: grouped.length,
  },
  stateSummary: grouped.map(({ state, collegeCount, seats }) => ({
    state,
    colleges: collegeCount,
    seats,
  })),
  byState: grouped,
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));

console.log(
  `Wrote ${rows.length} colleges, ${totalSeats} seats, ${grouped.length} states`
);
