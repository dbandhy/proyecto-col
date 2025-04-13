
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error al cargar el archivo:', error));
}

// Cargar el header y footer
loadComponent('main-header', '/components/header.html');
loadComponent('main-footer', '/components/footer.html');

