function updateDateTime() {
  const now = new Date();

  // Simulate year progression by adding years to current date
  const simulatedYear = now.getFullYear() + (now.getSeconds() % 10); // cycles through 10 years
  const simulatedDate = new Date(now);
  simulatedDate.setFullYear(simulatedYear);

  const dateDisplay = document.getElementById("dateDisplay");
  const timeDisplay = document.getElementById("timeDisplay");
  
  dateDisplay.textContent = `Year: ${simulatedDate.getFullYear()} | Date: ${simulatedDate.toDateString()}`;
  timeDisplay.textContent = `Time: ${simulatedDate.toLocaleTimeString()}`;
}
// Update every second
setInterval(updateDateTime, 1000);
