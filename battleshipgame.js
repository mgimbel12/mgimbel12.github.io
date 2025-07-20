const board = document.getElementById("gameBoard");
const message = document.getElementById("message");
const gridSize = 5;
const shipLocation = Math.floor(Math.random() * gridSize * gridSize);

for (let i = 0; i < gridSize * gridSize; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.dataset.index = i;
  square.addEventListener("click", handleClick);
  board.appendChild(square);
}

function handleClick(e) {
  const index = Number(e.target.dataset.index);
  if (index === shipLocation) {
    e.target.classList.add("hit");
    message.textContent = "🎉 You found the ship!";
  } else {
    e.target.classList.add("miss");
    message.textContent = "❌ Try again!";
    e.target.removeEventListener("click", handleClick); // prevent clicking again
  }
}
