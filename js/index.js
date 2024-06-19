
function btnIniciar(){
    location.assign("./login.html");
    speechSynthesis.cancel();
}

document.addEventListener("keydown", function(event) {
    if (event.key === " ") { // Verificar si se presionó la tecla espacio
        location.assign("./login.html");
        speechSynthesis.cancel();
    }
  });

window.voz("bienvenido");

