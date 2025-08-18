function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const vault = document.getElementById("vaultContent");
  const correctPassword = "luthor2025";

  if (input === correctPassword) {
    vault.classList.remove("hidden");
  } else {
    alert("Access Denied. You are not authorized.");
  }
}

