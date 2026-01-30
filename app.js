/* global pdfjsLib */

const CSE_COURSE_CATALOG = [
  { code: "ENG091", title: "Foundation Course", credits: 0.0, category: "UNIVERSITY CORE", stream: "Stream 1: Writing Comprehension" },
  { code: "ENG101", title: "English Fundamentals", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 1: Writing Comprehension" },
  { code: "ENG102", title: "English Composition I", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 1: Writing Comprehension" },
  { code: "ENG103", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 1: Writing Comprehension" },
  { code: "MAT092", title: "Remedial Course in Mathematics", credits: 0.0, category: "UNIVERSITY CORE", stream: "Stream 2: Math and Natural Sciences" },
  { code: "MAT110", title: "MATH I: Differential Calculus and Co-ordinate Geometry", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 2: Math and Natural Sciences" },
  { code: "PHY111", title: "Principles of Physics I", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 2: Math and Natural Sciences" },
  { code: "STA201", title: "Elements of Statistics and Probability", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 2: Math and Natural Sciences" },
  { code: "CHE101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 2: Math and Natural Sciences" },
  { code: "BIO101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 2: Math and Natural Sciences" },
  { code: "ENV103", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 2: Math and Natural Sciences" },
  { code: "HUM103", title: "Ethics and Culture", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "BNG103", title: "Bangla Language and Literature", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "HUM101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "HUM102", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "HST102", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "HST104", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "HUM207", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "ENG113", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "ENG114", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "ENG115", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "ENG333", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "ACT201", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "ACT202", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "BUS101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "BUS202", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "BCH101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "BTE101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "CHE110", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "CHN101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "FRN101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "FIN301", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "GEO101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "LAW101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "HUM111", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "HST407", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "STA301", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 3: Arts and Humanities" },
  { code: "EMB101", title: "Emergence Of Bangladesh / Bangladesh Studies", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "PSY101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "SOC101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "ANT101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "POL101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "BUS201", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "ECO101", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "ECO102", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "ECO105", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "BUS102", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "POL102", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "DEV104", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "POL201", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "ANT202", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "SOC201", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "ANT342", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "ANT351", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "BUS333", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 4: Social Sciences" },
  { code: "CST301", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST302", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST303", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST304", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST305", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST306", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST307", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST308", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST309", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "CST310", title: "", credits: 3.0, category: "UNIVERSITY CORE", stream: "Stream 5: Communities, Seeking Transformation" },
  { code: "MAT120", title: "MATH II: Integral Calculus and Differential Equations", credits: 3.0, category: "SCHOOL CORE", stream: "" },
  { code: "MAT215", title: "MATH III:", credits: 3.0, category: "SCHOOL CORE", stream: "" },
  { code: "MAT216", title: "MATH IV:", credits: 3.0, category: "SCHOOL CORE", stream: "" },
  { code: "PHY112", title: "Principles of Physics II", credits: 3.0, category: "SCHOOL CORE", stream: "" },
  { code: "CSE110", title: "Programming Language I", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE111", title: "Programming Language II", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE220", title: "Data Structures", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE221", title: "Algorithms", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE230", title: "Discrete Mathematics", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE250", title: "Circuits and Electronics", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE251", title: "Electronic Devices and Circuits", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE260", title: "Digital Logic Design", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE320", title: "Data Communications", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE321", title: "Operating System", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE330", title: "Numerical Methods", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE331", title: "Automata and Computability", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE340", title: "Computer Architecture", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE341", title: "Microprocessors", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE350", title: "Digital Electronics and Pulse Techniques", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE360", title: "Computer Interfacing", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE370", title: "Database Systems", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE420", title: "Compiler Design", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE421", title: "Computer Networks", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE422", title: "Artificial Intelligence", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE423", title: "Computer Graphics", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE460", title: "VLSI Design", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE461", title: "Introduction to Robotics", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE470", title: "Software Engineering", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE471", title: "Systems Analysis and Design", credits: 3.0, category: "PROGRAM CORE", stream: "" },
  { code: "CSE400", title: "PROJECT & THESIS", credits: 4.0, category: "PROJECT / INTERNSHIP / THESIS", stream: "" }
];

const PROGRAMS = {
  cse: {
    key: "cse",
    name: "CSE",
    totalCreditsRequired: 136,
    catalog: CSE_COURSE_CATALOG,
    requiredCategories: new Set(["PROGRAM CORE", "SCHOOL CORE", "PROJECT / INTERNSHIP / THESIS"])
  }
};

const el = (id) => document.getElementById(id);

const pdfInput = el("pdfInput");
const analyzeBtn = el("analyzeBtn");
const resetBtn = el("resetBtn");
const downloadJsonBtn = el("downloadJsonBtn");
const darkModeToggle = el("darkModeToggle");
const fontScaleRange = el("fontScaleRange");

const statusPill = el("statusPill");
const creditsEarned = el("creditsEarned");
const creditsRequired = el("creditsRequired");
const creditsRemaining = el("creditsRemaining");

const missingTable = el("missingTable");
const completedTable = el("completedTable");
const alerts = el("alerts");
const studentName = el("studentName");
const studentId = el("studentId");
const studentProgram = el("studentProgram");
const currentSemester = el("currentSemester");
const cgpa = el("cgpa");

let lastResult = null;
let activeProgramKey = "cse";

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "./vendor/pdfjs/pdf.worker.min.js";
}

pdfInput.addEventListener("change", () => {
  analyzeBtn.disabled = !(pdfInput.files && pdfInput.files[0]);
  clearUI();
  setStatus("Waiting", "secondary");
});

resetBtn.addEventListener("click", () => {
  pdfInput.value = "";
  analyzeBtn.disabled = true;
  if (downloadJsonBtn) downloadJsonBtn.disabled = true;
  lastResult = null;
  clearUI();
  setStatus("Waiting", "secondary");
});

if (darkModeToggle) {
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", darkModeToggle.checked);
  });
}

if (fontScaleRange) {
  const applyFontScale = (value) => {
    document.documentElement.style.setProperty("--base-font-scale", `${value}%`);
  };
  applyFontScale(fontScaleRange.value || 100);
  fontScaleRange.addEventListener("input", (e) => {
    applyFontScale(e.target.value);
  });
}

if (downloadJsonBtn) {
  downloadJsonBtn.addEventListener("click", () => {
    if (!lastResult) return;
    const blob = new Blob([JSON.stringify(lastResult, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "degree_progress_result.json";
    a.click();
    URL.revokeObjectURL(url);
  });
}

analyzeBtn.addEventListener("click", async () => {
  const file = pdfInput.files?.[0];
  if (!file) return;

  if (!window.pdfjsLib) {
    setStatus("Error", "danger");
    showAlert("PDF.js failed to load. Check your network connection or run via a local server.", "danger");
    return;
  }

  clearUI();
  setStatus("Parsing...", "warning");

  try {
    const rows = await extractPdfRows(file);
    console.log("Extracted rows:", rows.slice(0, 40));

    if (!rows || rows.length === 0) {
      setStatus("Error", "danger");
      showAlert("No text found in the PDF. If it is scanned, you will need OCR (server-side).", "danger");
      return;
    }

    setStudentProfile(extractStudentInfo(rows));

    let completed = parseCoursesFromRows(rows);
    if (completed.length === 0) {
      const text = rows.join("\n");
      completed = parseCoursesFromText(text);
    }
    console.log("Parsed courses:", completed);

    const result = analyzeProgress(completed, getActiveProgram());
    lastResult = result;

    renderResult(result);
    if (downloadJsonBtn) downloadJsonBtn.disabled = false;

    setStatus("Done", "success");
  } catch (err) {
    console.error(err);
    setStatus("Error", "danger");
    showAlert("Could not parse this PDF reliably. If it is scanned, you will need OCR (server-side).", "danger");
  }
});

function setStatus(label, variant) {
  statusPill.className = `badge text-bg-${variant}`;
  statusPill.textContent = label;
}

function showAlert(message, variant = "info") {
  alerts.innerHTML = `
    <div class="alert alert-${variant} border-0 shadow-sm" role="alert">
      ${escapeHtml(message)}
    </div>
  `;
}

function clearUI() {
  alerts.innerHTML = "";
  creditsEarned.textContent = "--";
  creditsRequired.textContent = "--";
  creditsRemaining.textContent = "--";
  setStudentProfile({});

  missingTable.innerHTML = `<tr><td colspan="3" class="text-muted">No data yet.</td></tr>`;
  completedTable.innerHTML = `<tr><td colspan="4" class="text-muted">No data yet.</td></tr>`;
}

function getActiveProgram() {
  return PROGRAMS[activeProgramKey] || PROGRAMS.cse;
}

function setStudentProfile(info) {
  studentName.textContent = info.name || "--";
  studentId.textContent = info.id || "--";
  studentProgram.textContent = info.program || "--";
  currentSemester.textContent = info.currentSemester || "--";
  cgpa.textContent = info.cgpa || "--";
}

async function extractPdfRows(file) {
  const buf = await file.arrayBuffer();
  const pdf = await loadPdf(buf);

  const rows = [];
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    rows.push(...itemsToRows(content.items));
  }
  return rows;
}

function itemsToRows(items) {
  const byY = new Map();
  for (const it of items) {
    const x = it.transform[4];
    const y = it.transform[5];
    const key = Math.round(y * 2) / 2; // group by half-point to stabilize rows
    if (!byY.has(key)) byY.set(key, []);
    if (it.str && it.str.trim()) {
      byY.get(key).push({ x, str: it.str.trim() });
    }
  }

  const ys = Array.from(byY.keys()).sort((a, b) => b - a);
  const rows = [];
  for (const y of ys) {
    const rowItems = byY.get(y).sort((a, b) => a.x - b.x);
    const rowText = rowItems.map((r) => r.str).join(" ").replace(/\s+/g, " ").trim();
    if (rowText) rows.push(rowText);
  }
  return rows;
}

/**
 * Robust-ish parser for BRACU-like grade sheet text extracted via PDF.js.
 * Strategy:
 * 1) Split into lines
 * 2) Find course code lines: /^[A-Z]{3}\d{3}\b/
 * 3) Extract credits + grade where possible
 * 4) If a line is only "MAT215 3.00 B+ 3.30", use previous line as title
 */
function parseCoursesFromText(text) {
  const lines = text
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  const courses = [];
  const codeRe = /^([A-Z]{3}\d{3})\b\s*(.*)$/;
  const tailRe = /^(.*)\s+(\d+\.\d{2})\s+([A-F][+-]?)\s+(\d+\.\d{2})$/;
  const onlyNumsRe = /^(\d+\.\d{2})\s+([A-F][+-]?)\s+(\d+\.\d{2})$/;

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(codeRe);
    if (!m) continue;

    const code = m[1];
    const rest = (m[2] || "").trim();

    // Case: code line has only "3.00 A- 3.70"
    const mOnly = rest.match(onlyNumsRe);
    if (mOnly) {
      const prev = lines[i - 1] || "";
      const title =
        prev && !prev.match(/^[A-Z]{3}\d{3}\b/) && !prev.startsWith("SEMESTER")
          ? prev
          : "";

      courses.push({
        code,
        title,
        credits: Number(mOnly[1]),
        grade: mOnly[2]
      });
      continue;
    }

    // Normal: title + numbers on same line
    const mTail = rest.match(tailRe);
    if (mTail) {
      courses.push({
        code,
        title: mTail[1].trim(),
        credits: Number(mTail[2]),
        grade: mTail[3]
      });
      continue;
    }

    // Forward-wrap: keep appending until we find credits+grade tail
    let titleParts = [rest].filter(Boolean);
    for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
      const nxt = lines[j];

      // stop early if next course begins
      if (nxt.match(/^[A-Z]{3}\d{3}\b/) || nxt.startsWith("SEMESTER")) break;

      const mt = nxt.match(tailRe);
      if (mt) {
        titleParts.push(mt[1].trim());
        courses.push({
          code,
          title: titleParts.join(" ").replace(/\s+/g, " ").trim(),
          credits: Number(mt[2]),
          grade: mt[3]
        });
        break;
      } else {
        titleParts.push(nxt);
      }
    }
  }

  // Deduplicate by course code (if repeated attempts exist, you can improve this rule)
  const seen = new Set();
  const unique = [];
  for (const c of courses) {
    if (seen.has(c.code)) continue;
    seen.add(c.code);
    unique.push(c);
  }
  return unique;
}

function parseCoursesFromRows(rows) {
  const courses = [];
  const gradeRe = /^(A\+|A-|A|B\+|B-|B|C\+|C-|C|D\+|D|F)$/;
  const decimalRe = /^\d+\.\d{2}$/;

  const rowHasCode = (row) => {
    const tokens = row.split(/\s+/);
    for (let i = 0; i < tokens.length; i++) {
      if (/^[A-Z]{3}\d{3}$/.test(tokens[i])) return true;
      if (/^[A-Z]{3}$/.test(tokens[i]) && /^\d{3}$/.test(tokens[i + 1] || "")) return true;
    }
    return false;
  };

  const findCode = (tokens) => {
    for (let i = 0; i < tokens.length; i++) {
      if (/^[A-Z]{3}\d{3}$/.test(tokens[i])) {
        return { code: tokens[i], idx: i, span: 1 };
      }
      if (/^[A-Z]{3}$/.test(tokens[i]) && /^\d{3}$/.test(tokens[i + 1] || "")) {
        return { code: tokens[i] + tokens[i + 1], idx: i, span: 2 };
      }
    }
    return null;
  };

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i].replace(/\s+/g, " ").trim();
    if (!row) continue;

    if (!rowHasCode(row)) continue;

    // If row looks truncated, append the next non-code row to complete it.
    let j = i;
    while (j + 1 < rows.length) {
      const next = rows[j + 1].replace(/\s+/g, " ").trim();
      if (!next) {
        j++;
        continue;
      }
      if (rowHasCode(next)) break;
      const hasGrade = row.split(/\s+/).some((t) => gradeRe.test(t));
      const hasDecimal = row.split(/\s+/).some((t) => decimalRe.test(t));
      if (hasGrade && hasDecimal) break;
      row = row + " " + next;
      j++;
      if (row.split(/\s+/).some((t) => gradeRe.test(t)) && row.split(/\s+/).some((t) => decimalRe.test(t))) {
        break;
      }
    }
    i = j;

    const tokens = row.split(/\s+/);
    const codeInfo = findCode(tokens);
    if (!codeInfo) continue;

    const start = codeInfo.idx + codeInfo.span;
    let gradeIdx = -1;
    for (let k = tokens.length - 1; k >= start; k--) {
      if (gradeRe.test(tokens[k])) {
        gradeIdx = k;
        break;
      }
    }

    let credits = null;
    let creditsIdx = -1;
    const decimalCandidates = [];
    for (let k = start; k < tokens.length; k++) {
      if (decimalRe.test(tokens[k])) {
        const val = Number(tokens[k]);
        if (!Number.isNaN(val) && val <= 6) decimalCandidates.push({ idx: k, val });
      }
    }
    if (decimalCandidates.length > 0) {
      if (gradeIdx > -1) {
        const beforeGrade = decimalCandidates.filter((d) => d.idx < gradeIdx);
        if (beforeGrade.length > 0) {
          const pick = beforeGrade[beforeGrade.length - 1];
          credits = pick.val;
          creditsIdx = pick.idx;
        }
      }
      if (credits == null) {
        const pick = decimalCandidates[0];
        credits = pick.val;
        creditsIdx = pick.idx;
      }
    }

    const endIdx = creditsIdx > -1 ? creditsIdx : (gradeIdx > -1 ? gradeIdx : tokens.length);
    const title = tokens.slice(start, endIdx).join(" ").trim();

    courses.push({
      code: codeInfo.code,
      title,
      credits: credits || 0,
      grade: gradeIdx > -1 ? tokens[gradeIdx] : ""
    });
  }

  const seen = new Set();
  const unique = [];
  for (const c of courses) {
    if (seen.has(c.code)) continue;
    seen.add(c.code);
    unique.push(c);
  }
  return unique;
}

function extractStudentInfo(rows) {
  const findFirstMatch = (regex) => {
    for (const row of rows) {
      const match = row.match(regex);
      if (match) return match[1].trim();
    }
    return "";
  };

  const findLastMatch = (regex) => {
    for (let i = rows.length - 1; i >= 0; i--) {
      const match = rows[i].match(regex);
      if (match) return match[1].trim();
    }
    return "";
  };

  const name = findFirstMatch(/Name\s*:\s*(.+)$/i);
  const id = findFirstMatch(/Student ID\s*:\s*(\d+)/i);

  let program = "";
  for (let i = 0; i < rows.length; i++) {
    const match = rows[i].match(/PROGRAM\s*:\s*(.+)$/i);
    if (match) {
      program = match[1].trim();
      const next = rows[i + 1] || "";
      if (next && /^[A-Z\s&]+$/.test(next) && !next.includes(":")) {
        program = `${program} ${next.trim()}`;
      }
      break;
    }
  }

  const currentSemester = findLastMatch(/SEMESTER\s*:\s*(SPRING|SUMMER|FALL)\s+(\d{4})/i)
    ? findLastMatch(/SEMESTER\s*:\s*((?:SPRING|SUMMER|FALL)\s+\d{4})/i)
    : "";
  const cgpa = findLastMatch(/CGPA\s+(\d+(?:\.\d+)?)/i);

  return { name, id, program, currentSemester, cgpa };
}

async function loadPdf(buffer) {
  try {
    return await pdfjsLib.getDocument({ data: buffer }).promise;
  } catch (err) {
    console.warn("PDF.js worker failed, retrying without worker:", err);
    return await pdfjsLib.getDocument({ data: buffer, disableWorker: true }).promise;
  }
}

function analyzeProgress(completedCourses, program) {
  const catalog = program.catalog || [];
  const catalogByCode = new Map(catalog.map((c) => [c.code, c]));
  const requiredCategories = program.requiredCategories;

  const mergedCompleted = completedCourses.map((c) => {
    const catalogItem = catalogByCode.get(c.code);
    return {
      ...c,
      title: c.title || catalogItem?.title || "",
      credits: c.credits || catalogItem?.credits || 0,
      category: catalogItem?.category || "",
      stream: catalogItem?.stream || ""
    };
  });

  const completedCodes = new Set(mergedCompleted.map((c) => c.code));
  const earned = mergedCompleted.reduce((sum, c) => sum + (c.credits || 0), 0);

  const totalRequired = program.totalCreditsRequired;
  const remainingCredits = totalRequired != null
    ? Math.max(0, totalRequired - earned)
    : null;

  const requiredList = requiredCategories
    ? catalog.filter((c) => requiredCategories.has(c.category)).map((c) => c.code)
    : catalog.map((c) => c.code);

  const missingCore = requiredList
    .filter((code) => !completedCodes.has(code))
    .map((code) => {
      const cat = catalogByCode.get(code);
      return {
        code,
        credits: cat?.credits ?? 0,
        notes: cat?.category || "Required"
      };
    });

  return {
    program: program.name,
    totals: { earned, required: totalRequired, remainingCredits },
    missingCore,
    completedCourses: mergedCompleted.sort((a, b) => a.code.localeCompare(b.code)),
    catalog
  };
}

function renderResult(result) {
  creditsEarned.textContent = result.totals.earned.toFixed(0);
  creditsRequired.textContent = result.totals.required == null ? "--" : result.totals.required.toFixed(0);
  creditsRemaining.textContent = result.totals.remainingCredits == null ? "--" : result.totals.remainingCredits.toFixed(0);

  if (result.missingCore.length === 0) {
    missingTable.innerHTML = `<tr><td colspan="3" class="text-success">No missing core courses.</td></tr>`;
  } else {
    missingTable.innerHTML = result.missingCore.map((m) => `
      <tr>
        <td class="fw-semibold">${escapeHtml(m.code)}</td>
        <td class="text-muted">${escapeHtml(m.notes)}</td>
        <td class="text-end fw-semibold">${m.credits}</td>
      </tr>
    `).join("");
  }

  if (result.completedCourses.length === 0) {
    completedTable.innerHTML = `<tr><td colspan="4" class="text-muted">No courses detected.</td></tr>`;
  } else {
    completedTable.innerHTML = result.completedCourses.map((c) => `
      <tr>
        <td class="fw-semibold">${escapeHtml(c.code)}</td>
        <td class="text-muted">${escapeHtml(c.title || "")}</td>
        <td class="text-end">${(c.credits ?? 0).toFixed(2)}</td>
        <td class="text-end fw-semibold">${escapeHtml(c.grade || "")}</td>
      </tr>
    `).join("");
  }

  // Quick summary
  const remaining = result.totals.remainingCredits == null ? "N/A" : result.totals.remainingCredits;
  if (result.missingCore.length > 0) {
    const list = result.missingCore.map(x => `${x.code} (${x.credits})`).join(", ");
    showAlert(`Detected missing required items: ${list}. Credits remaining: ${remaining}.`, "info");
  } else {
    showAlert(`All required items detected as complete. Credits remaining: ${remaining}.`, "success");
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
