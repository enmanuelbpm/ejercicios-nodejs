const prompt=require("prompt-sync")();
let num1=parseFloat(prompt("Ingresa el primer numero"));
let num2=parseFloat(prompt("Ingresa el segundo numero"));
let resultado;
let opciones=parseInt("Introduce 1 si quieres sumar \n Introduce 2 si quieres multiplicar \n Introduce 3 si quieres dividir el numero");
switch(opciones){
    case 1:
      resultado=num1+num2;
      console.log("El resultado de la suma es "+resultado);
      break;
    case 2:
      resultado=num1*num2;
      console.log("El resultado de la multiplicacion es "+resultado);
      break;  
    case 3:
      if(num2!==0){
        resultado=num1/num2
        console.log("El resultado de la division es "+resultado);
      }else{
        console.log("No se puede hacer esa division (indeterminado)");
      }          
}