const redVault = document.getElementById('redVault');
const blueVault = document.getElementById('blueVault');
const feedback = document.getElementById('feedback');

function unlockVault() {
  const password = document.getElementById('vaultPassword').value.toLowerCase();

  if (password === 'truth') {
    redVault.classList.remove('hidden');
    blueVault.classList.add('hidden');
    feedback.textContent = '';
  } else if (password === 'hope') {
    blueVault.classList.remove('hidden');
    redVault.classList.add('hidden');
    feedback.textContent = '';
  } else {
    feedback.textContent = 'Incorrect phrase. Try again.';
  }
}

function toggleVault(theme) {
  if (theme === 'red') {
    redVault.classList.remove('hidden');
    blueVault.classList.add('hidden');
  } else {
    blueVault.classList.remove('hidden');
    redVault.classList.add('hidden');
  }
}

