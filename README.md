# BRACU Gradesheet Validator

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![PDF.js](https://img.shields.io/badge/PDF.js-FF0000?logo=mozilla&logoColor=white)

A lightweight, browser-based gradesheet analyzer for BRACU CSE. Upload a BRACU CSE grade sheet PDF, extract completed courses, and view missing core requirements with a clean, responsive UI.

<img src="./logo.jpg" alt="Project logo" width="160">

## Features

- PDF parsing with in-browser PDF.js
- Detects completed courses and grades
- Highlights missing required courses
- Student profile extraction (name, ID, program, current semester, CGPA)
- Dark mode toggle and font size scaling
- Fully responsive layout (mobile, tablet, desktop)

## Project structure

```
.
+- index.html          # Main UI
+- styles.css          # Styling (light + dark themes)
+- app.js              # PDF parsing + UI rendering
+- vendor/             # Local PDF.js build
+- logo.jpg            # Favicon / branding
+- *.pdf               # Sample PDFs (optional)
```

## Getting started

### Option 1: Simple local server (recommended)

Some browsers block PDF parsing on `file://`. Use a local server:

```bash
python -m http.server 5500
```

Then open:

```
http://localhost:5500
```

### Option 2: VS Code Live Server

1) Install the **Live Server** extension  
2) Right-click `index.html` ? **Open with Live Server**

## How to use

1) Open the app in a browser.  
2) Upload a BRACU grade sheet PDF (text-based).  
3) Click **Analyze PDF**.  
4) Review detected courses, missing requirements, and profile data.

## Notes

- Best results come from text-based PDF exports.  
- Scanned image PDFs are not supported without OCR.

## License

See `LICENSE`.


## Live link

https://faishal-monir.github.io/Bracu_CSE_GradeSheet_Validator/

