let currentIndex = 0;

function showModal(primaryImage, images, title, price, brand, size) {
    currentIndex = 0;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = 'Price: ' + price;
    document.getElementById('modal-brand').innerText = 'Brand: ' + brand;
    document.getElementById('modal-size').innerText = 'Size: ' + size;

    document.getElementById('modal-img').src = primaryImage;

    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = '';
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = title;
        thumbnail.onclick = function() {
            currentIndex = index;
            document.getElementById('modal-img').src = image;
        };
        thumbnailsContainer.appendChild(thumbnail);
    });

    document.getElementById('modal').style.display = 'block';
}

function changeImage(direction) {
    const images = Array.from(document.getElementById('thumbnails').querySelectorAll('img'));
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('modal-img').src = images[currentIndex].src;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function buyNow(productName) {
    alert("You are about to buy: " + productName);

}
