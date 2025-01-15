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



const swiper = new Swiper('.swiper', {
    // Direction horizontale
    direction: 'horizontal',
    // Boucle infinie
    loop: true,
    
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    
    
    // Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

  


document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner toutes les Pokéballs
    const pokeballContainers = document.querySelectorAll(".pokeball-container");

    // Intersection Observer pour les animations au scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate");
                }
            });
        },
        {
            threshold: 0.5, // L'animation se déclenche lorsque 50% de l'élément est visible
        }
    );

    // Ajouter l'observer à chaque Pokéball
    pokeballContainers.forEach((container) => observer.observe(container));

    // Interactivité pour ouvrir/fermer les cartes
    pokeballContainers.forEach((container) => {
        container.addEventListener("click", () => {
            // Vérifie si la Pokéball est déjà active
            if (container.classList.contains("active")) {
                container.classList.remove("active");
            } else {
                // Fermer toutes les cartes actives
                document.querySelectorAll(".pokeball-container.active").forEach((activeContainer) => {
                    activeContainer.classList.remove("active");
                });

                // Activer la carte actuelle
                container.classList.add("active");
            }
        });
    });

    // Fermer les cartes en cliquant à l'extérieur
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".pokeball-container")) {
            document.querySelectorAll(".pokeball-container.active").forEach((activeContainer) => {
                activeContainer.classList.remove("active");
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const menuItem = document.querySelector(".menu-item-15 > a");

    if (menuItem) {
        menuItem.addEventListener("click", function(e) {
            e.preventDefault();  // Empêche le comportement par défaut du lien
            const targetId = ".pokeball-projects";
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"  // Défilement fluide
                });
            }
        });
    }
});
