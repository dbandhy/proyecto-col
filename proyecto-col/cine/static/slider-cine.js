// script.js

// Variables para el slideshow
let slideIndex = 1;

// Inicializar el slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
});

// Función para avanzar o retroceder slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para seleccionar un slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función principal para mostrar slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Verificar límites del índice
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Ocultar todos los slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Quitar la clase active de todos los dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Mostrar el slide actual y marcar el dot correspondiente
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Opcional: Slideshow automático
// let autoSlide = setInterval(function() {
//     plusSlides(1);
// }, 5000);