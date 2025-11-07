const calendar = document.querySelector('.calendar');
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth(); // December is 11

for (let i = 1; i <= 25; i++) {
  const day = document.createElement('div');
  day.textContent = i;

  if (currentMonth === 11 && i <= currentDay) {
    day.classList.add('unlocked');
    day.addEventListener('click', () => {
      alert(`Day ${i}: You are loved. Keep shining!`);
    });
  } else {
    day.classList.add('locked');
    day.addEventListener('click', () => {
      alert(`Day ${i} is still hidden. Come back on December ${i}!`);
    });
  }

  calendar.appendChild(day);
}

