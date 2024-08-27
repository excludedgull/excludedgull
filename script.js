// Initialize cart as an empty array
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    console.log('Product added to cart:', product);
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
    // Here you would typically handle the checkout process
    console.log('Checkout with cart:', cart);
    cart = []; // Clear cart after checkout
    updateCartDisplay();
}

// Add event listener to checkout button
document.querySelector('#checkout-button')?.addEventListener('click', handleCheckout);
