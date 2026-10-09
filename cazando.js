// Obtener el canvas y su contexto para iniciar el dibujo
let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// Función graficarGato (sin parámetros) que dibuja un rectángulo centrado
function graficarGato() {
    ctx.fillStyle = "black"; 
    // Coordenadas (225, 225) con tamaño de 50x50 px
    ctx.fillRect(((500-50)/2), ((500-50)/2), 50, 50);
}

    // Variables de posición (inicializadas en 0)
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;


// Constantes de dimensiones
const ANCHO_GATO = 50;
const ALTO_GATO = 50;
const ANCHO_COMIDA = 30;
const ALTO_COMIDA = 30;



// Función graficarGato refactorizada
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "black");
}

// Función graficarComida refactorizada
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red");
}

// Función iniciarJuego para asignar posiciones y dibujar
function iniciarJuego() {
    // Cálculo para centrar el gato:
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    // Cálculo para ubicar la comida en la esquina inferior derecha:
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    // Dibujar los elementos en pantalla
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision(); 
}

function moverDerecha() {
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

