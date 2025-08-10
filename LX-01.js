function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  contents.forEach(content => content.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function simulate(choice) {
  const result = document.getElementById('result');
  if (choice === 'tech') {
    result.innerHTML = "Lex deploys kryptonite drones. Superman is weakened but escapes!";
  } else {
    result.innerHTML = "Lex debates Superman on humanity’s future. The public begins to question their hero.";
  }
}

