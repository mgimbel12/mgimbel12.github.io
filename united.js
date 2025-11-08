const affirmations = [
  "We honor your courage.",
  "Your sacrifice echoes through generations.",
  "Freedom rings because of you.",
  "You are never forgotten.",
  "Valor lives in every heartbeat of America."
];

function generateAffirmation() {
  const output = document.getElementById("affirmation-output");
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  output.textContent = `"${random}"`;
}

