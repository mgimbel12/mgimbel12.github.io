function checkPassword() {
  const input = document.getElementById("password").value;
  const trailer = document.getElementById("trailer");

  if (input.toLowerCase() === "olaf") {
    trailer.classList.remove("hidden");
  } else {
    alert("Try again! Hint: He's warm hugs and carrot noses.");
  }
}
