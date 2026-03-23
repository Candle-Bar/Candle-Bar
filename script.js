let cart = [];
let total = 0;
function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    displayerCart();
}
function displayerCart() {
    const cartItems =
document.getElementById("cart-items");
    const totalDisplay =
document.getElementById("total");
    cartItems.innerHMTL = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - $ "
    item.price;
        cartItems.appendChild(li);
    });
    totalDisplay.textContent = "Total: $" + total;
}
function checkout() {
    alert("Thanks for your order! Message me on Instagram to complete order!")
}