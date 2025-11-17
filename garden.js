const meanings = {
  dove: {
    title: "🕊️ Dove of Peace",
    message: "You carry serenity into every space. Your presence is a sanctuary of calm."
  },
  flame: {
    title: "🔥 Flame of Courage",
    message: "Your spirit burns with resilience. You ignite hope in others through your strength."
  },
  tree: {
    title: "🌳 Tree of Legacy",
    message: "Rooted in love, you grow upward with grace. Your story branches into generations."
  },
  star: {
    title: "⭐ Star of Guidance",
    message: "You shine through darkness. Your wisdom is a beacon for those seeking truth."
  },
  water: {
    title: "💧 Drop of Renewal",
    message: "You flow with compassion. Every tear you shed waters the garden of healing."
  }
};

function revealSymbol(symbolKey) {
  const symbol = meanings[symbolKey];
  const output = document.getElementById("symbolOutput");
  output.innerHTML = `<h2>${symbol.title}</h2><p>${symbol.message}</p>`;
}

