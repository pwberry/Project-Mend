function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents); // read JSON payload
    const email = data.email; // example
    MailApp.sendEmail({
      to: "mend@project-mend.net",
      subject: "New Application",
      body: `New applicant: ${data.firstName} ${data.lastName}\nEmail: ${email}`,
    });
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
