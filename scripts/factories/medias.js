function mediaFactory(data) {
    const { title, likes, image } = data;

    const photo = `assets/photos/Photographers ID photos/${image}`;

    function likesPlus() {
        likes++;
    }

    function getUserMedias() {
        const media = document.createElement( 'article' );
        media.innerHTML = `
            <img src="${photo}" alt="" onclick="openLightbox();currentSlide(1)">
            <div class="portfolio__caption">
                <h4>${title}</h4>
                <div class="portfolio__caption--likes">
                    <p>${likes}</p>
                    <i class="fas fa-heart" onclick="likesPlus()"></i>
                </div>
            </div>
        `
        return (media);
    }

    function getLightbox() {
        const lightbox = document.createElement( 'article' );
        lightbox.className = 'mySlides'
        lightbox.innerHTML = `
            <img src="${photo}" style="width:100%">
            <h4>${title}</h4>
        `
        return (lightbox);
    }

    return { title, likes, image, getUserMedias, getLightbox, likesPlus }
}