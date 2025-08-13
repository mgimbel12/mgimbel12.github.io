const door = document.getElementById('door');
const cat = document.getElementById('blackCat');
const sound = document.getElementById('creepySound');

door.addEventListener('mouseenter', () => {
  cat.style.opacity = 1;
  sound.play();
});

door.addEventListener('mouseleave', () => {
  cat.style.opacity = 0;
});
