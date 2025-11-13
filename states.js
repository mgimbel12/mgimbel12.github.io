const verses = [
  "We stand with those who serve",
  "We honor your bravery",
  "We remember your sacrifice",
  "We thank you for your protection",
  "We celebrate your dedication"
];

let index = 0;
setInterval(() => {
  document.getElementById("echo").innerText = verses[index];
  index = (index + 1) % verses.length;
}, 4000);

function showStory(type) {
  const stories = {
    police: "Police officers uphold peace and protect communities with courage and integrity.",
    fire: "Firefighters rush into danger to save lives, embodying selflessness and strength.",
    ems: "EMS professionals bring hope and healing in moments of crisis and urgency."
  };
  document.getElementById("story-box").innerText = stories[type];
}
