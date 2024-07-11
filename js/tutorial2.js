window.speechSynthesis.cancel();
window.voz("bienvenida");

let cont1 = false;
let cont2 = false;
let cont3 = false;
let cont4 = false;
let cont5 = false;
let cont6 = false;
let cont7 = false;

document.addEventListener("keydown", function(event){

    if(event.key.toLowerCase() === " " && !cont1){
        window.speechSynthesis.cancel();
        window.voz("tablero");
        window.voz("punto1");
        cont1 = true;
    };

    if(event.key.toLowerCase() === "f" && cont1 && !cont2){
        window.speechSynthesis.cancel();
        pintarPunto("f");
        vozNumero("1");
        window.voz("punto2");
        cont2 = true;
    };
    if(event.key.toLowerCase() === "d" && cont2 && !cont3){
        window.speechSynthesis.cancel();
        pintarPunto("d");
        vozNumero("2");
        window.voz("punto3");
        cont3 = true;
    };
    if(event.key.toLowerCase() === "s" && cont3 && !cont4){
        window.speechSynthesis.cancel();
        pintarPunto("s");
        vozNumero("3");
        window.voz("punto4");
        cont4 = true;
    };
    if(event.key.toLowerCase() === "j" && cont4 && !cont5){
        window.speechSynthesis.cancel();
        pintarPunto("j");
        vozNumero("4");
        window.voz("punto5");
        cont5 = true;
    };
    if(event.key.toLowerCase() === "k" && cont5 && !cont6){
        window.speechSynthesis.cancel();
        pintarPunto("k");
        vozNumero("5");
        window.voz("punto6");
        cont6 = true;
    };
    if(event.key.toLowerCase() === "l" && cont6 && !cont7){
        window.speechSynthesis.cancel();
        pintarPunto("l");
        vozNumero("6");
        window.voz("terminar");
        cont7 = true;
    };
    if(event.key.toLowerCase() === " " && cont6 ){
        window.speechSynthesis.cancel();
        window.location.href = "./tutorial3.html";
    };

    

});



function vozNumero(numero){
    if (numero) {
        const utterance = new SpeechSynthesisUtterance(`${numero}`);
        utterance.rate = 1;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

function pintarPunto(key){
    const div = document.getElementById(key);
        if (div) {
            div.classList.toggle("bg-[#4A4444]");
        }
}