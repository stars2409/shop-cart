// Function to adjust quantity
function adjustQuantity(button, amount) {
    const item = button.closest('.cart-item');
    const quantitySpan = item.querySelector('.quantity');
    const priceSpan = item.querySelector('.item-price');
    const pricePerItem = parseFloat(item.getAttribute('data-price'));

    let quantity = parseInt(quantitySpan.textContent);
    quantity = Math.max(quantity + amount, 0); // Ensure quantity doesn't go below 0
    quantitySpan.textContent = quantity;

    const newPrice = pricePerItem * quantity;
    priceSpan.textContent = `$${newPrice.toFixed(2)}`;

    updateTotal();
}

// Function to delete item
function deleteItem(button) {
    const item = button.closest('.cart-item');
    item.remove();
    updateTotal();
}

// Function to update total price
function updateTotal() {
    const items = document.querySelectorAll('.cart-item');
    let total = 0;

    items.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
        total += price;
    });

    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Function to toggle like button
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});

// Add event listeners to delete buttons
document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', () => deleteItem(button));
});

// Initial update of total price
updateTotal();
