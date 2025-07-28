document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  if (!email.match(emailPattern)) {
    formMessage.style.color = "red";
    formMessage.textContent = "✉️ Please enter a valid email address.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "✅ Thank you! Your message has been sent.";
  this.reset();
});
