window.speechSynthesis.cancel();
window.voz("bienvenida");

document.addEventListener("keydown", function(event){

    if (event.key.toLowerCase() === "f") {
        window.location.href = "./aprenderAbecedario.html";
    }

    if (event.key.toLowerCase() === "d") {
        window.location.href = "./aprenderNumero.html";
    }

    if (event.key.toLowerCase() === "s") {
        window.location.href = "./aprenderSigno.html";
    }

});