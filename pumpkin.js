// GAME OF LIFE IMPLEMENTATION

const canvas = document.getElementById("lifeCanvas");
const ctx = canvas.getContext("2d");

const rows = 60;
const cols = 60;
const cellSize = canvas.width / cols;

let grid = createGrid();
let running = false;
let interval = null;

function createGrid() {
  return new Array(rows).fill(null).map(() =>
    new Array(cols).fill(0)
  );
}

function randomizeGrid() {
  grid = grid.map(row => row.map(() => (Math.random() > 0.7 ? 1 : 0)));
  drawGrid();
}

function clearGrid() {
  grid = createGrid();
  drawGrid();
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      ctx.fillStyle = grid[r][c] ? "#ff9800" : "#1a2038";
      ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
    }
  }
}

function getNextGeneration() {
  const next = createGrid();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const neighbors = countNeighbors(r, c);
      const alive = grid[r][c] === 1;

      if (alive && (neighbors === 2 || neighbors === 3)) {
        next[r][c] = 1;
      } else if (!alive && neighbors === 3) {
        next[r][c] = 1;
      } else {
        next[r][c] = 0;
      }
    }
  }

  grid = next;
}

function countNeighbors(r, c) {
  let count = 0;

  for (let y = -1; y <= 1; y++) {
    for (let x = -1; x <= 1; x++) {
      if (y === 0 && x === 0) continue;

      const nr = r + y;
      const nc = c + x;

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        count += grid[nr][nc];
      }
    }
  }

  return count;
}

function startGame() {
  if (!running) {
    running = true;
    interval = setInterval(() => {
      getNextGeneration();
      drawGrid();
    }, 100);
  }
}

function stopGame() {
  running = false;
  clearInterval(interval);
}

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / cellSize);
  const y = Math.floor((e.clientY - rect.top) / cellSize);

  grid[y][x] = grid[y][x] ? 0 : 1;
  drawGrid();
});

// Buttons
document.getElementById("start").onclick = startGame;
document.getElementById("stop").onclick = stopGame;
document.getElementById("clear").onclick = clearGrid;
document.getElementById("random").onclick = randomizeGrid;

// Initial draw
drawGrid();
