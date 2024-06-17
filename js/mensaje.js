export function mensaje(id) {
    const div = document.getElementById(id).textContent;
    const mensaje = new SpeechSynthesisUtterance(div);
    mensaje.rate=1;
    mensaje.pitch=2;
    
    window.speechSynthesis.speak(mensaje);
  }


