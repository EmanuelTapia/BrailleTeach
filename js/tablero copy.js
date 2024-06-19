let selectedVoice = null;

        // Función para cargar las voces disponibles y seleccionar una en español
        function loadVoices() {
            const voices = window.speechSynthesis.getVoices();
            // Seleccionar una voz en español
            selectedVoice = voices.find(voice => voice.lang.startsWith('es'));

            // Si no encuentra una voz en español, usa la primera voz disponible
            if (!selectedVoice) {
                selectedVoice = voices[0];
            }
        }

        // Cargar voces cuando están disponibles
        window.speechSynthesis.onvoiceschanged = loadVoices;

        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            const circle = document.querySelector(`.circle[data-key="${key}"]`);

            if (key === ' ') {
                // Si se presiona la tecla espacio, obtener los números pintados
                const paintedCircles = document.querySelectorAll('.circle.painted');
                const numbers = Array.from(paintedCircles).map(circle => {
                    const key = circle.getAttribute('data-key');
                    const keyToNumber = {
                        f: '1',
                        j: '4',
                        d: '2',
                        k: '5',
                        s: '3',
                        l: '6'
                    };
                    return keyToNumber[key];
                }).join('');

                // Mostrar los números en el input
                document.getElementById('output').value = numbers;

                // Verificar si están pintadas las teclas 3, 4, 5, 6
                const requiredKeys = ['s', 'j', 'k', 'l'];
                const requiredNumbers = requiredKeys.map(key => {
                    const keyToNumber = {
                        f: '1',
                        j: '4',
                        d: '2',
                        k: '5',
                        s: '3',
                        l: '6'
                    };
                    return keyToNumber[key];
                });

                const areRequiredNumbersPainted = requiredNumbers.every(num => numbers.includes(num));

                if (areRequiredNumbersPainted) {
                    // Verificar si los círculos sjkl están pintados
                    const sjklCircles = document.querySelectorAll('.circle[data-key="s"], .circle[data-key="j"], .circle[data-key="k"], .circle[data-key="l"]');
                    const areSJLKCirclesPainted = Array.from(sjklCircles).every(circle => circle.classList.contains('painted'));

                    if (areSJLKCirclesPainted) {
                        // Mover todos los divs con class circle al nuevo contenedor solo una vez
                        const newContainer = document.getElementById('new-container');
                        if (newContainer.classList.contains('hidden')) {
                            const mainContainer = document.getElementById('main-container');
                            const circles = Array.from(mainContainer.querySelectorAll('.circle'));

                            // Verificar si solo los círculos sjkl están pintados
                            const onlySJLKCirclesPainted = circles.every(circle => {
                                const key = circle.getAttribute('data-key');
                                return requiredKeys.includes(key) ? circle.classList.contains('painted') : !circle.classList.contains('painted');
                            });

                            if (onlySJLKCirclesPainted) {
                                // Crear clones de los círculos para el nuevo contenedor
                                circles.forEach(circle => {
                                    const clone = circle.cloneNode(true);
                                    if (circle.classList.contains('painted')) {
                                        clone.classList.add('painted');
                                    } else {
                                        clone.classList.remove('painted');
                                    }
                                    newContainer.appendChild(clone);
                                });

                                newContainer.classList.remove('hidden');

                                // Resetear los círculos en el contenedor original
                                circles.forEach(circle => {
                                    circle.classList.remove('painted');
                                });
                            }
                        }
                    }
                }

            } else if (circle) {
                circle.classList.toggle('painted');
                // Mapeo de teclas a números
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
                    utterance.voice = selectedVoice; // Establecer la voz seleccionada
                    window.speechSynthesis.speak(utterance);
                }
            }
        });