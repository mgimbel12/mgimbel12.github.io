document.addEventListener("DOMContentLoaded", () => {
  const tree = document.getElementById("tree");

  tree.addEventListener("click", () => {
    tree.style.animation = "dance 0.5s infinite ease-in-out";
    setTimeout(() => {
      tree.style.animation = "dance 2s infinite ease-in-out";
    }, 3000);
    alert("🎄 The tree is dancing! Happy Holidays!");
  });
});
