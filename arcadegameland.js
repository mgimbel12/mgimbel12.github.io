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
  "🌟 You are a light in the world",
  "💖 Your presence makes a difference",
  "🌈 You radiate kindness and strength",
  "🕊️ Peace flows through you",
  "🌻 You are growing beautifully",
  "🔥 Your spirit is powerful and bright",
  "🌙 Rest is sacred and deserved",
  "🎨 Your creativity is a gift",
  "🌼 You are worthy of joy",
  "🧠 Your mind is brilliant and brave"
];

function rollDice() {
  const result = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("diceResult").textContent = result;
}

// 🌟 Affirmation Catcher
const affirmations = [
  "You are enough 💫",
  "You are loved 💖",
  "You are safe 🛡️",
  "You are growing 🌱",
  "You are radiant 🌞",
  "You are resilient 🌈",
  "You are seen 👁️",
  "You are whole 🌕",
  "You are powerful 🔥",
  "You are a gift 🎁"
];

let score = 0;

function spawnAffirmation() {
  const affirm = document.createElement("div");
  affirm.className = "affirmation";
  affirm.textContent = affirmations[Math.floor(Math.random() * affirmations.length)];
  affirm.style.left = `${Math.random() * 90}%`;
  affirm.onclick = () => {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
    affirm.remove();
  };
  document.body.appendChild(affirm);
  setTimeout(() => affirm.remove(), 3000);
}

setInterval(spawnAffirmation, 1500);

