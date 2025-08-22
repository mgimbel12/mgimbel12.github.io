function checkAnswer() {
  const input = document.getElementById("equation").value;
  const message = document.getElementById("access-message");
  if (parseInt(input) === 5) {
    message.textContent = "✅ Access Granted to LuthorCorp Vault";
    message.style.color = "#00ff00";
  } else {
    message.textContent = "❌ Incorrect. Try again.";
    message.style.color = "#ff0000";
  }
}

function checkQuiz(answer) {
  const result = document.getElementById("quiz-result");
  if (answer === "Kryptonite") {
    result.textContent = "Correct! Kryptonite is Lex’s favorite weapon.";
    result.style.color = "#00ff00";
  } else {
    result.textContent = "Wrong! Lex would be disappointed.";
    result.style.color = "#ff0000";
  }
}

// 🎄 Countdown Timer
const target = new Date("Dec 24, 2025 23:59:59").getTime();
const countdownEl = document.getElementById("countdown-timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = target - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdownEl.textContent = `${days} days until Lexmas`;
}, 1000);

