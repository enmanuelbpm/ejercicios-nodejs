const prompt=require("prompt-sync")();
let num1=parseInt(prompt("Ingresa el primer numero: "));
let num2=parseInt(prompt("Ingresa el segundo numero: "));
let resultado;
let signo=prompt("Ingresa el signo operativo (+(suma), -(resta), *(multiplicacion), /(division), %(resto))");
switch(signo){
    case "+":
          resultado=num1+num2;
          console.log("El resultado de la suma es "+resultado);
          break;
    case "-":
          resultado=num1-num2;
          console.log("El resultado de la resta es "+resultado);
          break;
    case "*":
          resultado=num1*num2;
          console.log("El resultado de la multiplicacion es "+resultado);
          break;
    case "/":
          if(num2!==0){
            resultado=num1/num2
            console.log("El resultado de la division es "+resultado);
          }
          else{
            console.log("Division indeterminada");
          }
          break;
    case "%":
          if(num2!==0){
            resultado=num1%num2
            console.log("El resultado del resto de la division es "+resultado);
          }
          else{
            console.log("Modulo indeterminado");
          }
          break;
    default:
         console.log("Operacion indeterminada");
         break;            
}
