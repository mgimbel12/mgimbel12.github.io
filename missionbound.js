function toggleMore() {
  const content = document.getElementById("moreContent");
  content.style.display = content.style.display === "none" ? "block" : "none";
}

function setMood(emoji) {
  document.getElementById("moodDisplay").textContent = `Your mood: ${emoji}`;
}

function checkAnswer(value) {
  const result = document.getElementById("quizResult");
  if (value === "Belem") {
    result.textContent = "✅ Correct!";
  } else {
    result.textContent = "❌ Try again!";
  }
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const content = document.getElementById("lockedContent");
  if (input.toLowerCase() === "strongside") {
    content.style.display = "block";
  } else {
    alert("Incorrect password. Try again.");
  }
}
function toggleLanguage() {
  alert("Language toggle coming soon! This site will support bilingual storytelling.");
}
