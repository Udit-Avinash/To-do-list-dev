document.addEventListener("DOMContentLoaded", () => {
  const checkoutForm = document.getElementById("checkoutForm");
  const orderSuccess = document.getElementById("orderSuccess");

  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const address = document.getElementById("address");
    const card = document.getElementById("card");

    let valid = true;

    [name, address, card].forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("is-invalid");
        valid = false;
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (valid) {
      localStorage.removeItem("cart"); // Clear cart
      checkoutForm.classList.add("d-none");
      orderSuccess.classList.remove("d-none");
    }
  });
});
