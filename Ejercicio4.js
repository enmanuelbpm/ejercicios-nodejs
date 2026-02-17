/*Escribir un programa para deducir si una variable
o expresión numérica es par.
*/
//declaro la variable num1 con un valor asignado.
let num1=13;
//esta condicion if y else es para que solo acepte numeros positivos y en el caso contrario ps no prosiga.
if(num1>0){
    //este if y else es para evaluar si el numero es par y si es impar.
   if(num1%2==0){
    //muestro que el numero es par.
    console.log("El numero es par");
  }else{
    //muestro que el numero es impar.
    console.log("El numero es impar");
}
}else{
    //en el caso de que sea negativo muestro que no puede proceder.
    console.log("No se puede proceder, debido a que su numero es negativo");
}