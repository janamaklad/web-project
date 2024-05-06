function manage(anchorId) {
    // Hide all content divs
    document.querySelectorAll('.content > div').forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected content div
    const contentDiv = document.querySelector(`#${anchorId}`);
    if (contentDiv) {
        contentDiv.style.display = 'block';
    }
}
