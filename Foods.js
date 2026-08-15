// Simple filter to show one holiday section or all

const buttons = document.querySelectorAll(".main-nav button");
const sections = {
  halloween: document.getElementById("halloween"),
  christmas: document.getElementById("christmas"),
  easter: document.getElementById("easter"),
  pjday: document.getElementById("pjday"),
};

function showOnly(key) {
  Object.entries(sections).forEach(([name, el]) => {
    el.style.display = key === "all" || key === name ? "block" : "none";
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;
    showOnly(target);
  });
});

// Default: show all
showOnly("all");
