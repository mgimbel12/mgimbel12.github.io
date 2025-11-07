function addFeature() {
  const featureList = document.getElementById("featureList");
  const newFeature = prompt("Enter a new sanctuary feature:");
  if (newFeature) {
    const li = document.createElement("li");
    li.textContent = newFeature;
    featureList.appendChild(li);
  }
}
