
function btnIniciar(){
    location.assign("./tutorial1.html");
    speechSynthesis.cancel();
}

document.addEventListener("keydown", function(event) {
    if (event.key === " ") { // Verificar si se presionó la tecla espacio
        location.assign("./tutorial1.html");
        speechSynthesis.cancel();
    }
  });

window.voz("bienvenido");

