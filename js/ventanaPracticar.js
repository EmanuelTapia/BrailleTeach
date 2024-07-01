var section1 = document.createElement('section');

section1.id = 'excelente';

section1.className = 'flex justify-center items-center fixed inset-0 bg-[#111111bd] opacity-0 pointer-events-none ';

section1.innerHTML = `
    <div id="excelente_container" class="flex flex-col h-[25%] w-[30%] bg-green-600 rounded-xl">

        <div class="flex justify-center items-center h-[50%] rounded-xl">
            <span id="textExcelente" class="text-[6vh] text-slate-50 font-mono font-medium text-center tracking-[0.25vh]">¡Excelente!</span>
        </div>

        <div class="flex items-center justify-center h-[40%] w-full">
            <button id="" onclick="" class="flex justify-center transition hover:scale-75">
                    <span id="btnText" class="flex items-center text-green-600 text-[2.5vh] font-medium px-[4vh] py-2 bg-slate-50 rounded-[1.5vh]">Siguiente</span>
            </button>
            
        </div>
        
        
    </div>

`;

document.body.appendChild(section1);

var section2 = document.createElement('section');

section2.id = 'incorrecto';

section2.className = 'flex justify-center items-center fixed inset-0 bg-[#111111bd] opacity-0 pointer-events-none ';

section2.innerHTML = `
    <div id="incorrecto_container" class="flex flex-col h-[25%] w-[30%] bg-red-600 rounded-xl">

        <div class="flex justify-center items-center h-[50%] rounded-xl">
            <h1 class="text-[6vh] text-slate-50 font-mono font-medium text-center tracking-[0.25vh]">¡Incorrecto!</h1>
        </div>

        <div class="flex items-center justify-center h-[40%] w-full space-x-[10vh]">
            <button id="" class="flex justify-center transition hover:scale-75 ">
                    <p id="btnAyuda" class="flex items-center text-green-600 text-[2.5vh] font-medium px-[4vh] py-2 bg-slate-50 rounded-[1.5vh]">Ayuda</p>
            </button>

            <button id="" class="flex justify-center transition hover:scale-75">
                    <p id="btnReintentar" class="flex items-center text-red-600 text-[2.5vh] font-medium px-[4vh] py-2 bg-slate-50 rounded-[1.5vh]">Reintentar</p>
            </button>
            
        </div>
        
        
    </div>

`;

document.body.appendChild(section2);

const excelente = document.getElementById('excelente');
const incorrecto = document.getElementById('incorrecto');
const btnSiguiente = document.getElementById('btnSiguiente');

// Función para cambiar el texto del botón según el estado del módulo
function actualizarTextoBoton() {
    const btnText = document.getElementById('btnText');
    const textExcelente = document.getElementById('textExcelente');
    if (cont === window.divs.length - 1) {
        btnText.textContent = 'Terminar';
        textExcelente.textContent = '¡Felicidades!';
    } else {
        btnText.textContent = 'Siguiente';
        textExcelente.textContent = '¡Excelente!';
    }
}

