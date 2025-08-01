// icecream.js

const scoop = document.getElementById('scoop');
const flavorName = document.getElementById('flavorName');
const flavorBtn = document.getElementById('flavorBtn');

const flavors = [
  { name: 'Strawberry', color: 'pink' },
  { name: 'Mint', color: '#98ff98' },
  { name: 'Chocolate', color: '#8b4513' },
  { name: 'Vanilla', color: '#fff8dc' },
  { name: 'Blueberry', color: '#87cefa' }
];

let current = 0;

flavorBtn.addEventListener('click', () => {
  current = (current + 1) % flavors.length;
  scoop.style.backgroundColor = flavors[current].color;
  flavorName.textContent = flavors[current].name;
});

