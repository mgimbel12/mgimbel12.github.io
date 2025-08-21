const petals = document.querySelectorAll('.petal');
const vaultGate = document.querySelector('.vault-gate');
const silverVault = document.getElementById('silverVault');
const goldVault = document.getElementById('goldVault');
const feedback = document.getElementById('feedback');
const quizSection = document.getElementById('davidQuiz');
const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');

petals.forEach(petal => {
  petal.addEventListener('click', () => {
    alert(petal.dataset.message);
    if (petal.classList.contains('quiz-trigger')) {
      quizSection.classList.remove('hidden');
    } else {
      vaultGate.classList.remove('hidden');
    }
  });
});

function unlockVault() {
  const password = document.getElementById('vaultPassword').value.toLowerCase();

  if (password === 'silverlight') {
    silverVault.classList.remove('hidden');
    goldVault.classList.add('hidden');
    document.body.classList.add('silver');
    document.body.classList.remove('gold');
    feedback.textContent = '';
  } else if (password === 'goldvoice') {
    goldVault.classList.remove('hidden');
    silverVault.classList.add('hidden');
    document.body.classList.add('gold');
    document.body.classList.remove('silver');
    feedback.textContent = '';
  } else {
    feedback.textContent = 'Incorrect phrase. Try again.';
  }
}

function toggleTheme(theme) {
  if (theme === 'silver') {
    silverVault.classList.remove('hidden');
    goldVault.classList.add('hidden');
    document.body.classList.add('silver');
    document.body.classList.remove('gold');
  } else {
    goldVault.classList.remove('hidden');
    silverVault.classList.add('hidden');
    document.body.classList.add('gold');
    document.body.classList.remove('silver');
  }
}

quizForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const answers = ['q1', 'q2', 'q3'].map(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    return selected ? selected.value : null;
  });

  if (answers.includes(null)) {
    quizResult.textContent = 'Please answer all questions.';
    return;
  }

  const score = { glorious: 0, broken: 0, shine: 0 };
  answers.forEach(ans => score[ans]++);

  let result;
  if (score.glorious >= 2) {
    result = '🌟 Your song is “Glorious” — You’re stepping into purpose.';
  } else if (score.broken >= 2) {
    result = '💔 Your song is “Broken” — You’re healing and growing.';
  } else {
    result = '🔥 Your song is “Shine” — You’re ready to rise and radiate.';
  }

  quizResult.textContent = result;
});

