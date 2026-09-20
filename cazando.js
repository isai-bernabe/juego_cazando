// Obtener el canvas y su contexto para iniciar el dibujo
let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// Función graficarGato (sin parámetros) que dibuja un rectángulo centrado
function graficarGato() {
    ctx.fillStyle = "black"; 
    // Coordenadas (225, 225) con tamaño de 50x50 px
    ctx.fillRect(((500-50)/2), ((500-50)/2), 50, 50);