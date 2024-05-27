//Funciones para poder mostrar la información de cada equipo en la oficina

//Info sobre la impresora Makerbot
function Makerbot() {
	document.getElementById("Info").innerHTML = '<h2>Impresora Makerbot Replicator 2X</h2><p>Esta impresora cuenta con 2 extrusores independientes, lo cual nos permite emplear dos colores, o incluso dos materiales distintos en una sola impresión de manera sencilla.</p> <img class="imgM" src="Img/Makerbot.png">';
	document.getElementById("Info").scrollIntoView();
}

//Info sobre la impresora Kingroon
function Kingroon() {
	document.getElementById("Info").innerHTML = '<h2>Impresora Kingroon K3PS Pro S1</h2><p>Esta impresora cuenta con rieles lineales, perfectos para poder realizar impresiones con un mucho mayor nivel de detalle. Debido a su voumen de impresión pequeño, la hemos optimizado para hacer las piezas más detalladas y delicadas.</p><img class="imgM" src="Img/Kingroon.jpg">';
	document.getElementById("Info").scrollIntoView();
}

//Info sobre la impresora Kobra
function Kobra() {
	document.getElementById("Info").innerHTML = '<h2>Impresora Anycubic Kobra II</h2><p>Esta impresora tiene un gran volumen de impresión y es lo que se conoce como un clon de una Ender 3, la cual es una de las impresoras más populares debido a su posibilidad de modificarla. Esta impresora la tenemos dedicada a las piezas de gran tamaño, debido a su altísima velocidad de impresión, permitiendo crear piezas de gran tamaño en tiempos razonables.</p><img class="imgM" src="Img/Kobra.jpg">';
	document.getElementById("Info").scrollIntoView();
}

//Info sobre los modelos de prueba
function Cheems() {
	document.getElementById("Info").innerHTML = '<h2>Modelos de prueba</h2><p>Hemos realizado muchos modelos de prueba con el fin de poder probar filamentos, colores, parámetros de impresión, boquillas, y otros elementos del proceso. Nuestro modelo predilecto para estas pruebas son Cheems</p><img class="imgM" src="Img/Cheems.jpg">';
	document.getElementById("Info").scrollIntoView();
}

//Info sobre el computador con el software de impresión
function Slicer() {
	document.getElementById("Info").innerHTML = '<h2>Software para impresión</h2><p>Para preparar nuestros modelos 3D para impresión, usamos un tipo de Software llamado Slicer. Estos programas se usan para tomar un archivo 3D y convertirlo en código que nuestra impresora comprenda, para así generar los movimientos que debe seguir para imprimir cualquier modelo. Algunos ejemplos de Slicer son PrusaSlicer, Cura u Orca.</p><img class="imgM" src="Img/Slicers.jpg">';
	document.getElementById("Info").scrollIntoView();
}