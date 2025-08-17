function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  const secretContent = document.getElementById("secretContent");
  const validCodes = ["clexana", "triangle", "destiny"];

  if (validCodes.includes(input)) {
    secretContent.classList.remove("hidden");
  } else {
    alert("Incorrect code. Try again.");
  }
}

