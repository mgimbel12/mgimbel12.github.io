function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");
  const gate = document.querySelector(".gate");
  const vault = document.querySelector(".vault");

  const correctPassword = "mission2025";

  if (input === correctPassword) {
    gate.style.display = "none";
    vault.style.display = "block";
  } else {
    error.textContent = "Incorrect password. Try again.";
  }
}

