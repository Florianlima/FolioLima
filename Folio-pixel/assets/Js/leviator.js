const leviatorImg = document.getElementById('leviator-img');
const header = document.getElementById('header')
// Fonction pour obtenir des positions aléatoires
function getRandomPosition() {
    const x = Math.random() * (header.offsetWidth - leviatorImg.offsetWidth); // Largeur de l'écran - taille de l'image
    const y = Math.random() * (header.offsetHeight - leviatorImg.offsetHeight); // Hauteur de l'écran - taille de l'image
    return { x, y };
}

// Fonction pour déplacer l'image de façon fluide
function moveLeviator() {
    const { x, y } = getRandomPosition();
    
    // Applique une transition fluide pour chaque mouvement
    leviatorImg.style.transition = "transform 3s ease-in-out";
    leviatorImg.style.transform = `translate(${x}px, ${y}px)`; 

    // Rappelle la fonction toutes les 3 secondes pour un nouveau mouvement
    setTimeout(moveLeviator, 3000);
}

// Démarre le mouvement dès le début
moveLeviator();