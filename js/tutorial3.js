window.speechSynthesis.cancel();
window.voz("bienvenida");

let cont1 = false;
let cont2 = false;
let cont3 = false;

const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");
const paso3 = document.getElementById("paso3");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

document.addEventListener("keydown", function(event){

    if(event.key.toLowerCase() === " " && !cont1){
        window.speechSynthesis.cancel();
        window.voz("audio");
        cont1 = true;
    };

    if(event.key.toLowerCase() === "g" && cont1 && !cont2){
        window.speechSynthesis.cancel();
        paso1.classList.add("text-green-600");
        check1.textContent = "✓";
        img1.classList.add("hidden");
        img2.classList.remove("hidden");
        window.voz("espacio");
        cont2 = true;
    };

    if(event.key.toLowerCase() === " " && cont2 && !cont3){
        window.speechSynthesis.cancel();
        paso2.classList.add("text-green-600");
        check2.textContent = "✓";
        img2.classList.add("hidden");
        img3.classList.remove("hidden");
        window.voz("terminar");
        cont3 = true;
    };

    if(event.key.toLowerCase() === "h" && cont3){
        window.speechSynthesis.cancel();
        paso3.classList.add("text-green-600");
        check3.textContent = "✓";
    };

    

});