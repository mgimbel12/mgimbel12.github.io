// Candy Clicker Game
let score = 0;
function spawnCandy() {
  const candy = document.createElement('img');
  candy.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Candy_corn_icon.svg/120px-Candy_corn_icon.svg.png';
  candy.className = 'candy';
  candy.style.left = Math.random() * 90 + '%';
  candy.onclick = () => {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    candy.remove();
  };
  document.getElementById('candy-area').appendChild(candy);
}
setInterval(spawnCandy, 1000);

// Trick-or-Treat Door
const treats = ['🍬 Candy Corn', '🍫 Chocolate Bar', '👻 Ghost Scream', '🕷️ Spider Surprise'];
document.getElementById('door').onclick = () => {
  const random = Math.floor(Math.random() * treats.length);
  document.getElementById('result').textContent = `You got: ${treats[random]}`;
};
