const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);
    addToCart(name, price);
  });
});
function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });
  totalDisplay.textContent = total.toFixed(2);
}
document.getElementById('clear-cart').addEventListener('click', () => {
  cart.length = 0;
  updateCart();
});

