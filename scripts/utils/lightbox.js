// Factory dédiée à la ligntbox

function lightboxFactory(medias, currentId) {

    let index = medias.findIndex(m => m.id === currentId);
    console.log(currentId)

    function displayLightbox() {

        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = `
            <button class="lightbox__close" onclick="closeLightbox()">Fermer</button>
            <button class="lightbox__next" onclick="nextImage()">Suivant</button>
            <button class="lightbox__prev" onclick="prevImage()">Précédent</button>
            <div class="lightbox__container">
                <img src="assets/photos/Photographers ID photos/${medias[index].image}" alt="">
            </div>
        `
        const body = document.querySelector('body')
        body.appendChild(dom)
        console.log(medias[index])

        localStorage.setItem('idLightbox', ""+index )

        return (dom);
    }

    function displayNext() {
        
        let nextIndex = +localStorage.getItem('idLightbox') +1
        if (nextIndex === medias.length){
            nextIndex = 0
        }
        localStorage.setItem('idLightbox', ""+nextIndex)
        console.log(nextIndex)
        const img = document.querySelector('.lightbox__container')
        img.innerHTML = `<img src="assets/photos/Photographers ID photos/${medias[nextIndex].image}" alt="">`

        return (img);

    }

    function displayPrev() {
        
        let prevIndex = +localStorage.getItem('idLightbox') -1
        if (prevIndex === -1){
            prevIndex = medias.length -1
        }
        localStorage.setItem('idLightbox', ""+prevIndex)
        console.log(prevIndex)
        const img = document.querySelector('.lightbox__container')
        img.innerHTML = `<img src="assets/photos/Photographers ID photos/${medias[prevIndex].image}" alt="">`

        return (img);

    }


    return { displayLightbox, displayNext, displayPrev }
}