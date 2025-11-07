function revealTip() {
  const tips = [
    "Let your turkey rest for 20–30 minutes before carving to keep it juicy.",
    "Use a meat thermometer—165°F in the thickest part of the thigh is perfect.",
    "Brining your turkey overnight adds flavor and moisture.",
    "Roast your turkey breast-side down for the first hour for extra juicy white meat.",
    "Add broth to the roasting pan to keep the turkey moist and create flavorful drippings."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").textContent = randomTip;
}
