function checkPassword() {
  const input = document.getElementById("vault-pass").value;
  const message = document.getElementById("vault-msg");
  if (input === "BananaPie") {
    message.innerHTML = `
      <p>✅ Access granted! Enjoy these hidden treats:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_ITNgizLkjE" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GwVGpfuAckM" allowfullscreen></iframe>
    `;
  } else {
    message.innerHTML = "<p>❌ Incorrect password. Try again!</p>";
  }
}
