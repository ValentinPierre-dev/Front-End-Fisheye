// Factory dédiée à la ligntbox

function lightboxFactory(medias, currentId) {

    let index = medias.findIndex(m => m.id === currentId);

    function displayLightbox() {
        
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = `
            <button class="lightbox__close" onclick="closeLightbox()">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précédent</button>
            <div class="lightbox__container">
                <img src="assets/photos/Photographers ID photos/${medias[index].image}" alt="">
            </div>
        `
        const body = document.querySelector('body')
        body.appendChild(dom)

        return (dom);
    }



    return { displayLightbox }
}