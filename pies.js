function updateCountdown() {
  const now = new Date();
  const thanksgiving = new Date('2025-11-27T00:00:00');
  const diff = thanksgiving - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").textContent = `${days} days until Thanksgiving!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

const pies = [
  {
    name: "Classic Pumpkin Pie",
    description: "Creamy pumpkin custard in a flaky crust.",
    ingredients: [
      "1 (15 oz) can pumpkin puree",
      "3/4 cup sugar",
      "2 eggs",
      "1 tsp cinnamon",
      "1/2 tsp ginger",
      "1/4 tsp cloves",
      "1/2 tsp salt",
      "1 (12 oz) can evaporated milk",
      "1 unbaked 9-inch pie crust"
    ],
    instructions: "Preheat oven to 425°F. Mix all ingredients. Pour into crust. Bake 15 min, reduce to 350°F, bake 40 min more."
  },
  {
    name: "Maple Pecan Cream Pie",
    description: "Whipped maple filling with crushed pecans.",
    ingredients: [
      "1 cup heavy cream",
      "1/2 cup maple syrup",
      "1/2 tsp vanilla",
      "1/2 cup chopped pecans",
      "1 graham cracker crust"
    ],
    instructions: "Whip cream, fold in syrup, vanilla, and pecans. Pour into crust. Chill 2 hours before serving."
  },
  {
    name: "Apple-Pumpkin-Pecan Pie",
    description: "Triple-layer pie with gooey pecan, tart apple, and creamy pumpkin.",
    ingredients: [
      "1 cup apple slices",
      "1/2 cup pumpkin puree",
      "1/2 cup pecan halves",
      "1/2 cup brown sugar",
      "1/2 tsp cinnamon",
      "1 pie crust"
    ],
    instructions: "Layer apple, pumpkin, and pecans. Sprinkle sugar and cinnamon. Bake at 375°F for 45 minutes."
  },
  {
    name: "Chocolate Pumpkin Pie",
    description: "Rich chocolate meets spiced pumpkin.",
    ingredients: [
      "1/2 cup melted chocolate",
      "1 cup pumpkin puree",
      "1/2 cup sugar",
      "1 egg",
      "1 tsp cinnamon",
      "1 pie crust"
    ],
    instructions: "Mix all ingredients. Pour into crust. Bake at 350°F for 40 minutes. Cool before serving."
  },
  {
    name: "Honey Blackberry Sage Pie",
    description: "Sweet honey and tart berries with a sage-infused crust.",
    ingredients: [
      "2 cups blackberries",
      "1/4 cup honey",
      "1 tsp chopped sage",
      "1 tbsp cornstarch",
      "1 pie crust"
    ],
    instructions: "Mix berries, honey, sage, and cornstarch. Pour into crust. Bake at 375°F for 35 minutes."
  }
];

let currentPie = 0;
function nextPie() {
  const pie = pies[currentPie];
  document.getElementById("pie-name").textContent = pie.name;
  document.getElementById("pie-description").textContent = pie.description;

  const ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML = "";
  pie.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  document.getElementById("instructions").textContent = pie.instructions;

  currentPie = (currentPie + 1) % pies.length;
}
nextPie();

function generateCalendar() {
  const tbody = document.getElementById("calendar-body");
  const firstDay = new Date(2025, 10, 1).getDay();
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
        if (date === 27) cell.style.backgroundColor = "#fdd9a0";
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



