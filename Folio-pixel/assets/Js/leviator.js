const leviatorImg = document.getElementById('leviator-img');
const header = document.getElementById('header')

function getRandomPosition() {
    const x = Math.random() * (header.offsetWidth - leviatorImg.offsetWidth); // Largeur de l'écran - taille de l'image
    const y = Math.random() * (header.offsetHeight - leviatorImg.offsetHeight); // Hauteur de l'écran - taille de l'image
    return { x, y };
}


function moveLeviator() {
    const { x, y } = getRandomPosition();
    
    
    leviatorImg.style.transition = "transform 3s ease-in-out";
    leviatorImg.style.transform = `translate(${x}px, ${y}px)`; 

    
    setTimeout(moveLeviator, 3000);
}


moveLeviator();