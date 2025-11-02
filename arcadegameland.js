// 🔐 Password Gate
function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");
  const content = document.querySelector(".arcade-content");

  const correctPassword = "sanctuary123"; // Customize as needed

  if (input === correctPassword) {
    document.querySelector(".login-container").classList.add("hidden");
    content.classList.remove("hidden");
  } else {
    message.textContent = "❌ Incorrect password. Try again.";
  }
}

// 🎲 Dice of Destiny
const messages = [
  "🕊️ Peace is near",
  "🌈 You are radiant",
  "🌟 Keep going",
  "🧠 Your mind is a gift",
  "💖 You are enough"
];

function rollDice() {
  const result = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("diceResult").textContent = result;
}
