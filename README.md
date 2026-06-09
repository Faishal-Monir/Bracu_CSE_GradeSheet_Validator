# BRACU Gradesheet Validator - CS/CSE Dynamic Logic

This version keeps the existing UI styling and updates the validator logic so it can:

- validate both CSE and CS gradesheets through a major dropdown;
- use 136 total credits for CSE and 124 total credits for CS;
- keep the shared University Core and School Core constraints;
- use separate Program Core and Program Elective requirements for CSE and CS;
- count repeated courses correctly, including `(NT)` and `(RP)` grade-sheet tags;
- require an `RP` replacement when a core course was marked `NT`;
- ignore `I` (Incomplete) and `W` (Withdrawal) attempts for completed-credit counting;
- parse non-CSE courses such as ENG, BNG, HUM, ECO, POL, CST, MAT, PHY, BIO, ENV and others;
- count all courses as 3 credits except `CSE400`, which is 4 credits.

## Run locally

Use a local server because browsers often block PDF parsing from `file://` URLs:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

The page uses PDF.js and Bootstrap from public CDNs.
