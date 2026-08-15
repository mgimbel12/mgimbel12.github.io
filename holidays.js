// script.js

// Theme switching
const themeButtons = document.querySelectorAll(".theme-switcher button");

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    document.body.classList.remove("theme-halloween", "theme-christmas", "theme-easter");
    if (theme === "halloween") document.body.classList.add("theme-halloween");
    if (theme === "christmas") document.body.classList.add("theme-christmas");
    if (theme === "easter") document.body.classList.add("theme-easter");
  });
});

// Mood tracker (simple localStorage)
const moodSelect = document.getElementById("mood-select");
const saveMoodBtn = document.getElementById("save-mood");
const moodMessage = document.getElementById("mood-message");

if (saveMoodBtn) {
  // Load saved mood
  const savedMood = localStorage.getItem("holidayMood");
  if (savedMood && moodSelect) {
    moodSelect.value = savedMood;
    moodMessage.textContent = `Your last saved mood: ${savedMood}`;
  }

  saveMoodBtn.addEventListener("click", () => {
    const mood = moodSelect.value;
    if (!mood) {
      moodMessage.textContent = "Please choose a mood to save.";
      return;
    }
    localStorage.setItem("holidayMood", mood);
    moodMessage.textContent = `Mood saved: ${mood}`;
  });
}

// Dessert randomizer
const desserts = [
  { name: "Yule Log", holiday: "christmas" },
  { name: "Peppermint Bark", holiday: "christmas" },
  { name: "Gingerbread Pudding", holiday: "christmas" },
  { name: "Eggnog Cheesecake", holiday: "christmas" },
  { name: "Pumpkin Cupcakes", holiday: "halloween" },
  { name: "Candy‑Corn Parfait", holiday: "halloween" },
  { name: "Spooky Chocolate Mousse", holiday: "halloween" },
  { name: "Lemon Bars", holiday: "easter" },
  { name: "Carrot Cake Pudding", holiday: "easter" },
  { name: "Pastel Sugar Cookies", holiday: "easter" },
];

const randomDessertBtn = document.getElementById("random-dessert");
const dessertResult = document.getElementById("dessert-result");

if (randomDessertBtn) {
  randomDessertBtn.addEventListener("click", () => {
    const random = desserts[Math.floor(Math.random() * desserts.length)];
    dessertResult.textContent = `Try: ${random.name} (${random.holiday.toUpperCase()})`;
  });
}

// Recipe index with filters
const recipeListEl = document.getElementById("recipe-list");
const filterHoliday = document.getElementById("filter-holiday");
const filterDifficulty = document.getElementById("filter-difficulty");
const filterTime = document.getElementById("filter-time");

const recipes = [
  {
    name: "Yule Log",
    holiday: "christmas",
    difficulty: "medium",
    time: "long",
  },
  {
    name: "Peppermint Bark",
    holiday: "christmas",
    difficulty: "easy",
    time: "short",
  },
  {
    name: "Gingerbread Pudding",
    holiday: "christmas",
    difficulty: "medium",
    time: "medium",
  },
  {
    name: "Eggnog Cheesecake",
    holiday: "christmas",
    difficulty: "hard",
    time: "long",
  },
  {
    name: "Pumpkin Cupcakes",
    holiday: "halloween",
    difficulty: "medium",
    time: "medium",
  },
  {
    name: "Candy‑Corn Parfait",
    holiday: "halloween",
    difficulty: "easy",
    time: "short",
  },
  {
    name: "Spooky Chocolate Mousse",
    holiday: "halloween",
    difficulty: "medium",
    time: "medium",
  },
  {
    name: "Lemon Bars",
    holiday: "easter",
    difficulty: "easy",
    time: "short",
  },
  {
    name: "Carrot Cake Pudding",
    holiday: "easter",
    difficulty: "medium",
    time: "medium",
  },
  {
    name: "Pastel Sugar Cookies",
    holiday: "easter",
    difficulty: "easy",
    time: "short",
  },
];

function renderRecipes() {
  if (!recipeListEl) return;

  const h = filterHoliday.value;
  const d = filterDifficulty.value;
  const t = filterTime.value;

  recipeListEl.innerHTML = "";

  const filtered = recipes.filter((r) => {
    const matchHoliday = h ? r.holiday === h : true;
    const matchDifficulty = d ? r.difficulty === d : true;
    const matchTime = t ? r.time === t : true;
    return matchHoliday && matchDifficulty && matchTime;
  });

  if (filtered.length === 0) {
    recipeListEl.innerHTML = "<li>No recipes match those filters.</li>";
    return;
  }

  filtered.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = `${r.name} — ${r.holiday.toUpperCase()}, ${r.difficulty}, prep: ${r.time}`;
    recipeListEl.appendChild(li);
  });
}

if (recipeListEl) {
  renderRecipes();
  [filterHoliday, filterDifficulty, filterTime].forEach((el) => {
    if (el) el.addEventListener("change", renderRecipes);
  });
}
