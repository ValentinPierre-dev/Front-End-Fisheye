// Open the Lightbox
function openLightbox() {
    document.getElementById("myLightbox").style.display = "block";
}

// Close the Lightbox
function closeLightbox() {
    document.getElementById("myLightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    console.log(slides[0]);
    
}

window.addEventListener("keydown", function(e){
    if (e.defaultPrevented) {
        return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
}

    switch (e.key) {

        case "ArrowLeft": plusSlides(-1)
        break;

        case "ArrowRight": plusSlides(1)
        break;
        default: return; // Quitter lorsque cela ne gère pas l'événement touche.
    }
    
// Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    e.preventDefault();
}, true);