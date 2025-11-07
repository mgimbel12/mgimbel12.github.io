const calendar = document.querySelector('.calendar');
for (let i = 1; i <= 25; i++) {
  const day = document.createElement('div');
  day.textContent = i;
  day.addEventListener('click', () => {
    alert(`Day ${i}: You are loved. Keep shining!`);
  });
  calendar.appendChild(day);
}
