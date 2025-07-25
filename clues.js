function revealClue() {
  const clues = [
    "Look beneath the willow tree.",
    "The red book hides a secret.",
    "Mirror, mirror—not just for reflection.",
    "Time travels differently in Room 7."
  ];
  const randomIndex = Math.floor(Math.random() * clues.length);
  document.getElementById("clue-text").innerText = clues[randomIndex];
}
