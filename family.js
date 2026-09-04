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
const relationSelect = document.getElementById("relationSelect");
const people = document.querySelectorAll(".person");

relationSelect.addEventListener("change", () => {
  const selected = relationSelect.value; // "aunt", "uncle", or ""

  people.forEach(person => {
    const role = person.getAttribute("data-role");

    if (!selected) {
      // No selection: remove highlight from all
      person.classList.remove("highlight");
    } else if (role === selected) {
      person.classList.add("highlight");
    } else {
      person.classList.remove("highlight");
    }
  });
});
