document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (password === "pixiedust") {
    document.getElementById("message").textContent = `Welcome, ${username}! The magic awaits... 🏰`;
  } else {
    document.getElementById("message").textContent = "Oops! That’s not the right spell. Try again!";
    document.getElementById("message").style.color = "red";
  }
});
