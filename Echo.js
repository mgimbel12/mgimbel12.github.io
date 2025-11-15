function newAffirmation() {
  const affirmations = [
    "You are a sanctuary in motion.",
    "Your story is sacred and strong.",
    "Peace flows through your presence.",
    "You are a light in every season.",
    "Your voice echoes healing across generations.",
    "You carry the legacy of love and resilience.",
    "You are the keeper of ceremonial truth."
  ];
  const random = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmation").innerText = affirmations[random];
}

