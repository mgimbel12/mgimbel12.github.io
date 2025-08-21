const whiteCastle = document.querySelector('.white-castle');
const pearlCastle = document.querySelector('.pearl-castle');
const redApple = document.querySelector('.red-apple');
const pearlApple = document.querySelector('.pearl-apple');
const whiteVault = document.getElementById('whiteVault');
const pearlVault = document.getElementById('pearlVault');
const feedback = document.getElementById('feedback');

redApple.addEventListener('click', () => {
  alert(redApple.dataset.message);
});

pearlApple.addEventListener('click', () => {
  alert(pearlApple.dataset.message);
});

function unlockVault() {
  const password = document.getElementById('vaultPassword').value.toLowerCase();

  if (password === 'diary') {
    whiteVault.classList.remove('hidden');
    pearlVault.classList.add('hidden');
    feedback.textContent = '';
  } else if (password === 'apple') {
    pearlVault.classList.remove('hidden');
    whiteVault.classList.add('hidden');
    feedback.textContent = '';
  } else {
    feedback.textContent = 'Incorrect phrase. Try again.';
  }
}

function toggleCastle() {
  whiteCastle.classList.toggle('hidden');
  pearlCastle.classList.toggle('hidden');
}

