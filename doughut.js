// doughnut.js

function eatDoughnut(element) {
  // Shrink the doughnut to simulate a bite
  element.style.transform = 'scale(0.7)';
  element.style.opacity = '0.6';

  // Optional: remove after delay
  setTimeout(() => {
    element.style.display = 'none';
  }, 1000);
}

