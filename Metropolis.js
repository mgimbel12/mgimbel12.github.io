function unlockVault() {
  const password = document.getElementById('vaultPassword').value.toLowerCase();
  const sections = {
    lens: 'lensVault',
    foodie: 'foodieVault',
    runway: 'runwayVault'
  };

  Object.values(sections).forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  if (sections[password]) {
    document.getElementById(sections[password]).classList.remove('hidden');
    document.getElementById('feedback').textContent = '';
  } else {
    document.getElementById('feedback').textContent = 'Incorrect phrase. Try again.';
  }
}

function startShow() {
  const model = document.getElementById('modelSelect').value;
  const music = document.getElementById('musicSelect').value;
  const output = document.getElementById('showOutput');

  output.textContent = `✨ Your show begins: ${model} walks to ${music} soundtrack ✨`;
}

