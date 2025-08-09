// script.js
const bulbs = document.querySelectorAll('.bulb');

function twinkle() {
  bulbs.forEach(bulb => {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      bulb.style.opacity = Math.random();
      bulb.style.transform = `scale(${1 + Math.random() * 0.3})`;
    }, delay);
  });
}

setInterval(twinkle, 800);

