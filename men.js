document.addEventListener("DOMContentLoaded", function() {
    var categoryLinks = document.querySelectorAll('.category');
    var underline = document.querySelector('.underline');

    adjustUnderline(categoryLinks[1]); 

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            adjustUnderline(this);
        });
    });

    function adjustUnderline(selectedLink) {
        var linkOffset = selectedLink.offsetLeft;
        var linkWidth = selectedLink.offsetWidth;

        underline.style.left = linkOffset + 'px';
        underline.style.width = linkWidth + 'px';
    }
}); function showMenProducts(category) {
    var params = new URLSearchParams(window.location.search);
    var categoryParam = params.get('category');

    var allMenProducts = document.querySelectorAll('.men-products');
    allMenProducts.forEach(function (productSection) {
        productSection.style.display = 'none';
    });

    document.getElementById('men-products-' + categoryParam).style.display = 'block';
}

