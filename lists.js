function checkPassword() {
  const input = document.getElementById("password").value;
  const trailer = document.getElementById("trailer");

  if (input.toLowerCase() === "mistletoe") {
    trailer.classList.remove("hidden");
  } else {
    alert("Oops! Try again. Hint: It's something you kiss under.");
  }
}

