"use strict";

// script.js Contact Page

$(document).ready(function () {
  $(".tron").height($(window).height());
});

// Check if the HTTP request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve values from the POST data
  $name = $_POST["name"];
  $last_name = $_POST["last_name"];
  $email = $_POST["email"];
  $question = $_POST["question"];

  // Regular expressions for basic validation
  var nameRegex = /^[a-zA-Z]+$/; // Allows only alphabetic characters
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validates email format

  // Check if name and email pass validation
  if (!nameRegex.test($name)) {
    alert("Please enter a valid name.");
    return false; // Prevent form submission
  }

  if (!nameRegex.test($last_name)) {
    alert("Please enter a valid last name.");
    return false; // Prevent form submission
  }

  if (!emailRegex.test($email)) {
    alert("Please enter a valid email address.");
    return false; // Prevent form submission
  }

  // Set the recipient email address
  $to = "48c0f5998d21d70f87031958dd7df70b";

  // Set the subject for the email
  $subject = "New Form Submission";

  // Compose the email message
  $message = "Name: $name $last_name\n";
  $message += "Email: $email\n";
  $message += "Question:\n$question";

  // Use additional headers as needed, such as for sending HTML emails
  $headers = "From: $email";

  // Send the email using the mail function
  mail($to, $subject, $message, $headers);
}
