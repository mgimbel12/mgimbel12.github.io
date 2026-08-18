// Simple "weather of life" moods
const weatherMoods = [
  "Today feels like gentle sunshine—quiet, warm, and full of small possibilities.",
  "Clouds gather, but they remind us that change is part of every story.",
  "A storm is passing through—intense, loud, but it clears space for something new.",
  "Soft rain falls, washing old worries into the soil where new ideas can grow.",
  "The sky is clear and wide, like a fresh page waiting for the next chapter."
];

const statusEl = document.getElementById("weather-status");
const buttonEl = document.getElementById("update-weather");

// Pick a random mood
function updateWeatherMood() {
  const randomIndex = Math.floor(Math.random() * weatherMoods.length);
  statusEl.textContent = weatherMoods[randomIndex];
}

// Initial mood on load
updateWeatherMood();

// Change mood on button click
buttonEl.addEventListener("click", updateWeatherMood);
