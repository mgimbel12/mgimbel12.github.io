// Countdown to Thanksgiving (Nov 27, 2025)
function updateCountdown() {
  const now = new Date();
  const thanksgiving = new Date('2025-11-27T00:00:00');
  const diff = thanksgiving - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").textContent = `${days} days until Thanksgiving!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Pie Recipes
const pies = [
  { name: "Classic Pumpkin Pie", description: "Creamy pumpkin custard in a flaky crust, topped with whipped cream." },
  { name: "Maple Pecan Cream Pie", description: "Whipped maple filling with crushed pecans and a buttery crust." },
  { name: "Apple-Pumpkin-Pecan Pie", description: "A triple-layer pie with gooey pecan, tart apple, and creamy pumpkin." },
  { name: "Chocolate Pumpkin Pie", description: "Rich chocolate meets spiced pumpkin in a decadent dessert." },
  { name: "Honey Blackberry Sage Pie", description: "Sweet honey and tart berries with a sage-infused crust." }
];

let currentPie = 0;
function nextPie() {
  currentPie = (currentPie + 1) % pies.length;
  document.getElementById("pie-name").textContent = pies[currentPie].name;
  document.getElementById("pie-description").textContent = pies[currentPie].description;
}
nextPie();

// November 2025 Calendar
function generateCalendar() {
  const tbody = document.getElementById("calendar-body");
  const firstDay = new Date(2025, 10, 1).getDay(); // November is month 10
  const daysInMonth = 30;
  let date = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (i === 0 && j < firstDay) {
        cell.textContent = "";
      } else if (date <= daysInMonth) {
        cell.textContent = date;
        if (date === 27) cell.style.backgroundColor = "#fdd9a0"; // Highlight Thanksgiving
        date++;
      } else {
        cell.textContent = "";
      }
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
}
generateCalendar();

