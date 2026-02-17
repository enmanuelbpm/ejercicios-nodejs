/*Escribir una sentencia if-else que visualice la
palabra Alta si el valor de la variable nota es
mayor que 100 y Baja si el valor de esa nota es
menor que 100.
*/
//declaro la variable nota 1 con su asignacion.
let nota1=50;
//la condicion if y else en este caso es para que el numero prosiga cuando nota1 sea positivo, si es negativo que no pueda proceder.
if(nota1>=0&&nota1>100){
    //este if y else es para evaluar la condicion de que nota1 sea mayor a 100 y else en el caso de que nota1 sea menor a 100.
  if(nota1>100){
    //muestro que la nota es mayor a 100
    console.log("Su nota es Alta de 100");
}else {
    //muestro que la nota es menor a 100
    console.log("Su nota es Baja de 100");
}
}else{
    console.log("no se puede proceder debido a que su nota no debe ser negativo");
}