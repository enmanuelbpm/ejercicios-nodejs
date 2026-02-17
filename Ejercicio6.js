// Importamos la librería prompt-sync para poder pedir datos por consola
const prompt = require("prompt-sync")();
// Le pedimos al usuario que ingrese su peso
// Usamos parseFloat porque el peso puede tener decimales (ej: 45.5 kg)
let num1=parseFloat(prompt("Ingresa tu peso: "));
// Si el peso es menor a 40 kg
if(num1<40){
   console.log("El alumno pesa menos de 40kg");
}
// Si el peso está entre 40 y 50 kg (incluyendo 40 y 50)
else if(num1>=40&&num1<=50){
   console.log("El alumno pesa entre 40 y 50 kg");
}
// Si el peso es mayor a 50 pero menor a 60 kg
else if(num1>50&&num1<60){
   console.log("El alumno pesa mas de 50 y menos de 60 kg");
}
// Si no cumple ninguna de las anteriores, entonces pesa 60 kg o más
else{
   console.log("El alumno pesa mas de 60kg");
}