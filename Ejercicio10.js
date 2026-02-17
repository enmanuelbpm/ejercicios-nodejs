// Importamos la librería prompt-sync para poder pedir datos por consola
const prompt=require("prompt-sync")();
// Pedimos al usuario que ingrese dos números enteros
let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el primer numero: "));

// Verificamos si el primer número es divisible por el segundo
// (es decir, si al dividir num1 entre num2 el residuo es 0)
if(num1%num2===0){
    console.log("El numero "+num1+" es divisible del numero "+num2);
}
// Si no se cumple lo anterior, verificamos si el segundo número
// es divisible por el primero
else if(num2%num1===0){
    console.log("El numero"+num2+" es divisible del numero "+num1);
}
// Si ninguna de las dos condiciones se cumple,
// significa que ninguno es divisor del otro
else{
    console.log("Ningun numero es divisor del otro");
}