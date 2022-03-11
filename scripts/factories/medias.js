// Factory dédiée aux médias

function mediaFactory(data) {
    let { title, likes, image, id, video, date } = data;
    let alreadyLike;
    const photo = `assets/photos/Photographers ID photos/${image}`;
    const movie = `assets/photos/Photographers ID photos/${video}`;

    // Incrémentation des likes
    function likesPlus() {
        const heartToggler = document.getElementById('hearts-'+id);
        heartToggler.innerHTML = `<i class="fas fa-heart heartsChanger--heart full" onclick="likesMoins(${id})"></i>`;
        likes++;
        heartToggler.setAttribute("aria-label", likes+"Appuyez sur entrée pour dislike")
        heartToggler.focus()
        document.getElementById('likes-'+id).innerText = likes;
        this.alreadyLike = true;
    }

    // Décrémentation des likes
    function likesMoins() {
        const heartToggler = document.getElementById('hearts-'+id);
        heartToggler.innerHTML = `<i class="far fa-heart heartsChanger--heart empty" onclick="likesPlus(${id})"></i>`;
        likes--;
        heartToggler.setAttribute("aria-label", likes+"Appuyez sur entrée pour like")
        heartToggler.focus()
        document.getElementById('likes-'+id).innerText = likes;
        this.alreadyLike = false;
    }

    // Construit la section portfolio et fait la différence entre images et vidéos
    function getUserMedias() {
        const media = document.createElement( 'article' );
        const imageOrVideo = movie.indexOf("mp4");
        if (imageOrVideo !== -1){
            media.innerHTML = `
            <video class="photos" id="photo-${id}" onclick="openLightbox(${id})" onKeyUp="openLightboxAccess(event, ${id})" tabindex="0">
                <source src="${movie}#t=0.1" alt="${title}" aria-label="${title}, closeup view">
            </video>
            <div class="portfolio__caption">
                <h4>${title}</h4>
                <div class="portfolio__caption--likes">
                    <p class="photo-likes" id="likes-${id}">${likes}</p>
                    <div class="heartsChanger" id="hearts-${id}">
                        <i class="far fa-heart heartsChanger--heart empty" onclick="likesPlus(${id})" onKeyUp="likesPlusAccess(event, ${id})" aria-label="likes" tabindex="0"></i>
                    </div>  
                </div>
            </div>
        `
        } else {
            media.innerHTML = `
            <img src="${photo}" class="photos" id="photo-${id}" alt="${title}" onclick="openLightbox(${id})" onKeyUp="openLightboxAccess(event, ${id})" aria-label="${title}, closeup view" tabindex="0">
            <div class="portfolio__caption">
                <h4>${title}</h4>
                <div class="portfolio__caption--likes">
                    <p id="likes-${id}">${likes}</p>
                    <div class="heartsChanger" id="hearts-${id}" role="button" aria-live="polite" aria-label="${likes},Appuyez sur entrée pour liker" tabindex="0" onKeyUp="likesAccess(event, ${id})">
                        <i class="far fa-heart heartsChanger--heart empty" onclick="likesPlus(${id})"></i>
                    </div>
                </div>
            </div>
        `
        }

        return (media);
    }



    return { title, likes, image, video, getUserMedias, likesPlus, likesMoins, id, date, alreadyLike }
}