// script.js

// Simulated weather check
document.addEventListener("DOMContentLoaded", () => {
  const weatherBtn = document.getElementById("checkWeatherBtn");
  const weatherResult = document.getElementById("weatherResult");
  const lifeForm = document.getElementById("lifeForm");
  const reflectionResult = document.getElementById("reflectionResult");

  if (weatherBtn) {
    weatherBtn.addEventListener("click", () => {
      // Simple demo: in a real app, you’d call a weather API
      const messages = [
        "Today is sunny—maybe a good day to take a small step forward.",
        "Cloudy skies, but your story is still unfolding.",
        "Rainy weather—perfect time to reflect and care for yourself.",
        "Windy and changing—just like life, full of movement and possibility."
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      weatherResult.textContent = randomMessage;
    });
  }

  // Fill in the blanks reflection
  if (lifeForm) {
    lifeForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const mentalHealth = document.getElementById("mentalHealth").value.trim();
      const life = document.getElementById("life").value.trim();
      const situation = document.getElementById("situation").value.trim();

      let summary = "Your Reflection:\n\n";

      summary += mentalHealth
        ? `Mental Health: "${mentalHealth}"\n`
        : `Mental Health: (not filled in yet)\n`;

      summary += life
        ? `Life: "${life}"\n`
        : `Life: (not filled in yet)\n`;

      summary += situation
        ? `Situation of Life: "${situation}"\n`
        : `Situation of Life: (not filled in yet)\n`;

      summary +=
        "\nRemember: every circumstance and situation is part of a larger story. " +
        "Reaching out for a helping hand—friends, family, professionals, community—" +
        "is a sign of strength, not weakness.";

      reflectionResult.textContent = summary;
      reflectionResult.style.display = "block";
    });
  }
});
