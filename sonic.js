document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const choice = document.getElementById("favorite").value;
  alert(`You chose ${choice.toUpperCase()}! You've leveled up! 💎`);
});

const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("click", () => {
    alert(`You clicked on ${img.alt}. Character boost unlocked! ⚡`);
  });
});
