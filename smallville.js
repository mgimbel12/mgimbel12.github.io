function checkPassword() {
  const input = document.getElementById("vault-pass").value;
  const message = document.getElementById("vault-msg");
  if (input === "Chloe2025") {
    message.innerHTML = `
      <p>✅ Access granted to LexCorp dealings and Chloe’s files.</p>
      <ul>
        <li>LexCorp stock manipulation logs</li>
        <li>Falcon drone surveillance routes</li>
        <li>Superman 2025 Easter egg: LuthorCorp confirmed</li>
      </ul>
    `;
  } else {
    message.innerHTML = "<p>❌ Incorrect password. Try again!</p>";
  }
}

