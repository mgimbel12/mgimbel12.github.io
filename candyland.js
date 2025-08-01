const board = document.getElementById('board');
const player = document.getElementById('player');
const moveBtn = document.getElementById('moveBtn');
const restartBtn = document.getElementById('restartBtn');


const tiles = [];
const tileSize = 50;
let position = 0;

// Create 50 tiles
for (let i = 0; i < 50; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  board.appendChild(tile);
  tiles.push(tile);
}

// Position player on the first tile
function movePlayer() {
  if (position < tiles.length - 1) {
    position++;
    const tile = tiles[position];
    const rect = tile.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();

    const x = rect.left - boardRect.left;
    const y = rect.top - boardRect.top;

    player.style.transform = `translate(${x + 5}px, ${y + 5}px)`;
  } else {
    alert("You've reached the end of Candy Land! 🎉");
  }
}

moveBtn.addEventListener('click', movePlayer);
function movePlayer() {
  if (position < tiles.length - 1) {
    position++;
    const tile = tiles[position];
    const rect = tile.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();

    const x = rect.left - boardRect.left;
    const y = rect.top - boardRect.top;

    player.style.transform = `translate(${x + 5}px, ${y + 5}px)`;
  } else {
    showWinScreen();
  }
}

function showWinScreen() {
  // Hide board and button
  board.style.display = 'none';
  player.style.display = 'none';
  moveBtn.style.display = 'none';

  // Create win screen container
  const winScreen = document.createElement('div');
  winScreen.id = 'winScreen';
  winScreen.innerHTML = `
    <h2>🎉 You Win! 🎉</h2>
    <p>Welcome to the Candy Castle! 🍬👑</p>
    <button id="restartBtn">Play Again</button>
  `;
  document.body.appendChild(winScreen);

  // Style it
  winScreen.style.position = 'fixed';
  winScreen.style.top = '0';
  winScreen.style.left = '0';
  winScreen.style.width = '100%';
  winScreen.style.height = '100%';
  winScreen.style.background = 'linear-gradient(to bottom right, #ffccff, #ccffff)';
  winScreen.style.display = 'flex';
  winScreen.style.flexDirection = 'column';
  winScreen.style.justifyContent = 'center';
  winScreen.style.alignItems = 'center';
  winScreen.style.fontSize = '24px';
  winScreen.style.color = '#ff3399';
  winScreen.style.zIndex = '1000';

  // Restart button
  const restartBtn = document.getElementById('restartBtn');
  restartBtn.style.padding = '10px 20px';
  restartBtn.style.fontSize = '18px';
  restartBtn.style.backgroundColor = '#ff66cc';
  restartBtn.style.color = 'white';
  restartBtn.style.border = 'none';
  restartBtn.style.borderRadius = '8px';
  restartBtn.style.cursor = 'pointer';

  restartBtn.addEventListener('click', () => {
    location.reload(); // Reload the page to restart
  });

  // Optional: Add confetti
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    winScreen.appendChild(confetti);
  }
}


