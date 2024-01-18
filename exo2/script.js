

document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll(".square");
    const bottomSquare = document.getElementById("square5");
    const colorCode = document.getElementById("colorCode");

    squares.forEach(function(square) {
        square.addEventListener("click", function() {
            // Récupère la couleur du carré cliqué
            const selectedColor = getComputedStyle(square).backgroundColor;

            // Change la couleur du carré en bas
            bottomSquare.style.backgroundColor = selectedColor;

            // Met à jour le texte dans le carré en bas avec le code couleur au format RGB
            colorCode.textContent = rgbToRgbString(selectedColor);
        });
    });

    function rgbToRgbString(color) {
        return color;
    }
});
