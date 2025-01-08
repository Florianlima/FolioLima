document.addEventListener('DOMContentLoaded', () => {
    const startElement = document.getElementById('start');
    const welcomeElement = document.getElementById('welcome');
    const characterElement = document.getElementById('character');
    const dialogElement = document.getElementById('dialog');
    const menuElement = document.getElementById('menu');

    console.log("Script loaded successfully.");

    function typeWriter(element, text, delay = 100, callback) {
        let i = 0;
        element.textContent = '';
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                if (callback) callback();
            }
        }, delay);
    }

    // Masquer le menu au départ
    menuElement.style.display = 'none';

    startElement.addEventListener('click', () => {
        console.log("START clicked.");
        startElement.style.display = 'none';
        welcomeElement.style.display = 'block';
        typeWriter(welcomeElement, 'Bienvenue !', 100, () => {
            setTimeout(() => {
                welcomeElement.style.display = 'none';
                characterElement.style.display = 'block';
                characterElement.classList.add('show');
                setTimeout(() => {
                    dialogElement.style.display = 'block';
                    setTimeout(() => {
                       dialogElement.style.display = 'none';
                        // Afficher le menu à la fin
                        menuElement.style.display = 'block';
                    }, 5000); // Temps pour le dialogue
                }, 1500); // Attente que le personnage slide in
            }, 1000); // Délai après le texte de bienvenue
        });
    });
});
