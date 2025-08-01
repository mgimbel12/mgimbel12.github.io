const board = document.getElementById('board');
const player = document.getElementById('player');
const moveBtn = document.getElementById('moveBtn');

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

