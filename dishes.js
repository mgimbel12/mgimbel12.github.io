// Section filter for Halloween, Christmas, or both

const buttons = document.querySelectorAll(".main-nav button");
const halloweenSection = document.getElementById("halloween");
const christmasSection = document.getElementById("christmas");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;

    if (target === "halloween") {
      halloweenSection.style.display = "block";
      christmasSection.style.display = "none";
    } else if (target === "christmas") {
      halloweenSection.style.display = "none";
      christmasSection.style.display = "block";
    } else {
      halloweenSection.style.display = "block";
      christmasSection.style.display = "block";
    }
  });
});

// Default view: show both
halloweenSection.style.display = "block";
christmasSection.style.display = "block";
