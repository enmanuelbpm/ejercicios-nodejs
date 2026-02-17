const prompt=require("prompt-sync")();
let mes=parseInt(prompt("Ingrese el numero del mes (1 al 12):  "));
if(mes>=1&&mes<=12){
    if(mes===1||mes===3||mes===5||mes===7||mes===8||mes===10||mes===12){
        console.log("El mes "+mes+" tiene 31 dias");
    }else if(mes===4||mes===6||mes===9||mes===11){
        console.log("El mes "+mes+" tiene 30 dias");
    }
    else{
        console.log("El mes "+mes+" tiene 28 o 29 dias dependiendo si el año es bisciesto");
    }
}else{
    console.log("Ese mes no existe");
}