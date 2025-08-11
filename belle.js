function startCountdown() {
  const endTime = new Date();
  endTime.setMinutes(endTime.getMinutes() + 5); // 5-minute countdown

  const timerElement = document.getElementById("timer");

  const interval = setInterval(() => {
    const now = new Date();
    const diff = endTime - now;

    if (diff <= 0) {
      clearInterval(interval);
      timerElement.textContent = "00:00:00";
      document.getElementById("quote").classList.remove("hidden");
      return;
    }

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    timerElement.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

function revealQuote() {
  document.getElementById("quote").classList.remove("hidden");
}

startCountdown();

