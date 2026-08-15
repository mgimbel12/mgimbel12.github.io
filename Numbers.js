// SECTION FILTER
const buttons = document.querySelectorAll(".main-nav button");
const sections = {
  counting: document.getElementById("counting"),
  cash: document.getElementById("cash"),
  art: document.getElementById("art"),
  practice: document.getElementById("practice"),
};

function showOnly(key) {
  Object.entries(sections).forEach(([name, el]) => {
    el.style.display = key === "all" || key === name ? "block" : "none";
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showOnly(btn.dataset.section);
  });
});

showOnly("all");

// COUNTING NUMBERS
let count = 0;
const countDisplay = document.getElementById("count-display");

document.getElementById("count-up").onclick = () => {
  count++;
  countDisplay.textContent = count;
};

document.getElementById("count-down").onclick = () => {
  count--;
  countDisplay.textContent = count;
};

document.getElementById("count-reset").onclick = () => {
  count = 0;
  countDisplay.textContent = count;
};

// CASH COUNTING
let cashTotal = 0;
const cashTotalDisplay = document.getElementById("cash-total");

document.querySelectorAll(".cash-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    cashTotal += Number(btn.dataset.value);
    cashTotalDisplay.textContent = `Total: $${cashTotal.toFixed(2)}`;
  });
});

document.getElementById("cash-reset").onclick = () => {
  cashTotal = 0;
  cashTotalDisplay.textContent = "Total: $0";
};

// MATH ART DRAWING
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctx.fillStyle = "#ff9800";
  ctx.fillRect(x, y, 4, 4);
});

document.getElementById("clear-art").onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// NUMBER PRACTICE GAME
let correctAnswer = null;

function newQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 5) + 1;
  correctAnswer = a + b;
  document.getElementById("math-question").textContent =
    `What is ${a} + ${b}?`;
  document.getElementById("math-feedback").textContent = "";
}

document.getElementById("new-question").onclick = newQuestion;

document.getElementById("check-answer").onclick = () => {
  const userAnswer = Number(document.getElementById("math-answer").value);
  const feedback = document.getElementById("math-feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "That is correct. Great job!";
  } else {
    feedback.textContent = "That is not correct. Try again with care.";
  }
};
