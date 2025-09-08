function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const correctPassword = "faithcastle"; // You can change this!

  if (input === correctPassword) {
    document.getElementById('passwordModal').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  } else {
    document.getElementById('errorMsg').textContent = "Oops! Try again.";
  }
}
