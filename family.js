document.querySelectorAll('.tree span').forEach(node => {
  node.addEventListener('click', () => {
    if (node.classList.contains('red')) {
      node.classList.remove('red');
      node.classList.add('white');
    } else if (node.classList.contains('white')) {
      node.classList.remove('white');
      node.classList.add('blue');
    } else if (node.classList.contains('blue')) {
      node.classList.remove('blue');
    } else {
      node.classList.add('red');
    }
  });
});



