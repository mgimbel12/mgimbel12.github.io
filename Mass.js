// script.js
document.addEventListener('DOMContentLoaded', () => {
  const cart = [];

  function addToCart(productId) {
    cart.push(productId);
    updateCartUI();
  }

  function updateCartUI() {
    const cartCount = document.querySelector('#cart-count');
    cartCount.textContent = cart.length;
  }

  // Festive greeting
  const greeting = document.createElement('div');
  greeting.textContent = "🎄 Merry Shopping! 🎁";
  greeting.style.position = 'fixed';
  greeting.style.bottom = '10px';
  greeting.style.right = '10px';
  greeting.style.background = '#f1c40f';
  greeting.style.padding = '10px';
  greeting.style.borderRadius = '8px';
  document.body.appendChild(greeting);

  setTimeout(() => greeting.remove(), 5000);
});

