const doveSound = document.getElementById('dove-sound');
const roses = document.querySelectorAll('.rose');
// Play sound when any rose is clicked
roses.forEach(rose => {
  rose.addEventListener('click', () => {
    doveSound.currentTime = 0;
    doveSound.play();
  });
});
// Optional: play sound on page load
window.addEventListener('load', () => {
  doveSound.play();
});
