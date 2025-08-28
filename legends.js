const correctPassword = "legends2025";

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");

  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("last-updated").textContent = new Date().toLocaleString();
  } else {
    errorMsg.textContent = "Incorrect password. Try again.";
  }
}

