// Exécute le code lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function() {
    
    // Sélectionne toutes les icônes
    const icons = document.querySelectorAll(".icon-container");
    

    //const bgColor = window.getComputedStyle(icon).getPropertyValue('background-color')//
    // Pour chaque icône, ajoute un écouteur d'événements pour le clic
    
    icons.forEach(function(iconContainer) {
        iconContainer.addEventListener("click", function() {
         
            const icon = iconContainer.querySelector(".icon");
            // Ajoute la classe "clicked" uniquement à l'icône cliquée
           
             icon.classList.toggle("clicked");
             //  La méthode toggleClass() bascule entre l'ajout et la suppression
            //  d'une ou plusieurs classes pour les éléments sélectionnés.
           
            // Récupère la valeur de l'attribut data-social de l'icône cliquée
            const socialMedia = icon.getAttribute("data-social");
            
            // Change la couleur de fond du corps de la page en fonction du réseau social
            document.body.className = socialMedia + "-bgcolor";

        });
    });

}
)


