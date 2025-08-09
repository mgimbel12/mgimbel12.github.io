function toggleLights() {
  const lights = document.querySelectorAll('.light');
  lights.forEach(light => {
    if (light.style.animation) {
      light.style.animation = '';
      light.style.opacity = '1';
    } else {
      light.style.animation = 'blink 1s infinite alternate';
    }
  });
}
