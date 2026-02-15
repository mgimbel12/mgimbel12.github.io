// ===== BASIC JS STARTER =====

// Runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page is ready!");

    // Example: Button click
    const btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }

    // Example: Simple text update
    const title = document.querySelector("h1");
    if (title) {
        title.textContent = "JavaScript Connected Successfully!";
    }
});

