const cityInput = document.getElementById('city');
const button = document.getElementById('getWeather');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) {
    result.textContent = 'Please enter a city.';
    return;
  }
  result.textContent = `You chose: ${city}`;
});
