// script.js
function revealResult() {
  const result = document.getElementById("result");
  const responses = [
    "You strategize like Luthor himself.",
    "Cunning, precise, and always two steps ahead.",
    "If power is knowledge, you're ready to rule."
  ];
  const randomMessage = responses[Math.floor(Math.random() * responses.length)];
  result.textContent = randomMessage;
}
