const products = [
  { id: 1, name: "Glow Serum", price: 19.99, image: "serum.jpg" },
  { id: 2, name: "Healing Balm", price: 14.99, image: "balm.jpg" },
  { id: 3, name: "Light Mask", price: 29.99, image: "mask.jpg" }
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const container = document.getElementById("productContainer");
  if (!container) return;

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.textContent = count;
}

function renderCart() {
  const container = document.getElementById("cartContainer");
  const totalPrice = document.getElementById("totalPrice");
  if (!container || !totalPrice) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    container.appendChild(li);
  });

  totalPrice.textContent = total.toFixed(2);
}

function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function emptyCart() {
  cart.length = 0;
  localStorage.removeItem("cart");
  renderCart();
  updateCartCount();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  updateCartCount();

  const emptyBtn = document.getElementById("emptyCart");
  if (emptyBtn) emptyBtn.addEventListener("click", emptyCart);
});

