
fetch('http://localhost:8080/abecedario')
  .then(response => response.json())
  .then(data => {
    window.divs = [];
    data.forEach(item =>{

      let idAbecedario= item.idAbecedario;
      let letra = item.letra;
      let codigo = item.codigo;
      let cadena = codigo.toString().split('').join(' ');

      window.divs.push(
        {
          html: `
            <div class="flex items-center h-full w-7/12"">
              <div id="guia" class="flex justify-center items-center h-full w-4/12 ">
                  <button onclick="guia()" class="transition hover:scale-75"><img src="./ico/ico-sonido.png" alt="ico-sonido" class=" size-[15vh]"></button>
                  <p  class="hidden">Para formar la letra ${letra}, presionar punto ${cadena}</p>
                  
              </div>
              <div class="flex justify-center items-center h-full w-4/12 pb-[10vh]">
                  <p class="text-[40vh] font-serif font-medium">${letra}</p>
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
          id: idAbecedario
        },
      );
      siguienteModulo();
  })
})
  .catch(error => console.error('Error:', error));


let cont = 0;
let isExecuting = false;
let paintedCircles = [];

function siguienteModulo() {
  if (isExecuting) return;
  isExecuting = true;

  const modulo = document.getElementById('modulo');
  const div = window.divs[cont];
  modulo.innerHTML = div.html;

  if (cont === window.divs.length - 1) {
    // Mostrar botón de terminar
    const button = document.getElementById('siguiente');
    button.textContent = 'Terminar';
    button.onclick = () => {
      // Redirigir a otra vista
      window.speechSynthesis.cancel();
      window.location.href = './practicar.html';
    };
  } else {
    
    // Mostrar botón de siguiente
    const button = document.getElementById('siguiente');
    button.textContent = 'Siguiente';
    button.onclick = () => {
      cont++;
      window.speechSynthesis.cancel();
      siguienteModulo();
    };
  };

  isExecuting = false;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'g') {
    window.speechSynthesis.cancel();
    window.voz("guia");
  }
  if (event.key === ' ') {
    cont++; // Incrementar cont antes de evaluar la condición
    if (cont === window.divs.length) {
      // Redirigir a otra vista si se está en el último módulo
      window.speechSynthesis.cancel();
      window.location.href = './practicar.html';
    } else {
      window.speechSynthesis.cancel();
      siguienteModulo();
      window.voz("guia");
    }
  }
});

function guia(){
  
  window.voz("guia");
}