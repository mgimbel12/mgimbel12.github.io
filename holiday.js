// Alert when a product is clicked
document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-btn");

  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("🎁 Thank you for choosing a gift! Happy Holidays!");
    });
  });
});

// Optional: Add snowflake animation
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.textContent = "❄";
  snowflake.style.position = "fixed";
  snowflake.style.top = "-20px";
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
  snowflake.style.color = "#cfd8dc";
  snowflake.style.zIndex = "1000";
  document.body.appendChild(snowflake);

  let fall = setInterval(() => {
    snowflake.style.top = `${parseFloat(snowflake.style.top) + 2}px`;
    if (parseFloat(snowflake.style.top) > window.innerHeight) {
      clearInterval(fall);
      snowflake.remove();
    }
  }, 50);
}

setInterval(createSnowflake, 300);

