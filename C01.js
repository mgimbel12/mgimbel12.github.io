function newAffirmation() {
  const affirmations = [
    "You are the heartbeat of freedom.",
    "Your courage echoes across generations.",
    "You carry the torch of unity.",
    "Bravery is your legacy.",
    "You are the shield of peace.",
    "America stands because you stand strong.",
    "Your service is a sacred echo."
  ];
  const random = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmation").innerText = affirmations[random];
}
