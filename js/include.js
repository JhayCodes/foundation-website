function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("navbar", "partials/navbar.html");
    loadComponent("footer", "partials/footer.html");
});