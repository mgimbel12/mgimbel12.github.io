function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  const secretContent = document.getElementById("secretContent");
  const validCodes = ["torchlight", "meteortruth", "wallofweird"];

  if (validCodes.includes(input)) {
    secretContent.classList.remove("hidden");
  } else {
    alert("Access denied. Try another Torch code.");
  }
}
