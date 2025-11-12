function revealAffirmation(name) {
  const affirmations = {
    Ana: "Her kindness echoes across generations. Her strength is our sanctuary."
  };
  alert(affirmations[name] || "Affirmation not found.");
}

function generateEcho() {
  const input = document.getElementById("verseInput").value;
  const output = document.getElementById("echoOutput");
  if (input.trim() === "") {
    output.innerHTML = "<p>Please enter a verse to echo.</p>";
    return;
  }
  const echoed = input.split(" ").map(word => word + "…").join(" ");
  output.innerHTML = `<p><strong>Echoed Verse:</strong> ${echoed}</p>`;
}

function showSymbolMeaning(symbol) {
  const meanings = {
    "🕊️": "Peace and remembrance",
    "🛡️": "Protection and service",
    "🌈": "Hope and healing"
  };
  document.getElementById("symbolMeaning").innerText = meanings[symbol] || "Symbol meaning not found.";
}

function speakAffirmation() {
  const msg = new SpeechSynthesisUtterance("You are safe, You are seen, and You are loved.");
  window.speechSynthesis.speak(msg);
}

function updateSeasonalMessage() {
  const month = new Date().getMonth();
  const message = document.getElementById("seasonalMessage");
  const messages = [
    "❄️ January: A time for reflection and renewal.",
    "💖 February: Love and remembrance bloom.",
    "🌸 March: New beginnings take root.",
    "🌷 April: Growth and gratitude awaken.",
    "🌞 May: Light returns to the sanctuary.",
    "🌻 June: Joy and community flourish.",
    "🌊 July: Freedom echoes through the land.",
    "🌽 August: Harvesting memories and meaning.",
    "🍁 September: Honor and transition.",
    "🎃 October: Shadows and stories intertwine.",
    "🦃 November: Gratitude in every breath.",
    "🎄 December: Light, legacy, and love."
  ];
  message.innerText = messages[month];
}

function triggerDispatch() {
  const echo = "Affirmation Dispatch Activated: You are protected. Help is on the way. You are not alone.";
  document.getElementById("dispatchEcho").innerText = echo;
  const msg = new SpeechSynthesisUtterance(echo);
  window.speechSynthesis.speak(msg);
}

window.onload = updateSeasonalMessage;

