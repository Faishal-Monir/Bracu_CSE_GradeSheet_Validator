/* global pdfjsLib */

const COURSE_CREDIT_DEFAULT = 3;
const PROJECT_CREDIT = 4;

const gradePoints = {
  "A+": 4.0, A: 4.0, "A-": 3.7,
  "B+": 3.3, B: 3.0, "B-": 2.7,
  "C+": 2.3, C: 2.0, "C-": 1.7,
  "D+": 1.3, D: 1.0, F: 0.0
};

const courseTitleMap = {
  ENG091: "Foundation Course (in English)", ENG101: "Fundamentals of English", ENG102: "English Composition I", ENG103: "Advanced Writing Skills and Presentation",
  MAT092: "Remedial Course in Mathematics", MAT110: "Mathematics I: Differential Calculus & Coordinate Geometry", PHY111: "Principles of Physics I", STA201: "Elements of Statistics and Probability", CHE101: "Introduction to Chemistry", BIO101: "Introduction to Biology", ENV103: "Elements of Environmental Sciences",
  HUM103: "Ethics and Culture", BNG103: "Bangla Language and Literature", HUM101: "World Civilization and Culture", HUM102: "Introduction to Philosophy", HST102: "History of the Emergence of Bangladesh", HST103: "History of Civilization", HST104: "Modern World History", HUM207: "Introduction to Culture and Society", ENG110: "English Reading Skills", ENG113: "Introduction to English Literature", ENG114: "Introduction to Drama", ENG115: "Introduction to Poetry", ENG333: "Globalization and the Media", HUM210: "Cultural Studies", HUM301: "Topics in Humanities",
  EMB101: "Emergence of Bangladesh", DEV101: "Bangladesh Studies", PSY101: "Introduction to Psychology", SOC101: "Introduction to Sociology", ANT101: "Introduction to Anthropology", POL101: "Introduction to Political Science", BUS201: "Business Communication", ECO101: "Introduction to Microeconomics", ECO102: "Introduction to Macroeconomics", ECO105: "Introduction to Economics", BUS102: "Business Studies", POL102: "Bangladesh Politics", POL103: "International Relations", POL201: "Comparative Politics", POL202: "Public Administration", PSY102: "Psychology", DEV104: "Development Studies", DEV201: "Development Theory", SOC201: "Sociology", ANT202: "Anthropology", ANT342: "Anthropology", ANT351: "Anthropology", BUS333: "Business Ethics", BUS334: "Business", BUS335: "Business", BU201: "Business",
  CST201: "Communities, Seeking Transformation", CST301: "For the Love of Food", CST302: "Communities, Seeking Transformation", CST303: "Communities, Seeking Transformation", CST304: "Communities, Seeking Transformation", CST305: "Communities, Seeking Transformation", CST306: "Communities, Seeking Transformation", CST307: "Communities, Seeking Transformation", CST308: "Communities, Seeking Transformation", CST309: "Communities, Seeking Transformation", CST310: "Communities, Seeking Transformation",
  MAT120: "Mathematics II: Integral Calculus & Differential Equations", MAT215: "Mathematics III: Complex Variables & Laplace Transformations", MAT216: "Mathematics IV: Linear Algebra & Fourier Analysis", PHY112: "Principles of Physics II",
  CSE110: "Programming Language I", CSE111: "Programming Language II", CSE220: "Data Structures", CSE221: "Algorithms", CSE230: "Discrete Mathematics", CSE250: "Circuits and Electronics", CSE251: "Electronic Devices and Circuits", CSE260: "Digital Logic Design", CSE320: "Data Communications", CSE321: "Operating Systems", CSE330: "Numerical Methods", CSE331: "Automata and Computability", CSE340: "Computer Architecture", CSE341: "Microprocessors", CSE350: "Digital Electronics and Pulse Techniques", CSE360: "Computer Interfacing", CSE370: "Database Systems", CSE420: "Compiler Design", CSE421: "Computer Networks", CSE422: "Artificial Intelligence", CSE423: "Computer Graphics", CSE460: "VLSI Design", CSE461: "Introduction to Robotics", CSE470: "Software Engineering", CSE471: "Systems Analysis and Design", CSE400: "Project / Thesis", CSE427: "Machine Learning", CSE428: "Image Processing"
};

const sharedGenEd = {
  writingRequired: ["ENG101", "ENG102"],
  stream2Required: ["MAT110", "PHY111", "STA201"],
  stream2Optional: ["CHE101", "BIO101", "ENV103"],
  stream3Required: ["HUM103", "BNG103"],
  stream3Choice: ["HUM101", "HUM102", "HST102", "HST103", "HST104", "HUM207", "ENG110", "ENG113", "ENG114", "ENG115", "ENG333", "HUM210", "HUM301"],
  stream4FixedChoice: ["EMB101", "DEV101"],
  stream4Choice: ["PSY101", "SOC101", "ANT101", "POL101", "BUS201", "ECO101", "ECO102", "ECO105", "BUS102", "POL102", "POL103", "POL201", "POL202", "PSY102", "DEV104", "DEV201", "SOC201", "ANT202", "ANT342", "ANT351", "BUS333", "BUS334", "BUS335", "BU201"],
  stream5Choice: ["CST201", "CST301", "CST302", "CST303", "CST304", "CST305", "CST306", "CST307", "CST308", "CST309", "CST310"]
};

function makeGenEdAll(genEd) {
  return new Set([
    ...genEd.writingRequired, "ENG091", "ENG103", "MAT092",
    ...genEd.stream2Required, ...genEd.stream2Optional,
    ...genEd.stream3Required, ...genEd.stream3Choice,
    ...genEd.stream4FixedChoice, ...genEd.stream4Choice,
    ...genEd.stream5Choice
  ]);
}

function makeProgramCoreGroups(codes) {
  return codes.map(item => Array.isArray(item)
    ? { label: item[0], options: item.slice(1) }
    : { label: item, options: [item] });
}

const degreePlans = {
  CSE: {
    name: "CSE",
    totalCreditsRequired: 136,
    genEdCreditsRequired: 39,
    schoolCoreCreditsRequired: 12,
    programCoreCreditsRequired: 75,
    programElectiveCreditsRequired: 6,
    projectCreditsRequired: 4,
    schoolCore: ["MAT120", "MAT215", "MAT216", "PHY112"],
    programCoreGroups: makeProgramCoreGroups([
      ["Programming Language I", "CSE110", "CSE161", "EEE103", "ECE103"],
      "CSE111", "CSE220", "CSE221", "CSE230", "CSE250", "CSE251",
      ["Digital Logic Design", "CSE260", "EEE283", "ECE283", "EEE301"],
      "CSE320", "CSE321", "CSE330", "CSE331", "CSE340", "CSE341", "CSE350", "CSE360", "CSE370", "CSE420", "CSE421", "CSE422", "CSE423", "CSE460", "CSE461", "CSE470", "CSE471"
    ]),
    genEd: sharedGenEd
  },
  CS: {
    name: "CS",
    totalCreditsRequired: 124,
    genEdCreditsRequired: 39,
    schoolCoreCreditsRequired: 12,
    programCoreCreditsRequired: 48,
    programElectiveCreditsRequired: 21,
    projectCreditsRequired: 4,
    schoolCore: ["MAT120", "MAT215", "MAT216", "PHY112"],
    programCoreGroups: makeProgramCoreGroups([
      ["Programming Language I", "CSE110", "CSE161", "EEE103", "ECE103"],
      "CSE111", "CSE220", "CSE221", "CSE230",
      ["Digital Logic Design", "CSE260", "EEE283", "ECE283", "EEE301"],
      "CSE321", "CSE330", "CSE331", "CSE340", "CSE370", "CSE420", "CSE421", "CSE422", "CSE423", "CSE470"
    ]),
    genEd: sharedGenEd
  }
};

for (const plan of Object.values(degreePlans)) {
  plan.genEdAll = makeGenEdAll(plan.genEd);
}

const el = (id) => document.getElementById(id);
const pdfInput = el("pdfInput");
const analyzeBtn = el("analyzeBtn");
const resetBtn = el("resetBtn");
const downloadJsonBtn = el("downloadJsonBtn");
const majorSelect = el("majorSelect");
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

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

pdfInput.addEventListener("change", () => {
  analyzeBtn.disabled = !(pdfInput.files && pdfInput.files[0]);
  clearUI();
  setStatus("Waiting", "secondary");
});

majorSelect.addEventListener("change", () => {
  if (lastResult?.attemptsRaw && lastResult?.profile) {
    runValidationAndRender(lastResult.profile, lastResult.attemptsRaw);
  } else {
    creditsRequired.textContent = (degreePlans[majorSelect.value] || degreePlans.CSE).totalCreditsRequired;
  }
});

resetBtn.addEventListener("click", () => {
  pdfInput.value = "";
  analyzeBtn.disabled = true;
  downloadJsonBtn.disabled = true;
  lastResult = null;
  clearUI();
  setStatus("Waiting", "secondary");
});

darkModeToggle.addEventListener("change", () => document.body.classList.toggle("dark", darkModeToggle.checked));

const applyFontScale = (value) => document.documentElement.style.setProperty("--base-font-scale", `${value}%`);
applyFontScale(fontScaleRange.value || 100);
fontScaleRange.addEventListener("input", (e) => applyFontScale(e.target.value));

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

analyzeBtn.addEventListener("click", async () => {
  const file = pdfInput.files?.[0];
  if (!file) return;
  if (!window.pdfjsLib) {
    setStatus("Error", "danger");
    showAlert("PDF.js failed to load. Check your internet connection or add a local PDF.js build.", "danger");
    return;
  }
  clearUI();
  setStatus("Parsing...", "warning");
  try {
    const { rows, text } = await extractPdfText(file);
    console.log("Extracted rows:", rows);
    console.log("Extracted text:", text);
    const profile = extractStudentInfo(rows, text);
    setStudentProfile(profile);
    const allAttempts = parseCourses(rows, text);
    console.log("Parsed attempts:", allAttempts);
    runValidationAndRender(profile, allAttempts);
  } catch (err) {
    console.error(err);
    setStatus("Error", "danger");
    showAlert("Could not parse this PDF reliably. Scanned/image-only PDFs need OCR first.", "danger");
  }
});


function runValidationAndRender(profile, allAttempts) {
  const selectedMajor = majorSelect.value || "CSE";
  const detectedMajor = detectMajorFromProfile(profile);
  const selectedPlan = degreePlans[selectedMajor] || degreePlans.CSE;

  lastResult = { profile, attemptsRaw: allAttempts };
  downloadJsonBtn.disabled = true;
  clearResultsOnly();
  setStudentProfile(profile);
  creditsRequired.textContent = selectedPlan.totalCreditsRequired.toFixed(0);

  if (detectedMajor && detectedMajor !== selectedMajor) {
    const message = `Selected major is ${selectedMajor}, but the uploaded grade sheet appears to be for ${detectedMajor}. Either upload the correct mark sheet or select the major carefully.`;
    showBlockingError(message);
    return;
  }

  const result = analyzeProgress(allAttempts, selectedPlan);
  if (result.totals.earned > selectedPlan.totalCreditsRequired) {
    const message = `Credit exceeded the program's total credit limit! Calculated ${result.totals.earned.toFixed(0)} credits for ${selectedMajor}, but the ${selectedMajor} requirement is ${selectedPlan.totalCreditsRequired}. Either upload the correct mark sheet or select the major carefully.`;
    showBlockingError(message);
    return;
  }

  lastResult = { profile, attemptsRaw: allAttempts, ...result };
  renderResult(lastResult);
  downloadJsonBtn.disabled = false;
  setStatus("Done", "success");
}

function showBlockingError(message) {
  setStatus("Error", "danger");
  creditsEarned.textContent = "--";
  creditsRemaining.textContent = "--";
  missingTable.innerHTML = `<tr><td colspan="3" class="text-muted">No result shown because validation failed.</td></tr>`;
  completedTable.innerHTML = `<tr><td colspan="5" class="text-muted">No result shown because validation failed.</td></tr>`;
  showAlert(message, "danger");
  window.alert(message);
}

function clearResultsOnly() {
  alerts.innerHTML = "";
  creditsEarned.textContent = "--";
  creditsRemaining.textContent = "--";
  missingTable.innerHTML = `<tr><td colspan="3" class="text-muted">No data yet.</td></tr>`;
  completedTable.innerHTML = `<tr><td colspan="5" class="text-muted">No data yet.</td></tr>`;
}

async function extractPdfText(file) {
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  const rows = [];
  const textParts = [];
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const pageRows = itemsToRows(content.items);
    rows.push(...pageRows);
    textParts.push(pageRows.join("\n"));
  }
  return { rows, text: textParts.join("\n") };
}

function itemsToRows(items) {
  const byY = new Map();
  for (const it of items) {
    if (!it.str || !it.str.trim()) continue;
    const x = it.transform[4];
    const y = Math.round(it.transform[5] * 2) / 2;
    if (!byY.has(y)) byY.set(y, []);
    byY.get(y).push({ x, str: it.str.trim() });
  }
  return Array.from(byY.keys()).sort((a, b) => b - a).map((y) => {
    return byY.get(y).sort((a, b) => a.x - b.x).map(i => i.str).join(" ").replace(/\s+/g, " ").trim();
  }).filter(Boolean);
}

function parseCourses(rows, text) {
  const combined = [...rows, ...text.split(/\r?\n/)].map(cleanLine).filter(Boolean);
  const attempts = [];
  attempts.push(...parseRowStyle(combined));
  attempts.push(...parseSequentialStyle(combined));
  return dedupeSameAttempt(attempts).map((c, index) => ({ ...c, order: index + 1 }));
}

function cleanLine(line) {
  return String(line || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeCode(code) {
  const m = String(code || "").toUpperCase().match(/([A-Z]{3})\s*(\d{3})/);
  return m ? `${m[1]}${m[2]}` : "";
}

function parseRowStyle(lines) {
  const attempts = [];
  const codeRe = /\b([A-Z]{3})\s*(\d{3})\b/;
  const tailRe = /(0\.00|[1-6]\.00)\s+(A\+|A-|A|B\+|B-|B|C\+|C-|C|D\+|D|F|I|W)(?:\s*\((RP|NT|R)\))?\s+(\d\.\d{2})\b/;
  for (let i = 0; i < lines.length; i++) {
    let row = lines[i];
    if (!codeRe.test(row)) continue;
    for (let j = i + 1; j < Math.min(lines.length, i + 5) && !tailRe.test(row); j++) {
      if (codeRe.test(lines[j]) && !/^GEOMETRY|^EQUATIONS|^TRANSFORMATIONS/i.test(lines[j])) break;
      row += " " + lines[j];
    }
    const cm = row.match(codeRe);
    const tm = row.match(tailRe);
    if (!cm || !tm) continue;
    const code = `${cm[1]}${cm[2]}`;
    const titleStart = cm.index + cm[0].length;
    const rawTitle = row.slice(titleStart, tm.index).trim();
    attempts.push(makeCourse(code, rawTitle, Number(tm[1]), tm[2], Number(tm[4]), tm[3] || ""));
  }
  return attempts;
}

function parseSequentialStyle(lines) {
  const attempts = [];
  const codeOnlyRe = /^([A-Z]{3})\s*(\d{3})$/;
  const decRe = /^(0\.00|[1-6]\.00)$/;
  const gradeRe = /^(A\+|A-|A|B\+|B-|B|C\+|C-|C|D\+|D|F|I|W)(?:\s*\((RP|NT|R)\))?$/;
  for (let i = 0; i < lines.length; i++) {
    const cm = lines[i].match(codeOnlyRe);
    if (!cm) continue;
    const code = `${cm[1]}${cm[2]}`;
    const titleParts = [];
    let credits = null, grade = "", repeatTag = "", gp = null;
    for (let j = i + 1; j < Math.min(lines.length, i + 12); j++) {
      const line = lines[j];
      if (/^SEMESTER\b|^CUMULATIVE\b|^Course No\b|^Credits Earned\b/i.test(line)) break;
      if (codeOnlyRe.test(line) && titleParts.length > 0) break;
      if (credits == null && decRe.test(line)) { credits = Number(line); continue; }
      if (credits != null && !grade) {
        const gm = line.match(gradeRe);
        if (gm) { grade = gm[1]; repeatTag = gm[2] || ""; continue; }
      }
      if (credits != null && grade && gp == null && /^\d\.\d{2}$/.test(line)) { gp = Number(line); break; }
      if (credits == null) titleParts.push(line);
    }
    if (credits != null && grade) attempts.push(makeCourse(code, titleParts.join(" "), credits, grade, gp ?? gradePoints[grade] ?? 0, repeatTag));
  }
  return attempts;
}

function makeCourse(code, title, credits, grade, gradePoint, repeatTag) {
  const normalizedCode = normalizeCode(code);
  return {
    code: normalizedCode,
    title: cleanCourseTitle(title) || courseTitleMap[normalizedCode] || "",
    credits: Number.isFinite(credits) ? credits : (normalizedCode === "CSE400" ? PROJECT_CREDIT : COURSE_CREDIT_DEFAULT),
    grade,
    gradePoint: Number.isFinite(gradePoint) ? gradePoint : (gradePoints[grade] ?? 0),
    repeatTag: repeatTag || "",
    passed: grade && !["F", "I", "W"].includes(grade)
  };
}

function cleanCourseTitle(title) {
  return cleanLine(title)
    .replace(/^[:-]+\s*/, "")
    .replace(/\bCourse Title\b|\bCredits Earned\b|\bGrade Points\b|\bGrade\b/gi, "")
    .trim();
}

function dedupeSameAttempt(attempts) {
  const seen = new Set();
  const result = [];
  for (const c of attempts) {
    const key = `${c.code}|${c.title}|${c.credits}|${c.grade}|${c.repeatTag}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(c);
  }
  return result;
}

function chooseCountingAttempts(attempts, plan) {
  const requiredCodes = new Set([...(plan?.schoolCore || []), ...(plan?.programCoreGroups || []).flatMap(g => g.options), "CSE400"]);
  const byCode = new Map();
  for (const c of attempts) {
    if (!byCode.has(c.code)) byCode.set(c.code, []);
    byCode.get(c.code).push(c);
  }
  const counted = [];
  const notCounted = [];
  for (const group of byCode.values()) {
    const sorted = [...group].sort((a, b) => a.order - b.order);
    const rp = sorted.filter(c => c.repeatTag === "RP" && c.passed);
    const hasNt = sorted.some(c => c.repeatTag === "NT");
    const requiresRpAfterNt = hasNt && requiredCodes.has(sorted[0].code);
    const usable = sorted.filter(c => c.passed && c.repeatTag !== "NT");
    const chosen = requiresRpAfterNt ? (rp.at(-1) || null) : (rp.at(-1) || usable.at(-1) || null);
    for (const c of sorted) {
      if (chosen && c === chosen) counted.push({ ...c, counted: true, status: sorted.length > 1 ? "Counted repeat/final attempt" : "Counted" });
      else notCounted.push({ ...c, counted: false, status: c.repeatTag === "NT" ? "Not counted (NT; requires RP if core)" : (c.passed ? "Not counted (repeated/extra attempt)" : (c.grade === "I" ? "Not counted (Incomplete)" : (c.grade === "W" ? "Not counted (Withdrawal)" : "Not counted (failed)"))) });
    }
  }
  return [...counted, ...notCounted].sort((a, b) => a.order - b.order);
}

function analyzeProgress(attempts, plan) {
  const courses = chooseCountingAttempts(attempts, plan);
  const counted = courses.filter(c => c.counted);
  const codeSet = new Set(counted.map(c => c.code));
  const missing = [];
  const addMissing = (requirement, notes, credits = COURSE_CREDIT_DEFAULT) => missing.push({ requirement, notes, credits });
  const hasAny = (options) => options.some(code => codeSet.has(code));
  const countCredits = (filterFn) => counted.filter(filterFn).reduce((sum, c) => sum + c.credits, 0);

  for (const code of plan.genEd.writingRequired) if (!codeSet.has(code)) addMissing(code, "University Core - Writing Comprehension");
  for (const code of plan.genEd.stream2Required) if (!codeSet.has(code)) addMissing(code, "University Core - Math and Natural Sciences");
  for (const code of plan.genEd.stream3Required) if (!codeSet.has(code)) addMissing(code, "University Core - Arts and Humanities");
  if (!hasAny(plan.genEd.stream3Choice)) addMissing("One Arts/Humanities choice", plan.genEd.stream3Choice.join(", "));
  if (!hasAny(plan.genEd.stream4FixedChoice)) addMissing("EMB101 or DEV101", "University Core - Social Sciences");
  if (!hasAny(plan.genEd.stream4Choice)) addMissing("One Social Sciences choice", plan.genEd.stream4Choice.join(", "));
  if (!hasAny(plan.genEd.stream5Choice)) addMissing("One CST course", "University Core - Communities, Seeking Transformation");

  const genEdCredits = countCredits(c => plan.genEdAll.has(c.code) && c.credits > 0);
  if (genEdCredits < plan.genEdCreditsRequired) addMissing("GenEd electives/credits", `${plan.genEdCreditsRequired - genEdCredits} more GenEd credits needed`, plan.genEdCreditsRequired - genEdCredits);

  for (const code of plan.schoolCore) if (!codeSet.has(code)) addMissing(code, "School Core");

  for (const group of plan.programCoreGroups) {
    if (!hasAny(group.options)) addMissing(group.label, `Program Core${group.options.length > 1 ? ": " + group.options.join("/") : ""}`);
  }

  const coreCodes = new Set(plan.programCoreGroups.flatMap(g => g.options));
  const schoolCodes = new Set(plan.schoolCore);
  const programElectives = counted.filter(c =>
    c.credits > 0 &&
    !coreCodes.has(c.code) &&
    !schoolCodes.has(c.code) &&
    c.code !== "CSE400" &&
    !plan.genEdAll.has(c.code)
  );
  const programElectiveCredits = programElectives.reduce((sum, c) => sum + c.credits, 0);
  const cseElectiveCredits = programElectives.filter(c => c.code.startsWith("CSE")).reduce((sum, c) => sum + c.credits, 0);
  if (programElectiveCredits < plan.programElectiveCreditsRequired) addMissing("Program electives", `${plan.programElectiveCreditsRequired - programElectiveCredits} more elective credits needed`, plan.programElectiveCreditsRequired - programElectiveCredits);
  if (cseElectiveCredits < 3) addMissing("At least one CSE elective", "Program Elective rule", 3 - cseElectiveCredits);

  if (!codeSet.has("CSE400")) addMissing("CSE400", "Project / Internship / Thesis", PROJECT_CREDIT);

  const earned = counted.reduce((sum, c) => sum + c.credits, 0);
  return {
    program: plan.name,
    totals: {
      earned,
      required: plan.totalCreditsRequired,
      remainingCredits: Math.max(0, plan.totalCreditsRequired - earned),
      genEdCredits,
      programElectiveCredits,
      cseElectiveCredits,
      genEdCreditsRequired: plan.genEdCreditsRequired,
      programElectiveCreditsRequired: plan.programElectiveCreditsRequired
    },
    missingRequirements: missing,
    completedCourses: courses
  };
}

function extractStudentInfo(rows, text) {
  const lines = [...rows, ...String(text || "").split(/\r?\n/)].map(cleanLine).filter(Boolean);
  const full = lines.join("\n");

  let id = "";
  const idLine = lines.find(line => /Student ID/i.test(line));
  if (idLine) id = (idLine.match(/Student ID\s*:?\s*(\d{8})/i) || [])[1] || "";
  if (!id) id = (full.match(/Student ID\s*:?\s*(\d{8})/i) || [])[1] || "";

  let name = "";
  const nameLine = lines.find(line => /^Name\b/i.test(line) || /\bName\s*:/i.test(line));
  if (nameLine) {
    name = (nameLine.match(/Name\s*:?\s*(.*)$/i) || [])[1] || "";
    name = name.replace(/\s+PROGRAM\b.*$/i, "").replace(/\s+UNDERGRADUATE\b.*$/i, "").trim();
  }

  let program = "";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/PROGRAM\s*:\s*(.*)$/i);
    if (!m) continue;
    const parts = [m[1]];
    for (let j = i + 1; j < Math.min(lines.length, i + 3); j++) {
      if (/^Course No\b|^SEMESTER\b|^Student ID\b|^Name\b/i.test(lines[j])) break;
      parts.push(lines[j]);
    }
    program = cleanLine(parts.join(" ")).replace(/\s+Course No\b.*$/i, "").trim();
    break;
  }
  if (!program) {
    const pm = full.match(/PROGRAM\s*:\s*([^\n]+)(?:\n([^\n]+))?/i);
    if (pm) program = cleanLine(`${pm[1]} ${pm[2] || ""}`).replace(/\s+Course No\b.*$/i, "").trim();
  }

  const semesters = [...full.matchAll(/SEMESTER\s*:\s*((SPRING|SUMMER|FALL)\s+\d{4})/gi)].map(m => m[1]);
  const cgpas = [...full.matchAll(/CGPA\s+(\d+(?:\.\d+)?)/gi)].map(m => m[1]);
  return { name: cleanLine(name), id, program, currentSemester: semesters.at(-1) || "", cgpa: cgpas.at(-1) || "" };
}

function detectMajorFromProfile(profile) {
  const programText = String(profile?.program || "").toUpperCase();
  if (programText.includes("COMPUTER SCIENCE AND ENGINEERING")) return "CSE";
  if (programText.includes("COMPUTER SCIENCE")) return "CS";
  return "";
}

function setStatus(label, variant) {
  statusPill.className = `badge text-bg-${variant}`;
  statusPill.textContent = label;
}

function showAlert(message, variant = "info") {
  alerts.innerHTML = `<div class="alert alert-${variant}" role="alert">${escapeHtml(message)}</div>`;
}

function clearUI() {
  alerts.innerHTML = "";
  creditsEarned.textContent = "--";
  creditsRequired.textContent = "--";
  creditsRemaining.textContent = "--";
  setStudentProfile({});
  missingTable.innerHTML = `<tr><td colspan="3" class="text-muted">No data yet.</td></tr>`;
  completedTable.innerHTML = `<tr><td colspan="5" class="text-muted">No data yet.</td></tr>`;
}

function setStudentProfile(info) {
  studentName.textContent = info.name || "--";
  studentId.textContent = info.id || "--";
  studentProgram.textContent = info.program || "--";
  currentSemester.textContent = info.currentSemester || "--";
  cgpa.textContent = info.cgpa || "--";
}

function renderResult(result) {
  creditsEarned.textContent = result.totals.earned.toFixed(0);
  creditsRequired.textContent = result.totals.required.toFixed(0);
  creditsRemaining.textContent = result.totals.remainingCredits.toFixed(0);

  missingTable.innerHTML = result.missingRequirements.length
    ? result.missingRequirements.map(m => `<tr><td>${escapeHtml(m.requirement)}</td><td>${escapeHtml(m.notes)}</td><td>${Number(m.credits).toFixed(0)}</td></tr>`).join("")
    : `<tr><td colspan="3" class="text-success">No missing requirements detected.</td></tr>`;

  result.completedCourses.sort((a, b) => a.order - b.order);
  completedTable.innerHTML = result.completedCourses.length
    ? result.completedCourses.map(c => `<tr><td>${escapeHtml(c.code)}</td><td>${escapeHtml(c.title || courseTitleMap[c.code] || "")}</td><td>${Number(c.credits || 0).toFixed(2)}</td><td>${escapeHtml(c.grade + (c.repeatTag ? " (" + c.repeatTag + ")" : ""))}</td><td>${escapeHtml(c.status)}</td></tr>`).join("")
    : `<tr><td colspan="5" class="text-muted">No courses detected.</td></tr>`;

  const missingText = result.missingRequirements.map(m => `${m.requirement} (${m.credits})`).join(", ");
  const extra = `Major: ${result.program}. GenEd credits: ${result.totals.genEdCredits}/${result.totals.genEdCreditsRequired}. Program elective credits: ${result.totals.programElectiveCredits}/${result.totals.programElectiveCreditsRequired}.`;
  if (result.missingRequirements.length > 0) showAlert(`Detected missing requirements: ${missingText}. Credits remaining: ${result.totals.remainingCredits}. ${extra}`, "info");
  else showAlert(`All requirements detected as complete. Credits remaining: ${result.totals.remainingCredits}. ${extra}`, "success");
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
