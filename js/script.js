document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent form submission

var form = event.target;
var name = form.elements["name"].value;
var email = form.elements["email"].value;
var message = form.elements["message"].value;

var emailSubject = "Contact Request - " + name;
var emailBody = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

var emailLink = document.getElementById("emailLink");
emailLink.href = "mailto:tyler.russell1@aol.com?subject=" + encodeURIComponent(emailSubject) +
                    "&body=" + encodeURIComponent(emailBody);

emailLink.click(); // Trigger email link programmatically
});