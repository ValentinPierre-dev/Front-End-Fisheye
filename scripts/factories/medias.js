function mediaFactory(data) {
    let { title, likes, image, id, video } = data;

    const photo = `assets/photos/Photographers ID photos/${image}`;
    const movie = `assets/photos/Photographers ID photos/${video}`;

    function likesPlus(id) {
        likes++;
    }

    function getUserMedias() {
        const media = document.createElement( 'article' );
        const imageOrVideo = movie.indexOf("mp4");
        if (imageOrVideo !== -1){
            media.innerHTML = `
            <video>
                <source src="${movie}#t=0.1" class="photos" alt="" onclick="openLightbox();currentSlide(1)">
            </video>
            <div class="portfolio__caption">
                <h4>${title}</h4>
                <div class="portfolio__caption--likes">
                    <p>${likes}</p>
                    <i class="fas fa-heart" onclick="likesPlus(${id})"></i>
                </div>
            </div>
        `
        } else {
            media.innerHTML = `
            <img src="${photo}" class="photos" alt="" onclick="openLightbox();currentSlide(1)">
            <div class="portfolio__caption">
                <h4>${title}</h4>
                <div class="portfolio__caption--likes">
                    <p>${likes}</p>
                    <i class="fas fa-heart" onclick="likesPlus(${id})"></i>
                </div>
            </div>
        `
        }

        return (media);
    }

    function getLightbox() {
        const lightbox = document.createElement( 'article' );
        lightbox.className = 'mySlides'
        lightbox.dataset.photoId = id;
        lightbox.innerHTML = `
            <img src="${photo}" style="width:100%">
            <h4>${title}</h4>
        `
        return (lightbox);
    }

    function getUserLikes(totalLikes) {
        const infoLikes = document.querySelector(".infos__likes");
        const total = document.createElement("p");
        total.innerText = `${totalLikes}`
        infoLikes.appendChild(total);

        return (infoLikes);
    }

    return { title, likes, image, video, getUserMedias, getLightbox, likesPlus, id, getUserLikes }
}