const affirmations = [
  "You are worthy.",
  "You are not alone.",
  "You are a light.",
  "You are healing.",
  "You are loved.",
  "You are enough."
];

function createAffirmation(text, x, y) {
  const span = document.createElement("span");
  span.className = "floating-affirmation";
  span.textContent = text;
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;
  document.body.appendChild(span);
}

function scatterAffirmations() {
  for (let i = 0; i < affirmations.length; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createAffirmation(affirmations[i], x, y);
  }
}

window.onload = scatterAffirmations;
const correctPassword = "sanctuary2025"; // You can change this to your preferred password

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-message");
  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.querySelector(".container").style.display = "block";
  } else {
    error.textContent = "Incorrect password. Please try again.";
    error.style.color = "red";
  }
}

