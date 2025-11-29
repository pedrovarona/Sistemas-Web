$("#modal").hide();
$("#botonRegistrar").click(function() {
    $("#modal").toggle();
});

$("#formRegistrar").submit(function(e) {

    let nombreapellidos = $("#nombreapellidos").val().trim();
    let partes = nombreapellidos.split(" ");

    if (partes.length < 2) {
        alert("Nombre y apellidos deben incluir al menos un nombre y un apellido.");
        return;
    }

    let email = $("#email");

    let telefono = $("#telefono");
    let contrasena = $("#contrasena").val();
    let tienemayusc = false;
    let tieneminusc = false;
    let tienenumero = false;
    for (let i = 0; i < contrasena.length; i++) {
        let char = contrasena.charAt(i);
        if (char >= 'A' && char <= 'Z') {
            tienemayusc = true;
        } else if (char >= 'a' && char <= 'z') {
            tieneminusc = true;
        } else if (char >= '0' && char <= '9') {
            tienenumero = true;
        }
    }
    if (contrasena.length <8 || !tienemayusc || !tieneminusc || !tienenumero) {
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.");
        return;
    }

    console.log("Formulario válido");
    alert("Formulario enviado correctamente.");
});
