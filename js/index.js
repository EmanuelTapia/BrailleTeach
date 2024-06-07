
function btnIniciar(){
    location.assign("../login.html");
}

document.addEventListener("keydown", function(event) {
    if (event.key === " ") { // Verificar si se presionó la tecla espacio
        location.assign("../login.html");
    }
  });
