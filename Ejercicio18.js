const prompt= require("prompt-sync")();
let num1=parseInt(prompt("Ingresa el primer numero: "));
let num2=parseInt(prompt("Ingresa el segundo numero: "));
let num3=parseInt(prompt("Ingresa el tercer numero: "));
if((num1<=num2)&&(num2<=num3)){
    console.log("Los numeros estan en orden");
}
else{
    console.log("Los numeros estan en desorden");
}