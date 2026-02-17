// Importamos la librería prompt-sync para poder pedir datos por consola
const prompt = require("prompt-sync")();
// Le pedimos al usuario que ingrese un ángulo en grados
// Usamos parseFloat porque el ángulo podría tener decimales
let angulo = parseFloat(prompt("Ingrese el ángulo en grados: "));
//el angulo debe estar entre 0 hasta 360, sino no existe
if(angulo>=0&&angulo<=360){
// Si el ángulo es menor que 90°, es un ángulo agudo
if (angulo < 90) {
    console.log("Es un ángulo agudo");
}
// Si el ángulo es exactamente 90°, es un ángulo recto
else if (angulo === 90) {
    console.log("Es un ángulo recto");
}
// Si el ángulo es mayor que 90° pero menor que 180°, es obtuso
else if (angulo > 90 && angulo < 180) {
    console.log("Es un ángulo obtuso");
}
// Si el ángulo es exactamente 180°, es un ángulo llano
else if (angulo === 180) {
    console.log("Es un ángulo llano");
}
// Si no cumple ninguna de las anteriores,
// significa que el ángulo es mayor a 180°
else {
    console.log("Ángulo mayor a 180 grados");
}
}else{
//muestro que el angulo escrito no existe    
    console.log("Ese angulo no existe");
}