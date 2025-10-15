const scenarios = [
  {
    text: "Your friend is being teased at school. What do you do?",
    choices: [
      { text: "Stand up for them", value: 10 },
      { text: "Ignore it", value: -5 }
    ]
  },
  {
    text: "You find money on the ground. What do you do?",
    choices: [
      { text: "Turn it in", value: 10 },
      { text: "Keep it", value: -5 }
    ]
  },
  {
    text: "You’re invited to a party on Sunday. What do you do?",
    choices: [
      { text: "Go to church instead", value: 10 },
      { text: "Skip church for the party", value: -5 }
    ]
  }
];

let current = 0;
let progress = 0;

function startGame() {
  current = 0;
  progress = 0;
  document.querySelector("button").style.display = "none";
  showScenario();
}

function showScenario() {
  if (current >= scenarios.length) {
    document.getElementById("scenario").innerText = "Journey complete! Your spiritual progress: " + progress;
    document.getElementById("choices").innerHTML = "";
    return;
  }

  const s = scenarios[current];
  document.getElementById("scenario").innerText = s.text;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  s.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => {
      progress += choice.value;
      document.getElementById("progress").innerText = "Spiritual Progress: " + progress;
      current++;
      showScenario();
    };
    choicesDiv.appendChild(btn);
  });
}
