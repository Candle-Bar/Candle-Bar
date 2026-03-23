let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total-price");

    // Clear current list
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${item.name}</span> <span>$${item.price.toFixed(2)}</span>`;
        cartList.appendChild(li);
    });

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function processCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    // Redirect to Instagram or a Stripe Payment Link
    alert("Redirecting to complete your order...");
    window.open("https://instagram.com/candleb4r", "_blank");
}