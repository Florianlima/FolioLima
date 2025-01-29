document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const menu = document.querySelector(".menu-pokemon");

    burgerMenu.addEventListener("click", function () {
        console.log("Clic détecté !");
        burgerMenu.classList.toggle("active"); 
        menu.classList.toggle("active"); 
        console.log("Classes après clic :", menu.classList);
    });
});
