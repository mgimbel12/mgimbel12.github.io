const verses = [
  "We honor your courage",
  "We remember your sacrifice",
  "We celebrate your strength",
  "We thank you for your service",
  "We carry your legacy forward"
];

let index = 0;
setInterval(() => {
  document.getElementById("echo").innerText = verses[index];
  index = (index + 1) % verses.length;
}, 4000);

function showStory(branch) {
  const stories = {
    navy: "The Navy sails with strength and silence, guarding our shores with unwavering resolve.",
    airforce: "The Air Force soars above, watching over us with precision and pride.",
    army: "The Army marches with honor, defending freedom with every step.",
    seals: "The SEALs move in shadows, protecting with courage few can comprehend."
  };
  document.getElementById("story-box").innerText = stories[branch];
}

