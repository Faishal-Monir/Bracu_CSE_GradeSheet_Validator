# BRACU CS/CSE GradeSheet Validator

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![PDF.js](https://img.shields.io/badge/PDF.js-FF0000?logo=mozilla&logoColor=white)

A lightweight, browser-based gradesheet validator for BRACU CS and CSE students. Upload a BRACU grade sheet PDF, select your major, and instantly analyze completed courses, missing requirements, earned credits, remaining credits, CGPA, and student profile information.

<img src="./logo.jpg" alt="Project logo" width="160">

## Live Demo

[Open the app](https://faishal-monir.github.io/Bracu_CSE_GradeSheet_Validator/)

## Features

- Upload and analyze BRACU grade sheet PDFs directly in the browser
- Supports both **CSE** and **CS** degree validation
- PDF parsing with in-browser PDF.js
- Detects completed courses, credits, grades, and grade points
- Highlights missing required courses
- Student profile extraction:
  - Student name
  - Student ID
  - Program
  - Current semester
  - CGPA
- Calculates:
  - Credits earned
  - Credits required
  - Credits remaining
  - GenEd credits
  - Program elective credits
  - CSE elective credits
- Handles repeated or non-counted attempts such as `RP`, `NT`, failed, incomplete, or withdrawn courses
- Warns if the selected major does not match the uploaded grade sheet
- Prevents invalid results when calculated credits exceed the selected program limit
- Allows result export as a JSON file
- Dark mode toggle and font size scaling
- Fully responsive layout for mobile, tablet, and desktop screens

## Tech Stack

- **HTML5** — page structure
- **CSS3** — styling, light/dark themes, responsiveness, and animations
- **JavaScript** — PDF parsing, course extraction, validation logic, and UI rendering
- **PDF.js** — browser-based PDF text extraction
- **Bootstrap** — UI components and responsive layout

## Project Structure

```text
.
+- index.html          # Main UI
+- styles.css          # Styling (light + dark themes)
+- app.js              # PDF parsing + UI rendering
+- vendor/             # Local PDF.js build
+- logo.jpg            # Favicon / branding
+- *.pdf               # Sample PDFs (optional)
+- LICENSE             # Project license
+- README.md           # Project documentation