document.addEventListener("DOMContentLoaded", function() {
    var categoryLinks = document.querySelectorAll('.category');
    var underline = document.querySelector('.underline');

    adjustUnderline(categoryLinks[0]); 

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
});  
