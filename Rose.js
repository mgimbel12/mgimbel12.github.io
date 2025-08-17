function savePassword() {
  const password = document.getElementById("passwordInput").value;
  localStorage.setItem("rosenbaumPassword", password);
  alert("Password saved. Lex approves.");
}

function unlockContent() {
  const input = document.getElementById("passwordInput").value;
  const saved = localStorage.getItem("rosenbaumPassword");
  const content = document.getElementById("hiddenContent");

  if (input === saved) {
    content.classList.remove("hidden");
  } else {
    alert("Incorrect code. Try again.");
  }
}

