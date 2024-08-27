// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    saveCart();
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('#cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', (e) => {
        const productItem = e.target.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = productItem.querySelector('p').textContent;

        const product = {
            name: productName,
            price: productPrice
        };

        addToCart(product);
    });
});

// Example function to handle checkout
function handleCheckout() {
    // Process checkout, e.g., send cart data to server
    console.log('Checkout with cart:', cart);

    // Example: Sending cart data to a server endpoint
    fetch('/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Checkout response:', data);
        // Clear cart after successful checkout
        cart = [];
        saveCart();
        updateCartDisplay();
    })
    .catch(error => {
        console.error('Checkout error:', error);
    });
}

// Add event listener to checkout button
document.querySelector('#checkout-button')?.addEventListener('click', handleCheckout);

// Update cart display on page load
updateCartDisplay();
