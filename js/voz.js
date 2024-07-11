window.voz = function(id){
    const div = document.getElementById(id).textContent;
    const mensaje = new SpeechSynthesisUtterance(div);
    mensaje.rate=1;
    mensaje.pitch=1;
    
    window.speechSynthesis.speak(mensaje);
}

window.mensaje = function(texto){
    const mensaje = new SpeechSynthesisUtterance(`${texto}`);
    mensaje.rate=1;
    mensaje.pitch=1;
    
    window.speechSynthesis.speak(mensaje);
}
