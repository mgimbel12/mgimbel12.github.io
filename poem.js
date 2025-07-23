const reflectionBox = document.getElementById("reflectionBox");
const shuffleBtn = document.getElementById("shuffleBtn");

const reflections = [
  "What thread have you sewn today?",
  "Did you patch a wound or let it breathe?",
  "Every knot holds a truth you once feared.",
  "Loose ends are poems unfinished.",
  "Fold the day into your heart gently.",
  "You are the weaver of your own quiet legacy."
];

shuffleBtn.addEventListener("click", () => {
  const randomLine = reflections[Math.floor(Math.random() * reflections.length)];
  reflectionBox.textContent = `"${randomLine}"`;
});
