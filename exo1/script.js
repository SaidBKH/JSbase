



// Sélectionne l'élément avec l'ID "square" dans le document HTML et le stocke dans la constante square.
const square = document.querySelector(".carre");

// Ajoute un écouteur d'événements pour le clic sur le carré.
square.addEventListener("click", function() {
   
    // Récupère les styles calculés (y compris ceux définis dans les feuilles de style) de l'élément square.
   const style = getComputedStyle(square);
   
   // Construit un message avec les informations demandées, en utilisant les propriétés extraites des styles.
   
   const message = `
   class : ${square.className}
   background color: ${style.backgroundColor}
    Color : ${style.color}
   height : ${style.height}
   width : ${style.width}
   display : ${style.display}
   Police : ${style.fontFamily}
   Taille : ${style.fontSize} 
   `;
   // Affiche une boîte de dialogue (alerte) avec le message construit.
   alert(message);
});