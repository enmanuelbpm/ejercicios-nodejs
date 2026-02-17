// Importamos la librería prompt-sync para poder pedir datos por consola
const prompt=require("prompt-sync")();
// Pedimos al usuario que ingrese dos números enteros
let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
// Comparamos los dos números para saber cuál es menor
// Si el primer número es menor que el segundo
if(num1<num2){
    console.log("El numero "+num1+" es menor que el numero "+num2);
}
// Si el segundo número es menor que el primero
else if(num2<num1){
    console.log("El numero "+num2+" es menor que el numero "+num1);
}
// Si ninguna de las dos condiciones anteriores se cumple,
// significa que ambos números son iguales
else{
    console.log("Los numeros son iguales");
}