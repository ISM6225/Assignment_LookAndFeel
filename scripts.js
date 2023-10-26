// Function to load a component into a placeholder
function loadComponent(componentId, componentUrl) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        });
}

// Load header and footer on page load
window.onload = function() {
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');
};