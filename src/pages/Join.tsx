function doPost(e) {
  try {
    if (!e.postData || !e.postData.contents) throw new Error("No POST data received");

    Logger.log(JSON.stringify(e)); // debug log
    const data = JSON.parse(e.postData.contents);
    Logger.log(data);

    MailApp.sendEmail({
      to: "mend@project-mend.net",
      subject: "New Application",
      body: `New applicant: ${data.firstName} ${data.lastName}\nEmail: ${data.email}`,
    });

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    Logger.log(err);
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
