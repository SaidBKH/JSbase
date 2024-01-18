document.addEventListener("DOMContentLoaded", function() {
    const carres = document.querySelectorAll(".carre");

    carres.forEach(function(carre) {
        carre.addEventListener("click", function() {
            const estRouge = carre.classList.contains("rouge");

            if (estRouge) {
                carre.classList.remove("rouge");
            } else {
                carre.classList.add("rouge");
            }
        });
    });
});
