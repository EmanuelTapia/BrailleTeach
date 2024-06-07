var section = document.createElement('section');

section.id = 'modal';

section.className = 'flex justify-center items-center fixed inset-0 bg-[#111111bd] opacity-0 pointer-events-none ';

section.innerHTML = `
    <div id="modal_container" class="flex flex-col h-[40%] w-[40%] bg-slate-50 rounded-xl">
        <h1 class="text-[4vh] font-sans font-medium text-center">Opciones</h1>
        <button id="close_modal">Cerrar opciones</button>
    </div>

`;

document.body.appendChild(section);

const modal = document.getElementById('modal');

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Verificar si se presionó la tecla espacio
        modal.classList.add('opacity-100', 'pointer-events-auto', 'transition-opacity', 'duration-700');
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") { // Verificar si se presionó la tecla espacio
        modal.classList.remove('opacity-100', 'pointer-events-auto' , 'transition-opacity', 'duration-1000');
    }
  });