function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");
  const content = document.querySelector(".arcade-content");

  const correctPassword = "sanctuary123"; // You can change this

  if (input === correctPassword) {
    document.querySelector(".login-container").classList.add("hidden");
    content.classList.remove("hidden");
  } else {
    message.textContent = "❌ Incorrect password. Try again.";
  }
}
