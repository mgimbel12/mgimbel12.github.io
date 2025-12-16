// Configuration
const sanctuaryConfig = {
  ceremonyMode: "reverent",
  animations: true,
  sounds: false,
  accessibility: { reduceMotion: false, highContrast: false }
};

// Healer definitions
const healers = {
  doctor: {
    name: "Doctor", icon: "👩‍⚕️",
    palette: { primary: "#4CAF50", aura: "#A5D6A7" },
    affirmations: [
      "Your health is precious and protected.",
      "Healing energy surrounds you.",
      "You are resilient and strong.",
      "Your body knows how to mend."
    ],
    effects: { aura: "pulse", motif: "cross" }, role: "medical"
  },
  nurse: {
    name: "Nurse", icon: "🫶",
    palette: { primary: "#FF7EB9", aura: "#FFD1E8" },
    affirmations: [
      "You are nurtured with care.",
      "Gentle hands bring you peace.",
      "You are safe in kindness.",
      "Compassion cradles your heart."
    ],
    effects: { aura: "soft-glow", motif: "heart" }, role: "nurturing"
  },
  guide: {
    name: "Spiritual Guide", icon: "🕊️",
    palette: { primary: "#5C6BC0", aura: "#C5CAE9" },
    affirmations: [
      "Your spirit is lifted in light.",
      "Peace flows through your soul.",
      "You are embraced by sacred love.",
      "Stillness renews your strength."
    ],
    effects: { aura: "rays", motif: "dove" }, role: "ceremonial"
  },
  elder: {
    name: "Wise Elder", icon: "🧓",
    palette: { primary: "#D4AF37", aura: "#FFF3B0" },
    affirmations: [
      "Wisdom lights your path.",
      "Legacy strengthens you.",
      "Your story carries power.",
      "Steady steps, faithful heart."
    ],
    effects: { aura: "glow", motif: "lantern" }, role: "wisdom"
  },
  child: {
    name: "Child of Joy", icon: "🎈",
    palette: { primary: "#FFB300", aura: "#FFE082" },
    affirmations: [
      "Joy heals your heart.",
      "Laughter is medicine.",
      "Play brings new light.",
      "Curiosity opens doors."
    ],
    effects: { aura: "sparkle", motif: "confetti" }, role: "play"
  },
  advocate: {
    name: "Community Advocate", icon: "🤝",
    palette: { primary: "#26A69A", aura: "#B2DFDB" },
    affirmations: [
      "We heal together.",
      "Your voice matters.",
      "Inclusion strengthens us.",
      "Unity carries us forward."
    ],
    effects: { aura: "ring", motif: "circle" }, role: "community"
  }
};

// State
const state = {
  activeHealerKey: "doctor",
  affirmationIndex: Object.fromEntries(Object.keys(healers).map(k => [k, 0])),
  sharedHealingMeter: 0,
  autoplayId: null
};

// DOM references
const body = document.body;
const healerButtons = document.querySelectorAll(".healer");
const messageEl = document.getElementById("message");
const srMessageEl = document.getElementById("sr-message");
const btnAffirm = document.getElementById("btnAffirm");
const btnAuto = document.getElementById("btnAuto");
const btnRandom = document.getElementById("btnRandom");
const meterFill = document.getElementById("meterFill");
const meterLabel = document.getElementById("meterLabel");
const modeReverent = document.getElementById("modeReverent");
const modePlayful = document.getElementById("modePlayful");

// Initialize
applyMode(sanctuaryConfig.ceremonyMode);
updatePalette(healers[state.activeHealerKey].palette);
updateActiveHealerUI();

// Event listeners
healerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setActiveHealer(btn.dataset.key);
  });
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveHealer(btn.dataset.key);
      e.preventDefault();
    }
  });
});

btnAffirm.addEventListener("click", () => { showAffirmation(false); });
btnRandom.addEventListener("click", () => { showAffirmation(true); });

btnAuto.addEventListener("click", () => {
  if (state.autoplayId) {
    clearInterval(state.autoplayId);
    state.autoplayId = null;
    btnAuto.textContent = "Auto-play";
  } else {
    btnAuto.textContent = "Stop auto-play";
    state.autoplayId = setInterval(() => showAffirmation(true), 2500);
  }
});

modeReverent.addEventListener("click", () => setMode("reverent"));
modePlayful.addEventListener("click", () => setMode("playful"));

// Functions
function setActiveHealer(key) {
  state.activeHealerKey = key;
  updateActiveHealerUI();
  const { palette } = healers[key];
  updatePalette(palette);
  announce(`Selected ${healers[key].name}.`);
  messageEl.textContent = `Receiving comfort from ${healers[key].name}...`;
}

function updateActiveHealerUI() {
  healerButtons.forEach(b => {
    const isActive = b.dataset.key === state.activeHealerKey;
    b.classList.toggle("active", isActive);
    b.setAttribute("aria-selected", String(isActive));
  });
}

function updatePalette(palette) {
  document.documentElement.style.setProperty("--border", palette.primary);
  document.documentElement.style.setProperty("--aura", palette.aura);
  // reset and apply aura pulse
  messageEl.classList.remove("aura-pulse");
  void messageEl.offsetWidth;
  messageEl.classList.add("aura-pulse");
}

function showAffirmation(randomize) {
  const key = state.activeHealerKey;
  const healer = healers[key];
  let idx = state.affirmationIndex[key];

  if (randomize) {
    idx = Math.floor(Math.random() * healer.affirmations.length);
  }

  const text = healer.affirmations[idx];
  messageEl.textContent = text;
  srMessageEl.textContent = text;

  // Advance index cyclically
  state.affirmationIndex[key] = (idx + 1) % healer.affirmations.length;

  // Progress meter
  incrementMeter(8);

  // Optional playful burst effect
  if (document.body.classList.contains("playful")) {
    burst();
  }
}

function incrementMeter(amount) {
  state.sharedHealingMeter = Math.min(100, state.sharedHealingMeter + amount);
  meterFill.style.width = state.sharedHealingMeter + "%";
  meterLabel.textContent = `Healing: ${state.sharedHealingMeter}%`;
  if (state.sharedHealingMeter === 100) {
    announce("Milestone reached. Sanctuary filled with healing.");
    messageEl.textContent = "Sanctuary filled with healing. Well done.";
  }
}

function burst() {
  const burstEl = document.createElement("div");
  burstEl.style.position = "absolute";
  burstEl.style.inset = "0";
  burstEl.style.pointerEvents = "none";
  burstEl.style.borderRadius = "12px";
  burstEl.style.animation = "fade 800ms ease-out forwards";
  burstEl.style.background = "radial-gradient(circle at center, rgba(255,255,255,0.6), rgba(255,255,255,0) 60%)";
  messageEl.appendChild(burstEl);
  setTimeout(() => burstEl.remove(), 800);
}

function setMode(mode) {
  sanctuaryConfig.ceremonyMode = mode;
  applyMode(mode);
  modeReverent.classList.toggle("active", mode === "reverent");
  modePlayful.classList.toggle("active", mode === "playful");
  modeReverent.setAttribute("aria-pressed", String(mode === "reverent"));
  modePlayful.setAttribute("aria-pressed", String(mode === "playful"));
  announce(`Mode set to ${mode}.`);
}

function applyMode(mode) {
  body.classList.remove("reverent", "playful");
  body.classList.add(mode);
}

function announce(text) {
  srMessageEl.textContent = text;
}
