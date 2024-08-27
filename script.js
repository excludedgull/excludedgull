// Simple cart example

let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log('Product added to cart:', product);
}

// Event listener for "Add to Cart" button
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
