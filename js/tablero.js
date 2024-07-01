let isChangingModule = false;
document.addEventListener('keydown', function(event) {
    if (!window.isOpen && !window.isOpenVentana && !isChangingModule) {
        const key = event.key.toLowerCase();
        const div = document.getElementById(key);
        if (div) {
            div.classList.toggle("bg-[#4A4444]");
        }

        const keyToNumber = {
            f: '1',
            j: '4',
            d: '2',
            k: '5',
            s: '3',
            l: '6'
        };

        const number = keyToNumber[key];

        if (number) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(`${number}`);
            utterance.rate = 1;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        }
    }
});
