function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const message = document.getElementById("message");

  const correctPassword = "mistletoe2025"; // You can change this!

  if (input === correctPassword) {
    message.textContent = "🎉 Welcome! Redirecting to the vault...";
    message.style.color = "#32CD32";
    setTimeout(() => {
      window.location.href = "vault.html"; // Your secret page
    }, 1500);
  } else {
    message.textContent = "❌ Incorrect password. Try again!";
    message.style.color = "#FF6347";
  }
}

