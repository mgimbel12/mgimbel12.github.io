// Highlight steps when clicked
const steps = document.querySelectorAll(".step");

steps.forEach(step => {
  step.addEventListener("click", () => {
    step.classList.toggle("active");
  });
});

// Add a glow effect via CSS when .active is set
// (you can extend CSS with .step.active { text-shadow: ... })

// Chill timer for Jack Skellington apples
const timerButtons = document.querySelectorAll(".start-timer");

timerButtons.forEach(button => {
  button.addEventListener("click", () => {
    const time = parseInt(button.dataset.time, 10); // seconds
    const display = button.parentElement.querySelector(".timer-display span");
    startCountdown(time, display);
  });
});

function startCountdown(seconds, display) {
  let remaining = seconds;
  display.textContent = formatTime(remaining);

  const interval = setInterval(() => {
    remaining--;
    display.textContent = formatTime(remaining);

    if (remaining <= 0) {
      clearInterval(interval);
      display.textContent = "Done!";
      alert("Your spooky treat is ready!");
    }
  }, 1000);
}

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Theme toggle: Halloween vs Christmas mode
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("christmas-mode");
});
