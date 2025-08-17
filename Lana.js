function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const secretContent = document.getElementById("secretContent");

  const correctPassword = "meteorrocks"; // You can change this!

  if (input === correctPassword) {
    secretContent.classList.remove("hidden");
  } else {
    alert("Incorrect password. Try again.");
  }
}

