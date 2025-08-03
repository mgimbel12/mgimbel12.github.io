const yearSlider = document.getElementById("yearSlider");
const yearValue = document.getElementById("yearValue");
const dateDisplay = document.getElementById("dateDisplay");
const timeDisplay = document.getElementById("timeDisplay");
const scriptureOutput = document.getElementById("scriptureOutput");
const scripturesByYear = {
  2000: "“In the beginning God created the heavens and the earth.” – Genesis 1:1",
  2010: "“Be still, and know that I am God.” – Psalm 46:10",
  2020: "“The light shines in the darkness.” – John 1:5",
  2025: "“I can do all things through Christ who strengthens me.” – Philippians 4:13",
  2030: "“For I know the plans I have for you.” – Jeremiah 29:11"
};
function updateDateTime() {
  const now = new Date();
  const selectedYear = parseInt(yearSlider.value);
  yearValue.textContent = selectedYear;

  const simulatedDate = new Date(now);
  simulatedDate.setFullYear(selectedYear);

  dateDisplay.textContent = `Year: ${selectedYear} | Date: ${simulatedDate.toDateString()}`;
  timeDisplay.textContent = `Time: ${simulatedDate.toLocaleTimeString()}`;

  // Choose scripture based on closest match
  const closestYear = Object.keys(scripturesByYear)
    .map(Number)
    .reduce((prev, curr) => Math.abs(curr - selectedYear) < Math.abs(prev - selectedYear) ? curr : prev);

  scriptureOutput.innerHTML = `<h2>Scripture for ${closestYear}</h2><p>${scripturesByYear[closestYear]}</p>`;
}
yearSlider.addEventListener("input", updateDateTime);
setInterval(updateDateTime, 1000);
