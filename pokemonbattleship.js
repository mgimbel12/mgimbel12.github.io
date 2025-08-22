function checkPassword() {
  const input = document.getElementById("rocket-pass").value;
  const message = document.getElementById("vault-message");
  if (input === "TeamRocket123") {
    message.innerHTML = "<p>✅ Access granted! You found Meowth’s stash!</p>";
  } else {
    message.innerHTML = "<p>❌ Incorrect password. Try again!</p>";
  }
}

function startQuiz() {
  const questions = [
    { q: "Who is Pikachu’s trainer?", a: "Ash" },
    { q: "What Pokémon did James buy?", a: "Magikarp" },
    { q: "Which Pokémon evolves into Raichu?", a: "Pikachu" },
    { q: "What type is Charizard?", a: "Fire/Flying" }
  ];

  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const answer = prompt(questions[i].q);
    if (answer && answer.toLowerCase() === questions[i].a.toLowerCase()) {
      score++;
    }
  }

  document.getElementById("quiz-result").innerHTML = `<p>You scored ${score}/${questions.length}!</p>`;
}

