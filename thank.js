function revealTip() {
  const tips = [
    "Add a pinch of nutmeg for extra warmth.",
    "Use maple syrup instead of sugar for a richer flavor.",
    "Top with pecans for crunch and contrast.",
    "Bake in individual ramekins for a personal touch.",
    "Share a memory while you stir—it's the season of stories."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").textContent = randomTip;
}
