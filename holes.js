// script.js

function askPassword() {
  const password = prompt("Enter the secret password:");
  if (password === "sploosh") {
    alert("💥 You found the hidden stash! Time for a snack and a nap.");
  } else {
    alert("⛏️ Nope! Back to digging holes in the hot sun.");
  }
}

