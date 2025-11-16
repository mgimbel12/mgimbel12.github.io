// script.js
document.querySelectorAll('.verse-card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`Scripture Reference: ${card.dataset.ref}`);
  });
});

