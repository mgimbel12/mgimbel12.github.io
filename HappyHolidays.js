// Lazy Loading Images
const lazyImages = document.querySelectorAll('.lazy');

const lazyLoad = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => img.style.opacity = 1;
      observer.unobserve(img);
    }
  });
};

const observer = new IntersectionObserver(lazyLoad);
lazyImages.forEach(img => observer.observe(img));


// Cash Count Calculator
document.getElementById('countBtn').addEventListener('click', () => {
  const amount = Number(document.getElementById('cashInput').value);
  const result = document.getElementById('cashResult');

  if (amount > 0) {
    result.textContent = `You have $${amount.toFixed(2)} counted.`;
  } else {
    result.textContent = "Please enter a valid amount.";
  }
});
