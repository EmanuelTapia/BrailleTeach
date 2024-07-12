window.speechSynthesis.cancel();
window.voz("bienvenida");

document.addEventListener("keydown", function(event){

    if (event.key.toLowerCase() === "f" && !window.isOpen) {
        window.location.href = "./practicarAbecedario.html";
    }

    if (event.key.toLowerCase() === "d" && !window.isOpen) {
        window.location.href = "./practicarNumero.html";
    }

    if (event.key.toLowerCase() === "s" && !window.isOpen) {
        window.location.href = "./practicarSigno.html";
    }

});