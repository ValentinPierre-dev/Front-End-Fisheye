function mediaFactory(data) {
    let { title, likes, image, id } = data;

    const photo = `assets/photos/Photographers ID photos/${image}`;

    function likesPlus(id) {
        likes++;
    }

    function getUserMedias() {
        const media = document.createElement( 'article' );
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

    function getTotalLikes() {
        const likesArray = [likes];
        return (likesArray);
    }

    return { title, likes, image, getUserMedias, getLightbox, likesPlus, getTotalLikes, id }
}