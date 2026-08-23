import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const excelPath =
  process.argv[2] ||
  "C:/Users/noddy/OneDrive/Desktop/Private Universities.xlsx";
const outPath = path.join(
  __dirname,
  "../lib/data/privateMedicalColleges2026.json"
);

const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets["Sheet1"];
const rawRows = XLSX.utils.sheet_to_json(sheet).slice(1);

const rows = rawRows
  .map((row) => {
    const sno = Number(row["Seat for AY 2026-27"]);
    const state = String(row.__EMPTY || "").trim();
    const college = String(row.__EMPTY_1 || "")
      .trim()
      .replace(/\r?\n/g, " ");
    const status = String(row.__EMPTY_2 || "").trim();
    const seatsRenewed = Number(row.__EMPTY_3) || 0;
    const seatsIncreased = Number(row.__EMPTY_4) || 0;
    const totalSeats = Number(row.__EMPTY_5) || 0;

    return { sno, state, college, status, seatsRenewed, seatsIncreased, totalSeats };
  })
  .filter(
    (row) =>
      Number.isFinite(row.sno) &&
      row.state &&
      row.state.toLowerCase() !== "state" &&
      row.college &&
      row.college.toLowerCase() !== "college name"
  );

const byStateMap = {};
let totalSeats = 0;

for (const row of rows) {
  if (!byStateMap[row.state]) {
    byStateMap[row.state] = { colleges: [], seats: 0 };
  }
  byStateMap[row.state].colleges.push(row);
  byStateMap[row.state].seats += row.totalSeats;
  totalSeats += row.totalSeats;
}

const normalizeState = (state) => {
  if (state === "HARYANA") return "Haryana";
  if (state === "Chattisgarh") return "Chhattisgarh";
  return state;
};

const mergedByState = {};
for (const row of rows) {
  const state = normalizeState(row.state);
  const normalizedRow = { ...row, state };
  if (!mergedByState[state]) {
    mergedByState[state] = { colleges: [], seats: 0 };
  }
  mergedByState[state].colleges.push(normalizedRow);
  mergedByState[state].seats += normalizedRow.totalSeats;
}

const byState = Object.keys(mergedByState)
  .sort((a, b) => a.localeCompare(b))
  .map((state) => ({
    state,
    colleges: mergedByState[state].colleges,
    seats: mergedByState[state].seats,
    collegeCount: mergedByState[state].colleges.length,
  }));

const output = {
  totals: {
    colleges: rows.length,
    seats: totalSeats,
    states: byState.length,
  },
  stateSummary: byState.map(({ state, collegeCount, seats }) => ({
    state,
    colleges: collegeCount,
    seats,
  })),
  byState,
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));

console.log(
  `Wrote ${output.totals.colleges} colleges, ${output.totals.seats} seats, ${output.totals.states} states`
);
