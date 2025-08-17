function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const secretContent = document.getElementById("secretContent");
  const correctPassword = "krypton2025";

  if (input === correctPassword) {
    secretContent.classList.remove("hidden");
  } else {
    alert("Access denied. Only those of the House of El may enter.");
  }
}

