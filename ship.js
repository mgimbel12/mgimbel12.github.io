// script.js

// Simple Battleship game on a 10x10 grid.
// Ships are placed randomly; player clicks cells to fire shots.

const boardEl = document.getElementById("board");
const newGameBtn = document.getElementById("new-game");
const statusMessage = document.getElementById("status-message");
const shotsMessage = document.getElementById("shots-message");
const hitsMessage = document.getElementById("hits-message");

const BOARD_SIZE = 10;
let ships = [];
let shots = 0;
let hits = 0;

// Define ships as lengths (simple one-dimensional placement)
const SHIP_LENGTHS = [4, 3, 3, 2]; // one battleship, two cruisers, one destroyer

function createBoard() {
  boardEl.innerHTML = "";
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener("click", onCellClick);
      boardEl.appendChild(cell);
    }
  }
}

function resetGame() {
  ships = [];
  shots = 0;
  hits = 0;
  shotsMessage.textContent = "Shots taken: 0";
  hitsMessage.textContent = "Hits: 0";
  statusMessage.textContent =
    "Ships have been placed. Click on the grid to fire your shots.";
  createBoard();
  placeShipsRandomly();
}

function placeShipsRandomly() {
  // Simple random placement, horizontal only, non‑overlapping
  const occupied = new Set();

  SHIP_LENGTHS.forEach((length) => {
    let placed = false;
    while (!placed) {
      const row = Math.floor(Math.random() * BOARD_SIZE);
      const startCol = Math.floor(Math.random() * (BOARD_SIZE - length));
      const positions = [];
      let conflict = false;

      for (let i = 0; i < length; i++) {
        const col = startCol + i;
        const key = `${row},${col}`;
        if (occupied.has(key)) {
          conflict = true;
          break;
        }
        positions.push({ row, col });
      }

      if (!conflict) {
        positions.forEach((pos) => {
          occupied.add(`${pos.row},${pos.col}`);
        });
        ships.push(positions);
        placed = true;
      }
    }
  });
}

function onCellClick(e) {
  const cell = e.currentTarget;
  const row = parseInt(cell.dataset.row, 10);
  const col = parseInt(cell.dataset.col, 10);

  // Prevent clicking the same cell twice
  if (cell.classList.contains("hit") || cell.classList.contains("miss")) {
    statusMessage.textContent =
      "You already fired at that location. Try a different cell.";
    return;
  }

  shots++;
  shotsMessage.textContent = `Shots taken: ${shots}`;

  if (isShipAt(row, col)) {
    cell.classList.add("hit");
    hits++;
    hitsMessage.textContent = `Hits: ${hits}`;
    statusMessage.textContent =
      "Direct hit! Keep going and try to find the rest of the ships.";
    if (hits === totalShipCells()) {
      statusMessage.textContent =
        "All ships have been sunk! You have won the game.";
    }
  } else {
    cell.classList.add("miss");
    statusMessage.textContent =
      "That shot missed. Adjust your strategy and try another cell.";
  }
}

function isShipAt(row, col) {
  return ships.some((ship) =>
    ship.some((pos) => pos.row === row && pos.col === col)
  );
}

function totalShipCells() {
  return ships.reduce((sum, ship) => sum + ship.length, 0);
}

// Initialize
if (newGameBtn) {
  newGameBtn.addEventListener("click", resetGame);
  statusMessage.textContent =
    "Click “Start New Game” to place ships and begin playing.";
}
