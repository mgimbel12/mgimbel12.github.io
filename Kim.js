function checkPassword() {
  const input = document.getElementById("vault-pass").value;
  const message = document.getElementById("vault-msg");
  if (input === "KP2002") {
    message.innerHTML = "✅ Access granted! Welcome to Club Banana.";
  } else {
    message.innerHTML = "❌ Incorrect password. Try again!";
  }
}

function startQuiz() {
  const questions = [
    { q: "What’s Kim’s favorite color?", a: "Pink" },
    { q: "Who is Kim’s tech-savvy sidekick?", a: "Wade" },
    { q: "What animal is Rufus?", a: "Naked mole rat" },
    { q: "What’s the name of the fashion store?", a: "Club Banana" }
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

