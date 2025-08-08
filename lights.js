const tree = document.querySelector('.tree');

tree.addEventListener('click', () => {
  tree.classList.toggle('dancing');
});

function rotateTree() {
  tree.style.transform = 'rotate(360deg)';
}
