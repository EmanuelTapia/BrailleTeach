window.speechSynthesis.cancel();  
window.mensaje("Aprender Números");

fetch('http://localhost:8080/numero')
  .then(response => response.json())
  .then(data => {
    window.divs = [];
    data.forEach(item =>{

      let idNumero= item.idNumero;
      let numero = item.numero;
      let codigo = item.codigo;
      let cadena = codigo.toString().split('').join(' ');

      window.divs.push(
        {
          html: `
            <div class="flex items-center h-full w-7/12"">
              <div id="guia" class="flex justify-center items-center h-full w-4/12 ">
                  <button onclick="guia()" class="transition hover:scale-75"><img src="./ico/ico-sonido.png" alt="ico-sonido" class=" size-[15vh]"></button>
                  <p  class="hidden">Para formar el número ${numero}, presionar punto ${cadena}</p>
                  
              </div>
              <p id="mensajeExcelente" class="hidden">¡Excelente!. Presione 1 para el siguiente número.</p>
              <p id="mensajeExcelenteTerminar" class="hidden">¡Felicidades!. Terminaste el módulo Aprender Número. Presione 1 para terminar y regresar al menú de aprender.</p>
              <p id="mensajeIncorrecto" class="hidden">¡Incorrecto!. Presione 1 para volver a intentar</p>
              <div class="flex justify-center items-center h-full w-4/12 pb-[10vh]">
                  <p class="text-[40vh] font-serif font-medium">${numero}</p>
              </div>
              <div id="tablero"  class="flex justify-center items-center h-full w-4/12 space-x-[5vh] ">
                  <div class="flex flex-col space-y-[5vh]">
                      <div id="f" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                      <div id="d" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                      <div id="s" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                  </div>
                  <div class="flex flex-col space-y-[5vh]">
                      <div id="j" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                      <div id="k" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                      <div id="l" class="circle h-[8vh] w-[8vh]  rounded-full  border-[0.55vh] border-[#4A4444]"></div>
                  </div>
              </div>
            </div>
          `,
          id: 1,
          codigo: codigo
          
          
        },
      );
      mostrarModulo();
      
      
  })
  guia();
})
  .catch(error => console.error('Error:', error));


//DEFINICION DE VARIABLES

let cont = 0;
let isExecuting = false;
let codigoTablero;
const btnComprobar = document.getElementById('btnComprobar');

window.isOpenVentana = false;

let rpta = false;

//ACCIONES DE TECLADO
document.addEventListener('keydown', function(event) {
  
  if (isOpenVentana) {
    if(event.key.toLowerCase() === 'f'){
      window.speechSynthesis.cancel();  
      siguienteModulo();
      
    }

  }else{
    if (event.key.toLowerCase() === ' ') {
      window.speechSynthesis.cancel();  
      obtenerCirculosPintados();
      validacion();
    }

    if (event.key.toLowerCase() === 'g') {
      window.speechSynthesis.cancel();
      guia();
    }
  }
  
  
});


//METODOS
function obtenerCirculosPintados(){
  const circulosPintados = [];
  const circulos = document.querySelectorAll('.circle');

  const idToNumber = {
    f: '1',
    j: '4',
    d: '2',
    k: '5',
    s: '3',
    l: '6'
  };

  circulos.forEach((circle) =>{
    if (circle.classList.contains('bg-[#4A4444]')) {
      const numero = idToNumber[circle.id]; 
      circulosPintados.push(numero);
    }
  });
  codigoTablero = circulosPintados.join("");
  
}

//VALIDACION
function validacion(){
  let numeroCodigo = window.divs[cont].codigo;
  let numeroTablero = parseInt(codigoTablero);

  if (numeroCodigo === numeroTablero ) {
    excelente.classList.add('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-700');
    actualizarTextoBoton();
    if (cont === window.divs.length-1) {
      window.voz("mensajeExcelenteTerminar");
    } else{
      window.voz("mensajeExcelente");
    }
    rpta = true;
  } else {
    incorrecto.classList.add('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-700');
    window.voz("mensajeIncorrecto");
    rpta = false;
  }

  isOpenVentana = true;
}

//SIGUIENTE MODULO
function siguienteModulo() {
  isChangingModule = true;

  if (rpta) {
      excelente.classList.remove('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-1000');
      if (cont === window.divs.length - 1) {
          window.location.href = './aprender.html';
      } else {
          cont++;
          mostrarModulo();
          setTimeout(() => {
              guia();
              isChangingModule = false;
          }, 0); // Retrasar la reproducción de la guía para asegurar que el DOM esté completamente actualizado
      }
  } else {
      incorrecto.classList.remove('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-1000');
      mostrarModulo();
      setTimeout(() => {
          guia();
          isChangingModule = false;
      }, 0); // Retrasar la reproducción de la guía para asegurar que el DOM esté completamente actualizado
  }

  isOpenVentana = false;
}


function mostrarModulo(){
  const modulo = document.getElementById('modulo');
  const div = window.divs[cont];
  modulo.innerHTML = div.html;
  
}

function guia(){
  window.voz("guia");
}

