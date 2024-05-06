function removeProduct(image, title, price, brand, size) {
    // Display confirmation dialog
    if (confirm("Are you sure you want to remove this product?")) {
        // Perform removal logic
        console.log("Product removed:", title);
        // Here you can implement the logic to actually remove the product from the page
        // For example, you can remove the product element from the DOM
        let productElement = document.querySelector(`.product img[src="${image}"]`).closest(".product");
        if (productElement) {
            productElement.remove();
            // Show confirmation message with "Restore Product" button
            showConfirmationMessage(image, title, price, brand, size);
        }
    }
}

function showConfirmationMessage(image, title, price, brand, size) {
    let confirmationMessage = document.createElement("div");
    confirmationMessage.className = "confirmation-message";
    confirmationMessage.innerHTML = `
        <h2>Product removed successfully!</h2>
        <button onclick="restoreProduct('${image}', '${title}', '${price}', '${brand}', '${size}')">Restore Product</button>
        <button class="close-button" onclick="closeConfirmationMessage()">Cancel</button>
    `;
    document.body.appendChild(confirmationMessage);
}

function closeConfirmationMessage() {
    let confirmationMessage = document.querySelector(".confirmation-message");
    if (confirmationMessage) {
        confirmationMessage.remove();
    }
}

function restoreProduct(image, title, price, brand, size) {
    // Logic to restore the product
    console.log("Product restored!");
    // Remove the confirmation message
    let confirmationMessage = document.querySelector(".confirmation-message");
    if (confirmationMessage) {
        confirmationMessage.remove();
    }
    // Here you can implement the logic to restore the product
    let productContainer = document.querySelector(".product");
    let productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${image}">
        <div class="product-details">
            <h2>${title}</h2>
            <p>Price: ${price}</p>
            <p>Brand: ${brand}</p>
            <p>Size: ${size}</p>
            <button onclick="removeProduct('${image}', '${title}', '${price}', '${brand}', '${size}')">Remove</button>
        </div>
    `;
    productContainer.appendChild(productElement);
}

