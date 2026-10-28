// Receives survey submissions from index.html and writes them to this spreadsheet.
// One row per sound. Resubmitting replaces that respondent's earlier rows.
// Setup: see README.md, "Collecting answers in Google Sheets".

// The results sheet, so the script also works as a standalone project at script.google.com
const SHEET_ID = "1b6PFHoDnMey60xM-q1J8NavA5ugJUdk7lRZ-2XluCec";

const HEADERS = ["Submitted at", "Respondent", "Sound set", "Sound", "File", "Tone code",
  "What it means", "My pick", "Rating", "Set notes"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const body = JSON.parse(e.postData.contents);
    const respondent = String(body.respondent || "").slice(0, 64);
    if (!respondent || !Array.isArray(body.rows) || body.rows.length > 100) return reply({ ok: false });

    const book = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.openById(SHEET_ID);
    const sheet = book.getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    // Drop this respondent's earlier submission (bottom-up so row numbers stay valid)
    const last = sheet.getLastRow();
    if (last > 1) {
      const ids = sheet.getRange(2, 2, last - 1, 1).getValues();
      for (let i = ids.length - 1; i >= 0; i--) if (ids[i][0] === respondent) sheet.deleteRow(i + 2);
    }

    const at = new Date();
    const clip = (v, n) => String(v == null ? "" : v).slice(0, n);
    // A leading = + - @ would make Sheets treat a typed answer as a formula
    const text = (v, n) => { const s = clip(v, n); return /^[=+\-@]/.test(s) ? "'" + s : s; };
    const rows = body.rows.map(r => [at, respondent, clip(r.set, 40), clip(r.sound, 40), clip(r.file, 40),
      clip(r.code, 20), text(r.means, 300), r.pick ? "Yes" : "", r.rating ? Number(r.rating) : "", text(r.notes, 1000)]);
    if (rows.length) sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
    return reply({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

// Visiting the web app URL shows nothing from the sheet
function doGet() {
  return reply({ ok: true });
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
