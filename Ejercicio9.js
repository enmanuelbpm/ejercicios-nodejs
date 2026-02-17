// Importamos la librería prompt-sync para poder pedir datos por consola
const prompt=require("prompt-sync")();
// Pedimos al usuario que ingrese dos números enteros
let num1=parseInt(prompt("Ingresa un primer numero: "));
let num2=parseInt(prompt("Ingresa un segundo numero: "));
// Comparamos los dos números
// Si el primer número es mayor que el segundo
if(num1>num2){
   console.log("El primer número es el mayor");
}
// Si el primer número es menor que el segundo
else if(num1<num2){
   console.log("El primer número es el mas pequeño");
}
// Si ninguno de los anteriores se cumple,significa que los dos números son iguales
else{
    console.log("El primero numero es igual al segundo numero introducido");
}
