const music = document.getElementById("christmasSong");
const button = document.getElementById("toggleMusic");

button.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    button.textContent = "Pause Music";
  } else {
    music.pause();
    button.textContent = "Play Music";
  }
});
