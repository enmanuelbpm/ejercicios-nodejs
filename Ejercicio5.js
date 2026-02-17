const prompt=require("prompt-sync")();
let dia= parseInt(prompt("Ingresa el dia actual: "));
let mes= parseInt(prompt("Ingresa el mes actual: "));
let año= parseInt(prompt("Ingresa el año actual: "));
let diasMensuales;
let Bisciesto=false;
if((año%4==0&&año!==100)||(año%400==0)){
    Bisciesto=true;
}
if(mes===2){
    if(Bisciesto){
    if(Bisciesto){
        diasMensuales=29;
    }
    else{
        diasMensuales=28;
    }
   }
}
else if(mes===1||mes===3||mes===5||mes===7||mes===8||mes===10||mes===12){
    diasMensuales=31;
}
else{
    diasMensuales=30;
}
if(dia<diasMensuales){
    dia++;
}
else{
    dia=1;
    if(mes<=12){
        mes++;
    }
    else{
        mes=1;
        año++;
    }
}
console.log("La fecha del dia siguiente es "+dia+"/"+mes+"/"+año);