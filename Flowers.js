// script.js

const todayEl = document.getElementById('today');
const nowEl = document.getElementById('now');
const yearEl = document.getElementById('year');

function updateClock(){
  const now = new Date();
  const locale = 'en-US';
  todayEl.textContent = now.toLocaleDateString(locale, {
    weekday:'long', year:'numeric', month:'long', day:'numeric'
  });
  nowEl.textContent = now.toLocaleTimeString(locale, { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  yearEl.textContent = now.getFullYear();
}
updateClock();
setInterval(updateClock, 1000);

// Countdown to life (age ticker)
const birthInput = document.getElementById('birthdate');
const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const momentsEl = document.getElementById('life-moments');

function diffComponents(birth, now){
  // Years, months, days calculation
  let y = now.getFullYear() - birth.getFullYear();
  let m = now.getMonth() - birth.getMonth();
  let d = now.getDate() - birth.getDate();

  if (d < 0){
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    d += prevMonth.getDate();
    m -= 1;
  }
  if (m < 0){
    m += 12;
    y -= 1;
  }

  // Hours/minutes/seconds since midnight
  const msDiff = now - birth;
  const totalSeconds = Math.floor(msDiff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  return { y, m, d, totalSeconds, totalMinutes, totalHours, totalDays };
}

function tickAge(){
  const val = birthInput.value;
  if (!val){
    yearsEl.textContent = '—';
    monthsEl.textContent = '—';
    daysEl.textContent = '—';
    hoursEl.textContent = '—';
    minutesEl.textContent = '—';
    secondsEl.textContent = '—';
    momentsEl.textContent = '—';
    return;
  }
  const birth = new Date(val + 'T00:00:00');
  const now = new Date();

  const { y, m, d, totalSeconds, totalMinutes, totalHours, totalDays } = diffComponents(birth, now);

  yearsEl.textContent = y;
  monthsEl.textContent = m;
  daysEl.textContent = d;
  hoursEl.textContent = (now.getHours()).toString().padStart(2,'0');
  minutesEl.textContent = (now.getMinutes()).toString().padStart(2,'0');
  secondsEl.textContent = (now.getSeconds()).toString().padStart(2,'0');
  momentsEl.textContent = `${totalDays.toLocaleString()} days • ${totalHours.toLocaleString()} hours`;
}

birthInput.addEventListener('change', tickAge);
setInterval(tickAge, 1000);
tickAge();
