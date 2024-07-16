
window.onload = function() {
    const modulo = document.getElementById('resultado');
    const correcto = localStorage.getItem('contCorrecto');  
    const reintentar = localStorage.getItem('contReintentar');  
    const conAyuda = localStorage.getItem('contAyuda'); 
    
    const puntacion = correcto*20+reintentar*10+conAyuda*5;
    
modulo.innerHTML = `
<div class="flex h-[10%]">

            </div>
            <div class="flex justify-center items-center h-[15%] w-full">
                <h1 class="text-[5vh] font-mono font-bold text-[#4A4444] tracking-[0.7vh]">RESULTADO</h1>
                
                <p id="puntuacion" class="hidden">Resultado, respondiste ${correcto} correcto, ${reintentar} reintentado y ${conAyuda} con ayuda. Tu puntuación final es ${puntacion} puntos. Presione 1 para regresar al menú de practicar.</p>
            </div>
            <div class="flex h-[10%]">

            </div>
            <div class="flex justify-center items-center h-full w-full ">
                <div class="flex flex-col h-full w-6/12">
                    <div class="flex  h-[8vh] w-full justify-center items-center text-green-600">
                        <p id="check1" class="text-[4vh] font-serif font-bold  mr-[4vh]">
                            ✓
                        </p>
                        <p id="" class="text-[2.5vh] font-sans font-medium mr-[3vh]">
                            ${correcto}
                        </p>
                        <p id="" class="text-[2.5vh] font-sans font-medium mr-[20vh]">
                            CORRECTO
                        </p>
                        <p class="text-[2.5vh] font-sans font-medium mr-[3vh]">
                            ${correcto*20}
                        </p>
                        <p class="text-[2.5vh] font-sans font-medium">
                            PUNTOS
                        </p>
                    </div>
                    <div class="flex  h-[8vh] w-full justify-center items-center text-blue-600">
                        <p id="check1" class="text-[4vh] font-serif font-bold mr-[4vh]">
                            ✓
                        </p>
                        <p id="" class="text-[2.5vh] font-sans font-medium mr-[3vh]">
                        ${reintentar}
                        </p>
                        <p id="" class="text-[2.5vh] font-sans font-medium mr-[17.5vh]">
                            REINTENTADO
                        </p>
                        <p class="text-[2.5vh] font-sans font-medium mr-[3vh]">
                        ${reintentar*10}
                        </p>
                        <p class="text-[2.5vh] font-sans font-medium">
                            PUNTOS
                        </p>
                    </div>
                    <div class="flex  h-[8vh] w-full justify-center items-center text-red-600">
                        <p id="check1" class="text-[4vh] font-serif font-bold mr-[4vh]">
                            ✓
                        </p>
                        <p id="" class="text-[2.5vh] font-sans font-medium mr-[3vh]">
                            ${conAyuda}
                        </p>
                        <p id="" class="text-[2.5vh] font-sans font-medium mr-[20vh]">
                            CON AYUDA
                        </p>
                        <p class="text-[2.5vh] font-sans font-medium mr-[3vh]">
                        ${conAyuda*5}
                        </p>
                        <p class="text-[2.5vh] font-sans font-medium">
                            PUNTOS
                        </p>
                    </div>
                    <div class="flex justify-center items-center h-[20vh] w-full text-[#4A4444]">
                        <p class="text-[2.5vh] font-sans font-medium mr-[20vh]">
                            PUNTUACIÓN TOTAL:
                        </p>
                        <p class="text-[2.5vh] font-sans font-medium mr-[3vh]">
                        ${puntacion}
                        </p>
                        <p class="text-[2.5vh] font-sans font-medium">
                            PUNTOS
                        </p>
                    </div>
                </div>
            </div>

`;
window.speechSynthesis.cancel();  
window.voz("puntuacion");

};



document.addEventListener('keydown', function(event) {
  
      if(event.key.toLowerCase() === 'f' && !window.isOpen){
        window.speechSynthesis.cancel();  
        window.location.replace("./practicar.html");
        
      };
})