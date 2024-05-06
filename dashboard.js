// Assuming you have all tabs with class "tab" and all options with class "option"
document.getElementById("content").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    var ordersContainer = document.getElementById("tab.id");
    if (ordersContainer.style.display === "none") {
        ordersContainer.style.display = "flex";
    } else {
        ordersContainer.style.display = "none";
    }
});
