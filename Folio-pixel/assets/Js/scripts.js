/*  Modal de contact  */
document.addEventListener("DOMContentLoaded", function () {
    const modalContainer = document.querySelector(".modal-container");
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".modal");
    const contactLinks = document.querySelectorAll(".menu-item-14 > a , .menu-item-30 > a");

    // Ajout d'un écouteur sur chaque lien "Contact"
    contactLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche la navigation
            toggleModal();
        });
    });

    // Ajout d'un écouteur pour fermer la modal via l'overlay ou le bouton de fermeture
    overlay.addEventListener("click", toggleModal);

    modalContainer.addEventListener("click", function (event) {
        if (event.target === modalContainer) {
            toggleModal();
        }
    });

    // Fonction pour basculer la modal
    function toggleModal() {
        modalContainer.classList.toggle("active");
    }
});





/* header */

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





