function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  const message = document.getElementById("password-message");
  const quizSection = document.getElementById("quiz");

  if (passwordInput === "kitty123") {
    message.textContent = "Access granted! 💖";
    message.style.color = "green";
    quizSection.style.display = "block";
  } else {
    message.textContent = "Wrong password! Try again 🐾";
    message.style.color = "red";
    quizSection.style.display = "none";
  }
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const result = document.getElementById("quiz-result");

  let score = 0;
  if (q1 && q1.value === "red") score++;
  if (q2 && q2.value === "bow") score++;

  result.textContent = `You scored ${score}/2! 🎉`;
});

