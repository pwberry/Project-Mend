/**
 * Handles POST requests with JSON payload and sends email.
 */
function doPost(e) {
  try {
    // Ensure POST data exists
    if (!e.postData || !e.postData.contents) {
      throw new Error("No POST data received");
    }

    // Parse JSON payload
    const data = JSON.parse(e.postData.contents);
    Logger.log("Received data: " + JSON.stringify(data));

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email) {
      throw new Error("Missing required fields: firstName, lastName, or email");
    }

    // Send email
    MailApp.sendEmail({
      to: "pb112233@gmail.com",  // change to your desired recipient
      subject: "New Application",
      body: `New applicant: ${data.firstName} ${data.lastName}\nEmail: ${data.email}`
    });

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log("Error: " + err);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional doGet function for testing in a browser.
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Use POST to submit data" }))
    .setMimeType(ContentService.MimeType.JSON);
}
