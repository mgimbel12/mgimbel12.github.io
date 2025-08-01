document.getElementById('summonBtn').addEventListener('click', () => {
  const zeroImg = document.querySelector('.zero-img');
  zeroImg.style.transition = 'transform 2s ease-in-out';
  zeroImg.style.transform = 'translateY(-50px)';

  setTimeout(() => {
    zeroImg.style.transform = 'translateY(0)';
  }, 2000);
});
