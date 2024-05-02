function showModal(image, title, price, size) {
    document.getElementById('modal-img').src = image;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = 'Price: ' + price;
    document.getElementById('modal-size').innerText = 'Size: ' + size;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function buyNow(productName) {
    alert("You are about to buy: " + productName);
    // Add logic to handle the purchase
}
