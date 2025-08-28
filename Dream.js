function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === "LoveForever") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("Oops! Try again.");
  }
}
