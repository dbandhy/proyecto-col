
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error al cargar el archivo:', error));
}


// Cargar el header y footer
loadComponent('main-header', '/components/header.html');
loadComponent('main-footer', '/components/footer.html');
loadComponent('main-header-cine', '/cine/components/header-cine.html');
loadComponent('main-slider-cine', '/cine/components/slider-cine.html');
loadComponent('main-slider-estreno', '/cine/components/slider-estreno.html');
loadComponent('main-slider-cartelera', '/cine/components/slider-estreno.html');
loadComponent('main-slider-recomendado', '/cine/components/slider-estreno.html');
loadComponent('main-slider-estreno-mobile', '/cine/components/slider-estreno-mobile.html');
loadComponent('main-slider-detail', '/cine/components/slider-detail.html');



