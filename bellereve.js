// script.js
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const reason = document.getElementById("reason").value;
  const notes = document.getElementById("notes").value;

  const feedback = document.getElementById("feedback");

  if (!name.trim()) {
    feedback.textContent = "Please enter your name.";
    return;
  }

  feedback.textContent = `Access granted. ${name}, your ${reason} request is being processed.`;

  // Optional eerie effect
  setTimeout(() => {
    feedback.textContent += " Beware the echoes...";
  }, 3000);
}
