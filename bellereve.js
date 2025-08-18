function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const vault = document.getElementById("vaultContent");
  const correctPassword = "33point1";

  if (input === correctPassword) {
    vault.classList.remove("hidden");
  } else {
    alert("Access Denied. Belle Reve security has been notified.");
  }
}
