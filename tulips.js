const affirmations = {
  rose: "You are blooming in your own time.",
  tulip: "You rise with grace and color.",
  daisy: "You shine with gentle joy."
};

function revealAffirmation(flower) {
  const text = affirmations[flower];
  document.getElementById("affirmationText").textContent = text;
}

