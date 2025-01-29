/* Aniamtion Pokeball */

document.addEventListener("DOMContentLoaded", () => {
    
    const pokeballContainers = document.querySelectorAll(".pokeball-container");

    
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
            threshold: 0.5, 
        }
    );

    
    pokeballContainers.forEach((container) => observer.observe(container));

    
    pokeballContainers.forEach((container) => {
        container.addEventListener("click", () => {
            
            if (container.classList.contains("active")) {
                container.classList.remove("active");
            } else {
                
                document.querySelectorAll(".pokeball-container.active").forEach((activeContainer) => {
                    activeContainer.classList.remove("active");
                });

                
                container.classList.add("active");
            }
        });
    });

    
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".pokeball-container")) {
            document.querySelectorAll(".pokeball-container.active").forEach((activeContainer) => {
                activeContainer.classList.remove("active");
            });
        }
    });
});