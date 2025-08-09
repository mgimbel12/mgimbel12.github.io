document.getElementById("enterButton").addEventListener("click", () => {
  const sparkleContainer = document.getElementById("sparkle");

  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    sparkle.style.top = `${Math.random() * window.innerHeight}px`;
    sparkleContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1500);
  }
});
function createFloatingStars() {
  const sparkleContainer = document.getElementById("sparkle");
  setInterval(() => {
    const star = document.createElement("div");
    star.className = "floating-star";
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;
    sparkleContainer.appendChild(star);
    setTimeout(() => star.remove(), 3000);
  }, 500);
}

createFloatingStars();
