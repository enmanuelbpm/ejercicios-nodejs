/*Escribir un programa que determine el mayor de
tres números.
*/
//declaro las variables num1, num2 y num3 con un valor asignado.
let num1=15;
let num2=23;
let num3=1;
//hago un condicional if, else if, else para las posibilidades de que num1 sea mayor a num2 y num3, tambien en el caso contrario para las variables restantes , ademas para el caso de que los numeros sean iguales.
if(num1>num2&&num1>num3){
//muestro que num1 es el mayor de los tres numeros asignados    
    console.log("El numero "+num1+" es el mayor de los tres numeros");
}else if(num2>num1&&num2>num3){
//muestro que num2 es el mayor de los tres numeros asignados    
    console.log("El numero "+num2+" es el mayor de los tres numeros");
}else if(num3>num1&&num3>num1){
//muestro que num3 es el mayor de los tres numeros asignados    
    console.log("El numero "+num2+" es el mayor de los tres numeros");
}else{
//muestro que los numeros asignados son iguales     
    console.log("Todos los numeros son iguales");
}