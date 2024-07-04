window.speechSynthesis.cancel();
window.voz("bienvenida");

let cont1 = false;
let cont2 = false;
let cont3 = false;

const relieve1 = document.getElementById("relieve1");
const relieve2 = document.getElementById("relieve2");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");

document.addEventListener("keydown", function(event){

    if(event.key.toLowerCase() === " " && !cont1){
        window.speechSynthesis.cancel();
        window.voz("posicionamiento");
        cont1 = true;
    };

    if((event.key.toLowerCase() === "f" || event.key.toLowerCase() === "j") && cont1 && !cont2){
        window.speechSynthesis.cancel();
        relieve1.classList.add("text-green-600");
        check1.textContent = "✓";
        window.voz("dedos");
        cont2 = true;
    };

    if((event.key.toLowerCase() === "d" || event.key.toLowerCase() === "s" || event.key.toLowerCase() === "k" || event.key.toLowerCase() === "l") && cont2 && !cont3){
        window.speechSynthesis.cancel();
        relieve2.classList.add("text-green-600");
        check2.textContent = "✓";
        window.voz("terminar");
        cont3 = true;
    };

    if(event.key.toLowerCase() === " " && cont3){
        window.speechSynthesis.cancel();
        window.location.href = "./tutorial2.html"
    };
    

});