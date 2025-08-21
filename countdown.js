const releaseDate = new Date("July 11, 2025 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "🎉 It's here! Superman Returns has landed!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until Superman Returns`;
}, 1000);

