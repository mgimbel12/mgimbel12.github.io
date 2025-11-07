function revealAnswer(button) {
  const answer = button.nextElementSibling;
  answer.classList.remove('hidden');
  button.disabled = true;
  button.textContent = 'Answer Revealed';
}
