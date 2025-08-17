function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const secretContent = document.getElementById("secretContent");
  const correctPassword = "luthor2025";

  if (input === correctPassword) {
    secretContent.classList.remove("hidden");
  } else {
    alert("Access denied. Lex doesn’t tolerate weak codes.");
  }
}
