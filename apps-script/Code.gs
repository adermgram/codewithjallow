/**
 * Code with Jallow: saves website forms into a Google Sheet.
 * Paste this whole file into Extensions > Apps Script (see README.md, step 2).
 * Registrations go to the "Registrations" tab, messages to the "Messages" tab.
 */
const NOTIFY_EMAIL = ""; // optional: your email, to get a notification for each submission

const HEADERS = {
  Registrations: ["Submitted", "Email", "Name", "Gender", "Class/Grade", "WhatsApp", "Computer level", "Computer at home", "Interested in", "Why join", "Student", "Status", "Notes"],
  Messages: ["Submitted", "Name", "Phone", "Email", "Message", "Handled"]
};

function doPost(e) {
  const p = e.parameter;
  if (p.website) return ok(); // spam trap
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tab = p.type === "registration" ? "Registrations" : "Messages";
  let sh = ss.getSheetByName(tab);
  if (!sh) {
    sh = ss.insertSheet(tab);
    sh.appendRow(HEADERS[tab]);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS[tab].length).setFontWeight("bold");
  }
  const now = new Date();
  if (tab === "Registrations") {
    sh.appendRow([now, p.email, p.name, p.gender, p.grade, "'" + p.phone, p.level, p.computer, p.interests, p.reason, p.student, "New", ""]);
  } else {
    sh.appendRow([now, p.name, "'" + p.phone, p.email, p.message, "No"]);
  }
  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL, "Code with Jallow: new " + (tab === "Registrations" ? "registration" : "message"),
      Object.keys(p).map(function (k) { return k + ": " + p[k]; }).join("\n"));
  }
  return ok();
}

function ok() {
  return ContentService.createTextOutput("ok");
}
