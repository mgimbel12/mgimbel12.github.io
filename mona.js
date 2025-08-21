function unlockQuiz() {
  const input = document.getElementById("password").value;
  const quiz = document.getElementById("quiz");

  if (input.toLowerCase() === "wayfinder") {
    quiz.classList.remove("hidden");
  } else {
    alert("Incorrect password. Hint: What does Moana call herself?");
  }
}

document.getElementById("characterQuiz").addEventListener("submit", function(e) {
  e.preventDefault();
  const answers = [...document.querySelectorAll('input[type="radio"]:checked')];
  const result = document.getElementById("result");

  if (answers.length < 2) {
    alert("Answer all questions to reveal your character!");
    return;
  }

  const tally = {};
  answers.forEach(a => {
    tally[a.value] = (tally[a.value] || 0) + 1;
  });

  const character = Object.keys(tally).reduce((a, b) => tally[a] > tally[b] ? a : b);

  let description = "";
  switch(character) {
    case "moana":
      description = "🌊 You're Moana! Brave, curious, and destined to lead.";
      break;
    case "maui":
      description = "💪 You're Maui! Bold, funny, and full of swagger.";
      break;
    case "heihei":
      description = "🐔 You're Heihei! Chaotic but lovable.";
      break;
    case "tamatoa":
      description = "✨ You're Tamatoa! Obsessed with sparkle and style.";
      break;
  }

  result.innerHTML = `<h3>${description}</h3>`;
  result.classList.remove("hidden");
});

