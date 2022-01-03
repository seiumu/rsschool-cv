//Listen for form submit
document.getElementById("contact-form").addEventListener("submit", submitForm);

//Submit form
function submitForm(e) {
  e.preventDefault();

  //Get values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Show alert
  document.querySelector(".alert").style.display = "flex";

  // Hide alert after 3 secs
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form (empty the input)
  document.getElementById("contact-form").reset();

  sendEmail(name, email, subject, message);
}

//Send Notification to email
function sendEmail(name, email, subject, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "bukizavr@gmail.com",
    Password: "azmplgugkjuyibjl",
    To: "serghei.musaji@gmail.com",
    From: `${email}`,
    Subject: `${subject}`,
    Body: `Name: ${name} <br/> 
                Message: ${message}`,
  });
}
