import { mensaje } from './mensaje.js';

document.addEventListener("keydown", function(event) {
    if (event.key === "g") {
      mensaje("guia")
    }
})