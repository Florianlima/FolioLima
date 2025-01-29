/*  Modal de contact  */
document.addEventListener("DOMContentLoaded", function () {
    const modalContainer = document.querySelector(".modal-container");
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".modal");
    const contactLinks = document.querySelectorAll(".menu-item-14 > a , .menu-item-30 > a");

    
    contactLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            toggleModal();
        });
    });

    
    overlay.addEventListener("click", toggleModal);

    modalContainer.addEventListener("click", function (event) {
        if (event.target === modalContainer) {
            toggleModal();
        }
    });

    
    function toggleModal() {
        modalContainer.classList.toggle("active");
    }
});

/* Modal Character */

document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const characterModal = document.getElementById('characterModal');
    const closeCharacterModal = document.getElementById('closeCharacterModal');

    if (character && characterModal && closeCharacterModal) {
       
        character.addEventListener('click', () => {
            characterModal.classList.add('show');
        });

        
        closeCharacterModal.addEventListener('click', () => {
            characterModal.classList.remove('show');
        });

        
        characterModal.addEventListener('click', (e) => {
            if (e.target === characterModal) {
                characterModal.classList.remove('show');
            }
        });
    } else {
        console.error('Certains éléments nécessaires pour la modale du personnage sont introuvables.');
    }
});

/* Click Projet */

document.addEventListener("DOMContentLoaded", () => {
    const menuItem = document.querySelector(".menu-item-15 > a");

    if (menuItem) {
        menuItem.addEventListener("click", function(e) {
            e.preventDefault();  
            const targetId = ".pokeball-projects";
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"  
                });
            }
        });
    }
});



