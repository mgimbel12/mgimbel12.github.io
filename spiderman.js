function checkPassword() {
  const input = document.getElementById("vault-pass").value;
  const message = document.getElementById("vault-msg");
  if (input === "SpideyChristmas") {
    message.innerHTML = `
      <p>✅ Welcome to the Spider-Verse Vault!</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5QZQ-nEKxRs" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AR6HvfUp95I" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FTTlgNpDEsA" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/wi8sLi9JJEw" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/h1Z2xbYz6zs" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/K6izHTqy2Ek" allowfullscreen></iframe>
    `;
  } else {
    message.innerHTML = "<p>❌ Incorrect password. Try again!</p>";
  }
}

