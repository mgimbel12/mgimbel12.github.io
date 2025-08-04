let cart = [];

function addToCart(button) {
  const product = button.parentElement;
  const id = product.getAttribute("data-id");
  const name = product.getAttribute("data-name");
  const price = parseFloat(product.getAttribute("data-price"));

  cart.push({ id, name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;
  
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
}
document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your order, " + document.getElementById("name").value + "!");
  cart = [];
  updateCart();
  this.reset();
});
