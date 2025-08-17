function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  const secretContent = document.getElementById("secretContent");
  const validCodes = ["chirp2025", "featherkey", "skywhistle"];

  if (validCodes.includes(input)) {
    secretContent.classList.remove("hidden");
  } else {
    alert("Wrong bird call. Try another hashtag.");
  }
}
