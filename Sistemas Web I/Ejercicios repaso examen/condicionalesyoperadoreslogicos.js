let nota = prompt("Dime tu nota en numero entero", "");
let notaNum = Number(nota);
while (notaNum < 0 || notaNum > 10 || isNaN(notaNum)) {
    nota = prompt("Nota no válida. Dime tu nota otra vez en numero entero", "");
    notaNum = Number(nota);
}

if (notaNum >= 0 && notaNum < 5){
    alert("Suspenso");
}else if (notaNum == 5){
    alert("Aprobado");
}else if (notaNum > 5 && notaNum < 8){
    alert("Bien");
}else if(notaNum >=8 && notaNum < 10){
    alert("Notable");
}else if (notaNum == 10){
    alert("Sobresaliente");
}