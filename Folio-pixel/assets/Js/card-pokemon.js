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