document.addEventListener('keydown', function(event) {
    if (!window.isOpen) {
        const key = event.key.toLowerCase();
        const div = document.getElementById(key);
        div.classList.toggle("bg-[#4A4444]");

        const keyToNumber = {
            f: '1',
            j: '4',
            d: '2',
            k: '5',
            s: '3',
            l: '6'
        };

        // Obtener el número correspondiente
        const number = keyToNumber[key];

        if (number) {
            // Cancelar cualquier síntesis de voz en progreso
            window.speechSynthesis.cancel();

            // Crear y hablar el nuevo número inmediatamente
            const utterance = new SpeechSynthesisUtterance(`${number}`);
            utterance.rate = 1; // Ajusta la velocidad aquí (2 es el doble de rápido)
            utterance.pitch = 1; // Ajusta el tono aquí (1 es normal)
            window.speechSynthesis.speak(utterance);
        }
    }
    
});