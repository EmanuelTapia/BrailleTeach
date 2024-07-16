window.speechSynthesis.cancel();  
window.mensaje("Practicar Abecedario");

fetch('http://localhost:8080/abecedario')
  .then(response => response.json())
  .then(data => {
    // Mezclar el arreglo de datos
    let shuffledData = data.sort(() => 0.5 - Math.random());

    // Seleccionar los primeros 5 elementos del arreglo mezclado
    let selectedData = shuffledData.slice(0, 5);

    // Procesar los 5 elementos seleccionados
    window.divs = [];
    selectedData.forEach(item => {

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
                  <p  class="hidden">Formar la letra ${letra}.</p>
                  
              </div>
              <p id="ayuda" class="hidden">Para formar la letra ${letra}, presionar punto ${cadena}</p>
              <p id="mensajeExcelente" class="hidden">¡Excelente!. Presione 1 para la siguiente letra</p>
              <p id="mensajeExcelenteTerminar" class="hidden">¡Felicidades!. Terminaste el módulo Practicar Abecedario. Presione 1 para obtener tu puntuación.</p>
              <p id="" class="hidden">¡Felicidades!. Terminaste el módulo Practicar Abecedario. Presione 1 para terminar y regresar al menú de Practicar.</p>
              <p id="mensajeIncorrecto" class="hidden">¡Incorrecto!. Presione 1 para volver a intentar, 2 para tener ayuda.</p>
              <div class="flex justify-center items-center h-full w-4/12 pb-[10vh]">
                  <p class="text-[40vh] font-serif font-medium">${letra}</p>
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
let contNum = 1;
let circulos = [];
let checkIncorrecto = false;
let checkAyuda = false;

let contCorrecto = 0;
let contReintentar = 0;
let contAyuda = 0;


for (let i = 1; i <= 5; i++) {
  const circulo = document.getElementById(i);
  circulos.push(circulo)
}

const btnComprobar = document.getElementById('btnComprobar');
const contador = document.getElementById("contador");



window.isOpenVentana = false;

let rpta = false;
let rptaIncorrecto = false;

//ACCIONES DE TECLADO
document.addEventListener('keydown', function(event) {
  
  if (isOpenVentana) {
    if(event.key.toLowerCase() === 'f'){
      window.speechSynthesis.cancel();  
      rptaIncorrecto = true;
      siguienteModulo();
      
    }

    if(event.key.toLowerCase() === 'd'){
      window.speechSynthesis.cancel();  
      rptaIncorrecto = false;
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
  let check = document.getElementById(cont+1);

  if (numeroCodigo === numeroTablero ) {
    excelente.classList.add('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-700');
    actualizarTextoBoton();
    if (cont === window.divs.length-1) {
      window.voz("mensajeExcelenteTerminar");
    } else{
      window.voz("mensajeExcelente");
    }
    rpta = true;

    if(!checkIncorrecto && !checkAyuda){
      check.classList.add("text-green-600", "font-bold");
      contCorrecto++;
    }else if(checkIncorrecto){
      check.classList.add("text-blue-600", "font-bold");
      contReintentar++;
    }else if(checkAyuda){
      check.classList.add("text-red-600", "font-bold");
      contAyuda++;
    }
    
    check.textContent = "✓";
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
          window.location.replace("./resultadoPracticarAbecedario.html");
      } else {
          cont++;
          contNum++;
          mostrarModulo();
          setTimeout(() => {
            guia();
            isChangingModule = false;
        }, 0); // Retrasar la reproducción de la guía para asegurar que el DOM esté completamente actualizado
      }
  } else {
      incorrecto.classList.remove('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-1000');
      mostrarModulo();
      if (rptaIncorrecto) {
        setTimeout(() => {
           guia();
           isChangingModule = false;
       }, 0); 
       checkIncorrecto = true;
     }else{
       setTimeout(() => {
         ayuda();
         isChangingModule = false;
     }, 0); 
     checkAyuda = true;
     }
  }

  isOpenVentana = false;

}

function mostrarModulo(){
  const modulo = document.getElementById('modulo');
  const div = window.divs[cont];
  modulo.innerHTML = div.html;
  contador.textContent = contNum;

  checkIncorrecto = false;
  checkAyuda = false;
}

function guia(){
  window.voz("guia");
}

function ayuda(){
  window.speechSynthesis.cancel();
  window.voz("ayuda");
  
}

window.onbeforeunload = function() {
  localStorage.setItem('contCorrecto', contCorrecto);
  localStorage.setItem('contReintentar', contReintentar);
  localStorage.setItem('contAyuda', contAyuda);
};

