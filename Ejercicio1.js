/*Escribir un programa que lea dos números y
visualice el mayor.
*/
//declaro las variables num1 y num2 con un valor asignado.
let num1= 20;
let num2=49;
//hago un condicional if, else if, else para las posibilidades de que num1 sea mayor a num2 y viceversa, tambien en el caso de que los numeros sean iguales.
if(num1>num2){
    //muestro que num1 es mayor que num2
    console.log("El numero "+num1+" es mayor que "+num2);
}else if(num2>num1){
    //muestro que num2 es mayor que num1
    console.log("El numero "+num2+" es mayor que "+num1);
}else{
    //muestro que los numeros nos iguales
    console.log("Los numeros son iguales");
}