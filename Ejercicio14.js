const prompt=require("prompt-sync")();
let num1 = parseInt(prompt("Ingrese un numero entero"));
if(num1===30){
   console.log("El numero es igual a 30");
}else if(num1>30){
   console.log("El numero es mayor a 30");
}else if(num1<0){
   console.log("El numero es negativo");
}else if(num1===0){
   console.log("El numero es cero");
}else if(num1===1){
   console.log("Es una unidad");
}else if( (num1&(num1-1))===0 ){
    console.log("El numero es potencia de 2");
}
else{
    if(num1%num1==0&&num1%1==0){
        console.log("El numero es primo");
    }else{
        console.log("El numero es compuesto")
    }
}