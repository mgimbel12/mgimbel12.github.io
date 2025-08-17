function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  const secretContent = document.getElementById("secretContent");
  const validCodes = ["christmasboy", "halloweenzombie", "guyfawkes"];

  if (validCodes.includes(input)) {
    secretContent.classList.remove("hidden");
  } else {
    alert("Incorrect code. Try another holiday.");
  }
}

