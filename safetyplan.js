// Switch between safety plans when nav buttons are clicked
const buttons = document.querySelectorAll(".nav-btn");
const plans = document.querySelectorAll(".plan");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-plan");

    // Update button active state
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show the matching plan
    plans.forEach((plan) => {
      if (plan.id === targetId) {
        plan.classList.add("active");
      } else {
        plan.classList.remove("active");
      }
    });
  });
});

// Optional: start with Halloween button marked active
document
  .querySelector('.nav-btn[data-plan="halloween"]')
  .classList.add("active");
