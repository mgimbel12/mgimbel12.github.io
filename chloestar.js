// Floating effect toggle
document.querySelectorAll('.float').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('paused');
    if (img.classList.contains('paused')) {
      img.style.animationPlayState = 'paused';
    } else {
      img.style.animationPlayState = 'running';
    }
  });
});

// Easter egg: click SVG to reveal Chloe quote
document.querySelector('.typewriter').addEventListener('click', () => {
  alert("‘I'm not afraid to believe in the unbelievable.’ — Chloe Sullivan");
});

