// Generate starfield
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars() {
  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, Math.PI * 2);
    ctx.fill();
  }
}

drawStars();

// Optional: Play theme music
const audio = new Audio('starwars-theme.mp3');
audio.play();
