const botonAceptar = document.getElementById("aceptar");
const botonRechazar = document.getElementById("rechazar");
const footer = document.getElementById("footer");

if(localStorage.getItem("cookie")){
    footer.style.display = "none";
}

botonAceptar.addEventListener("click", (e) => {
    localStorage.setItem("cookie", "true");
    footer.style.display = "none";
    const options = {
        method : "POST"
    }
    fetch("http://localhost:3000/cookies", options);
})

botonRechazar.addEventListener("click", (e) => {
    window.location.href = "https://www.google.es"
})