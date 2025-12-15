// Crea un script que pida mediante prompt(): nombre, edad, si quiere recibir notificaciones (si/no → convertir a boolean)
// Y muestre por consola: El tipo de cada variable. Si la edad es válida (número > 0)
// Un mensaje tipo: "Hola NOMBRE, tienes X años y notificaciones = true/false"
let nombre = prompt("Dime tu nombre", "");
console.log(typeof nombre);

let edad = prompt("Dime tu edad", "");
let edadNum = Number(edad);
console.log(typeof edadNum);
if (edadNum > 0) {
    console.log("La edad es válida");
}

let notificaciones = prompt("¿Quieres recibir notificaciones? (si/no)", "");
console.log(typeof notificaciones);
if (notificaciones.toLowerCase() === "si") {
    notificaciones = true;
} else{
    notificaciones = false;
}


alert("Hola " + nombre + ", tienes " + edad + " años y notificaciones = " + notificaciones);