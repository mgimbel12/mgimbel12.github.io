function checkPassword() {
  const input = document.getElementById("accessCode").value;
  const secretContent = document.getElementById("secretContent");

  if (input.toLowerCase() === "kryptonite") {
    secretContent.style.display = "block";
  } else {
    alert("Access denied by LexCorp. Try again.");
  }
}

