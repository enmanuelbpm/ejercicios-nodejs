// Importamos la librería prompt-sync para poder pedir datos por consola.
const prompt=require("prompt-sync")();
// Pedimos al usuario que ingrese dos números.
let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
// Aquí vamos a guardar la opción que elija el usuario.
let operacion;
//// Aquí se guardará el resultado de la operación.
let resultado;
// Primero verificamos que los números no sean negativos
if(num1>=0&&num2>=0){
  // Verificamos que el primer número sea mayor que el segundo
   if(num1>num2){
    // Mostramos el menú de opciones para que el usuario elija qué operación quiere hacer
  operacion=parseInt(prompt("Elige 1 si quieres hacer una sumar. \n Elige 2 si quieres hacer una resta. \n Elige el numero 3 si quieres hacer una multiplicacion. \n Elige 4 si quieres hacer una division. \n"));
   // Si el usuario elige 1, hacemos la suma
  if(operacion==1){
     resultado=num1+num2;
     console.log("El resultado de la suma es "+resultado);
  }
   // Si elige 2, hacemos la resta
  else if(operacion==2){
    resultado=num1-num2;
    console.log("El resultado de la resta es "+resultado);
  }
  // Si elige 3, hacemos la multiplicación
  else if(operacion==3){
    resultado=num1*num2;
    console.log("El resultado de la multiplicacion es "+resultado);
  }
  // Si elige 4, hacemos la división
  else if(operacion==4){
  // Antes de dividir, verificamos que el segundo número no sea 0  
    if(num2!==0){
        resultado=num1/num2;
        console.log("El resultado de la division es "+resultado);
    }else{
        console.log("No es posible hacer la division")
    }
  }
  // Si no elige ninguna opción válidas, ps no puede hacer esa operacion.
  else{
     console.log("No es posible hacer esa operacion, por lo cual no podemos proceder");
  }
}
  //muestro que el primer numero no puede ser mayor al segundo.
else{
    console.log("No puede ser el primer numero menor que el segundo numero introducido");
}
}
//muestro que los numero no pueden ser negativos.
else{
  console.log("No es posible hacer operaciones con numeros negativos");
}