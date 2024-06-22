document.addEventListener("keydown", function(event) {
    if (event.key === "g") {
      window.voz("guia");
    }
})

function guia(){
  window.voz("guia");
}

const divs = [
  
  {
    html: `
      <div class="flex items-center h-full w-7/12"">
        <div id="guia" class="flex justify-center items-center h-full w-4/12 ">
            <button onclick="guia()" class="transition hover:scale-75"><img src="./ico/ico-sonido.png" alt="ico-sonido" class=" size-[15vh]"></button>
            <p  class="hidden">Letra a, punto 1</p>
            
        </div>
        <div class="flex justify-center items-center h-full w-4/12 pb-[10vh]">
            <p class="text-[40vh] font-serif font-medium">a</p>
        </div>
        <div id="tablero"  class="flex justify-center items-center h-full w-4/12 space-x-[5vh] ">
            <div class="flex flex-col space-y-[5vh]">
                <div id="f" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="d" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="s" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
            <div class="flex flex-col space-y-[5vh]">
                <div id="j" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="k" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="l" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
        </div>
      </div>
    `,
    id: 1
  },
  {
    html: `
      <div class="flex items-center h-full w-7/12"">
        <div id="guia" class="flex justify-center items-center h-full w-4/12 ">
            <button onclick="guia()" class="transition hover:scale-75"><img src="./ico/ico-sonido.png" alt="ico-sonido" class=" size-[15vh]"></button>
            <p  class="hidden">Letra a, punto 1</p>
            
        </div>
        <div class="flex justify-center items-center h-full w-4/12 pb-[10vh]">
            <p class="text-[40vh] font-serif font-medium">b</p>
        </div>
        <div id="tablero"  class="flex justify-center items-center h-full w-4/12 space-x-[5vh] ">
            <div class="flex flex-col space-y-[5vh]">
                <div id="f" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="d" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="s" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
            <div class="flex flex-col space-y-[5vh]">
                <div id="j" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="k" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="l" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
        </div>
      </div>
    `,
    id: 2
  },
  {
    html: `
      <div class="flex items-center h-full w-7/12"">
        <div id="guia" class="flex justify-center items-center h-full w-4/12 ">
            <button onclick="guia()" class="transition hover:scale-75"><img src="./ico/ico-sonido.png" alt="ico-sonido" class=" size-[15vh]"></button>
            <p  class="hidden">Letra a, punto 1</p>
            
        </div>
        <div class="flex justify-center items-center h-full w-4/12 pb-[10vh]">
            <p class="text-[40vh] font-serif font-medium">c</p>
        </div>
        <div id="tablero"  class="flex justify-center items-center h-full w-4/12 space-x-[5vh] ">
            <div class="flex flex-col space-y-[5vh]">
                <div id="f" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="d" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="s" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
            <div class="flex flex-col space-y-[5vh]">
                <div id="j" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="k" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="l" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
        </div>
      </div>
    `,
    id: 3
  },
  {
    html: `
      <div class="flex items-center h-full w-7/12"">
        <div id="guia" class="flex justify-center items-center h-full w-4/12 ">
            <button onclick="guia()" class="transition hover:scale-75"><img src="./ico/ico-sonido.png" alt="ico-sonido" class=" size-[15vh]"></button>
            <p  class="hidden">Letra a, punto 1</p>
            
        </div>
        <div class="flex justify-center items-center h-full w-4/12 pb-[10vh]">
            <p class="text-[40vh] font-serif font-medium">d</p>
        </div>
        <div id="tablero"  class="flex justify-center items-center h-full w-4/12 space-x-[5vh] ">
            <div class="flex flex-col space-y-[5vh]">
                <div id="f" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="d" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="s" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
            <div class="flex flex-col space-y-[5vh]">
                <div id="j" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="k" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="l" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
        </div>
      </div>
    `,
    id: 4
  },
  {
    html: `
      <div class="flex items-center h-full w-7/12"">
        <div id="guia" class="flex justify-center items-center h-full w-4/12 ">
            <button onclick="guia()" class="transition hover:scale-75"><img src="./ico/ico-sonido.png" alt="ico-sonido" class=" size-[15vh]"></button>
            <p  class="hidden">Letra a, punto 1</p>
            
        </div>
        <div class="flex justify-center items-center h-full w-4/12 pb-[10vh]">
            <p class="text-[40vh] font-serif font-medium">e</p>
        </div>
        <div id="tablero"  class="flex justify-center items-center h-full w-4/12 space-x-[5vh] ">
            <div class="flex flex-col space-y-[5vh]">
                <div id="f" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="d" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="s" class="h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
            <div class="flex flex-col space-y-[5vh]">
                <div id="j" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="k" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                <div id="l" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
            </div>
        </div>
      </div>
    `,
    id: 5
  }
];

let cont = 0;

function siguienteModulo() {
  const modulo = document.getElementById('modulo');
  const div = divs[cont];
  modulo.innerHTML = div.html;

  if (cont === divs.length - 1) {
    // Mostrar botón de terminar
    const button = document.getElementById('siguiente');
    button.textContent = 'Terminar';
    button.onclick = () => {
      // Redirigir a otra vista
      window.location.href = './practicar.html';
    };
  } else {
    // Mostrar botón de siguiente
    const button = document.getElementById('siguiente');
    button.textContent = 'Siguiente';
    button.onclick = () => {
      cont++;
      siguienteModulo();
    };
  }
}

siguienteModulo();


