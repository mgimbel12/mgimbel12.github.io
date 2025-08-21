function unlockVault() {
  const password = document.getElementById('vaultPassword').value.toLowerCase();
  const sections = {
    watchtower: 'watchtowerVault',
    svgart: 'svgVault'
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

