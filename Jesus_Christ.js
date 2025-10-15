const correctPassword = "grace2025";

function unlockMessage() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");
  const message = document.getElementById("message");

  if (input === correctPassword) {
    message.classList.remove("hidden");
    error.textContent = "";
  } else {
    error.textContent = "Incorrect password. Please try again.";
    message.classList.add("hidden");
  }
}
