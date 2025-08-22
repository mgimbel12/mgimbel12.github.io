// Flower hover quotes
document.querySelectorAll('.flower').forEach(flower => {
  flower.addEventListener('mouseover', () => {
    const quote = flower.getAttribute('data-quote');
    alert(quote);
  });
});

// Countdown timer
const countdown = document.getElementById('countdown-timer');
const targetDate = new Date('2025-12-01T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdown.textContent = `${days} days until Disneyland Premiere!`;
}

setInterval(updateCountdown, 1000);

// Password gate
function checkPassword() {
  const input = document.getElementById('vault-password').value;
  const vault = document.getElementById('vault-content');
  if (input === "Smallville2025") {
    vault.style.display = "block";
  } else {
    alert("Incorrect password. Try again.");
  }
}

// Picnic treats
document.querySelectorAll('.treat').forEach(item => {
  item.addEventListener('click', () => {
    alert(item.getAttribute('data-message'));
  });
});

