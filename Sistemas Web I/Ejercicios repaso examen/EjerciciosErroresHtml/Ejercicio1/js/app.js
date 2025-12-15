import {users, sales} from './utils.js'

document.addEventListener("DOMContentLoaded", function () {
  loadData();
  
  const botonCargarDatos = document.getElementById("cargarDatos");
  botonCargarDatos.addEventListener("click", () => {
    loadData();
  });
});


function loadData() {
  document.getElementById("users").innerHTML = getUsers();
  document.getElementById("sales").innerHTML = getSales();
}

function getUsers() {
  return users.length;
}

function getSales() {
  return sales.reduce((a, b) => a + b);
}
