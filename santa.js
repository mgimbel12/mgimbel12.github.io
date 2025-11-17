// Countdown to Christmas (December 25)
function updateCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(`${year}-12-25T00:00:00`);
  if (now > target) {
    // If it’s past Christmas, count down to next year
    target.setFullYear(year + 1);
  }
  const diff = target - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  document.getElementById("countdown").textContent =
    `Countdown to Christmas: ${days}d ${hours}h ${mins}m ${secs}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Wish list
const wishForm = document.getElementById("wishForm");
const wishInput = document.getElementById("wishInput");
const wishList = document.getElementById("wishList");

wishForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = wishInput.value.trim();
  if (!text) return;
  addWishItem(text);
  wishInput.value = "";
});

function addWishItem(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "wish-actions";

  const doneBtn = document.createElement("button");
  doneBtn.className = "icon-btn";
  doneBtn.textContent = "✔";
  doneBtn.title = "Mark as fulfilled";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
    span.style.textDecoration = li.classList.contains("done") ? "line-through" : "none";
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "icon-btn";
  deleteBtn.textContent = "✖";
  deleteBtn.title = "Remove wish";
  deleteBtn.addEventListener("click", () => {
    wishList.removeChild(li);
  });

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);
  wishList.appendChild(li);
}

// Kindness meter
let kindness = 0; // 0–100
const meterFill = document.getElementById("meterFill");
const meterNote = document.getElementById("meterNote");

function drawMeter() {
  meterFill.style.width = `${kindness}%`;
  meterNote.textContent = `Kindness level: ${kindness}%`;
}

document.getElementById("addKindness").addEventListener("click", () => {
  kindness = Math.min(100, kindness + 10);
  drawMeter();
});

document.getElementById("resetKindness").addEventListener("click", () => {
  kindness = 0;
  drawMeter();
});
drawMeter();

// Santa messages
const messages = [
  "Ho ho ho! Your kindness lights the sleigh path tonight.",
  "The greatest gift is the care you give to others.",
  "A little gratitude turns ordinary moments into miracles.",
  "You’re on the Nice List—because you choose compassion.",
  "May your home be warm, your heart be gentle, your joy be shared."
];
document.getElementById("messageBtn").addEventListener("click", () => {
  const i = Math.floor(Math.random() * messages.length);
  document.getElementById("messageOutput").textContent = messages[i];
});

// Playful North American route
const map = document.getElementById("map");
const mapStatus = document.getElementById("mapStatus");
map.querySelectorAll(".dot").forEach(dot => {
  dot.setAttribute("tabindex", "0");
  dot.addEventListener("click", () => {
    const city = dot.getAttribute("data-city");
    mapStatus.textContent = `Santa just waved at ${city}!`;
    // Brief sparkle
    dot.animate(
      [{ transform: "scale(1)", boxShadow: "0 0 8px rgba(202,166,75,0.8)" },
       { transform: "scale(1.5)", boxShadow: "0 0 14px rgba(255,255,255,0.9)" },
       { transform: "scale(1)", boxShadow: "0 0 8px rgba(202,166,75,0.8)" }],
      { duration: 600, easing: "ease-in-out" }
    );
  });
});
