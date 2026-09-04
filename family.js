document.querySelectorAll('.tree span').forEach(node => {
  node.addEventListener('click', () => {
    if (node.classList.contains('red')) {
      node.classList.remove('red');
      node.classList.add('white');
    } else if (node.classList.contains('white')) {
      node.classList.remove('white');
      node.classList.add('blue');
    } else if (node.classList.contains('blue')) {
      node.classList.remove('blue');
    } else {
      node.classList.add('red');
    }
  });
});
const radios = document.querySelectorAll("input[name='relative']");
const nameInput = document.getElementById("relativeName");
const output = document.getElementById("output");

let selectedType = "";

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    selectedType = radio.value;
    updateOutput();
  });
});

nameInput.addEventListener("input", updateOutput);

function updateOutput() {
  const name = nameInput.value.trim();
  output.textContent = (selectedType && name) ? `${selectedType}: ${name}` : "";
}


