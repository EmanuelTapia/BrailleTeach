var section = document.createElement('section');

section.id = 'modal';

section.className = 'flex justify-center items-center fixed inset-0 bg-[#111111bd] opacity-0 pointer-events-none ';

section.innerHTML = `
    <div id="modal_container" class="flex flex-col h-[60%] w-[50%] bg-slate-200 rounded-xl">

        <p id="opciones" class="hidden">Presione uno de las opciones, tecla 1 para Tutorial, 2 para Aprender, 3 para Practicar, 4 para Desafio y 5 para Mi Cuenta</p>
        <div class="flex justify-center items-center h-[15%] bg-slate-50 border-b-2 border-[#4A4444] rounded-xl">
            <h1 class="text-[6vh] text-[#4A4444] font-mono font-medium text-center tracking-[0.25vh] w-11/12">Módulos</h1>
            <button onclick="cerrarModal()" class="flex h-full w-1/12">
                <i class="fi fi-br-x flex justify-center items-center rounded-xl h-full w-full text-[4vh] text-red-500 hover:text-slate-50 hover:bg-red-500"></i>
            </button>
        </div>

        <div class="grid grid-cols-3 gap-4 place-items-center py-[5vh] px-[10vh] h-full w-full">
            <button onclick="tutorial()" class="flex flex-col space-y-[1vh] justify-center items-center bg-slate-50 p-[2vh] pb-0 size-auto rounded-[2vh] border-[0.3vh] border-red-400 transition hover:scale-75">
                <img src="./ico/ico-tutorial.png" alt="ico-tutorial" class="size-[8vh]">
                <p class="text-center font-mono text-[2vh]">Tutorial</p>
            </button>
            <button onclick="aprender()" class="flex flex-col space-y-[1vh] justify-center items-center bg-slate-50 p-[2vh] pb-0 size-auto rounded-[2vh] border-[0.3vh] border-slate-600 transition hover:scale-75">
                <img src="./ico/ico-aprender.png" alt="ico-tutorial" class="size-[8vh]">
                <p class="text-center font-mono text-[2vh]">Aprender</p>
            </button>
            <button onclick="practicar()" class="flex flex-col space-y-[1vh] justify-center items-center bg-slate-50 p-[2vh] pb-0 size-auto rounded-[2vh] border-[0.3vh] border-green-500 transition hover:scale-75">
                <img src="./ico/ico-practicar.png" alt="ico-tutorial" class="size-[8vh]">
                <p class="text-center font-mono text-[2vh]">Practicar</p>
            </button>
            <button onclick="desafio()" class="flex flex-col space-y-[1vh] justify-center items-center bg-slate-50 p-[2vh] pb-0 size-auto rounded-[2vh] border-[0.3vh] border-blue-500 transition hover:scale-75">
                <img src="./ico/ico-desafio.png" alt="ico-tutorial" class="size-[8vh]">
                <p class="text-center font-mono text-[2vh]">Desafío</p>
            </button>
            <button onclick="miCuenta()" class="flex flex-col space-y-[1vh] justify-center items-center bg-slate-50 p-[2vh] pb-0 size-auto rounded-[2vh] border-[0.3vh] border-orange-400 transition hover:scale-75">
                <img src="./ico/ico-miCuenta.png" alt="ico-tutorial" class="size-[8vh]">
                <p class="text-center font-mono text-[2vh]">Mi Cuenta</p>
            </button>
            <button onclick="administrar()" class="flex flex-col space-y-[1vh] justify-center items-center bg-slate-50 p-[2vh] pb-0 size-auto rounded-[2vh] border-[0.3vh] border-purple-500 transition hover:scale-75">
                <img src="./ico/ico-administrar.png" alt="ico-tutorial" class="size-[8vh]">
                <p class="text-center font-mono text-[2vh]">Administrar</p>
            </button>
            
        </div>
        
    </div>

`;

document.body.appendChild(section);

import { mensaje } from './mensaje.js';

const modal = document.getElementById('modal');
let isOpen = false;


document.addEventListener("keydown", function(event) {
    
  if (event.key === "Enter") {
    if (!isOpen) {
      modal.classList.add('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-700');
      mensaje("opciones");
      isOpen = true;

    } else {
      modal.classList.remove('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-1000');
      speechSynthesis.cancel();
      isOpen = false;
    }
  }

  if (event.key.toLowerCase() === "f") {
    location.assign("./tutorial.html");
    speechSynthesis.cancel();
    }
  if (event.key.toLowerCase() === "d") {
    location.assign("./aprender.html");
    speechSynthesis.cancel();
    }
  if (event.key.toLowerCase() === "s") {
    location.assign("./practicar.html");
    speechSynthesis.cancel();
    }
  if (event.key.toLowerCase() === "j") {
    location.assign("./desafio.html");
    speechSynthesis.cancel();
    }
  if (event.key.toLowerCase() === "k") {
    location.assign("./miCuenta.html");
    speechSynthesis.cancel();
    }
  if (event.key.toLowerCase() === "l") {
    location.assign("./administrar.html");
    speechSynthesis.cancel();
    }

});


window.tutorial = function(){
    location.assign("./tutorial.html");
    speechSynthesis.cancel();
  }
  window.aprender = function(){
    location.assign("./aprender.html");
    speechSynthesis.cancel();
  }
  window.practicar = function(){
    location.assign("./practicar.html");
    speechSynthesis.cancel();
  }
  window.desafio = function(){
    location.assign("./desafio.html");
    speechSynthesis.cancel();
  }
  window.miCuenta = function(){
    location.assign("./miCuenta.html");
    speechSynthesis.cancel();
  }
  window.administrar = function(){
    location.assign("./administrar.html");
    speechSynthesis.cancel();
  }

  window.cerrarModal = function(){
    modal.classList.remove('opacity-100', 'pointer-events-auto' , 'transition-opacity', 'duration-1000');
    isOpen = false;
    speechSynthesis.cancel();
  }
