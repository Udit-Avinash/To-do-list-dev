// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartDisplay() {
  const cartTable = document.getElementById("cartTableBody");
  const cartTotal = document.getElementById("cartTotal");
  cartTable.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    cartTable.innerHTML += `
      <tr>
        <td><img src="${item.image}" class="img-fluid" style="max-width: 80px;"></td>
        <td>${item.name}</td>
        <td>₹${item.price.toFixed(2)}</td>
        <td>
          <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="form-control qty-input">
        </td>
        <td>₹${subtotal.toFixed(2)}</td>
        <td><button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button></td>
      </tr>`;
  });

  cartTotal.textContent = `₹${total.toFixed(2)}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Handle quantity change and remove
document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();

  document.getElementById("cartTableBody").addEventListener("change", e => {
    if (e.target.classList.contains("qty-input")) {
      const index = e.target.getAttribute("data-index");
      cart[index].quantity = parseInt(e.target.value);
      updateCartDisplay();
    }
  });

  document.getElementById("cartTableBody").addEventListener("click", e => {
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      updateCartDisplay();
    }
  });
});
