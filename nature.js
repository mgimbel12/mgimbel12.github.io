function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");
  const content = document.getElementById("sanctuary-content");

  if (input === "peacefulPath") {
    message.textContent = "Welcome, beloved soul.";
    message.style.color = "green";
    content.style.display = "block";
    displayScripture();
  } else {
    message.textContent = "Incorrect password. Try again.";
    message.style.color = "red";
  }
}

function displayScripture() {
  const scriptures = [
    "“Be still, and know that I am God.” – Psalm 46:10",
    "“I will not leave you comfortless: I will come to you.” – John 14:18",
    "“Peace I leave with you, my peace I give unto you…” – John 14:27",
    "“The Lord is my shepherd; I shall not want.” – Psalm 23:1"
  ];

  const verse = scriptures[Math.floor(Math.random() * scriptures.length)];
  document.getElementById("scripture").textContent = verse;
}
