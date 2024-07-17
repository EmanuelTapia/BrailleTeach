window.speechSynthesis.cancel();  
window.mensaje("MUCHO - POCO - NADA");
window.voz("introduccion1");
window.voz("introduccion2");
window.voz("introduccion3");

fetch('http://localhost:8080/muchopoconada')
  .then(response => response.json())
  .then(data => {
    // Mezclar el arreglo de datos
    let shuffledData = data.sort(() => 0.5 - Math.random());

    // Seleccionar los primeros 5 elementos del arreglo mezclado
    let selectedData = shuffledData.slice(0, 5);

    // Procesar los 5 elementos seleccionados
    window.divs = [];
    let cont = 1;
    selectedData.forEach(item => {

      let idMuchoPocoNada = item.idMuchoPocoNada;
      let numero1 = item.numero1;
      let numero2 = item.numero2;
      let numero3 = item.numero3;
      let letra1 = item.letra1;
      let letra2 = item.letra2;
      let letra3 = item.letra3;
      let opcion1 = item.opcion1;
      let opcion2 = item.opcion2;
      let opcion3 = item.opcion3;
      let respuesta = item.respuesta;
      let respuesta2 = item.respuesta2;
      let codigo = item.codigo;

      let cadena = codigo.toString().split('').join(' ');
      

      window.divs.push(
        {
          
          html: `
            
            <div class="flex flex-col  items-center h-full w-6/12">

                <div class="flex justify-center items-center space-x-[5vh] h-[20%] w-full ">
                    <button onclick="guia()" class="transition hover:scale-75"><img src="./ico/ico-sonido.png" alt="ico-sonido" class=" size-[8vh]"></button>
                    <p class="text-[3vh] font-mono text-[#4A4444]">Identificar los números y ordenarlos</p>

                    <p id="pregunta" class="hidden">Pregunta ${cont}.</p>
                    <p id="guia" class="hidden">${numero1} ${numero2} ${numero3}. Opción ${letra1}, ${opcion1}. Opción ${letra2}, ${opcion2}. Opción ${letra3}, ${opcion3}</p>

                    <p id="ayuda" class="hidden">${numero1} ${numero2} ${numero3}. La respuesta correcta era la opción ${respuesta}, ${respuesta2}. Para formar la letra ${respuesta}, presionar punto ${cadena}</p>
                    <p id="mensajeExcelente" class="hidden">¡Excelente!. Presione 1 para la siguiente pregunta</p>
                    <p id="mensajeExcelenteTerminar" class="hidden">¡Felicidades!. Terminaste el juego Mucho-Poco-Nada. Presione 1 para obtener tu puntuación.</p>
                    <p id="mensajeIncorrecto" class="hidden">¡Incorrecto!. Presione 1 para volver a intentar, 2 para tener ayuda.</p>
                </div>
                
                <div class="flex justify-center items-center h-[20%] w-full space-x-[15vh]">
                    <p class="text-[7vh] font-mono ">${numero1}</p>
                    <p class="text-[7vh] font-mono ">${numero2}</p>
                    <p class="text-[7vh] font-mono ">${numero3}</p>
                </div>
                <div class="flex flex-col justify-center items-center h-[60%] w-full space-y-[3vh] ">
                    <div class="flex space-x-[3vh] ">
                      <p class="text-[3.5vh] font-mono text-[#4A4444]">${letra1})</p>
                      <p class="text-[3.5vh] font-mono text-[#4A4444]">${opcion1}</p>
                    </div>
                    <div class="flex space-x-[3vh]">
                      <p class="text-[3.5vh] font-mono text-[#4A4444]">${letra2})</p>
                      <p class="text-[3.5vh] font-mono text-[#4A4444]">${opcion2}</p>
                    </div>
                    <div class="flex space-x-[3vh]">
                      <p class="text-[3.5vh] font-mono text-[#4A4444]">${letra3})</p>
                      <p class="text-[3.5vh] font-mono text-[#4A4444]">${opcion3}</p>
                    </div>
                    
                </div>
            </div>
            
            <div id="tablero"  class="flex justify-center items-center h-full w-2/12 space-x-[5vh]">
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
          `,
          id: 1,
          codigo: codigo,
          
        },
      );
      mostrarModulo();
      cont++;
  });
  pregunta();
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
          window.location.replace("./resultadoMuchoPocoNada.html");
      } else {
          cont++;
          contNum++;
          mostrarModulo();
          setTimeout(() => {
            pregunta();
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
function pregunta(){
  window.voz("pregunta");
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

