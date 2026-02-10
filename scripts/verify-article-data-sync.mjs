import fs from "node:fs";
import path from "node:path";

const SUMMARY_SOURCE_PATH = path.join("src", "data", "articles.ts");
const DETAIL_SOURCE_PATH = path.join("src", "data", "insights.tsx");

const parseSummaryIds = (source) => [...source.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]);
const parseDetailIds = (source) => [...source.matchAll(/"([^"]+)":\s*\{/g)].map((match) => match[1]);

const summarySource = fs.readFileSync(SUMMARY_SOURCE_PATH, "utf8");
const detailSource = fs.readFileSync(DETAIL_SOURCE_PATH, "utf8");

const summaryIds = [...new Set(parseSummaryIds(summarySource))];
const detailIds = [...new Set(parseDetailIds(detailSource))];

const summaryOnly = summaryIds.filter((id) => !detailIds.includes(id));
const detailOnly = detailIds.filter((id) => !summaryIds.includes(id));

if (summaryOnly.length || detailOnly.length) {
  console.error("Article data mismatch detected.");
  if (summaryOnly.length) {
    console.error(`Missing in details (src/data/insights.tsx): ${summaryOnly.join(", ")}`);
  }
  if (detailOnly.length) {
    console.error(`Missing in summaries (src/data/articles.ts): ${detailOnly.join(", ")}`);
  }
  process.exit(1);
}

console.log(`Article data sync verified (${summaryIds.length} articles).`);
