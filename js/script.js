// Dynamic Welcome Message
document.getElementById("welcome-text").innerText =
  "Saya, Faisal Mochamad ramdan";

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let result = document.getElementById("formResult");

  if (name === "" || email === "" || phone === "" || message === "") {
    result.style.color = "red";
    result.innerText = "All fields are required!";
    return;
  }

  // Simple Email Validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    result.style.color = "red";
    result.innerText = "Please enter a valid email address.";
    return;
  }

  result.style.color = "green";
  result.innerHTML = `
    <p><strong>Terima kasih, ${name}!</strong></p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>
  `;

  document.getElementById("contactForm").reset();
});
