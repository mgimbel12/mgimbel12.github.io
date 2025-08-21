function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = `${Math.random() * window.innerWidth}px`;
  document.getElementById("petals-container").appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 500);

