// Factory dédiée à la lightbox

function lightboxFactory(medias, currentId) {

    let index = medias.findIndex(m => m.id === currentId);
    console.log(currentId)

    function displayLightbox() {

        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        if (medias[index].image === undefined){
            dom.innerHTML = `
            <button class="lightbox__close" onclick="closeLightbox()" aria-label="Close dialog">Fermer</button>
            <button class="lightbox__next" onclick="nextImage()" aria-label="Next image">Suivant</button>
            <button class="lightbox__prev" onclick="prevImage()" aria-label="Previous image">Précédent</button>
            <div class="lightbox__container" aria-label="image closeup view">
                <video controls autoplay>
                    <source src="assets/photos/Photographers ID photos/${medias[index].video}" alt="${medias[index].title}" type="video/mp4">
                </video>
                <h4>${medias[index].title}</h4>
            </div>
        `
        } else if (medias[index].video === undefined){
            dom.innerHTML = `
            <button class="lightbox__close" onclick="closeLightbox()" aria-label="Close dialog">Fermer</button>
            <button class="lightbox__next" onclick="nextImage()" aria-label="Next image">Suivant</button>
            <button class="lightbox__prev" onclick="prevImage()" aria-label="Previous image">Précédent</button>
            <div class="lightbox__container" aria-label="image closeup view">
                <img src="assets/photos/Photographers ID photos/${medias[index].image}" alt="${medias[index].title}">
                <h4>${medias[index].title}</h4>
            </div>
        `
        }
        
        const body = document.querySelector('body')
        body.appendChild(dom)
        console.log(medias[index])

        sessionStorage.setItem('idLightbox', ""+index )

        return (dom);
    }

    function displayNext() {
        
        let nextIndex = +sessionStorage.getItem('idLightbox') +1
        if (nextIndex === medias.length){
            nextIndex = 0
        }
        sessionStorage.setItem('idLightbox', ""+nextIndex)
        console.log(medias)
        const img = document.querySelector('.lightbox__container')
        if (medias[nextIndex].image === undefined) {
            img.innerHTML = `
            <video controls autoplay>
                <source src="assets/photos/Photographers ID photos/${medias[nextIndex].video}" alt="${medias[nextIndex].title}" type="video/mp4">
            </video>
            <h4>${medias[nextIndex].title}</h4>
            `
        } else if (medias[nextIndex].video === undefined) {
            img.innerHTML = `
            <img src="assets/photos/Photographers ID photos/${medias[nextIndex].image}" alt="${medias[nextIndex].title}">
            <h4>${medias[nextIndex].title}</h4>
            `
        }

        return (img);

    }

    function displayPrev() {
        
        let prevIndex = +sessionStorage.getItem('idLightbox') -1
        if (prevIndex === -1){
            prevIndex = medias.length -1
        }
        sessionStorage.setItem('idLightbox', ""+prevIndex)
        console.log(prevIndex)
        const img = document.querySelector('.lightbox__container')
        if (medias[prevIndex].image === undefined) {
            img.innerHTML = `
            <video controls autoplay>
                <source src="assets/photos/Photographers ID photos/${medias[prevIndex].video}" alt="${medias[prevIndex].title}" type="video/mp4">
                Votre explorateur ne supporte pas la balise video.
            </video>
            <h4>${medias[prevIndex].title}</h4>
            `
        } else if (medias[prevIndex].video === undefined) {
            img.innerHTML = `
            <img src="assets/photos/Photographers ID photos/${medias[prevIndex].image}" alt="${medias[prevIndex].title}">
            <h4>${medias[prevIndex].title}</h4>
            `
        }

        return (img);

    }


    return { displayLightbox, displayNext, displayPrev }
}