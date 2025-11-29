const diccionario = ["sol","luna","estrella","mar","rio","viento","nube","fuego","tierra","bosque",
  "roble","pino","roca","arena","cobre","brisa","norte","sur","este","oeste",
  "trueno","rayo","nieve","hielo","llama","musgo","laguna","cielo","valle","cumbre"
];


function generarContrasena(numPalabras){
  let contrasena = [];
  for(let i = 0; i < numPalabras; i++){
    indiceAleatorio = Math.floor(Math.random() * diccionario.length);
    contrasena.push(diccionario[indiceAleatorio]);
  }
  return contrasena.join("-");
}


document.getElementById("generar").addEventListener("click", function(){
  let numPalabras = parseInt(document.getElementById("numPalabras").value);
  let contrasenaGenerada = generarContrasena(numPalabras);
  document.getElementById("contrasenaGenerada").textContent = contrasenaGenerada;
});