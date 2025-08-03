let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement;
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('Price: $', ''));

        cart.push({ id: productId, name: productName, price: productPrice });
        totalPrice += productPrice;

        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').innerText = `Total: $${totalPrice}`;
}
