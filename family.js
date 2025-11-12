// Optional: Add click-to-highlight or expand/collapse features
document.querySelectorAll('.tree span').forEach(node => {
  node.addEventListener('click', () => {
    node.classList.toggle('highlight');
  });
});

